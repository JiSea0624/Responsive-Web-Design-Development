const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const port = 3000;

// ================ CORS MIDDLEWARE ================ //
app.use((req, res, next) => {
    // Allow requests from any origin during development
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Allow specific methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // Allow specific headers
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // If it's an OPTIONS request (preflight), send OK
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    
    next();
});

// ================ EXPRESS MIDDLEWARE ================ //
app.use(express.static('public'));
app.use(express.json());

// ================ FILE PATHS ================ //
const USERS_FILE = 'users.json';
const COMMENTS_FILE = 'comments.json';

// ================ HELPER FUNCTIONS ================ //
async function initUsersFile() {
    try {
        await fs.access(USERS_FILE);
    } catch {
        await fs.writeFile(USERS_FILE, JSON.stringify({ users: [] }));
    }
}

async function initCommentsFile() {
    try {
        await fs.access(COMMENTS_FILE);
    } catch {
        await fs.writeFile(COMMENTS_FILE, JSON.stringify({ comments: [] }));
    }
}

async function readUsers() {
    try {
        const data = await fs.readFile(USERS_FILE, 'utf8');
        console.log('readUsers file content:', data);
        const parsed = JSON.parse(data);
        console.log('readUsers parsed:', parsed);
        return parsed;
    } catch (error) {
        console.error('Error in readUsers:', error);
        return { users: [] };
    }
}

async function writeUsers(usersData) {
    try {
        // Ensure we have the right structure with ALL user properties preserved
        const dataToWrite = {
            users: usersData.users || usersData || []
        };
        
        // Preserve any existing metadata if present
        if (usersData._meta) {
            dataToWrite._meta = usersData._meta;
        }
        
        console.log('💾 Writing users data structure:', JSON.stringify(dataToWrite, null, 2));
        
        await fs.writeFile(USERS_FILE, JSON.stringify(dataToWrite, null, 2), 'utf8');
        console.log('✅ File written successfully with', dataToWrite.users.length, 'users');
        
    } catch (error) {
        console.error('❌ Error writing users file:', error);
        try {
            require('fs').writeFileSync(USERS_FILE, JSON.stringify(dataToWrite, null, 2), 'utf8');
            console.log('✅ File written with sync method');
        } catch (syncError) {
            console.error('❌ Sync write also failed:', syncError);
            throw error;
        }
    }
}

async function readComments() {
    try {
        const data = await fs.readFile(COMMENTS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return { comments: [] };
    }
}

async function writeComments(comments) {
    await fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 2));
}

// ================ USER AUTHENTICATION ENDPOINTS ================ //
// Register endpoint
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Validation
        if (!username || !email || !password) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }
        
        if (username.length < 3) {
            return res.status(400).json({ 
                success: false, 
                message: 'Username must be at least 3 characters' 
            });
        }
        
        if (password.length < 6) {
            return res.status(400).json({ 
                success: false, 
                message: 'Password must be at least 6 characters' 
            });
        }
        
        if (!email.includes('@')) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid email format' 
            });
        }
        
        const usersData = await readUsers();
        
        // Check if user exists
        const existingUser = usersData.users.find(u => 
            u.username === username || u.email === email
        );
        
        if (existingUser) {
            return res.status(400).json({ 
                success: false, 
                message: 'Username or email already exists' 
            });
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            username,
            email,
            password, 
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
        };
        
        usersData.users.push(newUser);
        await writeUsers(usersData);
        
        // Don't send password back
        const { password: _, ...userWithoutPassword } = newUser;
        
        res.json({
            success: true,
            message: 'Registration successful!',
            user: userWithoutPassword
        });
        
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error during registration' 
        });
    }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ 
                success: false, 
                message: 'Username and password required' 
            });
        }
        
        const usersData = await readUsers();
        
        // Find user (in production, compare hashed passwords)
        const user = usersData.users.find(u => 
            u.username === username && u.password === password
        );
        
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid username or password' 
            });
        }
        
        // Update last login
        user.lastLogin = new Date().toISOString();
        await writeUsers(usersData);
        
        // Don't send password back
        const { password: _, ...userWithoutPassword } = user;
        
        res.json({
            success: true,
            message: 'Login successful!',
            user: userWithoutPassword
        });
        
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error during login' 
        });
    }
});

// Get current user (for session persistence)
app.get('/api/current-user', async (req, res) => {
    try {
        const userId = parseInt(req.query.userId);
        
        if (!userId) {
            return res.json({ user: null });
        }
        
        const usersData = await readUsers();
        const user = usersData.users.find(u => u.id === userId);
        
        if (user) {
            const { password: _, ...userWithoutPassword } = user;
            res.json({ user: userWithoutPassword });
        } else {
            res.json({ user: null });
        }
        
    } catch (error) {
        console.error('Get user error:', error);
        res.json({ user: null });
    }
});

// ================ PASSWORD RESET ENDPOINTS ================ //
// Simple password reset (no email needed)
app.post('/api/reset-password-simple', async (req, res) => {
    try {
        const { username, currentPassword, newPassword, confirmPassword } = req.body;
        
        console.log('🔑 RESET PASSWORD REQUEST:', { 
            username, 
            currentPasswordLength: currentPassword?.length,
            newPasswordLength: newPassword?.length,
            confirmPasswordLength: confirmPassword?.length 
        });
        
        // VALIDATION
        if (!username || !currentPassword || !newPassword || !confirmPassword) {
            console.log('❌ Missing required fields');
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }
        
        if (newPassword.length < 6) {
            console.log('❌ Password too short');
            return res.status(400).json({ 
                success: false, 
                message: 'New password must be at least 6 characters' 
            });
        }
        
        if (newPassword !== confirmPassword) {
            console.log('❌ Passwords do not match');
            return res.status(400).json({ 
                success: false, 
                message: 'New password and confirmation do not match' 
            });
        }
        
        const usersData = await readUsers();
        console.log('📋 Current users in DB:', JSON.stringify(usersData, null, 2));
        
        const userIndex = usersData.users.findIndex(u => u.username === username);
        console.log('🔍 User index found:', userIndex);
        
        if (userIndex === -1) {
            console.log('❌ Username not found:', username);
            return res.status(400).json({ 
                success: false, 
                message: 'Username not found' 
            });
        }
        
        const user = usersData.users[userIndex];
        console.log('👤 Found user:', { 
            id: user.id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
            lastLogin: user.lastLogin,
            storedPassword: user.password,
            inputPassword: currentPassword 
        });
        
        // Verify current password
        if (user.password !== currentPassword) {
            console.log('❌ Password mismatch');
            return res.status(400).json({ 
                success: false, 
                message: 'Current password is incorrect' 
            });
        }
        
        // Don't allow same password
        if (currentPassword === newPassword) {
            console.log('❌ Same password not allowed');
            return res.status(400).json({ 
                success: false, 
                message: 'New password cannot be the same as current password' 
            });
        }
        
        // Update ONLY the password and lastModified - keep everything else
        console.log('🔄 Updating password for user:', user.username);
        console.log('📝 User data before update:', {
            id: user.id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
            lastLogin: user.lastLogin,
            oldPassword: user.password
        });
        
        // Create updated user object - preserve all existing fields
        const updatedUser = {
            ...user,  // Spread all existing user properties
            password: newPassword,  // Update password
            lastModified: new Date().toISOString()  // Add/update modification timestamp
        };
        
        // Update in array
        usersData.users[userIndex] = updatedUser;
        
        console.log('💾 Writing updated users data...');
        await writeUsers(usersData);
        
        console.log('✅ Password updated successfully for user:', username);
        console.log('📝 User data after update:', {
            id: updatedUser.id,
            username: updatedUser.username,
            email: updatedUser.email,
            createdAt: updatedUser.createdAt,
            lastLogin: updatedUser.lastLogin,
            lastModified: updatedUser.lastModified
        });
        
        res.json({
            success: true,
            message: 'Password has been updated successfully!',
            user: {
                id: updatedUser.id,
                username: updatedUser.username,
                email: updatedUser.email,
                createdAt: updatedUser.createdAt,
                lastLogin: updatedUser.lastLogin,
                lastModified: updatedUser.lastModified
            }
        });
        
    } catch (error) {
        console.error('🔥 Reset password error:', error);
        console.error('🔥 Error stack:', error.stack);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to update password: ' + error.message 
        });
    }
});

// Check if username exists (for verification)
app.post('/api/check-username', async (req, res) => {
    try {
        const { username } = req.body;
        
        if (!username) {
            return res.status(400).json({ 
                success: false, 
                message: 'Username is required' 
            });
        }
        
        const usersData = await readUsers();
        const user = usersData.users.find(u => u.username === username);
        
        res.json({
            success: true,
            exists: !!user,
            message: user ? 'Username found' : 'Username not found'
        });
        
    } catch (error) {
        console.error('Check username error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to check username' 
        });
    }
});

// Debug endpoint to see complete user data
app.get('/api/debug-user/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const usersData = await readUsers();
        const user = usersData.users.find(u => u.username === username);
        
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: 'User not found' 
            });
        }
        
        res.json({
            success: true,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                createdAt: user.createdAt,
                lastLogin: user.lastLogin,
                lastModified: user.lastModified,
                passwordLength: user.password ? user.password.length : 0,
                hasPassword: !!user.password
            },
            allFields: Object.keys(user)
        });
        
    } catch (error) {
        res.status(500).json({ 
            error: error.message,
            stack: error.stack 
        });
    }
});

// Test endpoint to manually update a user's password
app.post('/api/test-update-password', async (req, res) => {
    try {
        const { username, newPassword } = req.body;
        
        console.log('🧪 TEST UPDATE PASSWORD:', { username, newPassword });
        
        const usersData = await readUsers();
        const userIndex = usersData.users.findIndex(u => u.username === username);
        
        if (userIndex === -1) {
            return res.status(400).json({ 
                success: false, 
                message: 'User not found' 
            });
        }
        
        usersData.users[userIndex].password = newPassword;
        usersData.users[userIndex].lastModified = new Date().toISOString();
        
        await writeUsers(usersData);
        
        res.json({
            success: true,
            message: 'Test password update successful',
            user: usersData.users[userIndex]
        });
        
    } catch (error) {
        console.error('Test update error:', error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ================ COMMENTS ENDPOINTS ================ //
// Get comments for a story
app.get('/api/comments/:storyId', async (req, res) => {
    try {
        const storyId = parseInt(req.params.storyId);
        const commentsData = await readComments();
        
        // Filter comments by storyId and sort by newest first
        const storyComments = commentsData.comments
            .filter(comment => comment.storyId === storyId)
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        res.json(storyComments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
});

// Post a new comment
app.post('/api/comments', async (req, res) => {
    try {
        const { storyId, username, content, userId } = req.body;
        
        // Validation
        if (!storyId || !content) {
            return res.status(400).json({ 
                success: false, 
                error: 'Story ID and comment content are required' 
            });
        }
        
        if (content.trim().length === 0) {
            return res.status(400).json({ 
                success: false, 
                error: 'Comment cannot be empty' 
            });
        }
        
        if (content.length > 1000) {
            return res.status(400).json({ 
                success: false, 
                error: 'Comment is too long (max 1000 characters)' 
            });
        }
        
        const commentsData = await readComments();
        
        // Generate username if not provided
        let commentUsername = username;
        if (!commentUsername || commentUsername.trim() === '') {
            if (userId) {
                // Try to get username from users file
                try {
                    const usersData = await readUsers();
                    const user = usersData.users.find(u => u.id === userId);
                    commentUsername = user ? user.username : 'Anonymous';
                } catch {
                    commentUsername = 'Anonymous';
                }
            } else {
                commentUsername = 'Anonymous';
            }
        }
        
        const newComment = {
            id: Date.now(),
            storyId: parseInt(storyId),
            userId: userId || null,
            username: commentUsername.trim(),
            content: content.trim(),
            timestamp: new Date().toISOString(),
            likes: 0
        };
        
        commentsData.comments.push(newComment);
        await writeComments(commentsData);
        
        res.status(201).json({
            success: true,
            message: 'Comment posted successfully',
            comment: newComment
        });
        
    } catch (error) {
        console.error('Error posting comment:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to save comment' 
        });
    }
});

// Like a comment
app.post('/api/comments/:commentId/like', async (req, res) => {
    try {
        const commentId = parseInt(req.params.commentId);
        const commentsData = await readComments();
        
        const commentIndex = commentsData.comments.findIndex(
            comment => comment.id === commentId
        );
        
        if (commentIndex === -1) {
            return res.status(404).json({ 
                success: false, 
                error: 'Comment not found' 
            });
        }
        
        // Increment likes
        commentsData.comments[commentIndex].likes += 1;
        await writeComments(commentsData);
        
        // Return the full updated comment, not just likes count
        const updatedComment = commentsData.comments[commentIndex];
        
        res.json({
            success: true,
            message: 'Comment liked',
            likes: updatedComment.likes,
            comment: updatedComment  // Return the full comment
        });
        
    } catch (error) {
        console.error('Error liking comment:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to update like' 
        });
    }
});

// Delete a comment
app.delete('/api/comments/:commentId', async (req, res) => {
    try {
        const commentId = parseInt(req.params.commentId);
        const { userId } = req.body; // User ID to verify ownership
        
        console.log('🗑️ DELETE COMMENT REQUEST:', { commentId, userId });
        
        const commentsData = await readComments();
        
        const commentIndex = commentsData.comments.findIndex(
            comment => comment.id === commentId
        );
        
        if (commentIndex === -1) {
            return res.status(404).json({ 
                success: false, 
                error: 'Comment not found' 
            });
        }
        
        const comment = commentsData.comments[commentIndex];
        
        // Check if user owns the comment (only allow deletion by owner)
        if (userId && comment.userId !== userId) {
            return res.status(403).json({ 
                success: false, 
                error: 'You can only delete your own comments' 
            });
        }
        
        // Remove comment
        const deletedComment = commentsData.comments.splice(commentIndex, 1)[0];
        await writeComments(commentsData);
        
        console.log('✅ Comment deleted:', commentId);
        
        res.json({
            success: true,
            message: 'Comment deleted successfully',
            deletedComment: deletedComment
        });
        
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to delete comment' 
        });
    }
});

// ================ TEST ENDPOINTS ================ //
// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        message: 'Novu server is running' 
    });
});

// CORS test endpoint
app.get('/api/test-cors', (req, res) => {
    res.json({ 
        message: 'CORS is working!', 
        timestamp: new Date().toISOString(),
        server: 'Novu Stories API'
    });
});

// ================ INITIALIZE AND START SERVER ================ //
async function initializeServer() {
    try {
        await initUsersFile();
        await initCommentsFile();
        
        app.listen(port, () => {
            console.log(`✅ Novu server running at http://localhost:${port}`);
            console.log(`🔐 Login/Register API available at /api/login and /api/register`);
            console.log(`💬 Comments API available at /api/comments`);
            console.log(`🩺 Health check: http://localhost:${port}/api/health`);
            console.log(`🔄 CORS test: http://localhost:${port}/api/test-cors`);
        });
    } catch (error) {
        console.error('Failed to initialize server:', error);
        process.exit(1);
    }
}

initializeServer();

// Handle uncaught errors
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
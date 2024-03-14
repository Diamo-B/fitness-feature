import bcrypt from 'bcrypt';

const saltRounds = 10; // Number of salt rounds to use

// Function to hash a password
export const hashPassword = async (password: string): Promise<string> => {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        throw error;
    }
};

// Function to compare a password with its hash
export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
    try {
        return await bcrypt.compare(password, hash);
    } catch (error) {
        throw error;
    }
};
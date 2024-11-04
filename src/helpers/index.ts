import crypto from 'crypto';

const SECRET = 'API-TEODORO'
export const random = () => crypto.randomBytes(128).toString('base64');

export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', salt).update(password).digest('hex');
}



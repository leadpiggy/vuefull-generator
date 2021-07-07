export const seedDatabase = true; // Seeds database with some demo data when the database is empty
export const staticPath = './../vuefull-images';
export const uploadDir = staticPath + '/images/';
export const userRoles: string[] = ['user', 'vendor', 'manager', 'admin']; // This should be in ascending order of authority. e.g. In this case guest will not have access to any other role, where as admin will have the role of guest+user+vendor+manager+admin // Used at auth.service.ts
export const pageSize: number = 40

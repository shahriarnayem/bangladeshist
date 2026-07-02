import { getDb } from './mongodb.js';
export async function getPublishedArticles(limit=50){const db=await getDb();return db.collection('articles').find({status:'published'}).sort({createdAt:-1}).limit(limit).toArray()}
export async function getArticleBySlug(slug){const db=await getDb();return db.collection('articles').findOne({slug})}
export async function getArticlesByCategory(category){const db=await getDb();return db.collection('articles').find({category,status:'published'}).sort({createdAt:-1}).toArray()}

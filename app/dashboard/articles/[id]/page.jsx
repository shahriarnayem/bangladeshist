import { ObjectId } from 'mongodb';import { getDb } from '@/lib/mongodb';import ArticleForm from '@/components/ArticleForm';
export const dynamic='force-dynamic';
export default async function EditArticle({params}){const {id}=await params;const db=await getDb();const a=await db.collection('articles').findOne({_id:new ObjectId(id)});if(!a)return <h1>Article not found</h1>;const article={...a,_id:a._id.toString()};return <div><h1 className="text-3xl font-black mb-8">Edit Article</h1><ArticleForm article={article}/></div>}

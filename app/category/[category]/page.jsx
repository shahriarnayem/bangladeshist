import ArticleCard from '@/components/ArticleCard';import { getArticlesByCategory } from '@/lib/articles';
export const dynamic='force-dynamic';
export default async function CategoryPage({params}){const {category}=await params;const articles=await getArticlesByCategory(category);return <main className="container py-12"><h1 className="text-4xl font-black capitalize mb-8">{category}</h1><div className="grid-auto">{articles.map(a=><ArticleCard key={a._id.toString()} article={a}/>)}</div>{!articles.length&&<p className="muted">No articles found.</p>}</main>}

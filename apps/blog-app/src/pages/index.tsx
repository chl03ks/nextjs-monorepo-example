import { sayHello } from '@optional-package-scope/foo'
import { getPosts, Post } from '../data/blog'

type Props = {
  posts: Post[]
}

export default function Blog({ posts }: Props) {
  return (
    <div>
      <h3>I'm the SSG blog-app</h3>
      <ul>
        <li>{`Foo says: ${sayHello(
          'World'
        )} from @optional-package-scope/foo`}</li>
      </ul>
      <h3>Here's the blog posts</h3>
      <ul>
        {posts.map(({ title, slug }) => (
          <li key={slug}>{title}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps(): Promise<{ props: Props }> {
  return {
    props: {
      posts: getPosts(),
    },
  }
}
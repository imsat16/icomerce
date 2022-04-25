import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps () {
  // Call an external API endpoint to get allProd.
  // You can use any data fetching library
  const getAll = await fetch ('https://fakestoreapi.com/products?sort=desc');
  const getTop = await fetch ('https://fakestoreapi.com/products?limit=5');
  const allProd = await getAll.json ();
  const topProd = await getTop.json ();

  // By returning { props: { allProd } }, the Blog component
  // will receive `allProd` as a prop at build time
  return {
    props: {
      allProd,
      topProd,
    },
  };
}

export default function Home({allProd, topProd}) {
  return (
    <div className="">
      <div className="text-center py-4 bg-blue-400">
        <div>
          Note: cek detail Product Baru Bisa Di Product yang ber Kategori Electronic
        </div>
        <div>Unfinished Feature: CRUD & LOGIN</div>
      </div>
      <div className="container mx-auto">
        <div className="pl-4 text-2xl font-bold">Top Products</div>
        <div className="md:grid grid-cols-5 flex overflow-x-scroll md:overflow-hidden gap-4 px-4 py-5">
          {topProd.map (tops => (
            <Link href={'/categories/' + tops.id} key={tops.id}>
              <a className="shadow-xl hover:shadow-2xl rounded-xl hover:border-2 w-1/3 md:w-auto">
                <div className="flex justify-center">
                  <Image
                    src={tops.image}
                    layout={'fixed'}
                    width={100}
                    height={100}
                    alt={tops.title}
                    priority
                    className=" rounded-t-xl"
                  />
                </div>
                <div className="py-1">
                  <div className="px-2 text-sm truncate hover:text-clip">
                    {tops.title}
                  </div>
                  <div className="px-2 text-sm md:text-base font-semibold truncate">
                    ${tops.price}
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="">
        <div className="container mx-auto px-4">
          <div className="pl-4 text-xl font-semibold py-2">All Products</div>
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {allProd.map (posts => (
              <Link href={'/categories/' + posts.id} key={posts.id}>
                <a className="shadow-xl hover:shadow-2xl rounded-xl hover:border-2">
                  <Image
                    src={posts.image}
                    layout={'responsive'}
                    width={100}
                    height={100}
                    alt={posts.title}
                    priority
                    className=" rounded-t-2xl"
                  />
                  <div className="py-1">
                    <div className="px-2 text-sm truncate hover:text-clip">
                      {posts.title}
                    </div>
                    <div className="px-2 font-semibold truncate">
                      ${posts.price}
                    </div>
                    <div className="px-2 text-sm md:text-base font-semibold truncate">
                      {posts.category}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

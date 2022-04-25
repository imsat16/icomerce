import Image from 'next/image';
import Link from 'next/link';
export const getStaticPaths = async () => {
  const res = await fetch (
    'https://fakestoreapi.com/products/category/electronics/'
  );

  const data = await res.json ();

  const paths = data.map (electronic => {
    return {
      params: {id: electronic.id.toString ()},
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const _id = context.params.id;
  const res = await fetch ('https://fakestoreapi.com/products/' + _id);
  const data = await res.json ();
  const resRelEl = await fetch (
    'https://fakestoreapi.com/products/category/electronics'
  );
  const relatedElec = await resRelEl.json ();

  return {
    props: {electronic: data, elec: relatedElec},
  };
};

const Details = ({electronic, elec}) => {
  return (
    <div className="">
      <div className="md:px-10 flex flex-col gap-y-5">
        <div className="grid lg:grid-cols-2 md:shadow-xl rounded-2xl">
          <div className="flex justify-center">
            <div className=" md:py-10 px-4">
              <Image
                src={electronic.image}
                alt={electronic.title}
                width="500"
                height="500"
                priority
                className="  rounded-t-xl"
              />
            </div>
          </div>
          {/* Text */}
          <div className="px-4 md:px-10 md:py-10 md:pr-10 ">
            <div className="text-xl md:text-3xl font-bold">
              {electronic.title}
            </div>
            <div className="py-5 font-bold flex gap-1 text-md text-gray-600">
              $ <div className="text-2xl">{electronic.price}</div> USD
            </div>
            <div className="">
              <a className=" border-b-2  font-semibold text-xl border-gray-500">
                Details
              </a>
              <div className="py-2 flex">
                <div className=" font-semibold">Category</div>
                :
                {' '}
                {electronic.category}
              </div>
              <hr />
              <div className="">
                <div className="flex gap-1">
                  <div className=" font-semibold">Description </div> :
                </div>
                {electronic.description}
              </div>
            </div>
          </div>
        </div>

        <div className="pl-4 md:px-4">
          <div className="text-xl font-semibold">Related Product</div>
          <div className="md:grid grid-cols-5 flex overflow-x-scroll md:overflow-hidden gap-4 px-4 py-5">
            {elec.map (electro => (
              <Link href={'/categories/' + electro.id} key={electro.id}>
                <a className="shadow-xl hover:shadow-2xl">
                  <div className="flex justify-center">
                    <Image
                      src={electro.image}
                      layout={'fixed'}
                      width={100}
                      height={100}
                      alt={electro.title}
                      priority
                      className=" rounded-t-xl"
                    />
                  </div>
                  <div className="py-1 grid">
                    <div className="px-2 text-sm truncate">
                      {electro.title}
                    </div>
                    <div className="px-2 text-sm md:text-base font-semibold truncate">
                      ${electro.price}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div />
    </div>
  );
};

export default Details;

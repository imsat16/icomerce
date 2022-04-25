import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch (
    'https://fakestoreapi.com/products/category/electronics'
  );
  const data = await res.json ();

  return {
    props: {electroList: data},
  };
};

const Electronics = ({electroList}) => {
  return (
    <div className=" px-2 md:px-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-4">
        {electroList.map (electronic => (
          <Link
            href={'/categories/' + electronic.id}
            
            key={electronic.id}
          >
            <a>
              <div className="shadow-xl hover:shadow-2xl rounded-xl hover:border-2">
                <Image
                  src={electronic.image}
                  layout={'responsive'}
                  width={100}
                  height={100}
                  alt={electronic.title}
                  priority
                  className=" rounded-t-2xl"
                />
                <div className="py-1">
                  <div className="px-2 text-sm truncate hover:text-clip">
                    {electronic.title}
                  </div>
                  <div className="px-2 font-semibold truncate">
                    ${electronic.price}
                  </div>
                  <div className="px-2 text-sm md:text-base font-semibold truncate">
                    {electronic.category}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Electronics;

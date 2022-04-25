import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const getStaticProps = async () => {
  const resJew = await fetch (
    'https://fakestoreapi.com/products/category/jewelery'
  );
  const resMan = await fetch (
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const resWom = await fetch (
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  const dJew = await resJew.json ();
  const dMan = await resMan.json ();
  const dWom = await resWom.json ();

  return {
    props: {jews: dJew, mans: dMan, woms: dWom},
  };
};

const Fashions = ({jews, mans, woms}) => {
  return (
    <div>
      <div className="grid gap-4 px-4 ">
        <div className="text-5xl font-bold ">Top<br /> Fashion&lsquo;s</div>
        <div className="grid gap-4">
          <p className=" text-lg font-bold underline">Jewelery</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-4">
            {jews.map (jew => (
              <Link href={'/categories/' + jew.id} key={jew.id}>
                <a>
                  <div className="shadow-xl hover:shadow-2xl rounded-xl hover:border-2">
                    <Image
                      src={jew.image}
                      layout={'responsive'}
                      width={100}
                      height={100}
                      alt={jew.title}
                      priority
                      className=" rounded-t-2xl"
                    />
                    <div className="py-1">
                      <div className="px-2 text-sm truncate hover:text-clip">
                        {jew.title}
                      </div>
                      <div className="px-2 font-semibold truncate">
                        ${jew.price}
                      </div>
                      <div className="px-2 text-sm md:text-base font-semibold truncate">
                        {jew.category}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <p className=" text-lg font-bold underline">Man&lsquo;s Fashion</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-4">
            {mans.map (man => (
              <Link href={'/categories/' + man.id} key={man.id}>
                <a>
                  <div className="shadow-xl hover:shadow-2xl rounded-xl hover:border-2">
                    <Image
                      src={man.image}
                      layout={'responsive'}
                      width={100}
                      height={100}
                      alt={man.title}
                      priority
                      className=" rounded-t-2xl"
                    />
                    <div className="py-1">
                      <div className="px-2 text-sm truncate hover:text-clip">
                        {man.title}
                      </div>
                      <div className="px-2 font-semibold truncate">
                        ${man.price}
                      </div>
                      <div className="px-2 text-sm md:text-base font-semibold truncate">
                        {man.category}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <p className=" text-lg font-bold underline">Women&lsquo;s Fashion</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-4">
            {woms.map (wom => (
              <Link href={'/categories/' + wom.id} key={wom.id}>
                <a>
                  <div className="shadow-xl hover:shadow-2xl rounded-xl hover:border-2">
                    <Image
                      src={wom.image}
                      layout={'responsive'}
                      width={100}
                      height={100}
                      alt={wom.title}
                      priority
                      className=" rounded-t-2xl"
                    />
                    <div className="py-1">
                      <div className="px-2 text-sm truncate hover:text-clip">
                        {wom.title}
                      </div>
                      <div className="px-2 font-semibold truncate">
                        ${wom.price}
                      </div>
                      <div className="px-2 text-sm md:text-base font-semibold truncate">
                        {wom.category}
                      </div>
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
};

export default Fashions;

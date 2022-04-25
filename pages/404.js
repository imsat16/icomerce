import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
const NotFound = () => {
  const router = useRouter ();

  useEffect (() => {
    setTimeout (() => {
      router.push ('/');
    }, 3000);
  });

  return (
    <div className="text-center">
      <h1 className=" text-3xl font-bold">Oooppsss...</h1>
      <h3 className=" text-xl font-semibold">Halaman Tidak Tersedia</h3>
      <p className=" text-md">
        Kembali Ke halaman
        {' '}
        <Link href={'/'}>
          <a className="text-blue-500 underline">Sebelumnya</a>
        </Link>
      </p>

    </div>
  );
};

export default NotFound;

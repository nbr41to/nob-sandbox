import type { NextPage } from "next";
import Link from "next/link";
import { createPageRoutes } from "../src/lib/createPageRoutes";

export const getStaticProps = async () => {
	const paths = createPageRoutes();
	return { props: { paths } };
};

const Home: NextPage<{ paths: string[] }> = ({ paths }) => {
	return (
		<div>
      <h1 className='text-center font-bold leading-normal'>
        Welcome my sandbox!!
        <br />
        Let&#39;s Happy Hacking
      </h1>
      <div className='mt-8'>
        <h2>Galleries</h2>
        <hr />
        <div className='mt-4 space-y-2'>
          {paths.map((path) => (
            <div key={path} className='text-lg hover:text-indigo-600'>
              <span>- </span>
              <Link href={`/${path}`}>
                <a className='underline'>{path}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='aspect-video w-full'>
        <iframe
          className='h-full w-full'
          src='https://www.loom.com/embed/ba74001eb052425cb398bebbba1040d3'
          frameBorder='0'
          allowFullScreen
          // style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
        ></iframe>
      </div>
    </div>
	);
};

export default Home;

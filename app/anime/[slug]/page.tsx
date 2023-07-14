export function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: params.slug,
  };
}

const DynamicAnime = ({ params }: any) => {
  return <div>{params.slug}</div>;
};

export default DynamicAnime;

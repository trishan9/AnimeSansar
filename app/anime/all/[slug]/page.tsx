export function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: params.slug,
  };
}

const DynamicAllAnime = ({ params }: any) => {
  return <div>{params.slug}</div>;
};

export default DynamicAllAnime;

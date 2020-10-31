import Layout from "../components/Layout";

const mountainBike = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">Welcome to my Mountain Bike!</h1>
      <p className="description">{description}</p>
    </Layout>
  );
};

export default mountainBike;

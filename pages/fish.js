import Layout from "../components/Layout";

const fish = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">Welcome to my Fish!</h1>
      <p className="description">{description}</p>
    </Layout>
  );
};

export default fish;

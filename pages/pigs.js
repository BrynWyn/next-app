import Layout from "../components/Layout";

const pigs = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">Welcome to my Pigs!</h1>
      <p className="description">{description}</p>
    </Layout>
  );
};

export default pigs;

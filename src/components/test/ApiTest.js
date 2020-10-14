export const fetchGeneralArticles = async () => {
  const response = await fetch("https://restaurantlisting-env.eba-645emhwx.us-west-1.elasticbeanstalk.com/api/v1/restaurant");
  const json = await response.json();
  return json;
};

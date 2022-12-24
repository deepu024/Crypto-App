import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "..";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loading from "./Loading";
import Error from "./Error";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coin, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const btnArray = new Array(130).fill(1);

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <Error message={"Error while fetching Coins!"} />;

  return (
    <Container maxWidth={"container.xl"}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack spacing={"4"} p={"8"} marginLeft={"4"}>
              <Radio value="inr">₹ INR</Radio>
              <Radio value="eur">€ EUR</Radio>
              <Radio value="usd">$ USD</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
            {coin.map((i) => (
              <CoinCard
                id={i.id}
                price={i.current_price}
                key={i.id}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack overflowX={"auto"} padding={"8"}>
            {btnArray.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;

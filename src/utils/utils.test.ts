import "@testing-library/jest-dom";
import { Coordinates, FavoriteLocation } from "../types";
import capitalizeFirstLetter from "./capitalizeFirstLetter";
import formatUnixDate from "./formatUnixDate";
import isCoordinateFavorite from "./isCoordinateFavorite";
import { getUrlParam, addUrlParam, removeUrlParam } from "./urlParams";

test("capitalizeFirstLetter", () => {
  expect(capitalizeFirstLetter("teste")).toEqual("Teste");
});

test("formatUnixDate", () => {
  expect(formatUnixDate(1640520000)).toEqual("26 December 2021");
});

test("isCoordinateFavorite", () => {
  const coordinates: Coordinates = {
    latitude: 41.1579438,
    longitude: -8.629105299999999,
  };

  const list: FavoriteLocation[] = [
    {
      name: "Porto Municipality",
      coordinates: {
        latitude: 41.1579438,
        longitude: -8.629105299999999,
      },
    },
  ];

  const emptyList: any[] = [];

  expect(isCoordinateFavorite(coordinates, list)).toEqual(true);
  expect(isCoordinateFavorite(coordinates, emptyList)).toEqual(false);
});

test("getUrlParam", () => {
  addUrlParam("page", "2");
  expect(getUrlParam("page")).toEqual("2");
});

test("addUrlParam", () => {
  addUrlParam("page", "2");
  addUrlParam("id", "1");
  expect(global.window.location.search).toEqual("?page=2&id=1");
});

test("removeUrlParam", () => {
  addUrlParam("page", "2");
  addUrlParam("id", "1");
  removeUrlParam("page");
  expect(global.window.location.search).toEqual("?id=1");
});

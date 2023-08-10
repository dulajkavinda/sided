export const dateConverter = (date: string): string => {
  const d = new Date(date);

  const month = d.toLocaleString("default", { month: "short" });
  const day = d.getDate();

  return `${month} ${day}`;
};

export const getChannelName = (channelSlug: string) => {
  const channel = channelsWithNames.find(
    ({ slug }: { slug: string }) => slug === channelSlug
  );
  return channel?.name;
};

export const trimTitle = (title: string) => {
  const MAX_TITLE_LENGTH = 115;
  if (title.length > MAX_TITLE_LENGTH) {
    return `${title.slice(0, MAX_TITLE_LENGTH - 3)}...`;
  }

  return title;
};

export const openUrl = (url: string) => {
  window.open(url, "_blank");
};

export enum ChannelsEnum {
  NEWS_FIRST = "NEWS_FIRST",
  ADA_DERANA = "ADA_DERANA",
  HIRU = "HIRU",
  ITN = "ITN",
  ISALND = "ISALND",
}

export const channelsWithNames = [
  { slug: ChannelsEnum.NEWS_FIRST, name: "News 1st" },
  { slug: ChannelsEnum.ADA_DERANA, name: "Derana" },
  { slug: ChannelsEnum.HIRU, name: "Hiru" },
  { slug: ChannelsEnum.ITN, name: "ITN" },
  { slug: ChannelsEnum.ISALND, name: "Island" },
];

export const dropdownOptons = channelsWithNames.map((channel) => ({
  value: channel.slug,
  label: channel.name,
}));

export const getDropdonwOption = (slug: string | undefined) => {
  if (!slug) return dropdownOptons[0];
  const result = dropdownOptons.find((option) => option.value === slug);
  return result;
};

export const INITIAL_CHANNEL = "NEWS_FIRST";

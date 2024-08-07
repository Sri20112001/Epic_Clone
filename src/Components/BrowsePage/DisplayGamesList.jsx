import { GameCard } from "../HomePage/GameCard";

export const DisplayGamesList = () => {
  const games = [
    {
      title: "Argonauts Agency 3: Chair of Hephaestus",
      game_url:
        "https://store.epicgames.com/en-US/p/argonauts-agency-3-chair-of-hephaestus-53311d",
      discounted_price: "$8.99",
      original_price: "$8.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/f6462b44b04c447282ba2628585673ca/argonauts-agency-3-chair-of-hephaestus-15qe8.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Djinn - The Forbidden Knowledge",
      game_url:
        "https://store.epicgames.com/en-US/p/djinn-the-forbidden-knowledge-1f5924",
      discount: "-11%",
      discounted_price: "$11.56",
      original_price: "$11.56",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/6c67b9f26a5d4c0ea4ab6374575a84f4/djinn--the-forbidden-knowledge-neirc.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Dragon Age™: Origins - Ultimate Edition",
      game_url:
        "https://store.epicgames.com/en-US/p/dragon-age-origins-ultimate-edition-ca4fbf",
      discounted_price: "$29.99",
      original_price: "$29.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/c85211c3d2f64a8ea41fc470362ac665/dragon-age-origins--ultimate-edition-16rzt.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Dragon Age II: Ultimate Edition",
      game_url:
        "https://store.epicgames.com/en-US/p/dragon-age-ii-ultimate-edition-12b171",
      discounted_price: "$29.99",
      original_price: "$29.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/2a6283e82b9b4eb29202a8e64981f023/dragon-age-ii-ultimate-edition-mp359.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Vacation Adventures Park Ranger 16 Collectors Edition",
      game_url:
        "https://store.epicgames.com/en-US/p/vacation-adventures-park-ranger-16-collectors-edition-ce34cb",
      discounted_price: "$9.99",
      original_price: "$9.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/59885bbdb9684ff0a6ab62a4cf1d7ce2/vacation-adventures-park-ranger-16-collectors-edition-11vpm.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Survival: Fountain of Youth",
      game_url:
        "https://store.epicgames.com/en-US/p/survival-fountain-of-youth-e7036f",
      discounted_price: "$27.99",
      original_price: "$27.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/fb4f09ea94024f16ae92765a0e911cb7/survival-fountain-of-youth-1lnsj.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Trust No One",
      game_url: "https://store.epicgames.com/en-US/p/trust-no-one-5d5141",
      discounted_price: "$1.99",
      original_price: "$1.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/15df2995842b4b75a5aa0d4751f49859/trust-no-one-jylwk.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Athenian Rhapsody",
      game_url: "https://store.epicgames.com/en-US/p/athenian-rhapsody-5ef478",
      discounted_price: "$14.99",
      original_price: "$14.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/56b3e4eea8e641e192f809be2505d15d/download-athenian-rhapsody-offer-1uxcp.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Spellbound Survivors",
      game_url:
        "https://store.epicgames.com/en-US/p/spellbound-survivors-4da8c1",
      discounted_price: "$4.99",
      original_price: "$4.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/01bd1b95902f4a73b04267c0e17161a5/spellbound-survivors-v4auq.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Garten of Banban 7",
      game_url: "https://store.epicgames.com/en-US/p/garten-of-banban-7-d0e110",
      discounted_price: "$9.99",
      original_price: "$9.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/c97bd69018fc427d98808d1435bcc503/garten-of-banban-7-170tp.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Revenge of Sardine",
      game_url: "https://store.epicgames.com/en-US/p/revenge-of-sardine-1023c4",
      discounted_price: "$1.99",
      original_price: "$1.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/63cacc0c4d5443afbb7e8bf71c3bdad6/revenge-of-sardine-1g1wz.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Lost in Random™",
      game_url: "https://store.epicgames.com/en-US/p/lost-in-random-1804af",
      discounted_price: "$29.99",
      original_price: "$29.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/a4ba9a16b43347b09002ef81b48a32f4/lost-in-random-2eajx.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Sea of Solitude",
      game_url: "https://store.epicgames.com/en-US/p/sea-of-solitude-68aef2",
      discounted_price: "$19.99",
      original_price: "$19.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/1d933e0a80e2466ab190fc5d277a4c66/sea-of-solitude-bldjw.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Unravel Two",
      game_url: "https://store.epicgames.com/en-US/p/unravel-two-6bba8f",
      discounted_price: "$19.99",
      original_price: "$19.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Euphoria: Supreme Mechanics",
      game_url:
        "https://store.epicgames.com/en-US/p/euphoria-supreme-mechanics-590b33",
      discounted_price: "$4.99",
      original_price: "$4.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Darkestville Castle",
      game_url:
        "https://store.epicgames.com/en-US/p/darkestville-castle-cf4a56",
      discounted_price: "$14.99",
      original_price: "$14.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Quest Room",
      game_url: "https://store.epicgames.com/en-US/p/quest-room-1e31f0",
      discounted_price: "$9.99",
      original_price: "$9.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Russian Village Simulator",
      game_url:
        "https://store.epicgames.com/en-US/p/russian-village-simulator-ddedb6",
      discounted_price: "$14.99",
      original_price: "$14.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "The Coma: Recut",
      game_url: "https://store.epicgames.com/en-US/p/the-coma-recut-46a500",
      discounted_price: "$14.99",
      original_price: "$14.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "The Inner World",
      game_url: "https://store.epicgames.com/en-US/p/the-inner-world-2e3e98",
      discounted_price: "$14.99",
      original_price: "$14.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Puzzle Agent",
      game_url: "https://store.epicgames.com/en-US/p/puzzle-agent-b7556e",
      discounted_price: "$4.99",
      original_price: "$4.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Oddsparks: An Automation Adventure",
      game_url: "https://store.epicgames.com/en-US/p/oddsparks-58440c",
      discounted_price: "$19.99",
      original_price: "$19.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Tales of Kenzera™: ZAU",
      game_url: "https://store.epicgames.com/en-US/p/tales-of-kenzera",
      discounted_price: "$19.99",
      original_price: "$19.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Lunar Lander Beyond",
      game_url:
        "https://store.epicgames.com/en-US/p/lunar-lander-beyond-30b7a0",
      discounted_price: "$29.99",
      original_price: "$29.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Maze OF Disorder",
      game_url: "https://store.epicgames.com/en-US/p/maze-of-disorder-4f23a0",
      discounted_price: "$6.99",
      original_price: "$6.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Worker Simulator",
      game_url: "https://store.epicgames.com/en-US/p/worker-simulator-db704e",
      discounted_price: "$19.99",
      original_price: "$19.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Last Hope Bunker: Zombie Survival",
      game_url:
        "https://store.epicgames.com/en-US/p/last-hope-bunker-zombie-survival-92a49d",
      discounted_price: "$6.99",
      original_price: "$6.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Heavy Burden",
      game_url: "https://store.epicgames.com/en-US/p/heavy-burden-e689c4",
      discount: "-80%",
      discounted_price: "$1.99",
      original_price: "$1.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "Vacation Adventures Park Ranger 9 Collectors Edition",
      game_url:
        "https://store.epicgames.com/en-US/p/vacation-adventures-park-ranger-9-collectors-edition-bc3998",
      discounted_price: "$9.99",
      original_price: "$9.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
    {
      title: "The Unexpected Quest",
      game_url:
        "https://store.epicgames.com/en-US/p/the-unexpected-quest-d9ce4c",
      discounted_price: "$12.99",
      original_price: "$12.99",
      category: "Base Game",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {games.map((game, index) => (
          <GameCard key={index} game={game} id={index} />
        ))}
      </div>
    </>
  );
};

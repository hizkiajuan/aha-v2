import { SearchFilterType } from '@/app/ui/home/SearchFilterType.ts';
import { SearchType } from '@/app/ui/home/SearchType.ts';
import { SearchApiResponse } from '@/common/contract.ts';
import http from '@/common/http.ts';

export async function getSearchResultList(
  params: SearchFilterType,
): Promise<SearchApiResponse> {
  const response: Response = await http.get('api/users/all', params);

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch search result list');
  }

  return response.json();

  /*
  return [
    {
      id: '345e5f39-5abc-4bbd-b49e-c4a4371b2509',
      name: 'Casandra Boehm',
      username: 'Kaylee_Connelly',
      avater: 'https://cdn.fakercloud.com/avatars/brenmurrell_128.jpg',
      isFollowing: false,
    },
    {
      id: '3229b31d-4547-40be-9d0c-da565168d0c0',
      name: 'Alverta Hettinger',
      username: 'Luz63',
      avater: 'https://cdn.fakercloud.com/avatars/bargaorobalo_128.jpg',
      isFollowing: true,
    },
    {
      id: '907f682c-a44e-4fc8-ac6c-92ac474bb431',
      name: 'Waldo Stoltenberg',
      username: 'Rosalee.Wolff18',
      avater: 'https://cdn.fakercloud.com/avatars/hasslunsford_128.jpg',
      isFollowing: false,
    },
    {
      id: 'a91c02ed-2cca-4beb-80df-160c7e2d5957',
      name: 'Kenton Quigley',
      username: 'Dena_Cormier41',
      avater: 'https://cdn.fakercloud.com/avatars/SULiik_128.jpg',
      isFollowing: true,
    },
    {
      id: '0bfee9c3-a148-483f-9fee-19bec4e7e34f',
      name: 'Nathanial Rodriguez',
      username: 'Leanna.Keebler',
      avater: 'https://cdn.fakercloud.com/avatars/roybarberuk_128.jpg',
      isFollowing: false,
    },
    {
      id: 'ad4e0b74-25ab-4357-a770-bcc2a5be98e5',
      name: 'Jaren Boyle',
      username: 'Dolly_Dicki64',
      avater: 'https://cdn.fakercloud.com/avatars/craighenneberry_128.jpg',
      isFollowing: true,
    },
    {
      id: 'eb5e4465-4dce-4dbd-b9b7-9498563e18da',
      name: 'Henriette Rempel',
      username: 'Edythe_Kertzmann',
      avater: 'https://cdn.fakercloud.com/avatars/isacosta_128.jpg',
      isFollowing: false,
    },
    {
      id: 'eb5e4465-4dce-4dbd-b9b7-9498563e18dh',
      name: 'Henriette Rempel2',
      username: 'Edythe_Kertzmann',
      avater: 'https://cdn.fakercloud.com/avatars/isacosta_128.jpg',
      isFollowing: false,
    },
    {
      id: 'eb5e4465-4dce-4dbd-b9b7-9498563e18dg',
      name: 'Henriette Rempel3',
      username: 'Edythe_Kertzmann',
      avater: 'https://cdn.fakercloud.com/avatars/isacosta_128.jpg',
      isFollowing: false,
    },
    {
      id: 'eb5e4465-4dce-4dbd-b9b7-9498563e18df',
      name: 'Henriette Rempel4',
      username: 'Edythe_Kertzmannx',
      avater: 'https://cdn.fakercloud.com/avatars/isacosta_128.jpg',
      isFollowing: false,
    },
    {
      id: 'eb5e4465-4dce-4dbd-b9b7-9498563e18de',
      name: 'Henriette Rempel5',
      username: 'Edythe_Kertzmann',
      avater: 'https://cdn.fakercloud.com/avatars/isacosta_128.jpg',
      isFollowing: false,
    },
    {
      id: 'eb5e4465-4dce-4dbd-b9b7-9498563e18dz',
      name: 'Henriette Rempel6',
      username: 'Edythe_Kertzmann',
      avater: 'https://cdn.fakercloud.com/avatars/isacosta_128.jpg',
      isFollowing: false,
    },
    {
      id: 'eb5e4465-4dce-4dbd-b9b7-9498563e18dd',
      name: 'Henriette Rempel7',
      username: 'Edythe_Kertzmann',
      avater: 'https://cdn.fakercloud.com/avatars/isacosta_128.jpg',
      isFollowing: false,
    },
    {
      id: 'eb5e4465-4dce-4dbd-b9b7-9498563e18dc',
      name: 'Henriette Rempel8',
      username: 'Edythe_Kertzmann',
      avater: 'https://cdn.fakercloud.com/avatars/isacosta_128.jpg',
      isFollowing: false,
    },
    {
      id: 'eb5e4465-4dce-4dbd-b9b7-9498563e18db',
      name: 'Henriette Rempel9',
      username: 'Edythe_Kertzmann',
      avater: 'https://cdn.fakercloud.com/avatars/isacosta_128.jpg',
      isFollowing: false,
    },
    {
      id: 'b4f5caec-b94f-418a-8fb8-79a38edab0d0',
      name: 'Theo Will',
      username: 'Pearlie54',
      avater: 'https://cdn.fakercloud.com/avatars/smalonso_128.jpg',
      isFollowing: false,
    },
    {
      id: '4766669d-50c8-4074-84e6-bc0502bfe69e',
      name: 'Marquise Hyatt',
      username: 'Maryam.Senger57',
      avater: 'https://cdn.fakercloud.com/avatars/vanchesz_128.jpg',
      isFollowing: true,
    },
    {
      id: 'c48fe709-5216-4185-adaa-29fb56af55a7',
      name: 'Stacey Koss',
      username: 'Anais_Johnson53',
      avater: 'https://cdn.fakercloud.com/avatars/davidcazalis_128.jpg',
      isFollowing: true,
    },
    {
      id: 'd67710af-0211-4020-8d0c-cd2cd5087843',
      name: 'Natalie Farrell',
      username: 'Aisha.Walsh',
      avater: 'https://cdn.fakercloud.com/avatars/justme_timothyg_128.jpg',
      isFollowing: true,
    },
    {
      id: '4258f400-436c-4da8-8be2-9c946fe7b23b',
      name: 'Dale Dietrich',
      username: 'Fred_Mohr12',
      avater: 'https://cdn.fakercloud.com/avatars/kevinjohndayy_128.jpg',
      isFollowing: true,
    },
    {
      id: '98363d7e-0fc2-412a-9745-85cb1b7e0027',
      name: 'Ardella Kihn',
      username: 'Aaliyah_Turcotte',
      avater: 'https://cdn.fakercloud.com/avatars/nelshd_128.jpg',
      isFollowing: true,
    },
    {
      id: '62c4d102-e24a-41c0-b27f-ea13dd8a6f89',
      name: 'Domenica Goyette',
      username: 'Elta92',
      avater: 'https://cdn.fakercloud.com/avatars/jqiuss_128.jpg',
      isFollowing: true,
    },
    {
      id: '3e468216-d69c-445a-b31d-196fe10a3c9a',
      name: 'Karl Koelpin',
      username: 'Nina.Jerde',
      avater: 'https://cdn.fakercloud.com/avatars/IsaryAmairani_128.jpg',
      isFollowing: true,
    },
    {
      id: '27595feb-9f2c-4919-89f1-330009b10985',
      name: 'Larissa Cole',
      username: 'Rhiannon11',
      avater: 'https://cdn.fakercloud.com/avatars/instalox_128.jpg',
      isFollowing: false,
    },
    {
      id: '64b2a1be-4c0f-4163-a052-d79be2bb70fd',
      name: 'Marcia Conn',
      username: 'Paul83',
      avater: 'https://cdn.fakercloud.com/avatars/mugukamil_128.jpg',
      isFollowing: false,
    },
    {
      id: 'b5f8b2ac-be87-4081-b0f0-bddd63856f0a',
      name: 'Elinore Bartell',
      username: 'Allan46',
      avater: 'https://cdn.fakercloud.com/avatars/coreyhaggard_128.jpg',
      isFollowing: true,
    },
    {
      id: '42125fed-7198-4488-80a9-2b55c0081d50',
      name: 'Kiana Stanton',
      username: 'Verdie.OHara',
      avater: 'https://cdn.fakercloud.com/avatars/thewillbeard_128.jpg',
      isFollowing: false,
    },
    {
      id: '7504a756-6299-4ac2-8087-c8677e8c20aa',
      name: 'Dameon Hagenes',
      username: 'Mayra_Smitham96',
      avater: 'https://cdn.fakercloud.com/avatars/_yardenoon_128.jpg',
      isFollowing: true,
    },
    {
      id: '57ea86ac-8873-4c3d-9f06-b9269dd1885f',
      name: 'Gregoria Altenwerth',
      username: 'Dante.Bruen',
      avater: 'https://cdn.fakercloud.com/avatars/picard102_128.jpg',
      isFollowing: false,
    },
    {
      id: 'adf4e00f-fc2e-4fb9-b883-2e2754fb707f',
      name: 'Brock Hauck',
      username: 'Richie.Greenfelder',
      avater: 'https://cdn.fakercloud.com/avatars/elliotnolten_128.jpg',
      isFollowing: false,
    },
    {
      id: '107e0295-dcf2-4dd0-b7d8-4b40ea1d09fb',
      name: 'Zola Leannon',
      username: 'Edward.Roob',
      avater: 'https://cdn.fakercloud.com/avatars/a_harris88_128.jpg',
      isFollowing: false,
    },
    {
      id: 'd248da7c-9872-493b-851e-f64411761aa0',
      name: 'Domenica McCullough',
      username: 'Estel.Quitzon',
      avater: 'https://cdn.fakercloud.com/avatars/vj_demien_128.jpg',
      isFollowing: false,
    },
    {
      id: '8f6e71c1-0768-4e43-a978-7671ae17ef0a',
      name: 'Billie Anderson',
      username: 'Skylar.Medhurst',
      avater: 'https://cdn.fakercloud.com/avatars/AlbertoCococi_128.jpg',
      isFollowing: true,
    },
    {
      id: 'd087c65c-20eb-40d3-a2ac-9b99b33a71b0',
      name: 'Jerrell Quigley',
      username: 'Thora.Steuber',
      avater: 'https://cdn.fakercloud.com/avatars/abovefunction_128.jpg',
      isFollowing: true,
    },
    {
      id: '7ff58efa-6847-43da-b2c0-dfad1dbc4b55',
      name: 'Telly Pacocha',
      username: 'Amparo.Lynch87',
      avater: 'https://cdn.fakercloud.com/avatars/yesmeck_128.jpg',
      isFollowing: false,
    },
    {
      id: '625a95a2-7423-40ee-98f8-d56f1893b9e1',
      name: 'Jairo Bayer',
      username: 'Bessie.Boyle25',
      avater: 'https://cdn.fakercloud.com/avatars/aviddayentonbay_128.jpg',
      isFollowing: false,
    },
    {
      id: 'ce66ba89-668d-44b0-922c-466e753e8be9',
      name: 'Chloe Marks',
      username: 'Elfrieda75',
      avater: 'https://cdn.fakercloud.com/avatars/juangomezw_128.jpg',
      isFollowing: false,
    },
    {
      id: '37d535e7-2f78-4bc4-8565-f7a7b84fd769',
      name: 'Louvenia Jones',
      username: 'Justina.Macejkovic',
      avater: 'https://cdn.fakercloud.com/avatars/operatino_128.jpg',
      isFollowing: false,
    },
  ];
  */
}

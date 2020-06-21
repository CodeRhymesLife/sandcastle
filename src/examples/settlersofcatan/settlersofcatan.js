import { Object3D, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GLTF_2FOR1_BRICK = require("./assets/2for1_brick.glb");
const GLTF_2FOR1_ORE = require("./assets/2for1_ore.glb");
const GLTF_2FOR1_SHEEP = require("./assets/2for1_sheep.glb");
const GLTF_2FOR1_WATER = require("./assets/2for1_water.glb");
const GLTF_2FOR1_WHEAT = require("./assets/2for1_wheat.glb");
const GLTF_2FOR1_WOOD = require("./assets/2for1_wood.glb");
const GLTF_3FOR1 = require("./assets/3for1.glb");
const GLTF_BUILDING_COSTS = require("./assets/building_costs.glb");
const GLTF_DEVELOPMENT_MONOPOLY = require("./assets/development_monopoly.glb");
const GLTF_DEVELOPMENT_ROAD_BUILDING = require("./assets/development_road_building.glb");
const GLTF_DEVELOPMENT_SOLDIER = require("./assets/development_soldier.glb");
const GLTF_DEVELOPMENT_VICTORY_POINT_CHAPEL = require("./assets/development_victory_point_chapel.glb");
const GLTF_DEVELOPMENT_VICTORY_POINT_GOVERNORS_HOUSE = require("./assets/development_victory_point_governors_house.glb");
const GLTF_DEVELOPMENT_VICTORY_POINT_LIBRARY = require("./assets/development_victory_point_library.glb");
const GLTF_DEVELOPMENT_VICTORY_POINT_MARKET = require("./assets/development_victory_point_market.glb");
const GLTF_DEVELOPMENT_VICTORY_POINT_UNIVERSITY_OF_CATAN = require("./assets/development_victory_point_university_of_catan.glb");
const GLTF_DEVELOPMENT_YEAR_OF_PLENTY = require("./assets/development_year_of_plenty.glb");
const GLTF_HEX_BRICK = require("./assets/hex_brick.glb");
const GLTF_HEX_DESERT = require("./assets/hex_desert.glb");
const GLTF_HEX_ORE = require("./assets/hex_ore.glb");
const GLTF_HEX_SHEEP = require("./assets/hex_sheep.glb");
const GLTF_HEX_WHEAT = require("./assets/hex_wheat.glb");
const GLTF_HEX_WOOD = require("./assets/hex_wood.glb");
const GLTF_NUMBER_A_5 = require("./assets/number_a_5.glb");
const GLTF_NUMBER_B_2 = require("./assets/number_b_2.glb");
const GLTF_NUMBER_C_6 = require("./assets/number_c_6.glb");
const GLTF_NUMBER_D_3 = require("./assets/number_d_3.glb");
const GLTF_NUMBER_E_8 = require("./assets/number_e_8.glb");
const GLTF_NUMBER_F_10 = require("./assets/number_f_10.glb");
const GLTF_NUMBER_G_9 = require("./assets/number_g_9.glb");
const GLTF_NUMBER_H_12 = require("./assets/number_h_12.glb");
const GLTF_NUMBER_I_11 = require("./assets/number_i_11.glb");
const GLTF_NUMBER_J_4 = require("./assets/number_j_4.glb");
const GLTF_NUMBER_K_8 = require("./assets/number_k_8.glb");
const GLTF_NUMBER_L_10 = require("./assets/number_l_10.glb");
const GLTF_NUMBER_M_9 = require("./assets/number_m_9.glb");
const GLTF_NUMBER_N_4 = require("./assets/number_n_4.glb");
const GLTF_NUMBER_O_5 = require("./assets/number_o_5.glb");
const GLTF_NUMBER_P_6 = require("./assets/number_p_6.glb");
const GLTF_NUMBER_Q_3 = require("./assets/number_q_3.glb");
const GLTF_NUMBER_R_11 = require("./assets/number_r_11.glb");
const GLTF_PIECE_CITY = require("./assets/piece_city.glb");
const GLTF_PIECE_ROAD = require("./assets/piece_road.glb");
const GLTF_PIECE_ROBBER = require("./assets/piece_robber.glb");
const GLTF_PIECE_SETTLEMENT = require("./assets/piece_settlement.glb");
const GLTF_RESOURCE_BRICK = require("./assets/resource_brick.glb");
const GLTF_RESOURCE_ORE = require("./assets/resource_ore.glb");
const GLTF_RESOURCE_SHEEP = require("./assets/resource_sheep.glb");
const GLTF_RESOURCE_WHEAT = require("./assets/resource_wheat.glb");
const GLTF_RESOURCE_WOOD = require("./assets/resource_wood.glb");
const GLTF_SPECIAL_LARGEST_ARMY = require("./assets/special_largest_army.glb");
const GLTF_SPECIAL_LONGEST_ROAD = require("./assets/special_longest_road.glb");

class SettlersOfCatan extends Object3D {
  constructor(params) {
    super(params);
    this.name = "Settlers of Catan";
    this.load();
  }

  load() {
    this.loadGLTF(GLTF_2FOR1_BRICK)
    this.loadGLTF(GLTF_2FOR1_ORE)
    this.loadGLTF(GLTF_2FOR1_SHEEP)
    this.loadGLTF(GLTF_2FOR1_WATER)
    this.loadGLTF(GLTF_2FOR1_WHEAT)
    this.loadGLTF(GLTF_2FOR1_WOOD)
    this.loadGLTF(GLTF_3FOR1)
    this.loadGLTF(GLTF_BUILDING_COSTS)
    this.loadGLTF(GLTF_DEVELOPMENT_MONOPOLY)
    this.loadGLTF(GLTF_DEVELOPMENT_ROAD_BUILDING)
    this.loadGLTF(GLTF_DEVELOPMENT_SOLDIER)
    this.loadGLTF(GLTF_DEVELOPMENT_VICTORY_POINT_CHAPEL)
    this.loadGLTF(GLTF_DEVELOPMENT_VICTORY_POINT_GOVERNORS_HOUSE)
    this.loadGLTF(GLTF_DEVELOPMENT_VICTORY_POINT_LIBRARY)
    this.loadGLTF(GLTF_DEVELOPMENT_VICTORY_POINT_MARKET)
    this.loadGLTF(GLTF_DEVELOPMENT_VICTORY_POINT_UNIVERSITY_OF_CATAN)
    this.loadGLTF(GLTF_DEVELOPMENT_YEAR_OF_PLENTY)
    this.loadGLTF(GLTF_HEX_BRICK)
    this.loadGLTF(GLTF_HEX_DESERT)
    this.loadGLTF(GLTF_HEX_ORE)
    this.loadGLTF(GLTF_HEX_SHEEP)
    this.loadGLTF(GLTF_HEX_WHEAT)
    this.loadGLTF(GLTF_HEX_WOOD)
    this.loadGLTF(GLTF_NUMBER_A_5)
    this.loadGLTF(GLTF_NUMBER_B_2)
    this.loadGLTF(GLTF_NUMBER_C_6)
    this.loadGLTF(GLTF_NUMBER_D_3)
    this.loadGLTF(GLTF_NUMBER_E_8)
    this.loadGLTF(GLTF_NUMBER_F_10)
    this.loadGLTF(GLTF_NUMBER_G_9)
    this.loadGLTF(GLTF_NUMBER_H_12)
    this.loadGLTF(GLTF_NUMBER_I_11)
    this.loadGLTF(GLTF_NUMBER_J_4)
    this.loadGLTF(GLTF_NUMBER_K_8)
    this.loadGLTF(GLTF_NUMBER_L_10)
    this.loadGLTF(GLTF_NUMBER_M_9)
    this.loadGLTF(GLTF_NUMBER_N_4)
    this.loadGLTF(GLTF_NUMBER_O_5)
    this.loadGLTF(GLTF_NUMBER_P_6)
    this.loadGLTF(GLTF_NUMBER_Q_3)
    this.loadGLTF(GLTF_NUMBER_R_11)
    this.loadGLTF(GLTF_PIECE_CITY)
    this.loadGLTF(GLTF_PIECE_ROAD)
    this.loadGLTF(GLTF_PIECE_ROBBER)
    this.loadGLTF(GLTF_PIECE_SETTLEMENT)
    this.loadGLTF(GLTF_RESOURCE_BRICK)
    this.loadGLTF(GLTF_RESOURCE_ORE)
    this.loadGLTF(GLTF_RESOURCE_SHEEP)
    this.loadGLTF(GLTF_RESOURCE_WHEAT)
    this.loadGLTF(GLTF_RESOURCE_WOOD)
    this.loadGLTF(GLTF_SPECIAL_LARGEST_ARMY)
    this.loadGLTF(GLTF_SPECIAL_LONGEST_ROAD)
  }

  loadGLTF(path) {
    const self = this;
    const loader = new GLTFLoader();
    loader.load(path, function (gltf) {
      const model = gltf.scene.children[0];
      self.add(model);
    });
  }
}

export default SettlersOfCatan;

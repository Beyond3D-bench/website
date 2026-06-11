import type { TrajectoryData, VideoEntry } from "../Types";

const TRAJECTORY: Record<string, TrajectoryData> = {
  oos_staged_h5p0_0: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "98dfab7aa5cc00f7",
    object_a_name: "pack of oranges",
    query_time_sec: 119.0,
    query_time_in_clip_sec: 119.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 119.0,
    clip_duration_sec: 119.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "98dfab7aa5cc00f7",
      object_name: "pack of oranges",
      query_time_sec: 119.0,
      oos_span_start_sec: 114.0,
      oos_span_end_sec: 184.0,
      oos_duration_sec: 70.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 119.0,
      clip_duration_sec: 119.0,
      anchor_assoc_id: "0dc220cf42cdb3d8",
      anchor_name: "first orange",
      anchor_projected_pixel: [1212.4212638776532, 1090.8341609871147],
      anchor_world_coordinates: [
        -1.5765129580203285, -2.618846807383802, -0.5441149356939652,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_0",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:01:59.0 video 1>, is the previously moved pack of oranges visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [5489.723031867898, 2280.1112197588227],
          camera_coordinates: [
            1.0451398441213466, 0.4773205441739923, 0.2109197457812817,
          ],
          frame_index: 1583,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pack of oranges was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:50.0 video 1>; Point=(0.9664, 0.5733)",
          "<TIME 00:01:52.0 video 1>; Point=(0.9409, 0.62)",
          "<TIME 00:01:53.0 video 1>; Point=(0.9158, 0.5945)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 113.0,
          sampled_last_visible_time_in_clip_sec: 113.0,
          sampled_last_visible_time_token: "<TIME 00:01:53.0 video 1>",
          projected_pixel: [1289.3902079954594, 837.0909832054366],
          normalized_projected_pixel: [0.9157600909058661, 0.5945248460265885],
          camera_coordinates: [
            0.7435259386754067, 0.1649107910751505, 0.6750085570027768,
          ],
          frame_index: 1583,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 110.0,
              time_token: "<TIME 00:01:50.0 video 1>",
              projected_pixel: [1360.623893163293, 807.2532832180988],
              normalized_projected_pixel: [
                0.9663521968489296, 0.573333297740127,
              ],
              camera_coordinates: [
                0.7908162058459474, 0.12104217829652986, 0.6011597551416756,
              ],
              frame_index: 1583,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 112.0,
              time_token: "<TIME 00:01:52.0 video 1>",
              projected_pixel: [1324.754626607763, 872.9181612812608],
              normalized_projected_pixel: [
                0.9408768654884679, 0.6199702850008955,
              ],
              camera_coordinates: [
                0.7803809631316094, 0.20801638407938938, 0.6433148889687608,
              ],
              frame_index: 1583,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 113.0,
              time_token: "<TIME 00:01:53.0 video 1>",
              projected_pixel: [1289.3902079954594, 837.0909832054366],
              normalized_projected_pixel: [
                0.9157600909058661, 0.5945248460265885,
              ],
              camera_coordinates: [
                0.7435259386754067, 0.1649107910751505, 0.6750085570027768,
              ],
              frame_index: 1583,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The pack of oranges was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:52.8 video 1>; Point=(0.5858, 0.7787)",
          "<TIME 00:00:53.0 video 1>; Point=(0.5905, 0.7597)",
          "<TIME 00:00:54.0 video 1>; Point=(0.6359, 0.7637)",
          "<TIME 00:00:55.0 video 1>; Point=(0.5974, 0.7613)",
        ],
        answer_metadata: {
          last_placement_time_sec: 52.766666666666666,
          last_placement_time_in_clip_sec: 52.766666666666666,
          last_placement_time_token: "<TIME 00:00:52.8 video 1>",
          projected_pixel: [824.8272249561401, 1096.3436425582445],
          normalized_projected_pixel: [0.5858147904518041, 0.778653155226026],
          camera_coordinates: [
            0.09726744699243639, 0.300345941185844, 0.45413175656108007,
          ],
          frame_index: 1583,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 52.766666666666666,
              time_token: "<TIME 00:00:52.8 video 1>",
              projected_pixel: [824.8272249561401, 1096.3436425582445],
              normalized_projected_pixel: [
                0.5858147904518041, 0.778653155226026,
              ],
              camera_coordinates: [
                0.09726744699243639, 0.300345941185844, 0.45413175656108007,
              ],
              frame_index: 1583,
              status: "last_past_track_end",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 53.0,
              time_token: "<TIME 00:00:53.0 video 1>",
              projected_pixel: [831.4109598274499, 1069.641448321308],
              normalized_projected_pixel: [
                0.5904907385138138, 0.7596885286372926,
              ],
              camera_coordinates: [
                0.10272649015163982, 0.28091728036198904, 0.45933736878272935,
              ],
              frame_index: 1590,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 54.0,
              time_token: "<TIME 00:00:54.0 video 1>",
              projected_pixel: [895.3651331357918, 1075.2307161182212],
              normalized_projected_pixel: [
                0.6359127366021249, 0.7636581790612366,
              ],
              camera_coordinates: [
                0.14847778169568504, 0.2782824757298946, 0.4437245347344634,
              ],
              frame_index: 1620,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 55.0,
              time_token: "<TIME 00:00:55.0 video 1>",
              projected_pixel: [841.118707542943, 1071.8698129460195],
              normalized_projected_pixel: [
                0.5973854456981129, 0.7612711739673433,
              ],
              camera_coordinates: [
                0.10910775673869133, 0.279747857697321, 0.45388565808290937,
              ],
              frame_index: 1650,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:01:59.0 video 1>, based on the last known position of the pack of oranges that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area below the boiler",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 52.766666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area close to the microwave",
          raw_correct_fixture: "P01_counter.009",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:01:59.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, in which direction is the pack of oranges from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 119.0,
            camera_coordinates: [
              1.0451398441213466, 0.4773205441739923, 0.2109197457812817,
            ],
            world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.0451398441213466,
              z: 0.2109197457812817,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:01:59.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, and using the current position of the first orange (marked in red) in the current frame, where is the pack of oranges relative to first orange from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 119.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            object_x_camera_coordinates: [
              1.0451398441213466, 0.4773205441739923, 0.2109197457812817,
            ],
            object_y_assoc_id: "0dc220cf42cdb3d8",
            object_y_name: "first orange",
            object_y_reference_time_sec: 119.0,
            object_y_world_coordinates: [
              -1.5765129580203285, -2.618846807383802, -0.5441149356939652,
            ],
            object_y_projected_pixel: [1212.4212638776532, 1090.8341609871147],
            object_y_normalized_projected_pixel: [
              0.8610946476403787, 0.7747401711556212,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:01:59.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, and using the current position of the first orange (marked in red) in the current frame, how far is the pack of oranges from the first orange: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 119.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0dc220cf42cdb3d8",
            object_y_name: "first orange",
            object_y_pixel: [1212.4212638776532, 1090.8341609871147],
            object_y_normalized_projected_pixel: [
              0.8610946476403787, 0.7747401711556212,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.5875992977133382, 0.13484420648979312, -0.25128382901129687,
            ],
            distance_m: 0.65314581635317,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_1: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "344ce01b15288a18",
    object_a_name: "green roll of recyclable bags",
    query_time_sec: 124.0,
    query_time_in_clip_sec: 124.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 124.0,
    clip_duration_sec: 124.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "344ce01b15288a18",
      object_name: "green roll of recyclable bags",
      query_time_sec: 124.0,
      oos_span_start_sec: 119.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 277.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_drawer.006",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 124.0,
      clip_duration_sec: 124.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [1285.6543553627484, 867.3456586531022],
      anchor_world_coordinates: [
        -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_1",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:04.0 video 1>, is the previously moved green roll of recyclable bags visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1392.8713423577428, 1302.2715922698922],
          camera_coordinates: [
            0.5738117378808725, 0.4932701305914543, 0.29203575841065876,
          ],
          frame_index: 3525,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The green roll of recyclable bags was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:58.0 video 1>; Point=(0.547, 0.8339)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 118.0,
          sampled_last_visible_time_in_clip_sec: 118.0,
          sampled_last_visible_time_token: "<TIME 00:01:58.0 video 1>",
          projected_pixel: [770.2097270189192, 1174.066376241039],
          normalized_projected_pixel: [0.5470239538486642, 0.8338539603984653],
          camera_coordinates: [
            0.055203342185973, 0.3596260547738698, 0.44271220881347295,
          ],
          frame_index: 3525,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_drawer.006",
          world_coordinates: [
            -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 118.0,
              time_token: "<TIME 00:01:58.0 video 1>",
              projected_pixel: [770.2097270189192, 1174.066376241039],
              normalized_projected_pixel: [
                0.5470239538486642, 0.8338539603984653,
              ],
              camera_coordinates: [
                0.055203342185973, 0.3596260547738698, 0.44271220881347295,
              ],
              frame_index: 3525,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_drawer.006",
              world_coordinates: [
                -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The green roll of recyclable bags was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:57.5 video 1>; Point=(0.5264, 0.8036)",
          "<TIME 00:01:58.0 video 1>; Point=(0.547, 0.8339)",
          "<TIME 00:01:59.0 video 1>; Point=(0.7401, 0.9414)",
          "<TIME 00:02:00.0 video 1>; Point=(1.8205, 2.0466)",
        ],
        answer_metadata: {
          last_placement_time_sec: 117.5,
          last_placement_time_in_clip_sec: 117.5,
          last_placement_time_token: "<TIME 00:01:57.5 video 1>",
          projected_pixel: [741.1186327367084, 1131.4996976122025],
          normalized_projected_pixel: [0.5263626652959577, 0.8036219443268483],
          camera_coordinates: [
            0.03377511045163617, 0.33669037802561597, 0.46408061787143096,
          ],
          frame_index: 3525,
          status: "last_past_track_end",
          fixture: "P01_drawer.006",
          world_coordinates: [
            -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 117.5,
              time_token: "<TIME 00:01:57.5 video 1>",
              projected_pixel: [741.1186327367084, 1131.4996976122025],
              normalized_projected_pixel: [
                0.5263626652959577, 0.8036219443268483,
              ],
              camera_coordinates: [
                0.03377511045163617, 0.33669037802561597, 0.46408061787143096,
              ],
              frame_index: 3525,
              status: "last_past_track_end",
              fixture: "P01_drawer.006",
              world_coordinates: [
                -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 118.0,
              time_token: "<TIME 00:01:58.0 video 1>",
              projected_pixel: [770.2097270189192, 1174.066376241039],
              normalized_projected_pixel: [
                0.5470239538486642, 0.8338539603984653,
              ],
              camera_coordinates: [
                0.055203342185973, 0.3596260547738698, 0.44271220881347295,
              ],
              frame_index: 3540,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_drawer.006",
              world_coordinates: [
                -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 119.0,
              time_token: "<TIME 00:01:59.0 video 1>",
              projected_pixel: [1042.0136982779989, 1325.4520735621877],
              normalized_projected_pixel: [
                0.7400665470724423, 0.9413722113367811,
              ],
              camera_coordinates: [
                0.261254057519577, 0.4707672742744424, 0.3580737972258543,
              ],
              frame_index: 3570,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_drawer.006",
              world_coordinates: [
                -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 120.0,
              time_token: "<TIME 00:02:00.0 video 1>",
              projected_pixel: [2563.243819379849, 2881.6100459637923],
              normalized_projected_pixel: [
                1.8204856671731882, 2.046598044008375,
              ],
              camera_coordinates: [
                0.44006288970720275, 0.5636989579944889, 0.1597613299330689,
              ],
              frame_index: 3600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_drawer.006",
              world_coordinates: [
                -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:02:04.0 video 1>, based on the last known position of the green roll of recyclable bags that was moved earlier, which fixture type is closest to it?",
        choices: ["cupboard", "drawer", "counter", "storage", "bin"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 117.5,
          correct_fixture: "drawer",
          display_correct_answer: "drawer",
          raw_correct_fixture: "P01_drawer.006",
          fixture_type_pool: [
            "bin",
            "counter",
            "cupboard",
            "drawer",
            "fridgefreezer",
            "oven",
            "shelf",
            "sink",
            "storage",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:02:04.0 video 1>, consider the green roll of recyclable bags that was moved earlier. Using its last known position to infer its current location, in which direction is the green roll of recyclable bags from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 124.0,
            camera_coordinates: [
              0.5738117378808725, 0.4932701305914543, 0.29203575841065876,
            ],
            world_coordinates: [
              -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.5738117378808725,
              z: 0.29203575841065876,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:02:04.0 video 1>, consider the green roll of recyclable bags that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, where is the green roll of recyclable bags relative to cone from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-right", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "344ce01b15288a18",
            object_x_name: "green roll of recyclable bags",
            object_x_reference_time_sec: 124.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
            ],
            object_x_camera_coordinates: [
              0.5738117378808725, 0.4932701305914543, 0.29203575841065876,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 124.0,
            object_y_world_coordinates: [
              -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
            ],
            object_y_projected_pixel: [1285.6543553627484, 867.3456586531022],
            object_y_normalized_projected_pixel: [
              0.9131067864792247, 0.6160125416570328,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:04.0 video 1>, consider the green roll of recyclable bags that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, how far is the green roll of recyclable bags from the cone: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "344ce01b15288a18",
            object_x_name: "green roll of recyclable bags",
            object_x_reference_time_sec: 124.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [1285.6543553627484, 867.3456586531022],
            object_y_normalized_projected_pixel: [
              0.9131067864792247, 0.6160125416570328,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.13010693507484516, 0.3713773639908714, -0.11218608552741349,
            ],
            distance_m: 0.40918782829568906,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_2: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "762824ba9d53a1cc",
    object_a_name: "plug of food processor",
    query_time_sec: 140.0,
    query_time_in_clip_sec: 140.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 140.0,
    clip_duration_sec: 140.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "762824ba9d53a1cc",
      object_name: "plug of food processor",
      query_time_sec: 140.0,
      oos_span_start_sec: 135.0,
      oos_span_end_sec: 182.0,
      oos_duration_sec: 47.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 140.0,
      clip_duration_sec: 140.0,
      anchor_assoc_id: "e5066ca31ca315c2",
      anchor_name: "coffee capsule",
      anchor_projected_pixel: [917.242724942598, 650.0353765763783],
      anchor_world_coordinates: [
        -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_2",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:20.0 video 1>, is the previously moved plug of food processor visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.3681432479374918, 1.4137222848638848, -0.7342773523036165,
          ],
          frame_index: 2174,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The plug of food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:14.0 video 1>; Point=(0.6749, 0.5442)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 134.0,
          sampled_last_visible_time_in_clip_sec: 134.0,
          sampled_last_visible_time_token: "<TIME 00:02:14.0 video 1>",
          projected_pixel: [950.3199656624462, 766.2219697876102],
          normalized_projected_pixel: [0.6749431574307146, 0.5441917399059731],
          camera_coordinates: [
            0.24981777204876687, 0.05948279241568538, 0.6061074971646161,
          ],
          frame_index: 2174,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 134.0,
              time_token: "<TIME 00:02:14.0 video 1>",
              projected_pixel: [950.3199656624462, 766.2219697876102],
              normalized_projected_pixel: [
                0.6749431574307146, 0.5441917399059731,
              ],
              camera_coordinates: [
                0.24981777204876687, 0.05948279241568538, 0.6061074971646161,
              ],
              frame_index: 2174,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The plug of food processor was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:12.5 video 1>; Point=(0.2428, 0.6645)",
          "<TIME 00:01:13.0 video 1>; Point=(0.1257, 0.6416)",
          "<TIME 00:01:14.0 video 1>; Point=(0.0562, 0.6235)",
          "<TIME 00:01:15.0 video 1>; Point=(0.5668, 0.4188)",
        ],
        answer_metadata: {
          last_placement_time_sec: 72.46666666666667,
          last_placement_time_in_clip_sec: 72.46666666666667,
          last_placement_time_token: "<TIME 00:01:12.5 video 1>",
          projected_pixel: [341.8856141201835, 935.5761237413119],
          normalized_projected_pixel: [0.2428164873012667, 0.6644716787935454],
          camera_coordinates: [
            -0.21248369307273407, 0.1366903359950798, 0.3492763214011758,
          ],
          frame_index: 2174,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 72.46666666666667,
              time_token: "<TIME 00:01:12.5 video 1>",
              projected_pixel: [341.8856141201835, 935.5761237413119],
              normalized_projected_pixel: [
                0.2428164873012667, 0.6644716787935454,
              ],
              camera_coordinates: [
                -0.21248369307273407, 0.1366903359950798, 0.3492763214011758,
              ],
              frame_index: 2174,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 73.0,
              time_token: "<TIME 00:01:13.0 video 1>",
              projected_pixel: [177.00360886647059, 903.3301829259038],
              normalized_projected_pixel: [
                0.1257127903881183, 0.6415697321916931,
              ],
              camera_coordinates: [
                -0.3301469907668815, 0.12495844845823814, 0.34934757842759373,
              ],
              frame_index: 2190,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 74.0,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [79.09590364386247, 877.8198394133706],
              normalized_projected_pixel: [
                0.056176067928879594, 0.6234515904924507,
              ],
              camera_coordinates: [
                -0.42968930506383884, 0.11932745770317149, 0.35846410911481774,
              ],
              frame_index: 2220,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 75.0,
              time_token: "<TIME 00:01:15.0 video 1>",
              projected_pixel: [798.113862022788, 589.6060354202183],
              normalized_projected_pixel: [
                0.5668422315502756, 0.4187542865200414,
              ],
              camera_coordinates: [
                0.08803720372066737, -0.10349243175409595, 0.5438916001151086,
              ],
              frame_index: 2250,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:02:20.0 video 1>, based on the last known position of the plug of food processor that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area below the boiler",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 72.46666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the plug of food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the plug of food processor from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 140.0,
            camera_coordinates: [
              1.3681432479374918, 1.4137222848638848, -0.7342773523036165,
            ],
            world_coordinates: [
              -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.3681432479374918,
              z: -0.7342773523036165,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the plug of food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, where is the plug of food processor relative to coffee capsule from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "762824ba9d53a1cc",
            object_x_name: "plug of food processor",
            object_x_reference_time_sec: 140.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
            ],
            object_x_camera_coordinates: [
              1.3681432479374918, 1.4137222848638848, -0.7342773523036165,
            ],
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_reference_time_sec: 140.0,
            object_y_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_y_projected_pixel: [917.242724942598, 650.0353765763783],
            object_y_normalized_projected_pixel: [
              0.6514507989649133, 0.46167285268208685,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the plug of food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, how far is the plug of food processor from the coffee capsule: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "762824ba9d53a1cc",
            object_x_name: "plug of food processor",
            object_x_reference_time_sec: 140.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_pixel: [917.242724942598, 650.0353765763783],
            object_y_normalized_projected_pixel: [
              0.6514507989649133, 0.46167285268208685,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.2176821847174275, 1.4524820969208656, -1.1558869483548848,
            ],
            distance_m: 2.2200290048175066,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_3: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "a955b01a2895c6f5",
    object_a_name: "one bag",
    query_time_sec: 140.0,
    query_time_in_clip_sec: 140.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 140.0,
    clip_duration_sec: 140.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "a955b01a2895c6f5",
      object_name: "one bag",
      query_time_sec: 140.0,
      oos_span_start_sec: 135.0,
      oos_span_end_sec: 182.0,
      oos_duration_sec: 47.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 140.0,
      clip_duration_sec: 140.0,
      anchor_assoc_id: "e5066ca31ca315c2",
      anchor_name: "coffee capsule",
      anchor_projected_pixel: [917.242724942598, 650.0353765763783],
      anchor_world_coordinates: [
        -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_3",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:20.0 video 1>, is the previously moved one bag visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.407083546760576, 1.3388466600417317, -0.4942330136099141,
          ],
          frame_index: 3828,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The one bag was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:14.0 video 1>; Point=(0.7271, 0.739)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 134.0,
          sampled_last_visible_time_in_clip_sec: 134.0,
          sampled_last_visible_time_token: "<TIME 00:02:14.0 video 1>",
          projected_pixel: [1023.6981569755392, 1040.5628100147774],
          normalized_projected_pixel: [0.7270583501246727, 0.7390360866582225],
          camera_coordinates: [
            0.25281241222991335, 0.2598895038026154, 0.44935236083697583,
          ],
          frame_index: 3828,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 134.0,
              time_token: "<TIME 00:02:14.0 video 1>",
              projected_pixel: [1023.6981569755392, 1040.5628100147774],
              normalized_projected_pixel: [
                0.7270583501246727, 0.7390360866582225,
              ],
              camera_coordinates: [
                0.25281241222991335, 0.2598895038026154, 0.44935236083697583,
              ],
              frame_index: 3828,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The one bag was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:07.6 video 1>; Point=(0.5699, 0.8163)",
          "<TIME 00:02:08.0 video 1>; Point=(0.6545, 0.8772)",
          "<TIME 00:02:09.0 video 1>; Point=(20.6462, 1.2785)",
          "<TIME 00:02:10.0 video 1>; Point=(31.5028, -1.1182)",
        ],
        answer_metadata: {
          last_placement_time_sec: 127.6,
          last_placement_time_in_clip_sec: 127.6,
          last_placement_time_token: "<TIME 00:02:07.6 video 1>",
          projected_pixel: [802.3596099142155, 1149.3623076325753],
          normalized_projected_pixel: [0.5698576774958917, 0.8163084571254086],
          camera_coordinates: [
            0.06313268751820322, 0.26917400652587353, 0.3524596293163742,
          ],
          frame_index: 3828,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 127.6,
              time_token: "<TIME 00:02:07.6 video 1>",
              projected_pixel: [802.3596099142155, 1149.3623076325753],
              normalized_projected_pixel: [
                0.5698576774958917, 0.8163084571254086,
              ],
              camera_coordinates: [
                0.06313268751820322, 0.26917400652587353, 0.3524596293163742,
              ],
              frame_index: 3828,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 128.0,
              time_token: "<TIME 00:02:08.0 video 1>",
              projected_pixel: [921.5753560257291, 1235.0330957930817],
              normalized_projected_pixel: [
                0.654527951722819, 0.877154187353041,
              ],
              camera_coordinates: [
                0.13570966759298075, 0.3214564506124456, 0.3327446775109095,
              ],
              frame_index: 3840,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 129.0,
              time_token: "<TIME 00:02:09.0 video 1>",
              projected_pixel: [29069.779718670557, 1800.1723692046025],
              normalized_projected_pixel: [
                20.646150368373977, 1.278531512219178,
              ],
              camera_coordinates: [
                0.4808689435384757, 0.48178843501591767, 0.07699645402692257,
              ],
              frame_index: 3870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 130.0,
              time_token: "<TIME 00:02:10.0 video 1>",
              projected_pixel: [44355.94186382162, -1574.4277802917209],
              normalized_projected_pixel: [
                31.502799619191492, -1.1182015485026426,
              ],
              camera_coordinates: [
                0.5554867526683649, 0.4849902166393729, 0.07545562724911514,
              ],
              frame_index: 3900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:02:20.0 video 1>, based on the last known position of the one bag that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 127.6,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the one bag that was moved earlier. Using its last known position to infer its current location, in which direction is the one bag from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 140.0,
            camera_coordinates: [
              1.407083546760576, 1.3388466600417317, -0.4942330136099141,
            ],
            world_coordinates: [
              -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.407083546760576,
              z: -0.4942330136099141,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the one bag that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, where is the one bag relative to coffee capsule from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "a955b01a2895c6f5",
            object_x_name: "one bag",
            object_x_reference_time_sec: 140.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
            ],
            object_x_camera_coordinates: [
              1.407083546760576, 1.3388466600417317, -0.4942330136099141,
            ],
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_reference_time_sec: 140.0,
            object_y_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_y_projected_pixel: [917.242724942598, 650.0353765763783],
            object_y_normalized_projected_pixel: [
              0.6514507989649133, 0.46167285268208685,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the one bag that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, how far is the one bag from the coffee capsule: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "a955b01a2895c6f5",
            object_x_name: "one bag",
            object_x_reference_time_sec: 140.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_pixel: [917.242724942598, 650.0353765763783],
            object_y_normalized_projected_pixel: [
              0.6514507989649133, 0.46167285268208685,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.2566224835405118, 1.3776064720987125, -0.9158426096611825,
            ],
            distance_m: 2.077418432521188,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_4: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "b3fb93f07305013c",
    object_a_name: "top lid of food processor",
    query_time_sec: 140.0,
    query_time_in_clip_sec: 140.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 140.0,
    clip_duration_sec: 140.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "b3fb93f07305013c",
      object_name: "top lid of food processor",
      query_time_sec: 140.0,
      oos_span_start_sec: 135.0,
      oos_span_end_sec: 182.0,
      oos_duration_sec: 47.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_shelf.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 140.0,
      clip_duration_sec: 140.0,
      anchor_assoc_id: "e5066ca31ca315c2",
      anchor_name: "coffee capsule",
      anchor_projected_pixel: [917.242724942598, 650.0353765763783],
      anchor_world_coordinates: [
        -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_4",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:20.0 video 1>, is the previously moved top lid of food processor visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.6504345880927254, 1.4610991049662645, -0.6426722133661881,
          ],
          frame_index: 2247,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The top lid of food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:14.0 video 1>; Point=(0.9222, 0.5819)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 134.0,
          sampled_last_visible_time_in_clip_sec: 134.0,
          sampled_last_visible_time_token: "<TIME 00:02:14.0 video 1>",
          projected_pixel: [1298.4761480466723, 819.3171720452066],
          normalized_projected_pixel: [0.9222131733286024, 0.5819014006002887],
          camera_coordinates: [
            0.9301773360294945, 0.17565606293419245, 0.8282705451629664,
          ],
          frame_index: 2247,
          status: "in_view",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.89989262863823, -2.579600327131345, -0.4518923475824765,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 134.0,
              time_token: "<TIME 00:02:14.0 video 1>",
              projected_pixel: [1298.4761480466723, 819.3171720452066],
              normalized_projected_pixel: [
                0.9222131733286024, 0.5819014006002887,
              ],
              camera_coordinates: [
                0.9301773360294945, 0.17565606293419245, 0.8282705451629664,
              ],
              frame_index: 2247,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The top lid of food processor was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:14.9 video 1>; Point=(0.9453, 0.6799)",
          "<TIME 00:01:15.0 video 1>; Point=(1.0507, 0.7373)",
        ],
        answer_metadata: {
          last_placement_time_sec: 74.9,
          last_placement_time_in_clip_sec: 74.9,
          last_placement_time_token: "<TIME 00:01:14.9 video 1>",
          projected_pixel: [1331.0470678965562, 957.3069406349091],
          normalized_projected_pixel: [0.9453459289038041, 0.6799054976100206],
          camera_coordinates: [
            0.5372300186989118, 0.2134571911306642, 0.4209938630721335,
          ],
          frame_index: 2247,
          status: "last_past_track_end",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.89989262863823, -2.579600327131345, -0.4518923475824765,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 74.9,
              time_token: "<TIME 00:01:14.9 video 1>",
              projected_pixel: [1331.0470678965562, 957.3069406349091],
              normalized_projected_pixel: [
                0.9453459289038041, 0.6799054976100206,
              ],
              camera_coordinates: [
                0.5372300186989118, 0.2134571911306642, 0.4209938630721335,
              ],
              frame_index: 2247,
              status: "last_past_track_end",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 75.0,
              time_token: "<TIME 00:01:15.0 video 1>",
              projected_pixel: [1479.3324666724943, 1038.1304677320552],
              normalized_projected_pixel: [
                1.0506622632617146, 0.7373085708324255,
              ],
              camera_coordinates: [
                0.6528226078652741, 0.27805438688683615, 0.29654314665496306,
              ],
              frame_index: 2250,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:02:20.0 video 1>, based on the last known position of the top lid of food processor that was moved earlier, which fixture type is closest to it?",
        choices: ["sink", "drawer", "cupboard", "counter", "shelf"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 74.9,
          correct_fixture: "shelf",
          display_correct_answer: "shelf",
          raw_correct_fixture: "P01_shelf.005",
          fixture_type_pool: [
            "bin",
            "counter",
            "cupboard",
            "drawer",
            "fridgefreezer",
            "oven",
            "shelf",
            "sink",
            "storage",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the top lid of food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the top lid of food processor from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 140.0,
            camera_coordinates: [
              0.6504345880927254, 1.4610991049662645, -0.6426722133661881,
            ],
            world_coordinates: [
              -1.89989262863823, -2.579600327131345, -0.4518923475824765,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.6504345880927254,
              z: -0.6426722133661881,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the top lid of food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, where is the top lid of food processor relative to coffee capsule from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "b3fb93f07305013c",
            object_x_name: "top lid of food processor",
            object_x_reference_time_sec: 140.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.89989262863823, -2.579600327131345, -0.4518923475824765,
            ],
            object_x_camera_coordinates: [
              0.6504345880927254, 1.4610991049662645, -0.6426722133661881,
            ],
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_reference_time_sec: 140.0,
            object_y_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_y_projected_pixel: [917.242724942598, 650.0353765763783],
            object_y_normalized_projected_pixel: [
              0.6514507989649133, 0.46167285268208685,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the top lid of food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, how far is the top lid of food processor from the coffee capsule: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "b3fb93f07305013c",
            object_x_name: "top lid of food processor",
            object_x_reference_time_sec: 140.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_pixel: [917.242724942598, 650.0353765763783],
            object_y_normalized_projected_pixel: [
              0.6514507989649133, 0.46167285268208685,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.4999735248726611, 1.4998589170232453, -1.0642818094174564,
            ],
            distance_m: 1.905845236740022,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_5: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e556b10f1cd07c2b",
    object_a_name: "food processor",
    query_time_sec: 140.0,
    query_time_in_clip_sec: 140.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 140.0,
    clip_duration_sec: 140.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e556b10f1cd07c2b",
      object_name: "food processor",
      query_time_sec: 140.0,
      oos_span_start_sec: 135.0,
      oos_span_end_sec: 182.0,
      oos_duration_sec: 47.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 140.0,
      clip_duration_sec: 140.0,
      anchor_assoc_id: "e5066ca31ca315c2",
      anchor_name: "coffee capsule",
      anchor_projected_pixel: [917.242724942598, 650.0353765763783],
      anchor_world_coordinates: [
        -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_5",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:20.0 video 1>, is the previously moved food processor visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.0143172998963146, 1.2761849098242415, -0.5130308092037031,
          ],
          frame_index: 2060,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:14.0 video 1>; Point=(0.9445, 0.6606)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 134.0,
          sampled_last_visible_time_in_clip_sec: 134.0,
          sampled_last_visible_time_token: "<TIME 00:02:14.0 video 1>",
          projected_pixel: [1329.8299065844776, 930.1950373097363],
          normalized_projected_pixel: [0.9444814677446574, 0.6606498844529377],
          camera_coordinates: [
            0.6445409221640679, 0.22890632341665912, 0.5136485020375281,
          ],
          frame_index: 2060,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 134.0,
              time_token: "<TIME 00:02:14.0 video 1>",
              projected_pixel: [1329.8299065844776, 930.1950373097363],
              normalized_projected_pixel: [
                0.9444814677446574, 0.6606498844529377,
              ],
              camera_coordinates: [
                0.6445409221640679, 0.22890632341665912, 0.5136485020375281,
              ],
              frame_index: 2060,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The food processor was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:08.7 video 1>; Point=(0.7416, 0.865)",
          "<TIME 00:01:09.0 video 1>; Point=(0.8062, 0.9032)",
          "<TIME 00:01:10.0 video 1>; Point=(0.8982, 0.8408)",
          "<TIME 00:01:11.0 video 1>; Point=(0.9279, 0.8519)",
        ],
        answer_metadata: {
          last_placement_time_sec: 68.66666666666667,
          last_placement_time_in_clip_sec: 68.66666666666667,
          last_placement_time_token: "<TIME 00:01:08.7 video 1>",
          projected_pixel: [1044.189487875134, 1217.9643145522832],
          normalized_projected_pixel: [0.7416118521840441, 0.8650314734036102],
          camera_coordinates: [
            0.19265137085946016, 0.28508845403999694, 0.2955463145813786,
          ],
          frame_index: 2060,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 68.66666666666667,
              time_token: "<TIME 00:01:08.7 video 1>",
              projected_pixel: [1044.189487875134, 1217.9643145522832],
              normalized_projected_pixel: [
                0.7416118521840441, 0.8650314734036102,
              ],
              camera_coordinates: [
                0.19265137085946016, 0.28508845403999694, 0.2955463145813786,
              ],
              frame_index: 2060,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 69.0,
              time_token: "<TIME 00:01:09.0 video 1>",
              projected_pixel: [1135.071094351414, 1271.7456072480213],
              normalized_projected_pixel: [
                0.8061584476927657, 0.9032284142386515,
              ],
              camera_coordinates: [
                0.24164947181983965, 0.3130088816923331, 0.25722550063769223,
              ],
              frame_index: 2070,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 70.0,
              time_token: "<TIME 00:01:10.0 video 1>",
              projected_pixel: [1264.6419801120576, 1183.8165571085642],
              normalized_projected_pixel: [
                0.8981832245114045, 0.8407788047646053,
              ],
              camera_coordinates: [
                0.380880718741178, 0.32143944399097796, 0.2906559547408305,
              ],
              frame_index: 2100,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 71.0,
              time_token: "<TIME 00:01:11.0 video 1>",
              projected_pixel: [1306.4590505987626, 1199.460469309038],
              normalized_projected_pixel: [
                0.9278828484366212, 0.8518895378615327,
              ],
              camera_coordinates: [
                0.4063739964896276, 0.3299031257887124, 0.2528334848503384,
              ],
              frame_index: 2130,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:02:20.0 video 1>, based on the last known position of the food processor that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 68.66666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area close to the microwave",
          raw_correct_fixture: "P01_counter.008",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the food processor from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 140.0,
            camera_coordinates: [
              1.0143172998963146, 1.2761849098242415, -0.5130308092037031,
            ],
            world_coordinates: [
              -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.0143172998963146,
              z: -0.5130308092037031,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, where is the food processor relative to coffee capsule from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "e556b10f1cd07c2b",
            object_x_name: "food processor",
            object_x_reference_time_sec: 140.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
            ],
            object_x_camera_coordinates: [
              1.0143172998963146, 1.2761849098242415, -0.5130308092037031,
            ],
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_reference_time_sec: 140.0,
            object_y_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_y_projected_pixel: [917.242724942598, 650.0353765763783],
            object_y_normalized_projected_pixel: [
              0.6514507989649133, 0.46167285268208685,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, how far is the food processor from the coffee capsule: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "e556b10f1cd07c2b",
            object_x_name: "food processor",
            object_x_reference_time_sec: 140.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_pixel: [917.242724942598, 650.0353765763783],
            object_y_normalized_projected_pixel: [
              0.6514507989649133, 0.46167285268208685,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8638562366762503, 1.3149447218812222, -0.9346404052549715,
            ],
            distance_m: 1.8299945099324522,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_6: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e5572d6184029f52",
    object_a_name: "food bin",
    query_time_sec: 140.0,
    query_time_in_clip_sec: 140.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 140.0,
    clip_duration_sec: 140.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e5572d6184029f52",
      object_name: "food bin",
      query_time_sec: 140.0,
      oos_span_start_sec: 135.0,
      oos_span_end_sec: 182.0,
      oos_duration_sec: 47.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 140.0,
      clip_duration_sec: 140.0,
      anchor_assoc_id: "e5066ca31ca315c2",
      anchor_name: "coffee capsule",
      anchor_projected_pixel: [917.242724942598, 650.0353765763783],
      anchor_world_coordinates: [
        -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_6",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:20.0 video 1>, is the previously moved food bin visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.4064326731282915, 1.288501977665737, -0.5685770904903601,
          ],
          frame_index: 3842,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The food bin was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:14.0 video 1>; Point=(0.7505, 0.6698)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 134.0,
          sampled_last_visible_time_in_clip_sec: 134.0,
          sampled_last_visible_time_token: "<TIME 00:02:14.0 video 1>",
          projected_pixel: [1056.635801304763, 943.0469882795369],
          normalized_projected_pixel: [0.7504515634266782, 0.6697776905394438],
          camera_coordinates: [
            0.26165028538575896, 0.1730221908456151, 0.4284235676337729,
          ],
          frame_index: 3842,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5138433269281386, -3.2403746913953553, -0.30644085620316736,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 134.0,
              time_token: "<TIME 00:02:14.0 video 1>",
              projected_pixel: [1056.635801304763, 943.0469882795369],
              normalized_projected_pixel: [
                0.7504515634266782, 0.6697776905394438,
              ],
              camera_coordinates: [
                0.26165028538575896, 0.1730221908456151, 0.4284235676337729,
              ],
              frame_index: 3842,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5138433269281386, -3.2403746913953553, -0.30644085620316736,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The food bin was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:08.1 video 1>; Point=(0.7482, 0.8284)",
          "<TIME 00:02:09.0 video 1>; Point=(45.9422, -4.5212)",
          "<TIME 00:02:10.0 video 1>; Point=(85.4593, -14.2445)",
          "<TIME 00:02:11.0 video 1>; Point=(219.5574, -47.5341)",
        ],
        answer_metadata: {
          last_placement_time_sec: 128.06666666666666,
          last_placement_time_in_clip_sec: 128.06666666666666,
          last_placement_time_token: "<TIME 00:02:08.1 video 1>",
          projected_pixel: [1053.4917447037828, 1166.3559483414876],
          normalized_projected_pixel: [0.7482185686816639, 0.8283778042198066],
          camera_coordinates: [
            0.19395769871228907, 0.2513322689262042, 0.29773274118830395,
          ],
          frame_index: 3842,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5138433269281386, -3.2403746913953553, -0.30644085620316736,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 128.06666666666666,
              time_token: "<TIME 00:02:08.1 video 1>",
              projected_pixel: [1053.4917447037828, 1166.3559483414876],
              normalized_projected_pixel: [
                0.7482185686816639, 0.8283778042198066,
              ],
              camera_coordinates: [
                0.19395769871228907, 0.2513322689262042, 0.29773274118830395,
              ],
              frame_index: 3842,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5138433269281386, -3.2403746913953553, -0.30644085620316736,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 129.0,
              time_token: "<TIME 00:02:09.0 video 1>",
              projected_pixel: [64686.59584343155, -6365.896668979838],
              normalized_projected_pixel: [
                45.94218454789172, -4.52123342967318,
              ],
              camera_coordinates: [
                0.5066812745714366, 0.3975127393596194, 0.059868023406385085,
              ],
              frame_index: 3870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5138433269281386, -3.2403746913953553, -0.30644085620316736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 130.0,
              time_token: "<TIME 00:02:10.0 video 1>",
              projected_pixel: [120326.72510373157, -20056.216379716876],
              normalized_projected_pixel: [
                85.45932180662754, -14.244471860594372,
              ],
              camera_coordinates: [
                0.5825327048397118, 0.4018089014329739, 0.05517169964843571,
              ],
              frame_index: 3900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5138433269281386, -3.2403746913953553, -0.30644085620316736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 131.0,
              time_token: "<TIME 00:02:11.0 video 1>",
              projected_pixel: [309136.8636522108, -66927.99695217347],
              normalized_projected_pixel: [
                219.55743157117243, -47.53408874444139,
              ],
              camera_coordinates: [
                0.5818062482841886, 0.4613492677377472, 0.041328532133111384,
              ],
              frame_index: 3930,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5138433269281386, -3.2403746913953553, -0.30644085620316736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:02:20.0 video 1>, based on the last known position of the food bin that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 128.06666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the food bin that was moved earlier. Using its last known position to infer its current location, in which direction is the food bin from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 140.0,
            camera_coordinates: [
              1.4064326731282915, 1.288501977665737, -0.5685770904903601,
            ],
            world_coordinates: [
              -1.5138433269281386, -3.2403746913953553, -0.30644085620316736,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.4064326731282915,
              z: -0.5685770904903601,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the food bin that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, where is the food bin relative to coffee capsule from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "e5572d6184029f52",
            object_x_name: "food bin",
            object_x_reference_time_sec: 140.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5138433269281386, -3.2403746913953553, -0.30644085620316736,
            ],
            object_x_camera_coordinates: [
              1.4064326731282915, 1.288501977665737, -0.5685770904903601,
            ],
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_reference_time_sec: 140.0,
            object_y_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_y_projected_pixel: [917.242724942598, 650.0353765763783],
            object_y_normalized_projected_pixel: [
              0.6514507989649133, 0.46167285268208685,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:20.0 video 1>, consider the food bin that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, how far is the food bin from the coffee capsule: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "e5572d6184029f52",
            object_x_name: "food bin",
            object_x_reference_time_sec: 140.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_pixel: [917.242724942598, 650.0353765763783],
            object_y_normalized_projected_pixel: [
              0.6514507989649133, 0.46167285268208685,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.2559716099082272, 1.3272617897227177, -0.9901866865416284,
            ],
            distance_m: 2.078354690027115,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_7: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e44a21e6e04d424c",
    object_a_name: "mug",
    query_time_sec: 186.0,
    query_time_in_clip_sec: 186.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 186.0,
    clip_duration_sec: 186.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e44a21e6e04d424c",
      object_name: "mug",
      query_time_sec: 186.0,
      oos_span_start_sec: 181.0,
      oos_span_end_sec: 348.0,
      oos_duration_sec: 167.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 186.0,
      clip_duration_sec: 186.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [257.1294133931865, 967.8235131952379],
      anchor_world_coordinates: [
        -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_7",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:06.0 video 1>, is the previously moved mug visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.3203922948218683, 0.7286295309968429, -0.235156393532162,
          ],
          frame_index: 4542,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The mug was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:57.0 video 1>; Point=(0.4475, 0.5182)",
          "<TIME 00:02:58.0 video 1>; Point=(0.4709, 0.6361)",
          "<TIME 00:02:59.0 video 1>; Point=(0.4181, 0.7089)",
          "<TIME 00:03:00.0 video 1>; Point=(0.2382, 0.7284)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 180.0,
          sampled_last_visible_time_in_clip_sec: 180.0,
          sampled_last_visible_time_token: "<TIME 00:03:00.0 video 1>",
          projected_pixel: [335.40466600296094, 1025.6471091321778],
          normalized_projected_pixel: [0.23821354119528476, 0.7284425490995581],
          camera_coordinates: [
            -0.26982530528492865, 0.23752701507287155, 0.4257015227495615,
          ],
          frame_index: 4542,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 177.0,
              time_token: "<TIME 00:02:57.0 video 1>",
              projected_pixel: [630.103543444101, 729.6660943500748],
              normalized_projected_pixel: [
                0.4475167211960944, 0.5182287601918145,
              ],
              camera_coordinates: [
                -0.15005867751593732, 0.05085890823195438, 1.337035386082745,
              ],
              frame_index: 4542,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 178.0,
              time_token: "<TIME 00:02:58.0 video 1>",
              projected_pixel: [662.9794097305797, 895.5615975488096],
              normalized_projected_pixel: [
                0.47086605804728676, 0.6360522709863704,
              ],
              camera_coordinates: [
                -0.03741167566357184, 0.19779570739213936, 0.6405924101991523,
              ],
              frame_index: 4542,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 179.0,
              time_token: "<TIME 00:02:59.0 video 1>",
              projected_pixel: [588.7087774636925, 998.1477820796475],
              normalized_projected_pixel: [
                0.41811702944864526, 0.7089117770452042,
              ],
              camera_coordinates: [
                -0.0908000316242934, 0.24110391788049135, 0.4996450105645176,
              ],
              frame_index: 4542,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 180.0,
              time_token: "<TIME 00:03:00.0 video 1>",
              projected_pixel: [335.40466600296094, 1025.6471091321778],
              normalized_projected_pixel: [
                0.23821354119528476, 0.7284425490995581,
              ],
              camera_coordinates: [
                -0.26982530528492865, 0.23752701507287155, 0.4257015227495615,
              ],
              frame_index: 4542,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The mug was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:31.4 video 1>; Point=(0.617, 0.7601)",
          "<TIME 00:02:32.0 video 1>; Point=(3.382, 2.7167)",
        ],
        answer_metadata: {
          last_placement_time_sec: 151.4,
          last_placement_time_in_clip_sec: 151.4,
          last_placement_time_token: "<TIME 00:02:31.4 video 1>",
          projected_pixel: [868.791544882566, 1070.2205458765811],
          normalized_projected_pixel: [0.6170394494904587, 0.7600998195146172],
          camera_coordinates: [
            0.10851837599360303, 0.23195471287369096, 0.3769631928642932,
          ],
          frame_index: 4542,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 151.4,
              time_token: "<TIME 00:02:31.4 video 1>",
              projected_pixel: [868.791544882566, 1070.2205458765811],
              normalized_projected_pixel: [
                0.6170394494904587, 0.7600998195146172,
              ],
              camera_coordinates: [
                0.10851837599360303, 0.23195471287369096, 0.3769631928642932,
              ],
              frame_index: 4542,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 152.0,
              time_token: "<TIME 00:02:32.0 video 1>",
              projected_pixel: [4761.883494768003, 3825.110328279823],
              normalized_projected_pixel: [
                3.3820195275340934, 2.7166976763351016,
              ],
              camera_coordinates: [
                0.39260690679539334, 0.4369142043350476, 0.10519210595510842,
              ],
              frame_index: 4560,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:06.0 video 1>, based on the last known position of the mug that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area below the boiler",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 151.4,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the fridge and the hob",
          raw_correct_fixture: "P01_counter.001",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:06.0 video 1>, consider the mug that was moved earlier. Using its last known position to infer its current location, in which direction is the mug from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 186.0,
            camera_coordinates: [
              1.3203922948218683, 0.7286295309968429, -0.235156393532162,
            ],
            world_coordinates: [
              -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.3203922948218683,
              z: -0.235156393532162,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:06.0 video 1>, consider the mug that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, where is the mug relative to cone from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "e44a21e6e04d424c",
            object_x_name: "mug",
            object_x_reference_time_sec: 186.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
            ],
            object_x_camera_coordinates: [
              1.3203922948218683, 0.7286295309968429, -0.235156393532162,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 186.0,
            object_y_world_coordinates: [
              -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
            ],
            object_y_projected_pixel: [257.1294133931865, 967.8235131952379],
            object_y_normalized_projected_pixel: [
              0.18262032201220632, 0.6873746542579814,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:06.0 video 1>, consider the mug that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, how far is the mug from the cone: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "e44a21e6e04d424c",
            object_x_name: "mug",
            object_x_reference_time_sec: 186.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [257.1294133931865, 967.8235131952379],
            object_y_normalized_projected_pixel: [
              0.18262032201220632, 0.6873746542579814,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.5301231757010925, 0.6042120818237204, -0.5036715376402768,
            ],
            distance_m: 1.7204749897828422,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_8: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "c60c10f7d1acb901",
    object_a_name: "lid of milk frother",
    query_time_sec: 186.0,
    query_time_in_clip_sec: 186.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 186.0,
    clip_duration_sec: 186.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "c60c10f7d1acb901",
      object_name: "lid of milk frother",
      query_time_sec: 186.0,
      oos_span_start_sec: 181.0,
      oos_span_end_sec: 348.0,
      oos_duration_sec: 167.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 186.0,
      clip_duration_sec: 186.0,
      anchor_assoc_id: "36a5f41a2ff0b00f",
      anchor_name: "second orange",
      anchor_projected_pixel: [794.3751534019152, 1040.3545722412332],
      anchor_world_coordinates: [
        -1.553505699697717, -2.631776075243622, -0.5344925110722092,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_8",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:06.0 video 1>, is the previously moved lid of milk frother visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.2001723835001417, 0.8038041522993993, -0.4186933809584319,
          ],
          frame_index: 5396,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid of milk frother was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:57.0 video 1>; Point=(0.4807, 0.5632)",
          "<TIME 00:02:58.0 video 1>; Point=(0.5754, 0.7664)",
          "<TIME 00:02:59.0 video 1>; Point=(0.5833, 0.8217)",
          "<TIME 00:03:00.0 video 1>; Point=(0.4053, 0.582)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 180.0,
          sampled_last_visible_time_in_clip_sec: 180.0,
          sampled_last_visible_time_token: "<TIME 00:03:00.0 video 1>",
          projected_pixel: [570.6797745649238, 819.5119458465766],
          normalized_projected_pixel: [0.40531233988986065, 0.5820397342660345],
          camera_coordinates: [
            -0.10231666274246809, 0.0903828994709831, 0.48957123730206037,
          ],
          frame_index: 5396,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.358569128705764, -1.703000926376473, -0.3998278790577944,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 177.0,
              time_token: "<TIME 00:02:57.0 video 1>",
              projected_pixel: [676.7656242095558, 793.007793692309],
              normalized_projected_pixel: [
                0.48065740355792314, 0.5632157625655604,
              ],
              camera_coordinates: [
                -0.042557433213738394, 0.1670023585582181, 1.1812118166057088,
              ],
              frame_index: 5370,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5070217665190996, -1.7700132102822472, -0.5491672832781016,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 178.0,
              time_token: "<TIME 00:02:58.0 video 1>",
              projected_pixel: [810.2073429314328, 1079.1172606330279],
              normalized_projected_pixel: [
                0.5754313515138016, 0.7664185089723209,
              ],
              camera_coordinates: [
                0.09848178778431016, 0.32878227631410895, 0.5235356344919584,
              ],
              frame_index: 5370,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5070217665190996, -1.7700132102822472, -0.5491672832781016,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 179.0,
              time_token: "<TIME 00:02:59.0 video 1>",
              projected_pixel: [821.2393510086416, 1157.0074049000257],
              normalized_projected_pixel: [
                0.5832665845231829, 0.8217382137074046,
              ],
              camera_coordinates: [
                0.09562727857817488, 0.3509578834323698, 0.4496073482692573,
              ],
              frame_index: 5370,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5070217665190996, -1.7700132102822472, -0.5491672832781016,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 180.0,
              time_token: "<TIME 00:03:00.0 video 1>",
              projected_pixel: [570.6797745649238, 819.5119458465766],
              normalized_projected_pixel: [
                0.40531233988986065, 0.5820397342660345,
              ],
              camera_coordinates: [
                -0.10231666274246809, 0.0903828994709831, 0.48957123730206037,
              ],
              frame_index: 5396,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The lid of milk frother was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:59.9 video 1>; Point=(0.527, 0.5992)",
          "<TIME 00:03:00.0 video 1>; Point=(0.4053, 0.582)",
          "<TIME 00:03:01.0 video 1>; Point=(-0.3882, 0.7409)",
          "<TIME 00:03:02.0 video 1>; Point=(-0.8083, 0.9973)",
        ],
        answer_metadata: {
          last_placement_time_sec: 179.86666666666667,
          last_placement_time_in_clip_sec: 179.86666666666667,
          last_placement_time_token: "<TIME 00:02:59.9 video 1>",
          projected_pixel: [741.9679871775925, 843.7168510525114],
          normalized_projected_pixel: [0.5269658999840856, 0.5992307180770677],
          camera_coordinates: [
            0.03632677259438277, 0.11562772116993558, 0.5163359529849898,
          ],
          frame_index: 5396,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.358569128705764, -1.703000926376473, -0.3998278790577944,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 179.86666666666667,
              time_token: "<TIME 00:02:59.9 video 1>",
              projected_pixel: [741.9679871775925, 843.7168510525114],
              normalized_projected_pixel: [
                0.5269658999840856, 0.5992307180770677,
              ],
              camera_coordinates: [
                0.03632677259438277, 0.11562772116993558, 0.5163359529849898,
              ],
              frame_index: 5396,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 180.0,
              time_token: "<TIME 00:03:00.0 video 1>",
              projected_pixel: [570.6797745649238, 819.5119458465766],
              normalized_projected_pixel: [
                0.40531233988986065, 0.5820397342660345,
              ],
              camera_coordinates: [
                -0.10231666274246809, 0.0903828994709831, 0.48957123730206037,
              ],
              frame_index: 5400,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 181.0,
              time_token: "<TIME 00:03:01.0 video 1>",
              projected_pixel: [-546.5613638689877, 1043.2049541895758],
              normalized_projected_pixel: [
                -0.38818278683876967, 0.7409126095096419,
              ],
              camera_coordinates: [
                -0.6354488245726739, 0.17322624185280053, 0.20500035845948933,
              ],
              frame_index: 5430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 182.0,
              time_token: "<TIME 00:03:02.0 video 1>",
              projected_pixel: [-1138.05368123466, 1404.1307626154216],
              normalized_projected_pixel: [
                -0.8082767622405256, 0.9972519620848165,
              ],
              camera_coordinates: [
                -0.688065947807919, 0.2625707952187415, 0.1893084244421523,
              ],
              frame_index: 5460,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:06.0 video 1>, based on the last known position of the lid of milk frother that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 179.86666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the fridge and the hob",
          raw_correct_fixture: "P01_counter.001",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:06.0 video 1>, consider the lid of milk frother that was moved earlier. Using its last known position to infer its current location, in which direction is the lid of milk frother from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 186.0,
            camera_coordinates: [
              1.2001723835001417, 0.8038041522993993, -0.4186933809584319,
            ],
            world_coordinates: [
              -0.358569128705764, -1.703000926376473, -0.3998278790577944,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.2001723835001417,
              z: -0.4186933809584319,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:06.0 video 1>, consider the lid of milk frother that was moved earlier. Using its last known position to infer its current location, and using the current position of the second orange (marked in red) in the current frame, where is the lid of milk frother relative to second orange from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "c60c10f7d1acb901",
            object_x_name: "lid of milk frother",
            object_x_reference_time_sec: 186.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.358569128705764, -1.703000926376473, -0.3998278790577944,
            ],
            object_x_camera_coordinates: [
              1.2001723835001417, 0.8038041522993993, -0.4186933809584319,
            ],
            object_y_assoc_id: "36a5f41a2ff0b00f",
            object_y_name: "second orange",
            object_y_reference_time_sec: 186.0,
            object_y_world_coordinates: [
              -1.553505699697717, -2.631776075243622, -0.5344925110722092,
            ],
            object_y_projected_pixel: [794.3751534019152, 1040.3545722412332],
            object_y_normalized_projected_pixel: [
              0.5641868987229511, 0.7388881905122395,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:06.0 video 1>, consider the lid of milk frother that was moved earlier. Using its last known position to infer its current location, and using the current position of the second orange (marked in red) in the current frame, how far is the lid of milk frother from the second orange: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "c60c10f7d1acb901",
            object_x_name: "lid of milk frother",
            object_x_reference_time_sec: 186.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "36a5f41a2ff0b00f",
            object_y_name: "second orange",
            object_y_pixel: [794.3751534019152, 1040.3545722412332],
            object_y_normalized_projected_pixel: [
              0.5641868987229511, 0.7388881905122395,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.1341083257454732, 0.5734074292203162, -0.8328466092579871,
            ],
            distance_m: 1.5194180626025144,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_9: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "cc058509b79d0313",
    object_a_name: "milk frother base",
    query_time_sec: 186.0,
    query_time_in_clip_sec: 186.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 186.0,
    clip_duration_sec: 186.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "cc058509b79d0313",
      object_name: "milk frother base",
      query_time_sec: 186.0,
      oos_span_start_sec: 181.0,
      oos_span_end_sec: 348.0,
      oos_duration_sec: 167.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 186.0,
      clip_duration_sec: 186.0,
      anchor_assoc_id: "e5dc98cfa1bdfbd0",
      anchor_name: "blue chopping board",
      anchor_projected_pixel: [808.7278469081256, 993.3029501503011],
      anchor_world_coordinates: [
        -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_9",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:06.0 video 1>, is the previously moved milk frother base visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.179325690547596, 0.8489640425555033, -0.34160575916123376,
          ],
          frame_index: 5343,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The milk frother base was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:59.0 video 1>; Point=(0.5949, 0.6894)",
          "<TIME 00:03:00.0 video 1>; Point=(0.4234, 0.6495)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 180.0,
          sampled_last_visible_time_in_clip_sec: 180.0,
          sampled_last_visible_time_token: "<TIME 00:03:00.0 video 1>",
          projected_pixel: [596.1959304177016, 914.4808364978855],
          normalized_projected_pixel: [0.423434609671663, 0.6494892304672483],
          camera_coordinates: [
            -0.08683803858661876, 0.17629711473539555, 0.5177787104092191,
          ],
          frame_index: 5343,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 179.0,
              time_token: "<TIME 00:02:59.0 video 1>",
              projected_pixel: [837.623798702625, 970.6197820670646],
              normalized_projected_pixel: [
                0.5949032661240234, 0.6893606406726311,
              ],
              camera_coordinates: [
                0.1208588037894398, 0.22986861735413677, 0.527679888301938,
              ],
              frame_index: 5343,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 180.0,
              time_token: "<TIME 00:03:00.0 video 1>",
              projected_pixel: [596.1959304177016, 914.4808364978855],
              normalized_projected_pixel: [
                0.423434609671663, 0.6494892304672483,
              ],
              camera_coordinates: [
                -0.08683803858661876, 0.17629711473539555, 0.5177787104092191,
              ],
              frame_index: 5343,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The milk frother base was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:58.1 video 1>; Point=(0.6151, 0.6755)",
          "<TIME 00:02:59.0 video 1>; Point=(0.5949, 0.6894)",
          "<TIME 00:03:00.0 video 1>; Point=(0.4234, 0.6495)",
          "<TIME 00:03:01.0 video 1>; Point=(-0.069, 0.7198)",
        ],
        answer_metadata: {
          last_placement_time_sec: 178.1,
          last_placement_time_in_clip_sec: 178.1,
          last_placement_time_token: "<TIME 00:02:58.1 video 1>",
          projected_pixel: [866.086453980851, 951.0652939886792],
          normalized_projected_pixel: [0.6151182201568545, 0.6754725099351414],
          camera_coordinates: [
            0.1578517051626399, 0.23076138599129448, 0.572306223421392,
          ],
          frame_index: 5343,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 178.1,
              time_token: "<TIME 00:02:58.1 video 1>",
              projected_pixel: [866.086453980851, 951.0652939886792],
              normalized_projected_pixel: [
                0.6151182201568545, 0.6754725099351414,
              ],
              camera_coordinates: [
                0.1578517051626399, 0.23076138599129448, 0.572306223421392,
              ],
              frame_index: 5343,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 179.0,
              time_token: "<TIME 00:02:59.0 video 1>",
              projected_pixel: [837.623798702625, 970.6197820670646],
              normalized_projected_pixel: [
                0.5949032661240234, 0.6893606406726311,
              ],
              camera_coordinates: [
                0.1208588037894398, 0.22986861735413677, 0.527679888301938,
              ],
              frame_index: 5370,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 180.0,
              time_token: "<TIME 00:03:00.0 video 1>",
              projected_pixel: [596.1959304177016, 914.4808364978855],
              normalized_projected_pixel: [
                0.423434609671663, 0.6494892304672483,
              ],
              camera_coordinates: [
                -0.08683803858661876, 0.17629711473539555, 0.5177787104092191,
              ],
              frame_index: 5400,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 181.0,
              time_token: "<TIME 00:03:01.0 video 1>",
              projected_pixel: [-97.18977097081245, 1013.4547481379618],
              normalized_projected_pixel: [
                -0.06902682597358839, 0.7197832018025297,
              ],
              camera_coordinates: [
                -0.5986744889565334, 0.2318774728967276, 0.26520154670666823,
              ],
              frame_index: 5430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:06.0 video 1>, based on the last known position of the milk frother base that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area next to the window",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 178.1,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the fridge and the hob",
          raw_correct_fixture: "P01_counter.001",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:06.0 video 1>, consider the milk frother base that was moved earlier. Using its last known position to infer its current location, in which direction is the milk frother base from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 186.0,
            camera_coordinates: [
              1.179325690547596, 0.8489640425555033, -0.34160575916123376,
            ],
            world_coordinates: [
              -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.179325690547596,
              z: -0.34160575916123376,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:06.0 video 1>, consider the milk frother base that was moved earlier. Using its last known position to infer its current location, and using the current position of the blue chopping board (marked in red) in the current frame, where is the milk frother base relative to blue chopping board from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "cc058509b79d0313",
            object_x_name: "milk frother base",
            object_x_reference_time_sec: 186.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
            ],
            object_x_camera_coordinates: [
              1.179325690547596, 0.8489640425555033, -0.34160575916123376,
            ],
            object_y_assoc_id: "e5dc98cfa1bdfbd0",
            object_y_name: "blue chopping board",
            object_y_reference_time_sec: 186.0,
            object_y_world_coordinates: [
              -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
            ],
            object_y_projected_pixel: [808.7278469081256, 993.3029501503011],
            object_y_normalized_projected_pixel: [
              0.5743805730881574, 0.7054708452772025,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:06.0 video 1>, consider the milk frother base that was moved earlier. Using its last known position to infer its current location, and using the current position of the blue chopping board (marked in red) in the current frame, how far is the milk frother base from the blue chopping board: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "cc058509b79d0313",
            object_x_name: "milk frother base",
            object_x_reference_time_sec: 186.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e5dc98cfa1bdfbd0",
            object_y_name: "blue chopping board",
            object_y_pixel: [808.7278469081256, 993.3029501503011],
            object_y_normalized_projected_pixel: [
              0.5743805730881574, 0.7054708452772025,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.0818012157612507, 0.5947148723401945, -0.8782265969412149,
            ],
            distance_m: 1.515012080935357,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_10: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e5066ca31ca315c2",
    object_a_name: "coffee capsule",
    query_time_sec: 186.0,
    query_time_in_clip_sec: 186.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 186.0,
    clip_duration_sec: 186.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e5066ca31ca315c2",
      object_name: "coffee capsule",
      query_time_sec: 186.0,
      oos_span_start_sec: 181.0,
      oos_span_end_sec: 348.0,
      oos_duration_sec: 167.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 186.0,
      clip_duration_sec: 186.0,
      anchor_assoc_id: "b3fb93f07305013c",
      anchor_name: "top lid of food processor",
      anchor_projected_pixel: [742.9537965855045, 623.0279613472591],
      anchor_world_coordinates: [
        -1.89989262863823, -2.579600327131345, -0.4518923475824765,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_10",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:06.0 video 1>, is the previously moved coffee capsule visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.3500462511218765, 0.8085564615767387, -0.47050986945941425,
          ],
          frame_index: 512,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The coffee capsule was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:57.0 video 1>; Point=(0.511, 0.4724)",
          "<TIME 00:02:58.0 video 1>; Point=(0.5848, 0.5269)",
          "<TIME 00:02:59.0 video 1>; Point=(0.5171, 0.5366)",
          "<TIME 00:03:00.0 video 1>; Point=(0.3085, 0.5156)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 180.0,
          sampled_last_visible_time_in_clip_sec: 180.0,
          sampled_last_visible_time_token: "<TIME 00:03:00.0 video 1>",
          projected_pixel: [434.3908964560661, 725.9548324067944],
          normalized_projected_pixel: [0.308516261687547, 0.5155929207434619],
          camera_coordinates: [
            -0.2340783517099887, 0.01740222166368821, 0.5393947970619912,
          ],
          frame_index: 512,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 177.0,
              time_token: "<TIME 00:02:57.0 video 1>",
              projected_pixel: [719.4780927293832, 665.1057714088996],
              normalized_projected_pixel: [
                0.5109929635862097, 0.4723762581029117,
              ],
              camera_coordinates: [
                0.046844236628390934, -0.09375288521326952, 1.3915844610999544,
              ],
              frame_index: 512,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 178.0,
              time_token: "<TIME 00:02:58.0 video 1>",
              projected_pixel: [823.330590350743, 741.9135461736292],
              normalized_projected_pixel: [
                0.5847518397377436, 0.5269272344983162,
              ],
              camera_coordinates: [
                0.14446416241487414, 0.041257662302725095, 0.7118381114733581,
              ],
              frame_index: 512,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 179.0,
              time_token: "<TIME 00:02:59.0 video 1>",
              projected_pixel: [728.1453401079209, 755.5470631357051],
              normalized_projected_pixel: [
                0.5171486790539211, 0.5366101300679724,
              ],
              camera_coordinates: [
                0.0289640134449074, 0.048637481324323883, 0.6058155069146769,
              ],
              frame_index: 512,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 180.0,
              time_token: "<TIME 00:03:00.0 video 1>",
              projected_pixel: [434.3908964560661, 725.9548324067944],
              normalized_projected_pixel: [
                0.308516261687547, 0.5155929207434619,
              ],
              camera_coordinates: [
                -0.2340783517099887, 0.01740222166368821, 0.5393947970619912,
              ],
              frame_index: 512,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The coffee capsule was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:17.1 video 1>; Point=(0.5794, 0.6939)",
          "<TIME 00:00:18.0 video 1>; Point=(0.6098, 0.7031)",
          "<TIME 00:00:19.0 video 1>; Point=(1.0176, 0.6643)",
          "<TIME 00:00:20.0 video 1>; Point=(0.9964, 0.6218)",
        ],
        answer_metadata: {
          last_placement_time_sec: 17.066666666666666,
          last_placement_time_in_clip_sec: 17.066666666666666,
          last_placement_time_token: "<TIME 00:00:17.1 video 1>",
          projected_pixel: [815.8550175293915, 977.0337979918461],
          normalized_projected_pixel: [0.579442484040761, 0.693916049710118],
          camera_coordinates: [
            0.07652906072722421, 0.1767822623175327, 0.39641937501053526,
          ],
          frame_index: 512,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 17.066666666666666,
              time_token: "<TIME 00:00:17.1 video 1>",
              projected_pixel: [815.8550175293915, 977.0337979918461],
              normalized_projected_pixel: [
                0.579442484040761, 0.693916049710118,
              ],
              camera_coordinates: [
                0.07652906072722421, 0.1767822623175327, 0.39641937501053526,
              ],
              frame_index: 512,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 18.0,
              time_token: "<TIME 00:00:18.0 video 1>",
              projected_pixel: [858.5811147396989, 989.9807277928666],
              normalized_projected_pixel: [
                0.609787723536718, 0.7031113123528882,
              ],
              camera_coordinates: [
                0.10710719949664327, 0.18995209675104952, 0.404191972539808,
              ],
              frame_index: 540,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 19.0,
              time_token: "<TIME 00:00:19.0 video 1>",
              projected_pixel: [1432.714711606306, 935.3556910521024],
              normalized_projected_pixel: [
                1.0175530622203879, 0.6643151214858682,
              ],
              camera_coordinates: [
                0.7078162952354661, 0.22134570741109227, 0.378551547454536,
              ],
              frame_index: 570,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 20.0,
              time_token: "<TIME 00:00:20.0 video 1>",
              projected_pixel: [1402.8967048935226, 875.5351362082215],
              normalized_projected_pixel: [
                0.9963755006346041, 0.6218289319660664,
              ],
              camera_coordinates: [
                0.8180776484459776, 0.1970901385563285, 0.5279932340389586,
              ],
              frame_index: 600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:06.0 video 1>, based on the last known position of the coffee capsule that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area below the boiler",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 17.066666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the fridge and the hob",
          raw_correct_fixture: "P01_counter.001",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:06.0 video 1>, consider the coffee capsule that was moved earlier. Using its last known position to infer its current location, in which direction is the coffee capsule from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 186.0,
            camera_coordinates: [
              1.3500462511218765, 0.8085564615767387, -0.47050986945941425,
            ],
            world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.3500462511218765,
              z: -0.47050986945941425,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:06.0 video 1>, consider the coffee capsule that was moved earlier. Using its last known position to infer its current location, and using the current position of the top lid of food processor (marked in red) in the current frame, where is the coffee capsule relative to top lid of food processor from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "e5066ca31ca315c2",
            object_x_name: "coffee capsule",
            object_x_reference_time_sec: 186.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_x_camera_coordinates: [
              1.3500462511218765, 0.8085564615767387, -0.47050986945941425,
            ],
            object_y_assoc_id: "b3fb93f07305013c",
            object_y_name: "top lid of food processor",
            object_y_reference_time_sec: 186.0,
            object_y_world_coordinates: [
              -1.89989262863823, -2.579600327131345, -0.4518923475824765,
            ],
            object_y_projected_pixel: [742.9537965855045, 623.0279613472591],
            object_y_normalized_projected_pixel: [
              0.5276660487112959, 0.4424914498204965,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:06.0 video 1>, consider the coffee capsule that was moved earlier. Using its last known position to infer its current location, and using the current position of the top lid of food processor (marked in red) in the current frame, how far is the coffee capsule from the top lid of food processor: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "e5066ca31ca315c2",
            object_x_name: "coffee capsule",
            object_x_reference_time_sec: 186.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "b3fb93f07305013c",
            object_y_name: "top lid of food processor",
            object_y_pixel: [742.9537965855045, 623.0279613472591],
            object_y_normalized_projected_pixel: [
              0.5276660487112959, 0.4424914498204965,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.3073329523467647, 0.8892505556104158, -1.064124084615836,
            ],
            distance_m: 1.9058452367400225,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_11: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "98dfab7aa5cc00f7",
    object_a_name: "pack of oranges",
    query_time_sec: 193.0,
    query_time_in_clip_sec: 193.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 193.0,
    clip_duration_sec: 193.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "98dfab7aa5cc00f7",
      object_name: "pack of oranges",
      query_time_sec: 193.0,
      oos_span_start_sec: 188.0,
      oos_span_end_sec: 203.0,
      oos_duration_sec: 15.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 193.0,
      clip_duration_sec: 193.0,
      anchor_assoc_id: "762824ba9d53a1cc",
      anchor_name: "plug of food processor",
      anchor_projected_pixel: [522.8558777198534, 549.019564540384],
      anchor_world_coordinates: [
        -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_11",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:13.0 video 1>, is the previously moved pack of oranges visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1863.1753560401135, 1262.3191023568002],
          camera_coordinates: [
            0.9945594328139533, 0.4785238573399102, 0.3452288179612346,
          ],
          frame_index: 1583,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pack of oranges was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:05.0 video 1>; Point=(0.9614, 0.5799)",
          "<TIME 00:03:06.0 video 1>; Point=(0.9476, 0.5377)",
          "<TIME 00:03:07.0 video 1>; Point=(0.9537, 0.6039)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 187.0,
          sampled_last_visible_time_in_clip_sec: 187.0,
          sampled_last_visible_time_token: "<TIME 00:03:07.0 video 1>",
          projected_pixel: [1342.8179551409225, 850.2662610123973],
          normalized_projected_pixel: [0.9537059340489507, 0.6038822876508504],
          camera_coordinates: [
            0.698717955738565, 0.15650027309730957, 0.5523064300489684,
          ],
          frame_index: 1583,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 185.0,
              time_token: "<TIME 00:03:05.0 video 1>",
              projected_pixel: [1353.632548698506, 816.5546126282533],
              normalized_projected_pixel: [
                0.9613867533370072, 0.579939355559839,
              ],
              camera_coordinates: [
                0.7200970776531781, 0.1216009198125968, 0.5570552637600192,
              ],
              frame_index: 1583,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 186.0,
              time_token: "<TIME 00:03:06.0 video 1>",
              projected_pixel: [1334.159629189442, 757.0228177080477],
              normalized_projected_pixel: [
                0.9475565548220469, 0.5376582512131021,
              ],
              camera_coordinates: [
                0.6936575342829547, 0.055743663497908824, 0.5694082999032923,
              ],
              frame_index: 1583,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 187.0,
              time_token: "<TIME 00:03:07.0 video 1>",
              projected_pixel: [1342.8179551409225, 850.2662610123973],
              normalized_projected_pixel: [
                0.9537059340489507, 0.6038822876508504,
              ],
              camera_coordinates: [
                0.698717955738565, 0.15650027309730957, 0.5523064300489684,
              ],
              frame_index: 1583,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The pack of oranges was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:52.8 video 1>; Point=(0.5858, 0.7787)",
          "<TIME 00:00:53.0 video 1>; Point=(0.5905, 0.7597)",
          "<TIME 00:00:54.0 video 1>; Point=(0.6359, 0.7637)",
          "<TIME 00:00:55.0 video 1>; Point=(0.5974, 0.7613)",
        ],
        answer_metadata: {
          last_placement_time_sec: 52.766666666666666,
          last_placement_time_in_clip_sec: 52.766666666666666,
          last_placement_time_token: "<TIME 00:00:52.8 video 1>",
          projected_pixel: [824.8272249561401, 1096.3436425582445],
          normalized_projected_pixel: [0.5858147904518041, 0.778653155226026],
          camera_coordinates: [
            0.09726744699243639, 0.300345941185844, 0.45413175656108007,
          ],
          frame_index: 1583,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 52.766666666666666,
              time_token: "<TIME 00:00:52.8 video 1>",
              projected_pixel: [824.8272249561401, 1096.3436425582445],
              normalized_projected_pixel: [
                0.5858147904518041, 0.778653155226026,
              ],
              camera_coordinates: [
                0.09726744699243639, 0.300345941185844, 0.45413175656108007,
              ],
              frame_index: 1583,
              status: "last_past_track_end",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 53.0,
              time_token: "<TIME 00:00:53.0 video 1>",
              projected_pixel: [831.4109598274499, 1069.641448321308],
              normalized_projected_pixel: [
                0.5904907385138138, 0.7596885286372926,
              ],
              camera_coordinates: [
                0.10272649015163982, 0.28091728036198904, 0.45933736878272935,
              ],
              frame_index: 1590,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 54.0,
              time_token: "<TIME 00:00:54.0 video 1>",
              projected_pixel: [895.3651331357918, 1075.2307161182212],
              normalized_projected_pixel: [
                0.6359127366021249, 0.7636581790612366,
              ],
              camera_coordinates: [
                0.14847778169568504, 0.2782824757298946, 0.4437245347344634,
              ],
              frame_index: 1620,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 55.0,
              time_token: "<TIME 00:00:55.0 video 1>",
              projected_pixel: [841.118707542943, 1071.8698129460195],
              normalized_projected_pixel: [
                0.5973854456981129, 0.7612711739673433,
              ],
              camera_coordinates: [
                0.10910775673869133, 0.279747857697321, 0.45388565808290937,
              ],
              frame_index: 1650,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:13.0 video 1>, based on the last known position of the pack of oranges that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 52.766666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area close to the microwave",
          raw_correct_fixture: "P01_counter.009",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:13.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, in which direction is the pack of oranges from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 193.0,
            camera_coordinates: [
              0.9945594328139533, 0.4785238573399102, 0.3452288179612346,
            ],
            world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.9945594328139533,
              z: 0.3452288179612346,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:13.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, and using the current position of the plug of food processor (marked in red) in the current frame, where is the pack of oranges relative to plug of food processor from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 193.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            object_x_camera_coordinates: [
              0.9945594328139533, 0.4785238573399102, 0.3452288179612346,
            ],
            object_y_assoc_id: "762824ba9d53a1cc",
            object_y_name: "plug of food processor",
            object_y_reference_time_sec: 193.0,
            object_y_world_coordinates: [
              -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
            ],
            object_y_projected_pixel: [522.8558777198534, 549.019564540384],
            object_y_normalized_projected_pixel: [
              0.3713465040623959, 0.3899286679974318,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:13.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, and using the current position of the plug of food processor (marked in red) in the current frame, how far is the pack of oranges from the plug of food processor: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 193.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "762824ba9d53a1cc",
            object_y_name: "plug of food processor",
            object_y_pixel: [522.8558777198534, 549.019564540384],
            object_y_normalized_projected_pixel: [
              0.3713465040623959, 0.3899286679974318,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.1519000827447008, 0.6192529193501974, -0.20144488030230434,
            ],
            distance_m: 1.3232263670857682,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_12: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "98dfab7aa5cc00f7",
    object_a_name: "pack of oranges",
    query_time_sec: 210.0,
    query_time_in_clip_sec: 210.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 210.0,
    clip_duration_sec: 210.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "98dfab7aa5cc00f7",
      object_name: "pack of oranges",
      query_time_sec: 210.0,
      oos_span_start_sec: 205.0,
      oos_span_end_sec: 219.0,
      oos_duration_sec: 14.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 210.0,
      clip_duration_sec: 210.0,
      anchor_assoc_id: "36a5f41a2ff0b00f",
      anchor_name: "second orange",
      anchor_projected_pixel: [1165.7112886263262, 1116.5878224145615],
      anchor_world_coordinates: [
        -1.553505699697717, -2.631776075243622, -0.5344925110722092,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_12",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:30.0 video 1>, is the previously moved pack of oranges visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [2117.431186566907, 1334.781687468777],
          camera_coordinates: [
            1.0095055472581367, 0.453608171263556, 0.318473882586376,
          ],
          frame_index: 1583,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pack of oranges was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:24.0 video 1>; Point=(0.8601, 0.6033)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 204.0,
          sampled_last_visible_time_in_clip_sec: 204.0,
          sampled_last_visible_time_token: "<TIME 00:03:24.0 video 1>",
          projected_pixel: [1210.9936071366255, 849.482935874026],
          normalized_projected_pixel: [0.8600806868868079, 0.6033259487741662],
          camera_coordinates: [
            0.7671769121982548, 0.21458980592711352, 0.8402114850859382,
          ],
          frame_index: 1583,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 204.0,
              time_token: "<TIME 00:03:24.0 video 1>",
              projected_pixel: [1210.9936071366255, 849.482935874026],
              normalized_projected_pixel: [
                0.8600806868868079, 0.6033259487741662,
              ],
              camera_coordinates: [
                0.7671769121982548, 0.21458980592711352, 0.8402114850859382,
              ],
              frame_index: 1583,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The pack of oranges was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:52.8 video 1>; Point=(0.5858, 0.7787)",
          "<TIME 00:00:53.0 video 1>; Point=(0.5905, 0.7597)",
          "<TIME 00:00:54.0 video 1>; Point=(0.6359, 0.7637)",
          "<TIME 00:00:55.0 video 1>; Point=(0.5974, 0.7613)",
        ],
        answer_metadata: {
          last_placement_time_sec: 52.766666666666666,
          last_placement_time_in_clip_sec: 52.766666666666666,
          last_placement_time_token: "<TIME 00:00:52.8 video 1>",
          projected_pixel: [824.8272249561401, 1096.3436425582445],
          normalized_projected_pixel: [0.5858147904518041, 0.778653155226026],
          camera_coordinates: [
            0.09726744699243639, 0.300345941185844, 0.45413175656108007,
          ],
          frame_index: 1583,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 52.766666666666666,
              time_token: "<TIME 00:00:52.8 video 1>",
              projected_pixel: [824.8272249561401, 1096.3436425582445],
              normalized_projected_pixel: [
                0.5858147904518041, 0.778653155226026,
              ],
              camera_coordinates: [
                0.09726744699243639, 0.300345941185844, 0.45413175656108007,
              ],
              frame_index: 1583,
              status: "last_past_track_end",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 53.0,
              time_token: "<TIME 00:00:53.0 video 1>",
              projected_pixel: [831.4109598274499, 1069.641448321308],
              normalized_projected_pixel: [
                0.5904907385138138, 0.7596885286372926,
              ],
              camera_coordinates: [
                0.10272649015163982, 0.28091728036198904, 0.45933736878272935,
              ],
              frame_index: 1590,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 54.0,
              time_token: "<TIME 00:00:54.0 video 1>",
              projected_pixel: [895.3651331357918, 1075.2307161182212],
              normalized_projected_pixel: [
                0.6359127366021249, 0.7636581790612366,
              ],
              camera_coordinates: [
                0.14847778169568504, 0.2782824757298946, 0.4437245347344634,
              ],
              frame_index: 1620,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 55.0,
              time_token: "<TIME 00:00:55.0 video 1>",
              projected_pixel: [841.118707542943, 1071.8698129460195],
              normalized_projected_pixel: [
                0.5973854456981129, 0.7612711739673433,
              ],
              camera_coordinates: [
                0.10910775673869133, 0.279747857697321, 0.45388565808290937,
              ],
              frame_index: 1650,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:30.0 video 1>, based on the last known position of the pack of oranges that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 52.766666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area close to the microwave",
          raw_correct_fixture: "P01_counter.009",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:30.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, in which direction is the pack of oranges from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 210.0,
            camera_coordinates: [
              1.0095055472581367, 0.453608171263556, 0.318473882586376,
            ],
            world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.0095055472581367,
              z: 0.318473882586376,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:30.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, and using the current position of the second orange (marked in red) in the current frame, where is the pack of oranges relative to second orange from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 210.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            object_x_camera_coordinates: [
              1.0095055472581367, 0.453608171263556, 0.318473882586376,
            ],
            object_y_assoc_id: "36a5f41a2ff0b00f",
            object_y_name: "second orange",
            object_y_reference_time_sec: 210.0,
            object_y_world_coordinates: [
              -1.553505699697717, -2.631776075243622, -0.5344925110722092,
            ],
            object_y_projected_pixel: [1165.7112886263262, 1116.5878224145615],
            object_y_normalized_projected_pixel: [
              0.8279199493084703, 0.7930311238739783,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:30.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, and using the current position of the second orange (marked in red) in the current frame, how far is the pack of oranges from the second orange: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 210.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "36a5f41a2ff0b00f",
            object_y_name: "second orange",
            object_y_pixel: [1165.7112886263262, 1116.5878224145615],
            object_y_normalized_projected_pixel: [
              0.8279199493084703, 0.7930311238739783,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6493731516347347, 0.13728936249076984, -0.08914898285150308,
            ],
            distance_m: 0.669687539275301,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_13: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "98dfab7aa5cc00f7",
    object_a_name: "pack of oranges",
    query_time_sec: 230.0,
    query_time_in_clip_sec: 230.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 230.0,
    clip_duration_sec: 230.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "98dfab7aa5cc00f7",
      object_name: "pack of oranges",
      query_time_sec: 230.0,
      oos_span_start_sec: 225.0,
      oos_span_end_sec: 253.0,
      oos_duration_sec: 28.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 230.0,
      clip_duration_sec: 230.0,
      anchor_assoc_id: "e5dc98cfa1bdfbd0",
      anchor_name: "blue chopping board",
      anchor_projected_pixel: [1138.3613179862696, 1074.1749274710994],
      anchor_world_coordinates: [
        -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_13",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:50.0 video 1>, is the previously moved pack of oranges visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1692.7713148171156, 1085.395225834486],
          camera_coordinates: [
            1.0475026014945221, 0.4013752813502909, 0.38892125023251034,
          ],
          frame_index: 1583,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pack of oranges was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:41.0 video 1>; Point=(0.9283, 0.6536)",
          "<TIME 00:03:42.0 video 1>; Point=(0.9285, 0.5984)",
          "<TIME 00:03:43.0 video 1>; Point=(0.9465, 0.5642)",
          "<TIME 00:03:44.0 video 1>; Point=(0.9657, 0.5359)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 224.0,
          sampled_last_visible_time_in_clip_sec: 224.0,
          sampled_last_visible_time_token: "<TIME 00:03:44.0 video 1>",
          projected_pixel: [1359.7664000179186, 754.6067911224604],
          normalized_projected_pixel: [0.9657431818309081, 0.5359423232403838],
          camera_coordinates: [
            0.696962629992675, 0.051343463657933686, 0.535075874428599,
          ],
          frame_index: 1583,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 221.0,
              time_token: "<TIME 00:03:41.0 video 1>",
              projected_pixel: [1307.0324332157356, 920.3311131380731],
              normalized_projected_pixel: [
                0.9282900804089032, 0.6536442564901087,
              ],
              camera_coordinates: [
                0.5686932842611578, 0.2002817956502726, 0.4838997120680357,
              ],
              frame_index: 1583,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 222.0,
              time_token: "<TIME 00:03:42.0 video 1>",
              projected_pixel: [1307.3562443971205, 842.5673913571187],
              normalized_projected_pixel: [
                0.9285200599411367, 0.5984143404524991,
              ],
              camera_coordinates: [
                0.6963170416950799, 0.1561754717572938, 0.6042418746367212,
              ],
              frame_index: 1583,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 223.0,
              time_token: "<TIME 00:03:43.0 video 1>",
              projected_pixel: [1332.6685438866189, 794.4289813273074],
              normalized_projected_pixel: [
                0.9464975453740191, 0.564225128783599,
              ],
              camera_coordinates: [
                0.6843617997448659, 0.09547626846400104, 0.5616507778187809,
              ],
              frame_index: 1583,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 224.0,
              time_token: "<TIME 00:03:44.0 video 1>",
              projected_pixel: [1359.7664000179186, 754.6067911224604],
              normalized_projected_pixel: [
                0.9657431818309081, 0.5359423232403838,
              ],
              camera_coordinates: [
                0.696962629992675, 0.051343463657933686, 0.535075874428599,
              ],
              frame_index: 1583,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The pack of oranges was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:52.8 video 1>; Point=(0.5858, 0.7787)",
          "<TIME 00:00:53.0 video 1>; Point=(0.5905, 0.7597)",
          "<TIME 00:00:54.0 video 1>; Point=(0.6359, 0.7637)",
          "<TIME 00:00:55.0 video 1>; Point=(0.5974, 0.7613)",
        ],
        answer_metadata: {
          last_placement_time_sec: 52.766666666666666,
          last_placement_time_in_clip_sec: 52.766666666666666,
          last_placement_time_token: "<TIME 00:00:52.8 video 1>",
          projected_pixel: [824.8272249561401, 1096.3436425582445],
          normalized_projected_pixel: [0.5858147904518041, 0.778653155226026],
          camera_coordinates: [
            0.09726744699243639, 0.300345941185844, 0.45413175656108007,
          ],
          frame_index: 1583,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 52.766666666666666,
              time_token: "<TIME 00:00:52.8 video 1>",
              projected_pixel: [824.8272249561401, 1096.3436425582445],
              normalized_projected_pixel: [
                0.5858147904518041, 0.778653155226026,
              ],
              camera_coordinates: [
                0.09726744699243639, 0.300345941185844, 0.45413175656108007,
              ],
              frame_index: 1583,
              status: "last_past_track_end",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 53.0,
              time_token: "<TIME 00:00:53.0 video 1>",
              projected_pixel: [831.4109598274499, 1069.641448321308],
              normalized_projected_pixel: [
                0.5904907385138138, 0.7596885286372926,
              ],
              camera_coordinates: [
                0.10272649015163982, 0.28091728036198904, 0.45933736878272935,
              ],
              frame_index: 1590,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 54.0,
              time_token: "<TIME 00:00:54.0 video 1>",
              projected_pixel: [895.3651331357918, 1075.2307161182212],
              normalized_projected_pixel: [
                0.6359127366021249, 0.7636581790612366,
              ],
              camera_coordinates: [
                0.14847778169568504, 0.2782824757298946, 0.4437245347344634,
              ],
              frame_index: 1620,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 55.0,
              time_token: "<TIME 00:00:55.0 video 1>",
              projected_pixel: [841.118707542943, 1071.8698129460195],
              normalized_projected_pixel: [
                0.5973854456981129, 0.7612711739673433,
              ],
              camera_coordinates: [
                0.10910775673869133, 0.279747857697321, 0.45388565808290937,
              ],
              frame_index: 1650,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:50.0 video 1>, based on the last known position of the pack of oranges that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area below the boiler",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 52.766666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area close to the microwave",
          raw_correct_fixture: "P01_counter.009",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:50.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, in which direction is the pack of oranges from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 230.0,
            camera_coordinates: [
              1.0475026014945221, 0.4013752813502909, 0.38892125023251034,
            ],
            world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.0475026014945221,
              z: 0.38892125023251034,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:50.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, and using the current position of the blue chopping board (marked in red) in the current frame, where is the pack of oranges relative to blue chopping board from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 230.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            object_x_camera_coordinates: [
              1.0475026014945221, 0.4013752813502909, 0.38892125023251034,
            ],
            object_y_assoc_id: "e5dc98cfa1bdfbd0",
            object_y_name: "blue chopping board",
            object_y_reference_time_sec: 230.0,
            object_y_world_coordinates: [
              -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
            ],
            object_y_projected_pixel: [1138.3613179862696, 1074.1749274710994],
            object_y_normalized_projected_pixel: [
              0.808495254251612, 0.7629083291698149,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:50.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, and using the current position of the blue chopping board (marked in red) in the current frame, how far is the pack of oranges from the blue chopping board: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 230.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e5dc98cfa1bdfbd0",
            object_y_name: "blue chopping board",
            object_y_pixel: [1138.3613179862696, 1074.1749274710994],
            object_y_normalized_projected_pixel: [
              0.808495254251612, 0.7629083291698149,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6078978797432315, 0.03364893520410828, -0.15868835955331217,
            ],
            distance_m: 0.6291693559721483,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_14: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "00bcef63aa22aa44",
    object_a_name: "knife",
    query_time_sec: 342.0,
    query_time_in_clip_sec: 342.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 342.0,
    clip_duration_sec: 342.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "00bcef63aa22aa44",
      object_name: "knife",
      query_time_sec: 342.0,
      oos_span_start_sec: 337.0,
      oos_span_end_sec: 355.0,
      oos_duration_sec: 18.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 342.0,
      clip_duration_sec: 342.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [221.94921263031262, 1008.1330940798066],
      anchor_world_coordinates: [
        -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_14",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:42.0 video 1>, is the previously moved knife visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.45660682376988704, 1.2304375886721788, -0.5363060301709703,
          ],
          frame_index: 9473,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The knife was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:35.0 video 1>; Point=(0.9476, 0.7149)",
          "<TIME 00:05:36.0 video 1>; Point=(0.9487, 0.7137)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 336.0,
          sampled_last_visible_time_in_clip_sec: 336.0,
          sampled_last_visible_time_token: "<TIME 00:05:36.0 video 1>",
          projected_pixel: [1335.7477994753517, 1004.8630754111824],
          normalized_projected_pixel: [0.948684516672835, 0.7136811615136239],
          camera_coordinates: [
            0.7211731992771768, 0.33826658105461005, 0.5391804702383485,
          ],
          frame_index: 9473,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 335.0,
              time_token: "<TIME 00:05:35.0 video 1>",
              projected_pixel: [1334.2572989461148, 1006.5458659391268],
              normalized_projected_pixel: [
                0.9476259225469565, 0.7148763252408571,
              ],
              camera_coordinates: [
                0.7119859296117759, 0.3366218701808191, 0.5342170189096902,
              ],
              frame_index: 9473,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [1335.7477994753517, 1004.8630754111824],
              normalized_projected_pixel: [
                0.948684516672835, 0.7136811615136239,
              ],
              camera_coordinates: [
                0.7211731992771768, 0.33826658105461005, 0.5391804702383485,
              ],
              frame_index: 9473,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The knife was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:15.8 video 1>; Point=(0.7459, 0.7712)",
          "<TIME 00:05:16.0 video 1>; Point=(0.7523, 0.8192)",
          "<TIME 00:05:17.0 video 1>; Point=(0.7985, 0.8734)",
          "<TIME 00:05:18.0 video 1>; Point=(0.8019, 0.8704)",
        ],
        answer_metadata: {
          last_placement_time_sec: 315.76666666666665,
          last_placement_time_in_clip_sec: 315.76666666666665,
          last_placement_time_token: "<TIME 00:05:15.8 video 1>",
          projected_pixel: [1050.1653031162223, 1085.8186784096317],
          normalized_projected_pixel: [0.7458560391450443, 0.7711780386432043],
          camera_coordinates: [
            0.3096471005238972, 0.3341809291464888, 0.49748443407409404,
          ],
          frame_index: 9473,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 315.76666666666665,
              time_token: "<TIME 00:05:15.8 video 1>",
              projected_pixel: [1050.1653031162223, 1085.8186784096317],
              normalized_projected_pixel: [
                0.7458560391450443, 0.7711780386432043,
              ],
              camera_coordinates: [
                0.3096471005238972, 0.3341809291464888, 0.49748443407409404,
              ],
              frame_index: 9473,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 316.0,
              time_token: "<TIME 00:05:16.0 video 1>",
              projected_pixel: [1059.1939524194245, 1153.475499481314],
              normalized_projected_pixel: [
                0.7522684321160685, 0.8192297581543424,
              ],
              camera_coordinates: [
                0.30899941295045696, 0.3830532930339141, 0.4688504813145351,
              ],
              frame_index: 9480,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 317.0,
              time_token: "<TIME 00:05:17.0 video 1>",
              projected_pixel: [1124.317857550389, 1229.800102094457],
              normalized_projected_pixel: [
                0.798521205646583, 0.8734375725102678,
              ],
              camera_coordinates: [
                0.35698941092901215, 0.43889338953329304, 0.4182794655886424,
              ],
              frame_index: 9510,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 318.0,
              time_token: "<TIME 00:05:18.0 video 1>",
              projected_pixel: [1129.1417821007733, 1225.5637650358844],
              normalized_projected_pixel: [
                0.8019472884238447, 0.8704288103948042,
              ],
              camera_coordinates: [
                0.3651167267350728, 0.4402723250518632, 0.42315167927237485,
              ],
              frame_index: 9540,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:42.0 video 1>, based on the last known position of the knife that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 315.76666666666665,
          correct_fixture: "counter",
          display_correct_answer: "counter area close to the microwave",
          raw_correct_fixture: "P01_counter.008",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:42.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, in which direction is the knife from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 342.0,
            camera_coordinates: [
              0.45660682376988704, 1.2304375886721788, -0.5363060301709703,
            ],
            world_coordinates: [
              -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.45660682376988704,
              z: -0.5363060301709703,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:42.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, where is the knife relative to cone from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "00bcef63aa22aa44",
            object_x_name: "knife",
            object_x_reference_time_sec: 342.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
            ],
            object_x_camera_coordinates: [
              0.45660682376988704, 1.2304375886721788, -0.5363060301709703,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 342.0,
            object_y_world_coordinates: [
              -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
            ],
            object_y_projected_pixel: [221.94921263031262, 1008.1330940798066],
            object_y_normalized_projected_pixel: [
              0.15763438397039248, 0.7160036179544081,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:42.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, how far is the knife from the cone: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "00bcef63aa22aa44",
            object_x_name: "knife",
            object_x_reference_time_sec: 342.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [221.94921263031262, 1008.1330940798066],
            object_y_normalized_projected_pixel: [
              0.15763438397039248, 0.7160036179544081,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7987481883494507, 1.01342726215577, -0.9310095989276199,
            ],
            distance_m: 1.5911669797250814,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_15: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e5dc98cfa1bdfbd0",
    object_a_name: "blue chopping board",
    query_time_sec: 342.0,
    query_time_in_clip_sec: 342.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 342.0,
    clip_duration_sec: 342.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e5dc98cfa1bdfbd0",
      object_name: "blue chopping board",
      query_time_sec: 342.0,
      oos_span_start_sec: 337.0,
      oos_span_end_sec: 355.0,
      oos_duration_sec: 18.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 342.0,
      clip_duration_sec: 342.0,
      anchor_assoc_id: "c79d145ffded5b56",
      anchor_name: "green sponge",
      anchor_projected_pixel: [720.125087318623, 841.2875908492938],
      anchor_world_coordinates: [
        -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_15",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:42.0 video 1>, is the previously moved blue chopping board visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.4571095466699713, 1.2657303748151247, -0.5023147473452263,
          ],
          frame_index: 1970,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The blue chopping board was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:35.0 video 1>; Point=(0.9314, 0.7327)",
          "<TIME 00:05:36.0 video 1>; Point=(0.9327, 0.7315)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 336.0,
          sampled_last_visible_time_in_clip_sec: 336.0,
          sampled_last_visible_time_token: "<TIME 00:05:36.0 video 1>",
          projected_pixel: [1313.2049187002008, 1029.970816656279],
          normalized_projected_pixel: [0.9326739479404835, 0.7315133641024709],
          camera_coordinates: [
            0.7188925955230148, 0.37888121014251797, 0.5665024676535055,
          ],
          frame_index: 1970,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 335.0,
              time_token: "<TIME 00:05:35.0 video 1>",
              projected_pixel: [1311.4692084033695, 1031.6839591642815],
              normalized_projected_pixel: [
                0.9314411991501204, 0.7327300846337227,
              ],
              camera_coordinates: [
                0.709849199817413, 0.3771549300732524, 0.5616714581450486,
              ],
              frame_index: 1970,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [1313.2049187002008, 1029.970816656279],
              normalized_projected_pixel: [
                0.9326739479404835, 0.7315133641024709,
              ],
              camera_coordinates: [
                0.7188925955230148, 0.37888121014251797, 0.5665024676535055,
              ],
              frame_index: 1970,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The blue chopping board was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:05.7 video 1>; Point=(0.576, 0.9247)",
          "<TIME 00:01:06.0 video 1>; Point=(0.5352, 1.0012)",
          "<TIME 00:01:07.0 video 1>; Point=(0.4853, 1.3593)",
          "<TIME 00:01:08.0 video 1>; Point=(0.8372, 0.915)",
        ],
        answer_metadata: {
          last_placement_time_sec: 65.66666666666667,
          last_placement_time_in_clip_sec: 65.66666666666667,
          last_placement_time_token: "<TIME 00:01:05.7 video 1>",
          projected_pixel: [810.938747960512, 1302.0192689008973],
          normalized_projected_pixel: [0.5759508153128636, 0.9247295943898418],
          camera_coordinates: [
            0.09163137843732949, 0.48446076216690964, 0.43489934615314885,
          ],
          frame_index: 1970,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 65.66666666666667,
              time_token: "<TIME 00:01:05.7 video 1>",
              projected_pixel: [810.938747960512, 1302.0192689008973],
              normalized_projected_pixel: [
                0.5759508153128636, 0.9247295943898418,
              ],
              camera_coordinates: [
                0.09163137843732949, 0.48446076216690964, 0.43489934615314885,
              ],
              frame_index: 1970,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 66.0,
              time_token: "<TIME 00:01:06.0 video 1>",
              projected_pixel: [753.5137849014922, 1409.712764371585],
              normalized_projected_pixel: [
                0.5351660404129915, 1.0012164519684552,
              ],
              camera_coordinates: [
                0.0435111698642312, 0.5529511254462421, 0.37143379641427,
              ],
              frame_index: 1980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 67.0,
              time_token: "<TIME 00:01:07.0 video 1>",
              projected_pixel: [683.3341055731372, 1913.8423241967907],
              normalized_projected_pixel: [
                0.48532251816273947, 1.3592630143443116,
              ],
              camera_coordinates: [
                -0.00880541340027996, 0.634855007886616, 0.20462214881182472,
              ],
              frame_index: 2010,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 68.0,
              time_token: "<TIME 00:01:08.0 video 1>",
              projected_pixel: [1178.7455198942537, 1288.3744020280433],
              normalized_projected_pixel: [
                0.837177215833987, 0.915038637804008,
              ],
              camera_coordinates: [
                0.444249636244735, 0.5385973765012425, 0.3799333797303439,
              ],
              frame_index: 2040,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:42.0 video 1>, based on the last known position of the blue chopping board that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area next to the window",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 65.66666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area close to the microwave",
          raw_correct_fixture: "P01_counter.008",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:42.0 video 1>, consider the blue chopping board that was moved earlier. Using its last known position to infer its current location, in which direction is the blue chopping board from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 342.0,
            camera_coordinates: [
              0.4571095466699713, 1.2657303748151247, -0.5023147473452263,
            ],
            world_coordinates: [
              -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.4571095466699713,
              z: -0.5023147473452263,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:42.0 video 1>, consider the blue chopping board that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, where is the blue chopping board relative to green sponge from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "e5dc98cfa1bdfbd0",
            object_x_name: "blue chopping board",
            object_x_reference_time_sec: 342.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
            ],
            object_x_camera_coordinates: [
              0.4571095466699713, 1.2657303748151247, -0.5023147473452263,
            ],
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_reference_time_sec: 342.0,
            object_y_world_coordinates: [
              -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
            ],
            object_y_projected_pixel: [720.125087318623, 841.2875908492938],
            object_y_normalized_projected_pixel: [
              0.5114524767887947, 0.5975053912281916,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:42.0 video 1>, consider the blue chopping board that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, how far is the blue chopping board from the green sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "e5dc98cfa1bdfbd0",
            object_x_name: "blue chopping board",
            object_x_reference_time_sec: 342.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_pixel: [720.125087318623, 841.2875908492938],
            object_y_normalized_projected_pixel: [
              0.5114524767887947, 0.5975053912281916,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.4380832201095757, 1.145243681981575, -1.0499858536418523,
            ],
            distance_m: 1.6143017969723936,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_16: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "11785d3856c2848f",
    object_a_name: "right half of third orange",
    query_time_sec: 343.0,
    query_time_in_clip_sec: 343.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 343.0,
    clip_duration_sec: 343.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "11785d3856c2848f",
      object_name: "right half of third orange",
      query_time_sec: 343.0,
      oos_span_start_sec: 338.0,
      oos_span_end_sec: 355.0,
      oos_duration_sec: 17.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 343.0,
      clip_duration_sec: 343.0,
      anchor_assoc_id: "3cd95e6ebb38b27e",
      anchor_name: "black small part of the frother",
      anchor_projected_pixel: [653.2593105076223, 1210.1654980580417],
      anchor_world_coordinates: [
        -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_16",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, is the previously moved right half of third orange visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.5451208413048136, 0.5531490176760121, -0.21970703253423718,
          ],
          frame_index: 8418,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The right half of third orange was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:34.0 video 1>; Point=(0.5979, 0.7631)",
          "<TIME 00:05:35.0 video 1>; Point=(0.6114, 0.717)",
          "<TIME 00:05:36.0 video 1>; Point=(0.6205, 0.7059)",
          "<TIME 00:05:37.0 video 1>; Point=(0.6043, 0.7824)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 337.0,
          sampled_last_visible_time_in_clip_sec: 337.0,
          sampled_last_visible_time_token: "<TIME 00:05:37.0 video 1>",
          projected_pixel: [850.8899992838842, 1101.567950795915],
          normalized_projected_pixel: [0.6043252835823041, 0.7823636014175533],
          camera_coordinates: [
            0.08028537597673369, 0.2082441532106749, 0.3092911854357059,
          ],
          frame_index: 8418,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 334.0,
              time_token: "<TIME 00:05:34.0 video 1>",
              projected_pixel: [841.778105701806, 1074.4297548762124],
              normalized_projected_pixel: [
                0.5978537682541236, 0.7630893145427645,
              ],
              camera_coordinates: [
                0.07153118443540452, 0.18383297364889484, 0.29595030799179,
              ],
              frame_index: 8418,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 335.0,
              time_token: "<TIME 00:05:35.0 video 1>",
              projected_pixel: [860.847869032686, 1009.5974701304984],
              normalized_projected_pixel: [
                0.6113976342561691, 0.717043657763138,
              ],
              camera_coordinates: [
                0.08432017750026022, 0.15762651504129166, 0.3124139122861793,
              ],
              frame_index: 8418,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [873.6773888262155, 993.8495207377248],
              normalized_projected_pixel: [
                0.6205095091095281, 0.7058590346148613,
              ],
              camera_coordinates: [
                0.09356355809960881, 0.15368204934004392, 0.32184446172673686,
              ],
              frame_index: 8418,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 337.0,
              time_token: "<TIME 00:05:37.0 video 1>",
              projected_pixel: [850.8899992838842, 1101.567950795915],
              normalized_projected_pixel: [
                0.6043252835823041, 0.7823636014175533,
              ],
              camera_coordinates: [
                0.08028537597673369, 0.2082441532106749, 0.3092911854357059,
              ],
              frame_index: 8418,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The right half of third orange was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:40.6 video 1>; Point=(0.5028, 0.7183)",
          "<TIME 00:04:41.0 video 1>; Point=(0.1806, 0.8045)",
          "<TIME 00:04:42.0 video 1>; Point=(0.2107, 0.6531)",
          "<TIME 00:04:43.0 video 1>; Point=(0.2334, 0.5935)",
        ],
        answer_metadata: {
          last_placement_time_sec: 280.6,
          last_placement_time_in_clip_sec: 280.6,
          last_placement_time_token: "<TIME 00:04:40.6 video 1>",
          projected_pixel: [707.8916574026206, 1011.3657604466664],
          normalized_projected_pixel: [0.5027639612234521, 0.7182995457717801],
          camera_coordinates: [
            0.005388913896646308, 0.17762710304218243, 0.3527314360064464,
          ],
          frame_index: 8418,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 280.6,
              time_token: "<TIME 00:04:40.6 video 1>",
              projected_pixel: [707.8916574026206, 1011.3657604466664],
              normalized_projected_pixel: [
                0.5027639612234521, 0.7182995457717801,
              ],
              camera_coordinates: [
                0.005388913896646308, 0.17762710304218243, 0.3527314360064464,
              ],
              frame_index: 8418,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 281.0,
              time_token: "<TIME 00:04:41.0 video 1>",
              projected_pixel: [254.294787367832, 1132.773624111619],
              normalized_projected_pixel: [
                0.18060709330101704, 0.804526721670184,
              ],
              camera_coordinates: [
                -0.20708114679895662, 0.1991182949263997, 0.24715838465968742,
              ],
              frame_index: 8430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 282.0,
              time_token: "<TIME 00:04:42.0 video 1>",
              projected_pixel: [296.65785104908616, 919.5774626829109],
              normalized_projected_pixel: [
                0.21069449648372596, 0.6531089933827492,
              ],
              camera_coordinates: [
                -0.2854547022838263, 0.15163598139217516, 0.41164246459429465,
              ],
              frame_index: 8460,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 283.0,
              time_token: "<TIME 00:04:43.0 video 1>",
              projected_pixel: [328.5694686475957, 835.6026515671019],
              normalized_projected_pixel: [
                0.23335899761903106, 0.5934677923061803,
              ],
              camera_coordinates: [
                -0.2310902524736682, 0.0808205555001853, 0.37000964728753294,
              ],
              frame_index: 8490,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, based on the last known position of the right half of third orange that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 280.6,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the right half of third orange that was moved earlier. Using its last known position to infer its current location, in which direction is the right half of third orange from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 343.0,
            camera_coordinates: [
              0.5451208413048136, 0.5531490176760121, -0.21970703253423718,
            ],
            world_coordinates: [
              -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.5451208413048136,
              z: -0.21970703253423718,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the right half of third orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the black small part of the frother (marked in red) in the current frame, where is the right half of third orange relative to black small part of the frother from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "11785d3856c2848f",
            object_x_name: "right half of third orange",
            object_x_reference_time_sec: 343.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
            ],
            object_x_camera_coordinates: [
              0.5451208413048136, 0.5531490176760121, -0.21970703253423718,
            ],
            object_y_assoc_id: "3cd95e6ebb38b27e",
            object_y_name: "black small part of the frother",
            object_y_reference_time_sec: 343.0,
            object_y_world_coordinates: [
              -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
            ],
            object_y_projected_pixel: [653.2593105076223, 1210.1654980580417],
            object_y_normalized_projected_pixel: [
              0.46396257848552724, 0.8594925412344047,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the right half of third orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the black small part of the frother (marked in red) in the current frame, how far is the right half of third orange from the black small part of the frother: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "11785d3856c2848f",
            object_x_name: "right half of third orange",
            object_x_reference_time_sec: 343.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "3cd95e6ebb38b27e",
            object_y_name: "black small part of the frother",
            object_y_pixel: [653.2593105076223, 1210.1654980580417],
            object_y_normalized_projected_pixel: [
              0.46396257848552724, 0.8594925412344047,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.5634638231670723, 0.3480204140282175, -0.45067342670720123,
            ],
            distance_m: 0.8010719231994321,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_17: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "37b4dde2b16602ca",
    object_a_name: "left half of first orange",
    query_time_sec: 343.0,
    query_time_in_clip_sec: 343.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 343.0,
    clip_duration_sec: 343.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "37b4dde2b16602ca",
      object_name: "left half of first orange",
      query_time_sec: 343.0,
      oos_span_start_sec: 338.0,
      oos_span_end_sec: 355.0,
      oos_duration_sec: 17.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 343.0,
      clip_duration_sec: 343.0,
      anchor_assoc_id: "c79d145ffded5b56",
      anchor_name: "green sponge",
      anchor_projected_pixel: [681.2402284749961, 843.9433290774265],
      anchor_world_coordinates: [
        -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_17",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, is the previously moved left half of first orange visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.5494983357825185, 0.572284211217531, -0.26400353014541267,
          ],
          frame_index: 6107,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The left half of first orange was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:34.0 video 1>; Point=(0.6658, 0.7469)",
          "<TIME 00:05:35.0 video 1>; Point=(0.6728, 0.6929)",
          "<TIME 00:05:36.0 video 1>; Point=(0.6803, 0.6827)",
          "<TIME 00:05:37.0 video 1>; Point=(0.6692, 0.7693)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 337.0,
          sampled_last_visible_time_in_clip_sec: 337.0,
          sampled_last_visible_time_token: "<TIME 00:05:37.0 video 1>",
          projected_pixel: [942.231942285644, 1083.1392893503196],
          normalized_projected_pixel: [0.669198822646054, 0.7692750634590338],
          camera_coordinates: [
            0.12639540583949005, 0.1954265150186465, 0.3017366445744365,
          ],
          frame_index: 6107,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 334.0,
              time_token: "<TIME 00:05:34.0 video 1>",
              projected_pixel: [937.4013849416159, 1051.6371393525064],
              normalized_projected_pixel: [
                0.6657680290778522, 0.7469013773810415,
              ],
              camera_coordinates: [
                0.11713447580643521, 0.1693461312320903, 0.2883365701902785,
              ],
              frame_index: 6107,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 335.0,
              time_token: "<TIME 00:05:35.0 video 1>",
              projected_pixel: [947.2931729102663, 975.537015863875],
              normalized_projected_pixel: [
                0.6727934466692232, 0.6928529942215021,
              ],
              camera_coordinates: [
                0.1295268219946788, 0.1402270360869332, 0.31135787437838824,
              ],
              frame_index: 6107,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [957.8309915896778, 961.2857259423427],
              normalized_projected_pixel: [
                0.6802776928903961, 0.6827313394476865,
              ],
              camera_coordinates: [
                0.1388948925122011, 0.13662458337599048, 0.32057530230039233,
              ],
              frame_index: 6107,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 337.0,
              time_token: "<TIME 00:05:37.0 video 1>",
              projected_pixel: [942.231942285644, 1083.1392893503196],
              normalized_projected_pixel: [
                0.669198822646054, 0.7692750634590338,
              ],
              camera_coordinates: [
                0.12639540583949005, 0.1954265150186465, 0.3017366445744365,
              ],
              frame_index: 6107,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The left half of first orange was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:23.6 video 1>; Point=(0.5575, 0.7255)",
          "<TIME 00:03:24.0 video 1>; Point=(0.0534, 0.864)",
          "<TIME 00:03:25.0 video 1>; Point=(0.2076, 0.6645)",
          "<TIME 00:03:26.0 video 1>; Point=(0.2627, 0.6041)",
        ],
        answer_metadata: {
          last_placement_time_sec: 203.56666666666666,
          last_placement_time_in_clip_sec: 203.56666666666666,
          last_placement_time_token: "<TIME 00:03:23.6 video 1>",
          projected_pixel: [785.0005531799161, 1021.4842594087353],
          normalized_projected_pixel: [0.5575288019743723, 0.725485979693704],
          camera_coordinates: [
            0.047650744711954296, 0.1738550495410629, 0.33280353427287634,
          ],
          frame_index: 6107,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 203.56666666666666,
              time_token: "<TIME 00:03:23.6 video 1>",
              projected_pixel: [785.0005531799161, 1021.4842594087353],
              normalized_projected_pixel: [
                0.5575288019743723, 0.725485979693704,
              ],
              camera_coordinates: [
                0.047650744711954296, 0.1738550495410629, 0.33280353427287634,
              ],
              frame_index: 6107,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 204.0,
              time_token: "<TIME 00:03:24.0 video 1>",
              projected_pixel: [75.24878348124787, 1216.5533849946496],
              normalized_projected_pixel: [
                0.05344373826793172, 0.8640293927518818,
              ],
              camera_coordinates: [
                -0.26321424558029927, 0.21594351283826274, 0.15316526111931728,
              ],
              frame_index: 6120,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 205.0,
              time_token: "<TIME 00:03:25.0 video 1>",
              projected_pixel: [292.3010538495686, 935.6606917179323],
              normalized_projected_pixel: [
                0.20760018029088678, 0.6645317412769406,
              ],
              camera_coordinates: [
                -0.25680497748285225, 0.14513785826457393, 0.3646805228232757,
              ],
              frame_index: 6150,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 206.0,
              time_token: "<TIME 00:03:26.0 video 1>",
              projected_pixel: [369.8365503456918, 850.5446604025744],
              normalized_projected_pixel: [
                0.2626680045068834, 0.6040800144904648,
              ],
              camera_coordinates: [
                -0.17526410191484887, 0.07693461401876323, 0.3188292054777089,
              ],
              frame_index: 6180,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, based on the last known position of the left half of first orange that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 203.56666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the left half of first orange that was moved earlier. Using its last known position to infer its current location, in which direction is the left half of first orange from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 343.0,
            camera_coordinates: [
              0.5494983357825185, 0.572284211217531, -0.26400353014541267,
            ],
            world_coordinates: [
              -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.5494983357825185,
              z: -0.26400353014541267,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the left half of first orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, where is the left half of first orange relative to green sponge from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "37b4dde2b16602ca",
            object_x_name: "left half of first orange",
            object_x_reference_time_sec: 343.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
            ],
            object_x_camera_coordinates: [
              0.5494983357825185, 0.572284211217531, -0.26400353014541267,
            ],
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_reference_time_sec: 343.0,
            object_y_world_coordinates: [
              -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
            ],
            object_y_projected_pixel: [681.2402284749961, 843.9433290774265],
            object_y_normalized_projected_pixel: [
              0.48383538954190064, 0.5993915689470358,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the left half of first orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, how far is the left half of first orange from the green sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "37b4dde2b16602ca",
            object_x_name: "left half of first orange",
            object_x_reference_time_sec: 343.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_pixel: [681.2402284749961, 843.9433290774265],
            object_y_normalized_projected_pixel: [
              0.48383538954190064, 0.5993915689470358,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.56515796344042, 0.44969278503211174, -0.8104254584607204,
            ],
            distance_m: 1.0855489617107692,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_18: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "3bccd9fca84d4a0b",
    object_a_name: "right half of second orange",
    query_time_sec: 343.0,
    query_time_in_clip_sec: 343.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 343.0,
    clip_duration_sec: 343.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "3bccd9fca84d4a0b",
      object_name: "right half of second orange",
      query_time_sec: 343.0,
      oos_span_start_sec: 338.0,
      oos_span_end_sec: 355.0,
      oos_duration_sec: 17.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 343.0,
      clip_duration_sec: 343.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [199.2708865447238, 1069.1352040182805],
      anchor_world_coordinates: [
        -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_18",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, is the previously moved right half of second orange visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.6219294418941184, 0.6513167367678228, -0.21376666291345003,
          ],
          frame_index: 7584,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The right half of second orange was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:34.0 video 1>; Point=(0.6464, 0.7308)",
          "<TIME 00:05:35.0 video 1>; Point=(0.6378, 0.6864)",
          "<TIME 00:05:36.0 video 1>; Point=(0.6446, 0.6795)",
          "<TIME 00:05:37.0 video 1>; Point=(0.6504, 0.7588)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 337.0,
          sampled_last_visible_time_in_clip_sec: 337.0,
          sampled_last_visible_time_token: "<TIME 00:05:37.0 video 1>",
          projected_pixel: [915.8209663213387, 1068.3690354778605],
          normalized_projected_pixel: [0.6504410272168598, 0.7587848263337077],
          camera_coordinates: [
            0.1496374177945614, 0.2493325432243454, 0.4045476219068984,
          ],
          frame_index: 7584,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 334.0,
              time_token: "<TIME 00:05:34.0 video 1>",
              projected_pixel: [910.1060750510396, 1028.936298216497],
              normalized_projected_pixel: [
                0.6463821555760224, 0.7307786208923985,
              ],
              camera_coordinates: [
                0.14064258421174225, 0.21450487909598737, 0.3952206400382148,
              ],
              frame_index: 7584,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 335.0,
              time_token: "<TIME 00:05:35.0 video 1>",
              projected_pixel: [898.0073099159515, 966.4310317819446],
              normalized_projected_pixel: [
                0.6377892826107611, 0.6863856759814948,
              ],
              camera_coordinates: [
                0.13935441735737575, 0.18181594784816035, 0.4217658851592785,
              ],
              frame_index: 7584,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [907.5362831741445, 956.7046973361437],
              normalized_projected_pixel: [
                0.6445570192998186, 0.6794777679944203,
              ],
              camera_coordinates: [
                0.1490728348328494, 0.17868652501404758, 0.43077217436327575,
              ],
              frame_index: 7584,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 337.0,
              time_token: "<TIME 00:05:37.0 video 1>",
              projected_pixel: [915.8209663213387, 1068.3690354778605],
              normalized_projected_pixel: [
                0.6504410272168598, 0.7587848263337077,
              ],
              camera_coordinates: [
                0.1496374177945614, 0.2493325432243454, 0.4045476219068984,
              ],
              frame_index: 7584,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The right half of second orange was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:12.8 video 1>; Point=(0.5523, 0.6963)",
          "<TIME 00:04:13.0 video 1>; Point=(0.4689, 0.7236)",
          "<TIME 00:04:15.0 video 1>; Point=(0.0504, 0.6782)",
        ],
        answer_metadata: {
          last_placement_time_sec: 252.8,
          last_placement_time_in_clip_sec: 252.8,
          last_placement_time_token: "<TIME 00:04:12.8 video 1>",
          projected_pixel: [777.6182550794591, 980.3424677755186],
          normalized_projected_pixel: [0.552285692528025, 0.6962659572269309],
          camera_coordinates: [
            0.057972279258963866, 0.201216953945908, 0.44641553940639755,
          ],
          frame_index: 7584,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 252.8,
              time_token: "<TIME 00:04:12.8 video 1>",
              projected_pixel: [777.6182550794591, 980.3424677755186],
              normalized_projected_pixel: [
                0.552285692528025, 0.6962659572269309,
              ],
              camera_coordinates: [
                0.057972279258963866, 0.201216953945908, 0.44641553940639755,
              ],
              frame_index: 7584,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 253.0,
              time_token: "<TIME 00:04:13.0 video 1>",
              projected_pixel: [660.2239369799232, 1018.788662831854],
              normalized_projected_pixel: [
                0.46890904615051365, 0.7235714934885327,
              ],
              camera_coordinates: [
                -0.027041706791121722, 0.22008150613018967, 0.4258062641335707,
              ],
              frame_index: 7590,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 255.0,
              time_token: "<TIME 00:04:15.0 video 1>",
              projected_pixel: [70.91555225802927, 954.9435650869385],
              normalized_projected_pixel: [
                0.050366159274168515, 0.6782269638401552,
              ],
              camera_coordinates: [
                -0.46523826182939976, 0.18477132429487497, 0.3683387028672158,
              ],
              frame_index: 7650,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, based on the last known position of the right half of second orange that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area below the boiler",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 252.8,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the right half of second orange that was moved earlier. Using its last known position to infer its current location, in which direction is the right half of second orange from your viewpoint?",
          choices: ["Front-right", "Back-left", "Front-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 343.0,
            camera_coordinates: [
              0.6219294418941184, 0.6513167367678228, -0.21376666291345003,
            ],
            world_coordinates: [
              -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.6219294418941184,
              z: -0.21376666291345003,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the right half of second orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, where is the right half of second orange relative to cone from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "3bccd9fca84d4a0b",
            object_x_name: "right half of second orange",
            object_x_reference_time_sec: 343.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
            ],
            object_x_camera_coordinates: [
              0.6219294418941184, 0.6513167367678228, -0.21376666291345003,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 343.0,
            object_y_world_coordinates: [
              -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
            ],
            object_y_projected_pixel: [199.2708865447238, 1069.1352040182805],
            object_y_normalized_projected_pixel: [
              0.14152761828460497, 0.7593289801266198,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the right half of second orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, how far is the right half of second orange from the cone: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "3bccd9fca84d4a0b",
            object_x_name: "right half of second orange",
            object_x_reference_time_sec: 343.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [199.2708865447238, 1069.1352040182805],
            object_y_normalized_projected_pixel: [
              0.14152761828460497, 0.7593289801266198,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9782254092303744, 0.39194902917995655, -0.5916148285608758,
            ],
            distance_m: 1.208535104211772,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_19: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "56a389eb59ae14b8",
    object_a_name: "left half of third orange",
    query_time_sec: 343.0,
    query_time_in_clip_sec: 343.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 343.0,
    clip_duration_sec: 343.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "56a389eb59ae14b8",
      object_name: "left half of third orange",
      query_time_sec: 343.0,
      oos_span_start_sec: 338.0,
      oos_span_end_sec: 355.0,
      oos_duration_sec: 17.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 343.0,
      clip_duration_sec: 343.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [199.2708865447238, 1069.1352040182805],
      anchor_world_coordinates: [
        -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_19",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, is the previously moved left half of third orange visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.5831407543672027, 0.5778729431096588, -0.2193294817358229,
          ],
          frame_index: 9063,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The left half of third orange was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:34.0 video 1>; Point=(0.6114, 0.7311)",
          "<TIME 00:05:35.0 video 1>; Point=(0.6141, 0.6873)",
          "<TIME 00:05:36.0 video 1>; Point=(0.6225, 0.6783)",
          "<TIME 00:05:37.0 video 1>; Point=(0.6176, 0.7546)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 337.0,
          sampled_last_visible_time_in_clip_sec: 337.0,
          sampled_last_visible_time_token: "<TIME 00:05:37.0 video 1>",
          projected_pixel: [869.6056670879021, 1062.4181031324952],
          normalized_projected_pixel: [0.6176176612840214, 0.7545583118838745],
          camera_coordinates: [
            0.10091367635211368, 0.2100814608151358, 0.3496399939325525,
          ],
          frame_index: 9063,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 334.0,
              time_token: "<TIME 00:05:34.0 video 1>",
              projected_pixel: [860.9121885794734, 1029.3403333707588],
              normalized_projected_pixel: [
                0.6114433157524669, 0.7310655776780958,
              ],
              camera_coordinates: [
                0.09132892309109808, 0.18174636059023763, 0.3367010676508422,
              ],
              frame_index: 9063,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 335.0,
              time_token: "<TIME 00:05:35.0 video 1>",
              projected_pixel: [864.7096893614657, 967.6985459674004],
              normalized_projected_pixel: [
                0.614140404376041, 0.6872858991245742,
              ],
              camera_coordinates: [
                0.09751543696773579, 0.15349385441903074, 0.35560806775301024,
              ],
              frame_index: 9063,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [876.415143130654, 955.0660642634814],
              normalized_projected_pixel: [
                0.6224539368825668, 0.6783139660962226,
              ],
              camera_coordinates: [
                0.10705168648059837, 0.14980658063516517, 0.36497194667335764,
              ],
              frame_index: 9063,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 337.0,
              time_token: "<TIME 00:05:37.0 video 1>",
              projected_pixel: [869.6056670879021, 1062.4181031324952],
              normalized_projected_pixel: [
                0.6176176612840214, 0.7545583118838745,
              ],
              camera_coordinates: [
                0.10091367635211368, 0.2100814608151358, 0.3496399939325525,
              ],
              frame_index: 9063,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The left half of third orange was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:02.1 video 1>; Point=(0.5714, 0.7159)",
          "<TIME 00:05:03.0 video 1>; Point=(0.0672, 0.7851)",
          "<TIME 00:05:04.0 video 1>; Point=(0.2338, 0.64)",
          "<TIME 00:05:05.0 video 1>; Point=(0.1971, 0.6559)",
        ],
        answer_metadata: {
          last_placement_time_sec: 302.1,
          last_placement_time_in_clip_sec: 302.1,
          last_placement_time_token: "<TIME 00:05:02.1 video 1>",
          projected_pixel: [804.4851841973324, 1008.0457580325485],
          normalized_projected_pixel: [0.5713673183219691, 0.7159415895117532],
          camera_coordinates: [
            0.06560722529627538, 0.18700720267064108, 0.3745001446473881,
          ],
          frame_index: 9063,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 302.1,
              time_token: "<TIME 00:05:02.1 video 1>",
              projected_pixel: [804.4851841973324, 1008.0457580325485],
              normalized_projected_pixel: [
                0.5713673183219691, 0.7159415895117532,
              ],
              camera_coordinates: [
                0.06560722529627538, 0.18700720267064108, 0.3745001446473881,
              ],
              frame_index: 9063,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 303.0,
              time_token: "<TIME 00:05:03.0 video 1>",
              projected_pixel: [94.60901030779087, 1105.4513853509836],
              normalized_projected_pixel: [
                0.06719389936632875, 0.7851217225504145,
              ],
              camera_coordinates: [
                -0.3432951630277463, 0.22737149792851824, 0.2564001140753114,
              ],
              frame_index: 9090,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 304.0,
              time_token: "<TIME 00:05:04.0 video 1>",
              projected_pixel: [329.1917325202373, 901.0854273797974],
              normalized_projected_pixel: [
                0.23380094639221397, 0.6399754455822424,
              ],
              camera_coordinates: [
                -0.22409488034182878, 0.11826619093939139, 0.356468619874428,
              ],
              frame_index: 9120,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 305.0,
              time_token: "<TIME 00:05:05.0 video 1>",
              projected_pixel: [277.4859370567911, 923.5469271343316],
              normalized_projected_pixel: [
                0.1970780802960164, 0.6559282152942696,
              ],
              camera_coordinates: [
                -0.2476874825178932, 0.12793729595184766, 0.3383285392607882,
              ],
              frame_index: 9150,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, based on the last known position of the left half of third orange that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 302.1,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the left half of third orange that was moved earlier. Using its last known position to infer its current location, in which direction is the left half of third orange from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 343.0,
            camera_coordinates: [
              0.5831407543672027, 0.5778729431096588, -0.2193294817358229,
            ],
            world_coordinates: [
              -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.5831407543672027,
              z: -0.2193294817358229,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the left half of third orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, where is the left half of third orange relative to cone from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "56a389eb59ae14b8",
            object_x_name: "left half of third orange",
            object_x_reference_time_sec: 343.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
            ],
            object_x_camera_coordinates: [
              0.5831407543672027, 0.5778729431096588, -0.2193294817358229,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 343.0,
            object_y_world_coordinates: [
              -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
            ],
            object_y_projected_pixel: [199.2708865447238, 1069.1352040182805],
            object_y_normalized_projected_pixel: [
              0.14152761828460497, 0.7593289801266198,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the left half of third orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, how far is the left half of third orange from the cone: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "56a389eb59ae14b8",
            object_x_name: "left half of third orange",
            object_x_reference_time_sec: 343.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [199.2708865447238, 1069.1352040182805],
            object_y_normalized_projected_pixel: [
              0.14152761828460497, 0.7593289801266198,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9394367217034587, 0.31850523552179255, -0.5971776473832486,
            ],
            distance_m: 1.1578463117676394,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_20: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "762824ba9d53a1cc",
    object_a_name: "plug of food processor",
    query_time_sec: 343.0,
    query_time_in_clip_sec: 343.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 343.0,
    clip_duration_sec: 343.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "762824ba9d53a1cc",
      object_name: "plug of food processor",
      query_time_sec: 343.0,
      oos_span_start_sec: 338.0,
      oos_span_end_sec: 355.0,
      oos_duration_sec: 17.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 343.0,
      clip_duration_sec: 343.0,
      anchor_assoc_id: "3cd95e6ebb38b27e",
      anchor_name: "black small part of the frother",
      anchor_projected_pixel: [653.2593105076223, 1210.1654980580417],
      anchor_world_coordinates: [
        -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_20",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, is the previously moved plug of food processor visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.82779428641877, 0.5044496666207843, -0.2809655339381809,
          ],
          frame_index: 2174,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The plug of food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:34.0 video 1>; Point=(0.589, 0.4826)",
          "<TIME 00:05:35.0 video 1>; Point=(0.5593, 0.4563)",
          "<TIME 00:05:36.0 video 1>; Point=(0.5681, 0.4545)",
          "<TIME 00:05:37.0 video 1>; Point=(0.6029, 0.5181)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 337.0,
          sampled_last_visible_time_in_clip_sec: 337.0,
          sampled_last_visible_time_token: "<TIME 00:05:37.0 video 1>",
          projected_pixel: [848.9347863103491, 729.4548588061856],
          normalized_projected_pixel: [0.6029366380045093, 0.518078734947575],
          camera_coordinates: [
            0.12935829184262104, 0.01990866295312088, 0.5287224945005624,
          ],
          frame_index: 2174,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 334.0,
              time_token: "<TIME 00:05:34.0 video 1>",
              projected_pixel: [829.294158701042, 679.4712266560279],
              normalized_projected_pixel: [
                0.5889873286228992, 0.48257899620456524,
              ],
              camera_coordinates: [
                0.1067377367125415, -0.021992301729280905, 0.5019235151142352,
              ],
              frame_index: 2174,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 335.0,
              time_token: "<TIME 00:05:35.0 video 1>",
              projected_pixel: [787.4743202020713, 642.5067064151231],
              normalized_projected_pixel: [
                0.5592857387798802, 0.45632578580619537,
              ],
              camera_coordinates: [
                0.07452021813439469, -0.05368176078729825, 0.5155918656246905,
              ],
              frame_index: 2174,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [799.8674296896673, 639.9122173858811],
              normalized_projected_pixel: [
                0.568087663131866, 0.45448310893883603,
              ],
              camera_coordinates: [
                0.08661399692975102, -0.056958398305000046, 0.5258317475449767,
              ],
              frame_index: 2174,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 337.0,
              time_token: "<TIME 00:05:37.0 video 1>",
              projected_pixel: [848.9347863103491, 729.4548588061856],
              normalized_projected_pixel: [
                0.6029366380045093, 0.518078734947575,
              ],
              camera_coordinates: [
                0.12935829184262104, 0.01990866295312088, 0.5287224945005624,
              ],
              frame_index: 2174,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The plug of food processor was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:12.5 video 1>; Point=(0.2428, 0.6645)",
          "<TIME 00:01:13.0 video 1>; Point=(0.1257, 0.6416)",
          "<TIME 00:01:14.0 video 1>; Point=(0.0562, 0.6235)",
          "<TIME 00:01:15.0 video 1>; Point=(0.5668, 0.4188)",
        ],
        answer_metadata: {
          last_placement_time_sec: 72.46666666666667,
          last_placement_time_in_clip_sec: 72.46666666666667,
          last_placement_time_token: "<TIME 00:01:12.5 video 1>",
          projected_pixel: [341.8856141201835, 935.5761237413119],
          normalized_projected_pixel: [0.2428164873012667, 0.6644716787935454],
          camera_coordinates: [
            -0.21248369307273407, 0.1366903359950798, 0.3492763214011758,
          ],
          frame_index: 2174,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 72.46666666666667,
              time_token: "<TIME 00:01:12.5 video 1>",
              projected_pixel: [341.8856141201835, 935.5761237413119],
              normalized_projected_pixel: [
                0.2428164873012667, 0.6644716787935454,
              ],
              camera_coordinates: [
                -0.21248369307273407, 0.1366903359950798, 0.3492763214011758,
              ],
              frame_index: 2174,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 73.0,
              time_token: "<TIME 00:01:13.0 video 1>",
              projected_pixel: [177.00360886647059, 903.3301829259038],
              normalized_projected_pixel: [
                0.1257127903881183, 0.6415697321916931,
              ],
              camera_coordinates: [
                -0.3301469907668815, 0.12495844845823814, 0.34934757842759373,
              ],
              frame_index: 2190,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 74.0,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [79.09590364386247, 877.8198394133706],
              normalized_projected_pixel: [
                0.056176067928879594, 0.6234515904924507,
              ],
              camera_coordinates: [
                -0.42968930506383884, 0.11932745770317149, 0.35846410911481774,
              ],
              frame_index: 2220,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 75.0,
              time_token: "<TIME 00:01:15.0 video 1>",
              projected_pixel: [798.113862022788, 589.6060354202183],
              normalized_projected_pixel: [
                0.5668422315502756, 0.4187542865200414,
              ],
              camera_coordinates: [
                0.08803720372066737, -0.10349243175409595, 0.5438916001151086,
              ],
              frame_index: 2250,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, based on the last known position of the plug of food processor that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 72.46666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the plug of food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the plug of food processor from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 343.0,
            camera_coordinates: [
              0.82779428641877, 0.5044496666207843, -0.2809655339381809,
            ],
            world_coordinates: [
              -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.82779428641877,
              z: -0.2809655339381809,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the plug of food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the black small part of the frother (marked in red) in the current frame, where is the plug of food processor relative to black small part of the frother from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "762824ba9d53a1cc",
            object_x_name: "plug of food processor",
            object_x_reference_time_sec: 343.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
            ],
            object_x_camera_coordinates: [
              0.82779428641877, 0.5044496666207843, -0.2809655339381809,
            ],
            object_y_assoc_id: "3cd95e6ebb38b27e",
            object_y_name: "black small part of the frother",
            object_y_reference_time_sec: 343.0,
            object_y_world_coordinates: [
              -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
            ],
            object_y_projected_pixel: [653.2593105076223, 1210.1654980580417],
            object_y_normalized_projected_pixel: [
              0.46396257848552724, 0.8594925412344047,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the plug of food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the black small part of the frother (marked in red) in the current frame, how far is the plug of food processor from the black small part of the frother: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "762824ba9d53a1cc",
            object_x_name: "plug of food processor",
            object_x_reference_time_sec: 343.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "3cd95e6ebb38b27e",
            object_y_name: "black small part of the frother",
            object_y_pixel: [653.2593105076223, 1210.1654980580417],
            object_y_normalized_projected_pixel: [
              0.46396257848552724, 0.8594925412344047,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8461372682810286, 0.29932106297298966, -0.511931928111145,
            ],
            distance_m: 1.0332548933022077,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_21: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "a955b01a2895c6f5",
    object_a_name: "one bag",
    query_time_sec: 343.0,
    query_time_in_clip_sec: 343.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 343.0,
    clip_duration_sec: 343.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "a955b01a2895c6f5",
      object_name: "one bag",
      query_time_sec: 343.0,
      oos_span_start_sec: 338.0,
      oos_span_end_sec: 355.0,
      oos_duration_sec: 17.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 343.0,
      clip_duration_sec: 343.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [199.2708865447238, 1069.1352040182805],
      anchor_world_coordinates: [
        -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_21",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, is the previously moved one bag visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.615804436365273, 0.5781456298060965, -0.16107725641147486,
          ],
          frame_index: 3828,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The one bag was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:34.0 video 1>; Point=(0.5537, 0.7215)",
          "<TIME 00:05:35.0 video 1>; Point=(0.5523, 0.6876)",
          "<TIME 00:05:36.0 video 1>; Point=(0.5613, 0.6793)",
          "<TIME 00:05:37.0 video 1>; Point=(0.5618, 0.745)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 337.0,
          sampled_last_visible_time_in_clip_sec: 337.0,
          sampled_last_visible_time_token: "<TIME 00:05:37.0 video 1>",
          projected_pixel: [790.958588773188, 1049.0155581950482],
          normalized_projected_pixel: [0.5617603613445937, 0.7450394589453467],
          camera_coordinates: [
            0.061702518762547065, 0.22890507704879504, 0.40032005734330767,
          ],
          frame_index: 3828,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 334.0,
              time_token: "<TIME 00:05:34.0 video 1>",
              projected_pixel: [779.5429440294939, 1015.9230102534221],
              normalized_projected_pixel: [
                0.5536526591118565, 0.7215362288731691,
              ],
              camera_coordinates: [
                0.05194995542123104, 0.19877296662769794, 0.3878841100286132,
              ],
              frame_index: 3828,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 335.0,
              time_token: "<TIME 00:05:35.0 video 1>",
              projected_pixel: [777.6843096750615, 968.0755355704116],
              normalized_projected_pixel: [
                0.5523326063033107, 0.6875536474221673,
              ],
              camera_coordinates: [
                0.05198486194187657, 0.17224353167405992, 0.4007271166746238,
              ],
              frame_index: 3828,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [790.2882760817533, 956.4621978862949],
              normalized_projected_pixel: [
                0.5612842869898816, 0.6793055382715163,
              ],
              camera_coordinates: [
                0.061653213796061035, 0.16837114774502593, 0.4103001692381001,
              ],
              frame_index: 3828,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 337.0,
              time_token: "<TIME 00:05:37.0 video 1>",
              projected_pixel: [790.958588773188, 1049.0155581950482],
              normalized_projected_pixel: [
                0.5617603613445937, 0.7450394589453467,
              ],
              camera_coordinates: [
                0.061702518762547065, 0.22890507704879504, 0.40032005734330767,
              ],
              frame_index: 3828,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The one bag was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:07.6 video 1>; Point=(0.5699, 0.8163)",
          "<TIME 00:02:08.0 video 1>; Point=(0.6545, 0.8772)",
          "<TIME 00:02:09.0 video 1>; Point=(20.6462, 1.2785)",
          "<TIME 00:02:10.0 video 1>; Point=(31.5028, -1.1182)",
        ],
        answer_metadata: {
          last_placement_time_sec: 127.6,
          last_placement_time_in_clip_sec: 127.6,
          last_placement_time_token: "<TIME 00:02:07.6 video 1>",
          projected_pixel: [802.3596099142155, 1149.3623076325753],
          normalized_projected_pixel: [0.5698576774958917, 0.8163084571254086],
          camera_coordinates: [
            0.06313268751820322, 0.26917400652587353, 0.3524596293163742,
          ],
          frame_index: 3828,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 127.6,
              time_token: "<TIME 00:02:07.6 video 1>",
              projected_pixel: [802.3596099142155, 1149.3623076325753],
              normalized_projected_pixel: [
                0.5698576774958917, 0.8163084571254086,
              ],
              camera_coordinates: [
                0.06313268751820322, 0.26917400652587353, 0.3524596293163742,
              ],
              frame_index: 3828,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 128.0,
              time_token: "<TIME 00:02:08.0 video 1>",
              projected_pixel: [921.5753560257291, 1235.0330957930817],
              normalized_projected_pixel: [
                0.654527951722819, 0.877154187353041,
              ],
              camera_coordinates: [
                0.13570966759298075, 0.3214564506124456, 0.3327446775109095,
              ],
              frame_index: 3840,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 129.0,
              time_token: "<TIME 00:02:09.0 video 1>",
              projected_pixel: [29069.779718670557, 1800.1723692046025],
              normalized_projected_pixel: [
                20.646150368373977, 1.278531512219178,
              ],
              camera_coordinates: [
                0.4808689435384757, 0.48178843501591767, 0.07699645402692257,
              ],
              frame_index: 3870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 130.0,
              time_token: "<TIME 00:02:10.0 video 1>",
              projected_pixel: [44355.94186382162, -1574.4277802917209],
              normalized_projected_pixel: [
                31.502799619191492, -1.1182015485026426,
              ],
              camera_coordinates: [
                0.5554867526683649, 0.4849902166393729, 0.07545562724911514,
              ],
              frame_index: 3900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, based on the last known position of the one bag that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area next to the window",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 127.6,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the one bag that was moved earlier. Using its last known position to infer its current location, in which direction is the one bag from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 343.0,
            camera_coordinates: [
              0.615804436365273, 0.5781456298060965, -0.16107725641147486,
            ],
            world_coordinates: [
              -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.615804436365273,
              z: -0.16107725641147486,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the one bag that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, where is the one bag relative to cone from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "a955b01a2895c6f5",
            object_x_name: "one bag",
            object_x_reference_time_sec: 343.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
            ],
            object_x_camera_coordinates: [
              0.615804436365273, 0.5781456298060965, -0.16107725641147486,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 343.0,
            object_y_world_coordinates: [
              -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
            ],
            object_y_projected_pixel: [199.2708865447238, 1069.1352040182805],
            object_y_normalized_projected_pixel: [
              0.14152761828460497, 0.7593289801266198,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the one bag that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, how far is the one bag from the cone: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "a955b01a2895c6f5",
            object_x_name: "one bag",
            object_x_reference_time_sec: 343.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [199.2708865447238, 1069.1352040182805],
            object_y_normalized_projected_pixel: [
              0.14152761828460497, 0.7593289801266198,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9721004037015291, 0.3187779222182303, -0.5389254220589006,
            ],
            distance_m: 1.1563040988908635,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_22: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "b3fb93f07305013c",
    object_a_name: "top lid of food processor",
    query_time_sec: 343.0,
    query_time_in_clip_sec: 343.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 343.0,
    clip_duration_sec: 343.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "b3fb93f07305013c",
      object_name: "top lid of food processor",
      query_time_sec: 343.0,
      oos_span_start_sec: 338.0,
      oos_span_end_sec: 355.0,
      oos_duration_sec: 17.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_shelf.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 343.0,
      clip_duration_sec: 343.0,
      anchor_assoc_id: "3cd95e6ebb38b27e",
      anchor_name: "black small part of the frother",
      anchor_projected_pixel: [653.2593105076223, 1210.1654980580417],
      anchor_world_coordinates: [
        -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_22",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, is the previously moved top lid of food processor visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.8690392379008456, 1.1183034365786741, -0.664663576759168,
          ],
          frame_index: 2247,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The top lid of food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:34.0 video 1>; Point=(0.9797, 0.5899)",
          "<TIME 00:05:35.0 video 1>; Point=(0.9159, 0.5383)",
          "<TIME 00:05:36.0 video 1>; Point=(0.9182, 0.5393)",
          "<TIME 00:05:37.0 video 1>; Point=(0.9783, 0.6351)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 337.0,
          sampled_last_visible_time_in_clip_sec: 337.0,
          sampled_last_visible_time_token: "<TIME 00:05:37.0 video 1>",
          projected_pixel: [1377.4748660122013, 894.1768355192946],
          normalized_projected_pixel: [0.9783202173382112, 0.6350687752267717],
          camera_coordinates: [
            0.8222893365821278, 0.2280315357388788, 0.5764008128281568,
          ],
          frame_index: 2247,
          status: "in_view",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.89989262863823, -2.579600327131345, -0.4518923475824765,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 334.0,
              time_token: "<TIME 00:05:34.0 video 1>",
              projected_pixel: [1379.3868408539056, 830.5904301147026],
              normalized_projected_pixel: [
                0.9796781540155579, 0.5899079759337377,
              ],
              camera_coordinates: [
                0.8075665503118878, 0.14791585407518515, 0.5775011414264324,
              ],
              frame_index: 2247,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 335.0,
              time_token: "<TIME 00:05:35.0 video 1>",
              projected_pixel: [1289.603275924778, 757.8773081783705],
              normalized_projected_pixel: [
                0.9159114175602117, 0.5382651336494109,
              ],
              camera_coordinates: [
                0.7651413779446652, 0.0671360118896086, 0.7004898494066585,
              ],
              frame_index: 2247,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [1292.874880195886, 759.3729111751004],
              normalized_projected_pixel: [
                0.9182350001391235, 0.5393273516868611,
              ],
              camera_coordinates: [
                0.7773978519256528, 0.0697978493284851, 0.7060879661389776,
              ],
              frame_index: 2247,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 337.0,
              time_token: "<TIME 00:05:37.0 video 1>",
              projected_pixel: [1377.4748660122013, 894.1768355192946],
              normalized_projected_pixel: [
                0.9783202173382112, 0.6350687752267717,
              ],
              camera_coordinates: [
                0.8222893365821278, 0.2280315357388788, 0.5764008128281568,
              ],
              frame_index: 2247,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The top lid of food processor was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:14.9 video 1>; Point=(0.9453, 0.6799)",
          "<TIME 00:01:15.0 video 1>; Point=(1.0507, 0.7373)",
        ],
        answer_metadata: {
          last_placement_time_sec: 74.9,
          last_placement_time_in_clip_sec: 74.9,
          last_placement_time_token: "<TIME 00:01:14.9 video 1>",
          projected_pixel: [1331.0470678965562, 957.3069406349091],
          normalized_projected_pixel: [0.9453459289038041, 0.6799054976100206],
          camera_coordinates: [
            0.5372300186989118, 0.2134571911306642, 0.4209938630721335,
          ],
          frame_index: 2247,
          status: "last_past_track_end",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.89989262863823, -2.579600327131345, -0.4518923475824765,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 74.9,
              time_token: "<TIME 00:01:14.9 video 1>",
              projected_pixel: [1331.0470678965562, 957.3069406349091],
              normalized_projected_pixel: [
                0.9453459289038041, 0.6799054976100206,
              ],
              camera_coordinates: [
                0.5372300186989118, 0.2134571911306642, 0.4209938630721335,
              ],
              frame_index: 2247,
              status: "last_past_track_end",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 75.0,
              time_token: "<TIME 00:01:15.0 video 1>",
              projected_pixel: [1479.3324666724943, 1038.1304677320552],
              normalized_projected_pixel: [
                1.0506622632617146, 0.7373085708324255,
              ],
              camera_coordinates: [
                0.6528226078652741, 0.27805438688683615, 0.29654314665496306,
              ],
              frame_index: 2250,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, based on the last known position of the top lid of food processor that was moved earlier, which fixture type is closest to it?",
        choices: ["cupboard", "shelf", "counter", "drawer", "sink"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 74.9,
          correct_fixture: "shelf",
          display_correct_answer: "shelf",
          raw_correct_fixture: "P01_shelf.005",
          fixture_type_pool: [
            "bin",
            "counter",
            "cupboard",
            "drawer",
            "fridgefreezer",
            "oven",
            "shelf",
            "sink",
            "storage",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the top lid of food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the top lid of food processor from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 343.0,
            camera_coordinates: [
              0.8690392379008456, 1.1183034365786741, -0.664663576759168,
            ],
            world_coordinates: [
              -1.89989262863823, -2.579600327131345, -0.4518923475824765,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.8690392379008456,
              z: -0.664663576759168,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the top lid of food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the black small part of the frother (marked in red) in the current frame, where is the top lid of food processor relative to black small part of the frother from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "b3fb93f07305013c",
            object_x_name: "top lid of food processor",
            object_x_reference_time_sec: 343.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.89989262863823, -2.579600327131345, -0.4518923475824765,
            ],
            object_x_camera_coordinates: [
              0.8690392379008456, 1.1183034365786741, -0.664663576759168,
            ],
            object_y_assoc_id: "3cd95e6ebb38b27e",
            object_y_name: "black small part of the frother",
            object_y_reference_time_sec: 343.0,
            object_y_world_coordinates: [
              -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
            ],
            object_y_projected_pixel: [653.2593105076223, 1210.1654980580417],
            object_y_normalized_projected_pixel: [
              0.46396257848552724, 0.8594925412344047,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the top lid of food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the black small part of the frother (marked in red) in the current frame, how far is the top lid of food processor from the black small part of the frother: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "b3fb93f07305013c",
            object_x_name: "top lid of food processor",
            object_x_reference_time_sec: 343.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "3cd95e6ebb38b27e",
            object_y_name: "black small part of the frother",
            object_y_pixel: [653.2593105076223, 1210.1654980580417],
            object_y_normalized_projected_pixel: [
              0.46396257848552724, 0.8594925412344047,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8873822197631043, 0.9131748329308795, -0.895629970932132,
            ],
            distance_m: 1.5567557689894473,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_23: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "b671de6a85a09507",
    object_a_name: "left half of second orange",
    query_time_sec: 343.0,
    query_time_in_clip_sec: 343.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 343.0,
    clip_duration_sec: 343.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "b671de6a85a09507",
      object_name: "left half of second orange",
      query_time_sec: 343.0,
      oos_span_start_sec: 338.0,
      oos_span_end_sec: 355.0,
      oos_duration_sec: 17.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 343.0,
      clip_duration_sec: 343.0,
      anchor_assoc_id: "3cd95e6ebb38b27e",
      anchor_name: "black small part of the frother",
      anchor_projected_pixel: [653.2593105076223, 1210.1654980580417],
      anchor_world_coordinates: [
        -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_23",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, is the previously moved left half of second orange visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.5953821181850989, 0.5905402976509042, -0.20289008721881485,
          ],
          frame_index: 7166,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The left half of second orange was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:34.0 video 1>; Point=(0.6021, 0.7318)",
          "<TIME 00:05:35.0 video 1>; Point=(0.6024, 0.6903)",
          "<TIME 00:05:36.0 video 1>; Point=(0.6106, 0.6818)",
          "<TIME 00:05:37.0 video 1>; Point=(0.6083, 0.7559)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 337.0,
          sampled_last_visible_time_in_clip_sec: 337.0,
          sampled_last_visible_time_token: "<TIME 00:05:37.0 video 1>",
          projected_pixel: [856.5448950605427, 1064.3508942984818],
          normalized_projected_pixel: [0.6083415447873173, 0.7559310328824445],
          camera_coordinates: [
            0.09846013357788186, 0.22312330496496724, 0.36975110977200965,
          ],
          frame_index: 7166,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.490592956085781, -3.206692348204073, -0.3751702465967427,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 334.0,
              time_token: "<TIME 00:05:34.0 video 1>",
              projected_pixel: [847.7812129559494, 1030.322878593152],
              normalized_projected_pixel: [
                0.6021173387471231, 0.7317634080917272,
              ],
              camera_coordinates: [
                0.08905587629365108, 0.19341100478998774, 0.35766140842172134,
              ],
              frame_index: 7166,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 335.0,
              time_token: "<TIME 00:05:35.0 video 1>",
              projected_pixel: [848.1753712597447, 971.9346338089009],
              normalized_projected_pixel: [
                0.6023972807242505, 0.6902944842392762,
              ],
              camera_coordinates: [
                0.09283413113986594, 0.16491665796065635, 0.37630037275455397,
              ],
              frame_index: 7166,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [859.7343746456504, 959.9663868914131],
              normalized_projected_pixel: [
                0.6106068001744677, 0.6817943088717423,
              ],
              camera_coordinates: [
                0.10240856618639604, 0.16126809535199538, 0.3856514453522666,
              ],
              frame_index: 7166,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 337.0,
              time_token: "<TIME 00:05:37.0 video 1>",
              projected_pixel: [856.5448950605427, 1064.3508942984818],
              normalized_projected_pixel: [
                0.6083415447873173, 0.7559310328824445,
              ],
              camera_coordinates: [
                0.09846013357788186, 0.22312330496496724, 0.36975110977200965,
              ],
              frame_index: 7166,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The left half of second orange was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:58.9 video 1>; Point=(0.5388, 0.7061)",
          "<TIME 00:03:59.0 video 1>; Point=(0.5041, 0.7166)",
          "<TIME 00:04:00.0 video 1>; Point=(0.1553, 0.6795)",
          "<TIME 00:04:01.0 video 1>; Point=(0.2899, 0.5801)",
        ],
        answer_metadata: {
          last_placement_time_sec: 238.86666666666667,
          last_placement_time_in_clip_sec: 238.86666666666667,
          last_placement_time_token: "<TIME 00:03:58.9 video 1>",
          projected_pixel: [758.5784242534854, 994.2396678223907],
          normalized_projected_pixel: [0.538763085407305, 0.7061361277147662],
          camera_coordinates: [
            0.037829224050304866, 0.18176853320196584, 0.3832317620280017,
          ],
          frame_index: 7166,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.490592956085781, -3.206692348204073, -0.3751702465967427,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 238.86666666666667,
              time_token: "<TIME 00:03:58.9 video 1>",
              projected_pixel: [758.5784242534854, 994.2396678223907],
              normalized_projected_pixel: [
                0.538763085407305, 0.7061361277147662,
              ],
              camera_coordinates: [
                0.037829224050304866, 0.18176853320196584, 0.3832317620280017,
              ],
              frame_index: 7166,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 239.0,
              time_token: "<TIME 00:03:59.0 video 1>",
              projected_pixel: [709.7824940272135, 1008.9956764434219],
              normalized_projected_pixel: [
                0.5041068849625095, 0.7166162474740212,
              ],
              camera_coordinates: [
                0.0068274405713313335, 0.18546821383871037, 0.3713439685109756,
              ],
              frame_index: 7170,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 240.0,
              time_token: "<TIME 00:04:00.0 video 1>",
              projected_pixel: [218.66894322231337, 956.7278563406949],
              normalized_projected_pixel: [
                0.15530464717493847, 0.6794942161510616,
              ],
              camera_coordinates: [
                -0.33197532920166406, 0.173505176421058, 0.3853366724541156,
              ],
              frame_index: 7200,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 241.0,
              time_token: "<TIME 00:04:01.0 video 1>",
              projected_pixel: [408.13013819457, 816.7853433089377],
              normalized_projected_pixel: [
                0.2898651549677344, 0.5801032267819161,
              ],
              camera_coordinates: [
                -0.20756786424044327, 0.07895853746095538, 0.4320187070047543,
              ],
              frame_index: 7230,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, based on the last known position of the left half of second orange that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 238.86666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the left half of second orange that was moved earlier. Using its last known position to infer its current location, in which direction is the left half of second orange from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 343.0,
            camera_coordinates: [
              0.5953821181850989, 0.5905402976509042, -0.20289008721881485,
            ],
            world_coordinates: [
              -1.490592956085781, -3.206692348204073, -0.3751702465967427,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.5953821181850989,
              z: -0.20289008721881485,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the left half of second orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the black small part of the frother (marked in red) in the current frame, where is the left half of second orange relative to black small part of the frother from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "b671de6a85a09507",
            object_x_name: "left half of second orange",
            object_x_reference_time_sec: 343.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.490592956085781, -3.206692348204073, -0.3751702465967427,
            ],
            object_x_camera_coordinates: [
              0.5953821181850989, 0.5905402976509042, -0.20289008721881485,
            ],
            object_y_assoc_id: "3cd95e6ebb38b27e",
            object_y_name: "black small part of the frother",
            object_y_reference_time_sec: 343.0,
            object_y_world_coordinates: [
              -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
            ],
            object_y_projected_pixel: [653.2593105076223, 1210.1654980580417],
            object_y_normalized_projected_pixel: [
              0.46396257848552724, 0.8594925412344047,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the left half of second orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the black small part of the frother (marked in red) in the current frame, how far is the left half of second orange from the black small part of the frother: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "b671de6a85a09507",
            object_x_name: "left half of second orange",
            object_x_reference_time_sec: 343.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "3cd95e6ebb38b27e",
            object_y_name: "black small part of the frother",
            object_y_pixel: [653.2593105076223, 1210.1654980580417],
            object_y_normalized_projected_pixel: [
              0.46396257848552724, 0.8594925412344047,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6137251000473576, 0.3854116940031096, -0.4338564813917789,
            ],
            distance_m: 0.844649109836825,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_24: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e556b10f1cd07c2b",
    object_a_name: "food processor",
    query_time_sec: 343.0,
    query_time_in_clip_sec: 343.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 343.0,
    clip_duration_sec: 343.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e556b10f1cd07c2b",
      object_name: "food processor",
      query_time_sec: 343.0,
      oos_span_start_sec: 338.0,
      oos_span_end_sec: 355.0,
      oos_duration_sec: 17.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 343.0,
      clip_duration_sec: 343.0,
      anchor_assoc_id: "c79d145ffded5b56",
      anchor_name: "green sponge",
      anchor_projected_pixel: [681.2402284749961, 843.9433290774265],
      anchor_world_coordinates: [
        -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_24",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, is the previously moved food processor visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.6131216889682745, 0.8454315491497368, -0.4561979383745869,
          ],
          frame_index: 2060,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:34.0 video 1>; Point=(0.9384, 0.7091)",
          "<TIME 00:05:35.0 video 1>; Point=(0.8989, 0.643)",
          "<TIME 00:05:36.0 video 1>; Point=(0.9006, 0.6399)",
          "<TIME 00:05:37.0 video 1>; Point=(0.931, 0.7463)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 337.0,
          sampled_last_visible_time_in_clip_sec: 337.0,
          sampled_last_visible_time_token: "<TIME 00:05:37.0 video 1>",
          projected_pixel: [1310.8669295379923, 1050.7954085721199],
          normalized_projected_pixel: [0.9310134442741422, 0.7463035572245169],
          camera_coordinates: [
            0.4563815418339483, 0.2569679575729047, 0.3557541486300675,
          ],
          frame_index: 2060,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 334.0,
              time_token: "<TIME 00:05:34.0 video 1>",
              projected_pixel: [1321.2893451059713, 998.4626953849494],
              normalized_projected_pixel: [
                0.9384157280582183, 0.7091354370631743,
              ],
              camera_coordinates: [
                0.44840373099061104, 0.2105774658293258, 0.35280941301316404,
              ],
              frame_index: 2060,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 335.0,
              time_token: "<TIME 00:05:35.0 video 1>",
              projected_pixel: [1265.590626576644, 905.3975013993816],
              normalized_projected_pixel: [
                0.89885697910273, 0.6430379981529698,
              ],
              camera_coordinates: [
                0.44909272664324185, 0.1578462055910702, 0.42608924452946084,
              ],
              frame_index: 2060,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [1268.085401617288, 901.0190073766398],
              normalized_projected_pixel: [
                0.9006288363759147, 0.6399282722845453,
              ],
              camera_coordinates: [
                0.45900614286219144, 0.157098543383844, 0.43329484011693564,
              ],
              frame_index: 2060,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 337.0,
              time_token: "<TIME 00:05:37.0 video 1>",
              projected_pixel: [1310.8669295379923, 1050.7954085721199],
              normalized_projected_pixel: [
                0.9310134442741422, 0.7463035572245169,
              ],
              camera_coordinates: [
                0.4563815418339483, 0.2569679575729047, 0.3557541486300675,
              ],
              frame_index: 2060,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The food processor was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:08.7 video 1>; Point=(0.7416, 0.865)",
          "<TIME 00:01:09.0 video 1>; Point=(0.8062, 0.9032)",
          "<TIME 00:01:10.0 video 1>; Point=(0.8982, 0.8408)",
          "<TIME 00:01:11.0 video 1>; Point=(0.9279, 0.8519)",
        ],
        answer_metadata: {
          last_placement_time_sec: 68.66666666666667,
          last_placement_time_in_clip_sec: 68.66666666666667,
          last_placement_time_token: "<TIME 00:01:08.7 video 1>",
          projected_pixel: [1044.189487875134, 1217.9643145522832],
          normalized_projected_pixel: [0.7416118521840441, 0.8650314734036102],
          camera_coordinates: [
            0.19265137085946016, 0.28508845403999694, 0.2955463145813786,
          ],
          frame_index: 2060,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 68.66666666666667,
              time_token: "<TIME 00:01:08.7 video 1>",
              projected_pixel: [1044.189487875134, 1217.9643145522832],
              normalized_projected_pixel: [
                0.7416118521840441, 0.8650314734036102,
              ],
              camera_coordinates: [
                0.19265137085946016, 0.28508845403999694, 0.2955463145813786,
              ],
              frame_index: 2060,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 69.0,
              time_token: "<TIME 00:01:09.0 video 1>",
              projected_pixel: [1135.071094351414, 1271.7456072480213],
              normalized_projected_pixel: [
                0.8061584476927657, 0.9032284142386515,
              ],
              camera_coordinates: [
                0.24164947181983965, 0.3130088816923331, 0.25722550063769223,
              ],
              frame_index: 2070,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 70.0,
              time_token: "<TIME 00:01:10.0 video 1>",
              projected_pixel: [1264.6419801120576, 1183.8165571085642],
              normalized_projected_pixel: [
                0.8981832245114045, 0.8407788047646053,
              ],
              camera_coordinates: [
                0.380880718741178, 0.32143944399097796, 0.2906559547408305,
              ],
              frame_index: 2100,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 71.0,
              time_token: "<TIME 00:01:11.0 video 1>",
              projected_pixel: [1306.4590505987626, 1199.460469309038],
              normalized_projected_pixel: [
                0.9278828484366212, 0.8518895378615327,
              ],
              camera_coordinates: [
                0.4063739964896276, 0.3299031257887124, 0.2528334848503384,
              ],
              frame_index: 2130,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, based on the last known position of the food processor that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 68.66666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area close to the microwave",
          raw_correct_fixture: "P01_counter.008",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the food processor from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-right", "Front-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 343.0,
            camera_coordinates: [
              0.6131216889682745, 0.8454315491497368, -0.4561979383745869,
            ],
            world_coordinates: [
              -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.6131216889682745,
              z: -0.4561979383745869,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, where is the food processor relative to green sponge from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "e556b10f1cd07c2b",
            object_x_name: "food processor",
            object_x_reference_time_sec: 343.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
            ],
            object_x_camera_coordinates: [
              0.6131216889682745, 0.8454315491497368, -0.4561979383745869,
            ],
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_reference_time_sec: 343.0,
            object_y_world_coordinates: [
              -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
            ],
            object_y_projected_pixel: [681.2402284749961, 843.9433290774265],
            object_y_normalized_projected_pixel: [
              0.48383538954190064, 0.5993915689470358,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, how far is the food processor from the green sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "e556b10f1cd07c2b",
            object_x_name: "food processor",
            object_x_reference_time_sec: 343.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_pixel: [681.2402284749961, 843.9433290774265],
            object_y_normalized_projected_pixel: [
              0.48383538954190064, 0.5993915689470358,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.628781316626176, 0.7228401229643175, -1.0026198666898947,
            ],
            distance_m: 1.3867625552294376,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_25: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "f421e886dd28b482",
    object_a_name: "right half of first orange",
    query_time_sec: 343.0,
    query_time_in_clip_sec: 343.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 343.0,
    clip_duration_sec: 343.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "f421e886dd28b482",
      object_name: "right half of first orange",
      query_time_sec: 343.0,
      oos_span_start_sec: 338.0,
      oos_span_end_sec: 355.0,
      oos_duration_sec: 17.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 343.0,
      clip_duration_sec: 343.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [199.2708865447238, 1069.1352040182805],
      anchor_world_coordinates: [
        -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_25",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, is the previously moved right half of first orange visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.5523836175854955, 0.5894037381728898, -0.2616399760914603,
          ],
          frame_index: 6587,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The right half of first orange was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:34.0 video 1>; Point=(0.6742, 0.7542)",
          "<TIME 00:05:35.0 video 1>; Point=(0.6789, 0.6996)",
          "<TIME 00:05:36.0 video 1>; Point=(0.6859, 0.6899)",
          "<TIME 00:05:37.0 video 1>; Point=(0.6769, 0.7774)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 337.0,
          sampled_last_visible_time_in_clip_sec: 337.0,
          sampled_last_visible_time_token: "<TIME 00:05:37.0 video 1>",
          projected_pixel: [953.046862867792, 1094.6466300190118],
          normalized_projected_pixel: [0.676879874195875, 0.7774478906385027],
          camera_coordinates: [
            0.13618965306551933, 0.20777004077740213, 0.30939820676123375,
          ],
          frame_index: 6587,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 334.0,
              time_token: "<TIME 00:05:34.0 video 1>",
              projected_pixel: [949.2163897983727, 1061.883228172235],
              normalized_projected_pixel: [
                0.674159367754526, 0.7541784290995988,
              ],
              camera_coordinates: [
                0.12733362540696014, 0.18061066332846987, 0.29705878929435703,
              ],
              frame_index: 6587,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 335.0,
              time_token: "<TIME 00:05:35.0 video 1>",
              projected_pixel: [955.8333269381983, 985.0877736977056],
              normalized_projected_pixel: [
                0.6788588969731522, 0.6996362029103023,
              ],
              camera_coordinates: [
                0.13898211468589894, 0.15062226215342756, 0.32182334891008746,
              ],
              frame_index: 6587,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [965.8174764954641, 971.3500996827761],
              normalized_projected_pixel: [
                0.6859499122837103, 0.6898793321610626,
              ],
              camera_coordinates: [
                0.14833356914211748, 0.14712950720171025, 0.3309458086002559,
              ],
              frame_index: 6587,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 337.0,
              time_token: "<TIME 00:05:37.0 video 1>",
              projected_pixel: [953.046862867792, 1094.6466300190118],
              normalized_projected_pixel: [
                0.676879874195875, 0.7774478906385027,
              ],
              camera_coordinates: [
                0.13618965306551933, 0.20777004077740213, 0.30939820676123375,
              ],
              frame_index: 6587,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The right half of first orange was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:39.6 video 1>; Point=(0.5117, 0.7282)",
          "<TIME 00:03:40.0 video 1>; Point=(-0.1586, 1.0697)",
          "<TIME 00:03:41.0 video 1>; Point=(-0.1615, 0.795)",
          "<TIME 00:03:42.0 video 1>; Point=(-0.3587, 0.9594)",
        ],
        answer_metadata: {
          last_placement_time_sec: 219.56666666666666,
          last_placement_time_in_clip_sec: 219.56666666666666,
          last_placement_time_token: "<TIME 00:03:39.6 video 1>",
          projected_pixel: [720.4447451585418, 1025.326786012454],
          normalized_projected_pixel: [0.5116795065046461, 0.7282150468838452],
          camera_coordinates: [
            0.013386388605491462, 0.19565426269573016, 0.3704919754873659,
          ],
          frame_index: 6587,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 219.56666666666666,
              time_token: "<TIME 00:03:39.6 video 1>",
              projected_pixel: [720.4447451585418, 1025.326786012454],
              normalized_projected_pixel: [
                0.5116795065046461, 0.7282150468838452,
              ],
              camera_coordinates: [
                0.013386388605491462, 0.19565426269573016, 0.3704919754873659,
              ],
              frame_index: 6587,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 220.0,
              time_token: "<TIME 00:03:40.0 video 1>",
              projected_pixel: [-223.31605601876015, 1506.1002298197714],
              normalized_projected_pixel: [
                -0.15860515342241488, 1.0696734586788148,
              ],
              camera_coordinates: [
                -0.3181013949920679, 0.27639155622727746, 0.13486665136275894,
              ],
              frame_index: 6600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 221.0,
              time_token: "<TIME 00:03:41.0 video 1>",
              projected_pixel: [-227.42158267739944, 1119.293576728947],
              normalized_projected_pixel: [
                -0.16152101042428937, 0.7949528243813545,
              ],
              camera_coordinates: [
                -0.6311672266349615, 0.282509314015384, 0.2461764273514886,
              ],
              frame_index: 6630,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 222.0,
              time_token: "<TIME 00:03:42.0 video 1>",
              projected_pixel: [-505.0561471457047, 1350.8213466169111],
              normalized_projected_pixel: [
                -0.35870464996143797, 0.9593901609495107,
              ],
              camera_coordinates: [
                -0.44004713868817324, 0.23630449071319615, 0.15125759196913313,
              ],
              frame_index: 6660,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:43.0 video 1>, based on the last known position of the right half of first orange that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 219.56666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the right half of first orange that was moved earlier. Using its last known position to infer its current location, in which direction is the right half of first orange from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 343.0,
            camera_coordinates: [
              0.5523836175854955, 0.5894037381728898, -0.2616399760914603,
            ],
            world_coordinates: [
              -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.5523836175854955,
              z: -0.2616399760914603,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the right half of first orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, where is the right half of first orange relative to cone from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "f421e886dd28b482",
            object_x_name: "right half of first orange",
            object_x_reference_time_sec: 343.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
            ],
            object_x_camera_coordinates: [
              0.5523836175854955, 0.5894037381728898, -0.2616399760914603,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 343.0,
            object_y_world_coordinates: [
              -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
            ],
            object_y_projected_pixel: [199.2708865447238, 1069.1352040182805],
            object_y_normalized_projected_pixel: [
              0.14152761828460497, 0.7593289801266198,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:43.0 video 1>, consider the right half of first orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, how far is the right half of first orange from the cone: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "f421e886dd28b482",
            object_x_name: "right half of first orange",
            object_x_reference_time_sec: 343.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [199.2708865447238, 1069.1352040182805],
            object_y_normalized_projected_pixel: [
              0.14152761828460497, 0.7593289801266198,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9086795849217515, 0.3300360305850236, -0.639488141738886,
            ],
            distance_m: 1.1591235710494971,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_26: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e44a21e6e04d424c",
    object_a_name: "mug",
    query_time_sec: 361.0,
    query_time_in_clip_sec: 361.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 361.0,
    clip_duration_sec: 361.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e44a21e6e04d424c",
      object_name: "mug",
      query_time_sec: 361.0,
      oos_span_start_sec: 356.0,
      oos_span_end_sec: 366.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 361.0,
      clip_duration_sec: 361.0,
      anchor_assoc_id: "2defaf6678fa65eb",
      anchor_name: "third orange",
      anchor_projected_pixel: [870.3122436208102, 1073.7915098542867],
      anchor_world_coordinates: [
        -1.5490675702512484, -2.621060415205895, -0.41879999330528606,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_26",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:01.0 video 1>, is the previously moved mug visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.0128375167671062, 1.0226732148936566, -0.5080479609210108,
          ],
          frame_index: 4542,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The mug was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:55.0 video 1>; Point=(0.5952, 0.5842)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 355.0,
          sampled_last_visible_time_in_clip_sec: 355.0,
          sampled_last_visible_time_token: "<TIME 00:05:55.0 video 1>",
          projected_pixel: [838.0773170620078, 822.5770723482898],
          normalized_projected_pixel: [0.5952253672315396, 0.5842166707019104],
          camera_coordinates: [
            0.3314258561399299, 0.27655881829503126, 1.4593797929519892,
          ],
          frame_index: 4542,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 355.0,
              time_token: "<TIME 00:05:55.0 video 1>",
              projected_pixel: [838.0773170620078, 822.5770723482898],
              normalized_projected_pixel: [
                0.5952253672315396, 0.5842166707019104,
              ],
              camera_coordinates: [
                0.3314258561399299, 0.27655881829503126, 1.4593797929519892,
              ],
              frame_index: 4542,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The mug was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:31.4 video 1>; Point=(0.617, 0.7601)",
          "<TIME 00:02:32.0 video 1>; Point=(3.382, 2.7167)",
        ],
        answer_metadata: {
          last_placement_time_sec: 151.4,
          last_placement_time_in_clip_sec: 151.4,
          last_placement_time_token: "<TIME 00:02:31.4 video 1>",
          projected_pixel: [868.791544882566, 1070.2205458765811],
          normalized_projected_pixel: [0.6170394494904587, 0.7600998195146172],
          camera_coordinates: [
            0.10851837599360303, 0.23195471287369096, 0.3769631928642932,
          ],
          frame_index: 4542,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 151.4,
              time_token: "<TIME 00:02:31.4 video 1>",
              projected_pixel: [868.791544882566, 1070.2205458765811],
              normalized_projected_pixel: [
                0.6170394494904587, 0.7600998195146172,
              ],
              camera_coordinates: [
                0.10851837599360303, 0.23195471287369096, 0.3769631928642932,
              ],
              frame_index: 4542,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 152.0,
              time_token: "<TIME 00:02:32.0 video 1>",
              projected_pixel: [4761.883494768003, 3825.110328279823],
              normalized_projected_pixel: [
                3.3820195275340934, 2.7166976763351016,
              ],
              camera_coordinates: [
                0.39260690679539334, 0.4369142043350476, 0.10519210595510842,
              ],
              frame_index: 4560,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:01.0 video 1>, based on the last known position of the mug that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area close to the microwave",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 151.4,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the fridge and the hob",
          raw_correct_fixture: "P01_counter.001",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, consider the mug that was moved earlier. Using its last known position to infer its current location, in which direction is the mug from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 361.0,
            camera_coordinates: [
              1.0128375167671062, 1.0226732148936566, -0.5080479609210108,
            ],
            world_coordinates: [
              -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.0128375167671062,
              z: -0.5080479609210108,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, consider the mug that was moved earlier. Using its last known position to infer its current location, and using the current position of the third orange (marked in red) in the current frame, where is the mug relative to third orange from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "e44a21e6e04d424c",
            object_x_name: "mug",
            object_x_reference_time_sec: 361.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
            ],
            object_x_camera_coordinates: [
              1.0128375167671062, 1.0226732148936566, -0.5080479609210108,
            ],
            object_y_assoc_id: "2defaf6678fa65eb",
            object_y_name: "third orange",
            object_y_reference_time_sec: 361.0,
            object_y_world_coordinates: [
              -1.5490675702512484, -2.621060415205895, -0.41879999330528606,
            ],
            object_y_projected_pixel: [870.3122436208102, 1073.7915098542867],
            object_y_normalized_projected_pixel: [
              0.6181194912079618, 0.7626360155215104,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, consider the mug that was moved earlier. Using its last known position to infer its current location, and using the current position of the third orange (marked in red) in the current frame, how far is the mug from the third orange: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "e44a21e6e04d424c",
            object_x_name: "mug",
            object_x_reference_time_sec: 361.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "2defaf6678fa65eb",
            object_y_name: "third orange",
            object_y_pixel: [870.3122436208102, 1073.7915098542867],
            object_y_normalized_projected_pixel: [
              0.6181194912079618, 0.7626360155215104,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9107184710697869, 0.8042120052458084, -0.8591915479644318,
            ],
            distance_m: 1.4880776858157274,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_27: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "c60c10f7d1acb901",
    object_a_name: "lid of milk frother",
    query_time_sec: 361.0,
    query_time_in_clip_sec: 361.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 361.0,
    clip_duration_sec: 361.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "c60c10f7d1acb901",
      object_name: "lid of milk frother",
      query_time_sec: 361.0,
      oos_span_start_sec: 356.0,
      oos_span_end_sec: 366.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 361.0,
      clip_duration_sec: 361.0,
      anchor_assoc_id: "762824ba9d53a1cc",
      anchor_name: "plug of food processor",
      anchor_projected_pixel: [99.78566346858952, 600.379412521525],
      anchor_world_coordinates: [
        -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_27",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:01.0 video 1>, is the previously moved lid of milk frother visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.8519578563866519, 1.0216081393276657, -0.6751002791018901,
          ],
          frame_index: 5396,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid of milk frother was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:55.0 video 1>; Point=(0.6608, 0.5804)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 355.0,
          sampled_last_visible_time_in_clip_sec: 355.0,
          sampled_last_visible_time_token: "<TIME 00:05:55.0 video 1>",
          projected_pixel: [930.3486463549261, 817.1872598157283],
          normalized_projected_pixel: [0.6607589817861691, 0.580388678846398],
          camera_coordinates: [
            0.49220102807371746, 0.23558786620667405, 1.2973223904850486,
          ],
          frame_index: 5396,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.358569128705764, -1.703000926376473, -0.3998278790577944,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 355.0,
              time_token: "<TIME 00:05:55.0 video 1>",
              projected_pixel: [930.3486463549261, 817.1872598157283],
              normalized_projected_pixel: [
                0.6607589817861691, 0.580388678846398,
              ],
              camera_coordinates: [
                0.49220102807371746, 0.23558786620667405, 1.2973223904850486,
              ],
              frame_index: 5396,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The lid of milk frother was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:59.9 video 1>; Point=(0.527, 0.5992)",
          "<TIME 00:03:00.0 video 1>; Point=(0.4053, 0.582)",
          "<TIME 00:03:01.0 video 1>; Point=(-0.3882, 0.7409)",
          "<TIME 00:03:02.0 video 1>; Point=(-0.8083, 0.9973)",
        ],
        answer_metadata: {
          last_placement_time_sec: 179.86666666666667,
          last_placement_time_in_clip_sec: 179.86666666666667,
          last_placement_time_token: "<TIME 00:02:59.9 video 1>",
          projected_pixel: [741.9679871775925, 843.7168510525114],
          normalized_projected_pixel: [0.5269658999840856, 0.5992307180770677],
          camera_coordinates: [
            0.03632677259438277, 0.11562772116993558, 0.5163359529849898,
          ],
          frame_index: 5396,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.358569128705764, -1.703000926376473, -0.3998278790577944,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 179.86666666666667,
              time_token: "<TIME 00:02:59.9 video 1>",
              projected_pixel: [741.9679871775925, 843.7168510525114],
              normalized_projected_pixel: [
                0.5269658999840856, 0.5992307180770677,
              ],
              camera_coordinates: [
                0.03632677259438277, 0.11562772116993558, 0.5163359529849898,
              ],
              frame_index: 5396,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 180.0,
              time_token: "<TIME 00:03:00.0 video 1>",
              projected_pixel: [570.6797745649238, 819.5119458465766],
              normalized_projected_pixel: [
                0.40531233988986065, 0.5820397342660345,
              ],
              camera_coordinates: [
                -0.10231666274246809, 0.0903828994709831, 0.48957123730206037,
              ],
              frame_index: 5400,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 181.0,
              time_token: "<TIME 00:03:01.0 video 1>",
              projected_pixel: [-546.5613638689877, 1043.2049541895758],
              normalized_projected_pixel: [
                -0.38818278683876967, 0.7409126095096419,
              ],
              camera_coordinates: [
                -0.6354488245726739, 0.17322624185280053, 0.20500035845948933,
              ],
              frame_index: 5430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 182.0,
              time_token: "<TIME 00:03:02.0 video 1>",
              projected_pixel: [-1138.05368123466, 1404.1307626154216],
              normalized_projected_pixel: [
                -0.8082767622405256, 0.9972519620848165,
              ],
              camera_coordinates: [
                -0.688065947807919, 0.2625707952187415, 0.1893084244421523,
              ],
              frame_index: 5460,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:01.0 video 1>, based on the last known position of the lid of milk frother that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 179.86666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the fridge and the hob",
          raw_correct_fixture: "P01_counter.001",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, consider the lid of milk frother that was moved earlier. Using its last known position to infer its current location, in which direction is the lid of milk frother from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 361.0,
            camera_coordinates: [
              0.8519578563866519, 1.0216081393276657, -0.6751002791018901,
            ],
            world_coordinates: [
              -0.358569128705764, -1.703000926376473, -0.3998278790577944,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.8519578563866519,
              z: -0.6751002791018901,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, consider the lid of milk frother that was moved earlier. Using its last known position to infer its current location, and using the current position of the plug of food processor (marked in red) in the current frame, where is the lid of milk frother relative to plug of food processor from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "c60c10f7d1acb901",
            object_x_name: "lid of milk frother",
            object_x_reference_time_sec: 361.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.358569128705764, -1.703000926376473, -0.3998278790577944,
            ],
            object_x_camera_coordinates: [
              0.8519578563866519, 1.0216081393276657, -0.6751002791018901,
            ],
            object_y_assoc_id: "762824ba9d53a1cc",
            object_y_name: "plug of food processor",
            object_y_reference_time_sec: 361.0,
            object_y_world_coordinates: [
              -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
            ],
            object_y_projected_pixel: [99.78566346858952, 600.379412521525],
            object_y_normalized_projected_pixel: [
              0.07087049962257778, 0.42640583275676486,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, consider the lid of milk frother that was moved earlier. Using its last known position to infer its current location, and using the current position of the plug of food processor (marked in red) in the current frame, how far is the lid of milk frother from the plug of food processor: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "c60c10f7d1acb901",
            object_x_name: "lid of milk frother",
            object_x_reference_time_sec: 361.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "762824ba9d53a1cc",
            object_y_name: "plug of food processor",
            object_y_pixel: [99.78566346858952, 600.379412521525],
            object_y_normalized_projected_pixel: [
              0.07087049962257778, 0.42640583275676486,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.3461294922376994, 1.1087980510343334, -1.1152348632749354,
            ],
            distance_m: 2.0700837007506547,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_28: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "cc058509b79d0313",
    object_a_name: "milk frother base",
    query_time_sec: 361.0,
    query_time_in_clip_sec: 361.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 361.0,
    clip_duration_sec: 361.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "cc058509b79d0313",
      object_name: "milk frother base",
      query_time_sec: 361.0,
      oos_span_start_sec: 356.0,
      oos_span_end_sec: 366.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 361.0,
      clip_duration_sec: 361.0,
      anchor_assoc_id: "0dc220cf42cdb3d8",
      anchor_name: "first orange",
      anchor_projected_pixel: [830.4021863812834, 1103.5381631424516],
      anchor_world_coordinates: [
        -1.5765129580203285, -2.618846807383802, -0.5441149356939652,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_28",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:01.0 video 1>, is the previously moved milk frother base visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.8276835500856601, 1.0724227122159578, -0.6026769474667394,
          ],
          frame_index: 5343,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The milk frother base was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:55.0 video 1>; Point=(0.6496, 0.609)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 355.0,
          sampled_last_visible_time_in_clip_sec: 355.0,
          sampled_last_visible_time_token: "<TIME 00:05:55.0 video 1>",
          projected_pixel: [914.6446293432112, 857.533377546411],
          normalized_projected_pixel: [0.6496055606130762, 0.6090435920073941],
          camera_coordinates: [
            0.457471684330906, 0.3203548366803729, 1.2923288817733634,
          ],
          frame_index: 5343,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 355.0,
              time_token: "<TIME 00:05:55.0 video 1>",
              projected_pixel: [914.6446293432112, 857.533377546411],
              normalized_projected_pixel: [
                0.6496055606130762, 0.6090435920073941,
              ],
              camera_coordinates: [
                0.457471684330906, 0.3203548366803729, 1.2923288817733634,
              ],
              frame_index: 5343,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The milk frother base was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:58.1 video 1>; Point=(0.6151, 0.6755)",
          "<TIME 00:02:59.0 video 1>; Point=(0.5949, 0.6894)",
          "<TIME 00:03:00.0 video 1>; Point=(0.4234, 0.6495)",
          "<TIME 00:03:01.0 video 1>; Point=(-0.069, 0.7198)",
        ],
        answer_metadata: {
          last_placement_time_sec: 178.1,
          last_placement_time_in_clip_sec: 178.1,
          last_placement_time_token: "<TIME 00:02:58.1 video 1>",
          projected_pixel: [866.086453980851, 951.0652939886792],
          normalized_projected_pixel: [0.6151182201568545, 0.6754725099351414],
          camera_coordinates: [
            0.1578517051626399, 0.23076138599129448, 0.572306223421392,
          ],
          frame_index: 5343,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 178.1,
              time_token: "<TIME 00:02:58.1 video 1>",
              projected_pixel: [866.086453980851, 951.0652939886792],
              normalized_projected_pixel: [
                0.6151182201568545, 0.6754725099351414,
              ],
              camera_coordinates: [
                0.1578517051626399, 0.23076138599129448, 0.572306223421392,
              ],
              frame_index: 5343,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 179.0,
              time_token: "<TIME 00:02:59.0 video 1>",
              projected_pixel: [837.623798702625, 970.6197820670646],
              normalized_projected_pixel: [
                0.5949032661240234, 0.6893606406726311,
              ],
              camera_coordinates: [
                0.1208588037894398, 0.22986861735413677, 0.527679888301938,
              ],
              frame_index: 5370,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 180.0,
              time_token: "<TIME 00:03:00.0 video 1>",
              projected_pixel: [596.1959304177016, 914.4808364978855],
              normalized_projected_pixel: [
                0.423434609671663, 0.6494892304672483,
              ],
              camera_coordinates: [
                -0.08683803858661876, 0.17629711473539555, 0.5177787104092191,
              ],
              frame_index: 5400,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 181.0,
              time_token: "<TIME 00:03:01.0 video 1>",
              projected_pixel: [-97.18977097081245, 1013.4547481379618],
              normalized_projected_pixel: [
                -0.06902682597358839, 0.7197832018025297,
              ],
              camera_coordinates: [
                -0.5986744889565334, 0.2318774728967276, 0.26520154670666823,
              ],
              frame_index: 5430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:01.0 video 1>, based on the last known position of the milk frother base that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area below the boiler",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 178.1,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the fridge and the hob",
          raw_correct_fixture: "P01_counter.001",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, consider the milk frother base that was moved earlier. Using its last known position to infer its current location, in which direction is the milk frother base from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 361.0,
            camera_coordinates: [
              0.8276835500856601, 1.0724227122159578, -0.6026769474667394,
            ],
            world_coordinates: [
              -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.8276835500856601,
              z: -0.6026769474667394,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, consider the milk frother base that was moved earlier. Using its last known position to infer its current location, and using the current position of the first orange (marked in red) in the current frame, where is the milk frother base relative to first orange from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "cc058509b79d0313",
            object_x_name: "milk frother base",
            object_x_reference_time_sec: 361.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
            ],
            object_x_camera_coordinates: [
              0.8276835500856601, 1.0724227122159578, -0.6026769474667394,
            ],
            object_y_assoc_id: "0dc220cf42cdb3d8",
            object_y_name: "first orange",
            object_y_reference_time_sec: 361.0,
            object_y_world_coordinates: [
              -1.5765129580203285, -2.618846807383802, -0.5441149356939652,
            ],
            object_y_projected_pixel: [830.4021863812834, 1103.5381631424516],
            object_y_normalized_projected_pixel: [
              0.5897742801003433, 0.7837628999591275,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, consider the milk frother base that was moved earlier. Using its last known position to infer its current location, and using the current position of the first orange (marked in red) in the current frame, how far is the milk frother base from the first orange: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "cc058509b79d0313",
            object_x_name: "milk frother base",
            object_x_reference_time_sec: 361.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0dc220cf42cdb3d8",
            object_y_name: "first orange",
            object_y_pixel: [830.4021863812834, 1103.5381631424516],
            object_y_normalized_projected_pixel: [
              0.5897742801003433, 0.7837628999591275,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7272017395223487, 0.7698080491607826, -1.0506580267123025,
            ],
            distance_m: 1.4917469931634013,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_29: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e5066ca31ca315c2",
    object_a_name: "coffee capsule",
    query_time_sec: 361.0,
    query_time_in_clip_sec: 361.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 361.0,
    clip_duration_sec: 361.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e5066ca31ca315c2",
      object_name: "coffee capsule",
      query_time_sec: 361.0,
      oos_span_start_sec: 356.0,
      oos_span_end_sec: 366.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 361.0,
      clip_duration_sec: 361.0,
      anchor_assoc_id: "36a5f41a2ff0b00f",
      anchor_name: "second orange",
      anchor_projected_pixel: [870.2024808451677, 1124.0152426811994],
      anchor_world_coordinates: [
        -1.5439106789914732, -2.6040202110166337, -0.4866455975711177,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_29",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:01.0 video 1>, is the previously moved coffee capsule visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.9840193909911903, 1.0609106842987375, -0.7537435887768295,
          ],
          frame_index: 512,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The coffee capsule was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:55.0 video 1>; Point=(0.6676, 0.5598)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 355.0,
          sampled_last_visible_time_in_clip_sec: 355.0,
          sampled_last_visible_time_token: "<TIME 00:05:55.0 video 1>",
          projected_pixel: [939.9445342531199, 788.2373882859486],
          normalized_projected_pixel: [0.6675742430774999, 0.5598276905439975],
          camera_coordinates: [
            0.5653315168303237, 0.19198684323143678, 1.4311902041284705,
          ],
          frame_index: 512,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 355.0,
              time_token: "<TIME 00:05:55.0 video 1>",
              projected_pixel: [939.9445342531199, 788.2373882859486],
              normalized_projected_pixel: [
                0.6675742430774999, 0.5598276905439975,
              ],
              camera_coordinates: [
                0.5653315168303237, 0.19198684323143678, 1.4311902041284705,
              ],
              frame_index: 512,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The coffee capsule was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:17.1 video 1>; Point=(0.5794, 0.6939)",
          "<TIME 00:00:18.0 video 1>; Point=(0.6098, 0.7031)",
          "<TIME 00:00:19.0 video 1>; Point=(1.0176, 0.6643)",
          "<TIME 00:00:20.0 video 1>; Point=(0.9964, 0.6218)",
        ],
        answer_metadata: {
          last_placement_time_sec: 17.066666666666666,
          last_placement_time_in_clip_sec: 17.066666666666666,
          last_placement_time_token: "<TIME 00:00:17.1 video 1>",
          projected_pixel: [815.8550175293915, 977.0337979918461],
          normalized_projected_pixel: [0.579442484040761, 0.693916049710118],
          camera_coordinates: [
            0.07652906072722421, 0.1767822623175327, 0.39641937501053526,
          ],
          frame_index: 512,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 17.066666666666666,
              time_token: "<TIME 00:00:17.1 video 1>",
              projected_pixel: [815.8550175293915, 977.0337979918461],
              normalized_projected_pixel: [
                0.579442484040761, 0.693916049710118,
              ],
              camera_coordinates: [
                0.07652906072722421, 0.1767822623175327, 0.39641937501053526,
              ],
              frame_index: 512,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 18.0,
              time_token: "<TIME 00:00:18.0 video 1>",
              projected_pixel: [858.5811147396989, 989.9807277928666],
              normalized_projected_pixel: [
                0.609787723536718, 0.7031113123528882,
              ],
              camera_coordinates: [
                0.10710719949664327, 0.18995209675104952, 0.404191972539808,
              ],
              frame_index: 540,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 19.0,
              time_token: "<TIME 00:00:19.0 video 1>",
              projected_pixel: [1432.714711606306, 935.3556910521024],
              normalized_projected_pixel: [
                1.0175530622203879, 0.6643151214858682,
              ],
              camera_coordinates: [
                0.7078162952354661, 0.22134570741109227, 0.378551547454536,
              ],
              frame_index: 570,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 20.0,
              time_token: "<TIME 00:00:20.0 video 1>",
              projected_pixel: [1402.8967048935226, 875.5351362082215],
              normalized_projected_pixel: [
                0.9963755006346041, 0.6218289319660664,
              ],
              camera_coordinates: [
                0.8180776484459776, 0.1970901385563285, 0.5279932340389586,
              ],
              frame_index: 600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:01.0 video 1>, based on the last known position of the coffee capsule that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area below the boiler",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 17.066666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the fridge and the hob",
          raw_correct_fixture: "P01_counter.001",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, consider the coffee capsule that was moved earlier. Using its last known position to infer its current location, in which direction is the coffee capsule from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 361.0,
            camera_coordinates: [
              0.9840193909911903, 1.0609106842987375, -0.7537435887768295,
            ],
            world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.9840193909911903,
              z: -0.7537435887768295,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, consider the coffee capsule that was moved earlier. Using its last known position to infer its current location, and using the current position of the second orange (marked in red) in the current frame, where is the coffee capsule relative to second orange from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "e5066ca31ca315c2",
            object_x_name: "coffee capsule",
            object_x_reference_time_sec: 361.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_x_camera_coordinates: [
              0.9840193909911903, 1.0609106842987375, -0.7537435887768295,
            ],
            object_y_assoc_id: "36a5f41a2ff0b00f",
            object_y_name: "second orange",
            object_y_reference_time_sec: 361.0,
            object_y_world_coordinates: [
              -1.5439106789914732, -2.6040202110166337, -0.4866455975711177,
            ],
            object_y_projected_pixel: [870.2024808451677, 1124.0152426811994],
            object_y_normalized_projected_pixel: [
              0.6180415346911702, 0.7983062803133518,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, consider the coffee capsule that was moved earlier. Using its last known position to infer its current location, and using the current position of the second orange (marked in red) in the current frame, how far is the coffee capsule from the second orange: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "e5066ca31ca315c2",
            object_x_name: "coffee capsule",
            object_x_reference_time_sec: 361.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "36a5f41a2ff0b00f",
            object_y_name: "second orange",
            object_y_pixel: [870.2024808451677, 1124.0152426811994],
            object_y_normalized_projected_pixel: [
              0.6180415346911702, 0.7983062803133518,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8697967765592856, 0.7830787975193669, -1.1402229144612401,
            ],
            distance_m: 1.633972805862994,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_30: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "11785d3856c2848f",
    object_a_name: "right half of third orange",
    query_time_sec: 365.0,
    query_time_in_clip_sec: 365.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 365.0,
    clip_duration_sec: 365.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "11785d3856c2848f",
      object_name: "right half of third orange",
      query_time_sec: 365.0,
      oos_span_start_sec: 360.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 36.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 365.0,
      clip_duration_sec: 365.0,
      anchor_assoc_id: "0dc220cf42cdb3d8",
      anchor_name: "first orange",
      anchor_projected_pixel: [838.5996591680426, 1089.5051646112663],
      anchor_world_coordinates: [
        -1.5765129580203285, -2.618846807383802, -0.5441149356939652,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_30",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:05.0 video 1>, is the previously moved right half of third orange visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-42.97399448792089, 759.6841582737894],
          camera_coordinates: [
            -0.44206883597932434, 0.032207483967567674, 0.2527457920715803,
          ],
          frame_index: 8418,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The right half of third orange was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:56.0 video 1>; Point=(0.2035, 0.8099)",
          "<TIME 00:05:57.0 video 1>; Point=(0.1719, 0.7266)",
          "<TIME 00:05:58.0 video 1>; Point=(0.1567, 0.6746)",
          "<TIME 00:05:59.0 video 1>; Point=(0.2015, 0.6764)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 359.0,
          sampled_last_visible_time_in_clip_sec: 359.0,
          sampled_last_visible_time_token: "<TIME 00:05:59.0 video 1>",
          projected_pixel: [283.68878860044777, 952.366618687329],
          normalized_projected_pixel: [0.20148351463099984, 0.6763967462267962],
          camera_coordinates: [
            -0.2545030207171117, 0.15112167583694225, 0.351580250341041,
          ],
          frame_index: 8418,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 356.0,
              time_token: "<TIME 00:05:56.0 video 1>",
              projected_pixel: [286.5127059603472, 1140.2717394260212],
              normalized_projected_pixel: [
                0.20348913775592842, 0.8098520876605264,
              ],
              camera_coordinates: [
                -0.2171889790549968, 0.2291110963876517, 0.2833722701995003,
              ],
              frame_index: 8418,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 357.0,
              time_token: "<TIME 00:05:57.0 video 1>",
              projected_pixel: [242.06125844765916, 1023.0250036553024],
              normalized_projected_pixel: [
                0.17191850742021247, 0.7265802582779136,
              ],
              camera_coordinates: [
                -0.24370014043104193, 0.1693311908569004, 0.295033739023693,
              ],
              frame_index: 8418,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 358.0,
              time_token: "<TIME 00:05:58.0 video 1>",
              projected_pixel: [220.61958609884346, 949.9066037300337],
              normalized_projected_pixel: [
                0.1566900469452013, 0.674649576512808,
              ],
              camera_coordinates: [
                -0.2688763794454436, 0.1372554016025449, 0.31418529661059624,
              ],
              frame_index: 8418,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 359.0,
              time_token: "<TIME 00:05:59.0 video 1>",
              projected_pixel: [283.68878860044777, 952.366618687329],
              normalized_projected_pixel: [
                0.20148351463099984, 0.6763967462267962,
              ],
              camera_coordinates: [
                -0.2545030207171117, 0.15112167583694225, 0.351580250341041,
              ],
              frame_index: 8418,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The right half of third orange was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:40.6 video 1>; Point=(0.5028, 0.7183)",
          "<TIME 00:04:41.0 video 1>; Point=(0.1806, 0.8045)",
          "<TIME 00:04:42.0 video 1>; Point=(0.2107, 0.6531)",
          "<TIME 00:04:43.0 video 1>; Point=(0.2334, 0.5935)",
        ],
        answer_metadata: {
          last_placement_time_sec: 280.6,
          last_placement_time_in_clip_sec: 280.6,
          last_placement_time_token: "<TIME 00:04:40.6 video 1>",
          projected_pixel: [707.8916574026206, 1011.3657604466664],
          normalized_projected_pixel: [0.5027639612234521, 0.7182995457717801],
          camera_coordinates: [
            0.005388913896646308, 0.17762710304218243, 0.3527314360064464,
          ],
          frame_index: 8418,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 280.6,
              time_token: "<TIME 00:04:40.6 video 1>",
              projected_pixel: [707.8916574026206, 1011.3657604466664],
              normalized_projected_pixel: [
                0.5027639612234521, 0.7182995457717801,
              ],
              camera_coordinates: [
                0.005388913896646308, 0.17762710304218243, 0.3527314360064464,
              ],
              frame_index: 8418,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 281.0,
              time_token: "<TIME 00:04:41.0 video 1>",
              projected_pixel: [254.294787367832, 1132.773624111619],
              normalized_projected_pixel: [
                0.18060709330101704, 0.804526721670184,
              ],
              camera_coordinates: [
                -0.20708114679895662, 0.1991182949263997, 0.24715838465968742,
              ],
              frame_index: 8430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 282.0,
              time_token: "<TIME 00:04:42.0 video 1>",
              projected_pixel: [296.65785104908616, 919.5774626829109],
              normalized_projected_pixel: [
                0.21069449648372596, 0.6531089933827492,
              ],
              camera_coordinates: [
                -0.2854547022838263, 0.15163598139217516, 0.41164246459429465,
              ],
              frame_index: 8460,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 283.0,
              time_token: "<TIME 00:04:43.0 video 1>",
              projected_pixel: [328.5694686475957, 835.6026515671019],
              normalized_projected_pixel: [
                0.23335899761903106, 0.5934677923061803,
              ],
              camera_coordinates: [
                -0.2310902524736682, 0.0808205555001853, 0.37000964728753294,
              ],
              frame_index: 8490,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:05.0 video 1>, based on the last known position of the right half of third orange that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 280.6,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:05.0 video 1>, consider the right half of third orange that was moved earlier. Using its last known position to infer its current location, in which direction is the right half of third orange from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 365.0,
            camera_coordinates: [
              -0.44206883597932434, 0.032207483967567674, 0.2527457920715803,
            ],
            world_coordinates: [
              -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.44206883597932434,
              z: 0.2527457920715803,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:05.0 video 1>, consider the right half of third orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the first orange (marked in red) in the current frame, where is the right half of third orange relative to first orange from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "11785d3856c2848f",
            object_x_name: "right half of third orange",
            object_x_reference_time_sec: 365.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
            ],
            object_x_camera_coordinates: [
              -0.44206883597932434, 0.032207483967567674, 0.2527457920715803,
            ],
            object_y_assoc_id: "0dc220cf42cdb3d8",
            object_y_name: "first orange",
            object_y_reference_time_sec: 365.0,
            object_y_world_coordinates: [
              -1.5765129580203285, -2.618846807383802, -0.5441149356939652,
            ],
            object_y_projected_pixel: [838.5996591680426, 1089.5051646112663],
            object_y_normalized_projected_pixel: [
              0.5955963488409394, 0.773796281684138,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:05.0 video 1>, consider the right half of third orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the first orange (marked in red) in the current frame, how far is the right half of third orange from the first orange: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "11785d3856c2848f",
            object_x_name: "right half of third orange",
            object_x_reference_time_sec: 365.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0dc220cf42cdb3d8",
            object_y_name: "first orange",
            object_y_pixel: [838.5996591680426, 1089.5051646112663],
            object_y_normalized_projected_pixel: [
              0.5955963488409394, 0.773796281684138,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.5497029224320866, -0.26223333690252715, -0.20072036736827004,
            ],
            distance_m: 0.6412708412128718,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_31: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "37b4dde2b16602ca",
    object_a_name: "left half of first orange",
    query_time_sec: 365.0,
    query_time_in_clip_sec: 365.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 365.0,
    clip_duration_sec: 365.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "37b4dde2b16602ca",
      object_name: "left half of first orange",
      query_time_sec: 365.0,
      oos_span_start_sec: 360.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 36.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 365.0,
      clip_duration_sec: 365.0,
      anchor_assoc_id: "00bcef63aa22aa44",
      anchor_name: "knife",
      anchor_projected_pixel: [848.5468134600876, 1076.867552557711],
      anchor_world_coordinates: [
        -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_31",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:05.0 video 1>, is the previously moved left half of first orange visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-18.72063299534227, 751.7622565601553],
          camera_coordinates: [
            -0.39413534021493346, 0.025299688590208147, 0.25127605154337807,
          ],
          frame_index: 6107,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The left half of first orange was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:56.0 video 1>; Point=(0.2569, 0.7807)",
          "<TIME 00:05:57.0 video 1>; Point=(0.2155, 0.725)",
          "<TIME 00:05:58.0 video 1>; Point=(0.1937, 0.6768)",
          "<TIME 00:05:59.0 video 1>; Point=(0.2375, 0.6796)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 359.0,
          sampled_last_visible_time_in_clip_sec: 359.0,
          sampled_last_visible_time_token: "<TIME 00:05:59.0 video 1>",
          projected_pixel: [334.3310604911878, 956.9134170354029],
          normalized_projected_pixel: [0.23745103728067318, 0.6796260064171895],
          camera_coordinates: [
            -0.20948873866439177, 0.1442646249161219, 0.33502147459106446,
          ],
          frame_index: 6107,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 356.0,
              time_token: "<TIME 00:05:56.0 video 1>",
              projected_pixel: [361.77372392237316, 1099.2569394954407],
              normalized_projected_pixel: [
                0.2569415652857764, 0.7807222581643756,
              ],
              camera_coordinates: [
                -0.17634254905469327, 0.2060121518094462, 0.2954348448000521,
              ],
              frame_index: 6107,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 357.0,
              time_token: "<TIME 00:05:57.0 video 1>",
              projected_pixel: [303.484237169464, 1020.8142490648197],
              normalized_projected_pixel: [
                0.21554278208058522, 0.7250101200744458,
              ],
              camera_coordinates: [
                -0.1979088552892483, 0.15773920098631655, 0.2842503366712923,
              ],
              frame_index: 6107,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 358.0,
              time_token: "<TIME 00:05:58.0 video 1>",
              projected_pixel: [272.7374522118451, 952.9272430541155],
              normalized_projected_pixel: [
                0.19370557685500361, 0.6767949169418433,
              ],
              camera_coordinates: [
                -0.22339157133811494, 0.12953955765900194, 0.29938341247144074,
              ],
              frame_index: 6107,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 359.0,
              time_token: "<TIME 00:05:59.0 video 1>",
              projected_pixel: [334.3310604911878, 956.9134170354029],
              normalized_projected_pixel: [
                0.23745103728067318, 0.6796260064171895,
              ],
              camera_coordinates: [
                -0.20948873866439177, 0.1442646249161219, 0.33502147459106446,
              ],
              frame_index: 6107,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The left half of first orange was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:23.6 video 1>; Point=(0.5575, 0.7255)",
          "<TIME 00:03:24.0 video 1>; Point=(0.0534, 0.864)",
          "<TIME 00:03:25.0 video 1>; Point=(0.2076, 0.6645)",
          "<TIME 00:03:26.0 video 1>; Point=(0.2627, 0.6041)",
        ],
        answer_metadata: {
          last_placement_time_sec: 203.56666666666666,
          last_placement_time_in_clip_sec: 203.56666666666666,
          last_placement_time_token: "<TIME 00:03:23.6 video 1>",
          projected_pixel: [785.0005531799161, 1021.4842594087353],
          normalized_projected_pixel: [0.5575288019743723, 0.725485979693704],
          camera_coordinates: [
            0.047650744711954296, 0.1738550495410629, 0.33280353427287634,
          ],
          frame_index: 6107,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 203.56666666666666,
              time_token: "<TIME 00:03:23.6 video 1>",
              projected_pixel: [785.0005531799161, 1021.4842594087353],
              normalized_projected_pixel: [
                0.5575288019743723, 0.725485979693704,
              ],
              camera_coordinates: [
                0.047650744711954296, 0.1738550495410629, 0.33280353427287634,
              ],
              frame_index: 6107,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 204.0,
              time_token: "<TIME 00:03:24.0 video 1>",
              projected_pixel: [75.24878348124787, 1216.5533849946496],
              normalized_projected_pixel: [
                0.05344373826793172, 0.8640293927518818,
              ],
              camera_coordinates: [
                -0.26321424558029927, 0.21594351283826274, 0.15316526111931728,
              ],
              frame_index: 6120,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 205.0,
              time_token: "<TIME 00:03:25.0 video 1>",
              projected_pixel: [292.3010538495686, 935.6606917179323],
              normalized_projected_pixel: [
                0.20760018029088678, 0.6645317412769406,
              ],
              camera_coordinates: [
                -0.25680497748285225, 0.14513785826457393, 0.3646805228232757,
              ],
              frame_index: 6150,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 206.0,
              time_token: "<TIME 00:03:26.0 video 1>",
              projected_pixel: [369.8365503456918, 850.5446604025744],
              normalized_projected_pixel: [
                0.2626680045068834, 0.6040800144904648,
              ],
              camera_coordinates: [
                -0.17526410191484887, 0.07693461401876323, 0.3188292054777089,
              ],
              frame_index: 6180,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:05.0 video 1>, based on the last known position of the left half of first orange that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 203.56666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:05.0 video 1>, consider the left half of first orange that was moved earlier. Using its last known position to infer its current location, in which direction is the left half of first orange from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 365.0,
            camera_coordinates: [
              -0.39413534021493346, 0.025299688590208147, 0.25127605154337807,
            ],
            world_coordinates: [
              -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.39413534021493346,
              z: 0.25127605154337807,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:05.0 video 1>, consider the left half of first orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the knife (marked in red) in the current frame, where is the left half of first orange relative to knife from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "37b4dde2b16602ca",
            object_x_name: "left half of first orange",
            object_x_reference_time_sec: 365.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
            ],
            object_x_camera_coordinates: [
              -0.39413534021493346, 0.025299688590208147, 0.25127605154337807,
            ],
            object_y_assoc_id: "00bcef63aa22aa44",
            object_y_name: "knife",
            object_y_reference_time_sec: 365.0,
            object_y_world_coordinates: [
              -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
            ],
            object_y_projected_pixel: [848.5468134600876, 1076.867552557711],
            object_y_normalized_projected_pixel: [
              0.6026610891051759, 0.7648207049415561,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:05.0 video 1>, consider the left half of first orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the knife (marked in red) in the current frame, how far is the left half of first orange from the knife: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "37b4dde2b16602ca",
            object_x_name: "left half of first orange",
            object_x_reference_time_sec: 365.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "00bcef63aa22aa44",
            object_y_name: "knife",
            object_y_pixel: [848.5468134600876, 1076.867552557711],
            object_y_normalized_projected_pixel: [
              0.6026610891051759, 0.7648207049415561,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.523447432543005, -0.2941253720601025, -0.25882193122055197,
            ],
            distance_m: 0.6538315847418917,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_32: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "98dfab7aa5cc00f7",
    object_a_name: "pack of oranges",
    query_time_sec: 366.0,
    query_time_in_clip_sec: 366.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 366.0,
    clip_duration_sec: 366.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "98dfab7aa5cc00f7",
      object_name: "pack of oranges",
      query_time_sec: 366.0,
      oos_span_start_sec: 361.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 35.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 366.0,
      clip_duration_sec: 366.0,
      anchor_assoc_id: "e556b10f1cd07c2b",
      anchor_name: "food processor",
      anchor_projected_pixel: [493.3946423859281, 982.1865289229536],
      anchor_world_coordinates: [
        -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_32",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:06.0 video 1>, is the previously moved pack of oranges visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1370.2419628255582, 997.5840280267637],
          camera_coordinates: [
            0.7586754858396669, 0.3294437595176539, 0.5020356056414281,
          ],
          frame_index: 1583,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pack of oranges was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:00.0 video 1>; Point=(0.9609, 0.6482)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 360.0,
          sampled_last_visible_time_in_clip_sec: 360.0,
          sampled_last_visible_time_token: "<TIME 00:06:00.0 video 1>",
          projected_pixel: [1352.8965006996787, 912.6584318340222],
          normalized_projected_pixel: [0.9608639919742036, 0.6481949089730271],
          camera_coordinates: [
            0.8796031180020862, 0.2778624015617173, 0.6607064253541942,
          ],
          frame_index: 1583,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 360.0,
              time_token: "<TIME 00:06:00.0 video 1>",
              projected_pixel: [1352.8965006996787, 912.6584318340222],
              normalized_projected_pixel: [
                0.9608639919742036, 0.6481949089730271,
              ],
              camera_coordinates: [
                0.8796031180020862, 0.2778624015617173, 0.6607064253541942,
              ],
              frame_index: 1583,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The pack of oranges was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:52.8 video 1>; Point=(0.5858, 0.7787)",
          "<TIME 00:00:53.0 video 1>; Point=(0.5905, 0.7597)",
          "<TIME 00:00:54.0 video 1>; Point=(0.6359, 0.7637)",
          "<TIME 00:00:55.0 video 1>; Point=(0.5974, 0.7613)",
        ],
        answer_metadata: {
          last_placement_time_sec: 52.766666666666666,
          last_placement_time_in_clip_sec: 52.766666666666666,
          last_placement_time_token: "<TIME 00:00:52.8 video 1>",
          projected_pixel: [824.8272249561401, 1096.3436425582445],
          normalized_projected_pixel: [0.5858147904518041, 0.778653155226026],
          camera_coordinates: [
            0.09726744699243639, 0.300345941185844, 0.45413175656108007,
          ],
          frame_index: 1583,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 52.766666666666666,
              time_token: "<TIME 00:00:52.8 video 1>",
              projected_pixel: [824.8272249561401, 1096.3436425582445],
              normalized_projected_pixel: [
                0.5858147904518041, 0.778653155226026,
              ],
              camera_coordinates: [
                0.09726744699243639, 0.300345941185844, 0.45413175656108007,
              ],
              frame_index: 1583,
              status: "last_past_track_end",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 53.0,
              time_token: "<TIME 00:00:53.0 video 1>",
              projected_pixel: [831.4109598274499, 1069.641448321308],
              normalized_projected_pixel: [
                0.5904907385138138, 0.7596885286372926,
              ],
              camera_coordinates: [
                0.10272649015163982, 0.28091728036198904, 0.45933736878272935,
              ],
              frame_index: 1590,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 54.0,
              time_token: "<TIME 00:00:54.0 video 1>",
              projected_pixel: [895.3651331357918, 1075.2307161182212],
              normalized_projected_pixel: [
                0.6359127366021249, 0.7636581790612366,
              ],
              camera_coordinates: [
                0.14847778169568504, 0.2782824757298946, 0.4437245347344634,
              ],
              frame_index: 1620,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 55.0,
              time_token: "<TIME 00:00:55.0 video 1>",
              projected_pixel: [841.118707542943, 1071.8698129460195],
              normalized_projected_pixel: [
                0.5973854456981129, 0.7612711739673433,
              ],
              camera_coordinates: [
                0.10910775673869133, 0.279747857697321, 0.45388565808290937,
              ],
              frame_index: 1650,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:06.0 video 1>, based on the last known position of the pack of oranges that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 52.766666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area close to the microwave",
          raw_correct_fixture: "P01_counter.009",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:06.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, in which direction is the pack of oranges from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 366.0,
            camera_coordinates: [
              0.7586754858396669, 0.3294437595176539, 0.5020356056414281,
            ],
            world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7586754858396669,
              z: 0.5020356056414281,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:06.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, and using the current position of the food processor (marked in red) in the current frame, where is the pack of oranges relative to food processor from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 366.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            object_x_camera_coordinates: [
              0.7586754858396669, 0.3294437595176539, 0.5020356056414281,
            ],
            object_y_assoc_id: "e556b10f1cd07c2b",
            object_y_name: "food processor",
            object_y_reference_time_sec: 366.0,
            object_y_world_coordinates: [
              -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
            ],
            object_y_projected_pixel: [493.3946423859281, 982.1865289229536],
            object_y_normalized_projected_pixel: [
              0.3504223312400057, 0.6975756597464159,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:06.0 video 1>, consider the pack of oranges that was moved earlier. Using its last known position to infer its current location, and using the current position of the food processor (marked in red) in the current frame, how far is the pack of oranges from the food processor: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 366.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e556b10f1cd07c2b",
            object_y_name: "food processor",
            object_y_pixel: [493.3946423859281, 982.1865289229536],
            object_y_normalized_projected_pixel: [
              0.3504223312400057, 0.6975756597464159,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8870481454411152, 0.15681222046344356, 0.12633766422415693,
            ],
            distance_m: 0.9096184311120864,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_33: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "f421e886dd28b482",
    object_a_name: "right half of first orange",
    query_time_sec: 368.0,
    query_time_in_clip_sec: 368.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 368.0,
    clip_duration_sec: 368.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "f421e886dd28b482",
      object_name: "right half of first orange",
      query_time_sec: 368.0,
      oos_span_start_sec: 363.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 33.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 368.0,
      clip_duration_sec: 368.0,
      anchor_assoc_id: "e5066ca31ca315c2",
      anchor_name: "coffee capsule",
      anchor_projected_pixel: [646.7042946871293, 712.7566214242231],
      anchor_world_coordinates: [
        -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_33",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:08.0 video 1>, is the previously moved right half of first orange visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.8594828706727109, 0.8691511999576564, -0.876667299579895,
          ],
          frame_index: 6587,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The right half of first orange was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:59.0 video 1>; Point=(0.2534, 0.6926)",
          "<TIME 00:06:02.0 video 1>; Point=(0.0073, 0.607)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 362.0,
          sampled_last_visible_time_in_clip_sec: 362.0,
          sampled_last_visible_time_token: "<TIME 00:06:02.0 video 1>",
          projected_pixel: [10.222500018310939, 854.6825863758452],
          normalized_projected_pixel: [
            0.007260298308459473, 0.6070188823692082,
          ],
          camera_coordinates: [
            -0.4108695262459934, 0.08893679624688655, 0.28220288462528687,
          ],
          frame_index: 6587,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 359.0,
              time_token: "<TIME 00:05:59.0 video 1>",
              projected_pixel: [356.77453539242504, 975.2106222647285],
              normalized_projected_pixel: [
                0.2533910052503019, 0.6926211805857446,
              ],
              camera_coordinates: [
                -0.19986083182913728, 0.15736972903089885, 0.3415444415644844,
              ],
              frame_index: 6587,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 362.0,
              time_token: "<TIME 00:06:02.0 video 1>",
              projected_pixel: [10.222500018310939, 854.6825863758452],
              normalized_projected_pixel: [
                0.007260298308459473, 0.6070188823692082,
              ],
              camera_coordinates: [
                -0.4108695262459934, 0.08893679624688655, 0.28220288462528687,
              ],
              frame_index: 6587,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The right half of first orange was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:39.6 video 1>; Point=(0.5117, 0.7282)",
          "<TIME 00:03:40.0 video 1>; Point=(-0.1586, 1.0697)",
          "<TIME 00:03:41.0 video 1>; Point=(-0.1615, 0.795)",
          "<TIME 00:03:42.0 video 1>; Point=(-0.3587, 0.9594)",
        ],
        answer_metadata: {
          last_placement_time_sec: 219.56666666666666,
          last_placement_time_in_clip_sec: 219.56666666666666,
          last_placement_time_token: "<TIME 00:03:39.6 video 1>",
          projected_pixel: [720.4447451585418, 1025.326786012454],
          normalized_projected_pixel: [0.5116795065046461, 0.7282150468838452],
          camera_coordinates: [
            0.013386388605491462, 0.19565426269573016, 0.3704919754873659,
          ],
          frame_index: 6587,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 219.56666666666666,
              time_token: "<TIME 00:03:39.6 video 1>",
              projected_pixel: [720.4447451585418, 1025.326786012454],
              normalized_projected_pixel: [
                0.5116795065046461, 0.7282150468838452,
              ],
              camera_coordinates: [
                0.013386388605491462, 0.19565426269573016, 0.3704919754873659,
              ],
              frame_index: 6587,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 220.0,
              time_token: "<TIME 00:03:40.0 video 1>",
              projected_pixel: [-223.31605601876015, 1506.1002298197714],
              normalized_projected_pixel: [
                -0.15860515342241488, 1.0696734586788148,
              ],
              camera_coordinates: [
                -0.3181013949920679, 0.27639155622727746, 0.13486665136275894,
              ],
              frame_index: 6600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 221.0,
              time_token: "<TIME 00:03:41.0 video 1>",
              projected_pixel: [-227.42158267739944, 1119.293576728947],
              normalized_projected_pixel: [
                -0.16152101042428937, 0.7949528243813545,
              ],
              camera_coordinates: [
                -0.6311672266349615, 0.282509314015384, 0.2461764273514886,
              ],
              frame_index: 6630,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 222.0,
              time_token: "<TIME 00:03:42.0 video 1>",
              projected_pixel: [-505.0561471457047, 1350.8213466169111],
              normalized_projected_pixel: [
                -0.35870464996143797, 0.9593901609495107,
              ],
              camera_coordinates: [
                -0.44004713868817324, 0.23630449071319615, 0.15125759196913313,
              ],
              frame_index: 6660,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:08.0 video 1>, based on the last known position of the right half of first orange that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area below the boiler",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 219.56666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:08.0 video 1>, consider the right half of first orange that was moved earlier. Using its last known position to infer its current location, in which direction is the right half of first orange from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 368.0,
            camera_coordinates: [
              0.8594828706727109, 0.8691511999576564, -0.876667299579895,
            ],
            world_coordinates: [
              -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.8594828706727109,
              z: -0.876667299579895,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:08.0 video 1>, consider the right half of first orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, where is the right half of first orange relative to coffee capsule from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "f421e886dd28b482",
            object_x_name: "right half of first orange",
            object_x_reference_time_sec: 368.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
            ],
            object_x_camera_coordinates: [
              0.8594828706727109, 0.8691511999576564, -0.876667299579895,
            ],
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_reference_time_sec: 368.0,
            object_y_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_y_projected_pixel: [646.7042946871293, 712.7566214242231],
            object_y_normalized_projected_pixel: [
              0.4593070274766543, 0.5062191913524312,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:08.0 video 1>, consider the right half of first orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, how far is the right half of first orange from the coffee capsule: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "f421e886dd28b482",
            object_x_name: "right half of first orange",
            object_x_reference_time_sec: 368.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_pixel: [646.7042946871293, 712.7566214242231],
            object_y_normalized_projected_pixel: [
              0.4593070274766543, 0.5062191913524312,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9147882498214535, 0.862375972660842, -1.5260321301362443,
            ],
            distance_m: 1.9771959747183117,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_34: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "56a389eb59ae14b8",
    object_a_name: "left half of third orange",
    query_time_sec: 371.0,
    query_time_in_clip_sec: 371.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 371.0,
    clip_duration_sec: 371.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "56a389eb59ae14b8",
      object_name: "left half of third orange",
      query_time_sec: 371.0,
      oos_span_start_sec: 366.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 30.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 371.0,
      clip_duration_sec: 371.0,
      anchor_assoc_id: "c79d145ffded5b56",
      anchor_name: "green sponge",
      anchor_projected_pixel: [685.6230104358366, 903.1253750690721],
      anchor_world_coordinates: [
        -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_34",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:11.0 video 1>, is the previously moved left half of third orange visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.609470478413042, 0.6001142256484542, -0.2473605768385876,
          ],
          frame_index: 9063,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The left half of third orange was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:02.0 video 1>; Point=(0.0101, 0.591)",
          "<TIME 00:06:05.0 video 1>; Point=(0.0022, 0.5318)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 365.0,
          sampled_last_visible_time_in_clip_sec: 365.0,
          sampled_last_visible_time_token: "<TIME 00:06:05.0 video 1>",
          projected_pixel: [3.157344932936553, 748.8074931585314],
          normalized_projected_pixel: [
            0.0022424324807788017, 0.5318235036637297,
          ],
          camera_coordinates: [
            -0.4285784735661027, 0.02652480109076505, 0.295671845465844,
          ],
          frame_index: 9063,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 362.0,
              time_token: "<TIME 00:06:02.0 video 1>",
              projected_pixel: [14.174567751811992, 832.1170069988309],
              normalized_projected_pixel: [
                0.01006716459645738, 0.5909921924707606,
              ],
              camera_coordinates: [
                -0.4513310460773776, 0.08335671742204531, 0.316856409174175,
              ],
              frame_index: 9063,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 365.0,
              time_token: "<TIME 00:06:05.0 video 1>",
              projected_pixel: [3.157344932936553, 748.8074931585314],
              normalized_projected_pixel: [
                0.0022424324807788017, 0.5318235036637297,
              ],
              camera_coordinates: [
                -0.4285784735661027, 0.02652480109076505, 0.295671845465844,
              ],
              frame_index: 9063,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The left half of third orange was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:02.1 video 1>; Point=(0.5714, 0.7159)",
          "<TIME 00:05:03.0 video 1>; Point=(0.0672, 0.7851)",
          "<TIME 00:05:04.0 video 1>; Point=(0.2338, 0.64)",
          "<TIME 00:05:05.0 video 1>; Point=(0.1971, 0.6559)",
        ],
        answer_metadata: {
          last_placement_time_sec: 302.1,
          last_placement_time_in_clip_sec: 302.1,
          last_placement_time_token: "<TIME 00:05:02.1 video 1>",
          projected_pixel: [804.4851841973324, 1008.0457580325485],
          normalized_projected_pixel: [0.5713673183219691, 0.7159415895117532],
          camera_coordinates: [
            0.06560722529627538, 0.18700720267064108, 0.3745001446473881,
          ],
          frame_index: 9063,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 302.1,
              time_token: "<TIME 00:05:02.1 video 1>",
              projected_pixel: [804.4851841973324, 1008.0457580325485],
              normalized_projected_pixel: [
                0.5713673183219691, 0.7159415895117532,
              ],
              camera_coordinates: [
                0.06560722529627538, 0.18700720267064108, 0.3745001446473881,
              ],
              frame_index: 9063,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 303.0,
              time_token: "<TIME 00:05:03.0 video 1>",
              projected_pixel: [94.60901030779087, 1105.4513853509836],
              normalized_projected_pixel: [
                0.06719389936632875, 0.7851217225504145,
              ],
              camera_coordinates: [
                -0.3432951630277463, 0.22737149792851824, 0.2564001140753114,
              ],
              frame_index: 9090,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 304.0,
              time_token: "<TIME 00:05:04.0 video 1>",
              projected_pixel: [329.1917325202373, 901.0854273797974],
              normalized_projected_pixel: [
                0.23380094639221397, 0.6399754455822424,
              ],
              camera_coordinates: [
                -0.22409488034182878, 0.11826619093939139, 0.356468619874428,
              ],
              frame_index: 9120,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 305.0,
              time_token: "<TIME 00:05:05.0 video 1>",
              projected_pixel: [277.4859370567911, 923.5469271343316],
              normalized_projected_pixel: [
                0.1970780802960164, 0.6559282152942696,
              ],
              camera_coordinates: [
                -0.2476874825178932, 0.12793729595184766, 0.3383285392607882,
              ],
              frame_index: 9150,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:11.0 video 1>, based on the last known position of the left half of third orange that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 302.1,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:11.0 video 1>, consider the left half of third orange that was moved earlier. Using its last known position to infer its current location, in which direction is the left half of third orange from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 371.0,
            camera_coordinates: [
              0.609470478413042, 0.6001142256484542, -0.2473605768385876,
            ],
            world_coordinates: [
              -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.609470478413042,
              z: -0.2473605768385876,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:11.0 video 1>, consider the left half of third orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, where is the left half of third orange relative to green sponge from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "56a389eb59ae14b8",
            object_x_name: "left half of third orange",
            object_x_reference_time_sec: 371.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
            ],
            object_x_camera_coordinates: [
              0.609470478413042, 0.6001142256484542, -0.2473605768385876,
            ],
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_reference_time_sec: 371.0,
            object_y_world_coordinates: [
              -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
            ],
            object_y_projected_pixel: [685.6230104358366, 903.1253750690721],
            object_y_normalized_projected_pixel: [
              0.4869481608209067, 0.6414242720661023,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:11.0 video 1>, consider the left half of third orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, how far is the left half of third orange from the green sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "56a389eb59ae14b8",
            object_x_name: "left half of third orange",
            object_x_reference_time_sec: 371.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_pixel: [685.6230104358366, 903.1253750690721],
            object_y_normalized_projected_pixel: [
              0.4869481608209067, 0.6414242720661023,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6204652256480381, 0.43548200928044123, -0.7599978305996276,
            ],
            distance_m: 1.0734143557646048,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_35: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "a955b01a2895c6f5",
    object_a_name: "one bag",
    query_time_sec: 371.0,
    query_time_in_clip_sec: 371.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 371.0,
    clip_duration_sec: 371.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "a955b01a2895c6f5",
      object_name: "one bag",
      query_time_sec: 371.0,
      oos_span_start_sec: 366.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 30.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 371.0,
      clip_duration_sec: 371.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [179.3149337849178, 1146.17919744983],
      anchor_world_coordinates: [
        -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_35",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:11.0 video 1>, is the previously moved one bag visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.6402807560501778, 0.6023219066428283, -0.1881476967237532,
          ],
          frame_index: 3828,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The one bag was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:02.0 video 1>; Point=(0.0202, 0.5889)",
          "<TIME 00:06:03.0 video 1>; Point=(0.0067, 0.5455)",
          "<TIME 00:06:05.0 video 1>; Point=(0.0101, 0.5318)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 365.0,
          sampled_last_visible_time_in_clip_sec: 365.0,
          sampled_last_visible_time_token: "<TIME 00:06:05.0 video 1>",
          projected_pixel: [14.160860531448407, 748.838492007601],
          normalized_projected_pixel: [0.01005742935472188, 0.5318455198917621],
          camera_coordinates: [
            -0.4774214970751274, 0.030028595729089558, 0.34108544158609666,
          ],
          frame_index: 3828,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 362.0,
              time_token: "<TIME 00:06:02.0 video 1>",
              projected_pixel: [28.383077444462742, 829.1922390360835],
              normalized_projected_pixel: [
                0.020158435684987742, 0.5889149424972184,
              ],
              camera_coordinates: [
                -0.49688376783382004, 0.09152369333742882, 0.3650078606571958,
              ],
              frame_index: 3828,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 363.0,
              time_token: "<TIME 00:06:03.0 video 1>",
              projected_pixel: [9.407570392131447, 768.0917578597104],
              normalized_projected_pixel: [
                0.006681513062593358, 0.5455197143889988,
              ],
              camera_coordinates: [
                -0.48464513613968263, 0.04383001069175774, 0.34029451469856276,
              ],
              frame_index: 3828,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 365.0,
              time_token: "<TIME 00:06:05.0 video 1>",
              projected_pixel: [14.160860531448407, 748.838492007601],
              normalized_projected_pixel: [
                0.01005742935472188, 0.5318455198917621,
              ],
              camera_coordinates: [
                -0.4774214970751274, 0.030028595729089558, 0.34108544158609666,
              ],
              frame_index: 3828,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The one bag was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:07.6 video 1>; Point=(0.5699, 0.8163)",
          "<TIME 00:02:08.0 video 1>; Point=(0.6545, 0.8772)",
          "<TIME 00:02:09.0 video 1>; Point=(20.6462, 1.2785)",
          "<TIME 00:02:10.0 video 1>; Point=(31.5028, -1.1182)",
        ],
        answer_metadata: {
          last_placement_time_sec: 127.6,
          last_placement_time_in_clip_sec: 127.6,
          last_placement_time_token: "<TIME 00:02:07.6 video 1>",
          projected_pixel: [802.3596099142155, 1149.3623076325753],
          normalized_projected_pixel: [0.5698576774958917, 0.8163084571254086],
          camera_coordinates: [
            0.06313268751820322, 0.26917400652587353, 0.3524596293163742,
          ],
          frame_index: 3828,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 127.6,
              time_token: "<TIME 00:02:07.6 video 1>",
              projected_pixel: [802.3596099142155, 1149.3623076325753],
              normalized_projected_pixel: [
                0.5698576774958917, 0.8163084571254086,
              ],
              camera_coordinates: [
                0.06313268751820322, 0.26917400652587353, 0.3524596293163742,
              ],
              frame_index: 3828,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 128.0,
              time_token: "<TIME 00:02:08.0 video 1>",
              projected_pixel: [921.5753560257291, 1235.0330957930817],
              normalized_projected_pixel: [
                0.654527951722819, 0.877154187353041,
              ],
              camera_coordinates: [
                0.13570966759298075, 0.3214564506124456, 0.3327446775109095,
              ],
              frame_index: 3840,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 129.0,
              time_token: "<TIME 00:02:09.0 video 1>",
              projected_pixel: [29069.779718670557, 1800.1723692046025],
              normalized_projected_pixel: [
                20.646150368373977, 1.278531512219178,
              ],
              camera_coordinates: [
                0.4808689435384757, 0.48178843501591767, 0.07699645402692257,
              ],
              frame_index: 3870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 130.0,
              time_token: "<TIME 00:02:10.0 video 1>",
              projected_pixel: [44355.94186382162, -1574.4277802917209],
              normalized_projected_pixel: [
                31.502799619191492, -1.1182015485026426,
              ],
              camera_coordinates: [
                0.5554867526683649, 0.4849902166393729, 0.07545562724911514,
              ],
              frame_index: 3900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:11.0 video 1>, based on the last known position of the one bag that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 127.6,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:11.0 video 1>, consider the one bag that was moved earlier. Using its last known position to infer its current location, in which direction is the one bag from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 371.0,
            camera_coordinates: [
              0.6402807560501778, 0.6023219066428283, -0.1881476967237532,
            ],
            world_coordinates: [
              -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.6402807560501778,
              z: -0.1881476967237532,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:11.0 video 1>, consider the one bag that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, where is the one bag relative to cone from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "a955b01a2895c6f5",
            object_x_name: "one bag",
            object_x_reference_time_sec: 371.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
            ],
            object_x_camera_coordinates: [
              0.6402807560501778, 0.6023219066428283, -0.1881476967237532,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 371.0,
            object_y_world_coordinates: [
              -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
            ],
            object_y_projected_pixel: [179.3149337849178, 1146.17919744983],
            object_y_normalized_projected_pixel: [
              0.12735435638133366, 0.814047725461527,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:11.0 video 1>, consider the one bag that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, how far is the one bag from the cone: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "a955b01a2895c6f5",
            object_x_name: "one bag",
            object_x_reference_time_sec: 371.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [179.3149337849178, 1146.17919744983],
            object_y_normalized_projected_pixel: [
              0.12735435638133366, 0.814047725461527,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9870759778848515, 0.3079778653171992, -0.5175614142004181,
            ],
            distance_m: 1.1563040988908633,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_36: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "b671de6a85a09507",
    object_a_name: "left half of second orange",
    query_time_sec: 371.0,
    query_time_in_clip_sec: 371.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 371.0,
    clip_duration_sec: 371.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "b671de6a85a09507",
      object_name: "left half of second orange",
      query_time_sec: 371.0,
      oos_span_start_sec: 366.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 30.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 371.0,
      clip_duration_sec: 371.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [179.3149337849178, 1146.17919744983],
      anchor_world_coordinates: [
        -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_36",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:11.0 video 1>, is the previously moved left half of second orange visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.6211275279935129, 0.6133389796110125, -0.23093542451083815,
          ],
          frame_index: 7166,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The left half of second orange was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:02.0 video 1>; Point=(0.0235, 0.5959)",
          "<TIME 00:06:03.0 video 1>; Point=(0.0106, 0.5532)",
          "<TIME 00:06:04.0 video 1>; Point=(0.0044, 0.5458)",
          "<TIME 00:06:05.0 video 1>; Point=(0.0148, 0.5393)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 365.0,
          sampled_last_visible_time_in_clip_sec: 365.0,
          sampled_last_visible_time_token: "<TIME 00:06:05.0 video 1>",
          projected_pixel: [20.76983150574779, 759.3071665500224],
          normalized_projected_pixel: [
            0.014751300785332237, 0.5392806580610955,
          ],
          camera_coordinates: [
            -0.4357978819739534, 0.03440551970738226, 0.3172667746763762,
          ],
          frame_index: 7166,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.490592956085781, -3.206692348204073, -0.3751702465967427,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 362.0,
              time_token: "<TIME 00:06:02.0 video 1>",
              projected_pixel: [33.088996793892306, 839.0035522782518],
              normalized_projected_pixel: [
                0.023500707950207603, 0.5958832047430765,
              ],
              camera_coordinates: [
                -0.4563444798078038, 0.09137966779219409, 0.33901637986166233,
              ],
              frame_index: 7166,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 363.0,
              time_token: "<TIME 00:06:03.0 video 1>",
              projected_pixel: [14.950069476366139, 778.8958687774924],
              normalized_projected_pixel: [
                0.010617947071282769, 0.5531930886203781,
              ],
              camera_coordinates: [
                -0.4431738739552298, 0.0474070671886575, 0.31607983380855287,
              ],
              frame_index: 7166,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 364.0,
              time_token: "<TIME 00:06:04.0 video 1>",
              projected_pixel: [6.174392611021176, 768.4537538911844],
              normalized_projected_pixel: [
                0.0043852220248729945, 0.5457768138431708,
              ],
              camera_coordinates: [
                -0.4435643933183129, 0.04016382668260832, 0.3082036879903636,
              ],
              frame_index: 7166,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 365.0,
              time_token: "<TIME 00:06:05.0 video 1>",
              projected_pixel: [20.76983150574779, 759.3071665500224],
              normalized_projected_pixel: [
                0.014751300785332237, 0.5392806580610955,
              ],
              camera_coordinates: [
                -0.4357978819739534, 0.03440551970738226, 0.3172667746763762,
              ],
              frame_index: 7166,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The left half of second orange was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:58.9 video 1>; Point=(0.5388, 0.7061)",
          "<TIME 00:03:59.0 video 1>; Point=(0.5041, 0.7166)",
          "<TIME 00:04:00.0 video 1>; Point=(0.1553, 0.6795)",
          "<TIME 00:04:01.0 video 1>; Point=(0.2899, 0.5801)",
        ],
        answer_metadata: {
          last_placement_time_sec: 238.86666666666667,
          last_placement_time_in_clip_sec: 238.86666666666667,
          last_placement_time_token: "<TIME 00:03:58.9 video 1>",
          projected_pixel: [758.5784242534854, 994.2396678223907],
          normalized_projected_pixel: [0.538763085407305, 0.7061361277147662],
          camera_coordinates: [
            0.037829224050304866, 0.18176853320196584, 0.3832317620280017,
          ],
          frame_index: 7166,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.490592956085781, -3.206692348204073, -0.3751702465967427,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 238.86666666666667,
              time_token: "<TIME 00:03:58.9 video 1>",
              projected_pixel: [758.5784242534854, 994.2396678223907],
              normalized_projected_pixel: [
                0.538763085407305, 0.7061361277147662,
              ],
              camera_coordinates: [
                0.037829224050304866, 0.18176853320196584, 0.3832317620280017,
              ],
              frame_index: 7166,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 239.0,
              time_token: "<TIME 00:03:59.0 video 1>",
              projected_pixel: [709.7824940272135, 1008.9956764434219],
              normalized_projected_pixel: [
                0.5041068849625095, 0.7166162474740212,
              ],
              camera_coordinates: [
                0.0068274405713313335, 0.18546821383871037, 0.3713439685109756,
              ],
              frame_index: 7170,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 240.0,
              time_token: "<TIME 00:04:00.0 video 1>",
              projected_pixel: [218.66894322231337, 956.7278563406949],
              normalized_projected_pixel: [
                0.15530464717493847, 0.6794942161510616,
              ],
              camera_coordinates: [
                -0.33197532920166406, 0.173505176421058, 0.3853366724541156,
              ],
              frame_index: 7200,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 241.0,
              time_token: "<TIME 00:04:01.0 video 1>",
              projected_pixel: [408.13013819457, 816.7853433089377],
              normalized_projected_pixel: [
                0.2898651549677344, 0.5801032267819161,
              ],
              camera_coordinates: [
                -0.20756786424044327, 0.07895853746095538, 0.4320187070047543,
              ],
              frame_index: 7230,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.490592956085781, -3.206692348204073, -0.3751702465967427,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:11.0 video 1>, based on the last known position of the left half of second orange that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 238.86666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:11.0 video 1>, consider the left half of second orange that was moved earlier. Using its last known position to infer its current location, in which direction is the left half of second orange from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 371.0,
            camera_coordinates: [
              0.6211275279935129, 0.6133389796110125, -0.23093542451083815,
            ],
            world_coordinates: [
              -1.490592956085781, -3.206692348204073, -0.3751702465967427,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.6211275279935129,
              z: -0.23093542451083815,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:11.0 video 1>, consider the left half of second orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, where is the left half of second orange relative to cone from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "b671de6a85a09507",
            object_x_name: "left half of second orange",
            object_x_reference_time_sec: 371.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.490592956085781, -3.206692348204073, -0.3751702465967427,
            ],
            object_x_camera_coordinates: [
              0.6211275279935129, 0.6133389796110125, -0.23093542451083815,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 371.0,
            object_y_world_coordinates: [
              -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
            ],
            object_y_projected_pixel: [179.3149337849178, 1146.17919744983],
            object_y_normalized_projected_pixel: [
              0.12735435638133366, 0.814047725461527,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:11.0 video 1>, consider the left half of second orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, how far is the left half of second orange from the cone: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "b671de6a85a09507",
            object_x_name: "left half of second orange",
            object_x_reference_time_sec: 371.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [179.3149337849178, 1146.17919744983],
            object_y_normalized_projected_pixel: [
              0.12735435638133366, 0.814047725461527,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9679227498281866, 0.3189949382853834, -0.5603491419875031,
            ],
            distance_m: 1.1630233794781535,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_37: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "00bcef63aa22aa44",
    object_a_name: "knife",
    query_time_sec: 372.0,
    query_time_in_clip_sec: 372.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 372.0,
    clip_duration_sec: 372.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "00bcef63aa22aa44",
      object_name: "knife",
      query_time_sec: 372.0,
      oos_span_start_sec: 367.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 29.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 372.0,
      clip_duration_sec: 372.0,
      anchor_assoc_id: "3cd95e6ebb38b27e",
      anchor_name: "black small part of the frother",
      anchor_projected_pixel: [685.3229145815192, 1325.8574018121724],
      anchor_world_coordinates: [
        -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_37",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, is the previously moved knife visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.7355947393176936, 1.1441884114060064, -0.5006371582467342,
          ],
          frame_index: 9473,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The knife was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:03.0 video 1>; Point=(0.6055, 0.7616)",
          "<TIME 00:06:04.0 video 1>; Point=(0.5863, 0.7879)",
          "<TIME 00:06:05.0 video 1>; Point=(0.6027, 0.7648)",
          "<TIME 00:06:06.0 video 1>; Point=(0.6071, 0.7802)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 366.0,
          sampled_last_visible_time_in_clip_sec: 366.0,
          sampled_last_visible_time_token: "<TIME 00:06:06.0 video 1>",
          projected_pixel: [854.7474687762609, 1098.5050746357902],
          normalized_projected_pixel: [0.6070649636195035, 0.7801882632356464],
          camera_coordinates: [
            0.1343106158352474, 0.3371477838821648, 0.5049151693806531,
          ],
          frame_index: 9473,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 363.0,
              time_token: "<TIME 00:06:03.0 video 1>",
              projected_pixel: [852.5649256449942, 1072.3913600612168],
              normalized_projected_pixel: [
                0.6055148619637744, 0.7616415909525688,
              ],
              camera_coordinates: [
                0.13183296259933064, 0.3133351523830554, 0.506916643695472,
              ],
              frame_index: 9473,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 364.0,
              time_token: "<TIME 00:06:04.0 video 1>",
              projected_pixel: [825.5518906997781, 1109.3046852765267],
              normalized_projected_pixel: [
                0.5863294678265469, 0.7878584412475331,
              ],
              camera_coordinates: [
                0.10916943031945303, 0.34626660541441456, 0.5045597565161413,
              ],
              frame_index: 9473,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 365.0,
              time_token: "<TIME 00:06:05.0 video 1>",
              projected_pixel: [848.5468134600876, 1076.867552557711],
              normalized_projected_pixel: [
                0.6026610891051759, 0.7648207049415561,
              ],
              camera_coordinates: [
                0.1293120923280715, 0.3194250606503106, 0.51009798276393,
              ],
              frame_index: 9473,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 366.0,
              time_token: "<TIME 00:06:06.0 video 1>",
              projected_pixel: [854.7474687762609, 1098.5050746357902],
              normalized_projected_pixel: [
                0.6070649636195035, 0.7801882632356464,
              ],
              camera_coordinates: [
                0.1343106158352474, 0.3371477838821648, 0.5049151693806531,
              ],
              frame_index: 9473,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The knife was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:15.8 video 1>; Point=(0.7459, 0.7712)",
          "<TIME 00:05:16.0 video 1>; Point=(0.7523, 0.8192)",
          "<TIME 00:05:17.0 video 1>; Point=(0.7985, 0.8734)",
          "<TIME 00:05:18.0 video 1>; Point=(0.8019, 0.8704)",
        ],
        answer_metadata: {
          last_placement_time_sec: 315.76666666666665,
          last_placement_time_in_clip_sec: 315.76666666666665,
          last_placement_time_token: "<TIME 00:05:15.8 video 1>",
          projected_pixel: [1050.1653031162223, 1085.8186784096317],
          normalized_projected_pixel: [0.7458560391450443, 0.7711780386432043],
          camera_coordinates: [
            0.3096471005238972, 0.3341809291464888, 0.49748443407409404,
          ],
          frame_index: 9473,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 315.76666666666665,
              time_token: "<TIME 00:05:15.8 video 1>",
              projected_pixel: [1050.1653031162223, 1085.8186784096317],
              normalized_projected_pixel: [
                0.7458560391450443, 0.7711780386432043,
              ],
              camera_coordinates: [
                0.3096471005238972, 0.3341809291464888, 0.49748443407409404,
              ],
              frame_index: 9473,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 316.0,
              time_token: "<TIME 00:05:16.0 video 1>",
              projected_pixel: [1059.1939524194245, 1153.475499481314],
              normalized_projected_pixel: [
                0.7522684321160685, 0.8192297581543424,
              ],
              camera_coordinates: [
                0.30899941295045696, 0.3830532930339141, 0.4688504813145351,
              ],
              frame_index: 9480,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 317.0,
              time_token: "<TIME 00:05:17.0 video 1>",
              projected_pixel: [1124.317857550389, 1229.800102094457],
              normalized_projected_pixel: [
                0.798521205646583, 0.8734375725102678,
              ],
              camera_coordinates: [
                0.35698941092901215, 0.43889338953329304, 0.4182794655886424,
              ],
              frame_index: 9510,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 318.0,
              time_token: "<TIME 00:05:18.0 video 1>",
              projected_pixel: [1129.1417821007733, 1225.5637650358844],
              normalized_projected_pixel: [
                0.8019472884238447, 0.8704288103948042,
              ],
              camera_coordinates: [
                0.3651167267350728, 0.4402723250518632, 0.42315167927237485,
              ],
              frame_index: 9540,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, based on the last known position of the knife that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 315.76666666666665,
          correct_fixture: "counter",
          display_correct_answer: "counter area close to the microwave",
          raw_correct_fixture: "P01_counter.008",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, in which direction is the knife from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 372.0,
            camera_coordinates: [
              0.7355947393176936, 1.1441884114060064, -0.5006371582467342,
            ],
            world_coordinates: [
              -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.7355947393176936,
              z: -0.5006371582467342,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the black small part of the frother (marked in red) in the current frame, where is the knife relative to black small part of the frother from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "00bcef63aa22aa44",
            object_x_name: "knife",
            object_x_reference_time_sec: 372.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.6120011105226033, -2.5939671094834766, -0.5933379308638943,
            ],
            object_x_camera_coordinates: [
              0.7355947393176936, 1.1441884114060064, -0.5006371582467342,
            ],
            object_y_assoc_id: "3cd95e6ebb38b27e",
            object_y_name: "black small part of the frother",
            object_y_reference_time_sec: 372.0,
            object_y_world_coordinates: [
              -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
            ],
            object_y_projected_pixel: [685.3229145815192, 1325.8574018121724],
            object_y_normalized_projected_pixel: [
              0.486735024560738, 0.941660086514327,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the black small part of the frother (marked in red) in the current frame, how far is the knife from the black small part of the frother: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "00bcef63aa22aa44",
            object_x_name: "knife",
            object_x_reference_time_sec: 372.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "3cd95e6ebb38b27e",
            object_y_name: "black small part of the frother",
            object_y_pixel: [685.3229145815192, 1325.8574018121724],
            object_y_normalized_projected_pixel: [
              0.486735024560738, 0.941660086514327,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7404496675715881, 0.9102085261952721, -0.7002900809249231,
            ],
            distance_m: 1.3664375100264483,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_38: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "3bccd9fca84d4a0b",
    object_a_name: "right half of second orange",
    query_time_sec: 372.0,
    query_time_in_clip_sec: 372.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 372.0,
    clip_duration_sec: 372.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "3bccd9fca84d4a0b",
      object_name: "right half of second orange",
      query_time_sec: 372.0,
      oos_span_start_sec: 367.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 29.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 372.0,
      clip_duration_sec: 372.0,
      anchor_assoc_id: "c79d145ffded5b56",
      anchor_name: "green sponge",
      anchor_projected_pixel: [657.254783361499, 894.2069164932402],
      anchor_world_coordinates: [
        -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_38",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, is the previously moved right half of second orange visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.7012331041546584, 0.6248498795803532, -0.19465717967317353,
          ],
          frame_index: 7584,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The right half of second orange was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:03.0 video 1>; Point=(0.0766, 0.5717)",
          "<TIME 00:06:04.0 video 1>; Point=(0.0679, 0.5701)",
          "<TIME 00:06:05.0 video 1>; Point=(0.0818, 0.5604)",
          "<TIME 00:06:06.0 video 1>; Point=(0.0645, 0.7054)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 366.0,
          sampled_last_visible_time_in_clip_sec: 366.0,
          sampled_last_visible_time_token: "<TIME 00:06:06.0 video 1>",
          projected_pixel: [90.81275541362857, 993.1994304948596],
          normalized_projected_pixel: [0.06449769560627029, 0.7053973227946446],
          camera_coordinates: [
            -0.436729033123775, 0.20663620112643555, 0.35863657907732027,
          ],
          frame_index: 7584,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 363.0,
              time_token: "<TIME 00:06:03.0 video 1>",
              projected_pixel: [107.83162993541896, 805.0228302689164],
              normalized_projected_pixel: [
                0.07658496444276915, 0.5717491692250827,
              ],
              camera_coordinates: [
                -0.40070104650624083, 0.06722532722924113, 0.3642475755465393,
              ],
              frame_index: 7584,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 364.0,
              time_token: "<TIME 00:06:04.0 video 1>",
              projected_pixel: [95.62043475969347, 802.7063350403128],
              normalized_projected_pixel: [
                0.0679122405963732, 0.5701039311365858,
              ],
              camera_coordinates: [
                -0.4041294776189086, 0.06488714894024872, 0.3566854433939264,
              ],
              frame_index: 7584,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 365.0,
              time_token: "<TIME 00:06:05.0 video 1>",
              projected_pixel: [115.11891119434813, 789.0098358844048],
              normalized_projected_pixel: [
                0.08176059033689498, 0.5603763038951738,
              ],
              camera_coordinates: [
                -0.39444394070075317, 0.05615886171772755, 0.3655728767675075,
              ],
              frame_index: 7584,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 366.0,
              time_token: "<TIME 00:06:06.0 video 1>",
              projected_pixel: [90.81275541362857, 993.1994304948596],
              normalized_projected_pixel: [
                0.06449769560627029, 0.7053973227946446,
              ],
              camera_coordinates: [
                -0.436729033123775, 0.20663620112643555, 0.35863657907732027,
              ],
              frame_index: 7584,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The right half of second orange was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:12.8 video 1>; Point=(0.5523, 0.6963)",
          "<TIME 00:04:13.0 video 1>; Point=(0.4689, 0.7236)",
          "<TIME 00:04:15.0 video 1>; Point=(0.0504, 0.6782)",
        ],
        answer_metadata: {
          last_placement_time_sec: 252.8,
          last_placement_time_in_clip_sec: 252.8,
          last_placement_time_token: "<TIME 00:04:12.8 video 1>",
          projected_pixel: [777.6182550794591, 980.3424677755186],
          normalized_projected_pixel: [0.552285692528025, 0.6962659572269309],
          camera_coordinates: [
            0.057972279258963866, 0.201216953945908, 0.44641553940639755,
          ],
          frame_index: 7584,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 252.8,
              time_token: "<TIME 00:04:12.8 video 1>",
              projected_pixel: [777.6182550794591, 980.3424677755186],
              normalized_projected_pixel: [
                0.552285692528025, 0.6962659572269309,
              ],
              camera_coordinates: [
                0.057972279258963866, 0.201216953945908, 0.44641553940639755,
              ],
              frame_index: 7584,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 253.0,
              time_token: "<TIME 00:04:13.0 video 1>",
              projected_pixel: [660.2239369799232, 1018.788662831854],
              normalized_projected_pixel: [
                0.46890904615051365, 0.7235714934885327,
              ],
              camera_coordinates: [
                -0.027041706791121722, 0.22008150613018967, 0.4258062641335707,
              ],
              frame_index: 7590,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 255.0,
              time_token: "<TIME 00:04:15.0 video 1>",
              projected_pixel: [70.91555225802927, 954.9435650869385],
              normalized_projected_pixel: [
                0.050366159274168515, 0.6782269638401552,
              ],
              camera_coordinates: [
                -0.46523826182939976, 0.18477132429487497, 0.3683387028672158,
              ],
              frame_index: 7650,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, based on the last known position of the right half of second orange that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area close to the microwave",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 252.8,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the right half of second orange that was moved earlier. Using its last known position to infer its current location, in which direction is the right half of second orange from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 372.0,
            camera_coordinates: [
              0.7012331041546584, 0.6248498795803532, -0.19465717967317353,
            ],
            world_coordinates: [
              -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.7012331041546584,
              z: -0.19465717967317353,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the right half of second orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, where is the right half of second orange relative to green sponge from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "3bccd9fca84d4a0b",
            object_x_name: "right half of second orange",
            object_x_reference_time_sec: 372.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5259342664433024, -3.163612836217503, -0.41274661251865497,
            ],
            object_x_camera_coordinates: [
              0.7012331041546584, 0.6248498795803532, -0.19465717967317353,
            ],
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_reference_time_sec: 372.0,
            object_y_world_coordinates: [
              -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
            ],
            object_y_projected_pixel: [657.254783361499, 894.2069164932402],
            object_y_normalized_projected_pixel: [
              0.4668002722737919, 0.6350901395548582,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the right half of second orange that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, how far is the right half of second orange from the green sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "3bccd9fca84d4a0b",
            object_x_name: "right half of second orange",
            object_x_reference_time_sec: 372.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_pixel: [657.254783361499, 894.2069164932402],
            object_y_normalized_projected_pixel: [
              0.4668002722737919, 0.6350901395548582,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7361436776639878, 0.46686851038779764, -0.7099882039447203,
            ],
            distance_m: 1.1242584088620518,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_39: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "762824ba9d53a1cc",
    object_a_name: "plug of food processor",
    query_time_sec: 372.0,
    query_time_in_clip_sec: 372.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 372.0,
    clip_duration_sec: 372.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "762824ba9d53a1cc",
      object_name: "plug of food processor",
      query_time_sec: 372.0,
      oos_span_start_sec: 367.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 29.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 372.0,
      clip_duration_sec: 372.0,
      anchor_assoc_id: "52a8bee137386c66",
      anchor_name: "juicer part",
      anchor_projected_pixel: [205.92973931880556, 1158.6545026221054],
      anchor_world_coordinates: [
        -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_39",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, is the previously moved plug of food processor visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.9009987767493097, 0.4625379470545923, -0.24171534989144572,
          ],
          frame_index: 2174,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The plug of food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:03.0 video 1>; Point=(0.1181, 0.3339)",
          "<TIME 00:06:04.0 video 1>; Point=(0.1267, 0.336)",
          "<TIME 00:06:05.0 video 1>; Point=(0.1311, 0.3252)",
          "<TIME 00:06:06.0 video 1>; Point=(0.0562, 0.4746)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 366.0,
          sampled_last_visible_time_in_clip_sec: 366.0,
          sampled_last_visible_time_token: "<TIME 00:06:06.0 video 1>",
          projected_pixel: [79.08000993230598, 668.2753359854034],
          normalized_projected_pixel: [
            0.05616477978146732, 0.47462736930781496,
          ],
          camera_coordinates: [
            -0.5127869848120805, -0.031196639331779075, 0.43684582889017376,
          ],
          frame_index: 2174,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 363.0,
              time_token: "<TIME 00:06:03.0 video 1>",
              projected_pixel: [166.25337948602498, 470.1007491141122],
              normalized_projected_pixel: [
                0.11807768429405184, 0.33387837295036377,
              ],
              camera_coordinates: [
                -0.4191691445252208, -0.18587828362779724, 0.42799277378470113,
              ],
              frame_index: 2174,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 364.0,
              time_token: "<TIME 00:06:04.0 video 1>",
              projected_pixel: [178.44573044528067, 473.1323211076533],
              normalized_projected_pixel: [
                0.12673702446397775, 0.33603147805941286,
              ],
              camera_coordinates: [
                -0.41246666160528456, -0.18479995820756034, 0.4344851777062506,
              ],
              frame_index: 2174,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 365.0,
              time_token: "<TIME 00:06:05.0 video 1>",
              projected_pixel: [184.58047096014934, 457.8979491993398],
              normalized_projected_pixel: [
                0.13109408448874244, 0.32521161164725837,
              ],
              camera_coordinates: [
                -0.4064932258463769, -0.1963540854449468, 0.43308572750299623,
              ],
              frame_index: 2174,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 366.0,
              time_token: "<TIME 00:06:06.0 video 1>",
              projected_pixel: [79.08000993230598, 668.2753359854034],
              normalized_projected_pixel: [
                0.05616477978146732, 0.47462736930781496,
              ],
              camera_coordinates: [
                -0.5127869848120805, -0.031196639331779075, 0.43684582889017376,
              ],
              frame_index: 2174,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The plug of food processor was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:12.5 video 1>; Point=(0.2428, 0.6645)",
          "<TIME 00:01:13.0 video 1>; Point=(0.1257, 0.6416)",
          "<TIME 00:01:14.0 video 1>; Point=(0.0562, 0.6235)",
          "<TIME 00:01:15.0 video 1>; Point=(0.5668, 0.4188)",
        ],
        answer_metadata: {
          last_placement_time_sec: 72.46666666666667,
          last_placement_time_in_clip_sec: 72.46666666666667,
          last_placement_time_token: "<TIME 00:01:12.5 video 1>",
          projected_pixel: [341.8856141201835, 935.5761237413119],
          normalized_projected_pixel: [0.2428164873012667, 0.6644716787935454],
          camera_coordinates: [
            -0.21248369307273407, 0.1366903359950798, 0.3492763214011758,
          ],
          frame_index: 2174,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 72.46666666666667,
              time_token: "<TIME 00:01:12.5 video 1>",
              projected_pixel: [341.8856141201835, 935.5761237413119],
              normalized_projected_pixel: [
                0.2428164873012667, 0.6644716787935454,
              ],
              camera_coordinates: [
                -0.21248369307273407, 0.1366903359950798, 0.3492763214011758,
              ],
              frame_index: 2174,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 73.0,
              time_token: "<TIME 00:01:13.0 video 1>",
              projected_pixel: [177.00360886647059, 903.3301829259038],
              normalized_projected_pixel: [
                0.1257127903881183, 0.6415697321916931,
              ],
              camera_coordinates: [
                -0.3301469907668815, 0.12495844845823814, 0.34934757842759373,
              ],
              frame_index: 2190,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 74.0,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [79.09590364386247, 877.8198394133706],
              normalized_projected_pixel: [
                0.056176067928879594, 0.6234515904924507,
              ],
              camera_coordinates: [
                -0.42968930506383884, 0.11932745770317149, 0.35846410911481774,
              ],
              frame_index: 2220,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 75.0,
              time_token: "<TIME 00:01:15.0 video 1>",
              projected_pixel: [798.113862022788, 589.6060354202183],
              normalized_projected_pixel: [
                0.5668422315502756, 0.4187542865200414,
              ],
              camera_coordinates: [
                0.08803720372066737, -0.10349243175409595, 0.5438916001151086,
              ],
              frame_index: 2250,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, based on the last known position of the plug of food processor that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 72.46666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the plug of food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the plug of food processor from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 372.0,
            camera_coordinates: [
              0.9009987767493097, 0.4625379470545923, -0.24171534989144572,
            ],
            world_coordinates: [
              -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.9009987767493097,
              z: -0.24171534989144572,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the plug of food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the juicer part (marked in red) in the current frame, where is the plug of food processor relative to juicer part from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "762824ba9d53a1cc",
            object_x_name: "plug of food processor",
            object_x_reference_time_sec: 372.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
            ],
            object_x_camera_coordinates: [
              0.9009987767493097, 0.4625379470545923, -0.24171534989144572,
            ],
            object_y_assoc_id: "52a8bee137386c66",
            object_y_name: "juicer part",
            object_y_reference_time_sec: 372.0,
            object_y_world_coordinates: [
              -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
            ],
            object_y_projected_pixel: [205.92973931880556, 1158.6545026221054],
            object_y_normalized_projected_pixel: [
              0.1462569171298335, 0.8229080274304725,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the plug of food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the juicer part (marked in red) in the current frame, how far is the plug of food processor from the juicer part: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "762824ba9d53a1cc",
            object_x_name: "plug of food processor",
            object_x_reference_time_sec: 372.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "52a8bee137386c66",
            object_y_name: "juicer part",
            object_y_pixel: [205.92973931880556, 1158.6545026221054],
            object_y_normalized_projected_pixel: [
              0.1462569171298335, 0.8229080274304725,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.1995500666969399, 0.18789070368115368, -0.5456730518520483,
            ],
            distance_m: 1.3311582770504642,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_40: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "b3fb93f07305013c",
    object_a_name: "top lid of food processor",
    query_time_sec: 372.0,
    query_time_in_clip_sec: 372.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 372.0,
    clip_duration_sec: 372.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "b3fb93f07305013c",
      object_name: "top lid of food processor",
      query_time_sec: 372.0,
      oos_span_start_sec: 367.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 29.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_shelf.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 372.0,
      clip_duration_sec: 372.0,
      anchor_assoc_id: "3cd95e6ebb38b27e",
      anchor_name: "black small part of the frother",
      anchor_projected_pixel: [685.3229145815192, 1325.8574018121724],
      anchor_world_coordinates: [
        -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_40",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, is the previously moved top lid of food processor visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.0186115299932923, 1.0639374319590558, -0.6293075128797412,
          ],
          frame_index: 2247,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The top lid of food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:03.0 video 1>; Point=(0.6561, 0.5293)",
          "<TIME 00:06:04.0 video 1>; Point=(0.6423, 0.5595)",
          "<TIME 00:06:05.0 video 1>; Point=(0.6564, 0.5365)",
          "<TIME 00:06:06.0 video 1>; Point=(0.6098, 0.54)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 366.0,
          sampled_last_visible_time_in_clip_sec: 366.0,
          sampled_last_visible_time_token: "<TIME 00:06:06.0 video 1>",
          projected_pixel: [858.6374408878041, 760.2621366320243],
          normalized_projected_pixel: [0.60982772790327, 0.5399589038579719],
          camera_coordinates: [
            0.17166760302145967, 0.05790513925965124, 0.6589371957291206,
          ],
          frame_index: 2247,
          status: "in_view",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.89989262863823, -2.579600327131345, -0.4518923475824765,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 363.0,
              time_token: "<TIME 00:06:03.0 video 1>",
              projected_pixel: [923.8267781095174, 745.2768393269534],
              normalized_projected_pixel: [
                0.6561269730891458, 0.529315937021984,
              ],
              camera_coordinates: [
                0.2357528159172868, 0.0407982330122143, 0.6411517930942803,
              ],
              frame_index: 2247,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 364.0,
              time_token: "<TIME 00:06:04.0 video 1>",
              projected_pixel: [904.3730059587987, 787.829098892857],
              normalized_projected_pixel: [
                0.6423103735502832, 0.5595377122818587,
              ],
              camera_coordinates: [
                0.22107587693509778, 0.08762400281065497, 0.6584289704353266,
              ],
              frame_index: 2247,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 365.0,
              time_token: "<TIME 00:06:05.0 video 1>",
              projected_pixel: [924.2069963633169, 755.3479923234728],
              normalized_projected_pixel: [
                0.656397014462583, 0.536468744547921,
              ],
              camera_coordinates: [
                0.239349488901341, 0.05204215468388984, 0.649715089954358,
              ],
              frame_index: 2247,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 366.0,
              time_token: "<TIME 00:06:06.0 video 1>",
              projected_pixel: [858.6374408878041, 760.2621366320243],
              normalized_projected_pixel: [
                0.60982772790327, 0.5399589038579719,
              ],
              camera_coordinates: [
                0.17166760302145967, 0.05790513925965124, 0.6589371957291206,
              ],
              frame_index: 2247,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The top lid of food processor was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:14.9 video 1>; Point=(0.9453, 0.6799)",
          "<TIME 00:01:15.0 video 1>; Point=(1.0507, 0.7373)",
        ],
        answer_metadata: {
          last_placement_time_sec: 74.9,
          last_placement_time_in_clip_sec: 74.9,
          last_placement_time_token: "<TIME 00:01:14.9 video 1>",
          projected_pixel: [1331.0470678965562, 957.3069406349091],
          normalized_projected_pixel: [0.9453459289038041, 0.6799054976100206],
          camera_coordinates: [
            0.5372300186989118, 0.2134571911306642, 0.4209938630721335,
          ],
          frame_index: 2247,
          status: "last_past_track_end",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.89989262863823, -2.579600327131345, -0.4518923475824765,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 74.9,
              time_token: "<TIME 00:01:14.9 video 1>",
              projected_pixel: [1331.0470678965562, 957.3069406349091],
              normalized_projected_pixel: [
                0.9453459289038041, 0.6799054976100206,
              ],
              camera_coordinates: [
                0.5372300186989118, 0.2134571911306642, 0.4209938630721335,
              ],
              frame_index: 2247,
              status: "last_past_track_end",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 75.0,
              time_token: "<TIME 00:01:15.0 video 1>",
              projected_pixel: [1479.3324666724943, 1038.1304677320552],
              normalized_projected_pixel: [
                1.0506622632617146, 0.7373085708324255,
              ],
              camera_coordinates: [
                0.6528226078652741, 0.27805438688683615, 0.29654314665496306,
              ],
              frame_index: 2250,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.89989262863823, -2.579600327131345, -0.4518923475824765,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, based on the last known position of the top lid of food processor that was moved earlier, which fixture type is closest to it?",
        choices: ["oven", "counter", "fridgefreezer", "sink", "shelf"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 74.9,
          correct_fixture: "shelf",
          display_correct_answer: "shelf",
          raw_correct_fixture: "P01_shelf.005",
          fixture_type_pool: [
            "bin",
            "counter",
            "cupboard",
            "drawer",
            "fridgefreezer",
            "oven",
            "shelf",
            "sink",
            "storage",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the top lid of food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the top lid of food processor from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 372.0,
            camera_coordinates: [
              1.0186115299932923, 1.0639374319590558, -0.6293075128797412,
            ],
            world_coordinates: [
              -1.89989262863823, -2.579600327131345, -0.4518923475824765,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.0186115299932923,
              z: -0.6293075128797412,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the top lid of food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the black small part of the frother (marked in red) in the current frame, where is the top lid of food processor relative to black small part of the frother from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "b3fb93f07305013c",
            object_x_name: "top lid of food processor",
            object_x_reference_time_sec: 372.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.89989262863823, -2.579600327131345, -0.4518923475824765,
            ],
            object_x_camera_coordinates: [
              1.0186115299932923, 1.0639374319590558, -0.6293075128797412,
            ],
            object_y_assoc_id: "3cd95e6ebb38b27e",
            object_y_name: "black small part of the frother",
            object_y_reference_time_sec: 372.0,
            object_y_world_coordinates: [
              -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
            ],
            object_y_projected_pixel: [685.3229145815192, 1325.8574018121724],
            object_y_normalized_projected_pixel: [
              0.486735024560738, 0.941660086514327,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the top lid of food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the black small part of the frother (marked in red) in the current frame, how far is the top lid of food processor from the black small part of the frother: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "b3fb93f07305013c",
            object_x_name: "top lid of food processor",
            object_x_reference_time_sec: 372.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "3cd95e6ebb38b27e",
            object_y_name: "black small part of the frother",
            object_y_pixel: [685.3229145815192, 1325.8574018121724],
            object_y_normalized_projected_pixel: [
              0.486735024560738, 0.941660086514327,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.0234664582471868, 0.8299575467483216, -0.8289604355579301,
            ],
            distance_m: 1.5567557689894476,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_41: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e556b10f1cd07c2b",
    object_a_name: "food processor",
    query_time_sec: 372.0,
    query_time_in_clip_sec: 372.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 372.0,
    clip_duration_sec: 372.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e556b10f1cd07c2b",
      object_name: "food processor",
      query_time_sec: 372.0,
      oos_span_start_sec: 367.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 29.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 372.0,
      clip_duration_sec: 372.0,
      anchor_assoc_id: "52a8bee137386c66",
      anchor_name: "juicer part",
      anchor_projected_pixel: [205.92973931880556, 1158.6545026221054],
      anchor_world_coordinates: [
        -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_41",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, is the previously moved food processor visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.7269993496030869, 0.8140629117650757, -0.4397400009119061,
          ],
          frame_index: 2060,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:03.0 video 1>; Point=(0.3889, 0.6208)",
          "<TIME 00:06:04.0 video 1>; Point=(0.3825, 0.6364)",
          "<TIME 00:06:05.0 video 1>; Point=(0.3958, 0.6171)",
          "<TIME 00:06:06.0 video 1>; Point=(0.3504, 0.6976)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 366.0,
          sampled_last_visible_time_in_clip_sec: 366.0,
          sampled_last_visible_time_token: "<TIME 00:06:06.0 video 1>",
          projected_pixel: [493.3946423859281, 982.1865289229536],
          normalized_projected_pixel: [0.3504223312400057, 0.6975756597464159],
          camera_coordinates: [
            -0.12837265960144828, 0.17263153905421036, 0.3756979414172712,
          ],
          frame_index: 2060,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 363.0,
              time_token: "<TIME 00:06:03.0 video 1>",
              projected_pixel: [547.5531197389461, 874.1455596942887],
              normalized_projected_pixel: [
                0.38888715890550146, 0.6208420168283301,
              ],
              camera_coordinates: [
                -0.09209655005973483, 0.10223292083326907, 0.3725417531691666,
              ],
              frame_index: 2060,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 364.0,
              time_token: "<TIME 00:06:04.0 video 1>",
              projected_pixel: [538.5741146601416, 896.0552000757772],
              normalized_projected_pixel: [
                0.38251002461657785, 0.6364028409629099,
              ],
              camera_coordinates: [
                -0.09825853188410116, 0.11642463706264938, 0.37451553292566486,
              ],
              frame_index: 2060,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 365.0,
              time_token: "<TIME 00:06:05.0 video 1>",
              projected_pixel: [557.2895224962726, 868.8400799849298],
              normalized_projected_pixel: [
                0.3958022176820118, 0.6170739204438422,
              ],
              camera_coordinates: [
                -0.08706023686145103, 0.10001846659446345, 0.3766477985943435,
              ],
              frame_index: 2060,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 366.0,
              time_token: "<TIME 00:06:06.0 video 1>",
              projected_pixel: [493.3946423859281, 982.1865289229536],
              normalized_projected_pixel: [
                0.3504223312400057, 0.6975756597464159,
              ],
              camera_coordinates: [
                -0.12837265960144828, 0.17263153905421036, 0.3756979414172712,
              ],
              frame_index: 2060,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The food processor was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:08.7 video 1>; Point=(0.7416, 0.865)",
          "<TIME 00:01:09.0 video 1>; Point=(0.8062, 0.9032)",
          "<TIME 00:01:10.0 video 1>; Point=(0.8982, 0.8408)",
          "<TIME 00:01:11.0 video 1>; Point=(0.9279, 0.8519)",
        ],
        answer_metadata: {
          last_placement_time_sec: 68.66666666666667,
          last_placement_time_in_clip_sec: 68.66666666666667,
          last_placement_time_token: "<TIME 00:01:08.7 video 1>",
          projected_pixel: [1044.189487875134, 1217.9643145522832],
          normalized_projected_pixel: [0.7416118521840441, 0.8650314734036102],
          camera_coordinates: [
            0.19265137085946016, 0.28508845403999694, 0.2955463145813786,
          ],
          frame_index: 2060,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 68.66666666666667,
              time_token: "<TIME 00:01:08.7 video 1>",
              projected_pixel: [1044.189487875134, 1217.9643145522832],
              normalized_projected_pixel: [
                0.7416118521840441, 0.8650314734036102,
              ],
              camera_coordinates: [
                0.19265137085946016, 0.28508845403999694, 0.2955463145813786,
              ],
              frame_index: 2060,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 69.0,
              time_token: "<TIME 00:01:09.0 video 1>",
              projected_pixel: [1135.071094351414, 1271.7456072480213],
              normalized_projected_pixel: [
                0.8061584476927657, 0.9032284142386515,
              ],
              camera_coordinates: [
                0.24164947181983965, 0.3130088816923331, 0.25722550063769223,
              ],
              frame_index: 2070,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 70.0,
              time_token: "<TIME 00:01:10.0 video 1>",
              projected_pixel: [1264.6419801120576, 1183.8165571085642],
              normalized_projected_pixel: [
                0.8981832245114045, 0.8407788047646053,
              ],
              camera_coordinates: [
                0.380880718741178, 0.32143944399097796, 0.2906559547408305,
              ],
              frame_index: 2100,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 71.0,
              time_token: "<TIME 00:01:11.0 video 1>",
              projected_pixel: [1306.4590505987626, 1199.460469309038],
              normalized_projected_pixel: [
                0.9278828484366212, 0.8518895378615327,
              ],
              camera_coordinates: [
                0.4063739964896276, 0.3299031257887124, 0.2528334848503384,
              ],
              frame_index: 2130,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, based on the last known position of the food processor that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 68.66666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area close to the microwave",
          raw_correct_fixture: "P01_counter.008",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the food processor from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 372.0,
            camera_coordinates: [
              0.7269993496030869, 0.8140629117650757, -0.4397400009119061,
            ],
            world_coordinates: [
              -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.7269993496030869,
              z: -0.4397400009119061,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the juicer part (marked in red) in the current frame, where is the food processor relative to juicer part from your viewpoint?",
          choices: ["Front-right", "Back-left", "Front-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "e556b10f1cd07c2b",
            object_x_name: "food processor",
            object_x_reference_time_sec: 372.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5812603700916859, -2.858794851082062, -0.3891652976180681,
            ],
            object_x_camera_coordinates: [
              0.7269993496030869, 0.8140629117650757, -0.4397400009119061,
            ],
            object_y_assoc_id: "52a8bee137386c66",
            object_y_name: "juicer part",
            object_y_reference_time_sec: 372.0,
            object_y_world_coordinates: [
              -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
            ],
            object_y_projected_pixel: [205.92973931880556, 1158.6545026221054],
            object_y_normalized_projected_pixel: [
              0.1462569171298335, 0.8229080274304725,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the juicer part (marked in red) in the current frame, how far is the food processor from the juicer part: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "e556b10f1cd07c2b",
            object_x_name: "food processor",
            object_x_reference_time_sec: 372.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "52a8bee137386c66",
            object_y_name: "juicer part",
            object_y_pixel: [205.92973931880556, 1158.6545026221054],
            object_y_normalized_projected_pixel: [
              0.1462569171298335, 0.8229080274304725,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.0255506395507168, 0.5394156683916371, -0.7436977028725087,
            ],
            distance_m: 1.3768840368190516,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_42: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e5572d6184029f52",
    object_a_name: "food bin",
    query_time_sec: 372.0,
    query_time_in_clip_sec: 372.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 372.0,
    clip_duration_sec: 372.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e5572d6184029f52",
      object_name: "food bin",
      query_time_sec: 372.0,
      oos_span_start_sec: 367.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 29.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 372.0,
      clip_duration_sec: 372.0,
      anchor_assoc_id: "c79d145ffded5b56",
      anchor_name: "green sponge",
      anchor_projected_pixel: [657.254783361499, 894.2069164932402],
      anchor_world_coordinates: [
        -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_42",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, is the previously moved food bin visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.7413584874471644, 0.6128771162679743, -0.13335239325183634,
          ],
          frame_index: 10124,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The food bin was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:03.0 video 1>; Point=(0.0779, 0.553)",
          "<TIME 00:06:04.0 video 1>; Point=(0.0683, 0.5516)",
          "<TIME 00:06:05.0 video 1>; Point=(0.0822, 0.5423)",
          "<TIME 00:06:06.0 video 1>; Point=(0.0637, 0.6866)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 366.0,
          sampled_last_visible_time_in_clip_sec: 366.0,
          sampled_last_visible_time_token: "<TIME 00:06:06.0 video 1>",
          projected_pixel: [89.72297511606666, 966.7133196356208],
          normalized_projected_pixel: [0.06372370391766098, 0.6865861645139352],
          camera_coordinates: [
            -0.49173563197335657, 0.21082098363372936, 0.40831989581682904,
          ],
          frame_index: 10124,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5602993131913736, -3.22064070802955, -0.4455876795302811,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 363.0,
              time_token: "<TIME 00:06:03.0 video 1>",
              projected_pixel: [109.71047852297602, 778.6201090796786],
              normalized_projected_pixel: [
                0.07791937395097728, 0.5529972365622717,
              ],
              camera_coordinates: [
                -0.45347137703618756, 0.055969085158610765, 0.4152403153638713,
              ],
              frame_index: 10124,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5602993131913736, -3.22064070802955, -0.4455876795302811,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 364.0,
              time_token: "<TIME 00:06:04.0 video 1>",
              projected_pixel: [96.21322638529671, 776.6333357684836],
              normalized_projected_pixel: [
                0.06833325737592096, 0.5515861759719344,
              ],
              camera_coordinates: [
                -0.4582971621556773, 0.053801413080620364, 0.40622975382657023,
              ],
              frame_index: 10124,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5602993131913736, -3.22064070802955, -0.4455876795302811,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 365.0,
              time_token: "<TIME 00:06:05.0 video 1>",
              projected_pixel: [115.7161546579855, 763.5374708033544],
              normalized_projected_pixel: [
                0.08218476893322833, 0.542285135513746,
              ],
              camera_coordinates: [
                -0.4474461499631608, 0.044199259938973334, 0.41616342946727625,
              ],
              frame_index: 10124,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5602993131913736, -3.22064070802955, -0.4455876795302811,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 366.0,
              time_token: "<TIME 00:06:06.0 video 1>",
              projected_pixel: [89.72297511606666, 966.7133196356208],
              normalized_projected_pixel: [
                0.06372370391766098, 0.6865861645139352,
              ],
              camera_coordinates: [
                -0.49173563197335657, 0.21082098363372936, 0.40831989581682904,
              ],
              frame_index: 10124,
              status: "in_view",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5602993131913736, -3.22064070802955, -0.4455876795302811,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The food bin was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:37.5 video 1>; Point=(0.7571, 0.8731)",
        ],
        answer_metadata: {
          last_placement_time_sec: 337.46666666666664,
          last_placement_time_in_clip_sec: 337.46666666666664,
          last_placement_time_token: "<TIME 00:05:37.5 video 1>",
          projected_pixel: [1065.9609451479505, 1229.3461312735662],
          normalized_projected_pixel: [0.7570745349062148, 0.8731151500522487],
          camera_coordinates: [
            0.271386609074444, 0.386231977407426, 0.38404086155163597,
          ],
          frame_index: 10124,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5602993131913736, -3.22064070802955, -0.4455876795302811,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 337.46666666666664,
              time_token: "<TIME 00:05:37.5 video 1>",
              projected_pixel: [1065.9609451479505, 1229.3461312735662],
              normalized_projected_pixel: [
                0.7570745349062148, 0.8731151500522487,
              ],
              camera_coordinates: [
                0.271386609074444, 0.386231977407426, 0.38404086155163597,
              ],
              frame_index: 10124,
              status: "last_past_track_end",
              fixture: "P01_counter.007",
              world_coordinates: [
                -1.5602993131913736, -3.22064070802955, -0.4455876795302811,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, based on the last known position of the food bin that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area below the boiler",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 337.46666666666664,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.007",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the food bin that was moved earlier. Using its last known position to infer its current location, in which direction is the food bin from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 372.0,
            camera_coordinates: [
              0.7413584874471644, 0.6128771162679743, -0.13335239325183634,
            ],
            world_coordinates: [
              -1.5602993131913736, -3.22064070802955, -0.4455876795302811,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.7413584874471644,
              z: -0.13335239325183634,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the food bin that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, where is the food bin relative to green sponge from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "e5572d6184029f52",
            object_x_name: "food bin",
            object_x_reference_time_sec: 372.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5602993131913736, -3.22064070802955, -0.4455876795302811,
            ],
            object_x_camera_coordinates: [
              0.7413584874471644, 0.6128771162679743, -0.13335239325183634,
            ],
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_reference_time_sec: 372.0,
            object_y_world_coordinates: [
              -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
            ],
            object_y_projected_pixel: [657.254783361499, 894.2069164932402],
            object_y_normalized_projected_pixel: [
              0.4668002722737919, 0.6350901395548582,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the food bin that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, how far is the food bin from the green sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "e5572d6184029f52",
            object_x_name: "food bin",
            object_x_reference_time_sec: 372.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_pixel: [657.254783361499, 894.2069164932402],
            object_y_normalized_projected_pixel: [
              0.4668002722737919, 0.6350901395548582,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7762690609564937, 0.4548957470754187, -0.6486834175233831,
            ],
            distance_m: 1.1091951910621483,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_43: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e5dc98cfa1bdfbd0",
    object_a_name: "blue chopping board",
    query_time_sec: 372.0,
    query_time_in_clip_sec: 372.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 372.0,
    clip_duration_sec: 372.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e5dc98cfa1bdfbd0",
      object_name: "blue chopping board",
      query_time_sec: 372.0,
      oos_span_start_sec: 367.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 29.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 372.0,
      clip_duration_sec: 372.0,
      anchor_assoc_id: "52a8bee137386c66",
      anchor_name: "juicer part",
      anchor_projected_pixel: [205.92973931880556, 1158.6545026221054],
      anchor_world_coordinates: [
        -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_43",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, is the previously moved blue chopping board visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.7381259797016637, 1.1795950472354897, -0.46685545086622104,
          ],
          frame_index: 1970,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The blue chopping board was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:03.0 video 1>; Point=(0.5911, 0.7734)",
          "<TIME 00:06:04.0 video 1>; Point=(0.571, 0.7998)",
          "<TIME 00:06:05.0 video 1>; Point=(0.5875, 0.7767)",
          "<TIME 00:06:06.0 video 1>; Point=(0.5987, 0.7939)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 366.0,
          sampled_last_visible_time_in_clip_sec: 366.0,
          sampled_last_visible_time_token: "<TIME 00:06:06.0 video 1>",
          projected_pixel: [842.9411220490814, 1117.8178299252768],
          normalized_projected_pixel: [0.5986797741825862, 0.7939047087537477],
          camera_coordinates: [
            0.13208313543725891, 0.3762612663077012, 0.534350091086164,
          ],
          frame_index: 1970,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 363.0,
              time_token: "<TIME 00:06:03.0 video 1>",
              projected_pixel: [832.240053984116, 1088.9238530790574],
              normalized_projected_pixel: [
                0.5910795837955369, 0.7733834183800123,
              ],
              camera_coordinates: [
                0.12200651861324419, 0.34910502785074127, 0.5389353538475108,
              ],
              frame_index: 1970,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 364.0,
              time_token: "<TIME 00:06:04.0 video 1>",
              projected_pixel: [803.9408970547225, 1126.1446961151396],
              normalized_projected_pixel: [
                0.5709807507490927, 0.799818676218139,
              ],
              camera_coordinates: [
                0.09627067159033098, 0.3832360534960697, 0.5340236789293462,
              ],
              frame_index: 1970,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 365.0,
              time_token: "<TIME 00:06:05.0 video 1>",
              projected_pixel: [827.2562009549345, 1093.6399799470628],
              normalized_projected_pixel: [
                0.5875399154509477, 0.7767329403033116,
              ],
              camera_coordinates: [
                0.11812313868130175, 0.3553913130005042, 0.5414424687281045,
              ],
              frame_index: 1970,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 366.0,
              time_token: "<TIME 00:06:06.0 video 1>",
              projected_pixel: [842.9411220490814, 1117.8178299252768],
              normalized_projected_pixel: [
                0.5986797741825862, 0.7939047087537477,
              ],
              camera_coordinates: [
                0.13208313543725891, 0.3762612663077012, 0.534350091086164,
              ],
              frame_index: 1970,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The blue chopping board was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:05.7 video 1>; Point=(0.576, 0.9247)",
          "<TIME 00:01:06.0 video 1>; Point=(0.5352, 1.0012)",
          "<TIME 00:01:07.0 video 1>; Point=(0.4853, 1.3593)",
          "<TIME 00:01:08.0 video 1>; Point=(0.8372, 0.915)",
        ],
        answer_metadata: {
          last_placement_time_sec: 65.66666666666667,
          last_placement_time_in_clip_sec: 65.66666666666667,
          last_placement_time_token: "<TIME 00:01:05.7 video 1>",
          projected_pixel: [810.938747960512, 1302.0192689008973],
          normalized_projected_pixel: [0.5759508153128636, 0.9247295943898418],
          camera_coordinates: [
            0.09163137843732949, 0.48446076216690964, 0.43489934615314885,
          ],
          frame_index: 1970,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 65.66666666666667,
              time_token: "<TIME 00:01:05.7 video 1>",
              projected_pixel: [810.938747960512, 1302.0192689008973],
              normalized_projected_pixel: [
                0.5759508153128636, 0.9247295943898418,
              ],
              camera_coordinates: [
                0.09163137843732949, 0.48446076216690964, 0.43489934615314885,
              ],
              frame_index: 1970,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 66.0,
              time_token: "<TIME 00:01:06.0 video 1>",
              projected_pixel: [753.5137849014922, 1409.712764371585],
              normalized_projected_pixel: [
                0.5351660404129915, 1.0012164519684552,
              ],
              camera_coordinates: [
                0.0435111698642312, 0.5529511254462421, 0.37143379641427,
              ],
              frame_index: 1980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 67.0,
              time_token: "<TIME 00:01:07.0 video 1>",
              projected_pixel: [683.3341055731372, 1913.8423241967907],
              normalized_projected_pixel: [
                0.48532251816273947, 1.3592630143443116,
              ],
              camera_coordinates: [
                -0.00880541340027996, 0.634855007886616, 0.20462214881182472,
              ],
              frame_index: 2010,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 68.0,
              time_token: "<TIME 00:01:08.0 video 1>",
              projected_pixel: [1178.7455198942537, 1288.3744020280433],
              normalized_projected_pixel: [
                0.837177215833987, 0.915038637804008,
              ],
              camera_coordinates: [
                0.444249636244735, 0.5385973765012425, 0.3799333797303439,
              ],
              frame_index: 2040,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:12.0 video 1>, based on the last known position of the blue chopping board that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 65.66666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area close to the microwave",
          raw_correct_fixture: "P01_counter.008",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the blue chopping board that was moved earlier. Using its last known position to infer its current location, in which direction is the blue chopping board from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 372.0,
            camera_coordinates: [
              0.7381259797016637, 1.1795950472354897, -0.46685545086622104,
            ],
            world_coordinates: [
              -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.7381259797016637,
              z: -0.46685545086622104,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the blue chopping board that was moved earlier. Using its last known position to infer its current location, and using the current position of the juicer part (marked in red) in the current frame, where is the blue chopping board relative to juicer part from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "e5dc98cfa1bdfbd0",
            object_x_name: "blue chopping board",
            object_x_reference_time_sec: 372.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.6136463211640544, -2.5954478581952363, -0.6422903716343358,
            ],
            object_x_camera_coordinates: [
              0.7381259797016637, 1.1795950472354897, -0.46685545086622104,
            ],
            object_y_assoc_id: "52a8bee137386c66",
            object_y_name: "juicer part",
            object_y_reference_time_sec: 372.0,
            object_y_world_coordinates: [
              -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
            ],
            object_y_projected_pixel: [205.92973931880556, 1158.6545026221054],
            object_y_normalized_projected_pixel: [
              0.1462569171298335, 0.8229080274304725,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:12.0 video 1>, consider the blue chopping board that was moved earlier. Using its last known position to infer its current location, and using the current position of the juicer part (marked in red) in the current frame, how far is the blue chopping board from the juicer part: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "e5dc98cfa1bdfbd0",
            object_x_name: "blue chopping board",
            object_x_reference_time_sec: 372.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "52a8bee137386c66",
            object_y_name: "juicer part",
            object_y_pixel: [205.92973931880556, 1158.6545026221054],
            object_y_normalized_projected_pixel: [
              0.1462569171298335, 0.8229080274304725,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.0366772696492936, 0.9049478038620511, -0.7708131528268236,
            ],
            distance_m: 1.5772708092439585,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_44: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e44a21e6e04d424c",
    object_a_name: "mug",
    query_time_sec: 374.0,
    query_time_in_clip_sec: 374.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 374.0,
    clip_duration_sec: 374.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e44a21e6e04d424c",
      object_name: "mug",
      query_time_sec: 374.0,
      oos_span_start_sec: 369.0,
      oos_span_end_sec: 390.0,
      oos_duration_sec: 21.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 374.0,
      clip_duration_sec: 374.0,
      anchor_assoc_id: "52a8bee137386c66",
      anchor_name: "juicer part",
      anchor_projected_pixel: [340.25292881001354, 1079.0751202151928],
      anchor_world_coordinates: [
        -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_44",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:14.0 video 1>, is the previously moved mug visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.056682396555604, 1.5242143721934733, -1.100469183233794,
          ],
          frame_index: 4542,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The mug was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:07.0 video 1>; Point=(0.571, 0.5669)",
          "<TIME 00:06:08.0 video 1>; Point=(0.3753, 0.6696)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 368.0,
          sampled_last_visible_time_in_clip_sec: 368.0,
          sampled_last_visible_time_token: "<TIME 00:06:08.0 video 1>",
          projected_pixel: [528.4690317900788, 942.7268817229609],
          normalized_projected_pixel: [0.37533311916909007, 0.6695503421327847],
          camera_coordinates: [
            -0.15327155434765927, 0.21293663881221958, 0.5466076852764377,
          ],
          frame_index: 4542,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 367.0,
              time_token: "<TIME 00:06:07.0 video 1>",
              projected_pixel: [804.01804293673, 798.2013649696177],
              normalized_projected_pixel: [
                0.571035541858473, 0.566904378529558,
              ],
              camera_coordinates: [
                0.17626180234629044, 0.15388753167396452, 1.0279101972585771,
              ],
              frame_index: 4542,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 368.0,
              time_token: "<TIME 00:06:08.0 video 1>",
              projected_pixel: [528.4690317900788, 942.7268817229609],
              normalized_projected_pixel: [
                0.37533311916909007, 0.6695503421327847,
              ],
              camera_coordinates: [
                -0.15327155434765927, 0.21293663881221958, 0.5466076852764377,
              ],
              frame_index: 4542,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The mug was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:31.4 video 1>; Point=(0.617, 0.7601)",
          "<TIME 00:02:32.0 video 1>; Point=(3.382, 2.7167)",
        ],
        answer_metadata: {
          last_placement_time_sec: 151.4,
          last_placement_time_in_clip_sec: 151.4,
          last_placement_time_token: "<TIME 00:02:31.4 video 1>",
          projected_pixel: [868.791544882566, 1070.2205458765811],
          normalized_projected_pixel: [0.6170394494904587, 0.7600998195146172],
          camera_coordinates: [
            0.10851837599360303, 0.23195471287369096, 0.3769631928642932,
          ],
          frame_index: 4542,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 151.4,
              time_token: "<TIME 00:02:31.4 video 1>",
              projected_pixel: [868.791544882566, 1070.2205458765811],
              normalized_projected_pixel: [
                0.6170394494904587, 0.7600998195146172,
              ],
              camera_coordinates: [
                0.10851837599360303, 0.23195471287369096, 0.3769631928642932,
              ],
              frame_index: 4542,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 152.0,
              time_token: "<TIME 00:02:32.0 video 1>",
              projected_pixel: [4761.883494768003, 3825.110328279823],
              normalized_projected_pixel: [
                3.3820195275340934, 2.7166976763351016,
              ],
              camera_coordinates: [
                0.39260690679539334, 0.4369142043350476, 0.10519210595510842,
              ],
              frame_index: 4560,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:14.0 video 1>, based on the last known position of the mug that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 151.4,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the fridge and the hob",
          raw_correct_fixture: "P01_counter.001",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:14.0 video 1>, consider the mug that was moved earlier. Using its last known position to infer its current location, in which direction is the mug from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 374.0,
            camera_coordinates: [
              -1.056682396555604, 1.5242143721934733, -1.100469183233794,
            ],
            world_coordinates: [
              -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.056682396555604,
              z: -1.100469183233794,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:14.0 video 1>, consider the mug that was moved earlier. Using its last known position to infer its current location, and using the current position of the juicer part (marked in red) in the current frame, where is the mug relative to juicer part from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "e44a21e6e04d424c",
            object_x_name: "mug",
            object_x_reference_time_sec: 374.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
            ],
            object_x_camera_coordinates: [
              -1.056682396555604, 1.5242143721934733, -1.100469183233794,
            ],
            object_y_assoc_id: "52a8bee137386c66",
            object_y_name: "juicer part",
            object_y_reference_time_sec: 374.0,
            object_y_world_coordinates: [
              -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
            ],
            object_y_projected_pixel: [340.25292881001354, 1079.0751202151928],
            object_y_normalized_projected_pixel: [
              0.2416569096662028, 0.7663885796982903,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:14.0 video 1>, consider the mug that was moved earlier. Using its last known position to infer its current location, and using the current position of the juicer part (marked in red) in the current frame, how far is the mug from the juicer part: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "e44a21e6e04d424c",
            object_x_name: "mug",
            object_x_reference_time_sec: 374.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "52a8bee137386c66",
            object_y_name: "juicer part",
            object_y_pixel: [340.25292881001354, 1079.0751202151928],
            object_y_normalized_projected_pixel: [
              0.2416569096662028, 0.7663885796982903,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.8214504570367274, 1.279181133931517, -1.4709371007949603,
            ],
            distance_m: 2.11535840492037,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_45: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "c60c10f7d1acb901",
    object_a_name: "lid of milk frother",
    query_time_sec: 374.0,
    query_time_in_clip_sec: 374.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 374.0,
    clip_duration_sec: 374.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "c60c10f7d1acb901",
      object_name: "lid of milk frother",
      query_time_sec: 374.0,
      oos_span_start_sec: 369.0,
      oos_span_end_sec: 390.0,
      oos_duration_sec: 21.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 374.0,
      clip_duration_sec: 374.0,
      anchor_assoc_id: "52a8bee137386c66",
      anchor_name: "juicer part",
      anchor_projected_pixel: [340.25292881001354, 1079.0751202151928],
      anchor_world_coordinates: [
        -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_45",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:14.0 video 1>, is the previously moved lid of milk frother visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.1425831855629065, 1.332694430912268, -1.0018231338488144,
          ],
          frame_index: 5396,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid of milk frother was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:07.0 video 1>; Point=(0.6723, 0.546)",
          "<TIME 00:06:08.0 video 1>; Point=(0.5297, 0.5714)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 368.0,
          sampled_last_visible_time_in_clip_sec: 368.0,
          sampled_last_visible_time_token: "<TIME 00:06:08.0 video 1>",
          projected_pixel: [745.7740355045072, 804.5254981597294],
          normalized_projected_pixel: [0.5296690593071784, 0.5713959503975351],
          camera_coordinates: [
            0.042502556655611645, 0.08888836964597724, 0.5552332807594047,
          ],
          frame_index: 5396,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.358569128705764, -1.703000926376473, -0.3998278790577944,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 367.0,
              time_token: "<TIME 00:06:07.0 video 1>",
              projected_pixel: [946.626724366545, 768.7554296583329],
              normalized_projected_pixel: [
                0.672320116737603, 0.5459910722005206,
              ],
              camera_coordinates: [
                0.3757248682193957, 0.09463304895692515, 0.9254735429295,
              ],
              frame_index: 5396,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 368.0,
              time_token: "<TIME 00:06:08.0 video 1>",
              projected_pixel: [745.7740355045072, 804.5254981597294],
              normalized_projected_pixel: [
                0.5296690593071784, 0.5713959503975351,
              ],
              camera_coordinates: [
                0.042502556655611645, 0.08888836964597724, 0.5552332807594047,
              ],
              frame_index: 5396,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The lid of milk frother was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:59.9 video 1>; Point=(0.527, 0.5992)",
          "<TIME 00:03:00.0 video 1>; Point=(0.4053, 0.582)",
          "<TIME 00:03:01.0 video 1>; Point=(-0.3882, 0.7409)",
          "<TIME 00:03:02.0 video 1>; Point=(-0.8083, 0.9973)",
        ],
        answer_metadata: {
          last_placement_time_sec: 179.86666666666667,
          last_placement_time_in_clip_sec: 179.86666666666667,
          last_placement_time_token: "<TIME 00:02:59.9 video 1>",
          projected_pixel: [741.9679871775925, 843.7168510525114],
          normalized_projected_pixel: [0.5269658999840856, 0.5992307180770677],
          camera_coordinates: [
            0.03632677259438277, 0.11562772116993558, 0.5163359529849898,
          ],
          frame_index: 5396,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.358569128705764, -1.703000926376473, -0.3998278790577944,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 179.86666666666667,
              time_token: "<TIME 00:02:59.9 video 1>",
              projected_pixel: [741.9679871775925, 843.7168510525114],
              normalized_projected_pixel: [
                0.5269658999840856, 0.5992307180770677,
              ],
              camera_coordinates: [
                0.03632677259438277, 0.11562772116993558, 0.5163359529849898,
              ],
              frame_index: 5396,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 180.0,
              time_token: "<TIME 00:03:00.0 video 1>",
              projected_pixel: [570.6797745649238, 819.5119458465766],
              normalized_projected_pixel: [
                0.40531233988986065, 0.5820397342660345,
              ],
              camera_coordinates: [
                -0.10231666274246809, 0.0903828994709831, 0.48957123730206037,
              ],
              frame_index: 5400,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 181.0,
              time_token: "<TIME 00:03:01.0 video 1>",
              projected_pixel: [-546.5613638689877, 1043.2049541895758],
              normalized_projected_pixel: [
                -0.38818278683876967, 0.7409126095096419,
              ],
              camera_coordinates: [
                -0.6354488245726739, 0.17322624185280053, 0.20500035845948933,
              ],
              frame_index: 5430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 182.0,
              time_token: "<TIME 00:03:02.0 video 1>",
              projected_pixel: [-1138.05368123466, 1404.1307626154216],
              normalized_projected_pixel: [
                -0.8082767622405256, 0.9972519620848165,
              ],
              camera_coordinates: [
                -0.688065947807919, 0.2625707952187415, 0.1893084244421523,
              ],
              frame_index: 5460,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.358569128705764, -1.703000926376473, -0.3998278790577944,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:14.0 video 1>, based on the last known position of the lid of milk frother that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area next to the window",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 179.86666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the fridge and the hob",
          raw_correct_fixture: "P01_counter.001",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:14.0 video 1>, consider the lid of milk frother that was moved earlier. Using its last known position to infer its current location, in which direction is the lid of milk frother from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 374.0,
            camera_coordinates: [
              -1.1425831855629065, 1.332694430912268, -1.0018231338488144,
            ],
            world_coordinates: [
              -0.358569128705764, -1.703000926376473, -0.3998278790577944,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.1425831855629065,
              z: -1.0018231338488144,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:14.0 video 1>, consider the lid of milk frother that was moved earlier. Using its last known position to infer its current location, and using the current position of the juicer part (marked in red) in the current frame, where is the lid of milk frother relative to juicer part from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "c60c10f7d1acb901",
            object_x_name: "lid of milk frother",
            object_x_reference_time_sec: 374.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.358569128705764, -1.703000926376473, -0.3998278790577944,
            ],
            object_x_camera_coordinates: [
              -1.1425831855629065, 1.332694430912268, -1.0018231338488144,
            ],
            object_y_assoc_id: "52a8bee137386c66",
            object_y_name: "juicer part",
            object_y_reference_time_sec: 374.0,
            object_y_world_coordinates: [
              -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
            ],
            object_y_projected_pixel: [340.25292881001354, 1079.0751202151928],
            object_y_normalized_projected_pixel: [
              0.2416569096662028, 0.7663885796982903,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:14.0 video 1>, consider the lid of milk frother that was moved earlier. Using its last known position to infer its current location, and using the current position of the juicer part (marked in red) in the current frame, how far is the lid of milk frother from the juicer part: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "c60c10f7d1acb901",
            object_x_name: "lid of milk frother",
            object_x_reference_time_sec: 374.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "52a8bee137386c66",
            object_y_name: "juicer part",
            object_y_pixel: [340.25292881001354, 1079.0751202151928],
            object_y_normalized_projected_pixel: [
              0.2416569096662028, 0.7663885796982903,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.9073512460440298, 1.0876611926503115, -1.3722910514099806,
            ],
            distance_m: 1.972175419042399,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_46: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "cc058509b79d0313",
    object_a_name: "milk frother base",
    query_time_sec: 374.0,
    query_time_in_clip_sec: 374.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 374.0,
    clip_duration_sec: 374.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "cc058509b79d0313",
      object_name: "milk frother base",
      query_time_sec: 374.0,
      oos_span_start_sec: 369.0,
      oos_span_end_sec: 390.0,
      oos_duration_sec: 21.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 374.0,
      clip_duration_sec: 374.0,
      anchor_assoc_id: "c79d145ffded5b56",
      anchor_name: "green sponge",
      anchor_projected_pixel: [809.6075594030576, 935.0699180956707],
      anchor_world_coordinates: [
        -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_46",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:14.0 video 1>, is the previously moved milk frother base visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.1060472268515766, 1.3907484533645023, -0.9409022349100395,
          ],
          frame_index: 5343,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The milk frother base was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:07.0 video 1>; Point=(0.6653, 0.5883)",
          "<TIME 00:06:08.0 video 1>; Point=(0.5387, 0.6366)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 368.0,
          sampled_last_visible_time_in_clip_sec: 368.0,
          sampled_last_visible_time_token: "<TIME 00:06:08.0 video 1>",
          projected_pixel: [758.5301890984927, 896.3818745771331],
          normalized_projected_pixel: [0.538728827484725, 0.6366348541030775],
          camera_coordinates: [
            0.0559177713309702, 0.17780825392519062, 0.5733933447552808,
          ],
          frame_index: 5343,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 367.0,
              time_token: "<TIME 00:06:07.0 video 1>",
              projected_pixel: [936.7612518531663, 828.3450527189067],
              normalized_projected_pixel: [
                0.6653133891002602, 0.5883132476696781,
              ],
              camera_coordinates: [
                0.3613755396665484, 0.18524526684821252, 0.9256299662438021,
              ],
              frame_index: 5343,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 368.0,
              time_token: "<TIME 00:06:08.0 video 1>",
              projected_pixel: [758.5301890984927, 896.3818745771331],
              normalized_projected_pixel: [
                0.538728827484725, 0.6366348541030775,
              ],
              camera_coordinates: [
                0.0559177713309702, 0.17780825392519062, 0.5733933447552808,
              ],
              frame_index: 5343,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The milk frother base was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:58.1 video 1>; Point=(0.6151, 0.6755)",
          "<TIME 00:02:59.0 video 1>; Point=(0.5949, 0.6894)",
          "<TIME 00:03:00.0 video 1>; Point=(0.4234, 0.6495)",
          "<TIME 00:03:01.0 video 1>; Point=(-0.069, 0.7198)",
        ],
        answer_metadata: {
          last_placement_time_sec: 178.1,
          last_placement_time_in_clip_sec: 178.1,
          last_placement_time_token: "<TIME 00:02:58.1 video 1>",
          projected_pixel: [866.086453980851, 951.0652939886792],
          normalized_projected_pixel: [0.6151182201568545, 0.6754725099351414],
          camera_coordinates: [
            0.1578517051626399, 0.23076138599129448, 0.572306223421392,
          ],
          frame_index: 5343,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 178.1,
              time_token: "<TIME 00:02:58.1 video 1>",
              projected_pixel: [866.086453980851, 951.0652939886792],
              normalized_projected_pixel: [
                0.6151182201568545, 0.6754725099351414,
              ],
              camera_coordinates: [
                0.1578517051626399, 0.23076138599129448, 0.572306223421392,
              ],
              frame_index: 5343,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 179.0,
              time_token: "<TIME 00:02:59.0 video 1>",
              projected_pixel: [837.623798702625, 970.6197820670646],
              normalized_projected_pixel: [
                0.5949032661240234, 0.6893606406726311,
              ],
              camera_coordinates: [
                0.1208588037894398, 0.22986861735413677, 0.527679888301938,
              ],
              frame_index: 5370,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 180.0,
              time_token: "<TIME 00:03:00.0 video 1>",
              projected_pixel: [596.1959304177016, 914.4808364978855],
              normalized_projected_pixel: [
                0.423434609671663, 0.6494892304672483,
              ],
              camera_coordinates: [
                -0.08683803858661876, 0.17629711473539555, 0.5177787104092191,
              ],
              frame_index: 5400,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 181.0,
              time_token: "<TIME 00:03:01.0 video 1>",
              projected_pixel: [-97.18977097081245, 1013.4547481379618],
              normalized_projected_pixel: [
                -0.06902682597358839, 0.7197832018025297,
              ],
              camera_coordinates: [
                -0.5986744889565334, 0.2318774728967276, 0.26520154670666823,
              ],
              frame_index: 5430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:14.0 video 1>, based on the last known position of the milk frother base that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 178.1,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the fridge and the hob",
          raw_correct_fixture: "P01_counter.001",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:14.0 video 1>, consider the milk frother base that was moved earlier. Using its last known position to infer its current location, in which direction is the milk frother base from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 374.0,
            camera_coordinates: [
              -1.1060472268515766, 1.3907484533645023, -0.9409022349100395,
            ],
            world_coordinates: [
              -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.1060472268515766,
              z: -0.9409022349100395,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:14.0 video 1>, consider the milk frother base that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, where is the milk frother base relative to green sponge from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "cc058509b79d0313",
            object_x_name: "milk frother base",
            object_x_reference_time_sec: 374.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
            ],
            object_x_camera_coordinates: [
              -1.1060472268515766, 1.3907484533645023, -0.9409022349100395,
            ],
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_reference_time_sec: 374.0,
            object_y_world_coordinates: [
              -0.7114760541414951, -3.9295056816626532, -0.5311651060368037,
            ],
            object_y_projected_pixel: [809.6075594030576, 935.0699180956707],
            object_y_normalized_projected_pixel: [
              0.575005368894217, 0.6641121577384025,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:14.0 video 1>, consider the milk frother base that was moved earlier. Using its last known position to infer its current location, and using the current position of the green sponge (marked in red) in the current frame, how far is the milk frother base from the green sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "cc058509b79d0313",
            object_x_name: "milk frother base",
            object_x_reference_time_sec: 374.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c79d145ffded5b56",
            object_y_name: "green sponge",
            object_y_pixel: [809.6075594030576, 935.0699180956707],
            object_y_normalized_projected_pixel: [
              0.575005368894217, 0.6641121577384025,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.197613978316798, 1.2018784540121166, -1.4449528651009567,
            ],
            distance_m: 2.2286049092743663,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_47: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e5066ca31ca315c2",
    object_a_name: "coffee capsule",
    query_time_sec: 374.0,
    query_time_in_clip_sec: 374.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 374.0,
    clip_duration_sec: 374.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e5066ca31ca315c2",
      object_name: "coffee capsule",
      query_time_sec: 374.0,
      oos_span_start_sec: 369.0,
      oos_span_end_sec: 390.0,
      oos_duration_sec: 21.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 374.0,
      clip_duration_sec: 374.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [296.951503466826, 1092.3863424032206],
      anchor_world_coordinates: [
        -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_47",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:14.0 video 1>, is the previously moved coffee capsule visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.2635049593561514, 1.3835198431276743, -1.091066683844131,
          ],
          frame_index: 512,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The coffee capsule was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:07.0 video 1>; Point=(0.6532, 0.5096)",
          "<TIME 00:06:08.0 video 1>; Point=(0.4593, 0.5062)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 368.0,
          sampled_last_visible_time_in_clip_sec: 368.0,
          sampled_last_visible_time_token: "<TIME 00:06:08.0 video 1>",
          projected_pixel: [646.7042946871293, 712.7566214242231],
          normalized_projected_pixel: [0.4593070274766543, 0.5062191913524312],
          camera_coordinates: [
            -0.05530537914874256, 0.006775227296814457, 0.6493648305563493,
          ],
          frame_index: 512,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 367.0,
              time_token: "<TIME 00:06:07.0 video 1>",
              projected_pixel: [919.6918231142789, 717.5629394631387],
              normalized_projected_pixel: [
                0.6531902152800276, 0.5096327695050701,
              ],
              camera_coordinates: [
                0.3841945678281876, 0.019538801034447162, 1.0649684433288749,
              ],
              frame_index: 512,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 368.0,
              time_token: "<TIME 00:06:08.0 video 1>",
              projected_pixel: [646.7042946871293, 712.7566214242231],
              normalized_projected_pixel: [
                0.4593070274766543, 0.5062191913524312,
              ],
              camera_coordinates: [
                -0.05530537914874256, 0.006775227296814457, 0.6493648305563493,
              ],
              frame_index: 512,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The coffee capsule was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:17.1 video 1>; Point=(0.5794, 0.6939)",
          "<TIME 00:00:18.0 video 1>; Point=(0.6098, 0.7031)",
          "<TIME 00:00:19.0 video 1>; Point=(1.0176, 0.6643)",
          "<TIME 00:00:20.0 video 1>; Point=(0.9964, 0.6218)",
        ],
        answer_metadata: {
          last_placement_time_sec: 17.066666666666666,
          last_placement_time_in_clip_sec: 17.066666666666666,
          last_placement_time_token: "<TIME 00:00:17.1 video 1>",
          projected_pixel: [815.8550175293915, 977.0337979918461],
          normalized_projected_pixel: [0.579442484040761, 0.693916049710118],
          camera_coordinates: [
            0.07652906072722421, 0.1767822623175327, 0.39641937501053526,
          ],
          frame_index: 512,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 17.066666666666666,
              time_token: "<TIME 00:00:17.1 video 1>",
              projected_pixel: [815.8550175293915, 977.0337979918461],
              normalized_projected_pixel: [
                0.579442484040761, 0.693916049710118,
              ],
              camera_coordinates: [
                0.07652906072722421, 0.1767822623175327, 0.39641937501053526,
              ],
              frame_index: 512,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 18.0,
              time_token: "<TIME 00:00:18.0 video 1>",
              projected_pixel: [858.5811147396989, 989.9807277928666],
              normalized_projected_pixel: [
                0.609787723536718, 0.7031113123528882,
              ],
              camera_coordinates: [
                0.10710719949664327, 0.18995209675104952, 0.404191972539808,
              ],
              frame_index: 540,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 19.0,
              time_token: "<TIME 00:00:19.0 video 1>",
              projected_pixel: [1432.714711606306, 935.3556910521024],
              normalized_projected_pixel: [
                1.0175530622203879, 0.6643151214858682,
              ],
              camera_coordinates: [
                0.7078162952354661, 0.22134570741109227, 0.378551547454536,
              ],
              frame_index: 570,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 20.0,
              time_token: "<TIME 00:00:20.0 video 1>",
              projected_pixel: [1402.8967048935226, 875.5351362082215],
              normalized_projected_pixel: [
                0.9963755006346041, 0.6218289319660664,
              ],
              camera_coordinates: [
                0.8180776484459776, 0.1970901385563285, 0.5279932340389586,
              ],
              frame_index: 600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:14.0 video 1>, based on the last known position of the coffee capsule that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area close to the microwave",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 17.066666666666666,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the fridge and the hob",
          raw_correct_fixture: "P01_counter.001",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:14.0 video 1>, consider the coffee capsule that was moved earlier. Using its last known position to infer its current location, in which direction is the coffee capsule from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 374.0,
            camera_coordinates: [
              -1.2635049593561514, 1.3835198431276743, -1.091066683844131,
            ],
            world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.2635049593561514,
              z: -1.091066683844131,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:14.0 video 1>, consider the coffee capsule that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, where is the coffee capsule relative to cone from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "e5066ca31ca315c2",
            object_x_name: "coffee capsule",
            object_x_reference_time_sec: 374.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_x_camera_coordinates: [
              -1.2635049593561514, 1.3835198431276743, -1.091066683844131,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 374.0,
            object_y_world_coordinates: [
              -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
            ],
            object_y_projected_pixel: [296.951503466826, 1092.3863424032206],
            object_y_normalized_projected_pixel: [
              0.2109030564395071, 0.7758425727295601,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:14.0 video 1>, consider the coffee capsule that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone (marked in red) in the current frame, how far is the coffee capsule from the cone: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "e5066ca31ca315c2",
            object_x_name: "coffee capsule",
            object_x_reference_time_sec: 374.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [296.951503466826, 1092.3863424032206],
            object_y_normalized_projected_pixel: [
              0.2109030564395071, 0.7758425727295601,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.9761120794109153, 1.1068413861059734, -1.4863181731986328,
            ],
            distance_m: 2.0945248524544686,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_48: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "3cd95e6ebb38b27e",
    object_a_name: "black small part of the frother",
    query_time_sec: 393.0,
    query_time_in_clip_sec: 393.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 393.0,
    clip_duration_sec: 393.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "3cd95e6ebb38b27e",
      object_name: "black small part of the frother",
      query_time_sec: 393.0,
      oos_span_start_sec: 388.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 8.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_sink.001",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 393.0,
      clip_duration_sec: 393.0,
      anchor_assoc_id: "e44a21e6e04d424c",
      anchor_name: "mug",
      anchor_projected_pixel: [236.3070796736435, 491.66870361970905],
      anchor_world_coordinates: [
        -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_48",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:33.0 video 1>, is the previously moved black small part of the frother visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.0739931312772752, 0.7103269121242035, -0.4492915465070808,
          ],
          frame_index: 5270,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The black small part of the frother was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:24.0 video 1>; Point=(0.4948, 0.9136)",
          "<TIME 00:06:25.0 video 1>; Point=(0.571, 0.8897)",
          "<TIME 00:06:26.0 video 1>; Point=(0.5816, 0.9434)",
          "<TIME 00:06:27.0 video 1>; Point=(0.5595, 0.9107)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 387.0,
          sampled_last_visible_time_in_clip_sec: 387.0,
          sampled_last_visible_time_token: "<TIME 00:06:27.0 video 1>",
          projected_pixel: [787.7201722851952, 1282.3074906942522],
          normalized_projected_pixel: [0.5594603496343716, 0.9107297519135314],
          camera_coordinates: [
            0.03816566870375837, 0.24577636554157611, 0.23203823535968038,
          ],
          frame_index: 5270,
          status: "in_view",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 384.0,
              time_token: "<TIME 00:06:24.0 video 1>",
              projected_pixel: [696.6914368406041, 1286.2894177806638],
              normalized_projected_pixel: [
                0.4948092591197472, 0.9135578251283124,
              ],
              camera_coordinates: [
                -0.0005953185349447665, 0.22434373858181056,
                0.21067813690044312,
              ],
              frame_index: 5270,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 385.0,
              time_token: "<TIME 00:06:25.0 video 1>",
              projected_pixel: [804.0003738605228, 1252.6863379932688],
              normalized_projected_pixel: [
                0.5710229927986668, 0.8896920014156738,
              ],
              camera_coordinates: [
                0.03987304866919139, 0.20613523344861728, 0.20858472979342535,
              ],
              frame_index: 5270,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 386.0,
              time_token: "<TIME 00:06:26.0 video 1>",
              projected_pixel: [818.8915583359927, 1328.2582752048106],
              normalized_projected_pixel: [
                0.5815991181363585, 0.9433652522761439,
              ],
              camera_coordinates: [
                0.04516007641053399, 0.23281175642042173, 0.1955536563578253,
              ],
              frame_index: 5270,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 387.0,
              time_token: "<TIME 00:06:27.0 video 1>",
              projected_pixel: [787.7201722851952, 1282.3074906942522],
              normalized_projected_pixel: [
                0.5594603496343716, 0.9107297519135314,
              ],
              camera_coordinates: [
                0.03816566870375837, 0.24577636554157611, 0.23203823535968038,
              ],
              frame_index: 5270,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The black small part of the frother was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:55.7 video 1>; Point=(0.5738, 0.8165)",
          "<TIME 00:02:56.0 video 1>; Point=(0.725, 0.8342)",
        ],
        answer_metadata: {
          last_placement_time_sec: 175.66666666666666,
          last_placement_time_in_clip_sec: 175.66666666666666,
          last_placement_time_token: "<TIME 00:02:55.7 video 1>",
          projected_pixel: [807.9229765139787, 1149.5899595551737],
          normalized_projected_pixel: [0.5738089321832235, 0.8164701417295267],
          camera_coordinates: [
            0.05109998598958754, 0.2069054782789017, 0.2706283412266064,
          ],
          frame_index: 5270,
          status: "last_past_track_end",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 175.66666666666666,
              time_token: "<TIME 00:02:55.7 video 1>",
              projected_pixel: [807.9229765139787, 1149.5899595551737],
              normalized_projected_pixel: [
                0.5738089321832235, 0.8164701417295267,
              ],
              camera_coordinates: [
                0.05109998598958754, 0.2069054782789017, 0.2706283412266064,
              ],
              frame_index: 5270,
              status: "last_past_track_end",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 176.0,
              time_token: "<TIME 00:02:56.0 video 1>",
              projected_pixel: [1020.7604509714802, 1174.5344374702279],
              normalized_projected_pixel: [
                0.7249719112013353, 0.8341863902487414,
              ],
              camera_coordinates: [
                0.1620827680196406, 0.2354549627557423, 0.2762520450706032,
              ],
              frame_index: 5280,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:33.0 video 1>, based on the last known position of the black small part of the frother that was moved earlier, which fixture type is closest to it?",
        choices: ["counter", "shelf", "oven", "sink", "drawer"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 175.66666666666666,
          correct_fixture: "sink",
          display_correct_answer: "sink",
          raw_correct_fixture: "P01_sink.001",
          fixture_type_pool: [
            "bin",
            "counter",
            "cupboard",
            "drawer",
            "fridgefreezer",
            "oven",
            "shelf",
            "sink",
            "storage",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:33.0 video 1>, consider the black small part of the frother that was moved earlier. Using its last known position to infer its current location, in which direction is the black small part of the frother from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 393.0,
            camera_coordinates: [
              1.0739931312772752, 0.7103269121242035, -0.4492915465070808,
            ],
            world_coordinates: [
              -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.0739931312772752,
              z: -0.4492915465070808,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:33.0 video 1>, consider the black small part of the frother that was moved earlier. Using its last known position to infer its current location, and using the current position of the mug (marked in red) in the current frame, where is the black small part of the frother relative to mug from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "3cd95e6ebb38b27e",
            object_x_name: "black small part of the frother",
            object_x_reference_time_sec: 393.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.7708467916134203, -3.6487287859567403, -0.3763386533742711,
            ],
            object_x_camera_coordinates: [
              1.0739931312772752, 0.7103269121242035, -0.4492915465070808,
            ],
            object_y_assoc_id: "e44a21e6e04d424c",
            object_y_name: "mug",
            object_y_reference_time_sec: 393.0,
            object_y_world_coordinates: [
              -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
            ],
            object_y_projected_pixel: [236.3070796736435, 491.66870361970905],
            object_y_normalized_projected_pixel: [
              0.16783173272275817, 0.34919652245717975,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:33.0 video 1>, consider the black small part of the frother that was moved earlier. Using its last known position to infer its current location, and using the current position of the mug (marked in red) in the current frame, how far is the black small part of the frother from the mug: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "3cd95e6ebb38b27e",
            object_x_name: "black small part of the frother",
            object_x_reference_time_sec: 393.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e44a21e6e04d424c",
            object_y_name: "mug",
            object_y_pixel: [236.3070796736435, 491.66870361970905],
            object_y_normalized_projected_pixel: [
              0.16783173272275817, 0.34919652245717975,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.5691581425219732, 0.9401430595572544, -1.0557051155616795,
            ],
            distance_m: 2.112022618179025,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_49: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "52a8bee137386c66",
    object_a_name: "juicer part",
    query_time_sec: 396.0,
    query_time_in_clip_sec: 396.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 396.0,
    clip_duration_sec: 396.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "52a8bee137386c66",
      object_name: "juicer part",
      query_time_sec: 396.0,
      oos_span_start_sec: 391.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 5.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 396.0,
      clip_duration_sec: 396.0,
      anchor_assoc_id: "cc058509b79d0313",
      anchor_name: "milk frother base",
      anchor_projected_pixel: [1129.027090234393, 844.4556079820372],
      anchor_world_coordinates: [
        -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_49",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:36.0 video 1>, is the previously moved juicer part visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.9869561093000816, 1.1456339968813951, -0.9739148151176422,
          ],
          frame_index: 10421,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The juicer part was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:27.0 video 1>; Point=(0.2967, 0.7477)",
          "<TIME 00:06:28.0 video 1>; Point=(0.5123, 0.8003)",
          "<TIME 00:06:29.0 video 1>; Point=(0.5273, 0.8499)",
          "<TIME 00:06:30.0 video 1>; Point=(0.5169, 0.7944)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 390.0,
          sampled_last_visible_time_in_clip_sec: 390.0,
          sampled_last_visible_time_token: "<TIME 00:06:30.0 video 1>",
          projected_pixel: [727.8642528669951, 1118.5359078907823],
          normalized_projected_pixel: [0.5169490432293999, 0.7944147073087943],
          camera_coordinates: [
            0.022572916782217067, 0.3167048896011704, 0.4524387635589884,
          ],
          frame_index: 10421,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 387.0,
              time_token: "<TIME 00:06:27.0 video 1>",
              projected_pixel: [417.7768397617012, 1052.7103730491392],
              normalized_projected_pixel: [
                0.29671650551257184, 0.7476636172224,
              ],
              camera_coordinates: [
                -0.20685104033234092, 0.255415477050954, 0.4286718380212129,
              ],
              frame_index: 10421,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 388.0,
              time_token: "<TIME 00:06:28.0 video 1>",
              projected_pixel: [721.3263735876138, 1126.8337428741688],
              normalized_projected_pixel: [
                0.5123056630593849, 0.8003080560185858,
              ],
              camera_coordinates: [
                0.019078841067228236, 0.35101487811120213, 0.49022373718599765,
              ],
              frame_index: 10421,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 389.0,
              time_token: "<TIME 00:06:29.0 video 1>",
              projected_pixel: [742.4841638789616, 1196.628103243593],
              normalized_projected_pixel: [
                0.5273325027549443, 0.8498779142355063,
              ],
              camera_coordinates: [
                0.0330250520765869, 0.3670697223717697, 0.42750671403976503,
              ],
              frame_index: 10421,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 390.0,
              time_token: "<TIME 00:06:30.0 video 1>",
              projected_pixel: [727.8642528669951, 1118.5359078907823],
              normalized_projected_pixel: [
                0.5169490432293999, 0.7944147073087943,
              ],
              camera_coordinates: [
                0.022572916782217067, 0.3167048896011704, 0.4524387635589884,
              ],
              frame_index: 10421,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The juicer part was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:47.4 video 1>; Point=(0.4399, 0.7226)",
          "<TIME 00:05:48.0 video 1>; Point=(0.5776, 0.6963)",
        ],
        answer_metadata: {
          last_placement_time_sec: 347.3666666666667,
          last_placement_time_in_clip_sec: 347.3666666666667,
          last_placement_time_token: "<TIME 00:05:47.4 video 1>",
          projected_pixel: [619.4261148040159, 1017.4092632510327],
          normalized_projected_pixel: [0.4399333201733068, 0.7225918062862449],
          camera_coordinates: [
            -0.06735942413556639, 0.26466107753018075, 0.5136136846180468,
          ],
          frame_index: 10421,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 347.3666666666667,
              time_token: "<TIME 00:05:47.4 video 1>",
              projected_pixel: [619.4261148040159, 1017.4092632510327],
              normalized_projected_pixel: [
                0.4399333201733068, 0.7225918062862449,
              ],
              camera_coordinates: [
                -0.06735942413556639, 0.26466107753018075, 0.5136136846180468,
              ],
              frame_index: 10421,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 348.0,
              time_token: "<TIME 00:05:48.0 video 1>",
              projected_pixel: [813.2836622872002, 980.3327591925986],
              normalized_projected_pixel: [
                0.5776162374198864, 0.6962590619265615,
              ],
              camera_coordinates: [
                0.0954638354270525, 0.22821096033330557, 0.5054048020740266,
              ],
              frame_index: 10440,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:36.0 video 1>, based on the last known position of the juicer part that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area below the boiler",
          "counter area close to the microwave",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 347.3666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area next to the window",
          raw_correct_fixture: "P01_counter.004",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, consider the juicer part that was moved earlier. Using its last known position to infer its current location, in which direction is the juicer part from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 396.0,
            camera_coordinates: [
              0.9869561093000816, 1.1456339968813951, -0.9739148151176422,
            ],
            world_coordinates: [
              -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.9869561093000816,
              z: -0.9739148151176422,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, consider the juicer part that was moved earlier. Using its last known position to infer its current location, and using the current position of the milk frother base (marked in red) in the current frame, where is the juicer part relative to milk frother base from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "52a8bee137386c66",
            object_x_name: "juicer part",
            object_x_reference_time_sec: 396.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4722210111982077, -3.6705785293763755, -0.4719216322833095,
            ],
            object_x_camera_coordinates: [
              0.9869561093000816, 1.1456339968813951, -0.9739148151176422,
            ],
            object_y_assoc_id: "cc058509b79d0313",
            object_y_name: "milk frother base",
            object_y_reference_time_sec: 396.0,
            object_y_world_coordinates: [
              -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
            ],
            object_y_projected_pixel: [1129.027090234393, 844.4556079820372],
            object_y_normalized_projected_pixel: [
              0.8018658311323814, 0.5997554033963333,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, consider the juicer part that was moved earlier. Using its last known position to infer its current location, and using the current position of the milk frother base (marked in red) in the current frame, how far is the juicer part from the milk frother base: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "52a8bee137386c66",
            object_x_name: "juicer part",
            object_x_reference_time_sec: 396.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "cc058509b79d0313",
            object_y_name: "milk frother base",
            object_y_pixel: [1129.027090234393, 844.4556079820372],
            object_y_normalized_projected_pixel: [
              0.8018658311323814, 0.5997554033963333,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.5377426258501252, 1.0013714056127259, -1.5807474409048288,
            ],
            distance_m: 1.9469654068735167,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_50: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "429e077d1a0a5f1d",
    object_a_name: "cone",
    query_time_sec: 396.0,
    query_time_in_clip_sec: 396.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 396.0,
    clip_duration_sec: 396.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "429e077d1a0a5f1d",
      object_name: "cone",
      query_time_sec: 396.0,
      oos_span_start_sec: 391.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 5.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 396.0,
      clip_duration_sec: 396.0,
      anchor_assoc_id: "c60c10f7d1acb901",
      anchor_name: "lid of milk frother",
      anchor_projected_pixel: [1158.626774556677, 762.0900763598122],
      anchor_world_coordinates: [
        -0.358569128705764, -1.703000926376473, -0.3998278790577944,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_50",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:36.0 video 1>, is the previously moved cone visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.0265613627169698, 1.156510080752598, -0.9224410964958019,
          ],
          frame_index: 9819,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cone was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:27.0 video 1>; Point=(0.2665, 0.7595)",
          "<TIME 00:06:28.0 video 1>; Point=(0.479, 0.8049)",
          "<TIME 00:06:29.0 video 1>; Point=(0.4854, 0.8536)",
          "<TIME 00:06:30.0 video 1>; Point=(0.4749, 0.7975)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 390.0,
          sampled_last_visible_time_in_clip_sec: 390.0,
          sampled_last_visible_time_token: "<TIME 00:06:30.0 video 1>",
          projected_pixel: [668.6526029919305, 1122.9065295315816],
          normalized_projected_pixel: [0.47489531462495066, 0.7975188419968618],
          camera_coordinates: [
            -0.024737022174236678, 0.34572294756655697, 0.4878807019258975,
          ],
          frame_index: 9819,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 387.0,
              time_token: "<TIME 00:06:27.0 video 1>",
              projected_pixel: [375.2024640791363, 1069.3890653946307],
              normalized_projected_pixel: [
                0.26647902278347746, 0.7595092793995957,
              ],
              camera_coordinates: [
                -0.2570385723707962, 0.28893362876652784, 0.45501864315600216,
              ],
              frame_index: 9819,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 388.0,
              time_token: "<TIME 00:06:28.0 video 1>",
              projected_pixel: [674.434385843424, 1133.3307783038367],
              normalized_projected_pixel: [
                0.4790016944910682, 0.8049224277726114,
              ],
              camera_coordinates: [
                -0.021674492211481766, 0.38545247779611813, 0.5288194177988024,
              ],
              frame_index: 9819,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 389.0,
              time_token: "<TIME 00:06:29.0 video 1>",
              projected_pixel: [683.4787918047508, 1201.8004274035286],
              normalized_projected_pixel: [
                0.4854252782704196, 0.8535514399172789,
              ],
              camera_coordinates: [
                -0.012031484349470212, 0.40107192315430495, 0.4614208390407326,
              ],
              frame_index: 9819,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 390.0,
              time_token: "<TIME 00:06:30.0 video 1>",
              projected_pixel: [668.6526029919305, 1122.9065295315816],
              normalized_projected_pixel: [
                0.47489531462495066, 0.7975188419968618,
              ],
              camera_coordinates: [
                -0.024737022174236678, 0.34572294756655697, 0.4878807019258975,
              ],
              frame_index: 9819,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The cone was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:27.3 video 1>; Point=(0.2126, 0.8473)",
        ],
        answer_metadata: {
          last_placement_time_sec: 327.3,
          last_placement_time_in_clip_sec: 327.3,
          last_placement_time_token: "<TIME 00:05:27.3 video 1>",
          projected_pixel: [299.3172345824158, 1192.990705054848],
          normalized_projected_pixel: [0.2125832631977385, 0.8472945348400909],
          camera_coordinates: [
            -0.3156732493052259, 0.38548462239828973, 0.4143783822933682,
          ],
          frame_index: 9819,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 327.3,
              time_token: "<TIME 00:05:27.3 video 1>",
              projected_pixel: [299.3172345824158, 1192.990705054848],
              normalized_projected_pixel: [
                0.2125832631977385, 0.8472945348400909,
              ],
              camera_coordinates: [
                -0.3156732493052259, 0.38548462239828973, 0.4143783822933682,
              ],
              frame_index: 9819,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:36.0 video 1>, based on the last known position of the cone that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area next to the window",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 327.3,
          correct_fixture: "counter",
          display_correct_answer: "counter area next to the window",
          raw_correct_fixture: "P01_counter.004",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, consider the cone that was moved earlier. Using its last known position to infer its current location, in which direction is the cone from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 396.0,
            camera_coordinates: [
              1.0265613627169698, 1.156510080752598, -0.9224410964958019,
            ],
            world_coordinates: [
              -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.0265613627169698,
              z: -0.9224410964958019,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, consider the cone that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid of milk frother (marked in red) in the current frame, where is the cone relative to lid of milk frother from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "429e077d1a0a5f1d",
            object_x_name: "cone",
            object_x_reference_time_sec: 396.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.42283107859321634, -3.6478089902641093, -0.5090510229763863,
            ],
            object_x_camera_coordinates: [
              1.0265613627169698, 1.156510080752598, -0.9224410964958019,
            ],
            object_y_assoc_id: "c60c10f7d1acb901",
            object_y_name: "lid of milk frother",
            object_y_reference_time_sec: 396.0,
            object_y_world_coordinates: [
              -0.358569128705764, -1.703000926376473, -0.3998278790577944,
            ],
            object_y_projected_pixel: [1158.626774556677, 762.0900763598122],
            object_y_normalized_projected_pixel: [
              0.8228883342021853, 0.5412571565055484,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, consider the cone that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid of milk frother (marked in red) in the current frame, how far is the cone from the lid of milk frother: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "429e077d1a0a5f1d",
            object_x_name: "cone",
            object_x_reference_time_sec: 396.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c60c10f7d1acb901",
            object_y_name: "lid of milk frother",
            object_y_pixel: [1158.626774556677, 762.0900763598122],
            object_y_normalized_projected_pixel: [
              0.8228883342021853, 0.5412571565055484,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.5615433724385431, 1.099993263701573, -1.5076543235817301,
            ],
            distance_m: 1.9489324510442056,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_51: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "4870a5041fe72cb4",
    object_a_name: "juicer bowl",
    query_time_sec: 396.0,
    query_time_in_clip_sec: 396.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 396.0,
    clip_duration_sec: 396.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "4870a5041fe72cb4",
      object_name: "juicer bowl",
      query_time_sec: 396.0,
      oos_span_start_sec: 391.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 5.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 396.0,
      clip_duration_sec: 396.0,
      anchor_assoc_id: "e5066ca31ca315c2",
      anchor_name: "coffee capsule",
      anchor_projected_pixel: [1105.349714038436, 666.0839176561631],
      anchor_world_coordinates: [
        -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_51",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:36.0 video 1>, is the previously moved juicer bowl visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.354211874558873, 1.234166682623343, -1.0312169764248809,
          ],
          frame_index: 11688,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The juicer bowl was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:30.0 video 1>; Point=(0.4763, 0.6138)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 390.0,
          sampled_last_visible_time_in_clip_sec: 390.0,
          sampled_last_visible_time_token: "<TIME 00:06:30.0 video 1>",
          projected_pixel: [670.5992535022874, 864.2543910284928],
          normalized_projected_pixel: [0.4762778789078746, 0.6138170390827363],
          camera_coordinates: [
            -0.03744470797660426, 0.20967573397898154, 0.8142964922536984,
          ],
          frame_index: 11688,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.15512237716269878, -3.8791055502535294, -0.5162308763289616,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 390.0,
              time_token: "<TIME 00:06:30.0 video 1>",
              projected_pixel: [670.5992535022874, 864.2543910284928],
              normalized_projected_pixel: [
                0.4762778789078746, 0.6138170390827363,
              ],
              camera_coordinates: [
                -0.03744470797660426, 0.20967573397898154, 0.8142964922536984,
              ],
              frame_index: 11688,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.15512237716269878, -3.8791055502535294, -0.5162308763289616,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The juicer bowl was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:29.6 video 1>; Point=(0.4685, 0.6475)",
          "<TIME 00:06:30.0 video 1>; Point=(0.4763, 0.6138)",
        ],
        answer_metadata: {
          last_placement_time_sec: 389.6,
          last_placement_time_in_clip_sec: 389.6,
          last_placement_time_token: "<TIME 00:06:29.6 video 1>",
          projected_pixel: [659.6121375708627, 911.7203659490734],
          normalized_projected_pixel: [0.4684745295247605, 0.6475286689979215],
          camera_coordinates: [
            -0.05121391890219851, 0.26874019389108683, 0.8012794210737446,
          ],
          frame_index: 11688,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.15512237716269878, -3.8791055502535294, -0.5162308763289616,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 389.6,
              time_token: "<TIME 00:06:29.6 video 1>",
              projected_pixel: [659.6121375708627, 911.7203659490734],
              normalized_projected_pixel: [
                0.4684745295247605, 0.6475286689979215,
              ],
              camera_coordinates: [
                -0.05121391890219851, 0.26874019389108683, 0.8012794210737446,
              ],
              frame_index: 11688,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.15512237716269878, -3.8791055502535294, -0.5162308763289616,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 390.0,
              time_token: "<TIME 00:06:30.0 video 1>",
              projected_pixel: [670.5992535022874, 864.2543910284928],
              normalized_projected_pixel: [
                0.4762778789078746, 0.6138170390827363,
              ],
              camera_coordinates: [
                -0.03744470797660426, 0.20967573397898154, 0.8142964922536984,
              ],
              frame_index: 11700,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.15512237716269878, -3.8791055502535294, -0.5162308763289616,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:36.0 video 1>, based on the last known position of the juicer bowl that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 389.6,
          correct_fixture: "counter",
          display_correct_answer: "counter area next to the window",
          raw_correct_fixture: "P01_counter.004",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, consider the juicer bowl that was moved earlier. Using its last known position to infer its current location, in which direction is the juicer bowl from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 396.0,
            camera_coordinates: [
              1.354211874558873, 1.234166682623343, -1.0312169764248809,
            ],
            world_coordinates: [
              -0.15512237716269878, -3.8791055502535294, -0.5162308763289616,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.354211874558873,
              z: -1.0312169764248809,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, consider the juicer bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, where is the juicer bowl relative to coffee capsule from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "4870a5041fe72cb4",
            object_x_name: "juicer bowl",
            object_x_reference_time_sec: 396.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.15512237716269878, -3.8791055502535294, -0.5162308763289616,
            ],
            object_x_camera_coordinates: [
              1.354211874558873, 1.234166682623343, -1.0312169764248809,
            ],
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_reference_time_sec: 396.0,
            object_y_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_y_projected_pixel: [1105.349714038436, 666.0839176561631],
            object_y_normalized_projected_pixel: [
              0.7850495128113892, 0.473070964244434,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, consider the juicer bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the coffee capsule (marked in red) in the current frame, how far is the juicer bowl from the coffee capsule: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "4870a5041fe72cb4",
            object_x_name: "juicer bowl",
            object_x_reference_time_sec: 396.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_pixel: [1105.349714038436, 666.0839176561631],
            object_y_normalized_projected_pixel: [
              0.7850495128113892, 0.473070964244434,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8698909899527767, 1.2819293662745095, -1.7344255132642639,
            ],
            distance_m: 2.325571993205111,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h5p0_52: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "c79d145ffded5b56",
    object_a_name: "green sponge",
    query_time_sec: 396.0,
    query_time_in_clip_sec: 396.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 396.0,
    clip_duration_sec: 396.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "c79d145ffded5b56",
      object_name: "green sponge",
      query_time_sec: 396.0,
      oos_span_start_sec: 391.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 5.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 396.0,
      clip_duration_sec: 396.0,
      anchor_assoc_id: "cc058509b79d0313",
      anchor_name: "milk frother base",
      anchor_projected_pixel: [1129.027090234393, 844.4556079820372],
      anchor_world_coordinates: [
        -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_52",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:36.0 video 1>, is the previously moved green sponge visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.9215204944428059, 1.400082993461713, -1.232150185915964,
          ],
          frame_index: 11426,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The green sponge was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:27.0 video 1>; Point=(0.5658, 0.6237)",
          "<TIME 00:06:28.0 video 1>; Point=(0.7786, 0.7556)",
          "<TIME 00:06:29.0 video 1>; Point=(0.7929, 0.7836)",
          "<TIME 00:06:30.0 video 1>; Point=(0.7722, 0.7386)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 390.0,
          sampled_last_visible_time_in_clip_sec: 390.0,
          sampled_last_visible_time_token: "<TIME 00:06:30.0 video 1>",
          projected_pixel: [1087.301737425492, 1039.942954640878],
          normalized_projected_pixel: [0.7722313476033325, 0.7385958484665327],
          camera_coordinates: [
            0.37765961828524164, 0.32413021224415395, 0.5502647175956188,
          ],
          frame_index: 11426,
          status: "in_view",
          fixture: "P01_counter.005",
          world_coordinates: [
            -0.6479326508588283, -3.985840699782873, -0.5457240840189255,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 387.0,
              time_token: "<TIME 00:06:27.0 video 1>",
              projected_pixel: [796.6881908704545, 878.2305745799849],
              normalized_projected_pixel: [
                0.5658296810159478, 0.6237433058096484,
              ],
              camera_coordinates: [
                0.09863268915735812, 0.17314069344129468, 0.6174102000011641,
              ],
              frame_index: 11426,
              status: "in_view",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6479326508588283, -3.985840699782873, -0.5457240840189255,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 388.0,
              time_token: "<TIME 00:06:28.0 video 1>",
              projected_pixel: [1096.2124485817599, 1063.9433815026973],
              normalized_projected_pixel: [
                0.778559977685909, 0.7556416061808929,
              ],
              camera_coordinates: [
                0.38394489748701677, 0.3453038945126381, 0.5407387233072982,
              ],
              frame_index: 11426,
              status: "in_view",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6479326508588283, -3.985840699782873, -0.5457240840189255,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 389.0,
              time_token: "<TIME 00:06:29.0 video 1>",
              projected_pixel: [1116.4695888343554, 1103.2762702137732],
              normalized_projected_pixel: [
                0.7929471511607638, 0.7835768964586457,
              ],
              camera_coordinates: [
                0.3915171386260412, 0.3718875712205041, 0.5121933747232321,
              ],
              frame_index: 11426,
              status: "in_view",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6479326508588283, -3.985840699782873, -0.5457240840189255,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 390.0,
              time_token: "<TIME 00:06:30.0 video 1>",
              projected_pixel: [1087.301737425492, 1039.942954640878],
              normalized_projected_pixel: [
                0.7722313476033325, 0.7385958484665327,
              ],
              camera_coordinates: [
                0.37765961828524164, 0.32413021224415395, 0.5502647175956188,
              ],
              frame_index: 11426,
              status: "in_view",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6479326508588283, -3.985840699782873, -0.5457240840189255,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question:
          "The green sponge was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:20.9 video 1>; Point=(0.5009, 0.6482)",
          "<TIME 00:06:21.0 video 1>; Point=(0.4919, 0.6198)",
          "<TIME 00:06:22.0 video 1>; Point=(0.4946, 0.5821)",
          "<TIME 00:06:23.0 video 1>; Point=(0.506, 0.5814)",
        ],
        answer_metadata: {
          last_placement_time_sec: 380.8666666666667,
          last_placement_time_in_clip_sec: 380.8666666666667,
          last_placement_time_token: "<TIME 00:06:20.9 video 1>",
          projected_pixel: [705.2814863431973, 912.6592945053388],
          normalized_projected_pixel: [0.5009101465505663, 0.6481955216657236],
          camera_coordinates: [
            0.006064755048585502, 0.1917619396213559, 0.5693177778972522,
          ],
          frame_index: 11426,
          status: "last_past_track_end",
          fixture: "P01_counter.005",
          world_coordinates: [
            -0.6479326508588283, -3.985840699782873, -0.5457240840189255,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 380.8666666666667,
              time_token: "<TIME 00:06:20.9 video 1>",
              projected_pixel: [705.2814863431973, 912.6592945053388],
              normalized_projected_pixel: [
                0.5009101465505663, 0.6481955216657236,
              ],
              camera_coordinates: [
                0.006064755048585502, 0.1917619396213559, 0.5693177778972522,
              ],
              frame_index: 11426,
              status: "last_past_track_end",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6479326508588283, -3.985840699782873, -0.5457240840189255,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 381.0,
              time_token: "<TIME 00:06:21.0 video 1>",
              projected_pixel: [692.5978669044782, 872.6399416852305],
              normalized_projected_pixel: [
                0.4919018941082942, 0.6197726858559875,
              ],
              camera_coordinates: [
                -0.005778482669646978, 0.15508802335841887, 0.5719274850113298,
              ],
              frame_index: 11430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6479326508588283, -3.985840699782873, -0.5457240840189255,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 382.0,
              time_token: "<TIME 00:06:22.0 video 1>",
              projected_pixel: [696.4307256341461, 819.5419936675602],
              normalized_projected_pixel: [
                0.49462409491061515, 0.5820610750479831,
              ],
              camera_coordinates: [
                -0.002320593251056602, 0.10934912520384588, 0.5923633833637401,
              ],
              frame_index: 11460,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6479326508588283, -3.985840699782873, -0.5457240840189255,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 383.0,
              time_token: "<TIME 00:06:23.0 video 1>",
              projected_pixel: [712.4648752801149, 818.6382735950499],
              normalized_projected_pixel: [
                0.5060119852841726, 0.5814192284055753,
              ],
              camera_coordinates: [
                0.013142706144443572, 0.10824868011830446, 0.5911502984439334,
              ],
              frame_index: 11490,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6479326508588283, -3.985840699782873, -0.5457240840189255,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:36.0 video 1>, based on the last known position of the green sponge that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 380.8666666666667,
          correct_fixture: "counter",
          display_correct_answer: "counter area next to the window",
          raw_correct_fixture: "P01_counter.005",
          counter_area_choices: [
            "counter area below the boiler",
            "counter area beside the hob and near the sink",
            "counter area between the fridge and the hob",
            "counter area close to the microwave",
            "counter area next to the window",
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
        },
      },
    ],
    branch_groups: {
      post_step4: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, consider the green sponge that was moved earlier. Using its last known position to infer its current location, in which direction is the green sponge from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 396.0,
            camera_coordinates: [
              0.9215204944428059, 1.400082993461713, -1.232150185915964,
            ],
            world_coordinates: [
              -0.6479326508588283, -3.985840699782873, -0.5457240840189255,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.9215204944428059,
              z: -1.232150185915964,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, consider the green sponge that was moved earlier. Using its last known position to infer its current location, and using the current position of the milk frother base (marked in red) in the current frame, where is the green sponge relative to milk frother base from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "c79d145ffded5b56",
            object_x_name: "green sponge",
            object_x_reference_time_sec: 396.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.6479326508588283, -3.985840699782873, -0.5457240840189255,
            ],
            object_x_camera_coordinates: [
              0.9215204944428059, 1.400082993461713, -1.232150185915964,
            ],
            object_y_assoc_id: "cc058509b79d0313",
            object_y_name: "milk frother base",
            object_y_reference_time_sec: 396.0,
            object_y_world_coordinates: [
              -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
            ],
            object_y_projected_pixel: [1129.027090234393, 844.4556079820372],
            object_y_normalized_projected_pixel: [
              0.8018658311323814, 0.5997554033963333,
            ],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, consider the green sponge that was moved earlier. Using its last known position to infer its current location, and using the current position of the milk frother base (marked in red) in the current frame, how far is the green sponge from the milk frother base: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "c79d145ffded5b56",
            object_x_name: "green sponge",
            object_x_reference_time_sec: 396.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "cc058509b79d0313",
            object_y_name: "milk frother base",
            object_y_pixel: [1129.027090234393, 844.4556079820372],
            object_y_normalized_projected_pixel: [
              0.8018658311323814, 0.5997554033963333,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.47230701099284955, 1.2558204021930437, -1.8389828117031506,
            ],
            distance_m: 2.276404308759084,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
};

export const VIDEO: VideoEntry = {
  id: "P01-20240203-132119",
  label: "P01-20240203-132119",
  sampledUrl: "https://www.youtube.com/watch?v=J6F6VP6-qZw",
  fullUrl: "https://www.youtube.com/watch?v=dX1WtAax4zY",
  duration: 220,
  trajectory: TRAJECTORY,
  rawJson: { TRAJECTORY },
};

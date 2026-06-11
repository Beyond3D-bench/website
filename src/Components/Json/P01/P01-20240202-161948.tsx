import type { TrajectoryData, VideoEntry } from "../Types";

const TRAJECTORY: Record<string, TrajectoryData> = {
  oos_staged_h10p0_0: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "a1219e6aa5769241",
    object_a_name: "packet of butter",
    query_time_sec: 109.0,
    query_time_in_clip_sec: 109.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 109.0,
    clip_duration_sec: 109.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "a1219e6aa5769241",
      object_name: "packet of butter",
      query_time_sec: 109.0,
      oos_span_start_sec: 99.0,
      oos_span_end_sec: 120.0,
      oos_duration_sec: 21.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 109.0,
      clip_duration_sec: 109.0,
      anchor_assoc_id: "20321a8dcbf55b59",
      anchor_name: "salt bottle",
      anchor_projected_pixel: [1337.043851110533, 850.1881650729222],
      anchor_world_coordinates: [
        -0.19407252753361787, -2.93184429713067, -0.4805640097325699,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_0",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:01:49.0 video 1>, is the previously moved packet of butter visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1424.6829264633573, 1000.7309991031011],
          camera_coordinates: [
            1.114912283346283, 0.4528834170803573, 0.5805764526120085,
          ],
          frame_index: 1311,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The packet of butter was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:35.0 video 1>; Point=(0.782, 0.8317)",
          "<TIME 00:01:36.0 video 1>; Point=(0.7658, 0.8393)",
          "<TIME 00:01:37.0 video 1>; Point=(0.7718, 0.8441)",
          "<TIME 00:01:38.0 video 1>; Point=(0.8004, 0.89)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 98.0,
          sampled_last_visible_time_in_clip_sec: 98.0,
          sampled_last_visible_time_token: "<TIME 00:01:38.0 video 1>",
          projected_pixel: [1126.896385737466, 1253.1641986507475],
          normalized_projected_pixel: [0.8003525466885413, 0.8900313910871787],
          camera_coordinates: [
            0.27517044736227536, 0.35127911870017053, 0.3106333401110705,
          ],
          frame_index: 1311,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 95.0,
              time_token: "<TIME 00:01:35.0 video 1>",
              projected_pixel: [1101.0708538397407, 1171.0917285023886],
              normalized_projected_pixel: [
                0.7820105496020886, 0.8317412844477192,
              ],
              camera_coordinates: [
                0.2536250004273315, 0.2928201666152521, 0.3349651431396369,
              ],
              frame_index: 1311,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 96.0,
              time_token: "<TIME 00:01:36.0 video 1>",
              projected_pixel: [1078.309907667956, 1181.6677016698602],
              normalized_projected_pixel: [
                0.7658451048778097, 0.8392526290268894,
              ],
              camera_coordinates: [
                0.24146297337098144, 0.30218849697611366, 0.33971451374176176,
              ],
              frame_index: 1311,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 97.0,
              time_token: "<TIME 00:01:37.0 video 1>",
              projected_pixel: [1086.75347906752, 1188.49774175717],
              normalized_projected_pixel: [0.771841959565, 0.8441035097707172],
              camera_coordinates: [
                0.24747920078916064, 0.3073397585554979, 0.3376869986270536,
              ],
              frame_index: 1311,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 98.0,
              time_token: "<TIME 00:01:38.0 video 1>",
              projected_pixel: [1126.896385737466, 1253.1641986507475],
              normalized_projected_pixel: [
                0.8003525466885413, 0.8900313910871787,
              ],
              camera_coordinates: [
                0.27517044736227536, 0.35127911870017053, 0.3106333401110705,
              ],
              frame_index: 1311,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
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
          "The packet of butter was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:43.7 video 1>; Point=(0.5828, 0.8888)",
          "<TIME 00:00:44.0 video 1>; Point=(0.6164, 0.9014)",
          "<TIME 00:00:45.0 video 1>; Point=(0.644, 0.9347)",
          "<TIME 00:00:46.0 video 1>; Point=(0.783, 1.0473)",
        ],
        answer_metadata: {
          last_placement_time_sec: 43.7,
          last_placement_time_in_clip_sec: 43.7,
          last_placement_time_token: "<TIME 00:00:43.7 video 1>",
          projected_pixel: [820.6512640016246, 1251.4950908075282],
          normalized_projected_pixel: [0.5828489090920629, 0.8888459451758013],
          camera_coordinates: [
            0.07891105616777283, 0.35167752844612177, 0.3561903675545834,
          ],
          frame_index: 1311,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 43.7,
              time_token: "<TIME 00:00:43.7 video 1>",
              projected_pixel: [820.6512640016246, 1251.4950908075282],
              normalized_projected_pixel: [
                0.5828489090920629, 0.8888459451758013,
              ],
              camera_coordinates: [
                0.07891105616777283, 0.35167752844612177, 0.3561903675545834,
              ],
              frame_index: 1311,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 44.0,
              time_token: "<TIME 00:00:44.0 video 1>",
              projected_pixel: [867.8570163644467, 1269.1603548397989],
              normalized_projected_pixel: [
                0.6163757218497491, 0.901392297471448,
              ],
              camera_coordinates: [
                0.1092067965228325, 0.36255225753963716, 0.34922240117095404,
              ],
              frame_index: 1320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 45.0,
              time_token: "<TIME 00:00:45.0 video 1>",
              projected_pixel: [906.71529939848, 1316.118904558819],
              normalized_projected_pixel: [
                0.643973934231875, 0.9347435401696157,
              ],
              camera_coordinates: [
                0.13317198679558517, 0.38965678544059856, 0.33034745187431036,
              ],
              frame_index: 1350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 46.0,
              time_token: "<TIME 00:00:46.0 video 1>",
              projected_pixel: [1102.3957663251472, 1474.5750871275677],
              normalized_projected_pixel: [
                0.7829515385832011, 1.047283442562193,
              ],
              camera_coordinates: [
                0.24915931251589774, 0.47418382188288755, 0.21750144785943393,
              ],
              frame_index: 1380,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
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
          "At the current time <TIME 00:01:49.0 video 1>, based on the last known position of the packet of butter that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 43.7,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:01:49.0 video 1>, consider the packet of butter that was moved earlier. Using its last known position to infer its current location, in which direction is the packet of butter from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 109.0,
            camera_coordinates: [
              1.114912283346283, 0.4528834170803573, 0.5805764526120085,
            ],
            world_coordinates: [
              -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.114912283346283,
              z: 0.5805764526120085,
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
            "At the current time <TIME 00:01:49.0 video 1>, consider the packet of butter that was moved earlier. Using its last known position to infer its current location, and using the current position of the salt bottle (marked in red) in the current frame, where is the packet of butter relative to salt bottle from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "a1219e6aa5769241",
            object_x_name: "packet of butter",
            object_x_reference_time_sec: 109.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
            ],
            object_x_camera_coordinates: [
              1.114912283346283, 0.4528834170803573, 0.5805764526120085,
            ],
            object_y_assoc_id: "20321a8dcbf55b59",
            object_y_name: "salt bottle",
            object_y_reference_time_sec: 109.0,
            object_y_world_coordinates: [
              -0.19407252753361787, -2.93184429713067, -0.4805640097325699,
            ],
            object_y_projected_pixel: [1337.043851110533, 850.1881650729222],
            object_y_normalized_projected_pixel: [
              0.9496050078910035, 0.6038268217847459,
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
            "At the current time <TIME 00:01:49.0 video 1>, consider the packet of butter that was moved earlier. Using its last known position to infer its current location, and using the current position of the salt bottle (marked in red) in the current frame, how far is the packet of butter from the salt bottle: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "a1219e6aa5769241",
            object_x_name: "packet of butter",
            object_x_reference_time_sec: 109.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "20321a8dcbf55b59",
            object_y_name: "salt bottle",
            object_y_pixel: [1337.043851110533, 850.1881650729222],
            object_y_normalized_projected_pixel: [
              0.9496050078910035, 0.6038268217847459,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.12855671039148886, 0.2300960966220802, -0.21128753715057502,
            ],
            distance_m: 0.3378068454347165,
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
  oos_staged_h10p0_1: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "a1219e6aa5769241",
    object_a_name: "packet of butter",
    query_time_sec: 136.0,
    query_time_in_clip_sec: 136.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 136.0,
    clip_duration_sec: 136.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "a1219e6aa5769241",
      object_name: "packet of butter",
      query_time_sec: 136.0,
      oos_span_start_sec: 126.0,
      oos_span_end_sec: 166.0,
      oos_duration_sec: 40.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 136.0,
      clip_duration_sec: 136.0,
      anchor_assoc_id: "0e817d8e029ec20a",
      anchor_name: "saucepan",
      anchor_projected_pixel: [853.4369733322275, 886.3165164733666],
      anchor_world_coordinates: [
        -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_1",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:16.0 video 1>, is the previously moved packet of butter visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [2493.5371407215184, 1791.0360740655344],
          camera_coordinates: [
            0.7953820461394445, 0.4967044591674825, 0.23820859779982895,
          ],
          frame_index: 1311,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The packet of butter was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:03.0 video 1>; Point=(0.944, 0.6393)",
          "<TIME 00:02:04.0 video 1>; Point=(0.9316, 0.623)",
          "<TIME 00:02:05.0 video 1>; Point=(0.9437, 0.5809)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 125.0,
          sampled_last_visible_time_in_clip_sec: 125.0,
          sampled_last_visible_time_token: "<TIME 00:02:05.0 video 1>",
          projected_pixel: [1328.786298262994, 817.963930368019],
          normalized_projected_pixel: [0.9437402686526947, 0.5809402914545589],
          camera_coordinates: [
            0.6125320408132371, 0.10884098133270093, 0.5058583748961978,
          ],
          frame_index: 1311,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 123.0,
              time_token: "<TIME 00:02:03.0 video 1>",
              projected_pixel: [1329.0940953110342, 900.2013974591385],
              normalized_projected_pixel: [
                0.9439588745106776, 0.6393475834226836,
              ],
              camera_coordinates: [
                0.6171706557687484, 0.19008631309011875, 0.49868172160476265,
              ],
              frame_index: 1311,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 124.0,
              time_token: "<TIME 00:02:04.0 video 1>",
              projected_pixel: [1311.7624012802216, 877.1772311897471],
              normalized_projected_pixel: [
                0.9316494327274302, 0.6229951926063545,
              ],
              camera_coordinates: [
                0.5994338700974602, 0.1673103604095194, 0.5104479293507636,
              ],
              frame_index: 1311,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 125.0,
              time_token: "<TIME 00:02:05.0 video 1>",
              projected_pixel: [1328.786298262994, 817.963930368019],
              normalized_projected_pixel: [
                0.9437402686526947, 0.5809402914545589,
              ],
              camera_coordinates: [
                0.6125320408132371, 0.10884098133270093, 0.5058583748961978,
              ],
              frame_index: 1311,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
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
          "The packet of butter was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:43.7 video 1>; Point=(0.5828, 0.8888)",
          "<TIME 00:00:44.0 video 1>; Point=(0.6164, 0.9014)",
          "<TIME 00:00:45.0 video 1>; Point=(0.644, 0.9347)",
          "<TIME 00:00:46.0 video 1>; Point=(0.783, 1.0473)",
        ],
        answer_metadata: {
          last_placement_time_sec: 43.7,
          last_placement_time_in_clip_sec: 43.7,
          last_placement_time_token: "<TIME 00:00:43.7 video 1>",
          projected_pixel: [820.6512640016246, 1251.4950908075282],
          normalized_projected_pixel: [0.5828489090920629, 0.8888459451758013],
          camera_coordinates: [
            0.07891105616777283, 0.35167752844612177, 0.3561903675545834,
          ],
          frame_index: 1311,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 43.7,
              time_token: "<TIME 00:00:43.7 video 1>",
              projected_pixel: [820.6512640016246, 1251.4950908075282],
              normalized_projected_pixel: [
                0.5828489090920629, 0.8888459451758013,
              ],
              camera_coordinates: [
                0.07891105616777283, 0.35167752844612177, 0.3561903675545834,
              ],
              frame_index: 1311,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 44.0,
              time_token: "<TIME 00:00:44.0 video 1>",
              projected_pixel: [867.8570163644467, 1269.1603548397989],
              normalized_projected_pixel: [
                0.6163757218497491, 0.901392297471448,
              ],
              camera_coordinates: [
                0.1092067965228325, 0.36255225753963716, 0.34922240117095404,
              ],
              frame_index: 1320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 45.0,
              time_token: "<TIME 00:00:45.0 video 1>",
              projected_pixel: [906.71529939848, 1316.118904558819],
              normalized_projected_pixel: [
                0.643973934231875, 0.9347435401696157,
              ],
              camera_coordinates: [
                0.13317198679558517, 0.38965678544059856, 0.33034745187431036,
              ],
              frame_index: 1350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 46.0,
              time_token: "<TIME 00:00:46.0 video 1>",
              projected_pixel: [1102.3957663251472, 1474.5750871275677],
              normalized_projected_pixel: [
                0.7829515385832011, 1.047283442562193,
              ],
              camera_coordinates: [
                0.24915931251589774, 0.47418382188288755, 0.21750144785943393,
              ],
              frame_index: 1380,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
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
          "At the current time <TIME 00:02:16.0 video 1>, based on the last known position of the packet of butter that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 43.7,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:02:16.0 video 1>, consider the packet of butter that was moved earlier. Using its last known position to infer its current location, in which direction is the packet of butter from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 136.0,
            camera_coordinates: [
              0.7953820461394445, 0.4967044591674825, 0.23820859779982895,
            ],
            world_coordinates: [
              -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7953820461394445,
              z: 0.23820859779982895,
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
            "At the current time <TIME 00:02:16.0 video 1>, consider the packet of butter that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, where is the packet of butter relative to saucepan from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "a1219e6aa5769241",
            object_x_name: "packet of butter",
            object_x_reference_time_sec: 136.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4945557814679456, -3.0542109685363656, -0.5746367297776669,
            ],
            object_x_camera_coordinates: [
              0.7953820461394445, 0.4967044591674825, 0.23820859779982895,
            ],
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_reference_time_sec: 136.0,
            object_y_world_coordinates: [
              -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
            ],
            object_y_projected_pixel: [853.4369733322275, 886.3165164733666],
            object_y_normalized_projected_pixel: [
              0.6061342140143661, 0.629486162268016,
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
            "At the current time <TIME 00:02:16.0 video 1>, consider the packet of butter that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, how far is the packet of butter from the saucepan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "a1219e6aa5769241",
            object_x_name: "packet of butter",
            object_x_reference_time_sec: 136.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_pixel: [853.4369733322275, 886.3165164733666],
            object_y_normalized_projected_pixel: [
              0.6061342140143661, 0.629486162268016,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6726432483941172, 0.3539083190934411, -0.24697720127304806,
            ],
            distance_m: 0.7991856954941089,
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
  oos_staged_h10p0_2: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "f4a201fecc6f8ce8",
    object_a_name: "spatula",
    query_time_sec: 154.0,
    query_time_in_clip_sec: 154.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 154.0,
    clip_duration_sec: 154.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "f4a201fecc6f8ce8",
      object_name: "spatula",
      query_time_sec: 154.0,
      oos_span_start_sec: 144.0,
      oos_span_end_sec: 166.0,
      oos_duration_sec: 22.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 7,
      clip_start_time_sec: 0,
      clip_end_time_sec: 154.0,
      clip_duration_sec: 154.0,
      anchor_assoc_id: "0e817d8e029ec20a",
      anchor_name: "saucepan",
      anchor_projected_pixel: [861.1180282078064, 873.5265328539632],
      anchor_world_coordinates: [
        -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_2",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:34.0 video 1>, is the previously moved spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1321.1180166000725, 1106.0714416321919],
          camera_coordinates: [
            0.5454976783801733, 0.3505583461505626, 0.3797369051946747,
          ],
          frame_index: 3633,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:23.0 video 1>; Point=(0.8034, 0.7092)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 143.0,
          sampled_last_visible_time_in_clip_sec: 143.0,
          sampled_last_visible_time_token: "<TIME 00:02:23.0 video 1>",
          projected_pixel: [1131.248400565067, 998.5980295852423],
          normalized_projected_pixel: [0.8034434663104169, 0.709231555103155],
          camera_coordinates: [
            0.4020943033006863, 0.2716715995136073, 0.5239423254183093,
          ],
          frame_index: 3633,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3544798016731998, -2.761304895694418, -0.560582693865331,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [1131.248400565067, 998.5980295852423],
              normalized_projected_pixel: [
                0.8034434663104169, 0.709231555103155,
              ],
              camera_coordinates: [
                0.4020943033006863, 0.2716715995136073, 0.5239423254183093,
              ],
              frame_index: 3633,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3544798016731998, -2.761304895694418, -0.560582693865331,
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
          "The spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:01.1 video 1>; Point=(0.7301, 0.6994)",
          "<TIME 00:02:02.0 video 1>; Point=(0.8752, 0.7304)",
          "<TIME 00:02:03.0 video 1>; Point=(0.7333, 0.6361)",
          "<TIME 00:02:04.0 video 1>; Point=(0.7181, 0.625)",
        ],
        answer_metadata: {
          last_placement_time_sec: 121.1,
          last_placement_time_in_clip_sec: 121.1,
          last_placement_time_token: "<TIME 00:02:01.1 video 1>",
          projected_pixel: [1028.0413113603126, 984.7542511022468],
          normalized_projected_pixel: [0.7301429768184039, 0.6993993260669367],
          camera_coordinates: [
            0.2961974842779398, 0.2503412913762908, 0.5266056981514895,
          ],
          frame_index: 3633,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3544798016731998, -2.761304895694418, -0.560582693865331,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 121.1,
              time_token: "<TIME 00:02:01.1 video 1>",
              projected_pixel: [1028.0413113603126, 984.7542511022468],
              normalized_projected_pixel: [
                0.7301429768184039, 0.6993993260669367,
              ],
              camera_coordinates: [
                0.2961974842779398, 0.2503412913762908, 0.5266056981514895,
              ],
              frame_index: 3633,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3544798016731998, -2.761304895694418, -0.560582693865331,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 122.0,
              time_token: "<TIME 00:02:02.0 video 1>",
              projected_pixel: [1232.289435439379, 1028.425241631372],
              normalized_projected_pixel: [
                0.8752055649427408, 0.7304156545677358,
              ],
              camera_coordinates: [
                0.43986405161582276, 0.265585100838997, 0.4353284944563602,
              ],
              frame_index: 3660,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3544798016731998, -2.761304895694418, -0.560582693865331,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 123.0,
              time_token: "<TIME 00:02:03.0 video 1>",
              projected_pixel: [1032.422014858712, 895.6216352555602],
              normalized_projected_pixel: [
                0.7332542719166988, 0.6360949114030968,
              ],
              camera_coordinates: [
                0.2940263342369107, 0.166775404275175, 0.5241201284048167,
              ],
              frame_index: 3690,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3544798016731998, -2.761304895694418, -0.560582693865331,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 124.0,
              time_token: "<TIME 00:02:04.0 video 1>",
              projected_pixel: [1011.0778021077219, 879.9732130968684],
              normalized_projected_pixel: [
                0.7180950299060526, 0.6249809752108441,
              ],
              camera_coordinates: [
                0.2752426196754225, 0.15300375370431918, 0.52800121117934,
              ],
              frame_index: 3720,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3544798016731998, -2.761304895694418, -0.560582693865331,
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
          "At the current time <TIME 00:02:34.0 video 1>, based on the last known position of the spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 121.1,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the spatula from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 154.0,
            camera_coordinates: [
              0.5454976783801733, 0.3505583461505626, 0.3797369051946747,
            ],
            world_coordinates: [
              -0.3544798016731998, -2.761304895694418, -0.560582693865331,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.5454976783801733,
              z: 0.3797369051946747,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, where is the spatula relative to saucepan from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "f4a201fecc6f8ce8",
            object_x_name: "spatula",
            object_x_reference_time_sec: 154.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3544798016731998, -2.761304895694418, -0.560582693865331,
            ],
            object_x_camera_coordinates: [
              0.5454976783801733, 0.3505583461505626, 0.3797369051946747,
            ],
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_reference_time_sec: 154.0,
            object_y_world_coordinates: [
              -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
            ],
            object_y_projected_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, how far is the spatula from the saucepan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "f4a201fecc6f8ce8",
            object_x_name: "spatula",
            object_x_reference_time_sec: 154.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.4174919706100595, 0.21875745651795686, -0.10253254317507887,
            ],
            distance_m: 0.48235598132087676,
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
  oos_staged_h10p0_3: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "d2f447fb1751d8c4",
    object_a_name: "cheese grater",
    query_time_sec: 154.0,
    query_time_in_clip_sec: 154.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 154.0,
    clip_duration_sec: 154.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "d2f447fb1751d8c4",
      object_name: "cheese grater",
      query_time_sec: 154.0,
      oos_span_start_sec: 144.0,
      oos_span_end_sec: 166.0,
      oos_duration_sec: 22.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 154.0,
      clip_duration_sec: 154.0,
      anchor_assoc_id: "0e817d8e029ec20a",
      anchor_name: "saucepan",
      anchor_projected_pixel: [861.1180282078064, 873.5265328539632],
      anchor_world_coordinates: [
        -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_3",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:34.0 video 1>, is the previously moved cheese grater visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1433.0622681211876, 1165.3082744846563],
          camera_coordinates: [
            0.6550132660844257, 0.40997298095263024, 0.3149459969957696,
          ],
          frame_index: 2921,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cheese grater was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:23.0 video 1>; Point=(0.8949, 0.7076)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 143.0,
          sampled_last_visible_time_in_clip_sec: 143.0,
          sampled_last_visible_time_token: "<TIME 00:02:23.0 video 1>",
          projected_pixel: [1260.0593260324608, 996.3229351320965],
          normalized_projected_pixel: [0.8949284986026, 0.7076157209745003],
          camera_coordinates: [
            0.5410374452251485, 0.2796254251031849, 0.5051496530495616,
          ],
          frame_index: 2921,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.40051648409567925, -2.8932062974524753, -0.5462904354748164,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [1260.0593260324608, 996.3229351320965],
              normalized_projected_pixel: [0.8949284986026, 0.7076157209745003],
              camera_coordinates: [
                0.5410374452251485, 0.2796254251031849, 0.5051496530495616,
              ],
              frame_index: 2921,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.40051648409567925, -2.8932062974524753, -0.5462904354748164,
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
          "The cheese grater was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:37.4 video 1>; Point=(0.6048, 0.7665)",
          "<TIME 00:01:38.0 video 1>; Point=(0.6303, 0.7922)",
          "<TIME 00:01:39.0 video 1>; Point=(0.8641, 0.944)",
        ],
        answer_metadata: {
          last_placement_time_sec: 97.36666666666666,
          last_placement_time_in_clip_sec: 97.36666666666666,
          last_placement_time_token: "<TIME 00:01:37.4 video 1>",
          projected_pixel: [851.6209655133006, 1079.1788984492391],
          normalized_projected_pixel: [0.6048444357338782, 0.7664622858304255],
          camera_coordinates: [
            0.0997581335543214, 0.24297362370258463, 0.3852004472558862,
          ],
          frame_index: 2921,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.40051648409567925, -2.8932062974524753, -0.5462904354748164,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 97.36666666666666,
              time_token: "<TIME 00:01:37.4 video 1>",
              projected_pixel: [851.6209655133006, 1079.1788984492391],
              normalized_projected_pixel: [
                0.6048444357338782, 0.7664622858304255,
              ],
              camera_coordinates: [
                0.0997581335543214, 0.24297362370258463, 0.3852004472558862,
              ],
              frame_index: 2921,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.40051648409567925, -2.8932062974524753, -0.5462904354748164,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 98.0,
              time_token: "<TIME 00:01:38.0 video 1>",
              projected_pixel: [887.4951857980489, 1115.3645649079408],
              normalized_projected_pixel: [
                0.6303232853679325, 0.792162333031208,
              ],
              camera_coordinates: [
                0.12092760000295621, 0.26170839803749596, 0.37191658415268514,
              ],
              frame_index: 2940,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.40051648409567925, -2.8932062974524753, -0.5462904354748164,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 99.0,
              time_token: "<TIME 00:01:39.0 video 1>",
              projected_pixel: [1216.7028926272646, 1329.1417399544302],
              normalized_projected_pixel: [
                0.864135577150046, 0.9439927130358169,
              ],
              camera_coordinates: [
                0.3407281726132818, 0.40975368484962826, 0.23836045148294605,
              ],
              frame_index: 2970,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.40051648409567925, -2.8932062974524753, -0.5462904354748164,
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
          "At the current time <TIME 00:02:34.0 video 1>, based on the last known position of the cheese grater that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area close to the microwave",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 97.36666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the cheese grater that was moved earlier. Using its last known position to infer its current location, in which direction is the cheese grater from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 154.0,
            camera_coordinates: [
              0.6550132660844257, 0.40997298095263024, 0.3149459969957696,
            ],
            world_coordinates: [
              -0.40051648409567925, -2.8932062974524753, -0.5462904354748164,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.6550132660844257,
              z: 0.3149459969957696,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the cheese grater that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, where is the cheese grater relative to saucepan from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "d2f447fb1751d8c4",
            object_x_name: "cheese grater",
            object_x_reference_time_sec: 154.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.40051648409567925, -2.8932062974524753, -0.5462904354748164,
            ],
            object_x_camera_coordinates: [
              0.6550132660844257, 0.40997298095263024, 0.3149459969957696,
            ],
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_reference_time_sec: 154.0,
            object_y_world_coordinates: [
              -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
            ],
            object_y_projected_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the cheese grater that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, how far is the cheese grater from the saucepan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "d2f447fb1751d8c4",
            object_x_name: "cheese grater",
            object_x_reference_time_sec: 154.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.5270075583143119, 0.2781720913200245, -0.16732345137398397,
            ],
            distance_m: 0.6189618859747916,
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
  oos_staged_h10p0_4: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "20321a8dcbf55b59",
    object_a_name: "salt bottle",
    query_time_sec: 154.0,
    query_time_in_clip_sec: 154.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 154.0,
    clip_duration_sec: 154.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "20321a8dcbf55b59",
      object_name: "salt bottle",
      query_time_sec: 154.0,
      oos_span_start_sec: 144.0,
      oos_span_end_sec: 166.0,
      oos_duration_sec: 22.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 154.0,
      clip_duration_sec: 154.0,
      anchor_assoc_id: "af53942bba314e4c",
      anchor_name: "fork",
      anchor_projected_pixel: [1208.0260631085187, 996.6634581810438],
      anchor_world_coordinates: [
        -0.27208595546590536, -2.6048437357122136, -0.550804284408369,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_4",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:34.0 video 1>, is the previously moved salt bottle visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1442.7781147880778, 935.0312324297347],
          camera_coordinates: [
            0.7641018981287944, 0.23541064475135953, 0.3927895991710557,
          ],
          frame_index: 1653,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The salt bottle was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:23.0 video 1>; Point=(0.8455, 0.5646)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 143.0,
          sampled_last_visible_time_in_clip_sec: 143.0,
          sampled_last_visible_time_token: "<TIME 00:02:23.0 video 1>",
          projected_pixel: [1190.4654557933002, 795.0143920570302],
          normalized_projected_pixel: [0.8455010339441053, 0.5646409034495954],
          camera_coordinates: [
            0.5432994531231343, 0.0981446760155007, 0.6296148541775232,
          ],
          frame_index: 1653,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.19407252753361787, -2.93184429713067, -0.4805640097325699,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [1190.4654557933002, 795.0143920570302],
              normalized_projected_pixel: [
                0.8455010339441053, 0.5646409034495954,
              ],
              camera_coordinates: [
                0.5432994531231343, 0.0981446760155007, 0.6296148541775232,
              ],
              frame_index: 1653,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.19407252753361787, -2.93184429713067, -0.4805640097325699,
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
          "The salt bottle was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:55.1 video 1>; Point=(0.7571, 0.6156)",
          "<TIME 00:00:56.0 video 1>; Point=(0.6155, 0.5819)",
          "<TIME 00:00:57.0 video 1>; Point=(0.5954, 0.5809)",
          "<TIME 00:00:58.0 video 1>; Point=(0.5787, 0.5105)",
        ],
        answer_metadata: {
          last_placement_time_sec: 55.1,
          last_placement_time_in_clip_sec: 55.1,
          last_placement_time_token: "<TIME 00:00:55.1 video 1>",
          projected_pixel: [1065.9416932140578, 866.8242624778032],
          normalized_projected_pixel: [0.7570608616577115, 0.6156422318734398],
          camera_coordinates: [
            0.3013538214737652, 0.13172054833407526, 0.4856396221205899,
          ],
          frame_index: 1653,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.19407252753361787, -2.93184429713067, -0.4805640097325699,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 55.1,
              time_token: "<TIME 00:00:55.1 video 1>",
              projected_pixel: [1065.9416932140578, 866.8242624778032],
              normalized_projected_pixel: [
                0.7570608616577115, 0.6156422318734398,
              ],
              camera_coordinates: [
                0.3013538214737652, 0.13172054833407526, 0.4856396221205899,
              ],
              frame_index: 1653,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.19407252753361787, -2.93184429713067, -0.4805640097325699,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 56.0,
              time_token: "<TIME 00:00:56.0 video 1>",
              projected_pixel: [866.5808854142538, 819.2738390650591],
              normalized_projected_pixel: [
                0.6154693788453507, 0.5818706243359795,
              ],
              camera_coordinates: [
                0.15435554632341253, 0.10387870531206395, 0.5638093811692592,
              ],
              frame_index: 1680,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.19407252753361787, -2.93184429713067, -0.4805640097325699,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 57.0,
              time_token: "<TIME 00:00:57.0 video 1>",
              projected_pixel: [838.3803259235153, 817.8387181334875],
              normalized_projected_pixel: [
                0.5954405723888603, 0.5808513623107155,
              ],
              camera_coordinates: [
                0.12046774541307181, 0.09621830726254027, 0.5293524051593883,
              ],
              frame_index: 1710,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.19407252753361787, -2.93184429713067, -0.4805640097325699,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 58.0,
              time_token: "<TIME 00:00:58.0 video 1>",
              projected_pixel: [814.8069691773158, 718.8112770519667],
              normalized_projected_pixel: [
                0.5786981315179799, 0.5105193729062264,
              ],
              camera_coordinates: [
                0.10010507005579683, 0.010749157589577646, 0.5294528133579847,
              ],
              frame_index: 1740,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.19407252753361787, -2.93184429713067, -0.4805640097325699,
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
          "At the current time <TIME 00:02:34.0 video 1>, based on the last known position of the salt bottle that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 55.1,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the salt bottle that was moved earlier. Using its last known position to infer its current location, in which direction is the salt bottle from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 154.0,
            camera_coordinates: [
              0.7641018981287944, 0.23541064475135953, 0.3927895991710557,
            ],
            world_coordinates: [
              -0.19407252753361787, -2.93184429713067, -0.4805640097325699,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7641018981287944,
              z: 0.3927895991710557,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the salt bottle that was moved earlier. Using its last known position to infer its current location, and using the current position of the fork (marked in red) in the current frame, where is the salt bottle relative to fork from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "20321a8dcbf55b59",
            object_x_name: "salt bottle",
            object_x_reference_time_sec: 154.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.19407252753361787, -2.93184429713067, -0.4805640097325699,
            ],
            object_x_camera_coordinates: [
              0.7641018981287944, 0.23541064475135953, 0.3927895991710557,
            ],
            object_y_assoc_id: "af53942bba314e4c",
            object_y_name: "fork",
            object_y_reference_time_sec: 154.0,
            object_y_world_coordinates: [
              -0.27208595546590536, -2.6048437357122136, -0.550804284408369,
            ],
            object_y_projected_pixel: [1208.0260631085187, 996.6634581810438],
            object_y_normalized_projected_pixel: [
              0.8579730561850275, 0.707857569730855,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the salt bottle that was moved earlier. Using its last known position to infer its current location, and using the current position of the fork (marked in red) in the current frame, how far is the salt bottle from the fork: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "20321a8dcbf55b59",
            object_x_name: "salt bottle",
            object_x_reference_time_sec: 154.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "af53942bba314e4c",
            object_y_name: "fork",
            object_y_pixel: [1208.0260631085187, 996.6634581810438],
            object_y_normalized_projected_pixel: [
              0.8579730561850275, 0.707857569730855,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.3377038716255405, -0.007702403869664476, -0.062015533183329086,
            ],
            distance_m: 0.343437269806676,
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
  oos_staged_h10p0_5: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "5896f57aaefbc467",
    object_a_name: "knife",
    query_time_sec: 154.0,
    query_time_in_clip_sec: 154.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 154.0,
    clip_duration_sec: 154.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "5896f57aaefbc467",
      object_name: "knife",
      query_time_sec: 154.0,
      oos_span_start_sec: 144.0,
      oos_span_end_sec: 166.0,
      oos_duration_sec: 22.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 154.0,
      clip_duration_sec: 154.0,
      anchor_assoc_id: "0e817d8e029ec20a",
      anchor_name: "saucepan",
      anchor_projected_pixel: [861.1180282078064, 873.5265328539632],
      anchor_world_coordinates: [
        -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_5",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:34.0 video 1>, is the previously moved knife visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1881.1957615443825, 1384.5810136116122],
          camera_coordinates: [
            0.8567854803975001, 0.495599940543588, 0.3016415511352457,
          ],
          frame_index: 1232,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The knife was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:23.0 video 1>; Point=(0.9533, 0.6797)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 143.0,
          sampled_last_visible_time_in_clip_sec: 143.0,
          sampled_last_visible_time_token: "<TIME 00:02:23.0 video 1>",
          projected_pixel: [1342.2333695734665, 956.9620028602762],
          normalized_projected_pixel: [0.9532907454357006, 0.6796605133950826],
          camera_coordinates: [
            0.7507656060027732, 0.29273976389997447, 0.5688922891105707,
          ],
          frame_index: 1232,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.40035768844041286, -3.1098088712314196, -0.5824056784274153,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [1342.2333695734665, 956.9620028602762],
              normalized_projected_pixel: [
                0.9532907454357006, 0.6796605133950826,
              ],
              camera_coordinates: [
                0.7507656060027732, 0.29273976389997447, 0.5688922891105707,
              ],
              frame_index: 1232,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.40035768844041286, -3.1098088712314196, -0.5824056784274153,
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
          "<TIME 00:00:41.1 video 1>; Point=(0.6237, 0.684)",
          "<TIME 00:00:42.0 video 1>; Point=(0.5524, 0.7577)",
          "<TIME 00:00:43.0 video 1>; Point=(0.5559, 0.7618)",
          "<TIME 00:00:44.0 video 1>; Point=(0.6867, 0.8124)",
        ],
        answer_metadata: {
          last_placement_time_sec: 41.06666666666667,
          last_placement_time_in_clip_sec: 41.06666666666667,
          last_placement_time_token: "<TIME 00:00:41.1 video 1>",
          projected_pixel: [878.2134481654849, 963.006152755264],
          normalized_projected_pixel: [0.6237311421629864, 0.6839532334909545],
          camera_coordinates: [
            0.15673125730329662, 0.22405199203305204, 0.528218882290349,
          ],
          frame_index: 1232,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.40035768844041286, -3.1098088712314196, -0.5824056784274153,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 41.06666666666667,
              time_token: "<TIME 00:00:41.1 video 1>",
              projected_pixel: [878.2134481654849, 963.006152755264],
              normalized_projected_pixel: [
                0.6237311421629864, 0.6839532334909545,
              ],
              camera_coordinates: [
                0.15673125730329662, 0.22405199203305204, 0.528218882290349,
              ],
              frame_index: 1232,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.40035768844041286, -3.1098088712314196, -0.5824056784274153,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 42.0,
              time_token: "<TIME 00:00:42.0 video 1>",
              projected_pixel: [777.7844304928249, 1066.862133046293],
              normalized_projected_pixel: [
                0.552403714838654, 0.7577145831294694,
              ],
              camera_coordinates: [
                0.05788185353898623, 0.26341709922055184, 0.4361964269504091,
              ],
              frame_index: 1260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.40035768844041286, -3.1098088712314196, -0.5824056784274153,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 43.0,
              time_token: "<TIME 00:00:43.0 video 1>",
              projected_pixel: [782.6753645402471, 1072.6010321902781],
              normalized_projected_pixel: [
                0.5558773895882436, 0.761790505816959,
              ],
              camera_coordinates: [
                0.0604650626931158, 0.2632728372090945, 0.4283278570226561,
              ],
              frame_index: 1290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.40035768844041286, -3.1098088712314196, -0.5824056784274153,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 44.0,
              time_token: "<TIME 00:00:44.0 video 1>",
              projected_pixel: [966.8173238219822, 1143.8427117021927],
              normalized_projected_pixel: [
                0.6866600311235669, 0.8123882895612163,
              ],
              camera_coordinates: [
                0.19029568392824459, 0.31025207293923107, 0.4013189183995627,
              ],
              frame_index: 1320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.40035768844041286, -3.1098088712314196, -0.5824056784274153,
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
          "At the current time <TIME 00:02:34.0 video 1>, based on the last known position of the knife that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 41.06666666666667,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.003",
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, in which direction is the knife from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 154.0,
            camera_coordinates: [
              0.8567854803975001, 0.495599940543588, 0.3016415511352457,
            ],
            world_coordinates: [
              -0.40035768844041286, -3.1098088712314196, -0.5824056784274153,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.8567854803975001,
              z: 0.3016415511352457,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, where is the knife relative to saucepan from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "5896f57aaefbc467",
            object_x_name: "knife",
            object_x_reference_time_sec: 154.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.40035768844041286, -3.1098088712314196, -0.5824056784274153,
            ],
            object_x_camera_coordinates: [
              0.8567854803975001, 0.495599940543588, 0.3016415511352457,
            ],
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_reference_time_sec: 154.0,
            object_y_world_coordinates: [
              -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
            ],
            object_y_projected_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, how far is the knife from the saucepan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "5896f57aaefbc467",
            object_x_name: "knife",
            object_x_reference_time_sec: 154.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7287797726273864, 0.3637990509109823, -0.18062789723450784,
            ],
            distance_m: 0.8343237643109036,
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
  oos_staged_h10p0_6: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "0a8eb18592b5f93d",
    object_a_name: "pen",
    query_time_sec: 154.0,
    query_time_in_clip_sec: 154.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 154.0,
    clip_duration_sec: 154.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "0a8eb18592b5f93d",
      object_name: "pen",
      query_time_sec: 154.0,
      oos_span_start_sec: 144.0,
      oos_span_end_sec: 166.0,
      oos_duration_sec: 22.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 154.0,
      clip_duration_sec: 154.0,
      anchor_assoc_id: "0e817d8e029ec20a",
      anchor_name: "saucepan",
      anchor_projected_pixel: [861.1180282078064, 873.5265328539632],
      anchor_world_coordinates: [
        -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_6",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:34.0 video 1>, is the previously moved pen visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [2155.6107108465035, 1412.15561616396],
          camera_coordinates: [
            1.069909975537864, 0.5265269062654658, 0.3369415404212172,
          ],
          frame_index: 1319,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pen was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:23.0 video 1>; Point=(0.9685, 0.6335)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 143.0,
          sampled_last_visible_time_in_clip_sec: 143.0,
          sampled_last_visible_time_token: "<TIME 00:02:23.0 video 1>",
          projected_pixel: [1363.6460018017956, 891.9214901590883],
          normalized_projected_pixel: [0.968498580825139, 0.6334669674425343],
          camera_coordinates: [
            0.9329963440302351, 0.26090851108801866, 0.6846651112389732,
          ],
          frame_index: 1319,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.32747035365180366, -3.3125558816875063, -0.6171289135837121,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [1363.6460018017956, 891.9214901590883],
              normalized_projected_pixel: [
                0.968498580825139, 0.6334669674425343,
              ],
              camera_coordinates: [
                0.9329963440302351, 0.26090851108801866, 0.6846651112389732,
              ],
              frame_index: 1319,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.32747035365180366, -3.3125558816875063, -0.6171289135837121,
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
          "The pen was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:44.0 video 1>; Point=(0.8568, 0.7707)",
          "<TIME 00:00:44.0 video 1>; Point=(0.86, 0.7763)",
          "<TIME 00:00:45.0 video 1>; Point=(0.8945, 0.8381)",
          "<TIME 00:00:46.0 video 1>; Point=(2.837, 2.234)",
        ],
        answer_metadata: {
          last_placement_time_sec: 43.96666666666667,
          last_placement_time_in_clip_sec: 43.96666666666667,
          last_placement_time_token: "<TIME 00:00:44.0 video 1>",
          projected_pixel: [1206.3787923600892, 1085.1204245803242],
          normalized_projected_pixel: [0.856803119573927, 0.7706821197303438],
          camera_coordinates: [
            0.40568418619115976, 0.3027033306205651, 0.41804269617552126,
          ],
          frame_index: 1319,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.32747035365180366, -3.3125558816875063, -0.6171289135837121,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 43.96666666666667,
              time_token: "<TIME 00:00:44.0 video 1>",
              projected_pixel: [1206.3787923600892, 1085.1204245803242],
              normalized_projected_pixel: [
                0.856803119573927, 0.7706821197303438,
              ],
              camera_coordinates: [
                0.40568418619115976, 0.3027033306205651, 0.41804269617552126,
              ],
              frame_index: 1319,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.32747035365180366, -3.3125558816875063, -0.6171289135837121,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 44.0,
              time_token: "<TIME 00:00:44.0 video 1>",
              projected_pixel: [1210.8974545040355, 1093.0933082020458],
              normalized_projected_pixel: [
                0.860012396664798, 0.7763446791207712,
              ],
              camera_coordinates: [
                0.40817674263018766, 0.30823334772955735, 0.41350029306070035,
              ],
              frame_index: 1320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.32747035365180366, -3.3125558816875063, -0.6171289135837121,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 45.0,
              time_token: "<TIME 00:00:45.0 video 1>",
              projected_pixel: [1259.4788114178164, 1180.0987879063478],
              normalized_projected_pixel: [
                0.8945162012910628, 0.8381383436834856,
              ],
              camera_coordinates: [
                0.44286793734914687, 0.3742462218669711, 0.3481281370480931,
              ],
              frame_index: 1350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.32747035365180366, -3.3125558816875063, -0.6171289135837121,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 46.0,
              time_token: "<TIME 00:00:46.0 video 1>",
              projected_pixel: [3994.503111508826, 3145.4994416454397],
              normalized_projected_pixel: [
                2.837005050787518, 2.2340194898049996,
              ],
              camera_coordinates: [
                0.5498825487557799, 0.503455787166722, 0.14557157049255576,
              ],
              frame_index: 1380,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.32747035365180366, -3.3125558816875063, -0.6171289135837121,
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
          "At the current time <TIME 00:02:34.0 video 1>, based on the last known position of the pen that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 43.96666666666667,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.003",
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the pen that was moved earlier. Using its last known position to infer its current location, in which direction is the pen from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 154.0,
            camera_coordinates: [
              1.069909975537864, 0.5265269062654658, 0.3369415404212172,
            ],
            world_coordinates: [
              -0.32747035365180366, -3.3125558816875063, -0.6171289135837121,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.069909975537864,
              z: 0.3369415404212172,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the pen that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, where is the pen relative to saucepan from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "0a8eb18592b5f93d",
            object_x_name: "pen",
            object_x_reference_time_sec: 154.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.32747035365180366, -3.3125558816875063, -0.6171289135837121,
            ],
            object_x_camera_coordinates: [
              1.069909975537864, 0.5265269062654658, 0.3369415404212172,
            ],
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_reference_time_sec: 154.0,
            object_y_world_coordinates: [
              -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
            ],
            object_y_projected_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the pen that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, how far is the pen from the saucepan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "0a8eb18592b5f93d",
            object_x_name: "pen",
            object_x_reference_time_sec: 154.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9419042677677503, 0.3947260166328601, -0.14532790794853634,
            ],
            distance_m: 1.0315582769163578,
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
  oos_staged_h10p0_7: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "250fd6c1df977def",
    object_a_name: "notepad",
    query_time_sec: 154.0,
    query_time_in_clip_sec: 154.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 154.0,
    clip_duration_sec: 154.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "250fd6c1df977def",
      object_name: "notepad",
      query_time_sec: 154.0,
      oos_span_start_sec: 144.0,
      oos_span_end_sec: 166.0,
      oos_duration_sec: 22.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 154.0,
      clip_duration_sec: 154.0,
      anchor_assoc_id: "0e817d8e029ec20a",
      anchor_name: "saucepan",
      anchor_projected_pixel: [861.1180282078064, 873.5265328539632],
      anchor_world_coordinates: [
        -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_7",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:34.0 video 1>, is the previously moved notepad visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [2288.7667689229556, 1554.3685664983668],
          camera_coordinates: [
            0.9363783677154041, 0.5100865357144762, 0.28808523461501034,
          ],
          frame_index: 191,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The notepad was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:23.0 video 1>; Point=(0.9716, 0.661)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 143.0,
          sampled_last_visible_time_in_clip_sec: 143.0,
          sampled_last_visible_time_token: "<TIME 00:02:23.0 video 1>",
          projected_pixel: [1368.051437725264, 930.6527336018455],
          normalized_projected_pixel: [0.9716274415662386, 0.6609749528422199],
          camera_coordinates: [
            0.8293557044460345, 0.2783867282270749, 0.5875000741075415,
          ],
          frame_index: 191,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [1368.051437725264, 930.6527336018455],
              normalized_projected_pixel: [
                0.9716274415662386, 0.6609749528422199,
              ],
              camera_coordinates: [
                0.8293557044460345, 0.2783867282270749, 0.5875000741075415,
              ],
              frame_index: 191,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
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
          "The notepad was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:06.4 video 1>; Point=(0.6337, 0.7479)",
          "<TIME 00:00:07.0 video 1>; Point=(0.6494, 0.7288)",
          "<TIME 00:00:08.0 video 1>; Point=(0.6607, 0.7204)",
          "<TIME 00:00:09.0 video 1>; Point=(0.6623, 0.7276)",
        ],
        answer_metadata: {
          last_placement_time_sec: 6.366666666666666,
          last_placement_time_in_clip_sec: 6.366666666666666,
          last_placement_time_token: "<TIME 00:00:06.4 video 1>",
          projected_pixel: [892.2426151170553, 1053.0275884198368],
          normalized_projected_pixel: [0.6336950391456359, 0.7478889122299978],
          camera_coordinates: [
            0.14580052295455959, 0.26099181610402444, 0.44587349300497364,
          ],
          frame_index: 191,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 6.366666666666666,
              time_token: "<TIME 00:00:06.4 video 1>",
              projected_pixel: [892.2426151170553, 1053.0275884198368],
              normalized_projected_pixel: [
                0.6336950391456359, 0.7478889122299978,
              ],
              camera_coordinates: [
                0.14580052295455959, 0.26099181610402444, 0.44587349300497364,
              ],
              frame_index: 191,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 7.0,
              time_token: "<TIME 00:00:07.0 video 1>",
              projected_pixel: [914.3409495767265, 1026.1759917087034],
              normalized_projected_pixel: [
                0.6493898789607433, 0.7288181759294768,
              ],
              camera_coordinates: [
                0.15752959225089214, 0.23353136560262905, 0.4339890160652262,
              ],
              frame_index: 210,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 8.0,
              time_token: "<TIME 00:00:08.0 video 1>",
              projected_pixel: [930.3318957990102, 1014.2750497799739],
              normalized_projected_pixel: [
                0.6607470850845243, 0.7203658024005496,
              ],
              camera_coordinates: [
                0.1703173630600454, 0.22632814220490982, 0.43693041427316526,
              ],
              frame_index: 240,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 9.0,
              time_token: "<TIME 00:00:09.0 video 1>",
              projected_pixel: [932.5105079461744, 1024.4459479533336],
              normalized_projected_pixel: [
                0.6622943948481352, 0.7275894516714018,
              ],
              camera_coordinates: [
                0.17343585241588055, 0.23585621898408848, 0.43949587046087063,
              ],
              frame_index: 270,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
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
          "At the current time <TIME 00:02:34.0 video 1>, based on the last known position of the notepad that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 6.366666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.003",
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the notepad that was moved earlier. Using its last known position to infer its current location, in which direction is the notepad from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 154.0,
            camera_coordinates: [
              0.9363783677154041, 0.5100865357144762, 0.28808523461501034,
            ],
            world_coordinates: [
              -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.9363783677154041,
              z: 0.28808523461501034,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the notepad that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, where is the notepad relative to saucepan from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "250fd6c1df977def",
            object_x_name: "notepad",
            object_x_reference_time_sec: 154.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
            ],
            object_x_camera_coordinates: [
              0.9363783677154041, 0.5100865357144762, 0.28808523461501034,
            ],
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_reference_time_sec: 154.0,
            object_y_world_coordinates: [
              -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
            ],
            object_y_projected_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the notepad that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, how far is the notepad from the saucepan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "250fd6c1df977def",
            object_x_name: "notepad",
            object_x_reference_time_sec: 154.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8083726599452903, 0.37828564608187043, -0.1941842137547432,
            ],
            distance_m: 0.9133859514193055,
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
  oos_staged_h10p0_8: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "4f3cf7402f66f83e",
    object_a_name: "scale",
    query_time_sec: 154.0,
    query_time_in_clip_sec: 154.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 154.0,
    clip_duration_sec: 154.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "4f3cf7402f66f83e",
      object_name: "scale",
      query_time_sec: 154.0,
      oos_span_start_sec: 144.0,
      oos_span_end_sec: 166.0,
      oos_duration_sec: 22.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 154.0,
      clip_duration_sec: 154.0,
      anchor_assoc_id: "0e817d8e029ec20a",
      anchor_name: "saucepan",
      anchor_projected_pixel: [861.1180282078064, 873.5265328539632],
      anchor_world_coordinates: [
        -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_8",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:34.0 video 1>, is the previously moved scale visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1445.6318155655908, 1129.202727511596],
          camera_coordinates: [
            0.7332296597941175, 0.4157606829175684, 0.3471085435613608,
          ],
          frame_index: 1674,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The scale was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:23.0 video 1>; Point=(0.8961, 0.6794)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 143.0,
          sampled_last_visible_time_in_clip_sec: 143.0,
          sampled_last_visible_time_token: "<TIME 00:02:23.0 video 1>",
          projected_pixel: [1261.664593602026, 956.6175373224988],
          normalized_projected_pixel: [0.8960686034105297, 0.6794158645756384],
          camera_coordinates: [
            0.5990813358076053, 0.2665080141634826, 0.5655199390921094,
          ],
          frame_index: 1674,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [1261.664593602026, 956.6175373224988],
              normalized_projected_pixel: [
                0.8960686034105297, 0.6794158645756384,
              ],
              camera_coordinates: [
                0.5990813358076053, 0.2665080141634826, 0.5655199390921094,
              ],
              frame_index: 1674,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
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
          "The scale was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:55.8 video 1>; Point=(0.7165, 0.7264)",
          "<TIME 00:00:56.0 video 1>; Point=(0.6832, 0.7236)",
          "<TIME 00:00:57.0 video 1>; Point=(0.6542, 0.7397)",
          "<TIME 00:00:58.0 video 1>; Point=(0.6436, 0.6607)",
        ],
        answer_metadata: {
          last_placement_time_sec: 55.8,
          last_placement_time_in_clip_sec: 55.8,
          last_placement_time_token: "<TIME 00:00:55.8 video 1>",
          projected_pixel: [1008.8196173154513, 1022.7440759798324],
          normalized_projected_pixel: [0.7164912054797239, 0.7263807357811309],
          camera_coordinates: [
            0.25773125541945463, 0.2628613086353417, 0.4844334461682096,
          ],
          frame_index: 1674,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 55.8,
              time_token: "<TIME 00:00:55.8 video 1>",
              projected_pixel: [1008.8196173154513, 1022.7440759798324],
              normalized_projected_pixel: [
                0.7164912054797239, 0.7263807357811309,
              ],
              camera_coordinates: [
                0.25773125541945463, 0.2628613086353417, 0.4844334461682096,
              ],
              frame_index: 1674,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 56.0,
              time_token: "<TIME 00:00:56.0 video 1>",
              projected_pixel: [961.9817759867665, 1018.8685066631023],
              normalized_projected_pixel: [
                0.6832256931724193, 0.7236282007550442,
              ],
              camera_coordinates: [
                0.22652424758380407, 0.26878753366817393, 0.5075710748597193,
              ],
              frame_index: 1680,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 57.0,
              time_token: "<TIME 00:00:57.0 video 1>",
              projected_pixel: [921.0595098346085, 1041.49288812536],
              normalized_projected_pixel: [
                0.6541615836893526, 0.739696653498125,
              ],
              camera_coordinates: [
                0.17654382278295522, 0.26594955348431204, 0.469246100907893,
              ],
              frame_index: 1710,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 58.0,
              time_token: "<TIME 00:00:58.0 video 1>",
              projected_pixel: [906.2462679772758, 930.2197686762596],
              normalized_projected_pixel: [
                0.6436408153247698, 0.6606674493439344,
              ],
              camera_coordinates: [
                0.16932772162252263, 0.18264291212458342, 0.49442779558649674,
              ],
              frame_index: 1740,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
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
          "At the current time <TIME 00:02:34.0 video 1>, based on the last known position of the scale that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area below the boiler",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 55.8,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the scale that was moved earlier. Using its last known position to infer its current location, in which direction is the scale from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 154.0,
            camera_coordinates: [
              0.7332296597941175, 0.4157606829175684, 0.3471085435613608,
            ],
            world_coordinates: [
              -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7332296597941175,
              z: 0.3471085435613608,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the scale that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, where is the scale relative to saucepan from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "4f3cf7402f66f83e",
            object_x_name: "scale",
            object_x_reference_time_sec: 154.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
            ],
            object_x_camera_coordinates: [
              0.7332296597941175, 0.4157606829175684, 0.3471085435613608,
            ],
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_reference_time_sec: 154.0,
            object_y_world_coordinates: [
              -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
            ],
            object_y_projected_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the scale that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, how far is the scale from the saucepan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "4f3cf7402f66f83e",
            object_x_name: "scale",
            object_x_reference_time_sec: 154.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6052239520240037, 0.2839597932849627, -0.13516090480839277,
            ],
            distance_m: 0.6820540055557299,
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
  oos_staged_h10p0_9: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "75fa7d416006e42b",
    object_a_name: "cheese block",
    query_time_sec: 154.0,
    query_time_in_clip_sec: 154.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 154.0,
    clip_duration_sec: 154.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "75fa7d416006e42b",
      object_name: "cheese block",
      query_time_sec: 154.0,
      oos_span_start_sec: 144.0,
      oos_span_end_sec: 166.0,
      oos_duration_sec: 22.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 154.0,
      clip_duration_sec: 154.0,
      anchor_assoc_id: "0e817d8e029ec20a",
      anchor_name: "saucepan",
      anchor_projected_pixel: [861.1180282078064, 873.5265328539632],
      anchor_world_coordinates: [
        -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_9",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:34.0 video 1>, is the previously moved cheese block visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1456.407166435381, 1091.440790579604],
          camera_coordinates: [
            0.7134530371090284, 0.36323485317817616, 0.3336682144252449,
          ],
          frame_index: 2955,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cheese block was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:23.0 video 1>; Point=(0.8923, 0.656)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 143.0,
          sampled_last_visible_time_in_clip_sec: 143.0,
          sampled_last_visible_time_token: "<TIME 00:02:23.0 video 1>",
          projected_pixel: [1256.4068222763776, 923.7109214898625],
          normalized_projected_pixel: [0.892334390821291, 0.6560446885581409],
          camera_coordinates: [
            0.5675430197986473, 0.2213781787212324, 0.5482181294121466,
          ],
          frame_index: 2955,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3368440629170838, -2.931444594219911, -0.5254616982992988,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [1256.4068222763776, 923.7109214898625],
              normalized_projected_pixel: [
                0.892334390821291, 0.6560446885581409,
              ],
              camera_coordinates: [
                0.5675430197986473, 0.2213781787212324, 0.5482181294121466,
              ],
              frame_index: 2955,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3368440629170838, -2.931444594219911, -0.5254616982992988,
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
          "The cheese block was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:38.5 video 1>; Point=(0.6817, 0.7378)",
          "<TIME 00:01:39.0 video 1>; Point=(0.9212, 0.8879)",
        ],
        answer_metadata: {
          last_placement_time_sec: 98.5,
          last_placement_time_in_clip_sec: 98.5,
          last_placement_time_token: "<TIME 00:01:38.5 video 1>",
          projected_pixel: [959.8690984547735, 1038.8193327298281],
          normalized_projected_pixel: [0.6817252119707198, 0.7377978215410711],
          camera_coordinates: [
            0.17176970960958737, 0.21856536102421575, 0.3861038151720235,
          ],
          frame_index: 2955,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3368440629170838, -2.931444594219911, -0.5254616982992988,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 98.5,
              time_token: "<TIME 00:01:38.5 video 1>",
              projected_pixel: [959.8690984547735, 1038.8193327298281],
              normalized_projected_pixel: [
                0.6817252119707198, 0.7377978215410711,
              ],
              camera_coordinates: [
                0.17176970960958737, 0.21856536102421575, 0.3861038151720235,
              ],
              frame_index: 2955,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3368440629170838, -2.931444594219911, -0.5254616982992988,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 99.0,
              time_token: "<TIME 00:01:39.0 video 1>",
              projected_pixel: [1297.115865951644, 1250.1827749594793],
              normalized_projected_pixel: [
                0.9212470638861109, 0.8879139026700847,
              ],
              camera_coordinates: [
                0.40568031150217987, 0.36888631908935643, 0.24618725928173157,
              ],
              frame_index: 2970,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3368440629170838, -2.931444594219911, -0.5254616982992988,
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
          "At the current time <TIME 00:02:34.0 video 1>, based on the last known position of the cheese block that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 98.5,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the cheese block that was moved earlier. Using its last known position to infer its current location, in which direction is the cheese block from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 154.0,
            camera_coordinates: [
              0.7134530371090284, 0.36323485317817616, 0.3336682144252449,
            ],
            world_coordinates: [
              -0.3368440629170838, -2.931444594219911, -0.5254616982992988,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7134530371090284,
              z: 0.3336682144252449,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the cheese block that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, where is the cheese block relative to saucepan from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "75fa7d416006e42b",
            object_x_name: "cheese block",
            object_x_reference_time_sec: 154.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3368440629170838, -2.931444594219911, -0.5254616982992988,
            ],
            object_x_camera_coordinates: [
              0.7134530371090284, 0.36323485317817616, 0.3336682144252449,
            ],
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_reference_time_sec: 154.0,
            object_y_world_coordinates: [
              -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
            ],
            object_y_projected_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
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
            "At the current time <TIME 00:02:34.0 video 1>, consider the cheese block that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, how far is the cheese block from the saucepan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "75fa7d416006e42b",
            object_x_name: "cheese block",
            object_x_reference_time_sec: 154.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_pixel: [861.1180282078064, 873.5265328539632],
            object_y_normalized_projected_pixel: [
              0.611589508670317, 0.6204023670837807,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.5854473293389146, 0.23143396354557044, -0.14860123394450864,
            ],
            distance_m: 0.6468327308062809,
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
  oos_staged_h10p0_10: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "75467a6c947c4da1",
    object_a_name: "cupboard",
    query_time_sec: 358.0,
    query_time_in_clip_sec: 358.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 358.0,
    clip_duration_sec: 358.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "75467a6c947c4da1",
      object_name: "cupboard",
      query_time_sec: 358.0,
      oos_span_start_sec: 348.0,
      oos_span_end_sec: 387.0,
      oos_duration_sec: 39.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_cupboard.008",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 358.0,
      clip_duration_sec: 358.0,
      anchor_assoc_id: "24a3c683c389b867",
      anchor_name: "handful of cheese",
      anchor_projected_pixel: [872.1138169019964, 983.9443457313407],
      anchor_world_coordinates: [
        -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_10",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:58.0 video 1>, is the previously moved cupboard visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [4614.903284845116, -1118.9512005867346],
          camera_coordinates: [
            0.5720421634230615, -0.2779662071797965, 0.12426854251447372,
          ],
          frame_index: 8419,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cupboard was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:47.0 video 1>; Point=(0.8147, 0.2244)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 347.0,
          sampled_last_visible_time_in_clip_sec: 347.0,
          sampled_last_visible_time_token: "<TIME 00:05:47.0 video 1>",
          projected_pixel: [1147.0645201824627, 315.94851753928265],
          normalized_projected_pixel: [0.8146765058114082, 0.2243952539341496],
          camera_coordinates: [
            0.35811909063345126, -0.31119465281362557, 0.4314358950881503,
          ],
          frame_index: 8419,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_cupboard.008",
          world_coordinates: [
            -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 347.0,
              time_token: "<TIME 00:05:47.0 video 1>",
              projected_pixel: [1147.0645201824627, 315.94851753928265],
              normalized_projected_pixel: [
                0.8146765058114082, 0.2243952539341496,
              ],
              camera_coordinates: [
                0.35811909063345126, -0.31119465281362557, 0.4314358950881503,
              ],
              frame_index: 8419,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
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
          "The cupboard was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:40.6 video 1>; Point=(0.2575, 0.1717)",
          "<TIME 00:04:41.0 video 1>; Point=(0.2442, 0.1251)",
          "<TIME 00:04:42.0 video 1>; Point=(0.2801, -0.0782)",
          "<TIME 00:04:43.0 video 1>; Point=(0.3285, -0.2868)",
        ],
        answer_metadata: {
          last_placement_time_sec: 280.6333333333333,
          last_placement_time_in_clip_sec: 280.6333333333333,
          last_placement_time_token: "<TIME 00:04:40.6 video 1>",
          projected_pixel: [362.4941112505473, 241.74155280651183],
          normalized_projected_pixel: [0.2574532040131728, 0.1716914437546249],
          camera_coordinates: [
            -0.19068230536356756, -0.26367854994617396, 0.31056443690521757,
          ],
          frame_index: 8419,
          status: "last_past_track_end",
          fixture: "P01_cupboard.008",
          world_coordinates: [
            -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 280.6333333333333,
              time_token: "<TIME 00:04:40.6 video 1>",
              projected_pixel: [362.4941112505473, 241.74155280651183],
              normalized_projected_pixel: [
                0.2574532040131728, 0.1716914437546249,
              ],
              camera_coordinates: [
                -0.19068230536356756, -0.26367854994617396, 0.31056443690521757,
              ],
              frame_index: 8419,
              status: "last_past_track_end",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 281.0,
              time_token: "<TIME 00:04:41.0 video 1>",
              projected_pixel: [343.8675255069183, 176.11128908334445],
              normalized_projected_pixel: [
                0.24422409482025448, 0.12507904054214805,
              ],
              camera_coordinates: [
                -0.17256863115172738, -0.2580488254086322, 0.25322579168112824,
              ],
              frame_index: 8430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 282.0,
              time_token: "<TIME 00:04:42.0 video 1>",
              projected_pixel: [394.4486783280184, -110.06756958684844],
              normalized_projected_pixel: [
                0.28014820903978577, -0.07817298976338667,
              ],
              camera_coordinates: [
                -0.11168653852072641, -0.2998057752040772, 0.12942572427373716,
              ],
              frame_index: 8460,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 283.0,
              time_token: "<TIME 00:04:43.0 video 1>",
              projected_pixel: [462.4770328525527, -403.8270511718663],
              normalized_projected_pixel: [
                0.32846380174186984, -0.2868089852072914,
              ],
              camera_coordinates: [
                -0.06752022149477943, -0.3157647066773665, 0.10774915858986929,
              ],
              frame_index: 8490,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
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
          "At the current time <TIME 00:05:58.0 video 1>, based on the last known position of the cupboard that was moved earlier, which fixture type is closest to it?",
        choices: ["hook", "fridgefreezer", "cupboard", "counter", "drawer"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 280.6333333333333,
          correct_fixture: "cupboard",
          display_correct_answer: "cupboard",
          raw_correct_fixture: "P01_cupboard.008",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "drawer",
            "fridgefreezer",
            "hob",
            "hook",
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
            "At the current time <TIME 00:05:58.0 video 1>, consider the cupboard that was moved earlier. Using its last known position to infer its current location, in which direction is the cupboard from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 358.0,
            camera_coordinates: [
              0.5720421634230615, -0.2779662071797965, 0.12426854251447372,
            ],
            world_coordinates: [
              -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.5720421634230615,
              z: 0.12426854251447372,
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
            "At the current time <TIME 00:05:58.0 video 1>, consider the cupboard that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, where is the cupboard relative to handful of cheese from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "75467a6c947c4da1",
            object_x_name: "cupboard",
            object_x_reference_time_sec: 358.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
            ],
            object_x_camera_coordinates: [
              0.5720421634230615, -0.2779662071797965, 0.12426854251447372,
            ],
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_reference_time_sec: 358.0,
            object_y_world_coordinates: [
              -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
            ],
            object_y_projected_pixel: [872.1138169019964, 983.9443457313407],
            object_y_normalized_projected_pixel: [
              0.619399017686077, 0.6988241091841908,
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
            "At the current time <TIME 00:05:58.0 video 1>, consider the cupboard that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, how far is the cupboard from the handful of cheese: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "75467a6c947c4da1",
            object_x_name: "cupboard",
            object_x_reference_time_sec: 358.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_pixel: [872.1138169019964, 983.9443457313407],
            object_y_normalized_projected_pixel: [
              0.619399017686077, 0.6988241091841908,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.4429427443398808, -0.48457004136120985, -0.32476677796515857,
            ],
            distance_m: 0.7324478546750071,
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
  oos_staged_h10p0_11: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "a1219e6aa5769241",
    object_a_name: "packet of butter",
    query_time_sec: 359.0,
    query_time_in_clip_sec: 359.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 359.0,
    clip_duration_sec: 359.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "a1219e6aa5769241",
      object_name: "packet of butter",
      query_time_sec: 359.0,
      oos_span_start_sec: 349.0,
      oos_span_end_sec: 387.0,
      oos_duration_sec: 38.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 359.0,
      clip_duration_sec: 359.0,
      anchor_assoc_id: "0e817d8e029ec20a",
      anchor_name: "saucepan",
      anchor_projected_pixel: [833.1318964099347, 946.2038137265445],
      anchor_world_coordinates: [
        -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_11",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:59.0 video 1>, is the previously moved packet of butter visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1737.2970440775796, 1297.5076372428332],
          camera_coordinates: [
            0.5519962098457363, 0.3159026165336679, 0.2066498617480625,
          ],
          frame_index: 9443,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The packet of butter was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:47.0 video 1>; Point=(0.897, 0.7479)",
          "<TIME 00:05:48.0 video 1>; Point=(0.8299, 0.8621)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 348.0,
          sampled_last_visible_time_in_clip_sec: 348.0,
          sampled_last_visible_time_token: "<TIME 00:05:48.0 video 1>",
          projected_pixel: [1168.4838619897241, 1213.904039624401],
          normalized_projected_pixel: [0.8298891065267927, 0.8621477554150576],
          camera_coordinates: [
            0.27575066987754626, 0.2978760650060631, 0.28528682111956305,
          ],
          frame_index: 9443,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.5427284287843342, -2.7511280453422144, -0.46475158016949636,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 347.0,
              time_token: "<TIME 00:05:47.0 video 1>",
              projected_pixel: [1262.9405167405887, 1053.0348787071202],
              normalized_projected_pixel: [
                0.8969747988214408, 0.7478940899908525,
              ],
              camera_coordinates: [
                0.4589373158364869, 0.2821001520897598, 0.41272371233354965,
              ],
              frame_index: 9443,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.5427284287843342, -2.7511280453422144, -0.46475158016949636,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 348.0,
              time_token: "<TIME 00:05:48.0 video 1>",
              projected_pixel: [1168.4838619897241, 1213.904039624401],
              normalized_projected_pixel: [
                0.8298891065267927, 0.8621477554150576,
              ],
              camera_coordinates: [
                0.27575066987754626, 0.2978760650060631, 0.28528682111956305,
              ],
              frame_index: 9443,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.5427284287843342, -2.7511280453422144, -0.46475158016949636,
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
          "The packet of butter was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:14.8 video 1>; Point=(0.4492, 0.896)",
          "<TIME 00:05:15.0 video 1>; Point=(0.4497, 0.9016)",
          "<TIME 00:05:16.0 video 1>; Point=(0.3265, 0.9911)",
          "<TIME 00:05:17.0 video 1>; Point=(0.1235, 0.8997)",
        ],
        answer_metadata: {
          last_placement_time_sec: 314.76666666666665,
          last_placement_time_in_clip_sec: 314.76666666666665,
          last_placement_time_token: "<TIME 00:05:14.8 video 1>",
          projected_pixel: [632.442181751911, 1261.5041782263663],
          normalized_projected_pixel: [0.4491776859033459, 0.8959546720357715],
          camera_coordinates: [
            -0.03269159350383699, 0.2759081069108764, 0.2741475890804182,
          ],
          frame_index: 9443,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.5427284287843342, -2.7511280453422144, -0.46475158016949636,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 314.76666666666665,
              time_token: "<TIME 00:05:14.8 video 1>",
              projected_pixel: [632.442181751911, 1261.5041782263663],
              normalized_projected_pixel: [
                0.4491776859033459, 0.8959546720357715,
              ],
              camera_coordinates: [
                -0.03269159350383699, 0.2759081069108764, 0.2741475890804182,
              ],
              frame_index: 9443,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.5427284287843342, -2.7511280453422144, -0.46475158016949636,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 315.0,
              time_token: "<TIME 00:05:15.0 video 1>",
              projected_pixel: [633.2160946759079, 1269.4923222026941],
              normalized_projected_pixel: [
                0.4497273399686846, 0.9016280697462317,
              ],
              camera_coordinates: [
                -0.032229734125954757, 0.27925480659511603, 0.2722483361803505,
              ],
              frame_index: 9450,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.5427284287843342, -2.7511280453422144, -0.46475158016949636,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 316.0,
              time_token: "<TIME 00:05:16.0 video 1>",
              projected_pixel: [459.76599512161977, 1395.5309752314656],
              normalized_projected_pixel: [
                0.32653834880796856, 0.991144158545075,
              ],
              camera_coordinates: [
                -0.11619253665686413, 0.33627316153918096, 0.2167568984035182,
              ],
              frame_index: 9480,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.5427284287843342, -2.7511280453422144, -0.46475158016949636,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 317.0,
              time_token: "<TIME 00:05:17.0 video 1>",
              projected_pixel: [173.9546585019258, 1266.8379852177336],
              normalized_projected_pixel: [
                0.12354734268602684, 0.8997428872285039,
              ],
              camera_coordinates: [
                -0.3092907307737751, 0.3311494292591428, 0.23005748396999276,
              ],
              frame_index: 9510,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.5427284287843342, -2.7511280453422144, -0.46475158016949636,
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
          "At the current time <TIME 00:05:59.0 video 1>, based on the last known position of the packet of butter that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 314.76666666666665,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:05:59.0 video 1>, consider the packet of butter that was moved earlier. Using its last known position to infer its current location, in which direction is the packet of butter from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 359.0,
            camera_coordinates: [
              0.5519962098457363, 0.3159026165336679, 0.2066498617480625,
            ],
            world_coordinates: [
              -0.5427284287843342, -2.7511280453422144, -0.46475158016949636,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.5519962098457363,
              z: 0.2066498617480625,
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
            "At the current time <TIME 00:05:59.0 video 1>, consider the packet of butter that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, where is the packet of butter relative to saucepan from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "a1219e6aa5769241",
            object_x_name: "packet of butter",
            object_x_reference_time_sec: 359.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.5427284287843342, -2.7511280453422144, -0.46475158016949636,
            ],
            object_x_camera_coordinates: [
              0.5519962098457363, 0.3159026165336679, 0.2066498617480625,
            ],
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_reference_time_sec: 359.0,
            object_y_world_coordinates: [
              -0.2777754105527897, -2.2874269723666405, -0.513429296517673,
            ],
            object_y_projected_pixel: [833.1318964099347, 946.2038137265445],
            object_y_normalized_projected_pixel: [
              0.5917129946093286, 0.6720197540671481,
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
            "At the current time <TIME 00:05:59.0 video 1>, consider the packet of butter that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan (marked in red) in the current frame, how far is the packet of butter from the saucepan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "a1219e6aa5769241",
            object_x_name: "packet of butter",
            object_x_reference_time_sec: 359.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0e817d8e029ec20a",
            object_y_name: "saucepan",
            object_y_pixel: [833.1318964099347, 946.2038137265445],
            object_y_normalized_projected_pixel: [
              0.5917129946093286, 0.6720197540671481,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.4480067139945749, 0.13035896465190944, -0.26435739363264077,
            ],
            distance_m: 0.5362726051343455,
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
  oos_staged_h10p0_12: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "250fd6c1df977def",
    object_a_name: "notepad",
    query_time_sec: 359.0,
    query_time_in_clip_sec: 359.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 359.0,
    clip_duration_sec: 359.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "250fd6c1df977def",
      object_name: "notepad",
      query_time_sec: 359.0,
      oos_span_start_sec: 349.0,
      oos_span_end_sec: 387.0,
      oos_duration_sec: 38.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 359.0,
      clip_duration_sec: 359.0,
      anchor_assoc_id: "af53942bba314e4c",
      anchor_name: "fork",
      anchor_projected_pixel: [1128.4032774968216, 927.170552860302],
      anchor_world_coordinates: [
        -0.2293173630570628, -2.582055114787768, -0.6013844140673673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_12",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:59.0 video 1>, is the previously moved notepad visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1743.5155291560047, 999.723912989333],
          camera_coordinates: [
            1.004970936142247, 0.2840889088565737, 0.3578915056863304,
          ],
          frame_index: 191,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The notepad was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:47.0 video 1>; Point=(0.9042, 0.6155)",
          "<TIME 00:05:48.0 video 1>; Point=(0.9562, 0.6655)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 348.0,
          sampled_last_visible_time_in_clip_sec: 348.0,
          sampled_last_visible_time_token: "<TIME 00:05:48.0 video 1>",
          projected_pixel: [1346.3788047177588, 937.0764756450774],
          normalized_projected_pixel: [0.9562349465324992, 0.6655372696342879],
          camera_coordinates: [
            0.6888636290002017, 0.24574775289507725, 0.5212795574528981,
          ],
          frame_index: 191,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 347.0,
              time_token: "<TIME 00:05:47.0 video 1>",
              projected_pixel: [1273.1216282638316, 866.5843661438595],
              normalized_projected_pixel: [
                0.9042057018919258, 0.6154718509544457,
              ],
              camera_coordinates: [
                0.7956872509688413, 0.22227744498005725, 0.7475266012445229,
              ],
              frame_index: 191,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 348.0,
              time_token: "<TIME 00:05:48.0 video 1>",
              projected_pixel: [1346.3788047177588, 937.0764756450774],
              normalized_projected_pixel: [
                0.9562349465324992, 0.6655372696342879,
              ],
              camera_coordinates: [
                0.6888636290002017, 0.24574775289507725, 0.5212795574528981,
              ],
              frame_index: 191,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
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
          "The notepad was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:06.4 video 1>; Point=(0.6337, 0.7479)",
          "<TIME 00:00:07.0 video 1>; Point=(0.6494, 0.7288)",
          "<TIME 00:00:08.0 video 1>; Point=(0.6607, 0.7204)",
          "<TIME 00:00:09.0 video 1>; Point=(0.6623, 0.7276)",
        ],
        answer_metadata: {
          last_placement_time_sec: 6.366666666666666,
          last_placement_time_in_clip_sec: 6.366666666666666,
          last_placement_time_token: "<TIME 00:00:06.4 video 1>",
          projected_pixel: [892.2426151170553, 1053.0275884198368],
          normalized_projected_pixel: [0.6336950391456359, 0.7478889122299978],
          camera_coordinates: [
            0.14580052295455959, 0.26099181610402444, 0.44587349300497364,
          ],
          frame_index: 191,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 6.366666666666666,
              time_token: "<TIME 00:00:06.4 video 1>",
              projected_pixel: [892.2426151170553, 1053.0275884198368],
              normalized_projected_pixel: [
                0.6336950391456359, 0.7478889122299978,
              ],
              camera_coordinates: [
                0.14580052295455959, 0.26099181610402444, 0.44587349300497364,
              ],
              frame_index: 191,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 7.0,
              time_token: "<TIME 00:00:07.0 video 1>",
              projected_pixel: [914.3409495767265, 1026.1759917087034],
              normalized_projected_pixel: [
                0.6493898789607433, 0.7288181759294768,
              ],
              camera_coordinates: [
                0.15752959225089214, 0.23353136560262905, 0.4339890160652262,
              ],
              frame_index: 210,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 8.0,
              time_token: "<TIME 00:00:08.0 video 1>",
              projected_pixel: [930.3318957990102, 1014.2750497799739],
              normalized_projected_pixel: [
                0.6607470850845243, 0.7203658024005496,
              ],
              camera_coordinates: [
                0.1703173630600454, 0.22632814220490982, 0.43693041427316526,
              ],
              frame_index: 240,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 9.0,
              time_token: "<TIME 00:00:09.0 video 1>",
              projected_pixel: [932.5105079461744, 1024.4459479533336],
              normalized_projected_pixel: [
                0.6622943948481352, 0.7275894516714018,
              ],
              camera_coordinates: [
                0.17343585241588055, 0.23585621898408848, 0.43949587046087063,
              ],
              frame_index: 270,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
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
          "At the current time <TIME 00:05:59.0 video 1>, based on the last known position of the notepad that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 6.366666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.003",
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
            "At the current time <TIME 00:05:59.0 video 1>, consider the notepad that was moved earlier. Using its last known position to infer its current location, in which direction is the notepad from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 359.0,
            camera_coordinates: [
              1.004970936142247, 0.2840889088565737, 0.3578915056863304,
            ],
            world_coordinates: [
              -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.004970936142247,
              z: 0.3578915056863304,
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
            "At the current time <TIME 00:05:59.0 video 1>, consider the notepad that was moved earlier. Using its last known position to infer its current location, and using the current position of the fork (marked in red) in the current frame, where is the notepad relative to fork from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "250fd6c1df977def",
            object_x_name: "notepad",
            object_x_reference_time_sec: 359.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
            ],
            object_x_camera_coordinates: [
              1.004970936142247, 0.2840889088565737, 0.3578915056863304,
            ],
            object_y_assoc_id: "af53942bba314e4c",
            object_y_name: "fork",
            object_y_reference_time_sec: 359.0,
            object_y_world_coordinates: [
              -0.2293173630570628, -2.582055114787768, -0.6013844140673673,
            ],
            object_y_projected_pixel: [1128.4032774968216, 927.170552860302],
            object_y_normalized_projected_pixel: [
              0.8014227823130835, 0.65850181311101,
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
            "At the current time <TIME 00:05:59.0 video 1>, consider the notepad that was moved earlier. Using its last known position to infer its current location, and using the current position of the fork (marked in red) in the current frame, how far is the notepad from the fork: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "250fd6c1df977def",
            object_x_name: "notepad",
            object_x_reference_time_sec: 359.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "af53942bba314e4c",
            object_y_name: "fork",
            object_y_pixel: [1128.4032774968216, 927.170552860302],
            object_y_normalized_projected_pixel: [
              0.8014227823130835, 0.65850181311101,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.5988871702019951, 0.07536297662494751, -0.18447162705512787,
            ],
            distance_m: 0.6311697094020688,
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
  oos_staged_h10p0_13: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "5896f57aaefbc467",
    object_a_name: "knife",
    query_time_sec: 360.0,
    query_time_in_clip_sec: 360.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 360.0,
    clip_duration_sec: 360.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "5896f57aaefbc467",
      object_name: "knife",
      query_time_sec: 360.0,
      oos_span_start_sec: 350.0,
      oos_span_end_sec: 387.0,
      oos_duration_sec: 37.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 360.0,
      clip_duration_sec: 360.0,
      anchor_assoc_id: "24a3c683c389b867",
      anchor_name: "handful of cheese",
      anchor_projected_pixel: [848.6814151621561, 1009.6453706025655],
      anchor_world_coordinates: [
        -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_13",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:00.0 video 1>, is the previously moved knife visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1516.1165981110562, 1005.1944345202313],
          camera_coordinates: [
            0.8217910024699848, 0.30127139164381767, 0.354932381450881,
          ],
          frame_index: 9452,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The knife was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:47.0 video 1>; Point=(0.8703, 0.6357)",
          "<TIME 00:05:48.0 video 1>; Point=(0.8968, 0.6885)",
          "<TIME 00:05:49.0 video 1>; Point=(0.9266, 0.74)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 349.0,
          sampled_last_visible_time_in_clip_sec: 349.0,
          sampled_last_visible_time_token: "<TIME 00:05:49.0 video 1>",
          projected_pixel: [1304.6470845149356, 1041.8821254205425],
          normalized_projected_pixel: [0.9265959407066304, 0.7399731004407262],
          camera_coordinates: [
            0.5153866865707513, 0.28557792944603627, 0.41317661035801945,
          ],
          frame_index: 9452,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 347.0,
              time_token: "<TIME 00:05:47.0 video 1>",
              projected_pixel: [1225.3495067196748, 895.0487473623704],
              normalized_projected_pixel: [
                0.8702766382952235, 0.6356880307971381,
              ],
              camera_coordinates: [
                0.6363671421772281, 0.22819749397031558, 0.6677618166107672,
              ],
              frame_index: 9452,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 348.0,
              time_token: "<TIME 00:05:48.0 video 1>",
              projected_pixel: [1262.7546531212233, 969.4760243364527],
              normalized_projected_pixel: [
                0.8968427934099598, 0.6885483127389579,
              ],
              camera_coordinates: [
                0.5149324617526791, 0.24036613539226473, 0.4825580883942999,
              ],
              frame_index: 9452,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 349.0,
              time_token: "<TIME 00:05:49.0 video 1>",
              projected_pixel: [1304.6470845149356, 1041.8821254205425],
              normalized_projected_pixel: [
                0.9265959407066304, 0.7399731004407262,
              ],
              camera_coordinates: [
                0.5153866865707513, 0.28557792944603627, 0.41317661035801945,
              ],
              frame_index: 9452,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
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
          "<TIME 00:05:15.1 video 1>; Point=(0.6883, 0.6803)",
          "<TIME 00:05:16.0 video 1>; Point=(0.5556, 0.7226)",
          "<TIME 00:05:17.0 video 1>; Point=(0.4391, 0.7699)",
          "<TIME 00:05:18.0 video 1>; Point=(0.723, 0.8379)",
        ],
        answer_metadata: {
          last_placement_time_sec: 315.06666666666666,
          last_placement_time_in_clip_sec: 315.06666666666666,
          last_placement_time_token: "<TIME 00:05:15.1 video 1>",
          projected_pixel: [969.1254295231245, 957.8724681062613],
          normalized_projected_pixel: [0.6882993107408555, 0.6803071506436514],
          camera_coordinates: [
            0.20591299260298035, 0.19149199118220803, 0.4547035512346534,
          ],
          frame_index: 9452,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 315.06666666666666,
              time_token: "<TIME 00:05:15.1 video 1>",
              projected_pixel: [969.1254295231245, 957.8724681062613],
              normalized_projected_pixel: [
                0.6882993107408555, 0.6803071506436514,
              ],
              camera_coordinates: [
                0.20591299260298035, 0.19149199118220803, 0.4547035512346534,
              ],
              frame_index: 9452,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 316.0,
              time_token: "<TIME 00:05:16.0 video 1>",
              projected_pixel: [782.270330442654, 1017.3903013672614],
              normalized_projected_pixel: [
                0.5555897233257485, 0.7225783390392482,
              ],
              camera_coordinates: [
                0.06307755643237467, 0.23458013314983983, 0.45540315578406954,
              ],
              frame_index: 9480,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 317.0,
              time_token: "<TIME 00:05:17.0 video 1>",
              projected_pixel: [618.3097459610894, 1083.994999260505],
              normalized_projected_pixel: [
                0.4391404445746374, 0.7698828119747905,
              ],
              camera_coordinates: [
                -0.05361798944950147, 0.2525344476708279, 0.397037747697668,
              ],
              frame_index: 9510,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 318.0,
              time_token: "<TIME 00:05:18.0 video 1>",
              projected_pixel: [1017.9810163041691, 1179.7035975262538],
              normalized_projected_pixel: [
                0.7229978808978473, 0.8378576686976235,
              ],
              camera_coordinates: [
                0.2108245839459153, 0.3123313277184062, 0.36183464880623184,
              ],
              frame_index: 9540,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
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
          "At the current time <TIME 00:06:00.0 video 1>, based on the last known position of the knife that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 315.06666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:06:00.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, in which direction is the knife from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 360.0,
            camera_coordinates: [
              0.8217910024699848, 0.30127139164381767, 0.354932381450881,
            ],
            world_coordinates: [
              -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.8217910024699848,
              z: 0.354932381450881,
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
            "At the current time <TIME 00:06:00.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, where is the knife relative to handful of cheese from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "5896f57aaefbc467",
            object_x_name: "knife",
            object_x_reference_time_sec: 360.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
            ],
            object_x_camera_coordinates: [
              0.8217910024699848, 0.30127139164381767, 0.354932381450881,
            ],
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_reference_time_sec: 360.0,
            object_y_world_coordinates: [
              -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
            ],
            object_y_projected_pixel: [848.6814151621561, 1009.6453706025655],
            object_y_normalized_projected_pixel: [
              0.6027566869049404, 0.7170776779847766,
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
            "At the current time <TIME 00:06:00.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, how far is the knife from the handful of cheese: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "5896f57aaefbc467",
            object_x_name: "knife",
            object_x_reference_time_sec: 360.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_pixel: [848.6814151621561, 1009.6453706025655],
            object_y_normalized_projected_pixel: [
              0.6027566869049404, 0.7170776779847766,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.711249878067751, 0.07783390418395808, -0.08841109202802738,
            ],
            distance_m: 0.720937602629726,
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
  oos_staged_h10p0_14: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "25f6de5b6eb63905",
    object_a_name: "black pepper jar",
    query_time_sec: 361.0,
    query_time_in_clip_sec: 361.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 361.0,
    clip_duration_sec: 361.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "25f6de5b6eb63905",
      object_name: "black pepper jar",
      query_time_sec: 361.0,
      oos_span_start_sec: 351.0,
      oos_span_end_sec: 404.0,
      oos_duration_sec: 53.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 361.0,
      clip_duration_sec: 361.0,
      anchor_assoc_id: "24a3c683c389b867",
      anchor_name: "handful of cheese",
      anchor_projected_pixel: [861.3257967168569, 1077.523262437646],
      anchor_world_coordinates: [
        -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_14",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:01.0 video 1>, is the previously moved black pepper jar visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [15.32510289728748, 1073.3731271231416],
          camera_coordinates: [
            -0.4043626495977437, 0.21779505067219807, 0.2258296335265632,
          ],
          frame_index: 5520,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The black pepper jar was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:50.0 video 1>; Point=(0.0344, 0.5902)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 350.0,
          sampled_last_visible_time_in_clip_sec: 350.0,
          sampled_last_visible_time_token: "<TIME 00:05:50.0 video 1>",
          projected_pixel: [48.446337853538466, 830.9409963473563],
          normalized_projected_pixel: [0.03440791040734266, 0.5901569576330655],
          camera_coordinates: [
            -0.5213450662188, 0.10036558011866037, 0.4054963963742403,
          ],
          frame_index: 5520,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 350.0,
              time_token: "<TIME 00:05:50.0 video 1>",
              projected_pixel: [48.446337853538466, 830.9409963473563],
              normalized_projected_pixel: [
                0.03440791040734266, 0.5901569576330655,
              ],
              camera_coordinates: [
                -0.5213450662188, 0.10036558011866037, 0.4054963963742403,
              ],
              frame_index: 5520,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
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
          "The black pepper jar was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:04.0 video 1>; Point=(0.3024, 0.8205)",
          "<TIME 00:03:06.0 video 1>; Point=(13.8646, -4.8208)",
          "<TIME 00:03:07.0 video 1>; Point=(-1.1024, -0.256)",
        ],
        answer_metadata: {
          last_placement_time_sec: 184.0,
          last_placement_time_in_clip_sec: 184.0,
          last_placement_time_token: "<TIME 00:03:04.0 video 1>",
          projected_pixel: [425.71759558401754, 1155.2868620520353],
          normalized_projected_pixel: [0.3023562468636488, 0.8205162372528659],
          camera_coordinates: [
            -0.1288495671209653, 0.2123355077064167, 0.2655331159931349,
          ],
          frame_index: 5520,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 184.0,
              time_token: "<TIME 00:03:04.0 video 1>",
              projected_pixel: [425.71759558401754, 1155.2868620520353],
              normalized_projected_pixel: [
                0.3023562468636488, 0.8205162372528659,
              ],
              camera_coordinates: [
                -0.1288495671209653, 0.2123355077064167, 0.2655331159931349,
              ],
              frame_index: 5520,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 186.0,
              time_token: "<TIME 00:03:06.0 video 1>",
              projected_pixel: [19521.300251075638, -6787.728605953558],
              normalized_projected_pixel: [
                13.864559837411674, -4.820829975819288,
              ],
              camera_coordinates: [
                -0.9948828971403516, 0.04890648969699085, 0.10613080564161322,
              ],
              frame_index: 5580,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 187.0,
              time_token: "<TIME 00:03:07.0 video 1>",
              projected_pixel: [-1552.147151475531, -360.42909870147673],
              normalized_projected_pixel: [
                -1.1023772382638715, -0.25598657578229883,
              ],
              camera_coordinates: [
                -0.8688589856287348, -0.38325655331868536, 0.21997989865466414,
              ],
              frame_index: 5610,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
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
          "At the current time <TIME 00:06:01.0 video 1>, based on the last known position of the black pepper jar that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area below the boiler",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 184.0,
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
            "At the current time <TIME 00:06:01.0 video 1>, consider the black pepper jar that was moved earlier. Using its last known position to infer its current location, in which direction is the black pepper jar from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 361.0,
            camera_coordinates: [
              -0.4043626495977437, 0.21779505067219807, 0.2258296335265632,
            ],
            world_coordinates: [
              -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.4043626495977437,
              z: 0.2258296335265632,
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
            "At the current time <TIME 00:06:01.0 video 1>, consider the black pepper jar that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, where is the black pepper jar relative to handful of cheese from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "25f6de5b6eb63905",
            object_x_name: "black pepper jar",
            object_x_reference_time_sec: 361.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
            ],
            object_x_camera_coordinates: [
              -0.4043626495977437, 0.21779505067219807, 0.2258296335265632,
            ],
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_reference_time_sec: 361.0,
            object_y_world_coordinates: [
              -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
            ],
            object_y_projected_pixel: [861.3257967168569, 1077.523262437646],
            object_y_normalized_projected_pixel: [
              0.6117370715318585, 0.7652864079812827,
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
            "At the current time <TIME 00:06:01.0 video 1>, consider the black pepper jar that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, how far is the black pepper jar from the handful of cheese: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "25f6de5b6eb63905",
            object_x_name: "black pepper jar",
            object_x_reference_time_sec: 361.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_pixel: [861.3257967168569, 1077.523262437646],
            object_y_normalized_projected_pixel: [
              0.6117370715318585, 0.7652864079812827,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.5195116183849804, -0.044774613015898135, -0.19199899504954132,
            ],
            distance_m: 0.5556623990407653,
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
  oos_staged_h10p0_15: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "4f3cf7402f66f83e",
    object_a_name: "scale",
    query_time_sec: 374.0,
    query_time_in_clip_sec: 374.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 374.0,
    clip_duration_sec: 374.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "4f3cf7402f66f83e",
      object_name: "scale",
      query_time_sec: 374.0,
      oos_span_start_sec: 364.0,
      oos_span_end_sec: 387.0,
      oos_duration_sec: 23.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 374.0,
      clip_duration_sec: 374.0,
      anchor_assoc_id: "3893e2a831626941",
      anchor_name: "ladle",
      anchor_projected_pixel: [1179.4338443440502, 948.6172651815518],
      anchor_world_coordinates: [
        -0.2463911798079579, -2.5784189063763874, -0.5268616066895009,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_15",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:14.0 video 1>, is the previously moved scale visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1470.4880259219751, 972.7119362406389],
          camera_coordinates: [
            0.7882829481199298, 0.27271695872455876, 0.36864072330343123,
          ],
          frame_index: 1674,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The scale was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:03.0 video 1>; Point=(0.9625, 0.6409)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 363.0,
          sampled_last_visible_time_in_clip_sec: 363.0,
          sampled_last_visible_time_token: "<TIME 00:06:03.0 video 1>",
          projected_pixel: [1355.1336620287752, 902.426728175067],
          normalized_projected_pixel: [0.9624528849636188, 0.6409280739879737],
          camera_coordinates: [
            0.6709353867477059, 0.2007732239223728, 0.5029448577569732,
          ],
          frame_index: 1674,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 363.0,
              time_token: "<TIME 00:06:03.0 video 1>",
              projected_pixel: [1355.1336620287752, 902.426728175067],
              normalized_projected_pixel: [
                0.9624528849636188, 0.6409280739879737,
              ],
              camera_coordinates: [
                0.6709353867477059, 0.2007732239223728, 0.5029448577569732,
              ],
              frame_index: 1674,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
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
          "The scale was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:55.8 video 1>; Point=(0.7165, 0.7264)",
          "<TIME 00:00:56.0 video 1>; Point=(0.6832, 0.7236)",
          "<TIME 00:00:57.0 video 1>; Point=(0.6542, 0.7397)",
          "<TIME 00:00:58.0 video 1>; Point=(0.6436, 0.6607)",
        ],
        answer_metadata: {
          last_placement_time_sec: 55.8,
          last_placement_time_in_clip_sec: 55.8,
          last_placement_time_token: "<TIME 00:00:55.8 video 1>",
          projected_pixel: [1008.8196173154513, 1022.7440759798324],
          normalized_projected_pixel: [0.7164912054797239, 0.7263807357811309],
          camera_coordinates: [
            0.25773125541945463, 0.2628613086353417, 0.4844334461682096,
          ],
          frame_index: 1674,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 55.8,
              time_token: "<TIME 00:00:55.8 video 1>",
              projected_pixel: [1008.8196173154513, 1022.7440759798324],
              normalized_projected_pixel: [
                0.7164912054797239, 0.7263807357811309,
              ],
              camera_coordinates: [
                0.25773125541945463, 0.2628613086353417, 0.4844334461682096,
              ],
              frame_index: 1674,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 56.0,
              time_token: "<TIME 00:00:56.0 video 1>",
              projected_pixel: [961.9817759867665, 1018.8685066631023],
              normalized_projected_pixel: [
                0.6832256931724193, 0.7236282007550442,
              ],
              camera_coordinates: [
                0.22652424758380407, 0.26878753366817393, 0.5075710748597193,
              ],
              frame_index: 1680,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 57.0,
              time_token: "<TIME 00:00:57.0 video 1>",
              projected_pixel: [921.0595098346085, 1041.49288812536],
              normalized_projected_pixel: [
                0.6541615836893526, 0.739696653498125,
              ],
              camera_coordinates: [
                0.17654382278295522, 0.26594955348431204, 0.469246100907893,
              ],
              frame_index: 1710,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 58.0,
              time_token: "<TIME 00:00:58.0 video 1>",
              projected_pixel: [906.2462679772758, 930.2197686762596],
              normalized_projected_pixel: [
                0.6436408153247698, 0.6606674493439344,
              ],
              camera_coordinates: [
                0.16932772162252263, 0.18264291212458342, 0.49442779558649674,
              ],
              frame_index: 1740,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
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
          "At the current time <TIME 00:06:14.0 video 1>, based on the last known position of the scale that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 55.8,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:06:14.0 video 1>, consider the scale that was moved earlier. Using its last known position to infer its current location, in which direction is the scale from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 374.0,
            camera_coordinates: [
              0.7882829481199298, 0.27271695872455876, 0.36864072330343123,
            ],
            world_coordinates: [
              -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7882829481199298,
              z: 0.36864072330343123,
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
            "At the current time <TIME 00:06:14.0 video 1>, consider the scale that was moved earlier. Using its last known position to infer its current location, and using the current position of the ladle (marked in red) in the current frame, where is the scale relative to ladle from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "4f3cf7402f66f83e",
            object_x_name: "scale",
            object_x_reference_time_sec: 374.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
            ],
            object_x_camera_coordinates: [
              0.7882829481199298, 0.27271695872455876, 0.36864072330343123,
            ],
            object_y_assoc_id: "3893e2a831626941",
            object_y_name: "ladle",
            object_y_reference_time_sec: 374.0,
            object_y_world_coordinates: [
              -0.2463911798079579, -2.5784189063763874, -0.5268616066895009,
            ],
            object_y_projected_pixel: [1179.4338443440502, 948.6172651815518],
            object_y_normalized_projected_pixel: [
              0.8376660826307174, 0.6737338531118976,
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
            "At the current time <TIME 00:06:14.0 video 1>, consider the scale that was moved earlier. Using its last known position to infer its current location, and using the current position of the ladle (marked in red) in the current frame, how far is the scale from the ladle: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "4f3cf7402f66f83e",
            object_x_name: "scale",
            object_x_reference_time_sec: 374.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "3893e2a831626941",
            object_y_name: "ladle",
            object_y_pixel: [1179.4338443440502, 948.6172651815518],
            object_y_normalized_projected_pixel: [
              0.8376660826307174, 0.6737338531118976,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.382596243954727, 0.06820582983168177, -0.103142200341509,
            ],
            distance_m: 0.40208237290707155,
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
  oos_staged_h10p0_16: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "75467a6c947c4da1",
    object_a_name: "cupboard",
    query_time_sec: 421.0,
    query_time_in_clip_sec: 421.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 421.0,
    clip_duration_sec: 421.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "75467a6c947c4da1",
      object_name: "cupboard",
      query_time_sec: 421.0,
      oos_span_start_sec: 411.0,
      oos_span_end_sec: 452.0,
      oos_duration_sec: 41.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_cupboard.008",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 421.0,
      clip_duration_sec: 421.0,
      anchor_assoc_id: "4f3cf7402f66f83e",
      anchor_name: "scale",
      anchor_projected_pixel: [1256.5902731853657, 889.1160823114759],
      anchor_world_coordinates: [
        -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_16",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:01.0 video 1>, is the previously moved cupboard visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1300.0591684109913, 222.8705508873211],
          camera_coordinates: [
            0.4073150279441178, -0.3266673012408975, 0.26403590197414456,
          ],
          frame_index: 8419,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cupboard was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:50.0 video 1>; Point=(0.8321, 0.169)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 410.0,
          sampled_last_visible_time_in_clip_sec: 410.0,
          sampled_last_visible_time_token: "<TIME 00:06:50.0 video 1>",
          projected_pixel: [1171.665856192263, 237.97098764800364],
          normalized_projected_pixel: [0.8321490455910958, 0.16901348554545714],
          camera_coordinates: [
            0.32189892602245473, -0.3180723014703396, 0.34399915379300283,
          ],
          frame_index: 8419,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_cupboard.008",
          world_coordinates: [
            -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 410.0,
              time_token: "<TIME 00:06:50.0 video 1>",
              projected_pixel: [1171.665856192263, 237.97098764800364],
              normalized_projected_pixel: [
                0.8321490455910958, 0.16901348554545714,
              ],
              camera_coordinates: [
                0.32189892602245473, -0.3180723014703396, 0.34399915379300283,
              ],
              frame_index: 8419,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
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
          "The cupboard was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:40.6 video 1>; Point=(0.2575, 0.1717)",
          "<TIME 00:04:41.0 video 1>; Point=(0.2442, 0.1251)",
          "<TIME 00:04:42.0 video 1>; Point=(0.2801, -0.0782)",
          "<TIME 00:04:43.0 video 1>; Point=(0.3285, -0.2868)",
        ],
        answer_metadata: {
          last_placement_time_sec: 280.6333333333333,
          last_placement_time_in_clip_sec: 280.6333333333333,
          last_placement_time_token: "<TIME 00:04:40.6 video 1>",
          projected_pixel: [362.4941112505473, 241.74155280651183],
          normalized_projected_pixel: [0.2574532040131728, 0.1716914437546249],
          camera_coordinates: [
            -0.19068230536356756, -0.26367854994617396, 0.31056443690521757,
          ],
          frame_index: 8419,
          status: "last_past_track_end",
          fixture: "P01_cupboard.008",
          world_coordinates: [
            -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 280.6333333333333,
              time_token: "<TIME 00:04:40.6 video 1>",
              projected_pixel: [362.4941112505473, 241.74155280651183],
              normalized_projected_pixel: [
                0.2574532040131728, 0.1716914437546249,
              ],
              camera_coordinates: [
                -0.19068230536356756, -0.26367854994617396, 0.31056443690521757,
              ],
              frame_index: 8419,
              status: "last_past_track_end",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 281.0,
              time_token: "<TIME 00:04:41.0 video 1>",
              projected_pixel: [343.8675255069183, 176.11128908334445],
              normalized_projected_pixel: [
                0.24422409482025448, 0.12507904054214805,
              ],
              camera_coordinates: [
                -0.17256863115172738, -0.2580488254086322, 0.25322579168112824,
              ],
              frame_index: 8430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 282.0,
              time_token: "<TIME 00:04:42.0 video 1>",
              projected_pixel: [394.4486783280184, -110.06756958684844],
              normalized_projected_pixel: [
                0.28014820903978577, -0.07817298976338667,
              ],
              camera_coordinates: [
                -0.11168653852072641, -0.2998057752040772, 0.12942572427373716,
              ],
              frame_index: 8460,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 283.0,
              time_token: "<TIME 00:04:43.0 video 1>",
              projected_pixel: [462.4770328525527, -403.8270511718663],
              normalized_projected_pixel: [
                0.32846380174186984, -0.2868089852072914,
              ],
              camera_coordinates: [
                -0.06752022149477943, -0.3157647066773665, 0.10774915858986929,
              ],
              frame_index: 8490,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
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
          "At the current time <TIME 00:07:01.0 video 1>, based on the last known position of the cupboard that was moved earlier, which fixture type is closest to it?",
        choices: ["cupboard", "hob", "counter", "drawer", "fridgefreezer"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 280.6333333333333,
          correct_fixture: "cupboard",
          display_correct_answer: "cupboard",
          raw_correct_fixture: "P01_cupboard.008",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "drawer",
            "fridgefreezer",
            "hob",
            "hook",
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
            "At the current time <TIME 00:07:01.0 video 1>, consider the cupboard that was moved earlier. Using its last known position to infer its current location, in which direction is the cupboard from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 421.0,
            camera_coordinates: [
              0.4073150279441178, -0.3266673012408975, 0.26403590197414456,
            ],
            world_coordinates: [
              -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.4073150279441178,
              z: 0.26403590197414456,
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
            "At the current time <TIME 00:07:01.0 video 1>, consider the cupboard that was moved earlier. Using its last known position to infer its current location, and using the current position of the scale (marked in red) in the current frame, where is the cupboard relative to scale from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "75467a6c947c4da1",
            object_x_name: "cupboard",
            object_x_reference_time_sec: 421.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
            ],
            object_x_camera_coordinates: [
              0.4073150279441178, -0.3266673012408975, 0.26403590197414456,
            ],
            object_y_assoc_id: "4f3cf7402f66f83e",
            object_y_name: "scale",
            object_y_reference_time_sec: 421.0,
            object_y_world_coordinates: [
              -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
            ],
            object_y_projected_pixel: [1256.5902731853657, 889.1160823114759],
            object_y_normalized_projected_pixel: [
              0.8924646826600608, 0.6314744902780368,
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
            "At the current time <TIME 00:07:01.0 video 1>, consider the cupboard that was moved earlier. Using its last known position to infer its current location, and using the current position of the scale (marked in red) in the current frame, how far is the cupboard from the scale: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "75467a6c947c4da1",
            object_x_name: "cupboard",
            object_x_reference_time_sec: 421.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "4f3cf7402f66f83e",
            object_y_name: "scale",
            object_y_pixel: [1256.5902731853657, 889.1160823114759],
            object_y_normalized_projected_pixel: [
              0.8924646826600608, 0.6314744902780368,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.19515098153170518, -0.5242496889036007, -0.3224940688267497,
            ],
            distance_m: 0.6456965745121639,
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
  oos_staged_h10p0_17: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "25f6de5b6eb63905",
    object_a_name: "black pepper jar",
    query_time_sec: 452.0,
    query_time_in_clip_sec: 452.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 452.0,
    clip_duration_sec: 452.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "25f6de5b6eb63905",
      object_name: "black pepper jar",
      query_time_sec: 452.0,
      oos_span_start_sec: 442.0,
      oos_span_end_sec: 462.0,
      oos_duration_sec: 20.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 452.0,
      clip_duration_sec: 452.0,
      anchor_assoc_id: "d1a8b2db02ba7d50",
      anchor_name: "second slice of butter",
      anchor_projected_pixel: [932.881502995522, 1017.4552193597674],
      anchor_world_coordinates: [
        -0.2960268107058548, -2.3411202340466324, -0.5084649364513086,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_17",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:32.0 video 1>, is the previously moved black pepper jar visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [46.723775266924235, 1067.11699309896],
          camera_coordinates: [
            -0.3870810319463547, 0.21477554117630726, 0.2503265562476497,
          ],
          frame_index: 5520,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The black pepper jar was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:21.0 video 1>; Point=(0.0065, 0.5854)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 441.0,
          sampled_last_visible_time_in_clip_sec: 441.0,
          sampled_last_visible_time_token: "<TIME 00:07:21.0 video 1>",
          projected_pixel: [9.182164204509604, 824.1793661087613],
          normalized_projected_pixel: [0.006521423440702844, 0.585354663429518],
          camera_coordinates: [
            -0.38159947081395007, 0.06557489886259105, 0.2642018710236303,
          ],
          frame_index: 5520,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 441.0,
              time_token: "<TIME 00:07:21.0 video 1>",
              projected_pixel: [9.182164204509604, 824.1793661087613],
              normalized_projected_pixel: [
                0.006521423440702844, 0.585354663429518,
              ],
              camera_coordinates: [
                -0.38159947081395007, 0.06557489886259105, 0.2642018710236303,
              ],
              frame_index: 5520,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
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
          "The black pepper jar was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:04.0 video 1>; Point=(0.3024, 0.8205)",
          "<TIME 00:03:06.0 video 1>; Point=(13.8646, -4.8208)",
          "<TIME 00:03:07.0 video 1>; Point=(-1.1024, -0.256)",
        ],
        answer_metadata: {
          last_placement_time_sec: 184.0,
          last_placement_time_in_clip_sec: 184.0,
          last_placement_time_token: "<TIME 00:03:04.0 video 1>",
          projected_pixel: [425.71759558401754, 1155.2868620520353],
          normalized_projected_pixel: [0.3023562468636488, 0.8205162372528659],
          camera_coordinates: [
            -0.1288495671209653, 0.2123355077064167, 0.2655331159931349,
          ],
          frame_index: 5520,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 184.0,
              time_token: "<TIME 00:03:04.0 video 1>",
              projected_pixel: [425.71759558401754, 1155.2868620520353],
              normalized_projected_pixel: [
                0.3023562468636488, 0.8205162372528659,
              ],
              camera_coordinates: [
                -0.1288495671209653, 0.2123355077064167, 0.2655331159931349,
              ],
              frame_index: 5520,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 186.0,
              time_token: "<TIME 00:03:06.0 video 1>",
              projected_pixel: [19521.300251075638, -6787.728605953558],
              normalized_projected_pixel: [
                13.864559837411674, -4.820829975819288,
              ],
              camera_coordinates: [
                -0.9948828971403516, 0.04890648969699085, 0.10613080564161322,
              ],
              frame_index: 5580,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 187.0,
              time_token: "<TIME 00:03:07.0 video 1>",
              projected_pixel: [-1552.147151475531, -360.42909870147673],
              normalized_projected_pixel: [
                -1.1023772382638715, -0.25598657578229883,
              ],
              camera_coordinates: [
                -0.8688589856287348, -0.38325655331868536, 0.21997989865466414,
              ],
              frame_index: 5610,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
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
          "At the current time <TIME 00:07:32.0 video 1>, based on the last known position of the black pepper jar that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area below the boiler",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 184.0,
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
            "At the current time <TIME 00:07:32.0 video 1>, consider the black pepper jar that was moved earlier. Using its last known position to infer its current location, in which direction is the black pepper jar from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 452.0,
            camera_coordinates: [
              -0.3870810319463547, 0.21477554117630726, 0.2503265562476497,
            ],
            world_coordinates: [
              -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.3870810319463547,
              z: 0.2503265562476497,
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
            "At the current time <TIME 00:07:32.0 video 1>, consider the black pepper jar that was moved earlier. Using its last known position to infer its current location, and using the current position of the second slice of butter (marked in red) in the current frame, where is the black pepper jar relative to second slice of butter from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "25f6de5b6eb63905",
            object_x_name: "black pepper jar",
            object_x_reference_time_sec: 452.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
            ],
            object_x_camera_coordinates: [
              -0.3870810319463547, 0.21477554117630726, 0.2503265562476497,
            ],
            object_y_assoc_id: "d1a8b2db02ba7d50",
            object_y_name: "second slice of butter",
            object_y_reference_time_sec: 452.0,
            object_y_world_coordinates: [
              -0.2960268107058548, -2.3411202340466324, -0.5084649364513086,
            ],
            object_y_projected_pixel: [932.881502995522, 1017.4552193597674],
            object_y_normalized_projected_pixel: [
              0.6625578856502288, 0.7226244455680166,
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
            "At the current time <TIME 00:07:32.0 video 1>, consider the black pepper jar that was moved earlier. Using its last known position to infer its current location, and using the current position of the second slice of butter (marked in red) in the current frame, how far is the black pepper jar from the second slice of butter: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "25f6de5b6eb63905",
            object_x_name: "black pepper jar",
            object_x_reference_time_sec: 452.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "d1a8b2db02ba7d50",
            object_y_name: "second slice of butter",
            object_y_pixel: [932.881502995522, 1017.4552193597674],
            object_y_normalized_projected_pixel: [
              0.6625578856502288, 0.7226244455680166,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.5634343338006262, -0.01941335479693762, -0.19661054824438312,
            ],
            distance_m: 0.5970685341992025,
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
  oos_staged_h10p0_18: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "5896f57aaefbc467",
    object_a_name: "knife",
    query_time_sec: 482.0,
    query_time_in_clip_sec: 482.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 482.0,
    clip_duration_sec: 482.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "5896f57aaefbc467",
      object_name: "knife",
      query_time_sec: 482.0,
      oos_span_start_sec: 472.0,
      oos_span_end_sec: 506.0,
      oos_duration_sec: 34.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 482.0,
      clip_duration_sec: 482.0,
      anchor_assoc_id: "af53942bba314e4c",
      anchor_name: "fork",
      anchor_projected_pixel: [1126.0131998855131, 905.9284216425098],
      anchor_world_coordinates: [
        -0.2293173630570628, -2.582055114787768, -0.6013844140673673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_18",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:02.0 video 1>, is the previously moved knife visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1530.0115406006582, 967.5829232467656],
          camera_coordinates: [
            0.8247960778943781, 0.2600309652288034, 0.35025941687455064,
          ],
          frame_index: 9452,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The knife was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:48.0 video 1>; Point=(0.9721, 0.5537)",
          "<TIME 00:07:49.0 video 1>; Point=(0.4047, 0.5373)",
          "<TIME 00:07:50.0 video 1>; Point=(0.6095, 0.5632)",
          "<TIME 00:07:51.0 video 1>; Point=(0.7322, 0.6954)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 471.0,
          sampled_last_visible_time_in_clip_sec: 471.0,
          sampled_last_visible_time_token: "<TIME 00:07:51.0 video 1>",
          projected_pixel: [1030.9169191321603, 979.1375198325288],
          normalized_projected_pixel: [0.7321853118836366, 0.6954101703356028],
          camera_coordinates: [
            0.4248233777475763, 0.3487718693216629, 0.7491398525229875,
          ],
          frame_index: 9452,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 468.0,
              time_token: "<TIME 00:07:48.0 video 1>",
              projected_pixel: [1368.6532715445683, 779.5699953022599],
              normalized_projected_pixel: [
                0.9720548803583582, 0.5536718716635369,
              ],
              camera_coordinates: [
                1.9165425530429798, 0.2107278979761152, 1.4311573026333104,
              ],
              frame_index: 9452,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 469.0,
              time_token: "<TIME 00:07:49.0 video 1>",
              projected_pixel: [569.7974341778406, 756.5215092928439],
              normalized_projected_pixel: [
                0.4046856776831254, 0.5373022083045766,
              ],
              camera_coordinates: [
                -0.45862895039979046, 0.1783367450590495, 2.179314024830266,
              ],
              frame_index: 9452,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 470.0,
              time_token: "<TIME 00:07:50.0 video 1>",
              projected_pixel: [858.1184355762762, 792.9278432952849],
              normalized_projected_pixel: [
                0.6094591161763325, 0.5631589796131284,
              ],
              camera_coordinates: [
                0.4184363014359318, 0.2273860715528429, 1.6108777047877774,
              ],
              frame_index: 9452,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 471.0,
              time_token: "<TIME 00:07:51.0 video 1>",
              projected_pixel: [1030.9169191321603, 979.1375198325288],
              normalized_projected_pixel: [
                0.7321853118836366, 0.6954101703356028,
              ],
              camera_coordinates: [
                0.4248233777475763, 0.3487718693216629, 0.7491398525229875,
              ],
              frame_index: 9452,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
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
          "<TIME 00:05:15.1 video 1>; Point=(0.6883, 0.6803)",
          "<TIME 00:05:16.0 video 1>; Point=(0.5556, 0.7226)",
          "<TIME 00:05:17.0 video 1>; Point=(0.4391, 0.7699)",
          "<TIME 00:05:18.0 video 1>; Point=(0.723, 0.8379)",
        ],
        answer_metadata: {
          last_placement_time_sec: 315.06666666666666,
          last_placement_time_in_clip_sec: 315.06666666666666,
          last_placement_time_token: "<TIME 00:05:15.1 video 1>",
          projected_pixel: [969.1254295231245, 957.8724681062613],
          normalized_projected_pixel: [0.6882993107408555, 0.6803071506436514],
          camera_coordinates: [
            0.20591299260298035, 0.19149199118220803, 0.4547035512346534,
          ],
          frame_index: 9452,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 315.06666666666666,
              time_token: "<TIME 00:05:15.1 video 1>",
              projected_pixel: [969.1254295231245, 957.8724681062613],
              normalized_projected_pixel: [
                0.6882993107408555, 0.6803071506436514,
              ],
              camera_coordinates: [
                0.20591299260298035, 0.19149199118220803, 0.4547035512346534,
              ],
              frame_index: 9452,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 316.0,
              time_token: "<TIME 00:05:16.0 video 1>",
              projected_pixel: [782.270330442654, 1017.3903013672614],
              normalized_projected_pixel: [
                0.5555897233257485, 0.7225783390392482,
              ],
              camera_coordinates: [
                0.06307755643237467, 0.23458013314983983, 0.45540315578406954,
              ],
              frame_index: 9480,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 317.0,
              time_token: "<TIME 00:05:17.0 video 1>",
              projected_pixel: [618.3097459610894, 1083.994999260505],
              normalized_projected_pixel: [
                0.4391404445746374, 0.7698828119747905,
              ],
              camera_coordinates: [
                -0.05361798944950147, 0.2525344476708279, 0.397037747697668,
              ],
              frame_index: 9510,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 318.0,
              time_token: "<TIME 00:05:18.0 video 1>",
              projected_pixel: [1017.9810163041691, 1179.7035975262538],
              normalized_projected_pixel: [
                0.7229978808978473, 0.8378576686976235,
              ],
              camera_coordinates: [
                0.2108245839459153, 0.3123313277184062, 0.36183464880623184,
              ],
              frame_index: 9540,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
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
          "At the current time <TIME 00:08:02.0 video 1>, based on the last known position of the knife that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 315.06666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:08:02.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, in which direction is the knife from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 482.0,
            camera_coordinates: [
              0.8247960778943781, 0.2600309652288034, 0.35025941687455064,
            ],
            world_coordinates: [
              -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.8247960778943781,
              z: 0.35025941687455064,
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
            "At the current time <TIME 00:08:02.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the fork (marked in red) in the current frame, where is the knife relative to fork from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "5896f57aaefbc467",
            object_x_name: "knife",
            object_x_reference_time_sec: 482.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.391928791940913, -3.0158431048281535, -0.5460945655475371,
            ],
            object_x_camera_coordinates: [
              0.8247960778943781, 0.2600309652288034, 0.35025941687455064,
            ],
            object_y_assoc_id: "af53942bba314e4c",
            object_y_name: "fork",
            object_y_reference_time_sec: 482.0,
            object_y_world_coordinates: [
              -0.2293173630570628, -2.582055114787768, -0.6013844140673673,
            ],
            object_y_projected_pixel: [1126.0131998855131, 905.9284216425098],
            object_y_normalized_projected_pixel: [
              0.7997252840095974, 0.6434150721892825,
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
            "At the current time <TIME 00:08:02.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the fork (marked in red) in the current frame, how far is the knife from the fork: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "5896f57aaefbc467",
            object_x_name: "knife",
            object_x_reference_time_sec: 482.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "af53942bba314e4c",
            object_y_name: "fork",
            object_y_pixel: [1126.0131998855131, 905.9284216425098],
            object_y_normalized_projected_pixel: [
              0.7997252840095974, 0.6434150721892825,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.4138643539928113, 0.06804898796447711, -0.20434553136145234,
            ],
            distance_m: 0.46655274563147825,
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
  oos_staged_h10p0_19: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "0a8eb18592b5f93d",
    object_a_name: "pen",
    query_time_sec: 482.0,
    query_time_in_clip_sec: 482.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 482.0,
    clip_duration_sec: 482.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "0a8eb18592b5f93d",
      object_name: "pen",
      query_time_sec: 482.0,
      oos_span_start_sec: 472.0,
      oos_span_end_sec: 536.0,
      oos_duration_sec: 64.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 482.0,
      clip_duration_sec: 482.0,
      anchor_assoc_id: "af53942bba314e4c",
      anchor_name: "fork",
      anchor_projected_pixel: [1126.0131998855131, 905.9284216425098],
      anchor_world_coordinates: [
        -0.2293173630570628, -2.582055114787768, -0.6013844140673673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_19",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:02.0 video 1>, is the previously moved pen visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1955.969941247741, 947.9668983822911],
          camera_coordinates: [
            1.1222068919195904, 0.2188084081899241, 0.3591768322096046,
          ],
          frame_index: 9535,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pen was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:48.0 video 1>; Point=(0.9744, 0.5376)",
          "<TIME 00:07:49.0 video 1>; Point=(0.4135, 0.5237)",
          "<TIME 00:07:50.0 video 1>; Point=(0.6199, 0.5413)",
          "<TIME 00:07:51.0 video 1>; Point=(0.791, 0.6413)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 471.0,
          sampled_last_visible_time_in_clip_sec: 471.0,
          sampled_last_visible_time_token: "<TIME 00:07:51.0 video 1>",
          projected_pixel: [1113.6963105640436, 902.9809003996098],
          normalized_projected_pixel: [0.7909774932983265, 0.641321662215632],
          camera_coordinates: [
            0.664105587709571, 0.314743091469862, 0.9275160787355579,
          ],
          frame_index: 9535,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3341292926199513, -3.310616234585739, -0.5462724851505478,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 468.0,
              time_token: "<TIME 00:07:48.0 video 1>",
              projected_pixel: [1371.9722379523052, 756.9483186864053],
              normalized_projected_pixel: [
                0.9744121008183986, 0.5376053399761401,
              ],
              camera_coordinates: [
                2.159247295796572, 0.16376225566982158, 1.601805033622887,
              ],
              frame_index: 9535,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3341292926199513, -3.310616234585739, -0.5462724851505478,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 469.0,
              time_token: "<TIME 00:07:49.0 video 1>",
              projected_pixel: [582.2435222419338, 737.3109643723877],
              normalized_projected_pixel: [
                0.41352522886500975, 0.5236583553781163,
              ],
              camera_coordinates: [
                -0.47065907801814566, 0.1249629180057591, 2.4746757055192017,
              ],
              frame_index: 9535,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3341292926199513, -3.310616234585739, -0.5462724851505478,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 470.0,
              time_token: "<TIME 00:07:50.0 video 1>",
              projected_pixel: [872.8845281241995, 762.1164869446293],
              normalized_projected_pixel: [
                0.6199463978154826, 0.5412759140231742,
              ],
              camera_coordinates: [
                0.5342422863965859, 0.17114948794523, 1.882278574933136,
              ],
              frame_index: 9535,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3341292926199513, -3.310616234585739, -0.5462724851505478,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 471.0,
              time_token: "<TIME 00:07:51.0 video 1>",
              projected_pixel: [1113.6963105640436, 902.9809003996098],
              normalized_projected_pixel: [
                0.7909774932983265, 0.641321662215632,
              ],
              camera_coordinates: [
                0.664105587709571, 0.314743091469862, 0.9275160787355579,
              ],
              frame_index: 9535,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3341292926199513, -3.310616234585739, -0.5462724851505478,
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
          "The pen was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:17.8 video 1>; Point=(0.9051, 0.7566)",
          "<TIME 00:05:18.0 video 1>; Point=(1.0317, 0.8751)",
          "<TIME 00:05:19.0 video 1>; Point=(5.9653, 1.9149)",
          "<TIME 00:05:20.0 video 1>; Point=(1.1461, 0.7011)",
        ],
        answer_metadata: {
          last_placement_time_sec: 317.8333333333333,
          last_placement_time_in_clip_sec: 317.8333333333333,
          last_placement_time_token: "<TIME 00:05:17.8 video 1>",
          projected_pixel: [1274.3652716170507, 1065.3007834668497],
          normalized_projected_pixel: [0.9050889713189281, 0.7566056700758875],
          camera_coordinates: [
            0.3977596982228615, 0.24813159375523353, 0.3431773680671286,
          ],
          frame_index: 9535,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3341292926199513, -3.310616234585739, -0.5462724851505478,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 317.8333333333333,
              time_token: "<TIME 00:05:17.8 video 1>",
              projected_pixel: [1274.3652716170507, 1065.3007834668497],
              normalized_projected_pixel: [
                0.9050889713189281, 0.7566056700758875,
              ],
              camera_coordinates: [
                0.3977596982228615, 0.24813159375523353, 0.3431773680671286,
              ],
              frame_index: 9535,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3341292926199513, -3.310616234585739, -0.5462724851505478,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 318.0,
              time_token: "<TIME 00:05:18.0 video 1>",
              projected_pixel: [1452.569178558401, 1232.0813067479817],
              normalized_projected_pixel: [
                1.031654246135228, 0.8750577462698733,
              ],
              camera_coordinates: [
                0.47669911736461845, 0.33300789850827595, 0.22357683273791995,
              ],
              frame_index: 9540,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3341292926199513, -3.310616234585739, -0.5462724851505478,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 319.0,
              time_token: "<TIME 00:05:19.0 video 1>",
              projected_pixel: [8399.092927839318, 2696.228348352177],
              normalized_projected_pixel: [
                5.9652648635222425, 1.9149349065001255,
              ],
              camera_coordinates: [
                0.8973358835981018, 0.4758720021499031, 0.16127005113921244,
              ],
              frame_index: 9570,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3341292926199513, -3.310616234585739, -0.5462724851505478,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 320.0,
              time_token: "<TIME 00:05:20.0 video 1>",
              projected_pixel: [1613.702211692435, 987.1933864710658],
              normalized_projected_pixel: [
                1.146095320804286, 0.7011316665277456,
              ],
              camera_coordinates: [
                1.0713477792082915, 0.33026400150410995, 0.4173771686985654,
              ],
              frame_index: 9600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3341292926199513, -3.310616234585739, -0.5462724851505478,
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
          "At the current time <TIME 00:08:02.0 video 1>, based on the last known position of the pen that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 317.8333333333333,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.003",
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
            "At the current time <TIME 00:08:02.0 video 1>, consider the pen that was moved earlier. Using its last known position to infer its current location, in which direction is the pen from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 482.0,
            camera_coordinates: [
              1.1222068919195904, 0.2188084081899241, 0.3591768322096046,
            ],
            world_coordinates: [
              -0.3341292926199513, -3.310616234585739, -0.5462724851505478,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.1222068919195904,
              z: 0.3591768322096046,
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
            "At the current time <TIME 00:08:02.0 video 1>, consider the pen that was moved earlier. Using its last known position to infer its current location, and using the current position of the fork (marked in red) in the current frame, where is the pen relative to fork from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "0a8eb18592b5f93d",
            object_x_name: "pen",
            object_x_reference_time_sec: 482.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3341292926199513, -3.310616234585739, -0.5462724851505478,
            ],
            object_x_camera_coordinates: [
              1.1222068919195904, 0.2188084081899241, 0.3591768322096046,
            ],
            object_y_assoc_id: "af53942bba314e4c",
            object_y_name: "fork",
            object_y_reference_time_sec: 482.0,
            object_y_world_coordinates: [
              -0.2293173630570628, -2.582055114787768, -0.6013844140673673,
            ],
            object_y_projected_pixel: [1126.0131998855131, 905.9284216425098],
            object_y_normalized_projected_pixel: [
              0.7997252840095974, 0.6434150721892825,
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
            "At the current time <TIME 00:08:02.0 video 1>, consider the pen that was moved earlier. Using its last known position to infer its current location, and using the current position of the fork (marked in red) in the current frame, how far is the pen from the fork: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "0a8eb18592b5f93d",
            object_x_name: "pen",
            object_x_reference_time_sec: 482.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "af53942bba314e4c",
            object_y_name: "fork",
            object_y_pixel: [1126.0131998855131, 905.9284216425098],
            object_y_normalized_projected_pixel: [
              0.7997252840095974, 0.6434150721892825,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7112751680180236, 0.026826430925597777, -0.19542811602639837,
            ],
            distance_m: 0.738122056687714,
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
  oos_staged_h10p0_20: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "75467a6c947c4da1",
    object_a_name: "cupboard",
    query_time_sec: 482.0,
    query_time_in_clip_sec: 482.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 482.0,
    clip_duration_sec: 482.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "75467a6c947c4da1",
      object_name: "cupboard",
      query_time_sec: 482.0,
      oos_span_start_sec: 472.0,
      oos_span_end_sec: 536.0,
      oos_duration_sec: 64.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_cupboard.008",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 482.0,
      clip_duration_sec: 482.0,
      anchor_assoc_id: "3893e2a831626941",
      anchor_name: "ladle",
      anchor_projected_pixel: [1162.742259030438, 879.4567680741727],
      anchor_world_coordinates: [
        -0.2463911798079579, -2.5784189063763874, -0.5268616066895009,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_20",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:02.0 video 1>, is the previously moved cupboard visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [4105.170951710065, -1010.3936591938871],
          camera_coordinates: [
            0.5563644739322808, -0.2901985425290593, 0.12798083002802807,
          ],
          frame_index: 8419,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cupboard was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:48.0 video 1>; Point=(0.9059, 0.4149)",
          "<TIME 00:07:49.0 video 1>; Point=(0.3328, 0.4229)",
          "<TIME 00:07:50.0 video 1>; Point=(0.5364, 0.4029)",
          "<TIME 00:07:51.0 video 1>; Point=(0.6336, 0.3293)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 471.0,
          sampled_last_visible_time_in_clip_sec: 471.0,
          sampled_last_visible_time_token: "<TIME 00:07:51.0 video 1>",
          projected_pixel: [892.1130834990838, 463.6028662080812],
          normalized_projected_pixel: [0.633603042257872, 0.32926339929551224],
          camera_coordinates: [
            0.19549373083398036, -0.2451988653961111, 0.6119447843575325,
          ],
          frame_index: 8419,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_cupboard.008",
          world_coordinates: [
            -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 468.0,
              time_token: "<TIME 00:07:48.0 video 1>",
              projected_pixel: [1275.5114732894344, 584.1565348675474],
              normalized_projected_pixel: [
                0.9059030350067006, 0.4148839026047922,
              ],
              camera_coordinates: [
                1.5502380875909576, -0.3271750370746972, 1.4575633329529356,
              ],
              frame_index: 8419,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 469.0,
              time_token: "<TIME 00:07:49.0 video 1>",
              projected_pixel: [468.6051649910295, 595.415506669001],
              normalized_projected_pixel: [
                0.33281616831749256, 0.42288033144105186,
              ],
              camera_coordinates: [
                -0.7075503135060023, -0.3410062484667511, 1.8751153768243678,
              ],
              frame_index: 8419,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 470.0,
              time_token: "<TIME 00:07:50.0 video 1>",
              projected_pixel: [755.2993116567843, 567.314137534034],
              normalized_projected_pixel: [
                0.5364341702107843, 0.40292197268042185,
              ],
              camera_coordinates: [
                0.12923444800437256, -0.3180665448019961, 1.40336978044024,
              ],
              frame_index: 8419,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 471.0,
              time_token: "<TIME 00:07:51.0 video 1>",
              projected_pixel: [892.1130834990838, 463.6028662080812],
              normalized_projected_pixel: [
                0.633603042257872, 0.32926339929551224,
              ],
              camera_coordinates: [
                0.19549373083398036, -0.2451988653961111, 0.6119447843575325,
              ],
              frame_index: 8419,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
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
          "The cupboard was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:40.6 video 1>; Point=(0.2575, 0.1717)",
          "<TIME 00:04:41.0 video 1>; Point=(0.2442, 0.1251)",
          "<TIME 00:04:42.0 video 1>; Point=(0.2801, -0.0782)",
          "<TIME 00:04:43.0 video 1>; Point=(0.3285, -0.2868)",
        ],
        answer_metadata: {
          last_placement_time_sec: 280.6333333333333,
          last_placement_time_in_clip_sec: 280.6333333333333,
          last_placement_time_token: "<TIME 00:04:40.6 video 1>",
          projected_pixel: [362.4941112505473, 241.74155280651183],
          normalized_projected_pixel: [0.2574532040131728, 0.1716914437546249],
          camera_coordinates: [
            -0.19068230536356756, -0.26367854994617396, 0.31056443690521757,
          ],
          frame_index: 8419,
          status: "last_past_track_end",
          fixture: "P01_cupboard.008",
          world_coordinates: [
            -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 280.6333333333333,
              time_token: "<TIME 00:04:40.6 video 1>",
              projected_pixel: [362.4941112505473, 241.74155280651183],
              normalized_projected_pixel: [
                0.2574532040131728, 0.1716914437546249,
              ],
              camera_coordinates: [
                -0.19068230536356756, -0.26367854994617396, 0.31056443690521757,
              ],
              frame_index: 8419,
              status: "last_past_track_end",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 281.0,
              time_token: "<TIME 00:04:41.0 video 1>",
              projected_pixel: [343.8675255069183, 176.11128908334445],
              normalized_projected_pixel: [
                0.24422409482025448, 0.12507904054214805,
              ],
              camera_coordinates: [
                -0.17256863115172738, -0.2580488254086322, 0.25322579168112824,
              ],
              frame_index: 8430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 282.0,
              time_token: "<TIME 00:04:42.0 video 1>",
              projected_pixel: [394.4486783280184, -110.06756958684844],
              normalized_projected_pixel: [
                0.28014820903978577, -0.07817298976338667,
              ],
              camera_coordinates: [
                -0.11168653852072641, -0.2998057752040772, 0.12942572427373716,
              ],
              frame_index: 8460,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 283.0,
              time_token: "<TIME 00:04:43.0 video 1>",
              projected_pixel: [462.4770328525527, -403.8270511718663],
              normalized_projected_pixel: [
                0.32846380174186984, -0.2868089852072914,
              ],
              camera_coordinates: [
                -0.06752022149477943, -0.3157647066773665, 0.10774915858986929,
              ],
              frame_index: 8490,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
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
          "At the current time <TIME 00:08:02.0 video 1>, based on the last known position of the cupboard that was moved earlier, which fixture type is closest to it?",
        choices: ["drawer", "counter", "cupboard", "hook", "hob"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 280.6333333333333,
          correct_fixture: "cupboard",
          display_correct_answer: "cupboard",
          raw_correct_fixture: "P01_cupboard.008",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "drawer",
            "fridgefreezer",
            "hob",
            "hook",
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
            "At the current time <TIME 00:08:02.0 video 1>, consider the cupboard that was moved earlier. Using its last known position to infer its current location, in which direction is the cupboard from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 482.0,
            camera_coordinates: [
              0.5563644739322808, -0.2901985425290593, 0.12798083002802807,
            ],
            world_coordinates: [
              -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.5563644739322808,
              z: 0.12798083002802807,
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
            "At the current time <TIME 00:08:02.0 video 1>, consider the cupboard that was moved earlier. Using its last known position to infer its current location, and using the current position of the ladle (marked in red) in the current frame, where is the cupboard relative to ladle from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "75467a6c947c4da1",
            object_x_name: "cupboard",
            object_x_reference_time_sec: 482.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.19812580530849755, -2.7775775907007683, 0.02826225258347415,
            ],
            object_x_camera_coordinates: [
              0.5563644739322808, -0.2901985425290593, 0.12798083002802807,
            ],
            object_y_assoc_id: "3893e2a831626941",
            object_y_name: "ladle",
            object_y_reference_time_sec: 482.0,
            object_y_world_coordinates: [
              -0.2463911798079579, -2.5784189063763874, -0.5268616066895009,
            ],
            object_y_projected_pixel: [1162.742259030438, 879.4567680741727],
            object_y_normalized_projected_pixel: [
              0.825811263515936, 0.6246141818708613,
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
            "At the current time <TIME 00:08:02.0 video 1>, consider the cupboard that was moved earlier. Using its last known position to infer its current location, and using the current position of the ladle (marked in red) in the current frame, how far is the cupboard from the ladle: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "75467a6c947c4da1",
            object_x_name: "cupboard",
            object_x_reference_time_sec: 482.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "3893e2a831626941",
            object_y_name: "ladle",
            object_y_pixel: [1162.742259030438, 879.4567680741727],
            object_y_normalized_projected_pixel: [
              0.825811263515936, 0.6246141818708613,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.15644357311942292, -0.43947117838426464, -0.3640696620850014,
            ],
            distance_m: 0.5917399995365478,
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
  oos_staged_h10p0_21: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "250fd6c1df977def",
    object_a_name: "notepad",
    query_time_sec: 482.0,
    query_time_in_clip_sec: 482.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 482.0,
    clip_duration_sec: 482.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "250fd6c1df977def",
      object_name: "notepad",
      query_time_sec: 482.0,
      oos_span_start_sec: 472.0,
      oos_span_end_sec: 536.0,
      oos_duration_sec: 64.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 482.0,
      clip_duration_sec: 482.0,
      anchor_assoc_id: "24a3c683c389b867",
      anchor_name: "handful of cheese",
      anchor_projected_pixel: [851.0190820025721, 951.4919797658931],
      anchor_world_coordinates: [
        -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_21",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:02.0 video 1>, is the previously moved notepad visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1770.566397259996, 1006.2177424583504],
          camera_coordinates: [
            1.0016702935935577, 0.2822647462921797, 0.35149865596120483,
          ],
          frame_index: 191,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The notepad was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:48.0 video 1>; Point=(0.9799, 0.5514)",
          "<TIME 00:07:49.0 video 1>; Point=(0.4168, 0.5344)",
          "<TIME 00:07:50.0 video 1>; Point=(0.624, 0.5583)",
          "<TIME 00:07:51.0 video 1>; Point=(0.7792, 0.6827)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 471.0,
          sampled_last_visible_time_in_clip_sec: 471.0,
          sampled_last_visible_time_token: "<TIME 00:07:51.0 video 1>",
          projected_pixel: [1097.1363099226794, 961.2610500458227],
          normalized_projected_pixel: [0.7792161292064484, 0.682713813952999],
          camera_coordinates: [
            0.5785637747554797, 0.37015663891744816, 0.8368150877395271,
          ],
          frame_index: 191,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 468.0,
              time_token: "<TIME 00:07:48.0 video 1>",
              projected_pixel: [1379.7433933839175, 776.3133606957477],
              normalized_projected_pixel: [
                0.9799313873465323, 0.5513589209486844,
              ],
              camera_coordinates: [
                2.079240749299508, 0.21502511005627387, 1.5038979090117173,
              ],
              frame_index: 191,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 469.0,
              time_token: "<TIME 00:07:49.0 video 1>",
              projected_pixel: [586.8774209679815, 752.4534649069974],
              normalized_projected_pixel: [
                0.416816350119305, 0.5344129722350833,
              ],
              camera_coordinates: [
                -0.43013902841999985, 0.17711340650718077, 2.3552890023170128,
              ],
              frame_index: 191,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 470.0,
              time_token: "<TIME 00:07:50.0 video 1>",
              projected_pixel: [878.5967337278788, 786.0574820157427],
              normalized_projected_pixel: [
                0.6240033620226412, 0.5582794616589082,
              ],
              camera_coordinates: [
                0.516171913852018, 0.22882769656496432, 1.7599616968729945,
              ],
              frame_index: 191,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 471.0,
              time_token: "<TIME 00:07:51.0 video 1>",
              projected_pixel: [1097.1363099226794, 961.2610500458227],
              normalized_projected_pixel: [
                0.7792161292064484, 0.682713813952999,
              ],
              camera_coordinates: [
                0.5785637747554797, 0.37015663891744816, 0.8368150877395271,
              ],
              frame_index: 191,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
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
          "The notepad was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:06.4 video 1>; Point=(0.6337, 0.7479)",
          "<TIME 00:00:07.0 video 1>; Point=(0.6494, 0.7288)",
          "<TIME 00:00:08.0 video 1>; Point=(0.6607, 0.7204)",
          "<TIME 00:00:09.0 video 1>; Point=(0.6623, 0.7276)",
        ],
        answer_metadata: {
          last_placement_time_sec: 6.366666666666666,
          last_placement_time_in_clip_sec: 6.366666666666666,
          last_placement_time_token: "<TIME 00:00:06.4 video 1>",
          projected_pixel: [892.2426151170553, 1053.0275884198368],
          normalized_projected_pixel: [0.6336950391456359, 0.7478889122299978],
          camera_coordinates: [
            0.14580052295455959, 0.26099181610402444, 0.44587349300497364,
          ],
          frame_index: 191,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 6.366666666666666,
              time_token: "<TIME 00:00:06.4 video 1>",
              projected_pixel: [892.2426151170553, 1053.0275884198368],
              normalized_projected_pixel: [
                0.6336950391456359, 0.7478889122299978,
              ],
              camera_coordinates: [
                0.14580052295455959, 0.26099181610402444, 0.44587349300497364,
              ],
              frame_index: 191,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 7.0,
              time_token: "<TIME 00:00:07.0 video 1>",
              projected_pixel: [914.3409495767265, 1026.1759917087034],
              normalized_projected_pixel: [
                0.6493898789607433, 0.7288181759294768,
              ],
              camera_coordinates: [
                0.15752959225089214, 0.23353136560262905, 0.4339890160652262,
              ],
              frame_index: 210,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 8.0,
              time_token: "<TIME 00:00:08.0 video 1>",
              projected_pixel: [930.3318957990102, 1014.2750497799739],
              normalized_projected_pixel: [
                0.6607470850845243, 0.7203658024005496,
              ],
              camera_coordinates: [
                0.1703173630600454, 0.22632814220490982, 0.43693041427316526,
              ],
              frame_index: 240,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 9.0,
              time_token: "<TIME 00:00:09.0 video 1>",
              projected_pixel: [932.5105079461744, 1024.4459479533336],
              normalized_projected_pixel: [
                0.6622943948481352, 0.7275894516714018,
              ],
              camera_coordinates: [
                0.17343585241588055, 0.23585621898408848, 0.43949587046087063,
              ],
              frame_index: 270,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
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
          "At the current time <TIME 00:08:02.0 video 1>, based on the last known position of the notepad that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 6.366666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.003",
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
            "At the current time <TIME 00:08:02.0 video 1>, consider the notepad that was moved earlier. Using its last known position to infer its current location, in which direction is the notepad from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 482.0,
            camera_coordinates: [
              1.0016702935935577, 0.2822647462921797, 0.35149865596120483,
            ],
            world_coordinates: [
              -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.0016702935935577,
              z: 0.35149865596120483,
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
            "At the current time <TIME 00:08:02.0 video 1>, consider the notepad that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, where is the notepad relative to handful of cheese from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "250fd6c1df977def",
            object_x_name: "notepad",
            object_x_reference_time_sec: 482.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
            ],
            object_x_camera_coordinates: [
              1.0016702935935577, 0.2822647462921797, 0.35149865596120483,
            ],
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_reference_time_sec: 482.0,
            object_y_world_coordinates: [
              -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
            ],
            object_y_projected_pixel: [851.0190820025721, 951.4919797658931],
            object_y_normalized_projected_pixel: [
              0.604416961649554, 0.6757755538110036,
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
            "At the current time <TIME 00:08:02.0 video 1>, consider the notepad that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, how far is the notepad from the handful of cheese: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "250fd6c1df977def",
            object_x_name: "notepad",
            object_x_reference_time_sec: 482.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_pixel: [851.0190820025721, 951.4919797658931],
            object_y_normalized_projected_pixel: [
              0.604416961649554, 0.6757755538110036,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8847529351154519, 0.09410616994510246, -0.1149205870130307,
            ],
            distance_m: 0.8971345878610205,
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
  oos_staged_h10p0_22: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "25f6de5b6eb63905",
    object_a_name: "black pepper jar",
    query_time_sec: 516.0,
    query_time_in_clip_sec: 516.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 516.0,
    clip_duration_sec: 516.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "25f6de5b6eb63905",
      object_name: "black pepper jar",
      query_time_sec: 516.0,
      oos_span_start_sec: 506.0,
      oos_span_end_sec: 527.0,
      oos_duration_sec: 21.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 516.0,
      clip_duration_sec: 516.0,
      anchor_assoc_id: "af53942bba314e4c",
      anchor_name: "fork",
      anchor_projected_pixel: [1127.1317043470892, 916.7719896992054],
      anchor_world_coordinates: [
        -0.2293173630570628, -2.582055114787768, -0.6013844140673673,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_22",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:36.0 video 1>, is the previously moved black pepper jar visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [9.620979677539822, 951.931493491282],
          camera_coordinates: [
            -0.41472790911455215, 0.14831091001898233, 0.2655824249417275,
          ],
          frame_index: 5520,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The black pepper jar was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:22.0 video 1>; Point=(0.2325, 0.4812)",
          "<TIME 00:08:23.0 video 1>; Point=(0.1795, 0.5825)",
          "<TIME 00:08:24.0 video 1>; Point=(0.0886, 0.6076)",
          "<TIME 00:08:25.0 video 1>; Point=(0.0245, 0.6708)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 505.0,
          sampled_last_visible_time_in_clip_sec: 505.0,
          sampled_last_visible_time_token: "<TIME 00:08:25.0 video 1>",
          projected_pixel: [34.55141137848386, 944.536422764668],
          normalized_projected_pixel: [0.02453935467221865, 0.6708355275317245],
          camera_coordinates: [
            -0.4018677100289365, 0.14459616038746548, 0.28536614219856926,
          ],
          frame_index: 5520,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 502.0,
              time_token: "<TIME 00:08:22.0 video 1>",
              projected_pixel: [327.3611906459135, 677.5764675491703],
              normalized_projected_pixel: [
                0.23250084562919993, 0.4812332866116266,
              ],
              camera_coordinates: [
                -0.2989164582790449, -0.023081477428552932, 0.4797824118996237,
              ],
              frame_index: 5520,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 503.0,
              time_token: "<TIME 00:08:23.0 video 1>",
              projected_pixel: [252.72781279214814, 820.1009237030964],
              normalized_projected_pixel: [
                0.17949418522169613, 0.5824580424027673,
              ],
              camera_coordinates: [
                -0.32340020054194185, 0.082681927189456, 0.4194950151392727,
              ],
              frame_index: 5520,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 504.0,
              time_token: "<TIME 00:08:24.0 video 1>",
              projected_pixel: [124.69906592141797, 855.4685625838591],
              normalized_projected_pixel: [
                0.08856467750100708, 0.6075771041078545,
              ],
              camera_coordinates: [
                -0.42525931986660837, 0.11084113078584745, 0.39968881139486634,
              ],
              frame_index: 5520,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 505.0,
              time_token: "<TIME 00:08:25.0 video 1>",
              projected_pixel: [34.55141137848386, 944.536422764668],
              normalized_projected_pixel: [
                0.02453935467221865, 0.6708355275317245,
              ],
              camera_coordinates: [
                -0.4018677100289365, 0.14459616038746548, 0.28536614219856926,
              ],
              frame_index: 5520,
              status: "in_view",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
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
          "The black pepper jar was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:04.0 video 1>; Point=(0.3024, 0.8205)",
          "<TIME 00:03:06.0 video 1>; Point=(13.8646, -4.8208)",
          "<TIME 00:03:07.0 video 1>; Point=(-1.1024, -0.256)",
        ],
        answer_metadata: {
          last_placement_time_sec: 184.0,
          last_placement_time_in_clip_sec: 184.0,
          last_placement_time_token: "<TIME 00:03:04.0 video 1>",
          projected_pixel: [425.71759558401754, 1155.2868620520353],
          normalized_projected_pixel: [0.3023562468636488, 0.8205162372528659],
          camera_coordinates: [
            -0.1288495671209653, 0.2123355077064167, 0.2655331159931349,
          ],
          frame_index: 5520,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 184.0,
              time_token: "<TIME 00:03:04.0 video 1>",
              projected_pixel: [425.71759558401754, 1155.2868620520353],
              normalized_projected_pixel: [
                0.3023562468636488, 0.8205162372528659,
              ],
              camera_coordinates: [
                -0.1288495671209653, 0.2123355077064167, 0.2655331159931349,
              ],
              frame_index: 5520,
              status: "last_past_track_end",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 186.0,
              time_token: "<TIME 00:03:06.0 video 1>",
              projected_pixel: [19521.300251075638, -6787.728605953558],
              normalized_projected_pixel: [
                13.864559837411674, -4.820829975819288,
              ],
              camera_coordinates: [
                -0.9948828971403516, 0.04890648969699085, 0.10613080564161322,
              ],
              frame_index: 5580,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 187.0,
              time_token: "<TIME 00:03:07.0 video 1>",
              projected_pixel: [-1552.147151475531, -360.42909870147673],
              normalized_projected_pixel: [
                -1.1023772382638715, -0.25598657578229883,
              ],
              camera_coordinates: [
                -0.8688589856287348, -0.38325655331868536, 0.21997989865466414,
              ],
              frame_index: 5610,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.001",
              world_coordinates: [
                -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
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
          "At the current time <TIME 00:08:36.0 video 1>, based on the last known position of the black pepper jar that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 184.0,
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
            "At the current time <TIME 00:08:36.0 video 1>, consider the black pepper jar that was moved earlier. Using its last known position to infer its current location, in which direction is the black pepper jar from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 516.0,
            camera_coordinates: [
              -0.41472790911455215, 0.14831091001898233, 0.2655824249417275,
            ],
            world_coordinates: [
              -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.41472790911455215,
              z: 0.2655824249417275,
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
            "At the current time <TIME 00:08:36.0 video 1>, consider the black pepper jar that was moved earlier. Using its last known position to infer its current location, and using the current position of the fork (marked in red) in the current frame, where is the black pepper jar relative to fork from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "25f6de5b6eb63905",
            object_x_name: "black pepper jar",
            object_x_reference_time_sec: 516.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4865754342440437, -1.795835958184091, -0.35731231458999535,
            ],
            object_x_camera_coordinates: [
              -0.41472790911455215, 0.14831091001898233, 0.2655824249417275,
            ],
            object_y_assoc_id: "af53942bba314e4c",
            object_y_name: "fork",
            object_y_reference_time_sec: 516.0,
            object_y_world_coordinates: [
              -0.2293173630570628, -2.582055114787768, -0.6013844140673673,
            ],
            object_y_projected_pixel: [1127.1317043470892, 916.7719896992054],
            object_y_normalized_projected_pixel: [
              0.8005196763828759, 0.651116469956822,
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
            "At the current time <TIME 00:08:36.0 video 1>, consider the black pepper jar that was moved earlier. Using its last known position to infer its current location, and using the current position of the fork (marked in red) in the current frame, how far is the black pepper jar from the fork: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "25f6de5b6eb63905",
            object_x_name: "black pepper jar",
            object_x_reference_time_sec: 516.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "af53942bba314e4c",
            object_y_name: "fork",
            object_y_pixel: [1127.1317043470892, 916.7719896992054],
            object_y_normalized_projected_pixel: [
              0.8005196763828759, 0.651116469956822,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.8164020324370371, -0.049017195365309685, -0.27382202821527823,
            ],
            distance_m: 0.8624925896172875,
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
  oos_staged_h10p0_23: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "4f3cf7402f66f83e",
    object_a_name: "scale",
    query_time_sec: 518.0,
    query_time_in_clip_sec: 518.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 518.0,
    clip_duration_sec: 518.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "4f3cf7402f66f83e",
      object_name: "scale",
      query_time_sec: 518.0,
      oos_span_start_sec: 508.0,
      oos_span_end_sec: 536.0,
      oos_duration_sec: 28.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 518.0,
      clip_duration_sec: 518.0,
      anchor_assoc_id: "24a3c683c389b867",
      anchor_name: "handful of cheese",
      anchor_projected_pixel: [857.043123289784, 986.8767463960639],
      anchor_world_coordinates: [
        -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_23",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:38.0 video 1>, is the previously moved scale visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1425.0616237371464, 1033.050687007791],
          camera_coordinates: [
            0.7665091678037124, 0.34531641600315166, 0.3896231584666621,
          ],
          frame_index: 1674,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The scale was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:26.0 video 1>; Point=(0.932, 0.7053)",
          "<TIME 00:08:27.0 video 1>; Point=(0.89, 0.7248)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 507.0,
          sampled_last_visible_time_in_clip_sec: 507.0,
          sampled_last_visible_time_token: "<TIME 00:08:27.0 video 1>",
          projected_pixel: [1253.1037753701285, 1020.5252243620828],
          normalized_projected_pixel: [0.8899884768253753, 0.7248048468480701],
          camera_coordinates: [
            0.5233758459141069, 0.2967201638002647, 0.4922217067925155,
          ],
          frame_index: 1674,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 506.0,
              time_token: "<TIME 00:08:26.0 video 1>",
              projected_pixel: [1312.2109489154866, 993.00012412093],
              normalized_projected_pixel: [
                0.9319680034911126, 0.7052557699722514,
              ],
              camera_coordinates: [
                0.6460367068112962, 0.30210838826103875, 0.5241058784367543,
              ],
              frame_index: 1674,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 507.0,
              time_token: "<TIME 00:08:27.0 video 1>",
              projected_pixel: [1253.1037753701285, 1020.5252243620828],
              normalized_projected_pixel: [
                0.8899884768253753, 0.7248048468480701,
              ],
              camera_coordinates: [
                0.5233758459141069, 0.2967201638002647, 0.4922217067925155,
              ],
              frame_index: 1674,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
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
          "The scale was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:55.8 video 1>; Point=(0.7165, 0.7264)",
          "<TIME 00:00:56.0 video 1>; Point=(0.6832, 0.7236)",
          "<TIME 00:00:57.0 video 1>; Point=(0.6542, 0.7397)",
          "<TIME 00:00:58.0 video 1>; Point=(0.6436, 0.6607)",
        ],
        answer_metadata: {
          last_placement_time_sec: 55.8,
          last_placement_time_in_clip_sec: 55.8,
          last_placement_time_token: "<TIME 00:00:55.8 video 1>",
          projected_pixel: [1008.8196173154513, 1022.7440759798324],
          normalized_projected_pixel: [0.7164912054797239, 0.7263807357811309],
          camera_coordinates: [
            0.25773125541945463, 0.2628613086353417, 0.4844334461682096,
          ],
          frame_index: 1674,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 55.8,
              time_token: "<TIME 00:00:55.8 video 1>",
              projected_pixel: [1008.8196173154513, 1022.7440759798324],
              normalized_projected_pixel: [
                0.7164912054797239, 0.7263807357811309,
              ],
              camera_coordinates: [
                0.25773125541945463, 0.2628613086353417, 0.4844334461682096,
              ],
              frame_index: 1674,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 56.0,
              time_token: "<TIME 00:00:56.0 video 1>",
              projected_pixel: [961.9817759867665, 1018.8685066631023],
              normalized_projected_pixel: [
                0.6832256931724193, 0.7236282007550442,
              ],
              camera_coordinates: [
                0.22652424758380407, 0.26878753366817393, 0.5075710748597193,
              ],
              frame_index: 1680,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 57.0,
              time_token: "<TIME 00:00:57.0 video 1>",
              projected_pixel: [921.0595098346085, 1041.49288812536],
              normalized_projected_pixel: [
                0.6541615836893526, 0.739696653498125,
              ],
              camera_coordinates: [
                0.17654382278295522, 0.26594955348431204, 0.469246100907893,
              ],
              frame_index: 1710,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 58.0,
              time_token: "<TIME 00:00:58.0 video 1>",
              projected_pixel: [906.2462679772758, 930.2197686762596],
              normalized_projected_pixel: [
                0.6436408153247698, 0.6606674493439344,
              ],
              camera_coordinates: [
                0.16932772162252263, 0.18264291212458342, 0.49442779558649674,
              ],
              frame_index: 1740,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
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
          "At the current time <TIME 00:08:38.0 video 1>, based on the last known position of the scale that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 55.8,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:08:38.0 video 1>, consider the scale that was moved earlier. Using its last known position to infer its current location, in which direction is the scale from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 518.0,
            camera_coordinates: [
              0.7665091678037124, 0.34531641600315166, 0.3896231584666621,
            ],
            world_coordinates: [
              -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7665091678037124,
              z: 0.3896231584666621,
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
            "At the current time <TIME 00:08:38.0 video 1>, consider the scale that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, where is the scale relative to handful of cheese from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "4f3cf7402f66f83e",
            object_x_name: "scale",
            object_x_reference_time_sec: 518.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
            ],
            object_x_camera_coordinates: [
              0.7665091678037124, 0.34531641600315166, 0.3896231584666621,
            ],
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_reference_time_sec: 518.0,
            object_y_world_coordinates: [
              -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
            ],
            object_y_projected_pixel: [857.043123289784, 986.8767463960639],
            object_y_normalized_projected_pixel: [
              0.6086954000637671, 0.7009067801108408,
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
            "At the current time <TIME 00:08:38.0 video 1>, consider the scale that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, how far is the scale from the handful of cheese: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "4f3cf7402f66f83e",
            object_x_name: "scale",
            object_x_reference_time_sec: 518.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_pixel: [857.043123289784, 986.8767463960639],
            object_y_normalized_projected_pixel: [
              0.6086954000637671, 0.7009067801108408,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6494068062510414, 0.13791153797794387, -0.05691256495508362,
            ],
            distance_m: 0.6663241196012539,
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
  oos_staged_h10p0_24: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "20321a8dcbf55b59",
    object_a_name: "salt bottle",
    query_time_sec: 582.0,
    query_time_in_clip_sec: 582.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 582.0,
    clip_duration_sec: 582.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "20321a8dcbf55b59",
      object_name: "salt bottle",
      query_time_sec: 582.0,
      oos_span_start_sec: 572.0,
      oos_span_end_sec: 769.0,
      oos_duration_sec: 197.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_cupboard.007",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 582.0,
      clip_duration_sec: 582.0,
      anchor_assoc_id: "8c41128675cf475f",
      anchor_name: "one slice of butter",
      anchor_projected_pixel: [845.1824710845013, 1024.0738755161335],
      anchor_world_coordinates: [
        -0.2842593255356853, -2.300686853456037, -0.5350247250065475,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_24",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:09:42.0 video 1>, is the previously moved salt bottle visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-225.04317321454255, 448.78584891362215],
          camera_coordinates: [
            -0.5562841433245422, -0.15434696421631258, 0.2139137028560314,
          ],
          frame_index: 17036,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The salt bottle was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:28.0 video 1>; Point=(0.6677, 0.1703)",
          "<TIME 00:09:29.0 video 1>; Point=(0.6415, 0.3099)",
          "<TIME 00:09:30.0 video 1>; Point=(0.4879, 0.3761)",
          "<TIME 00:09:31.0 video 1>; Point=(0.6139, 0.4855)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 571.0,
          sampled_last_visible_time_in_clip_sec: 571.0,
          sampled_last_visible_time_token: "<TIME 00:09:31.0 video 1>",
          projected_pixel: [864.3489859377032, 683.645789141618],
          normalized_projected_pixel: [0.6138842229671188, 0.4855438843335355],
          camera_coordinates: [
            0.12267412414980283, -0.01681991603560716, 0.45465816770398937,
          ],
          frame_index: 17036,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_cupboard.007",
          world_coordinates: [
            -0.2320656485403626, -1.6941690186347396, 0.03604002106764742,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 568.0,
              time_token: "<TIME 00:09:28.0 video 1>",
              projected_pixel: [940.1467225258236, 239.76429233009884],
              normalized_projected_pixel: [
                0.6677178427029997, 0.17028713943899065,
              ],
              camera_coordinates: [
                0.13152656189923606, -0.25361031185125316, 0.3061817089476238,
              ],
              frame_index: 17036,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_cupboard.007",
              world_coordinates: [
                -0.2320656485403626, -1.6941690186347396, 0.03604002106764742,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 569.0,
              time_token: "<TIME 00:09:29.0 video 1>",
              projected_pixel: [903.2075633509855, 436.353615976392],
              normalized_projected_pixel: [
                0.6414826444254159, 0.3099102386195966,
              ],
              camera_coordinates: [
                0.12526903074805595, -0.16524023073297284, 0.3686022437014173,
              ],
              frame_index: 17036,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_cupboard.007",
              world_coordinates: [
                -0.2320656485403626, -1.6941690186347396, 0.03604002106764742,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 570.0,
              time_token: "<TIME 00:09:30.0 video 1>",
              projected_pixel: [686.9267790687668, 529.5189354904485],
              normalized_projected_pixel: [
                0.48787413286134007, 0.3760787894108299,
              ],
              camera_coordinates: [
                -0.00787484332002042, -0.11743135189261554, 0.4072104702922307,
              ],
              frame_index: 17036,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_cupboard.007",
              world_coordinates: [
                -0.2320656485403626, -1.6941690186347396, 0.03604002106764742,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 571.0,
              time_token: "<TIME 00:09:31.0 video 1>",
              projected_pixel: [864.3489859377032, 683.645789141618],
              normalized_projected_pixel: [
                0.6138842229671188, 0.4855438843335355,
              ],
              camera_coordinates: [
                0.12267412414980283, -0.01681991603560716, 0.45465816770398937,
              ],
              frame_index: 17036,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_cupboard.007",
              world_coordinates: [
                -0.2320656485403626, -1.6941690186347396, 0.03604002106764742,
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
          "The salt bottle was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:27.9 video 1>; Point=(0.6763, 0.2158)",
          "<TIME 00:09:28.0 video 1>; Point=(0.6677, 0.1703)",
          "<TIME 00:09:29.0 video 1>; Point=(0.6415, 0.3099)",
          "<TIME 00:09:30.0 video 1>; Point=(0.4879, 0.3761)",
        ],
        answer_metadata: {
          last_placement_time_sec: 567.8666666666667,
          last_placement_time_in_clip_sec: 567.8666666666667,
          last_placement_time_token: "<TIME 00:09:27.9 video 1>",
          projected_pixel: [952.2140098734187, 303.9022839768344],
          normalized_projected_pixel: [0.6762883592850986, 0.21583969032445624],
          camera_coordinates: [
            0.149269235664782, -0.23654036238336912, 0.33868756743425305,
          ],
          frame_index: 17036,
          status: "last_past_track_end",
          fixture: "P01_cupboard.007",
          world_coordinates: [
            -0.2320656485403626, -1.6941690186347396, 0.03604002106764742,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 567.8666666666667,
              time_token: "<TIME 00:09:27.9 video 1>",
              projected_pixel: [952.2140098734187, 303.9022839768344],
              normalized_projected_pixel: [
                0.6762883592850986, 0.21583969032445624,
              ],
              camera_coordinates: [
                0.149269235664782, -0.23654036238336912, 0.33868756743425305,
              ],
              frame_index: 17036,
              status: "last_past_track_end",
              fixture: "P01_cupboard.007",
              world_coordinates: [
                -0.2320656485403626, -1.6941690186347396, 0.03604002106764742,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 568.0,
              time_token: "<TIME 00:09:28.0 video 1>",
              projected_pixel: [940.1467225258236, 239.76429233009884],
              normalized_projected_pixel: [
                0.6677178427029997, 0.17028713943899065,
              ],
              camera_coordinates: [
                0.13152656189923606, -0.25361031185125316, 0.3061817089476238,
              ],
              frame_index: 17040,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.007",
              world_coordinates: [
                -0.2320656485403626, -1.6941690186347396, 0.03604002106764742,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 569.0,
              time_token: "<TIME 00:09:29.0 video 1>",
              projected_pixel: [903.2075633509855, 436.353615976392],
              normalized_projected_pixel: [
                0.6414826444254159, 0.3099102386195966,
              ],
              camera_coordinates: [
                0.12526903074805595, -0.16524023073297284, 0.3686022437014173,
              ],
              frame_index: 17070,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.007",
              world_coordinates: [
                -0.2320656485403626, -1.6941690186347396, 0.03604002106764742,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 570.0,
              time_token: "<TIME 00:09:30.0 video 1>",
              projected_pixel: [686.9267790687668, 529.5189354904485],
              normalized_projected_pixel: [
                0.48787413286134007, 0.3760787894108299,
              ],
              camera_coordinates: [
                -0.00787484332002042, -0.11743135189261554, 0.4072104702922307,
              ],
              frame_index: 17100,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.007",
              world_coordinates: [
                -0.2320656485403626, -1.6941690186347396, 0.03604002106764742,
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
          "At the current time <TIME 00:09:42.0 video 1>, based on the last known position of the salt bottle that was moved earlier, which fixture type is closest to it?",
        choices: ["fridgefreezer", "counter", "drawer", "hook", "cupboard"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 567.8666666666667,
          correct_fixture: "cupboard",
          display_correct_answer: "cupboard",
          raw_correct_fixture: "P01_cupboard.007",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "drawer",
            "fridgefreezer",
            "hob",
            "hook",
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
            "At the current time <TIME 00:09:42.0 video 1>, consider the salt bottle that was moved earlier. Using its last known position to infer its current location, in which direction is the salt bottle from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 582.0,
            camera_coordinates: [
              -0.5562841433245422, -0.15434696421631258, 0.2139137028560314,
            ],
            world_coordinates: [
              -0.2320656485403626, -1.6941690186347396, 0.03604002106764742,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.5562841433245422,
              z: 0.2139137028560314,
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
            "At the current time <TIME 00:09:42.0 video 1>, consider the salt bottle that was moved earlier. Using its last known position to infer its current location, and using the current position of the one slice of butter (marked in red) in the current frame, where is the salt bottle relative to one slice of butter from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "20321a8dcbf55b59",
            object_x_name: "salt bottle",
            object_x_reference_time_sec: 582.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.2320656485403626, -1.6941690186347396, 0.03604002106764742,
            ],
            object_x_camera_coordinates: [
              -0.5562841433245422, -0.15434696421631258, 0.2139137028560314,
            ],
            object_y_assoc_id: "8c41128675cf475f",
            object_y_name: "one slice of butter",
            object_y_reference_time_sec: 582.0,
            object_y_world_coordinates: [
              -0.2842593255356853, -2.300686853456037, -0.5350247250065475,
            ],
            object_y_projected_pixel: [845.1824710845013, 1024.0738755161335],
            object_y_normalized_projected_pixel: [
              0.6002716413952425, 0.7273251956790721,
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
            "At the current time <TIME 00:09:42.0 video 1>, consider the salt bottle that was moved earlier. Using its last known position to infer its current location, and using the current position of the one slice of butter (marked in red) in the current frame, how far is the salt bottle from the one slice of butter: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "20321a8dcbf55b59",
            object_x_name: "salt bottle",
            object_x_reference_time_sec: 582.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "8c41128675cf475f",
            object_y_name: "one slice of butter",
            object_y_pixel: [845.1824710845013, 1024.0738755161335],
            object_y_normalized_projected_pixel: [
              0.6002716413952425, 0.7273251956790721,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.6745336547546668, -0.4106861376170341, -0.27026700326881575,
            ],
            distance_m: 0.8346873714651442,
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
  oos_staged_h10p0_25: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "75467a6c947c4da1",
    object_a_name: "cupboard",
    query_time_sec: 583.0,
    query_time_in_clip_sec: 583.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 583.0,
    clip_duration_sec: 583.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "75467a6c947c4da1",
      object_name: "cupboard",
      query_time_sec: 583.0,
      oos_span_start_sec: 573.0,
      oos_span_end_sec: 769.0,
      oos_duration_sec: 196.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_cupboard.008",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 583.0,
      clip_duration_sec: 583.0,
      anchor_assoc_id: "d1a8b2db02ba7d50",
      anchor_name: "second slice of butter",
      anchor_projected_pixel: [871.5843163214288, 1022.1639891474554],
      anchor_world_coordinates: [
        -0.2960268107058548, -2.3411202340466324, -0.5084649364513086,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_25",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:09:43.0 video 1>, is the previously moved cupboard visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [2071.047166141232, -920.5883566563505],
          camera_coordinates: [
            0.21780392237084722, -0.2622112403204814, 0.08626395763361738,
          ],
          frame_index: 16716,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cupboard was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:32.0 video 1>; Point=(0.4932, 0.2326)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 572.0,
          sampled_last_visible_time_in_clip_sec: 572.0,
          sampled_last_visible_time_token: "<TIME 00:09:32.0 video 1>",
          projected_pixel: [694.3800993106819, 327.5551013780569],
          normalized_projected_pixel: [0.4931676841695184, 0.2326385663196427],
          camera_coordinates: [
            -0.0034309758666286605, -0.31315893354657287, 0.49242392186985795,
          ],
          frame_index: 16716,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_cupboard.008",
          world_coordinates: [
            -0.3397872260637512, -2.338621915084085, 0.15605054937085644,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 572.0,
              time_token: "<TIME 00:09:32.0 video 1>",
              projected_pixel: [694.3800993106819, 327.5551013780569],
              normalized_projected_pixel: [
                0.4931676841695184, 0.2326385663196427,
              ],
              camera_coordinates: [
                -0.0034309758666286605, -0.31315893354657287,
                0.49242392186985795,
              ],
              frame_index: 16716,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.3397872260637512, -2.338621915084085, 0.15605054937085644,
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
          "The cupboard was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:17.2 video 1>; Point=(0.2299, 0.4779)",
          "<TIME 00:09:18.0 video 1>; Point=(0.1516, 0.5285)",
          "<TIME 00:09:19.0 video 1>; Point=(0.0896, 0.5057)",
          "<TIME 00:09:20.0 video 1>; Point=(-1.2318, -0.2531)",
        ],
        answer_metadata: {
          last_placement_time_sec: 557.2,
          last_placement_time_in_clip_sec: 557.2,
          last_placement_time_token: "<TIME 00:09:17.2 video 1>",
          projected_pixel: [323.76213383398806, 672.8937840543766],
          normalized_projected_pixel: [0.22994469732527562, 0.4779075170840743],
          camera_coordinates: [
            -0.22959398295497113, -0.020425456072946574, 0.36456736309173354,
          ],
          frame_index: 16716,
          status: "last_past_track_end",
          fixture: "P01_cupboard.008",
          world_coordinates: [
            -0.3397872260637512, -2.338621915084085, 0.15605054937085644,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 557.2,
              time_token: "<TIME 00:09:17.2 video 1>",
              projected_pixel: [323.76213383398806, 672.8937840543766],
              normalized_projected_pixel: [
                0.22994469732527562, 0.4779075170840743,
              ],
              camera_coordinates: [
                -0.22959398295497113, -0.020425456072946574,
                0.36456736309173354,
              ],
              frame_index: 16716,
              status: "last_past_track_end",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.3397872260637512, -2.338621915084085, 0.15605054937085644,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 558.0,
              time_token: "<TIME 00:09:18.0 video 1>",
              projected_pixel: [213.40900074834082, 744.1144309877042],
              normalized_projected_pixel: [
                0.1515688925769466, 0.5284903629174035,
              ],
              camera_coordinates: [
                -0.3114378550637813, 0.02439445475281604, 0.3671386138933478,
              ],
              frame_index: 16740,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.3397872260637512, -2.338621915084085, 0.15605054937085644,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 559.0,
              time_token: "<TIME 00:09:19.0 video 1>",
              projected_pixel: [126.18320894873716, 712.027655658263],
              normalized_projected_pixel: [
                0.0896187563556372, 0.5057014599845618,
              ],
              camera_coordinates: [
                -0.33464742247304624, 0.003516330557814862, 0.3197242017971227,
              ],
              frame_index: 16770,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.3397872260637512, -2.338621915084085, 0.15605054937085644,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 560.0,
              time_token: "<TIME 00:09:20.0 video 1>",
              projected_pixel: [-1734.393946923319, -356.40861817259724],
              normalized_projected_pixel: [
                -1.231813882758039, -0.25313112086121964,
              ],
              camera_coordinates: [
                -0.4279813536642769, -0.17034686413213979, 0.10342310903670082,
              ],
              frame_index: 16800,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_cupboard.008",
              world_coordinates: [
                -0.3397872260637512, -2.338621915084085, 0.15605054937085644,
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
          "At the current time <TIME 00:09:43.0 video 1>, based on the last known position of the cupboard that was moved earlier, which fixture type is closest to it?",
        choices: ["hob", "fridgefreezer", "counter", "hook", "cupboard"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 557.2,
          correct_fixture: "cupboard",
          display_correct_answer: "cupboard",
          raw_correct_fixture: "P01_cupboard.008",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "drawer",
            "fridgefreezer",
            "hob",
            "hook",
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
            "At the current time <TIME 00:09:43.0 video 1>, consider the cupboard that was moved earlier. Using its last known position to infer its current location, in which direction is the cupboard from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 583.0,
            camera_coordinates: [
              0.21780392237084722, -0.2622112403204814, 0.08626395763361738,
            ],
            world_coordinates: [
              -0.3397872260637512, -2.338621915084085, 0.15605054937085644,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.21780392237084722,
              z: 0.08626395763361738,
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
            "At the current time <TIME 00:09:43.0 video 1>, consider the cupboard that was moved earlier. Using its last known position to infer its current location, and using the current position of the second slice of butter (marked in red) in the current frame, where is the cupboard relative to second slice of butter from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "75467a6c947c4da1",
            object_x_name: "cupboard",
            object_x_reference_time_sec: 583.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3397872260637512, -2.338621915084085, 0.15605054937085644,
            ],
            object_x_camera_coordinates: [
              0.21780392237084722, -0.2622112403204814, 0.08626395763361738,
            ],
            object_y_assoc_id: "d1a8b2db02ba7d50",
            object_y_name: "second slice of butter",
            object_y_reference_time_sec: 583.0,
            object_y_world_coordinates: [
              -0.2960268107058548, -2.3411202340466324, -0.5084649364513086,
            ],
            object_y_projected_pixel: [871.5843163214288, 1022.1639891474554],
            object_y_normalized_projected_pixel: [
              0.619022951932833, 0.7259687422922269,
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
            "At the current time <TIME 00:09:43.0 video 1>, consider the cupboard that was moved earlier. Using its last known position to infer its current location, and using the current position of the second slice of butter (marked in red) in the current frame, how far is the cupboard from the second slice of butter: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "75467a6c947c4da1",
            object_x_name: "cupboard",
            object_x_reference_time_sec: 583.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "d1a8b2db02ba7d50",
            object_y_name: "second slice of butter",
            object_y_pixel: [871.5843163214288, 1022.1639891474554],
            object_y_normalized_projected_pixel: [
              0.619022951932833, 0.7259687422922269,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.07543981668444477, -0.5221425417709151, -0.4064210213301325,
            ],
            distance_m: 0.6659594930980431,
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
  oos_staged_h10p0_26: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "59907c8c4dfbb77c",
    object_a_name: "lid of cheese grater",
    query_time_sec: 583.0,
    query_time_in_clip_sec: 583.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 583.0,
    clip_duration_sec: 583.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "59907c8c4dfbb77c",
      object_name: "lid of cheese grater",
      query_time_sec: 583.0,
      oos_span_start_sec: 573.0,
      oos_span_end_sec: 596.0,
      oos_duration_sec: 23.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.006",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 583.0,
      clip_duration_sec: 583.0,
      anchor_assoc_id: "24a3c683c389b867",
      anchor_name: "handful of cheese",
      anchor_projected_pixel: [818.5471893649968, 1030.6217771645238],
      anchor_world_coordinates: [
        -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_26",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:09:43.0 video 1>, is the previously moved lid of cheese grater visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.1690144885456193, 0.8539597247038345, -0.4728765407714759,
          ],
          frame_index: 16278,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid of cheese grater was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:32.0 video 1>; Point=(0.9937, 0.467)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 572.0,
          sampled_last_visible_time_in_clip_sec: 572.0,
          sampled_last_visible_time_token: "<TIME 00:09:32.0 video 1>",
          projected_pixel: [1399.0800877720626, 657.5579956900144],
          normalized_projected_pixel: [0.9936648350653854, 0.4670156219389307],
          camera_coordinates: [
            1.466145231890078, -0.10088141263203043, 1.000913140076431,
          ],
          frame_index: 16278,
          status: "in_view",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 572.0,
              time_token: "<TIME 00:09:32.0 video 1>",
              projected_pixel: [1399.0800877720626, 657.5579956900144],
              normalized_projected_pixel: [
                0.9936648350653854, 0.4670156219389307,
              ],
              camera_coordinates: [
                1.466145231890078, -0.10088141263203043, 1.000913140076431,
              ],
              frame_index: 16278,
              status: "in_view",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
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
          "The lid of cheese grater was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:02.6 video 1>; Point=(0.6673, 0.8055)",
          "<TIME 00:09:03.0 video 1>; Point=(0.6954, 0.9915)",
          "<TIME 00:09:04.0 video 1>; Point=(0.8548, 0.9803)",
        ],
        answer_metadata: {
          last_placement_time_sec: 542.6,
          last_placement_time_in_clip_sec: 542.6,
          last_placement_time_token: "<TIME 00:09:02.6 video 1>",
          projected_pixel: [939.5777863677306, 1134.131098134863],
          normalized_projected_pixel: [0.6673137687270814, 0.8054908367435106],
          camera_coordinates: [
            0.177015768870859, 0.314083963868759, 0.41974493335844976,
          ],
          frame_index: 16278,
          status: "last_past_track_end",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 542.6,
              time_token: "<TIME 00:09:02.6 video 1>",
              projected_pixel: [939.5777863677306, 1134.131098134863],
              normalized_projected_pixel: [
                0.6673137687270814, 0.8054908367435106,
              ],
              camera_coordinates: [
                0.177015768870859, 0.314083963868759, 0.41974493335844976,
              ],
              frame_index: 16278,
              status: "last_past_track_end",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 543.0,
              time_token: "<TIME 00:09:03.0 video 1>",
              projected_pixel: [979.1752416264162, 1396.0683207694956],
              normalized_projected_pixel: [
                0.6954369613823979, 0.9915257960010622,
              ],
              camera_coordinates: [
                0.14229191564120303, 0.3495144301221889, 0.21513584738780178,
              ],
              frame_index: 16290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 544.0,
              time_token: "<TIME 00:09:04.0 video 1>",
              projected_pixel: [1203.5002858298794, 1380.2769738828276],
              normalized_projected_pixel: [
                0.8547587257314485, 0.9803103507690537,
              ],
              camera_coordinates: [
                0.19635703326524379, 0.2622257247948453, 0.1380133029980496,
              ],
              frame_index: 16320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
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
          "At the current time <TIME 00:09:43.0 video 1>, based on the last known position of the lid of cheese grater that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 542.6,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.006",
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
            "At the current time <TIME 00:09:43.0 video 1>, consider the lid of cheese grater that was moved earlier. Using its last known position to infer its current location, in which direction is the lid of cheese grater from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 583.0,
            camera_coordinates: [
              1.1690144885456193, 0.8539597247038345, -0.4728765407714759,
            ],
            world_coordinates: [
              -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.1690144885456193,
              z: -0.4728765407714759,
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
            "At the current time <TIME 00:09:43.0 video 1>, consider the lid of cheese grater that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, where is the lid of cheese grater relative to handful of cheese from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "59907c8c4dfbb77c",
            object_x_name: "lid of cheese grater",
            object_x_reference_time_sec: 583.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
            ],
            object_x_camera_coordinates: [
              1.1690144885456193, 0.8539597247038345, -0.4728765407714759,
            ],
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_reference_time_sec: 583.0,
            object_y_world_coordinates: [
              -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
            ],
            object_y_projected_pixel: [818.5471893649968, 1030.6217771645238],
            object_y_normalized_projected_pixel: [
              0.5813545379012761, 0.7319756940088947,
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
            "At the current time <TIME 00:09:43.0 video 1>, consider the lid of cheese grater that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, how far is the lid of cheese grater from the handful of cheese: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "59907c8c4dfbb77c",
            object_x_name: "lid of cheese grater",
            object_x_reference_time_sec: 583.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_pixel: [818.5471893649968, 1030.6217771645238],
            object_y_normalized_projected_pixel: [
              0.5813545379012761, 0.7319756940088947,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.0715717705111305, 0.5905004572048012, -0.9609178974228132,
            ],
            distance_m: 1.5557377847513114,
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
  oos_staged_h10p0_27: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "59907c8c4dfbb77c",
    object_a_name: "lid of cheese grater",
    query_time_sec: 608.0,
    query_time_in_clip_sec: 608.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 608.0,
    clip_duration_sec: 608.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "59907c8c4dfbb77c",
      object_name: "lid of cheese grater",
      query_time_sec: 608.0,
      oos_span_start_sec: 598.0,
      oos_span_end_sec: 623.0,
      oos_duration_sec: 25.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.006",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 608.0,
      clip_duration_sec: 608.0,
      anchor_assoc_id: "a776f493443b8c93",
      anchor_name: "cone of juicer",
      anchor_projected_pixel: [1009.0133324944417, 1306.91315390711],
      anchor_world_coordinates: [
        -0.5506946304615721, -3.722429353052755, -0.4046723770095935,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_27",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:10:08.0 video 1>, is the previously moved lid of cheese grater visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.543941593306771, 0.41179586901172405, -0.14207231618353644,
          ],
          frame_index: 16278,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid of cheese grater was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:57.0 video 1>; Point=(0.9744, 0.5501)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 597.0,
          sampled_last_visible_time_in_clip_sec: 597.0,
          sampled_last_visible_time_token: "<TIME 00:09:57.0 video 1>",
          projected_pixel: [1372.0019887886433, 774.5320361083053],
          normalized_projected_pixel: [0.9744332306737523, 0.5500937756451032],
          camera_coordinates: [
            0.8197822097690985, 0.08356639690770917, 0.6067624546172123,
          ],
          frame_index: 16278,
          status: "in_view",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 597.0,
              time_token: "<TIME 00:09:57.0 video 1>",
              projected_pixel: [1372.0019887886433, 774.5320361083053],
              normalized_projected_pixel: [
                0.9744332306737523, 0.5500937756451032,
              ],
              camera_coordinates: [
                0.8197822097690985, 0.08356639690770917, 0.6067624546172123,
              ],
              frame_index: 16278,
              status: "in_view",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
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
          "The lid of cheese grater was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:02.6 video 1>; Point=(0.6673, 0.8055)",
          "<TIME 00:09:03.0 video 1>; Point=(0.6954, 0.9915)",
          "<TIME 00:09:04.0 video 1>; Point=(0.8548, 0.9803)",
        ],
        answer_metadata: {
          last_placement_time_sec: 542.6,
          last_placement_time_in_clip_sec: 542.6,
          last_placement_time_token: "<TIME 00:09:02.6 video 1>",
          projected_pixel: [939.5777863677306, 1134.131098134863],
          normalized_projected_pixel: [0.6673137687270814, 0.8054908367435106],
          camera_coordinates: [
            0.177015768870859, 0.314083963868759, 0.41974493335844976,
          ],
          frame_index: 16278,
          status: "last_past_track_end",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 542.6,
              time_token: "<TIME 00:09:02.6 video 1>",
              projected_pixel: [939.5777863677306, 1134.131098134863],
              normalized_projected_pixel: [
                0.6673137687270814, 0.8054908367435106,
              ],
              camera_coordinates: [
                0.177015768870859, 0.314083963868759, 0.41974493335844976,
              ],
              frame_index: 16278,
              status: "last_past_track_end",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 543.0,
              time_token: "<TIME 00:09:03.0 video 1>",
              projected_pixel: [979.1752416264162, 1396.0683207694956],
              normalized_projected_pixel: [
                0.6954369613823979, 0.9915257960010622,
              ],
              camera_coordinates: [
                0.14229191564120303, 0.3495144301221889, 0.21513584738780178,
              ],
              frame_index: 16290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 544.0,
              time_token: "<TIME 00:09:04.0 video 1>",
              projected_pixel: [1203.5002858298794, 1380.2769738828276],
              normalized_projected_pixel: [
                0.8547587257314485, 0.9803103507690537,
              ],
              camera_coordinates: [
                0.19635703326524379, 0.2622257247948453, 0.1380133029980496,
              ],
              frame_index: 16320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
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
          "At the current time <TIME 00:10:08.0 video 1>, based on the last known position of the lid of cheese grater that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 542.6,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.006",
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
            "At the current time <TIME 00:10:08.0 video 1>, consider the lid of cheese grater that was moved earlier. Using its last known position to infer its current location, in which direction is the lid of cheese grater from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 608.0,
            camera_coordinates: [
              0.543941593306771, 0.41179586901172405, -0.14207231618353644,
            ],
            world_coordinates: [
              -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.543941593306771,
              z: -0.14207231618353644,
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
            "At the current time <TIME 00:10:08.0 video 1>, consider the lid of cheese grater that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone of juicer (marked in red) in the current frame, where is the lid of cheese grater relative to cone of juicer from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "59907c8c4dfbb77c",
            object_x_name: "lid of cheese grater",
            object_x_reference_time_sec: 608.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
            ],
            object_x_camera_coordinates: [
              0.543941593306771, 0.41179586901172405, -0.14207231618353644,
            ],
            object_y_assoc_id: "a776f493443b8c93",
            object_y_name: "cone of juicer",
            object_y_reference_time_sec: 608.0,
            object_y_world_coordinates: [
              -0.5506946304615721, -3.722429353052755, -0.4046723770095935,
            ],
            object_y_projected_pixel: [1009.0133324944417, 1306.91315390711],
            object_y_normalized_projected_pixel: [
              0.7166287872829842, 0.9282053649908452,
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
            "At the current time <TIME 00:10:08.0 video 1>, consider the lid of cheese grater that was moved earlier. Using its last known position to infer its current location, and using the current position of the cone of juicer (marked in red) in the current frame, how far is the lid of cheese grater from the cone of juicer: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "59907c8c4dfbb77c",
            object_x_name: "lid of cheese grater",
            object_x_reference_time_sec: 608.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "a776f493443b8c93",
            object_y_name: "cone of juicer",
            object_y_pixel: [1009.0133324944417, 1306.91315390711],
            object_y_normalized_projected_pixel: [
              0.7166287872829842, 0.9282053649908452,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.33876082881989067, 0.01508188377586861, -0.470808068558084,
            ],
            distance_m: 0.580212547072503,
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
  oos_staged_h10p0_28: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "d2f447fb1751d8c4",
    object_a_name: "cheese grater",
    query_time_sec: 695.0,
    query_time_in_clip_sec: 695.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 695.0,
    clip_duration_sec: 695.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "d2f447fb1751d8c4",
      object_name: "cheese grater",
      query_time_sec: 695.0,
      oos_span_start_sec: 685.0,
      oos_span_end_sec: 769.0,
      oos_duration_sec: 84.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_hook.001",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 695.0,
      clip_duration_sec: 695.0,
      anchor_assoc_id: "dd24dad5d22e4afe",
      anchor_name: "new bowl with cheese",
      anchor_projected_pixel: [1072.3047227516681, 1178.2118906329636],
      anchor_world_coordinates: [
        -0.4084494734245433, -2.5440169195809452, -0.5786229713176028,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_28",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:11:35.0 video 1>, is the previously moved cheese grater visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.3061560915270745, 0.8708769727077366, -0.824002624080781,
          ],
          frame_index: 16309,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cheese grater was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:11:23.0 video 1>; Point=(0.9376, 0.3493)",
          "<TIME 00:11:24.0 video 1>; Point=(0.7807, 0.3667)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 684.0,
          sampled_last_visible_time_in_clip_sec: 684.0,
          sampled_last_visible_time_token: "<TIME 00:11:24.0 video 1>",
          projected_pixel: [1099.1668949910027, 516.3533157553559],
          normalized_projected_pixel: [0.7806583061015644, 0.36672820721261074],
          camera_coordinates: [
            0.4772878420478368, -0.22608343074077686, 0.6951060199880921,
          ],
          frame_index: 16309,
          status: "in_view",
          fixture: "P01_hook.001",
          world_coordinates: [
            -1.1907962824582337, -3.983338518213589, -0.1993038513517833,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 683.0,
              time_token: "<TIME 00:11:23.0 video 1>",
              projected_pixel: [1320.170994862191, 491.8491303310841],
              normalized_projected_pixel: [
                0.9376214452146243, 0.34932466642832677,
              ],
              camera_coordinates: [
                1.1356153479280349, -0.3907499113643298, 0.9333801648531019,
              ],
              frame_index: 16309,
              status: "in_view",
              fixture: "P01_hook.001",
              world_coordinates: [
                -1.1907962824582337, -3.983338518213589, -0.1993038513517833,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 684.0,
              time_token: "<TIME 00:11:24.0 video 1>",
              projected_pixel: [1099.1668949910027, 516.3533157553559],
              normalized_projected_pixel: [
                0.7806583061015644, 0.36672820721261074,
              ],
              camera_coordinates: [
                0.4772878420478368, -0.22608343074077686, 0.6951060199880921,
              ],
              frame_index: 16309,
              status: "in_view",
              fixture: "P01_hook.001",
              world_coordinates: [
                -1.1907962824582337, -3.983338518213589, -0.1993038513517833,
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
          "The cheese grater was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:03.6 video 1>; Point=(0.8796, 0.5668)",
          "<TIME 00:09:04.0 video 1>; Point=(1.7932, 0.74)",
        ],
        answer_metadata: {
          last_placement_time_sec: 543.6333333333333,
          last_placement_time_in_clip_sec: 543.6333333333333,
          last_placement_time_token: "<TIME 00:09:03.6 video 1>",
          projected_pixel: [1238.5211213231141, 798.1196767515397],
          normalized_projected_pixel: [0.879631478212439, 0.5668463613292185],
          camera_coordinates: [
            0.36431341344458135, 0.06208438830655261, 0.37554044588419533,
          ],
          frame_index: 16309,
          status: "last_past_track_end",
          fixture: "P01_hook.001",
          world_coordinates: [
            -1.1907962824582337, -3.983338518213589, -0.1993038513517833,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 543.6333333333333,
              time_token: "<TIME 00:09:03.6 video 1>",
              projected_pixel: [1238.5211213231141, 798.1196767515397],
              normalized_projected_pixel: [
                0.879631478212439, 0.5668463613292185,
              ],
              camera_coordinates: [
                0.36431341344458135, 0.06208438830655261, 0.37554044588419533,
              ],
              frame_index: 16309,
              status: "last_past_track_end",
              fixture: "P01_hook.001",
              world_coordinates: [
                -1.1907962824582337, -3.983338518213589, -0.1993038513517833,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 544.0,
              time_token: "<TIME 00:09:04.0 video 1>",
              projected_pixel: [2524.7733241505375, 1041.9750771519773],
              normalized_projected_pixel: [
                1.7931628722660067, 0.7400391172954385,
              ],
              camera_coordinates: [
                0.5542530793312115, 0.10603995533347216, 0.15081066915851726,
              ],
              frame_index: 16320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_hook.001",
              world_coordinates: [
                -1.1907962824582337, -3.983338518213589, -0.1993038513517833,
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
          "At the current time <TIME 00:11:35.0 video 1>, based on the last known position of the cheese grater that was moved earlier, which fixture type is closest to it?",
        choices: ["drawer", "fridgefreezer", "cupboard", "counter", "hook"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 543.6333333333333,
          correct_fixture: "hook",
          display_correct_answer: "hook",
          raw_correct_fixture: "P01_hook.001",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "drawer",
            "fridgefreezer",
            "hob",
            "hook",
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
            "At the current time <TIME 00:11:35.0 video 1>, consider the cheese grater that was moved earlier. Using its last known position to infer its current location, in which direction is the cheese grater from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 695.0,
            camera_coordinates: [
              1.3061560915270745, 0.8708769727077366, -0.824002624080781,
            ],
            world_coordinates: [
              -1.1907962824582337, -3.983338518213589, -0.1993038513517833,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.3061560915270745,
              z: -0.824002624080781,
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
            "At the current time <TIME 00:11:35.0 video 1>, consider the cheese grater that was moved earlier. Using its last known position to infer its current location, and using the current position of the new bowl with cheese (marked in red) in the current frame, where is the cheese grater relative to new bowl with cheese from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "d2f447fb1751d8c4",
            object_x_name: "cheese grater",
            object_x_reference_time_sec: 695.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.1907962824582337, -3.983338518213589, -0.1993038513517833,
            ],
            object_x_camera_coordinates: [
              1.3061560915270745, 0.8708769727077366, -0.824002624080781,
            ],
            object_y_assoc_id: "dd24dad5d22e4afe",
            object_y_name: "new bowl with cheese",
            object_y_reference_time_sec: 695.0,
            object_y_world_coordinates: [
              -0.4084494734245433, -2.5440169195809452, -0.5786229713176028,
            ],
            object_y_projected_pixel: [1072.3047227516681, 1178.2118906329636],
            object_y_normalized_projected_pixel: [
              0.7615800587724916, 0.8367982177790935,
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
            "At the current time <TIME 00:11:35.0 video 1>, consider the cheese grater that was moved earlier. Using its last known position to infer its current location, and using the current position of the new bowl with cheese (marked in red) in the current frame, how far is the cheese grater from the new bowl with cheese: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "d2f447fb1751d8c4",
            object_x_name: "cheese grater",
            object_x_reference_time_sec: 695.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "dd24dad5d22e4afe",
            object_y_name: "new bowl with cheese",
            object_y_pixel: [1072.3047227516681, 1178.2118906329636],
            object_y_normalized_projected_pixel: [
              0.7615800587724916, 0.8367982177790935,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.0121635328133847, 0.49975899790224587, -1.246339486466566,
            ],
            distance_m: 1.6815457735866937,
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
  oos_staged_h10p0_29: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "59907c8c4dfbb77c",
    object_a_name: "lid of cheese grater",
    query_time_sec: 695.0,
    query_time_in_clip_sec: 695.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 695.0,
    clip_duration_sec: 695.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "59907c8c4dfbb77c",
      object_name: "lid of cheese grater",
      query_time_sec: 695.0,
      oos_span_start_sec: 685.0,
      oos_span_end_sec: 769.0,
      oos_duration_sec: 84.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.006",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 695.0,
      clip_duration_sec: 695.0,
      anchor_assoc_id: "24a3c683c389b867",
      anchor_name: "handful of cheese",
      anchor_projected_pixel: [828.5631373460143, 939.6704187511435],
      anchor_world_coordinates: [
        -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_29",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:11:35.0 video 1>, is the previously moved lid of cheese grater visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.9989424278685615, 0.8258771787179418, -0.5868483908170037,
          ],
          frame_index: 16278,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid of cheese grater was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:11:23.0 video 1>; Point=(0.943, 0.4319)",
          "<TIME 00:11:24.0 video 1>; Point=(0.8192, 0.5519)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 684.0,
          sampled_last_visible_time_in_clip_sec: 684.0,
          sampled_last_visible_time_token: "<TIME 00:11:24.0 video 1>",
          projected_pixel: [1153.3992130934248, 777.1224734400588],
          normalized_projected_pixel: [0.8191755774811256, 0.5519335748864054],
          camera_coordinates: [
            0.35552286845490055, 0.05544942861540547, 0.45311451753153165,
          ],
          frame_index: 16278,
          status: "in_view",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 683.0,
              time_token: "<TIME 00:11:23.0 video 1>",
              projected_pixel: [1327.780685930657, 608.0874058492421],
              normalized_projected_pixel: [
                0.9430260553484779, 0.4318802598361095,
              ],
              camera_coordinates: [
                0.9006957492542891, -0.13994815696765417, 0.7474807051899397,
              ],
              frame_index: 16278,
              status: "in_view",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 684.0,
              time_token: "<TIME 00:11:24.0 video 1>",
              projected_pixel: [1153.3992130934248, 777.1224734400588],
              normalized_projected_pixel: [
                0.8191755774811256, 0.5519335748864054,
              ],
              camera_coordinates: [
                0.35552286845490055, 0.05544942861540547, 0.45311451753153165,
              ],
              frame_index: 16278,
              status: "in_view",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
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
          "The lid of cheese grater was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:02.6 video 1>; Point=(0.6673, 0.8055)",
          "<TIME 00:09:03.0 video 1>; Point=(0.6954, 0.9915)",
          "<TIME 00:09:04.0 video 1>; Point=(0.8548, 0.9803)",
        ],
        answer_metadata: {
          last_placement_time_sec: 542.6,
          last_placement_time_in_clip_sec: 542.6,
          last_placement_time_token: "<TIME 00:09:02.6 video 1>",
          projected_pixel: [939.5777863677306, 1134.131098134863],
          normalized_projected_pixel: [0.6673137687270814, 0.8054908367435106],
          camera_coordinates: [
            0.177015768870859, 0.314083963868759, 0.41974493335844976,
          ],
          frame_index: 16278,
          status: "last_past_track_end",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 542.6,
              time_token: "<TIME 00:09:02.6 video 1>",
              projected_pixel: [939.5777863677306, 1134.131098134863],
              normalized_projected_pixel: [
                0.6673137687270814, 0.8054908367435106,
              ],
              camera_coordinates: [
                0.177015768870859, 0.314083963868759, 0.41974493335844976,
              ],
              frame_index: 16278,
              status: "last_past_track_end",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 543.0,
              time_token: "<TIME 00:09:03.0 video 1>",
              projected_pixel: [979.1752416264162, 1396.0683207694956],
              normalized_projected_pixel: [
                0.6954369613823979, 0.9915257960010622,
              ],
              camera_coordinates: [
                0.14229191564120303, 0.3495144301221889, 0.21513584738780178,
              ],
              frame_index: 16290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 544.0,
              time_token: "<TIME 00:09:04.0 video 1>",
              projected_pixel: [1203.5002858298794, 1380.2769738828276],
              normalized_projected_pixel: [
                0.8547587257314485, 0.9803103507690537,
              ],
              camera_coordinates: [
                0.19635703326524379, 0.2622257247948453, 0.1380133029980496,
              ],
              frame_index: 16320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
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
          "At the current time <TIME 00:11:35.0 video 1>, based on the last known position of the lid of cheese grater that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area below the boiler",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 542.6,
          correct_fixture: "counter",
          display_correct_answer: "counter area below the boiler",
          raw_correct_fixture: "P01_counter.006",
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
            "At the current time <TIME 00:11:35.0 video 1>, consider the lid of cheese grater that was moved earlier. Using its last known position to infer its current location, in which direction is the lid of cheese grater from your viewpoint?",
          choices: ["Front-right", "Back-left", "Front-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 695.0,
            camera_coordinates: [
              0.9989424278685615, 0.8258771787179418, -0.5868483908170037,
            ],
            world_coordinates: [
              -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.9989424278685615,
              z: -0.5868483908170037,
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
            "At the current time <TIME 00:11:35.0 video 1>, consider the lid of cheese grater that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, where is the lid of cheese grater relative to handful of cheese from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-right", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "59907c8c4dfbb77c",
            object_x_name: "lid of cheese grater",
            object_x_reference_time_sec: 695.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.1148242501952974, -3.6186944050695242, -0.3172456506248045,
            ],
            object_x_camera_coordinates: [
              0.9989424278685615, 0.8258771787179418, -0.5868483908170037,
            ],
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_reference_time_sec: 695.0,
            object_y_world_coordinates: [
              -0.3136039331260654, -2.299856038250362, -0.5148093634471781,
            ],
            object_y_projected_pixel: [828.5631373460143, 939.6704187511435],
            object_y_normalized_projected_pixel: [
              0.5884681373196124, 0.667379558772119,
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
            "At the current time <TIME 00:11:35.0 video 1>, consider the lid of cheese grater that was moved earlier. Using its last known position to infer its current location, and using the current position of the handful of cheese (marked in red) in the current frame, how far is the lid of cheese grater from the handful of cheese: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "59907c8c4dfbb77c",
            object_x_name: "lid of cheese grater",
            object_x_reference_time_sec: 695.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "24a3c683c389b867",
            object_y_name: "handful of cheese",
            object_y_pixel: [828.5631373460143, 939.6704187511435],
            object_y_normalized_projected_pixel: [
              0.5884681373196124, 0.667379558772119,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8860601831007804, 0.6230478568782454, -1.1167044259184051,
            ],
            distance_m: 1.5557377847513114,
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
  oos_staged_h10p0_30: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "250fd6c1df977def",
    object_a_name: "notepad",
    query_time_sec: 708.0,
    query_time_in_clip_sec: 708.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 708.0,
    clip_duration_sec: 708.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "250fd6c1df977def",
      object_name: "notepad",
      query_time_sec: 708.0,
      oos_span_start_sec: 698.0,
      oos_span_end_sec: 741.0,
      oos_duration_sec: 43.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 708.0,
      clip_duration_sec: 708.0,
      anchor_assoc_id: "d0b77bb6544b2bba",
      anchor_name: "saucepan2",
      anchor_projected_pixel: [770.4284443725048, 703.4414308737997],
      anchor_world_coordinates: [
        -0.08810239249394303, -2.2640798469708825, -0.4567853108540515,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_30",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:11:48.0 video 1>, is the previously moved notepad visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1507.2338665842049, 951.0371107426133],
          camera_coordinates: [
            0.9923766473820623, 0.301260295314469, 0.4358169467444848,
          ],
          frame_index: 191,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The notepad was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:11:37.0 video 1>; Point=(0.5874, 0.6405)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 697.0,
          sampled_last_visible_time_in_clip_sec: 697.0,
          sampled_last_visible_time_token: "<TIME 00:11:37.0 video 1>",
          projected_pixel: [827.086967200994, 901.8678217297636],
          normalized_projected_pixel: [0.5874197210234332, 0.6405311233876162],
          camera_coordinates: [
            0.1575247445017074, 0.23997616616543738, 0.750692251506622,
          ],
          frame_index: 191,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 697.0,
              time_token: "<TIME 00:11:37.0 video 1>",
              projected_pixel: [827.086967200994, 901.8678217297636],
              normalized_projected_pixel: [
                0.5874197210234332, 0.6405311233876162,
              ],
              camera_coordinates: [
                0.1575247445017074, 0.23997616616543738, 0.750692251506622,
              ],
              frame_index: 191,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
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
          "The notepad was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:06.4 video 1>; Point=(0.6337, 0.7479)",
          "<TIME 00:00:07.0 video 1>; Point=(0.6494, 0.7288)",
          "<TIME 00:00:08.0 video 1>; Point=(0.6607, 0.7204)",
          "<TIME 00:00:09.0 video 1>; Point=(0.6623, 0.7276)",
        ],
        answer_metadata: {
          last_placement_time_sec: 6.366666666666666,
          last_placement_time_in_clip_sec: 6.366666666666666,
          last_placement_time_token: "<TIME 00:00:06.4 video 1>",
          projected_pixel: [892.2426151170553, 1053.0275884198368],
          normalized_projected_pixel: [0.6336950391456359, 0.7478889122299978],
          camera_coordinates: [
            0.14580052295455959, 0.26099181610402444, 0.44587349300497364,
          ],
          frame_index: 191,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 6.366666666666666,
              time_token: "<TIME 00:00:06.4 video 1>",
              projected_pixel: [892.2426151170553, 1053.0275884198368],
              normalized_projected_pixel: [
                0.6336950391456359, 0.7478889122299978,
              ],
              camera_coordinates: [
                0.14580052295455959, 0.26099181610402444, 0.44587349300497364,
              ],
              frame_index: 191,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 7.0,
              time_token: "<TIME 00:00:07.0 video 1>",
              projected_pixel: [914.3409495767265, 1026.1759917087034],
              normalized_projected_pixel: [
                0.6493898789607433, 0.7288181759294768,
              ],
              camera_coordinates: [
                0.15752959225089214, 0.23353136560262905, 0.4339890160652262,
              ],
              frame_index: 210,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 8.0,
              time_token: "<TIME 00:00:08.0 video 1>",
              projected_pixel: [930.3318957990102, 1014.2750497799739],
              normalized_projected_pixel: [
                0.6607470850845243, 0.7203658024005496,
              ],
              camera_coordinates: [
                0.1703173630600454, 0.22632814220490982, 0.43693041427316526,
              ],
              frame_index: 240,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 9.0,
              time_token: "<TIME 00:00:09.0 video 1>",
              projected_pixel: [932.5105079461744, 1024.4459479533336],
              normalized_projected_pixel: [
                0.6622943948481352, 0.7275894516714018,
              ],
              camera_coordinates: [
                0.17343585241588055, 0.23585621898408848, 0.43949587046087063,
              ],
              frame_index: 270,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
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
          "At the current time <TIME 00:11:48.0 video 1>, based on the last known position of the notepad that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area close to the microwave",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 6.366666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.003",
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
            "At the current time <TIME 00:11:48.0 video 1>, consider the notepad that was moved earlier. Using its last known position to infer its current location, in which direction is the notepad from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 708.0,
            camera_coordinates: [
              0.9923766473820623, 0.301260295314469, 0.4358169467444848,
            ],
            world_coordinates: [
              -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.9923766473820623,
              z: 0.4358169467444848,
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
            "At the current time <TIME 00:11:48.0 video 1>, consider the notepad that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan2 (marked in red) in the current frame, where is the notepad relative to saucepan2 from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "250fd6c1df977def",
            object_x_name: "notepad",
            object_x_reference_time_sec: 708.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3924544565453181, -3.191312304559032, -0.5775691352128529,
            ],
            object_x_camera_coordinates: [
              0.9923766473820623, 0.301260295314469, 0.4358169467444848,
            ],
            object_y_assoc_id: "d0b77bb6544b2bba",
            object_y_name: "saucepan2",
            object_y_reference_time_sec: 708.0,
            object_y_world_coordinates: [
              -0.08810239249394303, -2.2640798469708825, -0.4567853108540515,
            ],
            object_y_projected_pixel: [770.4284443725048, 703.4414308737997],
            object_y_normalized_projected_pixel: [
              0.5471792928781994, 0.49960328897286915,
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
            "At the current time <TIME 00:11:48.0 video 1>, consider the notepad that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan2 (marked in red) in the current frame, how far is the notepad from the saucepan2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "250fd6c1df977def",
            object_x_name: "notepad",
            object_x_reference_time_sec: 708.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "d0b77bb6544b2bba",
            object_y_name: "saucepan2",
            object_y_pixel: [770.4284443725048, 703.4414308737997],
            object_y_normalized_projected_pixel: [
              0.5471792928781994, 0.49960328897286915,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9273039333110145, 0.3039184965777439, -0.12132561241499995,
            ],
            distance_m: 0.9833508740648118,
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
  oos_staged_h10p0_31: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "a776f493443b8c93",
    object_a_name: "cone of juicer",
    query_time_sec: 708.0,
    query_time_in_clip_sec: 708.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 708.0,
    clip_duration_sec: 708.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "a776f493443b8c93",
      object_name: "cone of juicer",
      query_time_sec: 708.0,
      oos_span_start_sec: 698.0,
      oos_span_end_sec: 759.0,
      oos_duration_sec: 61.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 708.0,
      clip_duration_sec: 708.0,
      anchor_assoc_id: "d1a8b2db02ba7d50",
      anchor_name: "second slice of butter",
      anchor_projected_pixel: [891.681942198524, 951.3386877141045],
      anchor_world_coordinates: [
        -0.2960268107058548, -2.3411202340466324, -0.5084649364513086,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_31",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:11:48.0 video 1>, is the previously moved cone of juicer visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [16807.188921622484, -167.07579148527623],
          camera_coordinates: [
            1.5258721931927282, 0.29231794835830954, 0.20707889160275306,
          ],
          frame_index: 18004,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cone of juicer was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:11:37.0 video 1>; Point=(0.8527, 0.4915)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 697.0,
          sampled_last_visible_time_in_clip_sec: 697.0,
          sampled_last_visible_time_token: "<TIME 00:11:37.0 video 1>",
          projected_pixel: [1200.5932328054844, 692.0743417739307],
          normalized_projected_pixel: [0.8526940573902588, 0.4915300722826212],
          camera_coordinates: [
            0.6768520711248964, -0.018917447437536983, 0.7677739814228831,
          ],
          frame_index: 18004,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.5506946304615721, -3.722429353052755, -0.4046723770095935,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 697.0,
              time_token: "<TIME 00:11:37.0 video 1>",
              projected_pixel: [1200.5932328054844, 692.0743417739307],
              normalized_projected_pixel: [
                0.8526940573902588, 0.4915300722826212,
              ],
              camera_coordinates: [
                0.6768520711248964, -0.018917447437536983, 0.7677739814228831,
              ],
              frame_index: 18004,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.5506946304615721, -3.722429353052755, -0.4046723770095935,
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
          "The cone of juicer was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:10:00.1 video 1>; Point=(0.6343, 0.7595)",
          "<TIME 00:10:01.0 video 1>; Point=(0.7548, 0.6833)",
          "<TIME 00:10:02.0 video 1>; Point=(0.8607, 0.5588)",
          "<TIME 00:10:03.0 video 1>; Point=(0.8139, 0.4018)",
        ],
        answer_metadata: {
          last_placement_time_sec: 600.1333333333333,
          last_placement_time_in_clip_sec: 600.1333333333333,
          last_placement_time_token: "<TIME 00:10:00.1 video 1>",
          projected_pixel: [893.0355005814052, 1069.3514080345137],
          normalized_projected_pixel: [0.6342581680265662, 0.7594825341154217],
          camera_coordinates: [
            0.12499356999949773, 0.23330357005732372, 0.37883386400190977,
          ],
          frame_index: 18004,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.5506946304615721, -3.722429353052755, -0.4046723770095935,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 600.1333333333333,
              time_token: "<TIME 00:10:00.1 video 1>",
              projected_pixel: [893.0355005814052, 1069.3514080345137],
              normalized_projected_pixel: [
                0.6342581680265662, 0.7594825341154217,
              ],
              camera_coordinates: [
                0.12499356999949773, 0.23330357005732372, 0.37883386400190977,
              ],
              frame_index: 18004,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.5506946304615721, -3.722429353052755, -0.4046723770095935,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 601.0,
              time_token: "<TIME 00:10:01.0 video 1>",
              projected_pixel: [1062.6887937777874, 962.1381080269337],
              normalized_projected_pixel: [
                0.754750563762633, 0.6833367244509472,
              ],
              camera_coordinates: [
                0.23878400022189572, 0.1677916423426128, 0.38225350515343504,
              ],
              frame_index: 18030,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.5506946304615721, -3.722429353052755, -0.4046723770095935,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 602.0,
              time_token: "<TIME 00:10:02.0 video 1>",
              projected_pixel: [1211.8741529671038, 786.761407457367],
              normalized_projected_pixel: [
                0.8607060745504999, 0.5587794087055163,
              ],
              camera_coordinates: [
                0.34742518265491684, 0.05457410452017103, 0.38226349024481304,
              ],
              frame_index: 18060,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.5506946304615721, -3.722429353052755, -0.4046723770095935,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 603.0,
              time_token: "<TIME 00:10:03.0 video 1>",
              projected_pixel: [1145.968108512523, 565.7930524768067],
              normalized_projected_pixel: [
                0.8138978043412806, 0.4018416565886411,
              ],
              camera_coordinates: [
                0.3677870739804474, -0.11533483730842398, 0.47487434931934963,
              ],
              frame_index: 18090,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.5506946304615721, -3.722429353052755, -0.4046723770095935,
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
          "At the current time <TIME 00:11:48.0 video 1>, based on the last known position of the cone of juicer that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 600.1333333333333,
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
            "At the current time <TIME 00:11:48.0 video 1>, consider the cone of juicer that was moved earlier. Using its last known position to infer its current location, in which direction is the cone of juicer from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 708.0,
            camera_coordinates: [
              1.5258721931927282, 0.29231794835830954, 0.20707889160275306,
            ],
            world_coordinates: [
              -0.5506946304615721, -3.722429353052755, -0.4046723770095935,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.5258721931927282,
              z: 0.20707889160275306,
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
            "At the current time <TIME 00:11:48.0 video 1>, consider the cone of juicer that was moved earlier. Using its last known position to infer its current location, and using the current position of the second slice of butter (marked in red) in the current frame, where is the cone of juicer relative to second slice of butter from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "a776f493443b8c93",
            object_x_name: "cone of juicer",
            object_x_reference_time_sec: 708.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.5506946304615721, -3.722429353052755, -0.4046723770095935,
            ],
            object_x_camera_coordinates: [
              1.5258721931927282, 0.29231794835830954, 0.20707889160275306,
            ],
            object_y_assoc_id: "d1a8b2db02ba7d50",
            object_y_name: "second slice of butter",
            object_y_reference_time_sec: 708.0,
            object_y_world_coordinates: [
              -0.2960268107058548, -2.3411202340466324, -0.5084649364513086,
            ],
            object_y_projected_pixel: [891.681942198524, 951.3386877141045],
            object_y_normalized_projected_pixel: [
              0.6332968339478153, 0.675666681615131,
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
            "At the current time <TIME 00:11:48.0 video 1>, consider the cone of juicer that was moved earlier. Using its last known position to infer its current location, and using the current position of the second slice of butter (marked in red) in the current frame, how far is the cone of juicer from the second slice of butter: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "a776f493443b8c93",
            object_x_name: "cone of juicer",
            object_x_reference_time_sec: 708.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "d1a8b2db02ba7d50",
            object_y_name: "second slice of butter",
            object_y_pixel: [891.681942198524, 951.3386877141045],
            object_y_normalized_projected_pixel: [
              0.6332968339478153, 0.675666681615131,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.3833707485462745, 0.11143057420297153, -0.2398167535085484,
            ],
            distance_m: 1.4084187857537487,
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
  oos_staged_h10p0_32: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161948",
      },
    },
    video_id: "P01-20240202-161948",
    object_a_assoc_id: "4f3cf7402f66f83e",
    object_a_name: "scale",
    query_time_sec: 713.0,
    query_time_in_clip_sec: 713.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 713.0,
    clip_duration_sec: 713.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-161948",
      assoc_id: "4f3cf7402f66f83e",
      object_name: "scale",
      query_time_sec: 713.0,
      oos_span_start_sec: 703.0,
      oos_span_end_sec: 740.0,
      oos_duration_sec: 37.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 713.0,
      clip_duration_sec: 713.0,
      anchor_assoc_id: "d0b77bb6544b2bba",
      anchor_name: "saucepan2",
      anchor_projected_pixel: [790.9704656250466, 697.9649442502479],
      anchor_world_coordinates: [
        -0.08810239249394303, -2.2640798469708825, -0.4567853108540515,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_32",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:11:53.0 video 1>, is the previously moved scale visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1421.9392953068204, 975.3403017970521],
          camera_coordinates: [
            0.7661896602731955, 0.2854995745315352, 0.4124500613814919,
          ],
          frame_index: 1674,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The scale was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:11:42.0 video 1>; Point=(0.9646, 0.6568)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 702.0,
          sampled_last_visible_time_in_clip_sec: 702.0,
          sampled_last_visible_time_token: "<TIME 00:11:42.0 video 1>",
          projected_pixel: [1358.1485060655364, 924.7370668531454],
          normalized_projected_pixel: [0.9645941094215457, 0.6567734849809271],
          camera_coordinates: [
            0.731777583432093, 0.2427354496009122, 0.5374615516080621,
          ],
          frame_index: 1674,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 702.0,
              time_token: "<TIME 00:11:42.0 video 1>",
              projected_pixel: [1358.1485060655364, 924.7370668531454],
              normalized_projected_pixel: [
                0.9645941094215457, 0.6567734849809271,
              ],
              camera_coordinates: [
                0.731777583432093, 0.2427354496009122, 0.5374615516080621,
              ],
              frame_index: 1674,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
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
          "The scale was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:55.8 video 1>; Point=(0.7165, 0.7264)",
          "<TIME 00:00:56.0 video 1>; Point=(0.6832, 0.7236)",
          "<TIME 00:00:57.0 video 1>; Point=(0.6542, 0.7397)",
          "<TIME 00:00:58.0 video 1>; Point=(0.6436, 0.6607)",
        ],
        answer_metadata: {
          last_placement_time_sec: 55.8,
          last_placement_time_in_clip_sec: 55.8,
          last_placement_time_token: "<TIME 00:00:55.8 video 1>",
          projected_pixel: [1008.8196173154513, 1022.7440759798324],
          normalized_projected_pixel: [0.7164912054797239, 0.7263807357811309],
          camera_coordinates: [
            0.25773125541945463, 0.2628613086353417, 0.4844334461682096,
          ],
          frame_index: 1674,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 55.8,
              time_token: "<TIME 00:00:55.8 video 1>",
              projected_pixel: [1008.8196173154513, 1022.7440759798324],
              normalized_projected_pixel: [
                0.7164912054797239, 0.7263807357811309,
              ],
              camera_coordinates: [
                0.25773125541945463, 0.2628613086353417, 0.4844334461682096,
              ],
              frame_index: 1674,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 56.0,
              time_token: "<TIME 00:00:56.0 video 1>",
              projected_pixel: [961.9817759867665, 1018.8685066631023],
              normalized_projected_pixel: [
                0.6832256931724193, 0.7236282007550442,
              ],
              camera_coordinates: [
                0.22652424758380407, 0.26878753366817393, 0.5075710748597193,
              ],
              frame_index: 1680,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 57.0,
              time_token: "<TIME 00:00:57.0 video 1>",
              projected_pixel: [921.0595098346085, 1041.49288812536],
              normalized_projected_pixel: [
                0.6541615836893526, 0.739696653498125,
              ],
              camera_coordinates: [
                0.17654382278295522, 0.26594955348431204, 0.469246100907893,
              ],
              frame_index: 1710,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 58.0,
              time_token: "<TIME 00:00:58.0 video 1>",
              projected_pixel: [906.2462679772758, 930.2197686762596],
              normalized_projected_pixel: [
                0.6436408153247698, 0.6606674493439344,
              ],
              camera_coordinates: [
                0.16932772162252263, 0.18264291212458342, 0.49442779558649674,
              ],
              frame_index: 1740,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
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
          "At the current time <TIME 00:11:53.0 video 1>, based on the last known position of the scale that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area close to the microwave",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 55.8,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and near the sink",
          raw_correct_fixture: "P01_counter.002",
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
            "At the current time <TIME 00:11:53.0 video 1>, consider the scale that was moved earlier. Using its last known position to infer its current location, in which direction is the scale from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 713.0,
            camera_coordinates: [
              0.7661896602731955, 0.2854995745315352, 0.4124500613814919,
            ],
            world_coordinates: [
              -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7661896602731955,
              z: 0.4124500613814919,
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
            "At the current time <TIME 00:11:53.0 video 1>, consider the scale that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan2 (marked in red) in the current frame, where is the scale relative to saucepan2 from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "4f3cf7402f66f83e",
            object_x_name: "scale",
            object_x_reference_time_sec: 713.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.35752516416640456, -2.9624772971852833, -0.5695069413989281,
            ],
            object_x_camera_coordinates: [
              0.7661896602731955, 0.2854995745315352, 0.4124500613814919,
            ],
            object_y_assoc_id: "d0b77bb6544b2bba",
            object_y_name: "saucepan2",
            object_y_reference_time_sec: 713.0,
            object_y_world_coordinates: [
              -0.08810239249394303, -2.2640798469708825, -0.4567853108540515,
            ],
            object_y_projected_pixel: [790.9704656250466, 697.9649442502479],
            object_y_normalized_projected_pixel: [
              0.5617687966086978, 0.49571373881409647,
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
            "At the current time <TIME 00:11:53.0 video 1>, consider the scale that was moved earlier. Using its last known position to infer its current location, and using the current position of the saucepan2 (marked in red) in the current frame, how far is the scale from the saucepan2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "4f3cf7402f66f83e",
            object_x_name: "scale",
            object_x_reference_time_sec: 713.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "d0b77bb6544b2bba",
            object_y_name: "saucepan2",
            object_y_pixel: [790.9704656250466, 697.9649442502479],
            object_y_normalized_projected_pixel: [
              0.5617687966086978, 0.49571373881409647,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6818117745359018, 0.29319063466812095, -0.1490830312324377,
            ],
            distance_m: 0.7570031666739202,
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
};

export const VIDEO: VideoEntry = {
  id: "P01-20240202-161948",
  label: "P01-20240202-161948",
  sampledUrl: "https://youtu.be/Rd6G5nKyet0",
  fullUrl: "https://youtu.be/wEKMA9AkIwA",
  duration: 220,
  trajectory: TRAJECTORY,
  rawJson: { TRAJECTORY },
};

import type { TrajectoryData, VideoEntry } from "../Types";

const TRAJECTORY: Record<string, TrajectoryData> = {
  oos_staged_h10p0_0: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "c65da629615df617",
    object_a_name: "strainer",
    query_time_sec: 102.0,
    query_time_in_clip_sec: 102.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 102.0,
    clip_duration_sec: 102.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "c65da629615df617",
      object_name: "strainer",
      query_time_sec: 102.0,
      oos_span_start_sec: 92.0,
      oos_span_end_sec: 112.0,
      oos_duration_sec: 20.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 102.0,
      clip_duration_sec: 102.0,
      anchor_assoc_id: "31e4d552813d3887",
      anchor_name: "inner flask lid",
      anchor_projected_pixel: [975.7838904226012, 1214.110783798888],
      anchor_world_coordinates: [
        -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
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
          "At the current time <TIME 00:01:42.0 video 1>, is the previously moved strainer visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1618.1777954817212, 1061.5783607603573],
          camera_coordinates: [
            0.7838900679818388, 0.30400305840259423, 0.3063149294075511,
          ],
          frame_index: 1570,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The strainer was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:31.0 video 1>; Point=(0.9069, 0.7742)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 91.0,
          sampled_last_visible_time_in_clip_sec: 91.0,
          sampled_last_visible_time_token: "<TIME 00:01:31.0 video 1>",
          projected_pixel: [1276.867485401029, 1090.0524748342534],
          normalized_projected_pixel: [0.9068661117905035, 0.7741849963311459],
          camera_coordinates: [
            0.7698562116553922, 0.5111372256830726, 0.6452495287836963,
          ],
          frame_index: 1570,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 91.0,
              time_token: "<TIME 00:01:31.0 video 1>",
              projected_pixel: [1276.867485401029, 1090.0524748342534],
              normalized_projected_pixel: [
                0.9068661117905035, 0.7741849963311459,
              ],
              camera_coordinates: [
                0.7698562116553922, 0.5111372256830726, 0.6452495287836963,
              ],
              frame_index: 1570,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
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
          "The strainer was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:52.3 video 1>; Point=(0.1858, 0.7034)",
          "<TIME 00:00:53.0 video 1>; Point=(0.0023, 0.7314)",
          "<TIME 00:00:54.0 video 1>; Point=(0.0828, 0.7386)",
          "<TIME 00:00:55.0 video 1>; Point=(0.0833, 0.7426)",
        ],
        answer_metadata: {
          last_placement_time_sec: 52.333333333333336,
          last_placement_time_in_clip_sec: 52.333333333333336,
          last_placement_time_token: "<TIME 00:00:52.3 video 1>",
          projected_pixel: [261.5375273345165, 990.3638697847048],
          normalized_projected_pixel: [0.18575108475462818, 0.7033834302448188],
          camera_coordinates: [
            -0.33635901268883406, 0.2189217844702318, 0.43326772210987086,
          ],
          frame_index: 1570,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 52.333333333333336,
              time_token: "<TIME 00:00:52.3 video 1>",
              projected_pixel: [261.5375273345165, 990.3638697847048],
              normalized_projected_pixel: [
                0.18575108475462818, 0.7033834302448188,
              ],
              camera_coordinates: [
                -0.33635901268883406, 0.2189217844702318, 0.43326772210987086,
              ],
              frame_index: 1570,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 53.0,
              time_token: "<TIME 00:00:53.0 video 1>",
              projected_pixel: [3.2515092412666036, 1029.8014440707207],
              normalized_projected_pixel: [
                0.0023093105406723036, 0.731393071072955,
              ],
              camera_coordinates: [
                -0.5268626129942214, 0.24579156829020277, 0.29615250709963004,
              ],
              frame_index: 1590,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 54.0,
              time_token: "<TIME 00:00:54.0 video 1>",
              projected_pixel: [116.57050474372261, 1039.9179847065705],
              normalized_projected_pixel: [
                0.08279155166457572, 0.7385781141381892,
              ],
              camera_coordinates: [
                -0.40100110412437906, 0.23034611146384742, 0.34448824215803064,
              ],
              frame_index: 1620,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 55.0,
              time_token: "<TIME 00:00:55.0 video 1>",
              projected_pixel: [117.26764846401409, 1045.5284805159408],
              normalized_projected_pixel: [
                0.08328668214773728, 0.7425628412755262,
              ],
              camera_coordinates: [
                -0.3753145052909934, 0.21947819394842916, 0.3218315278103905,
              ],
              frame_index: 1650,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
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
          "At the current time <TIME 00:01:42.0 video 1>, based on the last known position of the strainer that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 52.333333333333336,
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
            "At the current time <TIME 00:01:42.0 video 1>, consider the strainer that was moved earlier. Using its last known position to infer its current location, in which direction is the strainer from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 102.0,
            camera_coordinates: [
              0.7838900679818388, 0.30400305840259423, 0.3063149294075511,
            ],
            world_coordinates: [
              -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7838900679818388,
              z: 0.3063149294075511,
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
            "At the current time <TIME 00:01:42.0 video 1>, consider the strainer that was moved earlier. Using its last known position to infer its current location, and using the current position of the inner flask lid (marked in red) in the current frame, where is the strainer relative to inner flask lid from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "c65da629615df617",
            object_x_name: "strainer",
            object_x_reference_time_sec: 102.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
            ],
            object_x_camera_coordinates: [
              0.7838900679818388, 0.30400305840259423, 0.3063149294075511,
            ],
            object_y_assoc_id: "31e4d552813d3887",
            object_y_name: "inner flask lid",
            object_y_reference_time_sec: 102.0,
            object_y_world_coordinates: [
              -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
            ],
            object_y_projected_pixel: [975.7838904226012, 1214.110783798888],
            object_y_normalized_projected_pixel: [
              0.693028331266052, 0.8622945907662557,
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
            "At the current time <TIME 00:01:42.0 video 1>, consider the strainer that was moved earlier. Using its last known position to infer its current location, and using the current position of the inner flask lid (marked in red) in the current frame, how far is the strainer from the inner flask lid: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "c65da629615df617",
            object_x_name: "strainer",
            object_x_reference_time_sec: 102.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "31e4d552813d3887",
            object_y_name: "inner flask lid",
            object_y_pixel: [975.7838904226012, 1214.110783798888],
            object_y_normalized_projected_pixel: [
              0.693028331266052, 0.8622945907662557,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.5596048207772459, -0.1065884207616975, -0.1349486372433406,
            ],
            distance_m: 0.5854312782653835,
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
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "c062f2a00587fe9c",
    object_a_name: "disk",
    query_time_sec: 127.0,
    query_time_in_clip_sec: 127.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 127.0,
    clip_duration_sec: 127.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "c062f2a00587fe9c",
      object_name: "disk",
      query_time_sec: 127.0,
      oos_span_start_sec: 117.0,
      oos_span_end_sec: 153.0,
      oos_duration_sec: 36.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 127.0,
      clip_duration_sec: 127.0,
      anchor_assoc_id: "0ca2d3e6c64cb047",
      anchor_name: "bowl",
      anchor_projected_pixel: [874.339829037171, 1009.4658240046386],
      anchor_world_coordinates: [
        -0.33984866329927377, -2.6928883535153676, -0.5739333287563332,
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
          "At the current time <TIME 00:02:07.0 video 1>, is the previously moved disk visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.5701203582675052, 0.8944731280024749, -0.4727045292064085,
          ],
          frame_index: 2605,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The disk was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:55.0 video 1>; Point=(0.9913, 0.5006)",
          "<TIME 00:01:56.0 video 1>; Point=(0.885, 0.5136)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 116.0,
          sampled_last_visible_time_in_clip_sec: 116.0,
          sampled_last_visible_time_token: "<TIME 00:01:56.0 video 1>",
          projected_pixel: [1246.1358462899484, 723.1638944300605],
          normalized_projected_pixel: [0.885039663558202, 0.5136107204758953],
          camera_coordinates: [
            1.2775169034146725, 0.039898223378001224, 1.2985682577195181,
          ],
          frame_index: 2605,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 115.0,
              time_token: "<TIME 00:01:55.0 video 1>",
              projected_pixel: [1395.7495730845048, 704.8846021068003],
              normalized_projected_pixel: [
                0.9912994127020631, 0.5006282685417616,
              ],
              camera_coordinates: [
                1.924032929850983, -0.0025226209040532105, 1.3320590312141039,
              ],
              frame_index: 2605,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 116.0,
              time_token: "<TIME 00:01:56.0 video 1>",
              projected_pixel: [1246.1358462899484, 723.1638944300605],
              normalized_projected_pixel: [
                0.885039663558202, 0.5136107204758953,
              ],
              camera_coordinates: [
                1.2775169034146725, 0.039898223378001224, 1.2985682577195181,
              ],
              frame_index: 2605,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
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
          "The disk was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:26.8 video 1>; Point=(0.6521, 0.6811)",
          "<TIME 00:01:27.0 video 1>; Point=(0.6357, 0.7027)",
          "<TIME 00:01:28.0 video 1>; Point=(0.6546, 0.7941)",
          "<TIME 00:01:29.0 video 1>; Point=(0.5739, 0.7902)",
        ],
        answer_metadata: {
          last_placement_time_sec: 86.83333333333333,
          last_placement_time_in_clip_sec: 86.83333333333333,
          last_placement_time_token: "<TIME 00:01:26.8 video 1>",
          projected_pixel: [918.103942172105, 959.0279645612059],
          normalized_projected_pixel: [0.6520624589290519, 0.6811278157394928],
          camera_coordinates: [
            0.12344406815053288, 0.1421444913665615, 0.33889187630359974,
          ],
          frame_index: 2605,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 86.83333333333333,
              time_token: "<TIME 00:01:26.8 video 1>",
              projected_pixel: [918.103942172105, 959.0279645612059],
              normalized_projected_pixel: [
                0.6520624589290519, 0.6811278157394928,
              ],
              camera_coordinates: [
                0.12344406815053288, 0.1421444913665615, 0.33889187630359974,
              ],
              frame_index: 2605,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 87.0,
              time_token: "<TIME 00:01:27.0 video 1>",
              projected_pixel: [895.0243598909445, 989.4253434303612],
              normalized_projected_pixel: [
                0.6356707101498186, 0.7027168632317906,
              ],
              camera_coordinates: [
                0.11483448131214313, 0.16552951714883313, 0.35143700623803287,
              ],
              frame_index: 2610,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 88.0,
              time_token: "<TIME 00:01:28.0 video 1>",
              projected_pixel: [921.6542931713477, 1118.154976820606],
              normalized_projected_pixel: [
                0.6545840150364686, 0.7941441596737259,
              ],
              camera_coordinates: [
                0.14003192423333832, 0.25841120805147383, 0.36220479926229454,
              ],
              frame_index: 2640,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 89.0,
              time_token: "<TIME 00:01:29.0 video 1>",
              projected_pixel: [808.1176198211792, 1112.614654029818],
              normalized_projected_pixel: [
                0.5739471731684511, 0.7902092713279957,
              ],
              camera_coordinates: [
                0.06462129285908658, 0.2395108530857854, 0.34634497005983067,
              ],
              frame_index: 2670,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
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
          "At the current time <TIME 00:02:07.0 video 1>, based on the last known position of the disk that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 86.83333333333333,
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
            "At the current time <TIME 00:02:07.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, in which direction is the disk from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 127.0,
            camera_coordinates: [
              0.5701203582675052, 0.8944731280024749, -0.4727045292064085,
            ],
            world_coordinates: [
              -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.5701203582675052,
              z: -0.4727045292064085,
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
            "At the current time <TIME 00:02:07.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl (marked in red) in the current frame, where is the disk relative to bowl from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "c062f2a00587fe9c",
            object_x_name: "disk",
            object_x_reference_time_sec: 127.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
            ],
            object_x_camera_coordinates: [
              0.5701203582675052, 0.8944731280024749, -0.4727045292064085,
            ],
            object_y_assoc_id: "0ca2d3e6c64cb047",
            object_y_name: "bowl",
            object_y_reference_time_sec: 127.0,
            object_y_world_coordinates: [
              -0.33984866329927377, -2.6928883535153676, -0.5739333287563332,
            ],
            object_y_projected_pixel: [874.339829037171, 1009.4658240046386],
            object_y_normalized_projected_pixel: [
              0.6209799922138998, 0.7169501590942036,
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
            "At the current time <TIME 00:02:07.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl (marked in red) in the current frame, how far is the disk from the bowl: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "c062f2a00587fe9c",
            object_x_name: "disk",
            object_x_reference_time_sec: 127.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0ca2d3e6c64cb047",
            object_y_name: "bowl",
            object_y_pixel: [874.339829037171, 1009.4658240046386],
            object_y_normalized_projected_pixel: [
              0.6209799922138998, 0.7169501590942036,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.436176938215183, 0.6634122540898673, -0.9301571272638244,
            ],
            distance_m: 1.2229302603611787,
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
  oos_staged_h10p0_2: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "541469e8f03660d2",
    object_a_name: "candy floss bowl",
    query_time_sec: 127.0,
    query_time_in_clip_sec: 127.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 127.0,
    clip_duration_sec: 127.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "541469e8f03660d2",
      object_name: "candy floss bowl",
      query_time_sec: 127.0,
      oos_span_start_sec: 117.0,
      oos_span_end_sec: 153.0,
      oos_duration_sec: 36.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 127.0,
      clip_duration_sec: 127.0,
      anchor_assoc_id: "caeb494b6574cb34",
      anchor_name: "mug",
      anchor_projected_pixel: [1171.0729142768228, 961.4526423629156],
      anchor_world_coordinates: [
        -0.3848470740297004, -2.8855378183324882, -0.49640388352392173,
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
          "At the current time <TIME 00:02:07.0 video 1>, is the previously moved candy floss bowl visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.48860618735567485, 0.9401456526367045, -0.42271771978496664,
          ],
          frame_index: 2219,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The candy floss bowl was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:55.0 video 1>; Point=(0.9896, 0.5211)",
          "<TIME 00:01:56.0 video 1>; Point=(0.8815, 0.5389)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 116.0,
          sampled_last_visible_time_in_clip_sec: 116.0,
          sampled_last_visible_time_token: "<TIME 00:01:56.0 video 1>",
          projected_pixel: [1241.1798321162569, 758.7129363577595],
          normalized_projected_pixel: [0.8815197671280234, 0.5388586195722724],
          camera_coordinates: [
            1.2214968541852504, 0.11847225028530342, 1.2547835907464036,
          ],
          frame_index: 2219,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 115.0,
              time_token: "<TIME 00:01:55.0 video 1>",
              projected_pixel: [1393.3653856396495, 733.7004483667921],
              normalized_projected_pixel: [
                0.9896060977554328, 0.521094068442324,
              ],
              camera_coordinates: [
                1.8605928271164427, 0.07465891892425362, 1.2967378766915598,
              ],
              frame_index: 2219,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 116.0,
              time_token: "<TIME 00:01:56.0 video 1>",
              projected_pixel: [1241.1798321162569, 758.7129363577595],
              normalized_projected_pixel: [
                0.8815197671280234, 0.5388586195722724,
              ],
              camera_coordinates: [
                1.2214968541852504, 0.11847225028530342, 1.2547835907464036,
              ],
              frame_index: 2219,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
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
          "The candy floss bowl was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:14.0 video 1>; Point=(0.7495, 0.7719)",
          "<TIME 00:01:14.0 video 1>; Point=(0.754, 0.7837)",
        ],
        answer_metadata: {
          last_placement_time_sec: 73.96666666666667,
          last_placement_time_in_clip_sec: 73.96666666666667,
          last_placement_time_token: "<TIME 00:01:14.0 video 1>",
          projected_pixel: [1055.235328560973, 1086.897487387391],
          normalized_projected_pixel: [0.7494569094893273, 0.771944238201272],
          camera_coordinates: [
            0.230700547610454, 0.24613908535740003, 0.3646212601274359,
          ],
          frame_index: 2219,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 73.96666666666667,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [1055.235328560973, 1086.897487387391],
              normalized_projected_pixel: [
                0.7494569094893273, 0.771944238201272,
              ],
              camera_coordinates: [
                0.230700547610454, 0.24613908535740003, 0.3646212601274359,
              ],
              frame_index: 2219,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 74.0,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [1061.6198032419454, 1103.4475837272262],
              normalized_projected_pixel: [
                0.7539913375297908, 0.7836985679880868,
              ],
              camera_coordinates: [
                0.23558204332830313, 0.25765922082818404, 0.3626969310081225,
              ],
              frame_index: 2220,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
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
          "At the current time <TIME 00:02:07.0 video 1>, based on the last known position of the candy floss bowl that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 73.96666666666667,
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
            "At the current time <TIME 00:02:07.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, in which direction is the candy floss bowl from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 127.0,
            camera_coordinates: [
              0.48860618735567485, 0.9401456526367045, -0.42271771978496664,
            ],
            world_coordinates: [
              -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.48860618735567485,
              z: -0.42271771978496664,
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
            "At the current time <TIME 00:02:07.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the mug (marked in red) in the current frame, where is the candy floss bowl relative to mug from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "541469e8f03660d2",
            object_x_name: "candy floss bowl",
            object_x_reference_time_sec: 127.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
            ],
            object_x_camera_coordinates: [
              0.48860618735567485, 0.9401456526367045, -0.42271771978496664,
            ],
            object_y_assoc_id: "caeb494b6574cb34",
            object_y_name: "mug",
            object_y_reference_time_sec: 127.0,
            object_y_world_coordinates: [
              -0.3848470740297004, -2.8855378183324882, -0.49640388352392173,
            ],
            object_y_projected_pixel: [1171.0729142768228, 961.4526423629156],
            object_y_normalized_projected_pixel: [
              0.8317279220716071, 0.6828498880418435,
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
            "At the current time <TIME 00:02:07.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the mug (marked in red) in the current frame, how far is the candy floss bowl from the mug: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "541469e8f03660d2",
            object_x_name: "candy floss bowl",
            object_x_reference_time_sec: 127.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "caeb494b6574cb34",
            object_y_name: "mug",
            object_y_pixel: [1171.0729142768228, 961.4526423629156],
            object_y_normalized_projected_pixel: [
              0.8317279220716071, 0.6828498880418435,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.16164313884386017, 0.7635291943415525, -0.8099654976512732,
            ],
            distance_m: 1.1247886211784996,
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
  oos_staged_h10p0_3: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "c062f2a00587fe9c",
    object_a_name: "disk",
    query_time_sec: 175.0,
    query_time_in_clip_sec: 175.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 175.0,
    clip_duration_sec: 175.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "c062f2a00587fe9c",
      object_name: "disk",
      query_time_sec: 175.0,
      oos_span_start_sec: 165.0,
      oos_span_end_sec: 335.0,
      oos_duration_sec: 170.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 175.0,
      clip_duration_sec: 175.0,
      anchor_assoc_id: "c65da629615df617",
      anchor_name: "strainer",
      anchor_projected_pixel: [228.5218397530897, 849.6610476097965],
      anchor_world_coordinates: [
        -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
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
          "At the current time <TIME 00:02:55.0 video 1>, is the previously moved disk visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.5997510564369546, 0.5882996878372593, -0.2156072674851739,
          ],
          frame_index: 2605,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The disk was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:44.0 video 1>; Point=(0.6362, 0.5236)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 164.0,
          sampled_last_visible_time_in_clip_sec: 164.0,
          sampled_last_visible_time_token: "<TIME 00:02:44.0 video 1>",
          projected_pixel: [895.7266317599756, 737.1711407358162],
          normalized_projected_pixel: [0.6361694827840736, 0.5235590488180513],
          camera_coordinates: [
            0.30447595370263403, 0.04766880051543132, 0.9478072165359326,
          ],
          frame_index: 2605,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 164.0,
              time_token: "<TIME 00:02:44.0 video 1>",
              projected_pixel: [895.7266317599756, 737.1711407358162],
              normalized_projected_pixel: [
                0.6361694827840736, 0.5235590488180513,
              ],
              camera_coordinates: [
                0.30447595370263403, 0.04766880051543132, 0.9478072165359326,
              ],
              frame_index: 2605,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
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
          "The disk was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:26.8 video 1>; Point=(0.6521, 0.6811)",
          "<TIME 00:01:27.0 video 1>; Point=(0.6357, 0.7027)",
          "<TIME 00:01:28.0 video 1>; Point=(0.6546, 0.7941)",
          "<TIME 00:01:29.0 video 1>; Point=(0.5739, 0.7902)",
        ],
        answer_metadata: {
          last_placement_time_sec: 86.83333333333333,
          last_placement_time_in_clip_sec: 86.83333333333333,
          last_placement_time_token: "<TIME 00:01:26.8 video 1>",
          projected_pixel: [918.103942172105, 959.0279645612059],
          normalized_projected_pixel: [0.6520624589290519, 0.6811278157394928],
          camera_coordinates: [
            0.12344406815053288, 0.1421444913665615, 0.33889187630359974,
          ],
          frame_index: 2605,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 86.83333333333333,
              time_token: "<TIME 00:01:26.8 video 1>",
              projected_pixel: [918.103942172105, 959.0279645612059],
              normalized_projected_pixel: [
                0.6520624589290519, 0.6811278157394928,
              ],
              camera_coordinates: [
                0.12344406815053288, 0.1421444913665615, 0.33889187630359974,
              ],
              frame_index: 2605,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 87.0,
              time_token: "<TIME 00:01:27.0 video 1>",
              projected_pixel: [895.0243598909445, 989.4253434303612],
              normalized_projected_pixel: [
                0.6356707101498186, 0.7027168632317906,
              ],
              camera_coordinates: [
                0.11483448131214313, 0.16552951714883313, 0.35143700623803287,
              ],
              frame_index: 2610,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 88.0,
              time_token: "<TIME 00:01:28.0 video 1>",
              projected_pixel: [921.6542931713477, 1118.154976820606],
              normalized_projected_pixel: [
                0.6545840150364686, 0.7941441596737259,
              ],
              camera_coordinates: [
                0.14003192423333832, 0.25841120805147383, 0.36220479926229454,
              ],
              frame_index: 2640,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 89.0,
              time_token: "<TIME 00:01:29.0 video 1>",
              projected_pixel: [808.1176198211792, 1112.614654029818],
              normalized_projected_pixel: [
                0.5739471731684511, 0.7902092713279957,
              ],
              camera_coordinates: [
                0.06462129285908658, 0.2395108530857854, 0.34634497005983067,
              ],
              frame_index: 2670,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
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
          "At the current time <TIME 00:02:55.0 video 1>, based on the last known position of the disk that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 86.83333333333333,
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
            "At the current time <TIME 00:02:55.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, in which direction is the disk from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 175.0,
            camera_coordinates: [
              0.5997510564369546, 0.5882996878372593, -0.2156072674851739,
            ],
            world_coordinates: [
              -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.5997510564369546,
              z: -0.2156072674851739,
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
            "At the current time <TIME 00:02:55.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, where is the disk relative to strainer from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "c062f2a00587fe9c",
            object_x_name: "disk",
            object_x_reference_time_sec: 175.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
            ],
            object_x_camera_coordinates: [
              0.5997510564369546, 0.5882996878372593, -0.2156072674851739,
            ],
            object_y_assoc_id: "c65da629615df617",
            object_y_name: "strainer",
            object_y_reference_time_sec: 175.0,
            object_y_world_coordinates: [
              -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
            ],
            object_y_projected_pixel: [228.5218397530897, 849.6610476097965],
            object_y_normalized_projected_pixel: [
              0.16230244300645574, 0.6034524485865032,
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
            "At the current time <TIME 00:02:55.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, how far is the disk from the strainer: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "c062f2a00587fe9c",
            object_x_name: "disk",
            object_x_reference_time_sec: 175.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c65da629615df617",
            object_y_name: "strainer",
            object_y_pixel: [228.5218397530897, 849.6610476097965],
            object_y_normalized_projected_pixel: [
              0.16230244300645574, 0.6034524485865032,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.015661223675429, 0.4612356568049898, -0.7206280583268256,
            ],
            distance_m: 1.328010109462308,
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
  oos_staged_h10p0_4: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "541469e8f03660d2",
    object_a_name: "candy floss bowl",
    query_time_sec: 175.0,
    query_time_in_clip_sec: 175.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 175.0,
    clip_duration_sec: 175.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "541469e8f03660d2",
      object_name: "candy floss bowl",
      query_time_sec: 175.0,
      oos_span_start_sec: 165.0,
      oos_span_end_sec: 360.0,
      oos_duration_sec: 195.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 175.0,
      clip_duration_sec: 175.0,
      anchor_assoc_id: "c65da629615df617",
      anchor_name: "strainer",
      anchor_projected_pixel: [228.5218397530897, 849.6610476097965],
      anchor_world_coordinates: [
        -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
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
          "At the current time <TIME 00:02:55.0 video 1>, is the previously moved candy floss bowl visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.5719782905251869, 0.6877806216919755, -0.23930194948444683,
          ],
          frame_index: 2219,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The candy floss bowl was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:44.0 video 1>; Point=(0.638, 0.5685)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 164.0,
          sampled_last_visible_time_in_clip_sec: 164.0,
          sampled_last_visible_time_token: "<TIME 00:02:44.0 video 1>",
          projected_pixel: [898.3539422757424, 800.4444438927612],
          normalized_projected_pixel: [0.6380354703662943, 0.5684974743556542],
          camera_coordinates: [
            0.29097115988187383, 0.13719384392770428, 0.8927426378311758,
          ],
          frame_index: 2219,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 164.0,
              time_token: "<TIME 00:02:44.0 video 1>",
              projected_pixel: [898.3539422757424, 800.4444438927612],
              normalized_projected_pixel: [
                0.6380354703662943, 0.5684974743556542,
              ],
              camera_coordinates: [
                0.29097115988187383, 0.13719384392770428, 0.8927426378311758,
              ],
              frame_index: 2219,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
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
          "The candy floss bowl was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:14.0 video 1>; Point=(0.7495, 0.7719)",
          "<TIME 00:01:14.0 video 1>; Point=(0.754, 0.7837)",
        ],
        answer_metadata: {
          last_placement_time_sec: 73.96666666666667,
          last_placement_time_in_clip_sec: 73.96666666666667,
          last_placement_time_token: "<TIME 00:01:14.0 video 1>",
          projected_pixel: [1055.235328560973, 1086.897487387391],
          normalized_projected_pixel: [0.7494569094893273, 0.771944238201272],
          camera_coordinates: [
            0.230700547610454, 0.24613908535740003, 0.3646212601274359,
          ],
          frame_index: 2219,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 73.96666666666667,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [1055.235328560973, 1086.897487387391],
              normalized_projected_pixel: [
                0.7494569094893273, 0.771944238201272,
              ],
              camera_coordinates: [
                0.230700547610454, 0.24613908535740003, 0.3646212601274359,
              ],
              frame_index: 2219,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 74.0,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [1061.6198032419454, 1103.4475837272262],
              normalized_projected_pixel: [
                0.7539913375297908, 0.7836985679880868,
              ],
              camera_coordinates: [
                0.23558204332830313, 0.25765922082818404, 0.3626969310081225,
              ],
              frame_index: 2220,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
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
          "At the current time <TIME 00:02:55.0 video 1>, based on the last known position of the candy floss bowl that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 73.96666666666667,
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
            "At the current time <TIME 00:02:55.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, in which direction is the candy floss bowl from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 175.0,
            camera_coordinates: [
              0.5719782905251869, 0.6877806216919755, -0.23930194948444683,
            ],
            world_coordinates: [
              -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.5719782905251869,
              z: -0.23930194948444683,
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
            "At the current time <TIME 00:02:55.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, where is the candy floss bowl relative to strainer from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "541469e8f03660d2",
            object_x_name: "candy floss bowl",
            object_x_reference_time_sec: 175.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
            ],
            object_x_camera_coordinates: [
              0.5719782905251869, 0.6877806216919755, -0.23930194948444683,
            ],
            object_y_assoc_id: "c65da629615df617",
            object_y_name: "strainer",
            object_y_reference_time_sec: 175.0,
            object_y_world_coordinates: [
              -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
            ],
            object_y_projected_pixel: [228.5218397530897, 849.6610476097965],
            object_y_normalized_projected_pixel: [
              0.16230244300645574, 0.6034524485865032,
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
            "At the current time <TIME 00:02:55.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, how far is the candy floss bowl from the strainer: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "541469e8f03660d2",
            object_x_name: "candy floss bowl",
            object_x_reference_time_sec: 175.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c65da629615df617",
            object_y_name: "strainer",
            object_y_pixel: [228.5218397530897, 849.6610476097965],
            object_y_normalized_projected_pixel: [
              0.16230244300645574, 0.6034524485865032,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9878884577636613, 0.560716590659706, -0.7443227403260986,
            ],
            distance_m: 1.3580659195305147,
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
  oos_staged_h10p0_5: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "7ddfc30f2c53b9b2",
    object_a_name: "Track 10",
    query_time_sec: 184.0,
    query_time_in_clip_sec: 184.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 184.0,
    clip_duration_sec: 184.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "7ddfc30f2c53b9b2",
      object_name: "Track 10",
      query_time_sec: 184.0,
      oos_span_start_sec: 174.0,
      oos_span_end_sec: 212.0,
      oos_duration_sec: 38.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 184.0,
      clip_duration_sec: 184.0,
      anchor_assoc_id: "c65da629615df617",
      anchor_name: "strainer",
      anchor_projected_pixel: [190.41404433274204, 1012.227861669243],
      anchor_world_coordinates: [
        -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
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
          "At the current time <TIME 00:03:04.0 video 1>, is the previously moved Track 10 visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.7988521514984231, 0.8384904108758653, -0.34806268231187465,
          ],
          frame_index: 3575,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The Track 10 was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:53.0 video 1>; Point=(0.252, 0.7914)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 173.0,
          sampled_last_visible_time_in_clip_sec: 173.0,
          sampled_last_visible_time_token: "<TIME 00:02:53.0 video 1>",
          projected_pixel: [354.75630259338294, 1114.2483061186351],
          normalized_projected_pixel: [0.2519576012737095, 0.7913695355956215],
          camera_coordinates: [
            -0.2882412742737577, 0.3424773688333551, 0.4692516105674168,
          ],
          frame_index: 3575,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 173.0,
              time_token: "<TIME 00:02:53.0 video 1>",
              projected_pixel: [354.75630259338294, 1114.2483061186351],
              normalized_projected_pixel: [
                0.2519576012737095, 0.7913695355956215,
              ],
              camera_coordinates: [
                -0.2882412742737577, 0.3424773688333551, 0.4692516105674168,
              ],
              frame_index: 3575,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
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
          "The Track 10 was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:59.2 video 1>; Point=(0.6202, 0.7118)",
          "<TIME 00:02:00.0 video 1>; Point=(0.923, 0.8442)",
          "<TIME 00:02:02.0 video 1>; Point=(1.004, 0.5271)",
        ],
        answer_metadata: {
          last_placement_time_sec: 119.16666666666667,
          last_placement_time_in_clip_sec: 119.16666666666667,
          last_placement_time_token: "<TIME 00:01:59.2 video 1>",
          projected_pixel: [873.2183323863557, 1002.2843974601475],
          normalized_projected_pixel: [0.6201834747062185, 0.7118497141052184],
          camera_coordinates: [
            0.14213660277535967, 0.24093439265608407, 0.4893836883725057,
          ],
          frame_index: 3575,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 119.16666666666667,
              time_token: "<TIME 00:01:59.2 video 1>",
              projected_pixel: [873.2183323863557, 1002.2843974601475],
              normalized_projected_pixel: [
                0.6201834747062185, 0.7118497141052184,
              ],
              camera_coordinates: [
                0.14213660277535967, 0.24093439265608407, 0.4893836883725057,
              ],
              frame_index: 3575,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 120.0,
              time_token: "<TIME 00:02:00.0 video 1>",
              projected_pixel: [1299.6021356198885, 1188.6224000325428],
              normalized_projected_pixel: [
                0.9230128804118526, 0.8441920454776582,
              ],
              camera_coordinates: [
                0.5278020449972349, 0.42382510784497973, 0.34249399185757756,
              ],
              frame_index: 3600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 122.0,
              time_token: "<TIME 00:02:02.0 video 1>",
              projected_pixel: [1413.598969579156, 742.1047384543656],
              normalized_projected_pixel: [
                1.003976540894287, 0.5270630244704301,
              ],
              camera_coordinates: [
                1.1263366731436406, 0.0572163107715169, 0.7316357793681408,
              ],
              frame_index: 3660,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
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
          "At the current time <TIME 00:03:04.0 video 1>, based on the last known position of the Track 10 that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 119.16666666666667,
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
            "At the current time <TIME 00:03:04.0 video 1>, consider the Track 10 that was moved earlier. Using its last known position to infer its current location, in which direction is the Track 10 from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 184.0,
            camera_coordinates: [
              -0.7988521514984231, 0.8384904108758653, -0.34806268231187465,
            ],
            world_coordinates: [
              -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.7988521514984231,
              z: -0.34806268231187465,
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
            "At the current time <TIME 00:03:04.0 video 1>, consider the Track 10 that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, where is the Track 10 relative to strainer from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "7ddfc30f2c53b9b2",
            object_x_name: "Track 10",
            object_x_reference_time_sec: 184.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
            ],
            object_x_camera_coordinates: [
              -0.7988521514984231, 0.8384904108758653, -0.34806268231187465,
            ],
            object_y_assoc_id: "c65da629615df617",
            object_y_name: "strainer",
            object_y_reference_time_sec: 184.0,
            object_y_world_coordinates: [
              -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
            ],
            object_y_projected_pixel: [190.41404433274204, 1012.227861669243],
            object_y_normalized_projected_pixel: [
              0.13523724739541337, 0.7189118335719056,
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
            "At the current time <TIME 00:03:04.0 video 1>, consider the Track 10 that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, how far is the Track 10 from the strainer: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "7ddfc30f2c53b9b2",
            object_x_name: "Track 10",
            object_x_reference_time_sec: 184.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c65da629615df617",
            object_y_name: "strainer",
            object_y_pixel: [190.41404433274204, 1012.227861669243],
            object_y_normalized_projected_pixel: [
              0.13523724739541337, 0.7189118335719056,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.43480631391271174, 0.6189427674169192, -0.7345118243453741,
            ],
            distance_m: 1.0543501790483292,
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
  oos_staged_h10p0_6: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "b991e034f5c8eed0",
    object_a_name: "spoon",
    query_time_sec: 184.0,
    query_time_in_clip_sec: 184.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 184.0,
    clip_duration_sec: 184.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "b991e034f5c8eed0",
      object_name: "spoon",
      query_time_sec: 184.0,
      oos_span_start_sec: 174.0,
      oos_span_end_sec: 212.0,
      oos_duration_sec: 38.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 184.0,
      clip_duration_sec: 184.0,
      anchor_assoc_id: "c65da629615df617",
      anchor_name: "strainer",
      anchor_projected_pixel: [190.41404433274204, 1012.227861669243],
      anchor_world_coordinates: [
        -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
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
          "At the current time <TIME 00:03:04.0 video 1>, is the previously moved spoon visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.7917613396465406, 0.8521681442679816, -0.35625657884906126,
          ],
          frame_index: 4479,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The spoon was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:53.0 video 1>; Point=(0.2425, 0.803)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 173.0,
          sampled_last_visible_time_in_clip_sec: 173.0,
          sampled_last_visible_time_token: "<TIME 00:02:53.0 video 1>",
          projected_pixel: [341.48705079127797, 1130.6468201769233],
          normalized_projected_pixel: [0.242533416755169, 0.8030162075120194],
          camera_coordinates: [
            -0.29817289009327386, 0.3548592682759353, 0.4620023680322209,
          ],
          frame_index: 4479,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 173.0,
              time_token: "<TIME 00:02:53.0 video 1>",
              projected_pixel: [341.48705079127797, 1130.6468201769233],
              normalized_projected_pixel: [
                0.242533416755169, 0.8030162075120194,
              ],
              camera_coordinates: [
                -0.29817289009327386, 0.3548592682759353, 0.4620023680322209,
              ],
              frame_index: 4479,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
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
          "The spoon was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:29.3 video 1>; Point=(0.5674, 0.7531)",
          "<TIME 00:02:30.0 video 1>; Point=(0.7699, 0.8201)",
        ],
        answer_metadata: {
          last_placement_time_sec: 149.3,
          last_placement_time_in_clip_sec: 149.3,
          last_placement_time_token: "<TIME 00:02:29.3 video 1>",
          projected_pixel: [798.8949338505406, 1060.4103920671876],
          normalized_projected_pixel: [0.5673969700643045, 0.7531323807295366],
          camera_coordinates: [
            0.07793423122229015, 0.27505665540485424, 0.46394407374467767,
          ],
          frame_index: 4479,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 149.3,
              time_token: "<TIME 00:02:29.3 video 1>",
              projected_pixel: [798.8949338505406, 1060.4103920671876],
              normalized_projected_pixel: [
                0.5673969700643045, 0.7531323807295366,
              ],
              camera_coordinates: [
                0.07793423122229015, 0.27505665540485424, 0.46394407374467767,
              ],
              frame_index: 4479,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 150.0,
              time_token: "<TIME 00:02:30.0 video 1>",
              projected_pixel: [1084.0755784479957, 1154.739561589546],
              normalized_projected_pixel: [
                0.7699400415113605, 0.8201275295380298,
              ],
              camera_coordinates: [
                0.29200061337594696, 0.33959519761810175, 0.40985804610498033,
              ],
              frame_index: 4500,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
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
          "At the current time <TIME 00:03:04.0 video 1>, based on the last known position of the spoon that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 149.3,
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
            "At the current time <TIME 00:03:04.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, in which direction is the spoon from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 184.0,
            camera_coordinates: [
              -0.7917613396465406, 0.8521681442679816, -0.35625657884906126,
            ],
            world_coordinates: [
              -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.7917613396465406,
              z: -0.35625657884906126,
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
            "At the current time <TIME 00:03:04.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, where is the spoon relative to strainer from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "b991e034f5c8eed0",
            object_x_name: "spoon",
            object_x_reference_time_sec: 184.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
            ],
            object_x_camera_coordinates: [
              -0.7917613396465406, 0.8521681442679816, -0.35625657884906126,
            ],
            object_y_assoc_id: "c65da629615df617",
            object_y_name: "strainer",
            object_y_reference_time_sec: 184.0,
            object_y_world_coordinates: [
              -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
            ],
            object_y_projected_pixel: [190.41404433274204, 1012.227861669243],
            object_y_normalized_projected_pixel: [
              0.13523724739541337, 0.7189118335719056,
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
            "At the current time <TIME 00:03:04.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, how far is the spoon from the strainer: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "b991e034f5c8eed0",
            object_x_name: "spoon",
            object_x_reference_time_sec: 184.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c65da629615df617",
            object_y_name: "strainer",
            object_y_pixel: [190.41404433274204, 1012.227861669243],
            object_y_normalized_projected_pixel: [
              0.13523724739541337, 0.7189118335719056,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.4277155020608292, 0.6326205008090355, -0.7427057208825607,
            ],
            distance_m: 1.0652516306388395,
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
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "f130c55ab4d82397",
    object_a_name: "pan",
    query_time_sec: 259.0,
    query_time_in_clip_sec: 259.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 259.0,
    clip_duration_sec: 259.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "f130c55ab4d82397",
      object_name: "pan",
      query_time_sec: 259.0,
      oos_span_start_sec: 249.0,
      oos_span_end_sec: 537.0,
      oos_duration_sec: 288.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_dishwasher.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 259.0,
      clip_duration_sec: 259.0,
      anchor_assoc_id: "29a11aeea70f84db",
      anchor_name: "spatula",
      anchor_projected_pixel: [316.0946192388447, 1027.9530930292347],
      anchor_world_coordinates: [
        -0.4290617372942448, -3.583441450886477, -0.521681788004295,
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
          "At the current time <TIME 00:04:19.0 video 1>, is the previously moved pan visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-84.21456238275073, 2130.536221888984],
          camera_coordinates: [
            -0.6702720889088212, 1.2091140725656921, 0.3870744573925462,
          ],
          frame_index: 6528,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pan was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:05.0 video 1>; Point=(0.48, 0.6543)",
          "<TIME 00:04:06.0 video 1>; Point=(0.5553, 0.644)",
          "<TIME 00:04:07.0 video 1>; Point=(0.5415, 0.6209)",
          "<TIME 00:04:08.0 video 1>; Point=(0.4393, 0.6713)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 248.0,
          sampled_last_visible_time_in_clip_sec: 248.0,
          sampled_last_visible_time_token: "<TIME 00:04:08.0 video 1>",
          projected_pixel: [618.5671455531016, 945.1344196510245],
          normalized_projected_pixel: [0.4393232567848733, 0.6712602412294207],
          camera_coordinates: [
            -0.12813037779438607, 0.3818464782669957, 0.9757689453667941,
          ],
          frame_index: 6528,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_dishwasher.001",
          world_coordinates: [
            -0.4012066527713908, -2.636551893414035, -1.1863563700728292,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 245.0,
              time_token: "<TIME 00:04:05.0 video 1>",
              projected_pixel: [675.8801717796944, 921.1887356971476],
              normalized_projected_pixel: [
                0.48002853109353294, 0.6542533634212696,
              ],
              camera_coordinates: [
                -0.04431691809992566, 0.41642904618813814, 1.186496823033313,
              ],
              frame_index: 6528,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_dishwasher.001",
              world_coordinates: [
                -0.4012066527713908, -2.636551893414035, -1.1863563700728292,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 246.0,
              time_token: "<TIME 00:04:06.0 video 1>",
              projected_pixel: [781.9327671166734, 906.7463466695046],
              normalized_projected_pixel: [
                0.5553499766453647, 0.6439959848505005,
              ],
              camera_coordinates: [
                0.13015824502228002, 0.3135812857347213, 0.9581088459808165,
              ],
              frame_index: 6528,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_dishwasher.001",
              world_coordinates: [
                -0.4012066527713908, -2.636551893414035, -1.1863563700728292,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 247.0,
              time_token: "<TIME 00:04:07.0 video 1>",
              projected_pixel: [762.3903223135877, 874.2508637643257],
              normalized_projected_pixel: [
                0.5414703993704458, 0.6209168066507995,
              ],
              camera_coordinates: [
                0.09481441153400683, 0.2502867090469474, 0.9141132860036918,
              ],
              frame_index: 6528,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_dishwasher.001",
              world_coordinates: [
                -0.4012066527713908, -2.636551893414035, -1.1863563700728292,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 248.0,
              time_token: "<TIME 00:04:08.0 video 1>",
              projected_pixel: [618.5671455531016, 945.1344196510245],
              normalized_projected_pixel: [
                0.4393232567848733, 0.6712602412294207,
              ],
              camera_coordinates: [
                -0.12813037779438607, 0.3818464782669957, 0.9757689453667941,
              ],
              frame_index: 6528,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_dishwasher.001",
              world_coordinates: [
                -0.4012066527713908, -2.636551893414035, -1.1863563700728292,
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
          "The pan was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:37.6 video 1>; Point=(0.6427, 0.5389)",
          "<TIME 00:03:38.0 video 1>; Point=(0.5601, 0.5946)",
          "<TIME 00:03:39.0 video 1>; Point=(-0.0017, 1.0577)",
          "<TIME 00:03:40.0 video 1>; Point=(-0.533, 2.9135)",
        ],
        answer_metadata: {
          last_placement_time_sec: 217.6,
          last_placement_time_in_clip_sec: 217.6,
          last_placement_time_token: "<TIME 00:03:37.6 video 1>",
          projected_pixel: [904.8637285085579, 758.7174375712849],
          normalized_projected_pixel: [0.6426588980884644, 0.5388618164568785],
          camera_coordinates: [
            0.19715841801629286, 0.05011165675597162, 0.586128331456999,
          ],
          frame_index: 6528,
          status: "last_past_track_end",
          fixture: "P01_dishwasher.001",
          world_coordinates: [
            -0.4012066527713908, -2.636551893414035, -1.1863563700728292,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 217.6,
              time_token: "<TIME 00:03:37.6 video 1>",
              projected_pixel: [904.8637285085579, 758.7174375712849],
              normalized_projected_pixel: [
                0.6426588980884644, 0.5388618164568785,
              ],
              camera_coordinates: [
                0.19715841801629286, 0.05011165675597162, 0.586128331456999,
              ],
              frame_index: 6528,
              status: "last_past_track_end",
              fixture: "P01_dishwasher.001",
              world_coordinates: [
                -0.4012066527713908, -2.636551893414035, -1.1863563700728292,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 218.0,
              time_token: "<TIME 00:03:38.0 video 1>",
              projected_pixel: [788.6501165198981, 837.2351823792072],
              normalized_projected_pixel: [
                0.5601208213919731, 0.5946272602125051,
              ],
              camera_coordinates: [
                0.10651662162535747, 0.1551667939003334, 0.7272790051564098,
              ],
              frame_index: 6540,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_dishwasher.001",
              world_coordinates: [
                -0.4012066527713908, -2.636551893414035, -1.1863563700728292,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 219.0,
              time_token: "<TIME 00:03:39.0 video 1>",
              projected_pixel: [-2.374998808414489, 1489.284123461984],
              normalized_projected_pixel: [
                -0.0016867889264307449, 1.057730201322432,
              ],
              camera_coordinates: [
                -0.8654455611074996, 0.9684287463202863, 0.45196366968277535,
              ],
              frame_index: 6570,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_dishwasher.001",
              world_coordinates: [
                -0.4012066527713908, -2.636551893414035, -1.1863563700728292,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 220.0,
              time_token: "<TIME 00:03:40.0 video 1>",
              projected_pixel: [-750.4553847334598, 4102.19937093744],
              normalized_projected_pixel: [
                -0.5329938812027414, 2.913493871404432,
              ],
              camera_coordinates: [
                -0.7649296872368951, 1.2499362208581897, 0.2701839437423441,
              ],
              frame_index: 6600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_dishwasher.001",
              world_coordinates: [
                -0.4012066527713908, -2.636551893414035, -1.1863563700728292,
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
          "At the current time <TIME 00:04:19.0 video 1>, based on the last known position of the pan that was moved earlier, which fixture type is closest to it?",
        choices: ["drawer", "counter", "hook", "sink", "dishwasher"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 217.6,
          correct_fixture: "dishwasher",
          display_correct_answer: "dishwasher",
          raw_correct_fixture: "P01_dishwasher.001",
          fixture_type_pool: [
            "bin",
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hook",
            "microwave",
            "sink",
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
            "At the current time <TIME 00:04:19.0 video 1>, consider the pan that was moved earlier. Using its last known position to infer its current location, in which direction is the pan from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 259.0,
            camera_coordinates: [
              -0.6702720889088212, 1.2091140725656921, 0.3870744573925462,
            ],
            world_coordinates: [
              -0.4012066527713908, -2.636551893414035, -1.1863563700728292,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.6702720889088212,
              z: 0.3870744573925462,
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
            "At the current time <TIME 00:04:19.0 video 1>, consider the pan that was moved earlier. Using its last known position to infer its current location, and using the current position of the spatula (marked in red) in the current frame, where is the pan relative to spatula from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "f130c55ab4d82397",
            object_x_name: "pan",
            object_x_reference_time_sec: 259.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4012066527713908, -2.636551893414035, -1.1863563700728292,
            ],
            object_x_camera_coordinates: [
              -0.6702720889088212, 1.2091140725656921, 0.3870744573925462,
            ],
            object_y_assoc_id: "29a11aeea70f84db",
            object_y_name: "spatula",
            object_y_reference_time_sec: 259.0,
            object_y_world_coordinates: [
              -0.4290617372942448, -3.583441450886477, -0.521681788004295,
            ],
            object_y_projected_pixel: [316.0946192388447, 1027.9530930292347],
            object_y_normalized_projected_pixel: [
              0.22449901934577038, 0.7300803217537178,
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
            "At the current time <TIME 00:04:19.0 video 1>, consider the pan that was moved earlier. Using its last known position to infer its current location, and using the current position of the spatula (marked in red) in the current frame, how far is the pan from the spatula: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "f130c55ab4d82397",
            object_x_name: "pan",
            object_x_reference_time_sec: 259.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "29a11aeea70f84db",
            object_y_name: "spatula",
            object_y_pixel: [316.0946192388447, 1027.9530930292347],
            object_y_normalized_projected_pixel: [
              0.22449901934577038, 0.7300803217537178,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.4792479927101263, 1.0482781142297601, 0.1029679393905023,
            ],
            distance_m: 1.1572242824241608,
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
  oos_staged_h10p0_8: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "7ddfc30f2c53b9b2",
    object_a_name: "Track 10",
    query_time_sec: 261.0,
    query_time_in_clip_sec: 261.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 261.0,
    clip_duration_sec: 261.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "7ddfc30f2c53b9b2",
      object_name: "Track 10",
      query_time_sec: 261.0,
      oos_span_start_sec: 251.0,
      oos_span_end_sec: 289.0,
      oos_duration_sec: 38.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 261.0,
      clip_duration_sec: 261.0,
      anchor_assoc_id: "0ca2d3e6c64cb047",
      anchor_name: "bowl",
      anchor_projected_pixel: [986.4433885594128, 1003.4094342055033],
      anchor_world_coordinates: [
        -0.7757616118956545, -3.8383031336814306, -0.8139915649866595,
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
          "At the current time <TIME 00:04:21.0 video 1>, is the previously moved Track 10 visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.8136794572447821, 0.8388762956859122, -0.08727636353596835,
          ],
          frame_index: 3575,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The Track 10 was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:07.0 video 1>; Point=(0.6069, 0.3066)",
          "<TIME 00:04:08.0 video 1>; Point=(0.419, 0.4038)",
          "<TIME 00:04:10.0 video 1>; Point=(0.0983, 0.2354)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 250.0,
          sampled_last_visible_time_in_clip_sec: 250.0,
          sampled_last_visible_time_token: "<TIME 00:04:10.0 video 1>",
          projected_pixel: [138.42681980012958, 331.4666145446968],
          normalized_projected_pixel: [0.09831450269895567, 0.2354166296482222],
          camera_coordinates: [
            -0.4510208951525079, -0.3016757938426201, 0.40121567131292596,
          ],
          frame_index: 3575,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 247.0,
              time_token: "<TIME 00:04:07.0 video 1>",
              projected_pixel: [854.4664467453895, 431.6345306822329],
              normalized_projected_pixel: [
                0.6068653741089414, 0.3065586155413586,
              ],
              camera_coordinates: [
                0.12330457644717407, -0.21729773877989, 0.478636759531994,
              ],
              frame_index: 3575,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 248.0,
              time_token: "<TIME 00:04:08.0 video 1>",
              projected_pixel: [589.9755270408746, 568.5527724034978],
              normalized_projected_pixel: [
                0.41901670954607567, 0.40380168494566604,
              ],
              camera_coordinates: [
                -0.10636197408953807, -0.134689407714214, 0.5992008565064753,
              ],
              frame_index: 3575,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 250.0,
              time_token: "<TIME 00:04:10.0 video 1>",
              projected_pixel: [138.42681980012958, 331.4666145446968],
              normalized_projected_pixel: [
                0.09831450269895567, 0.2354166296482222,
              ],
              camera_coordinates: [
                -0.4510208951525079, -0.3016757938426201, 0.40121567131292596,
              ],
              frame_index: 3575,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
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
          "The Track 10 was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:59.2 video 1>; Point=(0.6202, 0.7118)",
          "<TIME 00:02:00.0 video 1>; Point=(0.923, 0.8442)",
          "<TIME 00:02:02.0 video 1>; Point=(1.004, 0.5271)",
        ],
        answer_metadata: {
          last_placement_time_sec: 119.16666666666667,
          last_placement_time_in_clip_sec: 119.16666666666667,
          last_placement_time_token: "<TIME 00:01:59.2 video 1>",
          projected_pixel: [873.2183323863557, 1002.2843974601475],
          normalized_projected_pixel: [0.6201834747062185, 0.7118497141052184],
          camera_coordinates: [
            0.14213660277535967, 0.24093439265608407, 0.4893836883725057,
          ],
          frame_index: 3575,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 119.16666666666667,
              time_token: "<TIME 00:01:59.2 video 1>",
              projected_pixel: [873.2183323863557, 1002.2843974601475],
              normalized_projected_pixel: [
                0.6201834747062185, 0.7118497141052184,
              ],
              camera_coordinates: [
                0.14213660277535967, 0.24093439265608407, 0.4893836883725057,
              ],
              frame_index: 3575,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 120.0,
              time_token: "<TIME 00:02:00.0 video 1>",
              projected_pixel: [1299.6021356198885, 1188.6224000325428],
              normalized_projected_pixel: [
                0.9230128804118526, 0.8441920454776582,
              ],
              camera_coordinates: [
                0.5278020449972349, 0.42382510784497973, 0.34249399185757756,
              ],
              frame_index: 3600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 122.0,
              time_token: "<TIME 00:02:02.0 video 1>",
              projected_pixel: [1413.598969579156, 742.1047384543656],
              normalized_projected_pixel: [
                1.003976540894287, 0.5270630244704301,
              ],
              camera_coordinates: [
                1.1263366731436406, 0.0572163107715169, 0.7316357793681408,
              ],
              frame_index: 3660,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
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
          "At the current time <TIME 00:04:21.0 video 1>, based on the last known position of the Track 10 that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 119.16666666666667,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the Track 10 that was moved earlier. Using its last known position to infer its current location, in which direction is the Track 10 from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 261.0,
            camera_coordinates: [
              -0.8136794572447821, 0.8388762956859122, -0.08727636353596835,
            ],
            world_coordinates: [
              -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.8136794572447821,
              z: -0.08727636353596835,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the Track 10 that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl (marked in red) in the current frame, where is the Track 10 relative to bowl from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "7ddfc30f2c53b9b2",
            object_x_name: "Track 10",
            object_x_reference_time_sec: 261.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
            ],
            object_x_camera_coordinates: [
              -0.8136794572447821, 0.8388762956859122, -0.08727636353596835,
            ],
            object_y_assoc_id: "0ca2d3e6c64cb047",
            object_y_name: "bowl",
            object_y_reference_time_sec: 261.0,
            object_y_world_coordinates: [
              -0.7757616118956545, -3.8383031336814306, -0.8139915649866595,
            ],
            object_y_projected_pixel: [986.4433885594128, 1003.4094342055033],
            object_y_normalized_projected_pixel: [
              0.7005989975564012, 0.7126487458845904,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the Track 10 that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl (marked in red) in the current frame, how far is the Track 10 from the bowl: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "7ddfc30f2c53b9b2",
            object_x_name: "Track 10",
            object_x_reference_time_sec: 261.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0ca2d3e6c64cb047",
            object_y_name: "bowl",
            object_y_pixel: [986.4433885594128, 1003.4094342055033],
            object_y_normalized_projected_pixel: [
              0.7005989975564012, 0.7126487458845904,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.0767158495765115, 0.5674018886092402, -0.6257410370090741,
            ],
            distance_m: 1.3685078623536633,
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
  oos_staged_h10p0_9: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "b991e034f5c8eed0",
    object_a_name: "spoon",
    query_time_sec: 261.0,
    query_time_in_clip_sec: 261.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 261.0,
    clip_duration_sec: 261.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "b991e034f5c8eed0",
      object_name: "spoon",
      query_time_sec: 261.0,
      oos_span_start_sec: 251.0,
      oos_span_end_sec: 289.0,
      oos_duration_sec: 38.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 261.0,
      clip_duration_sec: 261.0,
      anchor_assoc_id: "29a11aeea70f84db",
      anchor_name: "spatula",
      anchor_projected_pixel: [342.1685140378219, 1028.254699563715],
      anchor_world_coordinates: [
        -0.4290617372942448, -3.583441450886477, -0.521681788004295,
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
          "At the current time <TIME 00:04:21.0 video 1>, is the previously moved spoon visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.809656667623216, 0.8554368728555928, -0.09102661571341053,
          ],
          frame_index: 4479,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The spoon was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:07.0 video 1>; Point=(0.5918, 0.3121)",
          "<TIME 00:04:08.0 video 1>; Point=(0.4079, 0.4096)",
          "<TIME 00:04:10.0 video 1>; Point=(0.0903, 0.2478)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 250.0,
          sampled_last_visible_time_in_clip_sec: 250.0,
          sampled_last_visible_time_token: "<TIME 00:04:10.0 video 1>",
          projected_pixel: [127.12698994711684, 348.8393989749753],
          normalized_projected_pixel: [0.09028905536016821, 0.2477552549538177],
          camera_coordinates: [
            -0.4634390407902713, -0.28974765782137823, 0.4040457197055854,
          ],
          frame_index: 4479,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 247.0,
              time_token: "<TIME 00:04:07.0 video 1>",
              projected_pixel: [833.1976813581346, 439.4920110998793],
              normalized_projected_pixel: [
                0.5917597168736751, 0.31213921242889153,
              ],
              camera_coordinates: [
                0.10728207254141342, -0.21272257363252334, 0.4838181856282471,
              ],
              frame_index: 4479,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 248.0,
              time_token: "<TIME 00:04:08.0 video 1>",
              projected_pixel: [574.3273882664397, 576.7304661567669],
              normalized_projected_pixel: [
                0.4079029746210509, 0.40960970607724917,
              ],
              camera_coordinates: [
                -0.12196819977511897, -0.12702127098429483, 0.6006655554068364,
              ],
              frame_index: 4479,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 250.0,
              time_token: "<TIME 00:04:10.0 video 1>",
              projected_pixel: [127.12698994711684, 348.8393989749753],
              normalized_projected_pixel: [
                0.09028905536016821, 0.2477552549538177,
              ],
              camera_coordinates: [
                -0.4634390407902713, -0.28974765782137823, 0.4040457197055854,
              ],
              frame_index: 4479,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
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
          "The spoon was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:29.3 video 1>; Point=(0.5674, 0.7531)",
          "<TIME 00:02:30.0 video 1>; Point=(0.7699, 0.8201)",
        ],
        answer_metadata: {
          last_placement_time_sec: 149.3,
          last_placement_time_in_clip_sec: 149.3,
          last_placement_time_token: "<TIME 00:02:29.3 video 1>",
          projected_pixel: [798.8949338505406, 1060.4103920671876],
          normalized_projected_pixel: [0.5673969700643045, 0.7531323807295366],
          camera_coordinates: [
            0.07793423122229015, 0.27505665540485424, 0.46394407374467767,
          ],
          frame_index: 4479,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 149.3,
              time_token: "<TIME 00:02:29.3 video 1>",
              projected_pixel: [798.8949338505406, 1060.4103920671876],
              normalized_projected_pixel: [
                0.5673969700643045, 0.7531323807295366,
              ],
              camera_coordinates: [
                0.07793423122229015, 0.27505665540485424, 0.46394407374467767,
              ],
              frame_index: 4479,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 150.0,
              time_token: "<TIME 00:02:30.0 video 1>",
              projected_pixel: [1084.0755784479957, 1154.739561589546],
              normalized_projected_pixel: [
                0.7699400415113605, 0.8201275295380298,
              ],
              camera_coordinates: [
                0.29200061337594696, 0.33959519761810175, 0.40985804610498033,
              ],
              frame_index: 4500,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
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
          "At the current time <TIME 00:04:21.0 video 1>, based on the last known position of the spoon that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area below the boiler",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 149.3,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, in which direction is the spoon from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 261.0,
            camera_coordinates: [
              -0.809656667623216, 0.8554368728555928, -0.09102661571341053,
            ],
            world_coordinates: [
              -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.809656667623216,
              z: -0.09102661571341053,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, and using the current position of the spatula (marked in red) in the current frame, where is the spoon relative to spatula from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "b991e034f5c8eed0",
            object_x_name: "spoon",
            object_x_reference_time_sec: 261.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
            ],
            object_x_camera_coordinates: [
              -0.809656667623216, 0.8554368728555928, -0.09102661571341053,
            ],
            object_y_assoc_id: "29a11aeea70f84db",
            object_y_name: "spatula",
            object_y_reference_time_sec: 261.0,
            object_y_world_coordinates: [
              -0.4290617372942448, -3.583441450886477, -0.521681788004295,
            ],
            object_y_projected_pixel: [342.1685140378219, 1028.254699563715],
            object_y_normalized_projected_pixel: [
              0.2430174105382258, 0.7302945309401384,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, and using the current position of the spatula (marked in red) in the current frame, how far is the spoon from the spatula: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "b991e034f5c8eed0",
            object_x_name: "spoon",
            object_x_reference_time_sec: 261.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "29a11aeea70f84db",
            object_y_name: "spatula",
            object_y_pixel: [342.1685140378219, 1028.254699563715],
            object_y_normalized_projected_pixel: [
              0.2430174105382258, 0.7302945309401384,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.6346518035009587, 0.697177769267419, -0.37277658601311314,
            ],
            distance_m: 1.0138057687384237,
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
  oos_staged_h10p0_10: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "31e4d552813d3887",
    object_a_name: "inner flask lid",
    query_time_sec: 261.0,
    query_time_in_clip_sec: 261.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 261.0,
    clip_duration_sec: 261.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "31e4d552813d3887",
      object_name: "inner flask lid",
      query_time_sec: 261.0,
      oos_span_start_sec: 251.0,
      oos_span_end_sec: 289.0,
      oos_duration_sec: 38.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 261.0,
      clip_duration_sec: 261.0,
      anchor_assoc_id: "11673443d224486b",
      anchor_name: "sponge",
      anchor_projected_pixel: [1022.8846610080554, 683.0744177886958],
      anchor_world_coordinates: [
        -0.6585236117014353, -3.9526848321535066, -0.5305351281690889,
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
          "At the current time <TIME 00:04:21.0 video 1>, is the previously moved inner flask lid visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [471.4535061555705, 4197.502548095894],
          camera_coordinates: [
            -0.49979068197291987, 0.5388099496588081, 0.10921329046252759,
          ],
          frame_index: 561,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The inner flask lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:08.0 video 1>; Point=(0.7702, 0.5928)",
          "<TIME 00:04:09.0 video 1>; Point=(0.1052, 0.6691)",
          "<TIME 00:04:10.0 video 1>; Point=(0.4904, 0.2342)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 250.0,
          sampled_last_visible_time_in_clip_sec: 250.0,
          sampled_last_visible_time_token: "<TIME 00:04:10.0 video 1>",
          projected_pixel: [690.4143256519828, 329.712589804538],
          normalized_projected_pixel: [0.4903510835596469, 0.23417087344072304],
          camera_coordinates: [
            -0.0039191245863268165, -0.18177907865832832, 0.2876421540090281,
          ],
          frame_index: 561,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 248.0,
              time_token: "<TIME 00:04:08.0 video 1>",
              projected_pixel: [1084.4988334158613, 834.637789042544],
              normalized_projected_pixel: [
                0.770240648732856, 0.5927825206268068,
              ],
              camera_coordinates: [
                0.27179625114185635, 0.0904276833282962, 0.41619044314544085,
              ],
              frame_index: 561,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 249.0,
              time_token: "<TIME 00:04:09.0 video 1>",
              projected_pixel: [148.09320802676473, 942.0941770305768],
              normalized_projected_pixel: [
                0.10517983524628177, 0.669100978004671,
              ],
              camera_coordinates: [
                -0.3220480276423081, 0.13822827280234518, 0.31422092564928295,
              ],
              frame_index: 561,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 250.0,
              time_token: "<TIME 00:04:10.0 video 1>",
              projected_pixel: [690.4143256519828, 329.712589804538],
              normalized_projected_pixel: [
                0.4903510835596469, 0.23417087344072304,
              ],
              camera_coordinates: [
                -0.0039191245863268165, -0.18177907865832832,
                0.2876421540090281,
              ],
              frame_index: 561,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
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
          "The inner flask lid was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:18.7 video 1>; Point=(0.5773, 0.8125)",
          "<TIME 00:00:19.0 video 1>; Point=(0.38, 0.9097)",
          "<TIME 00:00:20.0 video 1>; Point=(0.1634, 1.0214)",
          "<TIME 00:00:21.0 video 1>; Point=(0.1931, 0.965)",
        ],
        answer_metadata: {
          last_placement_time_sec: 18.7,
          last_placement_time_in_clip_sec: 18.7,
          last_placement_time_token: "<TIME 00:00:18.7 video 1>",
          projected_pixel: [812.8565549673941, 1144.0392575775186],
          normalized_projected_pixel: [0.5773128941529788, 0.8125278818022149],
          camera_coordinates: [
            0.08390009907185103, 0.32101578559352245, 0.42590809030924615,
          ],
          frame_index: 561,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 18.7,
              time_token: "<TIME 00:00:18.7 video 1>",
              projected_pixel: [812.8565549673941, 1144.0392575775186],
              normalized_projected_pixel: [
                0.5773128941529788, 0.8125278818022149,
              ],
              camera_coordinates: [
                0.08390009907185103, 0.32101578559352245, 0.42590809030924615,
              ],
              frame_index: 561,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 19.0,
              time_token: "<TIME 00:00:19.0 video 1>",
              projected_pixel: [535.0686678562619, 1280.8919627304335],
              normalized_projected_pixel: [
                0.3800203606933678, 0.9097244053483192,
              ],
              camera_coordinates: [
                -0.11048046399053613, 0.3893350950863023, 0.36437264220080223,
              ],
              frame_index: 570,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 20.0,
              time_token: "<TIME 00:00:20.0 video 1>",
              projected_pixel: [230.05379368987383, 1438.1951439735085],
              normalized_projected_pixel: [
                0.16339047847292176, 1.0214454147539123,
              ],
              camera_coordinates: [
                -0.29610499910037014, 0.46352218110224586, 0.22249153188540127,
              ],
              frame_index: 600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 21.0,
              time_token: "<TIME 00:00:21.0 video 1>",
              projected_pixel: [271.90460584310165, 1358.7453423800873],
              normalized_projected_pixel: [
                0.19311406664993014, 0.9650179988494938,
              ],
              camera_coordinates: [
                -0.2841185379196385, 0.435390303060052, 0.25213767582236857,
              ],
              frame_index: 630,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
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
          "At the current time <TIME 00:04:21.0 video 1>, based on the last known position of the inner flask lid that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 18.7,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the inner flask lid that was moved earlier. Using its last known position to infer its current location, in which direction is the inner flask lid from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 261.0,
            camera_coordinates: [
              -0.49979068197291987, 0.5388099496588081, 0.10921329046252759,
            ],
            world_coordinates: [
              -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.49979068197291987,
              z: 0.10921329046252759,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the inner flask lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the sponge (marked in red) in the current frame, where is the inner flask lid relative to sponge from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "31e4d552813d3887",
            object_x_name: "inner flask lid",
            object_x_reference_time_sec: 261.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3539700287983616, -3.0622295822086234, -0.5743420488823429,
            ],
            object_x_camera_coordinates: [
              -0.49979068197291987, 0.5388099496588081, 0.10921329046252759,
            ],
            object_y_assoc_id: "11673443d224486b",
            object_y_name: "sponge",
            object_y_reference_time_sec: 261.0,
            object_y_world_coordinates: [
              -0.6585236117014353, -3.9526848321535066, -0.5305351281690889,
            ],
            object_y_projected_pixel: [1022.8846610080554, 683.0744177886958],
            object_y_normalized_projected_pixel: [
              0.7264805831023121, 0.48513808081583504,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the inner flask lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the sponge (marked in red) in the current frame, how far is the inner flask lid from the sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "31e4d552813d3887",
            object_x_name: "inner flask lid",
            object_x_reference_time_sec: 261.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "11673443d224486b",
            object_y_name: "sponge",
            object_y_pixel: [1022.8846610080554, 683.0744177886958],
            object_y_normalized_projected_pixel: [
              0.7264805831023121, 0.48513808081583504,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.7088158710150481, 0.5537627311493165, -0.28019525674627266,
            ],
            distance_m: 0.9421159606523398,
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
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "27476d1f9881898b",
    object_a_name: "lid",
    query_time_sec: 261.0,
    query_time_in_clip_sec: 261.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 261.0,
    clip_duration_sec: 261.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "27476d1f9881898b",
      object_name: "lid",
      query_time_sec: 261.0,
      oos_span_start_sec: 251.0,
      oos_span_end_sec: 289.0,
      oos_duration_sec: 38.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 261.0,
      clip_duration_sec: 261.0,
      anchor_assoc_id: "29a11aeea70f84db",
      anchor_name: "spatula",
      anchor_projected_pixel: [342.1685140378219, 1028.254699563715],
      anchor_world_coordinates: [
        -0.4290617372942448, -3.583441450886477, -0.521681788004295,
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
          "At the current time <TIME 00:04:21.0 video 1>, is the previously moved lid visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [672.181722151681, 4220.16188464287],
          camera_coordinates: [
            -0.4910182892681354, 0.5351980153087013, 0.10707100416861848,
          ],
          frame_index: 449,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:08.0 video 1>; Point=(0.7772, 0.5987)",
          "<TIME 00:04:09.0 video 1>; Point=(0.1116, 0.6722)",
          "<TIME 00:04:10.0 video 1>; Point=(0.497, 0.2349)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 250.0,
          sampled_last_visible_time_in_clip_sec: 250.0,
          sampled_last_visible_time_token: "<TIME 00:04:10.0 video 1>",
          projected_pixel: [699.8109972454375, 330.7552860306109],
          normalized_projected_pixel: [0.4970248559981801, 0.23491142473764978],
          camera_coordinates: [
            0.0006013516835441379, -0.1767902015974171, 0.2806231274350542,
          ],
          frame_index: 449,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 248.0,
              time_token: "<TIME 00:04:08.0 video 1>",
              projected_pixel: [1094.3078296036347, 843.0050614558072],
              normalized_projected_pixel: [
                0.7772072653434905, 0.5987251856930449,
              ],
              camera_coordinates: [
                0.27419929148612754, 0.09476571058333016, 0.40782400718262546,
              ],
              frame_index: 449,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 249.0,
              time_token: "<TIME 00:04:09.0 video 1>",
              projected_pixel: [157.14950754129381, 946.4428817494008],
              normalized_projected_pixel: [
                0.11161186615148709, 0.6721895466970177,
              ],
              camera_coordinates: [
                -0.3126882417143917, 0.13896254908907424, 0.3116821110046446,
              ],
              frame_index: 449,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 250.0,
              time_token: "<TIME 00:04:10.0 video 1>",
              projected_pixel: [699.8109972454375, 330.7552860306109],
              normalized_projected_pixel: [
                0.4970248559981801, 0.23491142473764978,
              ],
              camera_coordinates: [
                0.0006013516835441379, -0.1767902015974171, 0.2806231274350542,
              ],
              frame_index: 449,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
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
          "The lid was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:15.0 video 1>; Point=(0.6711, 0.8247)",
          "<TIME 00:00:15.0 video 1>; Point=(0.6698, 0.8257)",
          "<TIME 00:00:16.0 video 1>; Point=(0.6992, 0.8299)",
          "<TIME 00:00:17.0 video 1>; Point=(0.6979, 0.8331)",
        ],
        answer_metadata: {
          last_placement_time_sec: 14.966666666666667,
          last_placement_time_in_clip_sec: 14.966666666666667,
          last_placement_time_token: "<TIME 00:00:15.0 video 1>",
          projected_pixel: [944.854804486594, 1161.1167377095737],
          normalized_projected_pixel: [0.6710616509137742, 0.8246567739414586],
          camera_coordinates: [
            0.17668439695092086, 0.3260985777801425, 0.4049816146685198,
          ],
          frame_index: 449,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 14.966666666666667,
              time_token: "<TIME 00:00:15.0 video 1>",
              projected_pixel: [944.854804486594, 1161.1167377095737],
              normalized_projected_pixel: [
                0.6710616509137742, 0.8246567739414586,
              ],
              camera_coordinates: [
                0.17668439695092086, 0.3260985777801425, 0.4049816146685198,
              ],
              frame_index: 449,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 15.0,
              time_token: "<TIME 00:00:15.0 video 1>",
              projected_pixel: [943.092284111972, 1162.6519415000591],
              normalized_projected_pixel: [
                0.6698098608749802, 0.8257471175426556,
              ],
              camera_coordinates: [
                0.17545343239250588, 0.3272582592917861, 0.40494992958253656,
              ],
              frame_index: 450,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 16.0,
              time_token: "<TIME 00:00:16.0 video 1>",
              projected_pixel: [984.4525768391294, 1168.5644421718152],
              normalized_projected_pixel: [
                0.6991850687777907, 0.8299463367697552,
              ],
              camera_coordinates: [
                0.21016039756865412, 0.33965626555870543, 0.4094710798536868,
              ],
              frame_index: 480,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 17.0,
              time_token: "<TIME 00:00:17.0 video 1>",
              projected_pixel: [982.6568381646202, 1173.0000126459393],
              normalized_projected_pixel: [
                0.6979096861964632, 0.8330965998905818,
              ],
              camera_coordinates: [
                0.207779339074583, 0.3411675287025224, 0.4067451435894305,
              ],
              frame_index: 510,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
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
          "At the current time <TIME 00:04:21.0 video 1>, based on the last known position of the lid that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 14.966666666666667,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, in which direction is the lid from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 261.0,
            camera_coordinates: [
              -0.4910182892681354, 0.5351980153087013, 0.10707100416861848,
            ],
            world_coordinates: [
              -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.4910182892681354,
              z: 0.10707100416861848,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the spatula (marked in red) in the current frame, where is the lid relative to spatula from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "27476d1f9881898b",
            object_x_name: "lid",
            object_x_reference_time_sec: 261.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
            ],
            object_x_camera_coordinates: [
              -0.4910182892681354, 0.5351980153087013, 0.10707100416861848,
            ],
            object_y_assoc_id: "29a11aeea70f84db",
            object_y_name: "spatula",
            object_y_reference_time_sec: 261.0,
            object_y_world_coordinates: [
              -0.4290617372942448, -3.583441450886477, -0.521681788004295,
            ],
            object_y_projected_pixel: [342.1685140378219, 1028.254699563715],
            object_y_normalized_projected_pixel: [
              0.2430174105382258, 0.7302945309401384,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the spatula (marked in red) in the current frame, how far is the lid from the spatula: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "27476d1f9881898b",
            object_x_name: "lid",
            object_x_reference_time_sec: 261.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "29a11aeea70f84db",
            object_y_name: "spatula",
            object_y_pixel: [342.1685140378219, 1028.254699563715],
            object_y_normalized_projected_pixel: [
              0.2430174105382258, 0.7302945309401384,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.31601342514587816, 0.3769389117205275, -0.17467896613108413,
            ],
            distance_m: 0.52197717311211,
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
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "49ff84964587f5fe",
    object_a_name: "washing up liquid bottle",
    query_time_sec: 323.0,
    query_time_in_clip_sec: 323.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 323.0,
    clip_duration_sec: 323.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "49ff84964587f5fe",
      object_name: "washing up liquid bottle",
      query_time_sec: 323.0,
      oos_span_start_sec: 313.0,
      oos_span_end_sec: 351.0,
      oos_duration_sec: 38.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.005",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 323.0,
      clip_duration_sec: 323.0,
      anchor_assoc_id: "7ddfc30f2c53b9b2",
      anchor_name: "Track 10",
      anchor_projected_pixel: [699.1085663749558, 597.4055140211152],
      anchor_world_coordinates: [
        -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
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
          "At the current time <TIME 00:05:23.0 video 1>, is the previously moved washing up liquid bottle visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.1227787814972192, 0.680418438791242, -0.3434162902018495,
          ],
          frame_index: 5539,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The washing up liquid bottle was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:09.0 video 1>; Point=(0.7631, 0.5596)",
          "<TIME 00:05:10.0 video 1>; Point=(0.7378, 0.5701)",
          "<TIME 00:05:11.0 video 1>; Point=(0.7764, 0.6007)",
          "<TIME 00:05:12.0 video 1>; Point=(0.8036, 0.5883)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 312.0,
          sampled_last_visible_time_in_clip_sec: 312.0,
          sampled_last_visible_time_token: "<TIME 00:05:12.0 video 1>",
          projected_pixel: [1131.4346543651777, 828.3208499347763],
          normalized_projected_pixel: [0.8035757488389046, 0.5882960581923128],
          camera_coordinates: [
            0.3753378223072379, 0.10588093177549562, 0.5046823044425683,
          ],
          frame_index: 5539,
          status: "in_view",
          fixture: "P01_counter.005",
          world_coordinates: [
            -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 309.0,
              time_token: "<TIME 00:05:09.0 video 1>",
              projected_pixel: [1074.4474974874038, 787.9278579100526],
              normalized_projected_pixel: [
                0.763101915829122, 0.5596078536292987,
              ],
              camera_coordinates: [
                0.36797432572032873, 0.07997097892747917, 0.5825551659510264,
              ],
              frame_index: 5539,
              status: "in_view",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 310.0,
              time_token: "<TIME 00:05:10.0 video 1>",
              projected_pixel: [1038.8621584217935, 802.7185686161538],
              normalized_projected_pixel: [
                0.7378282375154783, 0.5701126197557911,
              ],
              camera_coordinates: [
                0.31593377014202795, 0.0895604462693913, 0.5571906132825934,
              ],
              frame_index: 5539,
              status: "in_view",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 311.0,
              time_token: "<TIME 00:05:11.0 video 1>",
              projected_pixel: [1093.1591315073715, 845.7373975216032],
              normalized_projected_pixel: [
                0.7763914286273945, 0.6006657652852295,
              ],
              camera_coordinates: [
                0.3401248527131795, 0.12024681658179692, 0.5073790127147189,
              ],
              frame_index: 5539,
              status: "in_view",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 312.0,
              time_token: "<TIME 00:05:12.0 video 1>",
              projected_pixel: [1131.4346543651777, 828.3208499347763],
              normalized_projected_pixel: [
                0.8035757488389046, 0.5882960581923128,
              ],
              camera_coordinates: [
                0.3753378223072379, 0.10588093177549562, 0.5046823044425683,
              ],
              frame_index: 5539,
              status: "in_view",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
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
          "The washing up liquid bottle was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:04.6 video 1>; Point=(0.7276, 0.5551)",
          "<TIME 00:03:05.0 video 1>; Point=(0.7142, 0.5264)",
          "<TIME 00:03:06.0 video 1>; Point=(0.7199, 0.489)",
          "<TIME 00:03:07.0 video 1>; Point=(0.714, 0.4827)",
        ],
        answer_metadata: {
          last_placement_time_sec: 184.63333333333333,
          last_placement_time_in_clip_sec: 184.63333333333333,
          last_placement_time_token: "<TIME 00:03:04.6 video 1>",
          projected_pixel: [1024.5296725579299, 781.6072589795658],
          normalized_projected_pixel: [0.7276489151689843, 0.5551187918888961],
          camera_coordinates: [
            0.2833164253806333, 0.06549026834199667, 0.5240475050131361,
          ],
          frame_index: 5539,
          status: "last_past_track_end",
          fixture: "P01_counter.005",
          world_coordinates: [
            -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 184.63333333333333,
              time_token: "<TIME 00:03:04.6 video 1>",
              projected_pixel: [1024.5296725579299, 781.6072589795658],
              normalized_projected_pixel: [
                0.7276489151689843, 0.5551187918888961,
              ],
              camera_coordinates: [
                0.2833164253806333, 0.06549026834199667, 0.5240475050131361,
              ],
              frame_index: 5539,
              status: "last_past_track_end",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 185.0,
              time_token: "<TIME 00:03:05.0 video 1>",
              projected_pixel: [1005.5589235282275, 741.2154633377684],
              normalized_projected_pixel: [
                0.7141753718240252, 0.526431437029665,
              ],
              camera_coordinates: [
                0.26415027156943727, 0.03006477122317941, 0.5215609116097886,
              ],
              frame_index: 5550,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 186.0,
              time_token: "<TIME 00:03:06.0 video 1>",
              projected_pixel: [1013.5497482561657, 688.5005902076185],
              normalized_projected_pixel: [
                0.7198506734773904, 0.48899189645427454,
              ],
              camera_coordinates: [
                0.2705649432331587, -0.015273092894522389, 0.520023868502308,
              ],
              frame_index: 5580,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 187.0,
              time_token: "<TIME 00:03:07.0 video 1>",
              projected_pixel: [1005.3532930342046, 679.6555886197932],
              normalized_projected_pixel: [
                0.7140293274390658, 0.48270993509928495,
              ],
              camera_coordinates: [
                0.26303607757015524, -0.022834617582888406, 0.5198146602157032,
              ],
              frame_index: 5610,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
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
          "At the current time <TIME 00:05:23.0 video 1>, based on the last known position of the washing up liquid bottle that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 184.63333333333333,
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
            "At the current time <TIME 00:05:23.0 video 1>, consider the washing up liquid bottle that was moved earlier. Using its last known position to infer its current location, in which direction is the washing up liquid bottle from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 323.0,
            camera_coordinates: [
              1.1227787814972192, 0.680418438791242, -0.3434162902018495,
            ],
            world_coordinates: [
              -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.1227787814972192,
              z: -0.3434162902018495,
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
            "At the current time <TIME 00:05:23.0 video 1>, consider the washing up liquid bottle that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, where is the washing up liquid bottle relative to Track 10 from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "49ff84964587f5fe",
            object_x_name: "washing up liquid bottle",
            object_x_reference_time_sec: 323.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
            ],
            object_x_camera_coordinates: [
              1.1227787814972192, 0.680418438791242, -0.3434162902018495,
            ],
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_reference_time_sec: 323.0,
            object_y_world_coordinates: [
              -0.2630548644531457, -2.594483817200525, -0.5632744566759402,
            ],
            object_y_projected_pixel: [699.1085663749558, 597.4055140211152],
            object_y_normalized_projected_pixel: [
              0.4965259704367584, 0.42429368893545116,
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
            "At the current time <TIME 00:05:23.0 video 1>, consider the washing up liquid bottle that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, how far is the washing up liquid bottle from the Track 10: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "49ff84964587f5fe",
            object_x_name: "washing up liquid bottle",
            object_x_reference_time_sec: 323.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_pixel: [699.1085663749558, 597.4055140211152],
            object_y_normalized_projected_pixel: [
              0.4965259704367584, 0.42429368893545116,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.1225425765586912, 0.7745587279662265, -0.8731688149351584,
            ],
            distance_m: 1.6194032353403993,
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
  oos_staged_h10p0_13: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "181b2e6a7a7b60c9",
    object_a_name: "flask",
    query_time_sec: 324.0,
    query_time_in_clip_sec: 324.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 324.0,
    clip_duration_sec: 324.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "181b2e6a7a7b60c9",
      object_name: "flask",
      query_time_sec: 324.0,
      oos_span_start_sec: 314.0,
      oos_span_end_sec: 351.0,
      oos_duration_sec: 37.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 6,
      clip_start_time_sec: 0,
      clip_end_time_sec: 324.0,
      clip_duration_sec: 324.0,
      anchor_assoc_id: "27476d1f9881898b",
      anchor_name: "lid",
      anchor_projected_pixel: [1277.4030614889557, 1026.9657287060104],
      anchor_world_coordinates: [
        -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
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
          "At the current time <TIME 00:05:24.0 video 1>, is the previously moved flask visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1773.7737713430515, 932.1640657212972],
          camera_coordinates: [
            1.099063746105923, 0.23294010178395042, 0.38233916912976773,
          ],
          frame_index: 1921,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The flask was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:10.0 video 1>; Point=(0.0506, 0.6725)",
          "<TIME 00:05:11.0 video 1>; Point=(0.0424, 0.6715)",
          "<TIME 00:05:12.0 video 1>; Point=(0.0851, 0.6406)",
          "<TIME 00:05:13.0 video 1>; Point=(0.4636, 0.5048)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 313.0,
          sampled_last_visible_time_in_clip_sec: 313.0,
          sampled_last_visible_time_token: "<TIME 00:05:13.0 video 1>",
          projected_pixel: [652.7437326248884, 710.8062534784691],
          normalized_projected_pixel: [0.46359640101199456, 0.5048339868455036],
          camera_coordinates: [
            -0.05143320485562253, 0.004950014606613595, 0.6829114962056655,
          ],
          frame_index: 1921,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 310.0,
              time_token: "<TIME 00:05:10.0 video 1>",
              projected_pixel: [71.27112516581803, 946.8614980702936],
              normalized_projected_pixel: [
                0.05061869685072304, 0.6724868594249244,
              ],
              camera_coordinates: [
                -0.54601534635664, 0.2099292690763941, 0.4345193627293522,
              ],
              frame_index: 1921,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 311.0,
              time_token: "<TIME 00:05:11.0 video 1>",
              projected_pixel: [59.70811169382796, 945.411739937518],
              normalized_projected_pixel: [
                0.04240632932800281, 0.671457201660169,
              ],
              camera_coordinates: [
                -0.5295777225896063, 0.19873822315185352, 0.4076308385187497,
              ],
              frame_index: 1921,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 312.0,
              time_token: "<TIME 00:05:12.0 video 1>",
              projected_pixel: [119.77254908206498, 901.9878399117517],
              normalized_projected_pixel: [
                0.08506573088214843, 0.6406163635736873,
              ],
              camera_coordinates: [
                -0.5001189835244724, 0.16949422706523154, 0.45971677948851664,
              ],
              frame_index: 1921,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 313.0,
              time_token: "<TIME 00:05:13.0 video 1>",
              projected_pixel: [652.7437326248884, 710.8062534784691],
              normalized_projected_pixel: [
                0.46359640101199456, 0.5048339868455036,
              ],
              camera_coordinates: [
                -0.05143320485562253, 0.004950014606613595, 0.6829114962056655,
              ],
              frame_index: 1921,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
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
          "The flask was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:04.0 video 1>; Point=(0.4621, 0.709)",
          "<TIME 00:01:05.0 video 1>; Point=(0.3959, 0.7135)",
        ],
        answer_metadata: {
          last_placement_time_sec: 64.03333333333333,
          last_placement_time_in_clip_sec: 64.03333333333333,
          last_placement_time_token: "<TIME 00:01:04.0 video 1>",
          projected_pixel: [650.6339158215737, 998.3306896777027],
          normalized_projected_pixel: [0.46209795157782224, 0.709041683009732],
          camera_coordinates: [
            -0.0433075145881161, 0.2634111519531016, 0.5472220570786896,
          ],
          frame_index: 1921,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 64.03333333333333,
              time_token: "<TIME 00:01:04.0 video 1>",
              projected_pixel: [650.6339158215737, 998.3306896777027],
              normalized_projected_pixel: [
                0.46209795157782224, 0.709041683009732,
              ],
              camera_coordinates: [
                -0.0433075145881161, 0.2634111519531016, 0.5472220570786896,
              ],
              frame_index: 1921,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 65.0,
              time_token: "<TIME 00:01:05.0 video 1>",
              projected_pixel: [557.3697430042494, 1004.615756394742],
              normalized_projected_pixel: [
                0.39585919247460893, 0.7135055088030838,
              ],
              camera_coordinates: [
                -0.12605468885322946, 0.26628787424301437, 0.5377795494779385,
              ],
              frame_index: 1950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
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
          "At the current time <TIME 00:05:24.0 video 1>, based on the last known position of the flask that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 64.03333333333333,
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
            "At the current time <TIME 00:05:24.0 video 1>, consider the flask that was moved earlier. Using its last known position to infer its current location, in which direction is the flask from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 324.0,
            camera_coordinates: [
              1.099063746105923, 0.23294010178395042, 0.38233916912976773,
            ],
            world_coordinates: [
              -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.099063746105923,
              z: 0.38233916912976773,
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
            "At the current time <TIME 00:05:24.0 video 1>, consider the flask that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid (marked in red) in the current frame, where is the flask relative to lid from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "181b2e6a7a7b60c9",
            object_x_name: "flask",
            object_x_reference_time_sec: 324.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
            ],
            object_x_camera_coordinates: [
              1.099063746105923, 0.23294010178395042, 0.38233916912976773,
            ],
            object_y_assoc_id: "27476d1f9881898b",
            object_y_name: "lid",
            object_y_reference_time_sec: 324.0,
            object_y_world_coordinates: [
              -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
            ],
            object_y_projected_pixel: [1277.4030614889557, 1026.9657287060104],
            object_y_normalized_projected_pixel: [
              0.9072464925347696, 0.729379068683246,
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
            "At the current time <TIME 00:05:24.0 video 1>, consider the flask that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid (marked in red) in the current frame, how far is the flask from the lid: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "181b2e6a7a7b60c9",
            object_x_name: "flask",
            object_x_reference_time_sec: 324.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "27476d1f9881898b",
            object_y_name: "lid",
            object_y_pixel: [1277.4030614889557, 1026.9657287060104],
            object_y_normalized_projected_pixel: [
              0.9072464925347696, 0.729379068683246,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.5510691329467421, -0.07082855639130936, -0.09859711061468457,
            ],
            distance_m: 0.5642829643970437,
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
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "c65da629615df617",
    object_a_name: "strainer",
    query_time_sec: 324.0,
    query_time_in_clip_sec: 324.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 324.0,
    clip_duration_sec: 324.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "c65da629615df617",
      object_name: "strainer",
      query_time_sec: 324.0,
      oos_span_start_sec: 314.0,
      oos_span_end_sec: 351.0,
      oos_duration_sec: 37.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 324.0,
      clip_duration_sec: 324.0,
      anchor_assoc_id: "b991e034f5c8eed0",
      anchor_name: "spoon",
      anchor_projected_pixel: [811.5886589231083, 848.6449428099323],
      anchor_world_coordinates: [
        -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
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
          "At the current time <TIME 00:05:24.0 video 1>, is the previously moved strainer visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [4616.061439845814, 1720.7689356844905],
          camera_coordinates: [
            1.0635442650683986, 0.3457916674715117, 0.22220639412845977,
          ],
          frame_index: 1570,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The strainer was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:10.0 video 1>; Point=(0.1658, 0.7235)",
          "<TIME 00:05:11.0 video 1>; Point=(0.1574, 0.7373)",
          "<TIME 00:05:12.0 video 1>; Point=(0.2021, 0.7005)",
          "<TIME 00:05:13.0 video 1>; Point=(0.551, 0.5804)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 313.0,
          sampled_last_visible_time_in_clip_sec: 313.0,
          sampled_last_visible_time_token: "<TIME 00:05:13.0 video 1>",
          projected_pixel: [775.8472529013791, 817.2216416097841],
          normalized_projected_pixel: [0.5510278784810931, 0.5804130977342217],
          camera_coordinates: [
            0.07001411445424921, 0.10077160586043832, 0.5575783947401727,
          ],
          frame_index: 1570,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 310.0,
              time_token: "<TIME 00:05:10.0 video 1>",
              projected_pixel: [233.46135781416632, 1018.7113569641299],
              normalized_projected_pixel: [
                0.1658106234475613, 0.7235165887529331,
              ],
              camera_coordinates: [
                -0.3495688069872167, 0.23516220929339493, 0.41422968706138663,
              ],
              frame_index: 1570,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 311.0,
              time_token: "<TIME 00:05:11.0 video 1>",
              projected_pixel: [221.59728788929914, 1038.099958204387],
              normalized_projected_pixel: [
                0.15738443742137723, 0.7372869021337976,
              ],
              camera_coordinates: [
                -0.3351902279093819, 0.2335457517327637, 0.38230194381402205,
              ],
              frame_index: 1570,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 312.0,
              time_token: "<TIME 00:05:12.0 video 1>",
              projected_pixel: [284.58024966096036, 986.2641314029221],
              normalized_projected_pixel: [
                0.20211665458875025, 0.7004716842350299,
              ],
              camera_coordinates: [
                -0.30830678750351237, 0.20874904826964324, 0.4235677060459646,
              ],
              frame_index: 1570,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 313.0,
              time_token: "<TIME 00:05:13.0 video 1>",
              projected_pixel: [775.8472529013791, 817.2216416097841],
              normalized_projected_pixel: [
                0.5510278784810931, 0.5804130977342217,
              ],
              camera_coordinates: [
                0.07001411445424921, 0.10077160586043832, 0.5575783947401727,
              ],
              frame_index: 1570,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
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
          "The strainer was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:52.3 video 1>; Point=(0.1858, 0.7034)",
          "<TIME 00:00:53.0 video 1>; Point=(0.0023, 0.7314)",
          "<TIME 00:00:54.0 video 1>; Point=(0.0828, 0.7386)",
          "<TIME 00:00:55.0 video 1>; Point=(0.0833, 0.7426)",
        ],
        answer_metadata: {
          last_placement_time_sec: 52.333333333333336,
          last_placement_time_in_clip_sec: 52.333333333333336,
          last_placement_time_token: "<TIME 00:00:52.3 video 1>",
          projected_pixel: [261.5375273345165, 990.3638697847048],
          normalized_projected_pixel: [0.18575108475462818, 0.7033834302448188],
          camera_coordinates: [
            -0.33635901268883406, 0.2189217844702318, 0.43326772210987086,
          ],
          frame_index: 1570,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 52.333333333333336,
              time_token: "<TIME 00:00:52.3 video 1>",
              projected_pixel: [261.5375273345165, 990.3638697847048],
              normalized_projected_pixel: [
                0.18575108475462818, 0.7033834302448188,
              ],
              camera_coordinates: [
                -0.33635901268883406, 0.2189217844702318, 0.43326772210987086,
              ],
              frame_index: 1570,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 53.0,
              time_token: "<TIME 00:00:53.0 video 1>",
              projected_pixel: [3.2515092412666036, 1029.8014440707207],
              normalized_projected_pixel: [
                0.0023093105406723036, 0.731393071072955,
              ],
              camera_coordinates: [
                -0.5268626129942214, 0.24579156829020277, 0.29615250709963004,
              ],
              frame_index: 1590,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 54.0,
              time_token: "<TIME 00:00:54.0 video 1>",
              projected_pixel: [116.57050474372261, 1039.9179847065705],
              normalized_projected_pixel: [
                0.08279155166457572, 0.7385781141381892,
              ],
              camera_coordinates: [
                -0.40100110412437906, 0.23034611146384742, 0.34448824215803064,
              ],
              frame_index: 1620,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 55.0,
              time_token: "<TIME 00:00:55.0 video 1>",
              projected_pixel: [117.26764846401409, 1045.5284805159408],
              normalized_projected_pixel: [
                0.08328668214773728, 0.7425628412755262,
              ],
              camera_coordinates: [
                -0.3753145052909934, 0.21947819394842916, 0.3218315278103905,
              ],
              frame_index: 1650,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
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
          "At the current time <TIME 00:05:24.0 video 1>, based on the last known position of the strainer that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area next to the window",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 52.333333333333336,
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
            "At the current time <TIME 00:05:24.0 video 1>, consider the strainer that was moved earlier. Using its last known position to infer its current location, in which direction is the strainer from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 324.0,
            camera_coordinates: [
              1.0635442650683986, 0.3457916674715117, 0.22220639412845977,
            ],
            world_coordinates: [
              -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.0635442650683986,
              z: 0.22220639412845977,
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
            "At the current time <TIME 00:05:24.0 video 1>, consider the strainer that was moved earlier. Using its last known position to infer its current location, and using the current position of the spoon (marked in red) in the current frame, where is the strainer relative to spoon from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "c65da629615df617",
            object_x_name: "strainer",
            object_x_reference_time_sec: 324.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
            ],
            object_x_camera_coordinates: [
              1.0635442650683986, 0.3457916674715117, 0.22220639412845977,
            ],
            object_y_assoc_id: "b991e034f5c8eed0",
            object_y_name: "spoon",
            object_y_reference_time_sec: 324.0,
            object_y_world_coordinates: [
              -0.27434032808867753, -2.5826466018522978, -0.5693587468775595,
            ],
            object_y_projected_pixel: [811.5886589231083, 848.6449428099323],
            object_y_normalized_projected_pixel: [
              0.5764123998033439, 0.6027307832456906,
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
            "At the current time <TIME 00:05:24.0 video 1>, consider the strainer that was moved earlier. Using its last known position to infer its current location, and using the current position of the spoon (marked in red) in the current frame, how far is the strainer from the spoon: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "c65da629615df617",
            object_x_name: "strainer",
            object_x_reference_time_sec: 324.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "b991e034f5c8eed0",
            object_y_name: "spoon",
            object_y_pixel: [811.5886589231083, 848.6449428099323],
            object_y_normalized_projected_pixel: [
              0.5764123998033439, 0.6027307832456906,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9351386004000957, 0.18381166101991475, -0.4759097686469107,
            ],
            distance_m: 1.0652516306388393,
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
  oos_staged_h10p0_15: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "29a11aeea70f84db",
    object_a_name: "spatula",
    query_time_sec: 324.0,
    query_time_in_clip_sec: 324.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 324.0,
    clip_duration_sec: 324.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "29a11aeea70f84db",
      object_name: "spatula",
      query_time_sec: 324.0,
      oos_span_start_sec: 314.0,
      oos_span_end_sec: 351.0,
      oos_duration_sec: 37.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 324.0,
      clip_duration_sec: 324.0,
      anchor_assoc_id: "caeb494b6574cb34",
      anchor_name: "mug",
      anchor_projected_pixel: [1044.605033738502, 1264.274906650334],
      anchor_world_coordinates: [
        -0.5156390819976685, -2.9391776649062584, -0.8483249694842916,
      ],
      anchor_status: "observed_visible_in_open_fixture",
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
          "At the current time <TIME 00:05:24.0 video 1>, is the previously moved spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [3389.4640346506603, 1687.5488872691813],
          camera_coordinates: [
            1.0027545223661916, 0.39957440446588743, 0.24329189583051058,
          ],
          frame_index: 5953,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:10.0 video 1>; Point=(0.1762, 0.8012)",
          "<TIME 00:05:11.0 video 1>; Point=(0.1667, 0.8184)",
          "<TIME 00:05:12.0 video 1>; Point=(0.206, 0.7798)",
          "<TIME 00:05:13.0 video 1>; Point=(0.5292, 0.6432)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 313.0,
          sampled_last_visible_time_in_clip_sec: 313.0,
          sampled_last_visible_time_token: "<TIME 00:05:13.0 video 1>",
          projected_pixel: [745.1598618177244, 905.6920983403463],
          normalized_projected_pixel: [0.5292328564046338, 0.643247228934905],
          camera_coordinates: [
            0.041784139010565546, 0.17951969501628762, 0.5517148685668412,
          ],
          frame_index: 5953,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.4290617372942448, -3.583441450886477, -0.521681788004295,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 310.0,
              time_token: "<TIME 00:05:10.0 video 1>",
              projected_pixel: [248.1464605154124, 1128.0249369714002],
              normalized_projected_pixel: [
                0.1762403838887872, 0.8011540745535513,
              ],
              camera_coordinates: [
                -0.3371095939799784, 0.3161637488384672, 0.39645069381085873,
              ],
              frame_index: 5953,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 311.0,
              time_token: "<TIME 00:05:11.0 video 1>",
              projected_pixel: [234.6962369830503, 1152.2766226479848],
              normalized_projected_pixel: [
                0.1666876683118255, 0.8183782831306711,
              ],
              camera_coordinates: [
                -0.3271550122553968, 0.31509195930644784, 0.3644630722640203,
              ],
              frame_index: 5953,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 312.0,
              time_token: "<TIME 00:05:12.0 video 1>",
              projected_pixel: [290.0583424938058, 1098.0101801801688],
              normalized_projected_pixel: [
                0.2060073455211689, 0.7798367756961426,
              ],
              camera_coordinates: [
                -0.3028693838731946, 0.29084464382394715, 0.4073405118713982,
              ],
              frame_index: 5953,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 313.0,
              time_token: "<TIME 00:05:13.0 video 1>",
              projected_pixel: [745.1598618177244, 905.6920983403463],
              normalized_projected_pixel: [
                0.5292328564046338, 0.643247228934905,
              ],
              camera_coordinates: [
                0.041784139010565546, 0.17951969501628762, 0.5517148685668412,
              ],
              frame_index: 5953,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
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
          "<TIME 00:03:18.4 video 1>; Point=(0.3503, 0.6785)",
          "<TIME 00:03:19.0 video 1>; Point=(0.1635, 0.768)",
          "<TIME 00:03:20.0 video 1>; Point=(0.1148, 0.8112)",
          "<TIME 00:03:21.0 video 1>; Point=(0.1304, 0.8185)",
        ],
        answer_metadata: {
          last_placement_time_sec: 198.43333333333334,
          last_placement_time_in_clip_sec: 198.43333333333334,
          last_placement_time_token: "<TIME 00:03:18.4 video 1>",
          projected_pixel: [493.28316088412095, 955.3814858614883],
          normalized_projected_pixel: [0.3503431540370177, 0.6785379871175343],
          camera_coordinates: [
            -0.15169152648599615, 0.18403569261635577, 0.44573109676091405,
          ],
          frame_index: 5953,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.4290617372942448, -3.583441450886477, -0.521681788004295,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 198.43333333333334,
              time_token: "<TIME 00:03:18.4 video 1>",
              projected_pixel: [493.28316088412095, 955.3814858614883],
              normalized_projected_pixel: [
                0.3503431540370177, 0.6785379871175343,
              ],
              camera_coordinates: [
                -0.15169152648599615, 0.18403569261635577, 0.44573109676091405,
              ],
              frame_index: 5953,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 199.0,
              time_token: "<TIME 00:03:19.0 video 1>",
              projected_pixel: [230.18927857066222, 1081.355275953971],
              normalized_projected_pixel: [
                0.16348670353029987, 0.7680080084900361,
              ],
              camera_coordinates: [
                -0.3223286800437104, 0.2585291173870492, 0.3694290516015166,
              ],
              frame_index: 5970,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 200.0,
              time_token: "<TIME 00:03:20.0 video 1>",
              projected_pixel: [161.67275168953597, 1142.2309216590363],
              normalized_projected_pixel: [
                0.1148243975067727, 0.8112435523146565,
              ],
              camera_coordinates: [
                -0.3842901820705502, 0.31263315063797936, 0.3467312736213106,
              ],
              frame_index: 6000,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 201.0,
              time_token: "<TIME 00:03:21.0 video 1>",
              projected_pixel: [183.56406159940786, 1152.4394510782572],
              normalized_projected_pixel: [
                0.13037220284048853, 0.8184939283226259,
              ],
              camera_coordinates: [
                -0.3709206758971506, 0.3219344626005094, 0.3547881534614987,
              ],
              frame_index: 6030,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
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
          "At the current time <TIME 00:05:24.0 video 1>, based on the last known position of the spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area next to the window",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 198.43333333333334,
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
            "At the current time <TIME 00:05:24.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the spatula from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 324.0,
            camera_coordinates: [
              1.0027545223661916, 0.39957440446588743, 0.24329189583051058,
            ],
            world_coordinates: [
              -0.4290617372942448, -3.583441450886477, -0.521681788004295,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.0027545223661916,
              z: 0.24329189583051058,
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
            "At the current time <TIME 00:05:24.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the mug (marked in red) in the current frame, where is the spatula relative to mug from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "29a11aeea70f84db",
            object_x_name: "spatula",
            object_x_reference_time_sec: 324.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4290617372942448, -3.583441450886477, -0.521681788004295,
            ],
            object_x_camera_coordinates: [
              1.0027545223661916, 0.39957440446588743, 0.24329189583051058,
            ],
            object_y_assoc_id: "caeb494b6574cb34",
            object_y_name: "mug",
            object_y_reference_time_sec: 324.0,
            object_y_world_coordinates: [
              -0.5156390819976685, -2.9391776649062584, -0.8483249694842916,
            ],
            object_y_projected_pixel: [1044.605033738502, 1264.274906650334],
            object_y_normalized_projected_pixel: [
              0.741906984189277, 0.8979225189277941,
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
            "At the current time <TIME 00:05:24.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the mug (marked in red) in the current frame, how far is the spatula from the mug: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "29a11aeea70f84db",
            object_x_name: "spatula",
            object_x_reference_time_sec: 324.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "caeb494b6574cb34",
            object_y_name: "mug",
            object_y_pixel: [1044.605033738502, 1264.274906650334],
            object_y_normalized_projected_pixel: [
              0.741906984189277, 0.8979225189277941,
            ],
            object_y_status: "observed_visible_in_open_fixture",
            vector_object_x_relative_to_object_y: [
              0.6378591946781538, -0.18854759166886703, -0.29470779424582827,
            ],
            distance_m: 0.7275075467298151,
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
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "27476d1f9881898b",
    object_a_name: "lid",
    query_time_sec: 335.0,
    query_time_in_clip_sec: 335.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 335.0,
    clip_duration_sec: 335.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "27476d1f9881898b",
      object_name: "lid",
      query_time_sec: 335.0,
      oos_span_start_sec: 325.0,
      oos_span_end_sec: 351.0,
      oos_duration_sec: 26.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 335.0,
      clip_duration_sec: 335.0,
      anchor_assoc_id: "7ddfc30f2c53b9b2",
      anchor_name: "Track 10",
      anchor_projected_pixel: [1082.0782916794024, 1052.6676083589248],
      anchor_world_coordinates: [
        -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
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
          "At the current time <TIME 00:05:35.0 video 1>, is the previously moved lid visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.0150953810560295, 1.1997988709461345, -0.4864924631491465,
          ],
          frame_index: 449,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:21.0 video 1>; Point=(0.9526, 0.457)",
          "<TIME 00:05:22.0 video 1>; Point=(0.9538, 0.4603)",
          "<TIME 00:05:23.0 video 1>; Point=(0.9217, 0.6091)",
          "<TIME 00:05:24.0 video 1>; Point=(0.9072, 0.7294)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 324.0,
          sampled_last_visible_time_in_clip_sec: 324.0,
          sampled_last_visible_time_token: "<TIME 00:05:24.0 video 1>",
          projected_pixel: [1277.4030614889557, 1026.9657287060104],
          normalized_projected_pixel: [0.9072464925347696, 0.729379068683246],
          camera_coordinates: [
            0.5479946131591809, 0.3037686581752598, 0.4809362797444523,
          ],
          frame_index: 449,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 321.0,
              time_token: "<TIME 00:05:21.0 video 1>",
              projected_pixel: [1341.2230902463875, 643.5190771912459],
              normalized_projected_pixel: [
                0.9525732175045366, 0.45704479914150986,
              ],
              camera_coordinates: [
                0.4151063208538157, -0.04026728622266873, 0.33431566941820884,
              ],
              frame_index: 449,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 322.0,
              time_token: "<TIME 00:05:22.0 video 1>",
              projected_pixel: [1343.0205377241516, 648.0696057272422],
              normalized_projected_pixel: [
                0.9538498137245395, 0.46027670861309816,
              ],
              camera_coordinates: [
                0.3904623264675, -0.035014216065096804, 0.31314575927044835,
              ],
              frame_index: 449,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 323.0,
              time_token: "<TIME 00:05:23.0 video 1>",
              projected_pixel: [1297.7832870540233, 857.6161855847649],
              normalized_projected_pixel: [
                0.9217210845554142, 0.6091024045346342,
              ],
              camera_coordinates: [
                0.40891971184063935, 0.10343745228493173, 0.36229371220794226,
              ],
              frame_index: 449,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 324.0,
              time_token: "<TIME 00:05:24.0 video 1>",
              projected_pixel: [1277.4030614889557, 1026.9657287060104],
              normalized_projected_pixel: [
                0.9072464925347696, 0.729379068683246,
              ],
              camera_coordinates: [
                0.5479946131591809, 0.3037686581752598, 0.4809362797444523,
              ],
              frame_index: 449,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
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
          "The lid was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:15.0 video 1>; Point=(0.6711, 0.8247)",
          "<TIME 00:00:15.0 video 1>; Point=(0.6698, 0.8257)",
          "<TIME 00:00:16.0 video 1>; Point=(0.6992, 0.8299)",
          "<TIME 00:00:17.0 video 1>; Point=(0.6979, 0.8331)",
        ],
        answer_metadata: {
          last_placement_time_sec: 14.966666666666667,
          last_placement_time_in_clip_sec: 14.966666666666667,
          last_placement_time_token: "<TIME 00:00:15.0 video 1>",
          projected_pixel: [944.854804486594, 1161.1167377095737],
          normalized_projected_pixel: [0.6710616509137742, 0.8246567739414586],
          camera_coordinates: [
            0.17668439695092086, 0.3260985777801425, 0.4049816146685198,
          ],
          frame_index: 449,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 14.966666666666667,
              time_token: "<TIME 00:00:15.0 video 1>",
              projected_pixel: [944.854804486594, 1161.1167377095737],
              normalized_projected_pixel: [
                0.6710616509137742, 0.8246567739414586,
              ],
              camera_coordinates: [
                0.17668439695092086, 0.3260985777801425, 0.4049816146685198,
              ],
              frame_index: 449,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 15.0,
              time_token: "<TIME 00:00:15.0 video 1>",
              projected_pixel: [943.092284111972, 1162.6519415000591],
              normalized_projected_pixel: [
                0.6698098608749802, 0.8257471175426556,
              ],
              camera_coordinates: [
                0.17545343239250588, 0.3272582592917861, 0.40494992958253656,
              ],
              frame_index: 450,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 16.0,
              time_token: "<TIME 00:00:16.0 video 1>",
              projected_pixel: [984.4525768391294, 1168.5644421718152],
              normalized_projected_pixel: [
                0.6991850687777907, 0.8299463367697552,
              ],
              camera_coordinates: [
                0.21016039756865412, 0.33965626555870543, 0.4094710798536868,
              ],
              frame_index: 480,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 17.0,
              time_token: "<TIME 00:00:17.0 video 1>",
              projected_pixel: [982.6568381646202, 1173.0000126459393],
              normalized_projected_pixel: [
                0.6979096861964632, 0.8330965998905818,
              ],
              camera_coordinates: [
                0.207779339074583, 0.3411675287025224, 0.4067451435894305,
              ],
              frame_index: 510,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
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
          "At the current time <TIME 00:05:35.0 video 1>, based on the last known position of the lid that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area close to the microwave",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 14.966666666666667,
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
            "At the current time <TIME 00:05:35.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, in which direction is the lid from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 335.0,
            camera_coordinates: [
              -1.0150953810560295, 1.1997988709461345, -0.4864924631491465,
            ],
            world_coordinates: [
              -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.0150953810560295,
              z: -0.4864924631491465,
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
            "At the current time <TIME 00:05:35.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, where is the lid relative to Track 10 from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "27476d1f9881898b",
            object_x_name: "lid",
            object_x_reference_time_sec: 335.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
            ],
            object_x_camera_coordinates: [
              -1.0150953810560295, 1.1997988709461345, -0.4864924631491465,
            ],
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_reference_time_sec: 335.0,
            object_y_world_coordinates: [
              -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
            ],
            object_y_projected_pixel: [1082.0782916794024, 1052.6676083589248],
            object_y_normalized_projected_pixel: [
              0.7685215139768483, 0.7476332445731,
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
            "At the current time <TIME 00:05:35.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, how far is the lid from the Track 10: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "27476d1f9881898b",
            object_x_name: "lid",
            object_x_reference_time_sec: 335.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_pixel: [1082.0782916794024, 1052.6676083589248],
            object_y_normalized_projected_pixel: [
              0.7685215139768483, 0.7476332445731,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.3045288088253748, 0.9384115968167874, -0.913007886396459,
            ],
            distance_m: 1.848241093233703,
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
  oos_staged_h10p0_17: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "c062f2a00587fe9c",
    object_a_name: "disk",
    query_time_sec: 347.0,
    query_time_in_clip_sec: 347.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 347.0,
    clip_duration_sec: 347.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "c062f2a00587fe9c",
      object_name: "disk",
      query_time_sec: 347.0,
      oos_span_start_sec: 337.0,
      oos_span_end_sec: 360.0,
      oos_duration_sec: 23.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 347.0,
      clip_duration_sec: 347.0,
      anchor_assoc_id: "b991e034f5c8eed0",
      anchor_name: "spoon",
      anchor_projected_pixel: [997.8576947209032, 986.5606250513915],
      anchor_world_coordinates: [
        -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
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
          "At the current time <TIME 00:05:47.0 video 1>, is the previously moved disk visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [9844.903620552821, -665.6404328547396],
          camera_coordinates: [
            -0.8883997554639693, 0.37211263474934925, 0.11317750299751528,
          ],
          frame_index: 2605,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The disk was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:36.0 video 1>; Point=(0.4253, 0.7219)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 336.0,
          sampled_last_visible_time_in_clip_sec: 336.0,
          sampled_last_visible_time_token: "<TIME 00:05:36.0 video 1>",
          projected_pixel: [598.8525734723061, 1016.425061683393],
          normalized_projected_pixel: [0.42532143002294465, 0.7218927994910461],
          camera_coordinates: [
            -0.9529256365152685, 0.3090171504783221, 0.13840126460393443,
          ],
          frame_index: 2605,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 336.0,
              time_token: "<TIME 00:05:36.0 video 1>",
              projected_pixel: [598.8525734723061, 1016.425061683393],
              normalized_projected_pixel: [
                0.42532143002294465, 0.7218927994910461,
              ],
              camera_coordinates: [
                -0.9529256365152685, 0.3090171504783221, 0.13840126460393443,
              ],
              frame_index: 2605,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
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
          "The disk was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:26.8 video 1>; Point=(0.6521, 0.6811)",
          "<TIME 00:01:27.0 video 1>; Point=(0.6357, 0.7027)",
          "<TIME 00:01:28.0 video 1>; Point=(0.6546, 0.7941)",
          "<TIME 00:01:29.0 video 1>; Point=(0.5739, 0.7902)",
        ],
        answer_metadata: {
          last_placement_time_sec: 86.83333333333333,
          last_placement_time_in_clip_sec: 86.83333333333333,
          last_placement_time_token: "<TIME 00:01:26.8 video 1>",
          projected_pixel: [918.103942172105, 959.0279645612059],
          normalized_projected_pixel: [0.6520624589290519, 0.6811278157394928],
          camera_coordinates: [
            0.12344406815053288, 0.1421444913665615, 0.33889187630359974,
          ],
          frame_index: 2605,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 86.83333333333333,
              time_token: "<TIME 00:01:26.8 video 1>",
              projected_pixel: [918.103942172105, 959.0279645612059],
              normalized_projected_pixel: [
                0.6520624589290519, 0.6811278157394928,
              ],
              camera_coordinates: [
                0.12344406815053288, 0.1421444913665615, 0.33889187630359974,
              ],
              frame_index: 2605,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 87.0,
              time_token: "<TIME 00:01:27.0 video 1>",
              projected_pixel: [895.0243598909445, 989.4253434303612],
              normalized_projected_pixel: [
                0.6356707101498186, 0.7027168632317906,
              ],
              camera_coordinates: [
                0.11483448131214313, 0.16552951714883313, 0.35143700623803287,
              ],
              frame_index: 2610,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 88.0,
              time_token: "<TIME 00:01:28.0 video 1>",
              projected_pixel: [921.6542931713477, 1118.154976820606],
              normalized_projected_pixel: [
                0.6545840150364686, 0.7941441596737259,
              ],
              camera_coordinates: [
                0.14003192423333832, 0.25841120805147383, 0.36220479926229454,
              ],
              frame_index: 2640,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 89.0,
              time_token: "<TIME 00:01:29.0 video 1>",
              projected_pixel: [808.1176198211792, 1112.614654029818],
              normalized_projected_pixel: [
                0.5739471731684511, 0.7902092713279957,
              ],
              camera_coordinates: [
                0.06462129285908658, 0.2395108530857854, 0.34634497005983067,
              ],
              frame_index: 2670,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
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
          "At the current time <TIME 00:05:47.0 video 1>, based on the last known position of the disk that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 86.83333333333333,
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
            "At the current time <TIME 00:05:47.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, in which direction is the disk from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 347.0,
            camera_coordinates: [
              -0.8883997554639693, 0.37211263474934925, 0.11317750299751528,
            ],
            world_coordinates: [
              -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.8883997554639693,
              z: 0.11317750299751528,
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
            "At the current time <TIME 00:05:47.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, and using the current position of the spoon (marked in red) in the current frame, where is the disk relative to spoon from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "c062f2a00587fe9c",
            object_x_name: "disk",
            object_x_reference_time_sec: 347.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
            ],
            object_x_camera_coordinates: [
              -0.8883997554639693, 0.37211263474934925, 0.11317750299751528,
            ],
            object_y_assoc_id: "b991e034f5c8eed0",
            object_y_name: "spoon",
            object_y_reference_time_sec: 347.0,
            object_y_world_coordinates: [
              -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
            ],
            object_y_projected_pixel: [997.8576947209032, 986.5606250513915],
            object_y_normalized_projected_pixel: [
              0.7087057490915506, 0.7006822621103633,
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
            "At the current time <TIME 00:05:47.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, and using the current position of the spoon (marked in red) in the current frame, how far is the disk from the spoon: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "c062f2a00587fe9c",
            object_x_name: "disk",
            object_x_reference_time_sec: 347.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "b991e034f5c8eed0",
            object_y_name: "spoon",
            object_y_pixel: [997.8576947209032, 986.5606250513915],
            object_y_normalized_projected_pixel: [
              0.7087057490915506, 0.7006822621103633,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.119193031269559, 0.15598434118496324, -0.3418535334766941,
            ],
            distance_m: 1.18058798667772,
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
  oos_staged_h10p0_18: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "7ddfc30f2c53b9b2",
    object_a_name: "Track 10",
    query_time_sec: 371.0,
    query_time_in_clip_sec: 371.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 371.0,
    clip_duration_sec: 371.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "7ddfc30f2c53b9b2",
      object_name: "Track 10",
      query_time_sec: 371.0,
      oos_span_start_sec: 361.0,
      oos_span_end_sec: 443.0,
      oos_duration_sec: 82.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 371.0,
      clip_duration_sec: 371.0,
      anchor_assoc_id: "49ff84964587f5fe",
      anchor_name: "washing up liquid bottle",
      anchor_projected_pixel: [985.3926169977849, 846.9397740951489],
      anchor_world_coordinates: [
        -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
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
          "At the current time <TIME 00:06:11.0 video 1>, is the previously moved Track 10 visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.6327377103983405, 1.4350323587889626, -1.4144426274217978,
          ],
          frame_index: 9834,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The Track 10 was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:59.0 video 1>; Point=(0.6196, 0.5798)",
          "<TIME 00:06:00.0 video 1>; Point=(0.7367, 0.7417)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 360.0,
          sampled_last_visible_time_in_clip_sec: 360.0,
          sampled_last_visible_time_token: "<TIME 00:06:00.0 video 1>",
          projected_pixel: [1037.2056887374538, 1044.2759740921852],
          normalized_projected_pixel: [0.7366517675692144, 0.7416732770541088],
          camera_coordinates: [
            0.3176283094195016, 0.31697833050783075, 0.5393296590531467,
          ],
          frame_index: 9834,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 359.0,
              time_token: "<TIME 00:05:59.0 video 1>",
              projected_pixel: [872.4055294908575, 816.3244838122304],
              normalized_projected_pixel: [
                0.619606199922484, 0.5797759117984591,
              ],
              camera_coordinates: [
                0.2580244781660226, 0.16343762151236968, 0.9107261074216801,
              ],
              frame_index: 9834,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 360.0,
              time_token: "<TIME 00:06:00.0 video 1>",
              projected_pixel: [1037.2056887374538, 1044.2759740921852],
              normalized_projected_pixel: [
                0.7366517675692144, 0.7416732770541088,
              ],
              camera_coordinates: [
                0.3176283094195016, 0.31697833050783075, 0.5393296590531467,
              ],
              frame_index: 9834,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
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
          "The Track 10 was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:27.8 video 1>; Point=(0.6281, 0.7704)",
          "<TIME 00:05:28.0 video 1>; Point=(0.6215, 0.8035)",
          "<TIME 00:05:29.0 video 1>; Point=(0.7294, 0.9115)",
          "<TIME 00:05:30.0 video 1>; Point=(0.7809, 0.9151)",
        ],
        answer_metadata: {
          last_placement_time_sec: 327.8,
          last_placement_time_in_clip_sec: 327.8,
          last_placement_time_token: "<TIME 00:05:27.8 video 1>",
          projected_pixel: [884.3472794442306, 1084.777104212178],
          normalized_projected_pixel: [0.6280875564234593, 0.7704382842416038],
          camera_coordinates: [
            0.16131550676079032, 0.328542658268917, 0.5100198451320364,
          ],
          frame_index: 9834,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 327.8,
              time_token: "<TIME 00:05:27.8 video 1>",
              projected_pixel: [884.3472794442306, 1084.777104212178],
              normalized_projected_pixel: [
                0.6280875564234593, 0.7704382842416038,
              ],
              camera_coordinates: [
                0.16131550676079032, 0.328542658268917, 0.5100198451320364,
              ],
              frame_index: 9834,
              status: "last_past_track_end",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 328.0,
              time_token: "<TIME 00:05:28.0 video 1>",
              projected_pixel: [875.052193258192, 1131.3737980092471],
              normalized_projected_pixel: [
                0.6214859327117841, 0.8035325269952039,
              ],
              camera_coordinates: [
                0.13888543008497045, 0.33431340568683027, 0.4554516757821576,
              ],
              frame_index: 9840,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 329.0,
              time_token: "<TIME 00:05:29.0 video 1>",
              projected_pixel: [1027.0267855077673, 1283.3403669953605],
              normalized_projected_pixel: [
                0.7294224328890393, 0.9114633288319322,
              ],
              camera_coordinates: [
                0.232310183679594, 0.4079104119050184, 0.3575839846262856,
              ],
              frame_index: 9870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 330.0,
              time_token: "<TIME 00:05:30.0 video 1>",
              projected_pixel: [1099.5118967602161, 1288.4463597859863],
              normalized_projected_pixel: [
                0.780903335767199, 0.9150897441661834,
              ],
              camera_coordinates: [
                0.3178210543322535, 0.46135800547109473, 0.3742867734769728,
              ],
              frame_index: 9900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
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
          "At the current time <TIME 00:06:11.0 video 1>, based on the last known position of the Track 10 that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 327.8,
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
            "At the current time <TIME 00:06:11.0 video 1>, consider the Track 10 that was moved earlier. Using its last known position to infer its current location, in which direction is the Track 10 from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 371.0,
            camera_coordinates: [
              0.6327377103983405, 1.4350323587889626, -1.4144426274217978,
            ],
            world_coordinates: [
              -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.6327377103983405,
              z: -1.4144426274217978,
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
            "At the current time <TIME 00:06:11.0 video 1>, consider the Track 10 that was moved earlier. Using its last known position to infer its current location, and using the current position of the washing up liquid bottle (marked in red) in the current frame, where is the Track 10 relative to washing up liquid bottle from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "7ddfc30f2c53b9b2",
            object_x_name: "Track 10",
            object_x_reference_time_sec: 371.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
            ],
            object_x_camera_coordinates: [
              0.6327377103983405, 1.4350323587889626, -1.4144426274217978,
            ],
            object_y_assoc_id: "49ff84964587f5fe",
            object_y_name: "washing up liquid bottle",
            object_y_reference_time_sec: 371.0,
            object_y_world_coordinates: [
              -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
            ],
            object_y_projected_pixel: [985.3926169977849, 846.9397740951489],
            object_y_normalized_projected_pixel: [
              0.6998527109359268, 0.60151972591985,
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
            "At the current time <TIME 00:06:11.0 video 1>, consider the Track 10 that was moved earlier. Using its last known position to infer its current location, and using the current position of the washing up liquid bottle (marked in red) in the current frame, how far is the Track 10 from the washing up liquid bottle: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "7ddfc30f2c53b9b2",
            object_x_name: "Track 10",
            object_x_reference_time_sec: 371.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "49ff84964587f5fe",
            object_y_name: "washing up liquid bottle",
            object_y_pixel: [985.3926169977849, 846.9397740951489],
            object_y_normalized_projected_pixel: [
              0.6998527109359268, 0.60151972591985,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.36878151817870264, 1.3055611530231173, -1.9710627678313268,
            ],
            distance_m: 2.392818038874693,
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
  oos_staged_h10p0_19: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "b991e034f5c8eed0",
    object_a_name: "spoon",
    query_time_sec: 371.0,
    query_time_in_clip_sec: 371.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 371.0,
    clip_duration_sec: 371.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "b991e034f5c8eed0",
      object_name: "spoon",
      query_time_sec: 371.0,
      oos_span_start_sec: 361.0,
      oos_span_end_sec: 443.0,
      oos_duration_sec: 82.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 371.0,
      clip_duration_sec: 371.0,
      anchor_assoc_id: "11673443d224486b",
      anchor_name: "sponge",
      anchor_projected_pixel: [654.888662861842, 970.7681657327704],
      anchor_world_coordinates: [
        -0.6585236117014353, -3.9526848321535066, -0.5305351281690889,
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
          "At the current time <TIME 00:06:11.0 video 1>, is the previously moved spoon visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.6374718514492395, 1.4236620756703484, -1.4239669608245813,
          ],
          frame_index: 10400,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The spoon was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:59.0 video 1>; Point=(0.6185, 0.5726)",
          "<TIME 00:06:00.0 video 1>; Point=(0.7382, 0.7318)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 360.0,
          sampled_last_visible_time_in_clip_sec: 360.0,
          sampled_last_visible_time_token: "<TIME 00:06:00.0 video 1>",
          projected_pixel: [1039.349265055701, 1030.3612038589035],
          normalized_projected_pixel: [0.7381741939316058, 0.7317906277406986],
          camera_coordinates: [
            0.3171681935520563, 0.3015887811013122, 0.5370148331617506,
          ],
          frame_index: 10400,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 359.0,
              time_token: "<TIME 00:05:59.0 video 1>",
              projected_pixel: [870.8783503982503, 806.2159467639138],
              normalized_projected_pixel: [
                0.6185215556805755, 0.5725965530993706,
              ],
              camera_coordinates: [
                0.2553099100116967, 0.14816103195151692, 0.9094356472016853,
              ],
              frame_index: 10400,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 360.0,
              time_token: "<TIME 00:06:00.0 video 1>",
              projected_pixel: [1039.349265055701, 1030.3612038589035],
              normalized_projected_pixel: [
                0.7381741939316058, 0.7317906277406986,
              ],
              camera_coordinates: [
                0.3171681935520563, 0.3015887811013122, 0.5370148331617506,
              ],
              frame_index: 10400,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
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
          "The spoon was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:46.7 video 1>; Point=(0.6812, 0.6955)",
          "<TIME 00:05:47.0 video 1>; Point=(0.7087, 0.7007)",
          "<TIME 00:05:48.0 video 1>; Point=(0.7902, 0.9438)",
          "<TIME 00:05:49.0 video 1>; Point=(5.0991, 3.6207)",
        ],
        answer_metadata: {
          last_placement_time_sec: 346.6666666666667,
          last_placement_time_in_clip_sec: 346.6666666666667,
          last_placement_time_token: "<TIME 00:05:46.7 video 1>",
          projected_pixel: [959.1759491994931, 979.2339865735912],
          normalized_projected_pixel: [0.681232918465549, 0.6954786836460165],
          camera_coordinates: [
            0.20133170441642578, 0.2108752248318287, 0.4604933348842746,
          ],
          frame_index: 10400,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 346.6666666666667,
              time_token: "<TIME 00:05:46.7 video 1>",
              projected_pixel: [959.1759491994931, 979.2339865735912],
              normalized_projected_pixel: [
                0.681232918465549, 0.6954786836460165,
              ],
              camera_coordinates: [
                0.20133170441642578, 0.2108752248318287, 0.4604933348842746,
              ],
              frame_index: 10400,
              status: "last_past_track_end",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 347.0,
              time_token: "<TIME 00:05:47.0 video 1>",
              projected_pixel: [997.8576947209032, 986.5606250513915],
              normalized_projected_pixel: [
                0.7087057490915506, 0.7006822621103633,
              ],
              camera_coordinates: [
                0.23079327580558973, 0.216128293564386, 0.4550310364742094,
              ],
              frame_index: 10410,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 348.0,
              time_token: "<TIME 00:05:48.0 video 1>",
              projected_pixel: [1112.5960596267037, 1328.8684346859613],
              normalized_projected_pixel: [
                0.7901960650757839, 0.9437986041803703,
              ],
              camera_coordinates: [
                0.29509661662030306, 0.4436844539265721, 0.29976885841482837,
              ],
              frame_index: 10440,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 349.0,
              time_token: "<TIME 00:05:49.0 video 1>",
              projected_pixel: [7179.539118888593, 5097.973683717688],
              normalized_projected_pixel: [
                5.099104487847012, 3.6207199458222217,
              ],
              camera_coordinates: [
                0.29985173502041884, 0.5155910597177896, 0.09116348450868594,
              ],
              frame_index: 10470,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
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
          "At the current time <TIME 00:06:11.0 video 1>, based on the last known position of the spoon that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 346.6666666666667,
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
            "At the current time <TIME 00:06:11.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, in which direction is the spoon from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 371.0,
            camera_coordinates: [
              0.6374718514492395, 1.4236620756703484, -1.4239669608245813,
            ],
            world_coordinates: [
              -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.6374718514492395,
              z: -1.4239669608245813,
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
            "At the current time <TIME 00:06:11.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, and using the current position of the sponge (marked in red) in the current frame, where is the spoon relative to sponge from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "b991e034f5c8eed0",
            object_x_name: "spoon",
            object_x_reference_time_sec: 371.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
            ],
            object_x_camera_coordinates: [
              0.6374718514492395, 1.4236620756703484, -1.4239669608245813,
            ],
            object_y_assoc_id: "11673443d224486b",
            object_y_name: "sponge",
            object_y_reference_time_sec: 371.0,
            object_y_world_coordinates: [
              -0.6585236117014353, -3.9526848321535066, -0.5305351281690889,
            ],
            object_y_projected_pixel: [654.888662861842, 970.7681657327704],
            object_y_normalized_projected_pixel: [
              0.46511978896437645, 0.6894660267988426,
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
            "At the current time <TIME 00:06:11.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, and using the current position of the sponge (marked in red) in the current frame, how far is the spoon from the sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "b991e034f5c8eed0",
            object_x_name: "spoon",
            object_x_reference_time_sec: 371.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "11673443d224486b",
            object_y_name: "sponge",
            object_y_pixel: [654.888662861842, 970.7681657327704],
            object_y_normalized_projected_pixel: [
              0.46511978896437645, 0.6894660267988426,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.677905623404822, 1.179503377149548, -1.9864034349327642,
            ],
            distance_m: 2.407609365587315,
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
  oos_staged_h10p0_20: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "c062f2a00587fe9c",
    object_a_name: "disk",
    query_time_sec: 372.0,
    query_time_in_clip_sec: 372.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 372.0,
    clip_duration_sec: 372.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "c062f2a00587fe9c",
      object_name: "disk",
      query_time_sec: 372.0,
      oos_span_start_sec: 362.0,
      oos_span_end_sec: 443.0,
      oos_duration_sec: 81.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 372.0,
      clip_duration_sec: 372.0,
      anchor_assoc_id: "49ff84964587f5fe",
      anchor_name: "washing up liquid bottle",
      anchor_projected_pixel: [973.53275621699, 844.83546427589],
      anchor_world_coordinates: [
        -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
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
          "At the current time <TIME 00:06:12.0 video 1>, is the previously moved disk visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.6746043194324811, 0.6802294614250946, -0.4844041073742762,
          ],
          frame_index: 2605,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The disk was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:01.0 video 1>; Point=(0.3546, 0.5445)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 361.0,
          sampled_last_visible_time_in_clip_sec: 361.0,
          sampled_last_visible_time_token: "<TIME 00:06:01.0 video 1>",
          projected_pixel: [499.31957191742526, 766.5929995329602],
          normalized_projected_pixel: [0.35463037778226225, 0.5444552553501137],
          camera_coordinates: [
            -0.30178720878361975, 0.09118922626464132, 0.9262682657469776,
          ],
          frame_index: 2605,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 361.0,
              time_token: "<TIME 00:06:01.0 video 1>",
              projected_pixel: [499.31957191742526, 766.5929995329602],
              normalized_projected_pixel: [
                0.35463037778226225, 0.5444552553501137,
              ],
              camera_coordinates: [
                -0.30178720878361975, 0.09118922626464132, 0.9262682657469776,
              ],
              frame_index: 2605,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
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
          "The disk was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:26.8 video 1>; Point=(0.6521, 0.6811)",
          "<TIME 00:01:27.0 video 1>; Point=(0.6357, 0.7027)",
          "<TIME 00:01:28.0 video 1>; Point=(0.6546, 0.7941)",
          "<TIME 00:01:29.0 video 1>; Point=(0.5739, 0.7902)",
        ],
        answer_metadata: {
          last_placement_time_sec: 86.83333333333333,
          last_placement_time_in_clip_sec: 86.83333333333333,
          last_placement_time_token: "<TIME 00:01:26.8 video 1>",
          projected_pixel: [918.103942172105, 959.0279645612059],
          normalized_projected_pixel: [0.6520624589290519, 0.6811278157394928],
          camera_coordinates: [
            0.12344406815053288, 0.1421444913665615, 0.33889187630359974,
          ],
          frame_index: 2605,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 86.83333333333333,
              time_token: "<TIME 00:01:26.8 video 1>",
              projected_pixel: [918.103942172105, 959.0279645612059],
              normalized_projected_pixel: [
                0.6520624589290519, 0.6811278157394928,
              ],
              camera_coordinates: [
                0.12344406815053288, 0.1421444913665615, 0.33889187630359974,
              ],
              frame_index: 2605,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 87.0,
              time_token: "<TIME 00:01:27.0 video 1>",
              projected_pixel: [895.0243598909445, 989.4253434303612],
              normalized_projected_pixel: [
                0.6356707101498186, 0.7027168632317906,
              ],
              camera_coordinates: [
                0.11483448131214313, 0.16552951714883313, 0.35143700623803287,
              ],
              frame_index: 2610,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 88.0,
              time_token: "<TIME 00:01:28.0 video 1>",
              projected_pixel: [921.6542931713477, 1118.154976820606],
              normalized_projected_pixel: [
                0.6545840150364686, 0.7941441596737259,
              ],
              camera_coordinates: [
                0.14003192423333832, 0.25841120805147383, 0.36220479926229454,
              ],
              frame_index: 2640,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 89.0,
              time_token: "<TIME 00:01:29.0 video 1>",
              projected_pixel: [808.1176198211792, 1112.614654029818],
              normalized_projected_pixel: [
                0.5739471731684511, 0.7902092713279957,
              ],
              camera_coordinates: [
                0.06462129285908658, 0.2395108530857854, 0.34634497005983067,
              ],
              frame_index: 2670,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
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
          "At the current time <TIME 00:06:12.0 video 1>, based on the last known position of the disk that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 86.83333333333333,
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
            "At the current time <TIME 00:06:12.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, in which direction is the disk from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 372.0,
            camera_coordinates: [
              0.6746043194324811, 0.6802294614250946, -0.4844041073742762,
            ],
            world_coordinates: [
              -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.6746043194324811,
              z: -0.4844041073742762,
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
            "At the current time <TIME 00:06:12.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, and using the current position of the washing up liquid bottle (marked in red) in the current frame, where is the disk relative to washing up liquid bottle from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "c062f2a00587fe9c",
            object_x_name: "disk",
            object_x_reference_time_sec: 372.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
            ],
            object_x_camera_coordinates: [
              0.6746043194324811, 0.6802294614250946, -0.4844041073742762,
            ],
            object_y_assoc_id: "49ff84964587f5fe",
            object_y_name: "washing up liquid bottle",
            object_y_reference_time_sec: 372.0,
            object_y_world_coordinates: [
              -0.9541421241322374, -4.053809570387599, -0.4398500497493731,
            ],
            object_y_projected_pixel: [973.53275621699, 844.83546427589],
            object_y_normalized_projected_pixel: [
              0.6914295143586577, 0.6000251876959446,
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
            "At the current time <TIME 00:06:12.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, and using the current position of the washing up liquid bottle (marked in red) in the current frame, how far is the disk from the washing up liquid bottle: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "c062f2a00587fe9c",
            object_x_name: "disk",
            object_x_reference_time_sec: 372.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "49ff84964587f5fe",
            object_y_name: "washing up liquid bottle",
            object_y_pixel: [973.53275621699, 844.83546427589],
            object_y_normalized_projected_pixel: [
              0.6914295143586577, 0.6000251876959446,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.4194681317169515, 0.5516377456698025, -1.0469047511759904,
            ],
            distance_m: 1.2554948323305173,
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
  oos_staged_h10p0_21: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "541469e8f03660d2",
    object_a_name: "candy floss bowl",
    query_time_sec: 372.0,
    query_time_in_clip_sec: 372.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 372.0,
    clip_duration_sec: 372.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "541469e8f03660d2",
      object_name: "candy floss bowl",
      query_time_sec: 372.0,
      oos_span_start_sec: 362.0,
      oos_span_end_sec: 443.0,
      oos_duration_sec: 81.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 372.0,
      clip_duration_sec: 372.0,
      anchor_assoc_id: "11673443d224486b",
      anchor_name: "sponge",
      anchor_projected_pixel: [647.7560664732839, 976.4291293997601],
      anchor_world_coordinates: [
        -0.6585236117014353, -3.9526848321535066, -0.5305351281690889,
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
          "At the current time <TIME 00:06:12.0 video 1>, is the previously moved candy floss bowl visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.649017482648371, 0.7762057661196202, -0.5213240667812133,
          ],
          frame_index: 2219,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The candy floss bowl was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:01.0 video 1>; Point=(0.3692, 0.588)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 361.0,
          sampled_last_visible_time_in_clip_sec: 361.0,
          sampled_last_visible_time_token: "<TIME 00:06:01.0 video 1>",
          projected_pixel: [519.8462848903548, 827.9098450023102],
          normalized_projected_pixel: [0.36920900915508154, 0.5880041512800499],
          camera_coordinates: [
            -0.25692479745228003, 0.17460881256389038, 0.8787524015199351,
          ],
          frame_index: 2219,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 361.0,
              time_token: "<TIME 00:06:01.0 video 1>",
              projected_pixel: [519.8462848903548, 827.9098450023102],
              normalized_projected_pixel: [
                0.36920900915508154, 0.5880041512800499,
              ],
              camera_coordinates: [
                -0.25692479745228003, 0.17460881256389038, 0.8787524015199351,
              ],
              frame_index: 2219,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
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
          "The candy floss bowl was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:14.0 video 1>; Point=(0.7495, 0.7719)",
          "<TIME 00:01:14.0 video 1>; Point=(0.754, 0.7837)",
        ],
        answer_metadata: {
          last_placement_time_sec: 73.96666666666667,
          last_placement_time_in_clip_sec: 73.96666666666667,
          last_placement_time_token: "<TIME 00:01:14.0 video 1>",
          projected_pixel: [1055.235328560973, 1086.897487387391],
          normalized_projected_pixel: [0.7494569094893273, 0.771944238201272],
          camera_coordinates: [
            0.230700547610454, 0.24613908535740003, 0.3646212601274359,
          ],
          frame_index: 2219,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 73.96666666666667,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [1055.235328560973, 1086.897487387391],
              normalized_projected_pixel: [
                0.7494569094893273, 0.771944238201272,
              ],
              camera_coordinates: [
                0.230700547610454, 0.24613908535740003, 0.3646212601274359,
              ],
              frame_index: 2219,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 74.0,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [1061.6198032419454, 1103.4475837272262],
              normalized_projected_pixel: [
                0.7539913375297908, 0.7836985679880868,
              ],
              camera_coordinates: [
                0.23558204332830313, 0.25765922082818404, 0.3626969310081225,
              ],
              frame_index: 2220,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
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
          "At the current time <TIME 00:06:12.0 video 1>, based on the last known position of the candy floss bowl that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 73.96666666666667,
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
            "At the current time <TIME 00:06:12.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, in which direction is the candy floss bowl from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 372.0,
            camera_coordinates: [
              0.649017482648371, 0.7762057661196202, -0.5213240667812133,
            ],
            world_coordinates: [
              -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.649017482648371,
              z: -0.5213240667812133,
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
            "At the current time <TIME 00:06:12.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the sponge (marked in red) in the current frame, where is the candy floss bowl relative to sponge from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "541469e8f03660d2",
            object_x_name: "candy floss bowl",
            object_x_reference_time_sec: 372.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
            ],
            object_x_camera_coordinates: [
              0.649017482648371, 0.7762057661196202, -0.5213240667812133,
            ],
            object_y_assoc_id: "11673443d224486b",
            object_y_name: "sponge",
            object_y_reference_time_sec: 372.0,
            object_y_world_coordinates: [
              -0.6585236117014353, -3.9526848321535066, -0.5305351281690889,
            ],
            object_y_projected_pixel: [647.7560664732839, 976.4291293997601],
            object_y_normalized_projected_pixel: [
              0.4600540244838664, 0.6934865975850569,
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
            "At the current time <TIME 00:06:12.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the sponge (marked in red) in the current frame, how far is the candy floss bowl from the sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "541469e8f03660d2",
            object_x_name: "candy floss bowl",
            object_x_reference_time_sec: 372.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "11673443d224486b",
            object_y_name: "sponge",
            object_y_pixel: [647.7560664732839, 976.4291293997601],
            object_y_normalized_projected_pixel: [
              0.4600540244838664, 0.6934865975850569,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6960043125776436, 0.526944139845615, -1.0829552697809746,
            ],
            distance_m: 1.3910011667826512,
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
  oos_staged_h10p0_22: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "31e4d552813d3887",
    object_a_name: "inner flask lid",
    query_time_sec: 402.0,
    query_time_in_clip_sec: 402.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 402.0,
    clip_duration_sec: 402.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "31e4d552813d3887",
      object_name: "inner flask lid",
      query_time_sec: 402.0,
      oos_span_start_sec: 392.0,
      oos_span_end_sec: 424.0,
      oos_duration_sec: 32.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.006",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 402.0,
      clip_duration_sec: 402.0,
      anchor_assoc_id: "6dc0c7424c8a4db0",
      anchor_name: "sink hole cover",
      anchor_projected_pixel: [710.5868034451998, 1278.210842011702],
      anchor_world_coordinates: [
        -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
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
          "At the current time <TIME 00:06:42.0 video 1>, is the previously moved inner flask lid visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1364.158857181591, 1035.1460253250996],
          camera_coordinates: [
            0.45677539622210017, 0.22593574099599856, 0.29506830911817516,
          ],
          frame_index: 8812,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The inner flask lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:30.0 video 1>; Point=(0.821, 0.8026)",
          "<TIME 00:06:31.0 video 1>; Point=(0.8215, 0.8739)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 391.0,
          sampled_last_visible_time_in_clip_sec: 391.0,
          sampled_last_visible_time_token: "<TIME 00:06:31.0 video 1>",
          projected_pixel: [1156.605663422986, 1230.3853583071814],
          normalized_projected_pixel: [0.8214528859538253, 0.8738532374340777],
          camera_coordinates: [
            0.337399734747024, 0.38604795053801944, 0.35539059235142734,
          ],
          frame_index: 8812,
          status: "in_view",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 390.0,
              time_token: "<TIME 00:06:30.0 video 1>",
              projected_pixel: [1155.9985925032888, 1130.1045639447475],
              normalized_projected_pixel: [
                0.8210217276301767, 0.8026310823471218,
              ],
              camera_coordinates: [
                0.3633109275157199, 0.33660838167977203, 0.41925242029560206,
              ],
              frame_index: 8812,
              status: "in_view",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 391.0,
              time_token: "<TIME 00:06:31.0 video 1>",
              projected_pixel: [1156.605663422986, 1230.3853583071814],
              normalized_projected_pixel: [
                0.8214528859538253, 0.8738532374340777,
              ],
              camera_coordinates: [
                0.337399734747024, 0.38604795053801944, 0.35539059235142734,
              ],
              frame_index: 8812,
              status: "in_view",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
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
          "The inner flask lid was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:53.7 video 1>; Point=(0.8801, 0.8209)",
          "<TIME 00:04:54.0 video 1>; Point=(3.3818, 2.285)",
          "<TIME 00:04:56.0 video 1>; Point=(0.8524, 0.7516)",
        ],
        answer_metadata: {
          last_placement_time_sec: 293.73333333333335,
          last_placement_time_in_clip_sec: 293.73333333333335,
          last_placement_time_token: "<TIME 00:04:53.7 video 1>",
          projected_pixel: [1239.1991852123888, 1155.8028286389567],
          normalized_projected_pixel: [0.8801130576792534, 0.8208826907947135],
          camera_coordinates: [
            0.5314539861710439, 0.4420145981187057, 0.4683713203705304,
          ],
          frame_index: 8812,
          status: "last_past_track_end",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 293.73333333333335,
              time_token: "<TIME 00:04:53.7 video 1>",
              projected_pixel: [1239.1991852123888, 1155.8028286389567],
              normalized_projected_pixel: [
                0.8801130576792534, 0.8208826907947135,
              ],
              camera_coordinates: [
                0.5314539861710439, 0.4420145981187057, 0.4683713203705304,
              ],
              frame_index: 8812,
              status: "last_past_track_end",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 294.0,
              time_token: "<TIME 00:04:54.0 video 1>",
              projected_pixel: [4761.620099893322, 3217.238256184194],
              normalized_projected_pixel: [
                3.381832457310598, 2.284970352403547,
              ],
              camera_coordinates: [
                0.6402205169493023, 0.5299847996936191, 0.15381817911356432,
              ],
              frame_index: 8820,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 296.0,
              time_token: "<TIME 00:04:56.0 video 1>",
              projected_pixel: [1200.1401833656764, 1058.316796246296],
              normalized_projected_pixel: [
                0.8523722893222133, 0.7516454518794716,
              ],
              camera_coordinates: [
                0.5002862783919093, 0.3511962692076722, 0.5314755324273,
              ],
              frame_index: 8880,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
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
          "At the current time <TIME 00:06:42.0 video 1>, based on the last known position of the inner flask lid that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 293.73333333333335,
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
            "At the current time <TIME 00:06:42.0 video 1>, consider the inner flask lid that was moved earlier. Using its last known position to infer its current location, in which direction is the inner flask lid from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 402.0,
            camera_coordinates: [
              0.45677539622210017, 0.22593574099599856, 0.29506830911817516,
            ],
            world_coordinates: [
              -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.45677539622210017,
              z: 0.29506830911817516,
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
            "At the current time <TIME 00:06:42.0 video 1>, consider the inner flask lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the sink hole cover (marked in red) in the current frame, where is the inner flask lid relative to sink hole cover from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "31e4d552813d3887",
            object_x_name: "inner flask lid",
            object_x_reference_time_sec: 402.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
            ],
            object_x_camera_coordinates: [
              0.45677539622210017, 0.22593574099599856, 0.29506830911817516,
            ],
            object_y_assoc_id: "6dc0c7424c8a4db0",
            object_y_name: "sink hole cover",
            object_y_reference_time_sec: 402.0,
            object_y_world_coordinates: [
              -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
            ],
            object_y_projected_pixel: [710.5868034451998, 1278.210842011702],
            object_y_normalized_projected_pixel: [
              0.5046781274468749, 0.907820200292402,
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
            "At the current time <TIME 00:06:42.0 video 1>, consider the inner flask lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the sink hole cover (marked in red) in the current frame, how far is the inner flask lid from the sink hole cover: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "31e4d552813d3887",
            object_x_name: "inner flask lid",
            object_x_reference_time_sec: 402.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "6dc0c7424c8a4db0",
            object_y_name: "sink hole cover",
            object_y_pixel: [710.5868034451998, 1278.210842011702],
            object_y_normalized_projected_pixel: [
              0.5046781274468749, 0.907820200292402,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.4478011496921981, -0.1900060862961679, -0.10311563052874684,
            ],
            distance_m: 0.49725347234039724,
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
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "c65da629615df617",
    object_a_name: "strainer",
    query_time_sec: 411.0,
    query_time_in_clip_sec: 411.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 411.0,
    clip_duration_sec: 411.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "c65da629615df617",
      object_name: "strainer",
      query_time_sec: 411.0,
      oos_span_start_sec: 401.0,
      oos_span_end_sec: 424.0,
      oos_duration_sec: 23.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 411.0,
      clip_duration_sec: 411.0,
      anchor_assoc_id: "6ae7af9a565257b5",
      anchor_name: "glass",
      anchor_projected_pixel: [967.9507031075741, 1289.8777426891925],
      anchor_world_coordinates: [
        -0.9086170350008959, -3.7073094535823428, -0.6749700474584317,
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
          "At the current time <TIME 00:06:51.0 video 1>, is the previously moved strainer visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [173.97237894568673, 1250.8731865143618],
          camera_coordinates: [
            -0.3595312352403305, 0.37398453675392407, 0.2778253138191751,
          ],
          frame_index: 1570,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The strainer was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:37.0 video 1>; Point=(0.1365, 0.8331)",
          "<TIME 00:06:38.0 video 1>; Point=(0.1375, 0.8258)",
          "<TIME 00:06:39.0 video 1>; Point=(0.1266, 0.8102)",
          "<TIME 00:06:40.0 video 1>; Point=(0.1439, 0.8193)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 400.0,
          sampled_last_visible_time_in_clip_sec: 400.0,
          sampled_last_visible_time_token: "<TIME 00:06:40.0 video 1>",
          projected_pixel: [202.58643673809735, 1153.5915324453663],
          normalized_projected_pixel: [0.14388241245603506, 0.8193121679299477],
          camera_coordinates: [
            -0.3311522206036961, 0.29919774659533926, 0.3352842266989007,
          ],
          frame_index: 1570,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 397.0,
              time_token: "<TIME 00:06:37.0 video 1>",
              projected_pixel: [192.17796714067777, 1173.0557902840237],
              normalized_projected_pixel: [
                0.136490033480595, 0.8331362146903577,
              ],
              camera_coordinates: [
                -0.3426467486752327, 0.3164323603142598, 0.3294595384826109,
              ],
              frame_index: 1570,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 398.0,
              time_token: "<TIME 00:06:38.0 video 1>",
              projected_pixel: [193.6670278831611, 1162.7320737364514],
              normalized_projected_pixel: [
                0.1375476050306542, 0.8258040296423661,
              ],
              camera_coordinates: [
                -0.3414092166128422, 0.30921935751458696, 0.33349132748900123,
              ],
              frame_index: 1570,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 399.0,
              time_token: "<TIME 00:06:39.0 video 1>",
              projected_pixel: [178.25601924136595, 1140.726574011086],
              normalized_projected_pixel: [
                0.1266022863930156, 0.810175123587419,
              ],
              camera_coordinates: [
                -0.34006057424820924, 0.28446898255250486, 0.32365732707696626,
              ],
              frame_index: 1570,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 400.0,
              time_token: "<TIME 00:06:40.0 video 1>",
              projected_pixel: [202.58643673809735, 1153.5915324453663],
              normalized_projected_pixel: [
                0.14388241245603506, 0.8193121679299477,
              ],
              camera_coordinates: [
                -0.3311522206036961, 0.29919774659533926, 0.3352842266989007,
              ],
              frame_index: 1570,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
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
          "The strainer was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:52.3 video 1>; Point=(0.1858, 0.7034)",
          "<TIME 00:00:53.0 video 1>; Point=(0.0023, 0.7314)",
          "<TIME 00:00:54.0 video 1>; Point=(0.0828, 0.7386)",
          "<TIME 00:00:55.0 video 1>; Point=(0.0833, 0.7426)",
        ],
        answer_metadata: {
          last_placement_time_sec: 52.333333333333336,
          last_placement_time_in_clip_sec: 52.333333333333336,
          last_placement_time_token: "<TIME 00:00:52.3 video 1>",
          projected_pixel: [261.5375273345165, 990.3638697847048],
          normalized_projected_pixel: [0.18575108475462818, 0.7033834302448188],
          camera_coordinates: [
            -0.33635901268883406, 0.2189217844702318, 0.43326772210987086,
          ],
          frame_index: 1570,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 52.333333333333336,
              time_token: "<TIME 00:00:52.3 video 1>",
              projected_pixel: [261.5375273345165, 990.3638697847048],
              normalized_projected_pixel: [
                0.18575108475462818, 0.7033834302448188,
              ],
              camera_coordinates: [
                -0.33635901268883406, 0.2189217844702318, 0.43326772210987086,
              ],
              frame_index: 1570,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 53.0,
              time_token: "<TIME 00:00:53.0 video 1>",
              projected_pixel: [3.2515092412666036, 1029.8014440707207],
              normalized_projected_pixel: [
                0.0023093105406723036, 0.731393071072955,
              ],
              camera_coordinates: [
                -0.5268626129942214, 0.24579156829020277, 0.29615250709963004,
              ],
              frame_index: 1590,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 54.0,
              time_token: "<TIME 00:00:54.0 video 1>",
              projected_pixel: [116.57050474372261, 1039.9179847065705],
              normalized_projected_pixel: [
                0.08279155166457572, 0.7385781141381892,
              ],
              camera_coordinates: [
                -0.40100110412437906, 0.23034611146384742, 0.34448824215803064,
              ],
              frame_index: 1620,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 55.0,
              time_token: "<TIME 00:00:55.0 video 1>",
              projected_pixel: [117.26764846401409, 1045.5284805159408],
              normalized_projected_pixel: [
                0.08328668214773728, 0.7425628412755262,
              ],
              camera_coordinates: [
                -0.3753145052909934, 0.21947819394842916, 0.3218315278103905,
              ],
              frame_index: 1650,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
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
          "At the current time <TIME 00:06:51.0 video 1>, based on the last known position of the strainer that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area close to the microwave",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 52.333333333333336,
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
            "At the current time <TIME 00:06:51.0 video 1>, consider the strainer that was moved earlier. Using its last known position to infer its current location, in which direction is the strainer from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 411.0,
            camera_coordinates: [
              -0.3595312352403305, 0.37398453675392407, 0.2778253138191751,
            ],
            world_coordinates: [
              -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.3595312352403305,
              z: 0.2778253138191751,
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
            "At the current time <TIME 00:06:51.0 video 1>, consider the strainer that was moved earlier. Using its last known position to infer its current location, and using the current position of the glass (marked in red) in the current frame, where is the strainer relative to glass from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "c65da629615df617",
            object_x_name: "strainer",
            object_x_reference_time_sec: 411.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
            ],
            object_x_camera_coordinates: [
              -0.3595312352403305, 0.37398453675392407, 0.2778253138191751,
            ],
            object_y_assoc_id: "6ae7af9a565257b5",
            object_y_name: "glass",
            object_y_reference_time_sec: 411.0,
            object_y_world_coordinates: [
              -0.9086170350008959, -3.7073094535823428, -0.6749700474584317,
            ],
            object_y_projected_pixel: [967.9507031075741, 1289.8777426891925],
            object_y_normalized_projected_pixel: [
              0.6874649880025384, 0.916106351341756,
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
            "At the current time <TIME 00:06:51.0 video 1>, consider the strainer that was moved earlier. Using its last known position to infer its current location, and using the current position of the glass (marked in red) in the current frame, how far is the strainer from the glass: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "c65da629615df617",
            object_x_name: "strainer",
            object_x_reference_time_sec: 411.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "6ae7af9a565257b5",
            object_y_name: "glass",
            object_y_pixel: [967.9507031075741, 1289.8777426891925],
            object_y_normalized_projected_pixel: [
              0.6874649880025384, 0.916106351341756,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.5490882544854793, -0.036326535734144905, -0.08637736595801115,
            ],
            distance_m: 0.5570265503207175,
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
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "29a11aeea70f84db",
    object_a_name: "spatula",
    query_time_sec: 411.0,
    query_time_in_clip_sec: 411.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 411.0,
    clip_duration_sec: 411.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "29a11aeea70f84db",
      object_name: "spatula",
      query_time_sec: 411.0,
      oos_span_start_sec: 401.0,
      oos_span_end_sec: 424.0,
      oos_duration_sec: 23.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 411.0,
      clip_duration_sec: 411.0,
      anchor_assoc_id: "6dc0c7424c8a4db0",
      anchor_name: "sink hole cover",
      anchor_projected_pixel: [658.6193319638788, 1332.8534546796648],
      anchor_world_coordinates: [
        -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
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
          "At the current time <TIME 00:06:51.0 video 1>, is the previously moved spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [249.41139005306428, 1333.918719669852],
          camera_coordinates: [
            -0.3197721269033187, 0.4477581647347515, 0.27478572219755293,
          ],
          frame_index: 5953,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:40.0 video 1>; Point=(0.182, 0.8905)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 400.0,
          sampled_last_visible_time_in_clip_sec: 400.0,
          sampled_last_visible_time_token: "<TIME 00:06:40.0 video 1>",
          projected_pixel: [256.3240791183285, 1253.8110396719412],
          normalized_projected_pixel: [0.18204835164654012, 0.8904907952215492],
          camera_coordinates: [
            -0.30509089140957313, 0.3784511465724494, 0.3267824791645606,
          ],
          frame_index: 5953,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.4290617372942448, -3.583441450886477, -0.521681788004295,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 400.0,
              time_token: "<TIME 00:06:40.0 video 1>",
              projected_pixel: [256.3240791183285, 1253.8110396719412],
              normalized_projected_pixel: [
                0.18204835164654012, 0.8904907952215492,
              ],
              camera_coordinates: [
                -0.30509089140957313, 0.3784511465724494, 0.3267824791645606,
              ],
              frame_index: 5953,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
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
          "<TIME 00:03:18.4 video 1>; Point=(0.3503, 0.6785)",
          "<TIME 00:03:19.0 video 1>; Point=(0.1635, 0.768)",
          "<TIME 00:03:20.0 video 1>; Point=(0.1148, 0.8112)",
          "<TIME 00:03:21.0 video 1>; Point=(0.1304, 0.8185)",
        ],
        answer_metadata: {
          last_placement_time_sec: 198.43333333333334,
          last_placement_time_in_clip_sec: 198.43333333333334,
          last_placement_time_token: "<TIME 00:03:18.4 video 1>",
          projected_pixel: [493.28316088412095, 955.3814858614883],
          normalized_projected_pixel: [0.3503431540370177, 0.6785379871175343],
          camera_coordinates: [
            -0.15169152648599615, 0.18403569261635577, 0.44573109676091405,
          ],
          frame_index: 5953,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.4290617372942448, -3.583441450886477, -0.521681788004295,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 198.43333333333334,
              time_token: "<TIME 00:03:18.4 video 1>",
              projected_pixel: [493.28316088412095, 955.3814858614883],
              normalized_projected_pixel: [
                0.3503431540370177, 0.6785379871175343,
              ],
              camera_coordinates: [
                -0.15169152648599615, 0.18403569261635577, 0.44573109676091405,
              ],
              frame_index: 5953,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 199.0,
              time_token: "<TIME 00:03:19.0 video 1>",
              projected_pixel: [230.18927857066222, 1081.355275953971],
              normalized_projected_pixel: [
                0.16348670353029987, 0.7680080084900361,
              ],
              camera_coordinates: [
                -0.3223286800437104, 0.2585291173870492, 0.3694290516015166,
              ],
              frame_index: 5970,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 200.0,
              time_token: "<TIME 00:03:20.0 video 1>",
              projected_pixel: [161.67275168953597, 1142.2309216590363],
              normalized_projected_pixel: [
                0.1148243975067727, 0.8112435523146565,
              ],
              camera_coordinates: [
                -0.3842901820705502, 0.31263315063797936, 0.3467312736213106,
              ],
              frame_index: 6000,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 201.0,
              time_token: "<TIME 00:03:21.0 video 1>",
              projected_pixel: [183.56406159940786, 1152.4394510782572],
              normalized_projected_pixel: [
                0.13037220284048853, 0.8184939283226259,
              ],
              camera_coordinates: [
                -0.3709206758971506, 0.3219344626005094, 0.3547881534614987,
              ],
              frame_index: 6030,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
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
          "At the current time <TIME 00:06:51.0 video 1>, based on the last known position of the spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 198.43333333333334,
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
            "At the current time <TIME 00:06:51.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the spatula from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 411.0,
            camera_coordinates: [
              -0.3197721269033187, 0.4477581647347515, 0.27478572219755293,
            ],
            world_coordinates: [
              -0.4290617372942448, -3.583441450886477, -0.521681788004295,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.3197721269033187,
              z: 0.27478572219755293,
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
            "At the current time <TIME 00:06:51.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the sink hole cover (marked in red) in the current frame, where is the spatula relative to sink hole cover from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "29a11aeea70f84db",
            object_x_name: "spatula",
            object_x_reference_time_sec: 411.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4290617372942448, -3.583441450886477, -0.521681788004295,
            ],
            object_x_camera_coordinates: [
              -0.3197721269033187, 0.4477581647347515, 0.27478572219755293,
            ],
            object_y_assoc_id: "6dc0c7424c8a4db0",
            object_y_name: "sink hole cover",
            object_y_reference_time_sec: 411.0,
            object_y_world_coordinates: [
              -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
            ],
            object_y_projected_pixel: [658.6193319638788, 1332.8534546796648],
            object_y_normalized_projected_pixel: [
              0.46776941190616395, 0.9466288740622619,
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
            "At the current time <TIME 00:06:51.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the sink hole cover (marked in red) in the current frame, how far is the spatula from the sink hole cover: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "29a11aeea70f84db",
            object_x_name: "spatula",
            object_x_reference_time_sec: 411.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "6dc0c7424c8a4db0",
            object_y_name: "sink hole cover",
            object_y_pixel: [658.6193319638788, 1332.8534546796648],
            object_y_normalized_projected_pixel: [
              0.46776941190616395, 0.9466288740622619,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.2918728217160038, 0.005604280734293088, -0.09557807546812969,
            ],
            distance_m: 0.3071747394060951,
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
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "55051fbad89f51d1",
    object_a_name: "notebook",
    query_time_sec: 451.0,
    query_time_in_clip_sec: 451.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 451.0,
    clip_duration_sec: 451.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "55051fbad89f51d1",
      object_name: "notebook",
      query_time_sec: 451.0,
      oos_span_start_sec: 441.0,
      oos_span_end_sec: 537.0,
      oos_duration_sec: 96.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 451.0,
      clip_duration_sec: 451.0,
      anchor_assoc_id: "38d9a04dadd729cf",
      anchor_name: "grey draining tray",
      anchor_projected_pixel: [412.24366710591534, 1324.1408895974394],
      anchor_world_coordinates: [
        -0.8673341690452795, -3.997648656712658, -0.5612677763682712,
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
          "At the current time <TIME 00:07:31.0 video 1>, is the previously moved notebook visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.5174502761635568, 0.7368960014356397, -0.9920804064046456,
          ],
          frame_index: 10954,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The notebook was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:17.0 video 1>; Point=(0.179, 0.4371)",
          "<TIME 00:07:18.0 video 1>; Point=(0.3326, 0.3875)",
          "<TIME 00:07:19.0 video 1>; Point=(0.4018, 0.4406)",
          "<TIME 00:07:20.0 video 1>; Point=(0.3902, 0.5749)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 440.0,
          sampled_last_visible_time_in_clip_sec: 440.0,
          sampled_last_visible_time_token: "<TIME 00:07:20.0 video 1>",
          projected_pixel: [549.4207044632083, 809.4971809645594],
          normalized_projected_pixel: [0.3902135685108013, 0.5749269751168746],
          camera_coordinates: [
            -0.1710751010231224, 0.11815449548636162, 0.7019205038236133,
          ],
          frame_index: 10954,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.24681867275314995, -2.641835641424933, -0.6189394967633828,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 437.0,
              time_token: "<TIME 00:07:17.0 video 1>",
              projected_pixel: [251.99835160518774, 615.3664706809956],
              normalized_projected_pixel: [
                0.17897610199232084, 0.4370500501995707,
              ],
              camera_coordinates: [
                -0.3280321183704058, -0.06671884671533884, 0.42556052861244853,
              ],
              frame_index: 10954,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.24681867275314995, -2.641835641424933, -0.6189394967633828,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 438.0,
              time_token: "<TIME 00:07:18.0 video 1>",
              projected_pixel: [468.33973585737544, 545.5763885441637],
              normalized_projected_pixel: [
                0.33262765330779503, 0.3874832305001163,
              ],
              camera_coordinates: [
                -0.1781872443660517, -0.12433751393057207, 0.4702165641760512,
              ],
              frame_index: 10954,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.24681867275314995, -2.641835641424933, -0.6189394967633828,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 439.0,
              time_token: "<TIME 00:07:19.0 video 1>",
              projected_pixel: [565.7413368732006, 620.3909160870293],
              normalized_projected_pixel: [
                0.4018049267565345, 0.4406185483572651,
              ],
              camera_coordinates: [
                -0.11648691691597168, -0.07525100991675227, 0.5367167787466995,
              ],
              frame_index: 10954,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.24681867275314995, -2.641835641424933, -0.6189394967633828,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 440.0,
              time_token: "<TIME 00:07:20.0 video 1>",
              projected_pixel: [549.4207044632083, 809.4971809645594],
              normalized_projected_pixel: [
                0.3902135685108013, 0.5749269751168746,
              ],
              camera_coordinates: [
                -0.1710751010231224, 0.11815449548636162, 0.7019205038236133,
              ],
              frame_index: 10954,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.24681867275314995, -2.641835641424933, -0.6189394967633828,
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
          "The notebook was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:05.1 video 1>; Point=(0.3995, 0.841)",
          "<TIME 00:06:06.0 video 1>; Point=(-0.4945, 1.3596)",
        ],
        answer_metadata: {
          last_placement_time_sec: 365.1333333333333,
          last_placement_time_in_clip_sec: 365.1333333333333,
          last_placement_time_token: "<TIME 00:06:05.1 video 1>",
          projected_pixel: [562.5524023625425, 1184.175667071861],
          normalized_projected_pixel: [0.3995400584961239, 0.8410338544544467],
          camera_coordinates: [
            -0.11418409573912003, 0.4019810783501292, 0.479067281300261,
          ],
          frame_index: 10954,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.24681867275314995, -2.641835641424933, -0.6189394967633828,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 365.1333333333333,
              time_token: "<TIME 00:06:05.1 video 1>",
              projected_pixel: [562.5524023625425, 1184.175667071861],
              normalized_projected_pixel: [
                0.3995400584961239, 0.8410338544544467,
              ],
              camera_coordinates: [
                -0.11418409573912003, 0.4019810783501292, 0.479067281300261,
              ],
              frame_index: 10954,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.24681867275314995, -2.641835641424933, -0.6189394967633828,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 366.0,
              time_token: "<TIME 00:06:06.0 video 1>",
              projected_pixel: [-696.2072816181831, 1914.3069561585278],
              normalized_projected_pixel: [
                -0.49446539887655044, 1.359593008635318,
              ],
              camera_coordinates: [
                -0.6525959893015094, 0.5619766737273336, 0.2277555643136182,
              ],
              frame_index: 10980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.24681867275314995, -2.641835641424933, -0.6189394967633828,
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
          "At the current time <TIME 00:07:31.0 video 1>, based on the last known position of the notebook that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area below the boiler",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 365.1333333333333,
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
            "At the current time <TIME 00:07:31.0 video 1>, consider the notebook that was moved earlier. Using its last known position to infer its current location, in which direction is the notebook from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 451.0,
            camera_coordinates: [
              -0.5174502761635568, 0.7368960014356397, -0.9920804064046456,
            ],
            world_coordinates: [
              -0.24681867275314995, -2.641835641424933, -0.6189394967633828,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.5174502761635568,
              z: -0.9920804064046456,
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
            "At the current time <TIME 00:07:31.0 video 1>, consider the notebook that was moved earlier. Using its last known position to infer its current location, and using the current position of the grey draining tray (marked in red) in the current frame, where is the notebook relative to grey draining tray from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "55051fbad89f51d1",
            object_x_name: "notebook",
            object_x_reference_time_sec: 451.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.24681867275314995, -2.641835641424933, -0.6189394967633828,
            ],
            object_x_camera_coordinates: [
              -0.5174502761635568, 0.7368960014356397, -0.9920804064046456,
            ],
            object_y_assoc_id: "38d9a04dadd729cf",
            object_y_name: "grey draining tray",
            object_y_reference_time_sec: 451.0,
            object_y_world_coordinates: [
              -0.8673341690452795, -3.997648656712658, -0.5612677763682712,
            ],
            object_y_projected_pixel: [412.24366710591534, 1324.1408895974394],
            object_y_normalized_projected_pixel: [
              0.29278669538772395, 0.9404409727254541,
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
            "At the current time <TIME 00:07:31.0 video 1>, consider the notebook that was moved earlier. Using its last known position to infer its current location, and using the current position of the grey draining tray (marked in red) in the current frame, how far is the notebook from the grey draining tray: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "55051fbad89f51d1",
            object_x_name: "notebook",
            object_x_reference_time_sec: 451.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "38d9a04dadd729cf",
            object_y_name: "grey draining tray",
            object_y_pixel: [412.24366710591534, 1324.1408895974394],
            object_y_normalized_projected_pixel: [
              0.29278669538772395, 0.9404409727254541,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.2430581462107831, 0.14345170556698972, -1.465243592931254,
            ],
            distance_m: 1.4921777511059433,
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
  oos_staged_h10p0_26: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "41e677fe52669fd9",
    object_a_name: "pen",
    query_time_sec: 452.0,
    query_time_in_clip_sec: 452.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 452.0,
    clip_duration_sec: 452.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "41e677fe52669fd9",
      object_name: "pen",
      query_time_sec: 452.0,
      oos_span_start_sec: 442.0,
      oos_span_end_sec: 528.0,
      oos_duration_sec: 86.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 452.0,
      clip_duration_sec: 452.0,
      anchor_assoc_id: "7915067a751aeec1",
      anchor_name: "other sponge",
      anchor_projected_pixel: [456.97286126654893, 1284.2633694920992],
      anchor_world_coordinates: [
        -0.932241843104713, -4.006865343849761, -0.49016070321656613,
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
          "At the current time <TIME 00:07:32.0 video 1>, is the previously moved pen visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.45838921095583524, 0.5984518029016372, -0.9345530237867212,
          ],
          frame_index: 10956,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pen was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:18.0 video 1>; Point=(0.3415, 0.2897)",
          "<TIME 00:07:19.0 video 1>; Point=(0.432, 0.3685)",
          "<TIME 00:07:20.0 video 1>; Point=(0.4095, 0.5277)",
          "<TIME 00:07:21.0 video 1>; Point=(0.0897, 0.7834)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 441.0,
          sampled_last_visible_time_in_clip_sec: 441.0,
          sampled_last_visible_time_token: "<TIME 00:07:21.0 video 1>",
          projected_pixel: [126.36044208526994, 1103.0690742347806],
          normalized_projected_pixel: [0.08974463216283377, 0.7834297402235658],
          camera_coordinates: [
            -0.47840939976356456, 0.3324073777676028, 0.40153149986514935,
          ],
          frame_index: 10956,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3051815936836285, -2.7119307197234033, -0.470987784571404,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 438.0,
              time_token: "<TIME 00:07:18.0 video 1>",
              projected_pixel: [480.85136891753103, 407.8692721519529],
              normalized_projected_pixel: [
                0.34151375633347375, 0.2896798807897393,
              ],
              camera_coordinates: [
                -0.11381247436902919, -0.15599298312932142, 0.311903330555543,
              ],
              frame_index: 10956,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3051815936836285, -2.7119307197234033, -0.470987784571404,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 439.0,
              time_token: "<TIME 00:07:19.0 video 1>",
              projected_pixel: [608.2035510284093, 518.8067138324773],
              normalized_projected_pixel: [
                0.43196274930994977, 0.36847067743783896,
              ],
              camera_coordinates: [
                -0.05603704674297738, -0.11604912219593366, 0.37894926969535053,
              ],
              frame_index: 10956,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3051815936836285, -2.7119307197234033, -0.470987784571404,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 440.0,
              time_token: "<TIME 00:07:20.0 video 1>",
              projected_pixel: [576.6368013802148, 743.0351000821605],
              normalized_projected_pixel: [
                0.40954318279844804, 0.527723792671989,
              ],
              camera_coordinates: [
                -0.11201675068019501, 0.033626623938463746, 0.5620047796604647,
              ],
              frame_index: 10956,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3051815936836285, -2.7119307197234033, -0.470987784571404,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 441.0,
              time_token: "<TIME 00:07:21.0 video 1>",
              projected_pixel: [126.36044208526994, 1103.0690742347806],
              normalized_projected_pixel: [
                0.08974463216283377, 0.7834297402235658,
              ],
              camera_coordinates: [
                -0.47840939976356456, 0.3324073777676028, 0.40153149986514935,
              ],
              frame_index: 10956,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3051815936836285, -2.7119307197234033, -0.470987784571404,
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
          "<TIME 00:06:05.2 video 1>; Point=(0.3991, 0.8673)",
          "<TIME 00:06:06.0 video 1>; Point=(-0.7212, 1.4372)",
        ],
        answer_metadata: {
          last_placement_time_sec: 365.2,
          last_placement_time_in_clip_sec: 365.2,
          last_placement_time_token: "<TIME 00:06:05.2 video 1>",
          projected_pixel: [561.97397622328, 1221.0991161034262],
          normalized_projected_pixel: [0.3991292444767614, 0.8672578949598198],
          camera_coordinates: [
            -0.0830035216222087, 0.3135922630753316, 0.34093773231914815,
          ],
          frame_index: 10956,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3051815936836285, -2.7119307197234033, -0.470987784571404,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 365.2,
              time_token: "<TIME 00:06:05.2 video 1>",
              projected_pixel: [561.97397622328, 1221.0991161034262],
              normalized_projected_pixel: [
                0.3991292444767614, 0.8672578949598198,
              ],
              camera_coordinates: [
                -0.0830035216222087, 0.3135922630753316, 0.34093773231914815,
              ],
              frame_index: 10956,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3051815936836285, -2.7119307197234033, -0.470987784571404,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 366.0,
              time_token: "<TIME 00:06:06.0 video 1>",
              projected_pixel: [-1015.4100735423535, 2023.514671056935],
              normalized_projected_pixel: [
                -0.7211719272317851, 1.4371553061483913,
              ],
              camera_coordinates: [
                -0.5599109098937443, 0.42541348698934905, 0.1732649067209009,
              ],
              frame_index: 10980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3051815936836285, -2.7119307197234033, -0.470987784571404,
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
          "At the current time <TIME 00:07:32.0 video 1>, based on the last known position of the pen that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 365.2,
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
            "At the current time <TIME 00:07:32.0 video 1>, consider the pen that was moved earlier. Using its last known position to infer its current location, in which direction is the pen from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 452.0,
            camera_coordinates: [
              -0.45838921095583524, 0.5984518029016372, -0.9345530237867212,
            ],
            world_coordinates: [
              -0.3051815936836285, -2.7119307197234033, -0.470987784571404,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.45838921095583524,
              z: -0.9345530237867212,
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
            "At the current time <TIME 00:07:32.0 video 1>, consider the pen that was moved earlier. Using its last known position to infer its current location, and using the current position of the other sponge (marked in red) in the current frame, where is the pen relative to other sponge from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "41e677fe52669fd9",
            object_x_name: "pen",
            object_x_reference_time_sec: 452.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3051815936836285, -2.7119307197234033, -0.470987784571404,
            ],
            object_x_camera_coordinates: [
              -0.45838921095583524, 0.5984518029016372, -0.9345530237867212,
            ],
            object_y_assoc_id: "7915067a751aeec1",
            object_y_name: "other sponge",
            object_y_reference_time_sec: 452.0,
            object_y_world_coordinates: [
              -0.932241843104713, -4.006865343849761, -0.49016070321656613,
            ],
            object_y_projected_pixel: [456.97286126654893, 1284.2633694920992],
            object_y_normalized_projected_pixel: [
              0.32455458896771944, 0.9121188703779114,
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
            "At the current time <TIME 00:07:32.0 video 1>, consider the pen that was moved earlier. Using its last known position to infer its current location, and using the current position of the other sponge (marked in red) in the current frame, how far is the pen from the other sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "41e677fe52669fd9",
            object_x_name: "pen",
            object_x_reference_time_sec: 452.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "7915067a751aeec1",
            object_y_name: "other sponge",
            object_y_pixel: [456.97286126654893, 1284.2633694920992],
            object_y_normalized_projected_pixel: [
              0.32455458896771944, 0.9121188703779114,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.23653753953440143, 0.06652354652212222, -1.4177631847822143,
            ],
            distance_m: 1.4388981332862576,
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
  oos_staged_h10p0_27: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "1f58269e7af47ad8",
    object_a_name: "water filter jug",
    query_time_sec: 459.0,
    query_time_in_clip_sec: 459.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 459.0,
    clip_duration_sec: 459.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "1f58269e7af47ad8",
      object_name: "water filter jug",
      query_time_sec: 459.0,
      oos_span_start_sec: 449.0,
      oos_span_end_sec: 500.0,
      oos_duration_sec: 51.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 459.0,
      clip_duration_sec: 459.0,
      anchor_assoc_id: "b991e034f5c8eed0",
      anchor_name: "spoon",
      anchor_projected_pixel: [619.5306779816079, 834.7360323573607],
      anchor_world_coordinates: [
        -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
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
          "At the current time <TIME 00:07:39.0 video 1>, is the previously moved water filter jug visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.2274416399100998, 1.2441460369450867, -1.0239044765808132,
          ],
          frame_index: 11472,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The water filter jug was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:28.0 video 1>; Point=(0.1391, 0.6841)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 448.0,
          sampled_last_visible_time_in_clip_sec: 448.0,
          sampled_last_visible_time_token: "<TIME 00:07:28.0 video 1>",
          projected_pixel: [195.89392260539375, 963.1583904136936],
          normalized_projected_pixel: [0.13912920639587625, 0.6840613568279074],
          camera_coordinates: [
            -1.0005502330678948, 0.5121295399338205, 1.094080307867697,
          ],
          frame_index: 11472,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 448.0,
              time_token: "<TIME 00:07:28.0 video 1>",
              projected_pixel: [195.89392260539375, 963.1583904136936],
              normalized_projected_pixel: [
                0.13912920639587625, 0.6840613568279074,
              ],
              camera_coordinates: [
                -1.0005502330678948, 0.5121295399338205, 1.094080307867697,
              ],
              frame_index: 11472,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
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
          "The water filter jug was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:22.4 video 1>; Point=(0.126, 0.7293)",
          "<TIME 00:06:23.0 video 1>; Point=(-0.1216, 0.9024)",
          "<TIME 00:06:24.0 video 1>; Point=(1.2479, 2.4477)",
          "<TIME 00:06:25.0 video 1>; Point=(-1.0965, 1.9727)",
        ],
        answer_metadata: {
          last_placement_time_sec: 382.4,
          last_placement_time_in_clip_sec: 382.4,
          last_placement_time_token: "<TIME 00:06:22.4 video 1>",
          projected_pixel: [177.42981718595445, 1026.9166148954741],
          normalized_projected_pixel: [0.12601549516047902, 0.7293441867155356],
          camera_coordinates: [
            -0.37710322906255933, 0.2324197822175793, 0.3848055166743385,
          ],
          frame_index: 11472,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 382.4,
              time_token: "<TIME 00:06:22.4 video 1>",
              projected_pixel: [177.42981718595445, 1026.9166148954741],
              normalized_projected_pixel: [
                0.12601549516047902, 0.7293441867155356,
              ],
              camera_coordinates: [
                -0.37710322906255933, 0.2324197822175793, 0.3848055166743385,
              ],
              frame_index: 11472,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 383.0,
              time_token: "<TIME 00:06:23.0 video 1>",
              projected_pixel: [-171.21219373051395, 1270.5197478991065],
              normalized_projected_pixel: [
                -0.12159956941087638, 0.9023577754965245,
              ],
              camera_coordinates: [
                -0.5995024470380271, 0.3899185282839077, 0.25094646157849754,
              ],
              frame_index: 11490,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 384.0,
              time_token: "<TIME 00:06:24.0 video 1>",
              projected_pixel: [1757.0102543408364, 3446.428740607087],
              normalized_projected_pixel: [
                1.247876601094344, 2.4477476850902606,
              ],
              camera_coordinates: [
                -0.6133208534504428, 0.5167699420340339, 0.11128632411137973,
              ],
              frame_index: 11520,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 385.0,
              time_token: "<TIME 00:06:25.0 video 1>",
              projected_pixel: [-1543.8957898254673, 2777.5208971408774],
              normalized_projected_pixel: [
                -1.0965168961828604, 1.9726710917193733,
              ],
              camera_coordinates: [
                -0.5728477149467242, 0.49230285230726833, 0.1562797478402813,
              ],
              frame_index: 11550,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
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
          "At the current time <TIME 00:07:39.0 video 1>, based on the last known position of the water filter jug that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 382.4,
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
            "At the current time <TIME 00:07:39.0 video 1>, consider the water filter jug that was moved earlier. Using its last known position to infer its current location, in which direction is the water filter jug from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 459.0,
            camera_coordinates: [
              -0.2274416399100998, 1.2441460369450867, -1.0239044765808132,
            ],
            world_coordinates: [
              -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.2274416399100998,
              z: -1.0239044765808132,
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
            "At the current time <TIME 00:07:39.0 video 1>, consider the water filter jug that was moved earlier. Using its last known position to infer its current location, and using the current position of the spoon (marked in red) in the current frame, where is the water filter jug relative to spoon from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "1f58269e7af47ad8",
            object_x_name: "water filter jug",
            object_x_reference_time_sec: 459.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
            ],
            object_x_camera_coordinates: [
              -0.2274416399100998, 1.2441460369450867, -1.0239044765808132,
            ],
            object_y_assoc_id: "b991e034f5c8eed0",
            object_y_name: "spoon",
            object_y_reference_time_sec: 459.0,
            object_y_world_coordinates: [
              -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
            ],
            object_y_projected_pixel: [619.5306779816079, 834.7360323573607],
            object_y_normalized_projected_pixel: [
              0.44000758379375565, 0.5928522957083527,
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
            "At the current time <TIME 00:07:39.0 video 1>, consider the water filter jug that was moved earlier. Using its last known position to infer its current location, and using the current position of the spoon (marked in red) in the current frame, how far is the water filter jug from the spoon: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "1f58269e7af47ad8",
            object_x_name: "water filter jug",
            object_x_reference_time_sec: 459.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "b991e034f5c8eed0",
            object_y_name: "spoon",
            object_y_pixel: [619.5306779816079, 834.7360323573607],
            object_y_normalized_projected_pixel: [
              0.44000758379375565, 0.5928522957083527,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.12938067448942459, 1.0853376483730206, -1.7823800191149641,
            ],
            distance_m: 2.0908313424203966,
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
  oos_staged_h10p0_28: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "27476d1f9881898b",
    object_a_name: "lid",
    query_time_sec: 459.0,
    query_time_in_clip_sec: 459.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 459.0,
    clip_duration_sec: 459.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "27476d1f9881898b",
      object_name: "lid",
      query_time_sec: 459.0,
      oos_span_start_sec: 449.0,
      oos_span_end_sec: 528.0,
      oos_duration_sec: 79.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 459.0,
      clip_duration_sec: 459.0,
      anchor_assoc_id: "7ddfc30f2c53b9b2",
      anchor_name: "Track 10",
      anchor_projected_pixel: [622.9991780792035, 846.0509617182045],
      anchor_world_coordinates: [
        -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
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
          "At the current time <TIME 00:07:39.0 video 1>, is the previously moved lid visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.1788749432120138, 1.167409581461646, -0.7942985111727541,
          ],
          frame_index: 449,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:28.0 video 1>; Point=(0.1472, 0.7421)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 448.0,
          sampled_last_visible_time_in_clip_sec: 448.0,
          sampled_last_visible_time_token: "<TIME 00:07:28.0 video 1>",
          projected_pixel: [207.22988678364442, 1044.8332452907543],
          normalized_projected_pixel: [0.14718031731792927, 0.742069066257638],
          camera_coordinates: [
            -0.8395201034682074, 0.5794007938271344, 0.9194092377386633,
          ],
          frame_index: 449,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 448.0,
              time_token: "<TIME 00:07:28.0 video 1>",
              projected_pixel: [207.22988678364442, 1044.8332452907543],
              normalized_projected_pixel: [
                0.14718031731792927, 0.742069066257638,
              ],
              camera_coordinates: [
                -0.8395201034682074, 0.5794007938271344, 0.9194092377386633,
              ],
              frame_index: 449,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
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
          "The lid was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:15.0 video 1>; Point=(0.6711, 0.8247)",
          "<TIME 00:00:15.0 video 1>; Point=(0.6698, 0.8257)",
          "<TIME 00:00:16.0 video 1>; Point=(0.6992, 0.8299)",
          "<TIME 00:00:17.0 video 1>; Point=(0.6979, 0.8331)",
        ],
        answer_metadata: {
          last_placement_time_sec: 14.966666666666667,
          last_placement_time_in_clip_sec: 14.966666666666667,
          last_placement_time_token: "<TIME 00:00:15.0 video 1>",
          projected_pixel: [944.854804486594, 1161.1167377095737],
          normalized_projected_pixel: [0.6710616509137742, 0.8246567739414586],
          camera_coordinates: [
            0.17668439695092086, 0.3260985777801425, 0.4049816146685198,
          ],
          frame_index: 449,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 14.966666666666667,
              time_token: "<TIME 00:00:15.0 video 1>",
              projected_pixel: [944.854804486594, 1161.1167377095737],
              normalized_projected_pixel: [
                0.6710616509137742, 0.8246567739414586,
              ],
              camera_coordinates: [
                0.17668439695092086, 0.3260985777801425, 0.4049816146685198,
              ],
              frame_index: 449,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 15.0,
              time_token: "<TIME 00:00:15.0 video 1>",
              projected_pixel: [943.092284111972, 1162.6519415000591],
              normalized_projected_pixel: [
                0.6698098608749802, 0.8257471175426556,
              ],
              camera_coordinates: [
                0.17545343239250588, 0.3272582592917861, 0.40494992958253656,
              ],
              frame_index: 450,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 16.0,
              time_token: "<TIME 00:00:16.0 video 1>",
              projected_pixel: [984.4525768391294, 1168.5644421718152],
              normalized_projected_pixel: [
                0.6991850687777907, 0.8299463367697552,
              ],
              camera_coordinates: [
                0.21016039756865412, 0.33965626555870543, 0.4094710798536868,
              ],
              frame_index: 480,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 17.0,
              time_token: "<TIME 00:00:17.0 video 1>",
              projected_pixel: [982.6568381646202, 1173.0000126459393],
              normalized_projected_pixel: [
                0.6979096861964632, 0.8330965998905818,
              ],
              camera_coordinates: [
                0.207779339074583, 0.3411675287025224, 0.4067451435894305,
              ],
              frame_index: 510,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
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
          "At the current time <TIME 00:07:39.0 video 1>, based on the last known position of the lid that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area next to the window",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 14.966666666666667,
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
            "At the current time <TIME 00:07:39.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, in which direction is the lid from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 459.0,
            camera_coordinates: [
              -0.1788749432120138, 1.167409581461646, -0.7942985111727541,
            ],
            world_coordinates: [
              -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.1788749432120138,
              z: -0.7942985111727541,
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
            "At the current time <TIME 00:07:39.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, where is the lid relative to Track 10 from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "27476d1f9881898b",
            object_x_name: "lid",
            object_x_reference_time_sec: 459.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3607381830039005, -3.0682998554788585, -0.5708874569880346,
            ],
            object_x_camera_coordinates: [
              -0.1788749432120138, 1.167409581461646, -0.7942985111727541,
            ],
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_reference_time_sec: 459.0,
            object_y_world_coordinates: [
              -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
            ],
            object_y_projected_pixel: [622.9991780792035, 846.0509617182045],
            object_y_normalized_projected_pixel: [
              0.4424710071585252, 0.6008884671294066,
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
            "At the current time <TIME 00:07:39.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, how far is the lid from the Track 10: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "27476d1f9881898b",
            object_x_name: "lid",
            object_x_reference_time_sec: 459.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_pixel: [622.9991780792035, 846.0509617182045],
            object_y_normalized_projected_pixel: [
              0.4424710071585252, 0.6008884671294066,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.08471551479951822, 0.9938709557688801, -1.5559688118818507,
            ],
            distance_m: 1.8482410932337028,
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
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "181b2e6a7a7b60c9",
    object_a_name: "flask",
    query_time_sec: 460.0,
    query_time_in_clip_sec: 460.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 460.0,
    clip_duration_sec: 460.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "181b2e6a7a7b60c9",
      object_name: "flask",
      query_time_sec: 460.0,
      oos_span_start_sec: 450.0,
      oos_span_end_sec: 499.0,
      oos_duration_sec: 49.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 6,
      clip_start_time_sec: 0,
      clip_end_time_sec: 460.0,
      clip_duration_sec: 460.0,
      anchor_assoc_id: "7ddfc30f2c53b9b2",
      anchor_name: "Track 10",
      anchor_projected_pixel: [608.0461952836199, 922.1475975292949],
      anchor_world_coordinates: [
        -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
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
          "At the current time <TIME 00:07:40.0 video 1>, is the previously moved flask visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.45607053948809106, 1.4177974334578978, -1.3672515324209216,
          ],
          frame_index: 1921,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The flask was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:28.0 video 1>; Point=(0.1983, 0.6259)",
          "<TIME 00:07:29.0 video 1>; Point=(0.1314, 0.6824)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 449.0,
          sampled_last_visible_time_in_clip_sec: 449.0,
          sampled_last_visible_time_token: "<TIME 00:07:29.0 video 1>",
          projected_pixel: [184.95266403701726, 960.8230309846507],
          normalized_projected_pixel: [0.1313584261626543, 0.6824027208697804],
          camera_coordinates: [
            -0.7773142923754399, 0.3858772094235714, 0.8273526845714163,
          ],
          frame_index: 1921,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 448.0,
              time_token: "<TIME 00:07:28.0 video 1>",
              projected_pixel: [279.19472533932174, 881.235764952748],
              normalized_projected_pixel: [
                0.19829170833758647, 0.6258776739721221,
              ],
              camera_coordinates: [
                -1.0333387543857564, 0.43154003899902627, 1.4283166867378685,
              ],
              frame_index: 1921,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 449.0,
              time_token: "<TIME 00:07:29.0 video 1>",
              projected_pixel: [184.95266403701726, 960.8230309846507],
              normalized_projected_pixel: [
                0.1313584261626543, 0.6824027208697804,
              ],
              camera_coordinates: [
                -0.7773142923754399, 0.3858772094235714, 0.8273526845714163,
              ],
              frame_index: 1921,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
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
          "The flask was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:04.0 video 1>; Point=(0.4621, 0.709)",
          "<TIME 00:01:05.0 video 1>; Point=(0.3959, 0.7135)",
        ],
        answer_metadata: {
          last_placement_time_sec: 64.03333333333333,
          last_placement_time_in_clip_sec: 64.03333333333333,
          last_placement_time_token: "<TIME 00:01:04.0 video 1>",
          projected_pixel: [650.6339158215737, 998.3306896777027],
          normalized_projected_pixel: [0.46209795157782224, 0.709041683009732],
          camera_coordinates: [
            -0.0433075145881161, 0.2634111519531016, 0.5472220570786896,
          ],
          frame_index: 1921,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 64.03333333333333,
              time_token: "<TIME 00:01:04.0 video 1>",
              projected_pixel: [650.6339158215737, 998.3306896777027],
              normalized_projected_pixel: [
                0.46209795157782224, 0.709041683009732,
              ],
              camera_coordinates: [
                -0.0433075145881161, 0.2634111519531016, 0.5472220570786896,
              ],
              frame_index: 1921,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 65.0,
              time_token: "<TIME 00:01:05.0 video 1>",
              projected_pixel: [557.3697430042494, 1004.615756394742],
              normalized_projected_pixel: [
                0.39585919247460893, 0.7135055088030838,
              ],
              camera_coordinates: [
                -0.12605468885322946, 0.26628787424301437, 0.5377795494779385,
              ],
              frame_index: 1950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
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
          "At the current time <TIME 00:07:40.0 video 1>, based on the last known position of the flask that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 64.03333333333333,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the flask that was moved earlier. Using its last known position to infer its current location, in which direction is the flask from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 460.0,
            camera_coordinates: [
              -0.45607053948809106, 1.4177974334578978, -1.3672515324209216,
            ],
            world_coordinates: [
              -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.45607053948809106,
              z: -1.3672515324209216,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the flask that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, where is the flask relative to Track 10 from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "181b2e6a7a7b60c9",
            object_x_name: "flask",
            object_x_reference_time_sec: 460.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
            ],
            object_x_camera_coordinates: [
              -0.45607053948809106, 1.4177974334578978, -1.3672515324209216,
            ],
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_reference_time_sec: 460.0,
            object_y_world_coordinates: [
              -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
            ],
            object_y_projected_pixel: [608.0461952836199, 922.1475975292949],
            object_y_normalized_projected_pixel: [
              0.43185099096848006, 0.6549343732452378,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the flask that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, how far is the flask from the Track 10: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "181b2e6a7a7b60c9",
            object_x_name: "flask",
            object_x_reference_time_sec: 460.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_pixel: [608.0461952836199, 922.1475975292949],
            object_y_normalized_projected_pixel: [
              0.43185099096848006, 0.6549343732452378,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.3644671756460549, 1.1997720220279575, -1.9847561684456454,
            ],
            distance_m: 2.347668263436618,
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
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "c65da629615df617",
    object_a_name: "strainer",
    query_time_sec: 460.0,
    query_time_in_clip_sec: 460.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 460.0,
    clip_duration_sec: 460.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "c65da629615df617",
      object_name: "strainer",
      query_time_sec: 460.0,
      oos_span_start_sec: 450.0,
      oos_span_end_sec: 499.0,
      oos_duration_sec: 49.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 460.0,
      clip_duration_sec: 460.0,
      anchor_assoc_id: "b991e034f5c8eed0",
      anchor_name: "spoon",
      anchor_projected_pixel: [605.1076658126426, 908.8586811004612],
      anchor_world_coordinates: [
        -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
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
          "At the current time <TIME 00:07:40.0 video 1>, is the previously moved strainer visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.6152261641264785, 1.3613240445391765, -1.2618007925898131,
          ],
          frame_index: 1570,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The strainer was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:28.0 video 1>; Point=(0.2562, 0.626)",
          "<TIME 00:07:29.0 video 1>; Point=(0.2166, 0.6975)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 449.0,
          sampled_last_visible_time_in_clip_sec: 449.0,
          sampled_last_visible_time_token: "<TIME 00:07:29.0 video 1>",
          projected_pixel: [304.92401689512144, 982.0188114281805],
          normalized_projected_pixel: [0.21656535290846693, 0.6974565422075145],
          camera_coordinates: [
            -0.58014063043359, 0.4067920729185146, 0.8453729665436107,
          ],
          frame_index: 1570,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 448.0,
              time_token: "<TIME 00:07:28.0 video 1>",
              projected_pixel: [360.6754072612217, 881.4020061102556],
              normalized_projected_pixel: [
                0.2561615108389359, 0.6259957429760338,
              ],
              camera_coordinates: [
                -0.841046425462834, 0.43607159728410794, 1.479724276234323,
              ],
              frame_index: 1570,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 449.0,
              time_token: "<TIME 00:07:29.0 video 1>",
              projected_pixel: [304.92401689512144, 982.0188114281805],
              normalized_projected_pixel: [
                0.21656535290846693, 0.6974565422075145,
              ],
              camera_coordinates: [
                -0.58014063043359, 0.4067920729185146, 0.8453729665436107,
              ],
              frame_index: 1570,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
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
          "The strainer was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:52.3 video 1>; Point=(0.1858, 0.7034)",
          "<TIME 00:00:53.0 video 1>; Point=(0.0023, 0.7314)",
          "<TIME 00:00:54.0 video 1>; Point=(0.0828, 0.7386)",
          "<TIME 00:00:55.0 video 1>; Point=(0.0833, 0.7426)",
        ],
        answer_metadata: {
          last_placement_time_sec: 52.333333333333336,
          last_placement_time_in_clip_sec: 52.333333333333336,
          last_placement_time_token: "<TIME 00:00:52.3 video 1>",
          projected_pixel: [261.5375273345165, 990.3638697847048],
          normalized_projected_pixel: [0.18575108475462818, 0.7033834302448188],
          camera_coordinates: [
            -0.33635901268883406, 0.2189217844702318, 0.43326772210987086,
          ],
          frame_index: 1570,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 52.333333333333336,
              time_token: "<TIME 00:00:52.3 video 1>",
              projected_pixel: [261.5375273345165, 990.3638697847048],
              normalized_projected_pixel: [
                0.18575108475462818, 0.7033834302448188,
              ],
              camera_coordinates: [
                -0.33635901268883406, 0.2189217844702318, 0.43326772210987086,
              ],
              frame_index: 1570,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 53.0,
              time_token: "<TIME 00:00:53.0 video 1>",
              projected_pixel: [3.2515092412666036, 1029.8014440707207],
              normalized_projected_pixel: [
                0.0023093105406723036, 0.731393071072955,
              ],
              camera_coordinates: [
                -0.5268626129942214, 0.24579156829020277, 0.29615250709963004,
              ],
              frame_index: 1590,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 54.0,
              time_token: "<TIME 00:00:54.0 video 1>",
              projected_pixel: [116.57050474372261, 1039.9179847065705],
              normalized_projected_pixel: [
                0.08279155166457572, 0.7385781141381892,
              ],
              camera_coordinates: [
                -0.40100110412437906, 0.23034611146384742, 0.34448824215803064,
              ],
              frame_index: 1620,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 55.0,
              time_token: "<TIME 00:00:55.0 video 1>",
              projected_pixel: [117.26764846401409, 1045.5284805159408],
              normalized_projected_pixel: [
                0.08328668214773728, 0.7425628412755262,
              ],
              camera_coordinates: [
                -0.3753145052909934, 0.21947819394842916, 0.3218315278103905,
              ],
              frame_index: 1650,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
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
          "At the current time <TIME 00:07:40.0 video 1>, based on the last known position of the strainer that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area close to the microwave",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 52.333333333333336,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the strainer that was moved earlier. Using its last known position to infer its current location, in which direction is the strainer from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 460.0,
            camera_coordinates: [
              -0.6152261641264785, 1.3613240445391765, -1.2618007925898131,
            ],
            world_coordinates: [
              -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.6152261641264785,
              z: -1.2618007925898131,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the strainer that was moved earlier. Using its last known position to infer its current location, and using the current position of the spoon (marked in red) in the current frame, where is the strainer relative to spoon from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-right", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "c65da629615df617",
            object_x_name: "strainer",
            object_x_reference_time_sec: 460.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3983985307173921, -3.6353275342041416, -0.4633707588690485,
            ],
            object_x_camera_coordinates: [
              -0.6152261641264785, 1.3613240445391765, -1.2618007925898131,
            ],
            object_y_assoc_id: "b991e034f5c8eed0",
            object_y_name: "spoon",
            object_y_reference_time_sec: 460.0,
            object_y_world_coordinates: [
              -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
            ],
            object_y_projected_pixel: [605.1076658126426, 908.8586811004612],
            object_y_normalized_projected_pixel: [
              0.42976396719647914, 0.6454962223724867,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the strainer that was moved earlier. Using its last known position to infer its current location, and using the current position of the spoon (marked in red) in the current frame, how far is the strainer from the spoon: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "c65da629615df617",
            object_x_name: "strainer",
            object_x_reference_time_sec: 460.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "b991e034f5c8eed0",
            object_y_name: "spoon",
            object_y_pixel: [605.1076658126426, 908.8586811004612],
            object_y_normalized_projected_pixel: [
              0.42976396719647914, 0.6454962223724867,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.5213180552599694, 1.1581902004781885, -1.8753890874492711,
            ],
            distance_m: 2.2650080098197343,
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
  oos_staged_h10p0_31: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "31e4d552813d3887",
    object_a_name: "inner flask lid",
    query_time_sec: 460.0,
    query_time_in_clip_sec: 460.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 460.0,
    clip_duration_sec: 460.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "31e4d552813d3887",
      object_name: "inner flask lid",
      query_time_sec: 460.0,
      oos_span_start_sec: 450.0,
      oos_span_end_sec: 499.0,
      oos_duration_sec: 49.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.006",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 460.0,
      clip_duration_sec: 460.0,
      anchor_assoc_id: "b991e034f5c8eed0",
      anchor_name: "spoon",
      anchor_projected_pixel: [605.1076658126426, 908.8586811004612],
      anchor_world_coordinates: [
        -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
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
          "At the current time <TIME 00:07:40.0 video 1>, is the previously moved inner flask lid visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.2390311918703913, 1.1885038706077655, -0.7871225941010254,
          ],
          frame_index: 8812,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The inner flask lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:28.0 video 1>; Point=(0.4789, 0.6394)",
          "<TIME 00:07:29.0 video 1>; Point=(0.5913, 0.7648)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 449.0,
          sampled_last_visible_time_in_clip_sec: 449.0,
          sampled_last_visible_time_token: "<TIME 00:07:29.0 video 1>",
          projected_pixel: [832.6149826618415, 1076.7960017167898],
          normalized_projected_pixel: [0.5913458683677851, 0.7647698875829473],
          camera_coordinates: [
            0.2045493606944906, 0.5652173276249355, 0.9043812182669684,
          ],
          frame_index: 8812,
          status: "in_view",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 448.0,
              time_token: "<TIME 00:07:28.0 video 1>",
              projected_pixel: [674.2353061143071, 900.2288517705877],
              normalized_projected_pixel: [
                0.4788603026380022, 0.6393670822234288,
              ],
              camera_coordinates: [
                -0.06687788409232531, 0.5285845343256556, 1.6705732828050506,
              ],
              frame_index: 8812,
              status: "in_view",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 449.0,
              time_token: "<TIME 00:07:29.0 video 1>",
              projected_pixel: [832.6149826618415, 1076.7960017167898],
              normalized_projected_pixel: [
                0.5913458683677851, 0.7647698875829473,
              ],
              camera_coordinates: [
                0.2045493606944906, 0.5652173276249355, 0.9043812182669684,
              ],
              frame_index: 8812,
              status: "in_view",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
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
          "The inner flask lid was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:53.7 video 1>; Point=(0.8801, 0.8209)",
          "<TIME 00:04:54.0 video 1>; Point=(3.3818, 2.285)",
          "<TIME 00:04:56.0 video 1>; Point=(0.8524, 0.7516)",
        ],
        answer_metadata: {
          last_placement_time_sec: 293.73333333333335,
          last_placement_time_in_clip_sec: 293.73333333333335,
          last_placement_time_token: "<TIME 00:04:53.7 video 1>",
          projected_pixel: [1239.1991852123888, 1155.8028286389567],
          normalized_projected_pixel: [0.8801130576792534, 0.8208826907947135],
          camera_coordinates: [
            0.5314539861710439, 0.4420145981187057, 0.4683713203705304,
          ],
          frame_index: 8812,
          status: "last_past_track_end",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 293.73333333333335,
              time_token: "<TIME 00:04:53.7 video 1>",
              projected_pixel: [1239.1991852123888, 1155.8028286389567],
              normalized_projected_pixel: [
                0.8801130576792534, 0.8208826907947135,
              ],
              camera_coordinates: [
                0.5314539861710439, 0.4420145981187057, 0.4683713203705304,
              ],
              frame_index: 8812,
              status: "last_past_track_end",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 294.0,
              time_token: "<TIME 00:04:54.0 video 1>",
              projected_pixel: [4761.620099893322, 3217.238256184194],
              normalized_projected_pixel: [
                3.381832457310598, 2.284970352403547,
              ],
              camera_coordinates: [
                0.6402205169493023, 0.5299847996936191, 0.15381817911356432,
              ],
              frame_index: 8820,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 296.0,
              time_token: "<TIME 00:04:56.0 video 1>",
              projected_pixel: [1200.1401833656764, 1058.316796246296],
              normalized_projected_pixel: [
                0.8523722893222133, 0.7516454518794716,
              ],
              camera_coordinates: [
                0.5002862783919093, 0.3511962692076722, 0.5314755324273,
              ],
              frame_index: 8880,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
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
          "At the current time <TIME 00:07:40.0 video 1>, based on the last known position of the inner flask lid that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 293.73333333333335,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the inner flask lid that was moved earlier. Using its last known position to infer its current location, in which direction is the inner flask lid from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 460.0,
            camera_coordinates: [
              -1.2390311918703913, 1.1885038706077655, -0.7871225941010254,
            ],
            world_coordinates: [
              -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.2390311918703913,
              z: -0.7871225941010254,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the inner flask lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the spoon (marked in red) in the current frame, where is the inner flask lid relative to spoon from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "31e4d552813d3887",
            object_x_name: "inner flask lid",
            object_x_reference_time_sec: 460.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
            ],
            object_x_camera_coordinates: [
              -1.2390311918703913, 1.1885038706077655, -0.7871225941010254,
            ],
            object_y_assoc_id: "b991e034f5c8eed0",
            object_y_name: "spoon",
            object_y_reference_time_sec: 460.0,
            object_y_world_coordinates: [
              -1.6910442711134266, -1.777918430859059, -0.5601162869019218,
            ],
            object_y_projected_pixel: [605.1076658126426, 908.8586811004612],
            object_y_normalized_projected_pixel: [
              0.42976396719647914, 0.6454962223724867,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the inner flask lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the spoon (marked in red) in the current frame, how far is the inner flask lid from the spoon: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "31e4d552813d3887",
            object_x_name: "inner flask lid",
            object_x_reference_time_sec: 460.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "b991e034f5c8eed0",
            object_y_name: "spoon",
            object_y_pixel: [605.1076658126426, 908.8586811004612],
            object_y_normalized_projected_pixel: [
              0.42976396719647914, 0.6454962223724867,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.1451230830038823, 0.9853700265467775, -1.4007108889604836,
            ],
            distance_m: 2.060158236373503,
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
  oos_staged_h10p0_32: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "113f86144358265d",
    object_a_name: "left glove",
    query_time_sec: 460.0,
    query_time_in_clip_sec: 460.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 460.0,
    clip_duration_sec: 460.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "113f86144358265d",
      object_name: "left glove",
      query_time_sec: 460.0,
      oos_span_start_sec: 450.0,
      oos_span_end_sec: 499.0,
      oos_duration_sec: 49.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_sink.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 460.0,
      clip_duration_sec: 460.0,
      anchor_assoc_id: "c1e677150cd75a84",
      anchor_name: "bowl4",
      anchor_projected_pixel: [400.07340140964703, 1067.4351358466301],
      anchor_world_coordinates: [
        -1.6656748762292992, -2.002869303608146, -0.5598674103631023,
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
          "At the current time <TIME 00:07:40.0 video 1>, is the previously moved left glove visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.9122131418054171, 1.2633966424272198, -0.9457239794392536,
          ],
          frame_index: 13298,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The left glove was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:28.0 video 1>; Point=(0.3807, 0.6492)",
          "<TIME 00:07:29.0 video 1>; Point=(0.417, 0.7736)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 449.0,
          sampled_last_visible_time_in_clip_sec: 449.0,
          sampled_last_visible_time_token: "<TIME 00:07:29.0 video 1>",
          projected_pixel: [587.1588475596299, 1089.2514624295568],
          normalized_projected_pixel: [0.4170162269599644, 0.7736160954755374],
          camera_coordinates: [
            -0.15328710576857207, 0.5273482889236226, 0.8144236520073913,
          ],
          frame_index: 13298,
          status: "in_view",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.8308104116195041, -3.6447854964887814, -0.5664537594598403,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 448.0,
              time_token: "<TIME 00:07:28.0 video 1>",
              projected_pixel: [535.9996608927179, 914.0885083330461],
              normalized_projected_pixel: [
                0.38068157733857805, 0.6492105883047202,
              ],
              camera_coordinates: [
                -0.4060957752143707, 0.518649606207888, 1.5208873312388298,
              ],
              frame_index: 13298,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.8308104116195041, -3.6447854964887814, -0.5664537594598403,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 449.0,
              time_token: "<TIME 00:07:29.0 video 1>",
              projected_pixel: [587.1588475596299, 1089.2514624295568],
              normalized_projected_pixel: [
                0.4170162269599644, 0.7736160954755374,
              ],
              camera_coordinates: [
                -0.15328710576857207, 0.5273482889236226, 0.8144236520073913,
              ],
              frame_index: 13298,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.8308104116195041, -3.6447854964887814, -0.5664537594598403,
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
          "The left glove was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:23.3 video 1>; Point=(0.3247, 0.9492)",
        ],
        answer_metadata: {
          last_placement_time_sec: 443.26666666666665,
          last_placement_time_in_clip_sec: 443.26666666666665,
          last_placement_time_token: "<TIME 00:07:23.3 video 1>",
          projected_pixel: [457.1184279557084, 1336.4702659634972],
          normalized_projected_pixel: [0.3246579744003611, 0.9491976320763474],
          camera_coordinates: [
            -0.15810106911292165, 0.4136725313114842, 0.32636894551084694,
          ],
          frame_index: 13298,
          status: "last_past_track_end",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.8308104116195041, -3.6447854964887814, -0.5664537594598403,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 443.26666666666665,
              time_token: "<TIME 00:07:23.3 video 1>",
              projected_pixel: [457.1184279557084, 1336.4702659634972],
              normalized_projected_pixel: [
                0.3246579744003611, 0.9491976320763474,
              ],
              camera_coordinates: [
                -0.15810106911292165, 0.4136725313114842, 0.32636894551084694,
              ],
              frame_index: 13298,
              status: "last_past_track_end",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.8308104116195041, -3.6447854964887814, -0.5664537594598403,
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
          "At the current time <TIME 00:07:40.0 video 1>, based on the last known position of the left glove that was moved earlier, which fixture type is closest to it?",
        choices: ["sink", "drawer", "microwave", "counter", "hook"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 443.26666666666665,
          correct_fixture: "sink",
          display_correct_answer: "sink",
          raw_correct_fixture: "P01_sink.001",
          fixture_type_pool: [
            "bin",
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hook",
            "microwave",
            "sink",
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the left glove that was moved earlier. Using its last known position to infer its current location, in which direction is the left glove from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 460.0,
            camera_coordinates: [
              -0.9122131418054171, 1.2633966424272198, -0.9457239794392536,
            ],
            world_coordinates: [
              -0.8308104116195041, -3.6447854964887814, -0.5664537594598403,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.9122131418054171,
              z: -0.9457239794392536,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the left glove that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl4 (marked in red) in the current frame, where is the left glove relative to bowl4 from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "113f86144358265d",
            object_x_name: "left glove",
            object_x_reference_time_sec: 460.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.8308104116195041, -3.6447854964887814, -0.5664537594598403,
            ],
            object_x_camera_coordinates: [
              -0.9122131418054171, 1.2633966424272198, -0.9457239794392536,
            ],
            object_y_assoc_id: "c1e677150cd75a84",
            object_y_name: "bowl4",
            object_y_reference_time_sec: 460.0,
            object_y_world_coordinates: [
              -1.6656748762292992, -2.002869303608146, -0.5598674103631023,
            ],
            object_y_projected_pixel: [400.07340140964703, 1067.4351358466301],
            object_y_normalized_projected_pixel: [
              0.284143040773897, 0.758121545345618,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the left glove that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl4 (marked in red) in the current frame, how far is the left glove from the bowl4: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "113f86144358265d",
            object_x_name: "left glove",
            object_x_reference_time_sec: 460.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c1e677150cd75a84",
            object_y_name: "bowl4",
            object_y_pixel: [400.07340140964703, 1067.4351358466301],
            object_y_normalized_projected_pixel: [
              0.284143040773897, 0.758121545345618,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.6675466315878151, 0.9670845821649501, -1.4184709176789165,
            ],
            distance_m: 1.8419909985410519,
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
  oos_staged_h10p0_33: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "29a11aeea70f84db",
    object_a_name: "spatula",
    query_time_sec: 460.0,
    query_time_in_clip_sec: 460.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 460.0,
    clip_duration_sec: 460.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "29a11aeea70f84db",
      object_name: "spatula",
      query_time_sec: 460.0,
      oos_span_start_sec: 450.0,
      oos_span_end_sec: 499.0,
      oos_duration_sec: 49.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 460.0,
      clip_duration_sec: 460.0,
      anchor_assoc_id: "c1e677150cd75a84",
      anchor_name: "bowl4",
      anchor_projected_pixel: [400.07340140964703, 1067.4351358466301],
      anchor_world_coordinates: [
        -1.6656748762292992, -2.002869303608146, -0.5598674103631023,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_33",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:40.0 video 1>, is the previously moved spatula visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.5979832330635086, 1.3771694202144014, -1.1812763900989995,
          ],
          frame_index: 5953,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:28.0 video 1>; Point=(0.2598, 0.6472)",
          "<TIME 00:07:29.0 video 1>; Point=(0.2152, 0.7383)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 449.0,
          sampled_last_visible_time_in_clip_sec: 449.0,
          sampled_last_visible_time_token: "<TIME 00:07:29.0 video 1>",
          projected_pixel: [303.05398704878826, 1039.4891475365473],
          normalized_projected_pixel: [0.2152372067107871, 0.7382735422844796],
          camera_coordinates: [
            -0.5577318104446503, 0.47043719030270514, 0.7955762014048005,
          ],
          frame_index: 5953,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.4290617372942448, -3.583441450886477, -0.521681788004295,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 448.0,
              time_token: "<TIME 00:07:28.0 video 1>",
              projected_pixel: [365.7865500948118, 911.2513379025437],
              normalized_projected_pixel: [
                0.2597915838741561, 0.6471955524876021,
              ],
              camera_coordinates: [
                -0.8048694291554456, 0.4959714298486462, 1.4335094626422569,
              ],
              frame_index: 5953,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 449.0,
              time_token: "<TIME 00:07:29.0 video 1>",
              projected_pixel: [303.05398704878826, 1039.4891475365473],
              normalized_projected_pixel: [
                0.2152372067107871, 0.7382735422844796,
              ],
              camera_coordinates: [
                -0.5577318104446503, 0.47043719030270514, 0.7955762014048005,
              ],
              frame_index: 5953,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
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
          "<TIME 00:03:18.4 video 1>; Point=(0.3503, 0.6785)",
          "<TIME 00:03:19.0 video 1>; Point=(0.1635, 0.768)",
          "<TIME 00:03:20.0 video 1>; Point=(0.1148, 0.8112)",
          "<TIME 00:03:21.0 video 1>; Point=(0.1304, 0.8185)",
        ],
        answer_metadata: {
          last_placement_time_sec: 198.43333333333334,
          last_placement_time_in_clip_sec: 198.43333333333334,
          last_placement_time_token: "<TIME 00:03:18.4 video 1>",
          projected_pixel: [493.28316088412095, 955.3814858614883],
          normalized_projected_pixel: [0.3503431540370177, 0.6785379871175343],
          camera_coordinates: [
            -0.15169152648599615, 0.18403569261635577, 0.44573109676091405,
          ],
          frame_index: 5953,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.4290617372942448, -3.583441450886477, -0.521681788004295,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 198.43333333333334,
              time_token: "<TIME 00:03:18.4 video 1>",
              projected_pixel: [493.28316088412095, 955.3814858614883],
              normalized_projected_pixel: [
                0.3503431540370177, 0.6785379871175343,
              ],
              camera_coordinates: [
                -0.15169152648599615, 0.18403569261635577, 0.44573109676091405,
              ],
              frame_index: 5953,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 199.0,
              time_token: "<TIME 00:03:19.0 video 1>",
              projected_pixel: [230.18927857066222, 1081.355275953971],
              normalized_projected_pixel: [
                0.16348670353029987, 0.7680080084900361,
              ],
              camera_coordinates: [
                -0.3223286800437104, 0.2585291173870492, 0.3694290516015166,
              ],
              frame_index: 5970,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 200.0,
              time_token: "<TIME 00:03:20.0 video 1>",
              projected_pixel: [161.67275168953597, 1142.2309216590363],
              normalized_projected_pixel: [
                0.1148243975067727, 0.8112435523146565,
              ],
              camera_coordinates: [
                -0.3842901820705502, 0.31263315063797936, 0.3467312736213106,
              ],
              frame_index: 6000,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 201.0,
              time_token: "<TIME 00:03:21.0 video 1>",
              projected_pixel: [183.56406159940786, 1152.4394510782572],
              normalized_projected_pixel: [
                0.13037220284048853, 0.8184939283226259,
              ],
              camera_coordinates: [
                -0.3709206758971506, 0.3219344626005094, 0.3547881534614987,
              ],
              frame_index: 6030,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.4290617372942448, -3.583441450886477, -0.521681788004295,
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
          "At the current time <TIME 00:07:40.0 video 1>, based on the last known position of the spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 198.43333333333334,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the spatula from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 460.0,
            camera_coordinates: [
              -0.5979832330635086, 1.3771694202144014, -1.1812763900989995,
            ],
            world_coordinates: [
              -0.4290617372942448, -3.583441450886477, -0.521681788004295,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.5979832330635086,
              z: -1.1812763900989995,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl4 (marked in red) in the current frame, where is the spatula relative to bowl4 from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "29a11aeea70f84db",
            object_x_name: "spatula",
            object_x_reference_time_sec: 460.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4290617372942448, -3.583441450886477, -0.521681788004295,
            ],
            object_x_camera_coordinates: [
              -0.5979832330635086, 1.3771694202144014, -1.1812763900989995,
            ],
            object_y_assoc_id: "c1e677150cd75a84",
            object_y_name: "bowl4",
            object_y_reference_time_sec: 460.0,
            object_y_world_coordinates: [
              -1.6656748762292992, -2.002869303608146, -0.5598674103631023,
            ],
            object_y_projected_pixel: [400.07340140964703, 1067.4351358466301],
            object_y_normalized_projected_pixel: [
              0.284143040773897, 0.758121545345618,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl4 (marked in red) in the current frame, how far is the spatula from the bowl4: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "29a11aeea70f84db",
            object_x_name: "spatula",
            object_x_reference_time_sec: 460.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c1e677150cd75a84",
            object_y_name: "bowl4",
            object_y_pixel: [400.07340140964703, 1067.4351358466301],
            object_y_normalized_projected_pixel: [
              0.284143040773897, 0.758121545345618,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.35331672284590665, 1.0808573599521316, -1.6540233283386625,
            ],
            distance_m: 2.007206643545644,
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
  oos_staged_h10p0_34: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "6dc0c7424c8a4db0",
    object_a_name: "sink hole cover",
    query_time_sec: 460.0,
    query_time_in_clip_sec: 460.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 460.0,
    clip_duration_sec: 460.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "6dc0c7424c8a4db0",
      object_name: "sink hole cover",
      query_time_sec: 460.0,
      oos_span_start_sec: 450.0,
      oos_span_end_sec: 500.0,
      oos_duration_sec: 50.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_sink.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 460.0,
      clip_duration_sec: 460.0,
      anchor_assoc_id: "7ddfc30f2c53b9b2",
      anchor_name: "Track 10",
      anchor_projected_pixel: [608.0461952836199, 922.1475975292949],
      anchor_world_coordinates: [
        -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_34",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:40.0 video 1>, is the previously moved sink hole cover visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.8434604629689697, 1.4032497754791347, -0.9984730389360374,
          ],
          frame_index: 8727,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The sink hole cover was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:29.0 video 1>; Point=(0.358, 0.7887)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 449.0,
          sampled_last_visible_time_in_clip_sec: 449.0,
          sampled_last_visible_time_token: "<TIME 00:07:29.0 video 1>",
          projected_pixel: [504.0361594462719, 1110.5318749282828],
          normalized_projected_pixel: [0.35798022687945447, 0.788730024807019],
          camera_coordinates: [
            -0.28982764184194076, 0.6029055893195171, 0.8665395739036903,
          ],
          frame_index: 8727,
          status: "in_view",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 449.0,
              time_token: "<TIME 00:07:29.0 video 1>",
              projected_pixel: [504.0361594462719, 1110.5318749282828],
              normalized_projected_pixel: [
                0.35798022687945447, 0.788730024807019,
              ],
              camera_coordinates: [
                -0.28982764184194076, 0.6029055893195171, 0.8665395739036903,
              ],
              frame_index: 8727,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
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
          "The sink hole cover was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:50.9 video 1>; Point=(0.8713, 0.8185)",
          "<TIME 00:04:51.0 video 1>; Point=(0.8873, 0.8168)",
          "<TIME 00:04:52.0 video 1>; Point=(1.0478, 0.9516)",
          "<TIME 00:04:53.0 video 1>; Point=(0.8483, 0.8188)",
        ],
        answer_metadata: {
          last_placement_time_sec: 290.9,
          last_placement_time_in_clip_sec: 290.9,
          last_placement_time_token: "<TIME 00:04:50.9 video 1>",
          projected_pixel: [1226.72583473553, 1152.4178432703145],
          normalized_projected_pixel: [0.8712541439883026, 0.8184785818681211],
          camera_coordinates: [
            0.41855458856574, 0.35363384649803875, 0.38571798777890104,
          ],
          frame_index: 8727,
          status: "last_past_track_end",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 290.9,
              time_token: "<TIME 00:04:50.9 video 1>",
              projected_pixel: [1226.72583473553, 1152.4178432703145],
              normalized_projected_pixel: [
                0.8712541439883026, 0.8184785818681211,
              ],
              camera_coordinates: [
                0.41855458856574, 0.35363384649803875, 0.38571798777890104,
              ],
              frame_index: 8727,
              status: "last_past_track_end",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 291.0,
              time_token: "<TIME 00:04:51.0 video 1>",
              projected_pixel: [1249.3118819813858, 1149.987272747899],
              normalized_projected_pixel: [
                0.8872953707254161, 0.8167523243948146,
              ],
              camera_coordinates: [
                0.44123836146675277, 0.35559893906116735, 0.3785647849139395,
              ],
              frame_index: 8730,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 292.0,
              time_token: "<TIME 00:04:52.0 video 1>",
              projected_pixel: [1475.2697037573596, 1339.8309926715287],
              normalized_projected_pixel: [
                1.047776778236761, 0.9515845118405744,
              ],
              camera_coordinates: [
                0.6480224715888068, 0.5297989162542384, 0.30129654598580236,
              ],
              frame_index: 8760,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 293.0,
              time_token: "<TIME 00:04:53.0 video 1>",
              projected_pixel: [1194.4211377691581, 1152.8646790454336],
              normalized_projected_pixel: [
                0.8483104671655952, 0.8187959368220409,
              ],
              camera_coordinates: [
                0.4898347421999434, 0.44120425018222564, 0.498030923048671,
              ],
              frame_index: 8790,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
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
          "At the current time <TIME 00:07:40.0 video 1>, based on the last known position of the sink hole cover that was moved earlier, which fixture type is closest to it?",
        choices: ["drawer", "sink", "counter", "microwave", "dishwasher"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 290.9,
          correct_fixture: "sink",
          display_correct_answer: "sink",
          raw_correct_fixture: "P01_sink.001",
          fixture_type_pool: [
            "bin",
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hook",
            "microwave",
            "sink",
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the sink hole cover that was moved earlier. Using its last known position to infer its current location, in which direction is the sink hole cover from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 460.0,
            camera_coordinates: [
              -0.8434604629689697, 1.4032497754791347, -0.9984730389360374,
            ],
            world_coordinates: [
              -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.8434604629689697,
              z: -0.9984730389360374,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the sink hole cover that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, where is the sink hole cover relative to Track 10 from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "6dc0c7424c8a4db0",
            object_x_name: "sink hole cover",
            object_x_reference_time_sec: 460.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
            ],
            object_x_camera_coordinates: [
              -0.8434604629689697, 1.4032497754791347, -0.9984730389360374,
            ],
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_reference_time_sec: 460.0,
            object_y_world_coordinates: [
              -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
            ],
            object_y_projected_pixel: [608.0461952836199, 922.1475975292949],
            object_y_normalized_projected_pixel: [
              0.43185099096848006, 0.6549343732452378,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the sink hole cover that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, how far is the sink hole cover from the Track 10: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "6dc0c7424c8a4db0",
            object_x_name: "sink hole cover",
            object_x_reference_time_sec: 460.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_pixel: [608.0461952836199, 922.1475975292949],
            object_y_normalized_projected_pixel: [
              0.43185099096848006, 0.6549343732452378,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.7518570991269335, 1.1852243640491944, -1.6159776749607613,
            ],
            distance_m: 2.1404274658616615,
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
  oos_staged_h10p0_35: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "cd27a95c0265b8ea",
    object_a_name: "right glove",
    query_time_sec: 460.0,
    query_time_in_clip_sec: 460.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 460.0,
    clip_duration_sec: 460.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "cd27a95c0265b8ea",
      object_name: "right glove",
      query_time_sec: 460.0,
      oos_span_start_sec: 450.0,
      oos_span_end_sec: 499.0,
      oos_duration_sec: 49.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_sink.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 460.0,
      clip_duration_sec: 460.0,
      anchor_assoc_id: "7ddfc30f2c53b9b2",
      anchor_name: "Track 10",
      anchor_projected_pixel: [608.0461952836199, 922.1475975292949],
      anchor_world_coordinates: [
        -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_35",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:40.0 video 1>, is the previously moved right glove visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.9571413303171963, 1.2420670243242171, -0.8031827477647651,
          ],
          frame_index: 13301,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The right glove was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:28.0 video 1>; Point=(0.4158, 0.6713)",
          "<TIME 00:07:29.0 video 1>; Point=(0.4759, 0.8295)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 449.0,
          sampled_last_visible_time_in_clip_sec: 449.0,
          sampled_last_visible_time_token: "<TIME 00:07:29.0 video 1>",
          projected_pixel: [670.1139598064278, 1167.882510985926],
          normalized_projected_pixel: [0.4759332100897925, 0.8294620106434134],
          camera_coordinates: [
            -0.036799626765426474, 0.6007171878626134, 0.7524626210070773,
          ],
          frame_index: 13301,
          status: "in_view",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.9566573321153542, -3.5910790264746373, -0.6302476865922964,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 448.0,
              time_token: "<TIME 00:07:28.0 video 1>",
              projected_pixel: [585.5109860069914, 945.2292792375794],
              normalized_projected_pixel: [
                0.41584587074360185, 0.6713276130948717,
              ],
              camera_coordinates: [
                -0.2746556691624842, 0.5798050426969237, 1.4787564806949063,
              ],
              frame_index: 13301,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.9566573321153542, -3.5910790264746373, -0.6302476865922964,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 449.0,
              time_token: "<TIME 00:07:29.0 video 1>",
              projected_pixel: [670.1139598064278, 1167.882510985926],
              normalized_projected_pixel: [
                0.4759332100897925, 0.8294620106434134,
              ],
              camera_coordinates: [
                -0.036799626765426474, 0.6007171878626134, 0.7524626210070773,
              ],
              frame_index: 13301,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.9566573321153542, -3.5910790264746373, -0.6302476865922964,
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
          "The right glove was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:23.4 video 1>; Point=(0.345, 0.9638)",
        ],
        answer_metadata: {
          last_placement_time_sec: 443.3666666666667,
          last_placement_time_in_clip_sec: 443.3666666666667,
          last_placement_time_token: "<TIME 00:07:23.4 video 1>",
          projected_pixel: [485.7956297569497, 1357.0030164771797],
          normalized_projected_pixel: [0.3450253052251063, 0.9637805514752696],
          camera_coordinates: [
            -0.15512004881490382, 0.4757137799116391, 0.3582472252175575,
          ],
          frame_index: 13301,
          status: "last_past_track_end",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.9566573321153542, -3.5910790264746373, -0.6302476865922964,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 443.3666666666667,
              time_token: "<TIME 00:07:23.4 video 1>",
              projected_pixel: [485.7956297569497, 1357.0030164771797],
              normalized_projected_pixel: [
                0.3450253052251063, 0.9637805514752696,
              ],
              camera_coordinates: [
                -0.15512004881490382, 0.4757137799116391, 0.3582472252175575,
              ],
              frame_index: 13301,
              status: "last_past_track_end",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.9566573321153542, -3.5910790264746373, -0.6302476865922964,
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
          "At the current time <TIME 00:07:40.0 video 1>, based on the last known position of the right glove that was moved earlier, which fixture type is closest to it?",
        choices: ["dishwasher", "sink", "drawer", "counter", "hook"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 443.3666666666667,
          correct_fixture: "sink",
          display_correct_answer: "sink",
          raw_correct_fixture: "P01_sink.001",
          fixture_type_pool: [
            "bin",
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hook",
            "microwave",
            "sink",
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the right glove that was moved earlier. Using its last known position to infer its current location, in which direction is the right glove from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 460.0,
            camera_coordinates: [
              -0.9571413303171963, 1.2420670243242171, -0.8031827477647651,
            ],
            world_coordinates: [
              -0.9566573321153542, -3.5910790264746373, -0.6302476865922964,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.9571413303171963,
              z: -0.8031827477647651,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the right glove that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, where is the right glove relative to Track 10 from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "cd27a95c0265b8ea",
            object_x_name: "right glove",
            object_x_reference_time_sec: 460.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.9566573321153542, -3.5910790264746373, -0.6302476865922964,
            ],
            object_x_camera_coordinates: [
              -0.9571413303171963, 1.2420670243242171, -0.8031827477647651,
            ],
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_reference_time_sec: 460.0,
            object_y_world_coordinates: [
              -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
            ],
            object_y_projected_pixel: [608.0461952836199, 922.1475975292949],
            object_y_normalized_projected_pixel: [
              0.43185099096848006, 0.6549343732452378,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the right glove that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, how far is the right glove from the Track 10: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "cd27a95c0265b8ea",
            object_x_name: "right glove",
            object_x_reference_time_sec: 460.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_pixel: [608.0461952836199, 922.1475975292949],
            object_y_normalized_projected_pixel: [
              0.43185099096848006, 0.6549343732452378,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.8655379664751601, 1.0240416128942769, -1.420687383789489,
            ],
            distance_m: 1.9535019423608695,
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
  oos_staged_h10p0_36: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "541469e8f03660d2",
    object_a_name: "candy floss bowl",
    query_time_sec: 481.0,
    query_time_in_clip_sec: 481.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 481.0,
    clip_duration_sec: 481.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "541469e8f03660d2",
      object_name: "candy floss bowl",
      query_time_sec: 481.0,
      oos_span_start_sec: 471.0,
      oos_span_end_sec: 494.0,
      oos_duration_sec: 23.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 481.0,
      clip_duration_sec: 481.0,
      anchor_assoc_id: "7ddfc30f2c53b9b2",
      anchor_name: "Track 10",
      anchor_projected_pixel: [998.176356725562, 1098.268878952942],
      anchor_world_coordinates: [
        -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_36",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:01.0 video 1>, is the previously moved candy floss bowl visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-1978.4718796236273, 2417.548314296138],
          camera_coordinates: [
            -0.839588138242028, 0.5048243992639398, 0.19642256800609736,
          ],
          frame_index: 2219,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The candy floss bowl was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:50.0 video 1>; Point=(0.0172, 0.6376)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 470.0,
          sampled_last_visible_time_in_clip_sec: 470.0,
          sampled_last_visible_time_token: "<TIME 00:07:50.0 video 1>",
          projected_pixel: [24.218175188422038, 897.7279051864182],
          normalized_projected_pixel: [
            0.017200408514504287, 0.6375908417517174,
          ],
          camera_coordinates: [
            -0.8811570170594507, 0.2509706479096115, 0.6217275512156153,
          ],
          frame_index: 2219,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 470.0,
              time_token: "<TIME 00:07:50.0 video 1>",
              projected_pixel: [24.218175188422038, 897.7279051864182],
              normalized_projected_pixel: [
                0.017200408514504287, 0.6375908417517174,
              ],
              camera_coordinates: [
                -0.8811570170594507, 0.2509706479096115, 0.6217275512156153,
              ],
              frame_index: 2219,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
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
          "The candy floss bowl was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:14.0 video 1>; Point=(0.7495, 0.7719)",
          "<TIME 00:01:14.0 video 1>; Point=(0.754, 0.7837)",
        ],
        answer_metadata: {
          last_placement_time_sec: 73.96666666666667,
          last_placement_time_in_clip_sec: 73.96666666666667,
          last_placement_time_token: "<TIME 00:01:14.0 video 1>",
          projected_pixel: [1055.235328560973, 1086.897487387391],
          normalized_projected_pixel: [0.7494569094893273, 0.771944238201272],
          camera_coordinates: [
            0.230700547610454, 0.24613908535740003, 0.3646212601274359,
          ],
          frame_index: 2219,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 73.96666666666667,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [1055.235328560973, 1086.897487387391],
              normalized_projected_pixel: [
                0.7494569094893273, 0.771944238201272,
              ],
              camera_coordinates: [
                0.230700547610454, 0.24613908535740003, 0.3646212601274359,
              ],
              frame_index: 2219,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 74.0,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [1061.6198032419454, 1103.4475837272262],
              normalized_projected_pixel: [
                0.7539913375297908, 0.7836985679880868,
              ],
              camera_coordinates: [
                0.23558204332830313, 0.25765922082818404, 0.3626969310081225,
              ],
              frame_index: 2220,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
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
          "At the current time <TIME 00:08:01.0 video 1>, based on the last known position of the candy floss bowl that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 73.96666666666667,
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
            "At the current time <TIME 00:08:01.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, in which direction is the candy floss bowl from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 481.0,
            camera_coordinates: [
              -0.839588138242028, 0.5048243992639398, 0.19642256800609736,
            ],
            world_coordinates: [
              -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.839588138242028,
              z: 0.19642256800609736,
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
            "At the current time <TIME 00:08:01.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, where is the candy floss bowl relative to Track 10 from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "541469e8f03660d2",
            object_x_name: "candy floss bowl",
            object_x_reference_time_sec: 481.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
            ],
            object_x_camera_coordinates: [
              -0.839588138242028, 0.5048243992639398, 0.19642256800609736,
            ],
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_reference_time_sec: 481.0,
            object_y_world_coordinates: [
              -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
            ],
            object_y_projected_pixel: [998.176356725562, 1098.268878952942],
            object_y_normalized_projected_pixel: [
              0.7089320715380412, 0.7800205106199872,
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
            "At the current time <TIME 00:08:01.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the Track 10 (marked in red) in the current frame, how far is the candy floss bowl from the Track 10: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "541469e8f03660d2",
            object_x_name: "candy floss bowl",
            object_x_reference_time_sec: 481.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "7ddfc30f2c53b9b2",
            object_y_name: "Track 10",
            object_y_pixel: [998.176356725562, 1098.268878952942],
            object_y_normalized_projected_pixel: [
              0.7089320715380412, 0.7800205106199872,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.0494394766922774, 0.23035463026906172, -0.20359988990882516,
            ],
            distance_m: 1.0935444143231874,
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
  oos_staged_h10p0_37: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "7ddfc30f2c53b9b2",
    object_a_name: "Track 10",
    query_time_sec: 510.0,
    query_time_in_clip_sec: 510.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 510.0,
    clip_duration_sec: 510.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "7ddfc30f2c53b9b2",
      object_name: "Track 10",
      query_time_sec: 510.0,
      oos_span_start_sec: 500.0,
      oos_span_end_sec: 523.0,
      oos_duration_sec: 23.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 510.0,
      clip_duration_sec: 510.0,
      anchor_assoc_id: "7915067a751aeec1",
      anchor_name: "other sponge",
      anchor_projected_pixel: [819.7401267240411, 824.9009789624548],
      anchor_world_coordinates: [
        -0.932241843104713, -4.006865343849761, -0.49016070321656613,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_37",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:30.0 video 1>, is the previously moved Track 10 visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.7969865371852415, 1.4145978573745182, -1.2253773962896157,
          ],
          frame_index: 9834,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The Track 10 was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:16.0 video 1>; Point=(0.7025, 0.7565)",
          "<TIME 00:08:17.0 video 1>; Point=(0.672, 0.8363)",
          "<TIME 00:08:18.0 video 1>; Point=(0.6704, 0.8648)",
          "<TIME 00:08:19.0 video 1>; Point=(0.6256, 0.8987)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 499.0,
          sampled_last_visible_time_in_clip_sec: 499.0,
          sampled_last_visible_time_token: "<TIME 00:08:19.0 video 1>",
          projected_pixel: [880.8003170778703, 1265.3323257780048],
          normalized_projected_pixel: [0.6255684070155328, 0.8986735268309693],
          camera_coordinates: [
            0.11843856861082303, 0.36284232464717636, 0.351859521972792,
          ],
          frame_index: 9834,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 496.0,
              time_token: "<TIME 00:08:16.0 video 1>",
              projected_pixel: [989.1736129451424, 1065.1488873055184],
              normalized_projected_pixel: [
                0.7025380773758113, 0.7564977892794875,
              ],
              camera_coordinates: [
                0.23377564199894674, 0.28862251625978863, 0.4656532778055651,
              ],
              frame_index: 9834,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 497.0,
              time_token: "<TIME 00:08:17.0 video 1>",
              projected_pixel: [946.1352995454588, 1177.4627227688432],
              normalized_projected_pixel: [
                0.6719710934271724, 0.8362661383301443,
              ],
              camera_coordinates: [
                0.16728551782400408, 0.31817550922768234, 0.378554138313963,
              ],
              frame_index: 9834,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 498.0,
              time_token: "<TIME 00:08:18.0 video 1>",
              projected_pixel: [943.9763137899913, 1217.648957726904],
              normalized_projected_pixel: [
                0.6704377228622097, 0.8648074983855852,
              ],
              camera_coordinates: [
                0.1662714381074052, 0.34618871758963543, 0.3721010843933845,
              ],
              frame_index: 9834,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 499.0,
              time_token: "<TIME 00:08:19.0 video 1>",
              projected_pixel: [880.8003170778703, 1265.3323257780048],
              normalized_projected_pixel: [
                0.6255684070155328, 0.8986735268309693,
              ],
              camera_coordinates: [
                0.11843856861082303, 0.36284232464717636, 0.351859521972792,
              ],
              frame_index: 9834,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
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
          "The Track 10 was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:27.8 video 1>; Point=(0.6281, 0.7704)",
          "<TIME 00:05:28.0 video 1>; Point=(0.6215, 0.8035)",
          "<TIME 00:05:29.0 video 1>; Point=(0.7294, 0.9115)",
          "<TIME 00:05:30.0 video 1>; Point=(0.7809, 0.9151)",
        ],
        answer_metadata: {
          last_placement_time_sec: 327.8,
          last_placement_time_in_clip_sec: 327.8,
          last_placement_time_token: "<TIME 00:05:27.8 video 1>",
          projected_pixel: [884.3472794442306, 1084.777104212178],
          normalized_projected_pixel: [0.6280875564234593, 0.7704382842416038],
          camera_coordinates: [
            0.16131550676079032, 0.328542658268917, 0.5100198451320364,
          ],
          frame_index: 9834,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 327.8,
              time_token: "<TIME 00:05:27.8 video 1>",
              projected_pixel: [884.3472794442306, 1084.777104212178],
              normalized_projected_pixel: [
                0.6280875564234593, 0.7704382842416038,
              ],
              camera_coordinates: [
                0.16131550676079032, 0.328542658268917, 0.5100198451320364,
              ],
              frame_index: 9834,
              status: "last_past_track_end",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 328.0,
              time_token: "<TIME 00:05:28.0 video 1>",
              projected_pixel: [875.052193258192, 1131.3737980092471],
              normalized_projected_pixel: [
                0.6214859327117841, 0.8035325269952039,
              ],
              camera_coordinates: [
                0.13888543008497045, 0.33431340568683027, 0.4554516757821576,
              ],
              frame_index: 9840,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 329.0,
              time_token: "<TIME 00:05:29.0 video 1>",
              projected_pixel: [1027.0267855077673, 1283.3403669953605],
              normalized_projected_pixel: [
                0.7294224328890393, 0.9114633288319322,
              ],
              camera_coordinates: [
                0.232310183679594, 0.4079104119050184, 0.3575839846262856,
              ],
              frame_index: 9870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 330.0,
              time_token: "<TIME 00:05:30.0 video 1>",
              projected_pixel: [1099.5118967602161, 1288.4463597859863],
              normalized_projected_pixel: [
                0.780903335767199, 0.9150897441661834,
              ],
              camera_coordinates: [
                0.3178210543322535, 0.46135800547109473, 0.3742867734769728,
              ],
              frame_index: 9900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
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
          "At the current time <TIME 00:08:30.0 video 1>, based on the last known position of the Track 10 that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 327.8,
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
            "At the current time <TIME 00:08:30.0 video 1>, consider the Track 10 that was moved earlier. Using its last known position to infer its current location, in which direction is the Track 10 from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 510.0,
            camera_coordinates: [
              0.7969865371852415, 1.4145978573745182, -1.2253773962896157,
            ],
            world_coordinates: [
              -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.7969865371852415,
              z: -1.2253773962896157,
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
            "At the current time <TIME 00:08:30.0 video 1>, consider the Track 10 that was moved earlier. Using its last known position to infer its current location, and using the current position of the other sponge (marked in red) in the current frame, where is the Track 10 relative to other sponge from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "7ddfc30f2c53b9b2",
            object_x_name: "Track 10",
            object_x_reference_time_sec: 510.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.6854717220784075, -1.7794776705061226, -0.5745704844040304,
            ],
            object_x_camera_coordinates: [
              0.7969865371852415, 1.4145978573745182, -1.2253773962896157,
            ],
            object_y_assoc_id: "7915067a751aeec1",
            object_y_name: "other sponge",
            object_y_reference_time_sec: 510.0,
            object_y_world_coordinates: [
              -0.932241843104713, -4.006865343849761, -0.49016070321656613,
            ],
            object_y_projected_pixel: [819.7401267240411, 824.9009789624548],
            object_y_normalized_projected_pixel: [
              0.5822017945483247, 0.5858671725585617,
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
            "At the current time <TIME 00:08:30.0 video 1>, consider the Track 10 that was moved earlier. Using its last known position to infer its current location, and using the current position of the other sponge (marked in red) in the current frame, how far is the Track 10 from the other sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "7ddfc30f2c53b9b2",
            object_x_name: "Track 10",
            object_x_reference_time_sec: 510.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "7915067a751aeec1",
            object_y_name: "other sponge",
            object_y_pixel: [819.7401267240411, 824.9009789624548],
            object_y_normalized_projected_pixel: [
              0.5822017945483247, 0.5858671725585617,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6748476405431387, 1.2948747611816118, -1.8448891901711186,
            ],
            distance_m: 2.352814508009933,
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
  oos_staged_h10p0_38: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "b991e034f5c8eed0",
    object_a_name: "spoon",
    query_time_sec: 510.0,
    query_time_in_clip_sec: 510.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 510.0,
    clip_duration_sec: 510.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "b991e034f5c8eed0",
      object_name: "spoon",
      query_time_sec: 510.0,
      oos_span_start_sec: 500.0,
      oos_span_end_sec: 523.0,
      oos_duration_sec: 23.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 4,
      clip_start_time_sec: 0,
      clip_end_time_sec: 510.0,
      clip_duration_sec: 510.0,
      anchor_assoc_id: "113f86144358265d",
      anchor_name: "left glove",
      anchor_projected_pixel: [714.8964241205891, 1281.5750949784676],
      anchor_world_coordinates: [
        -0.8308104116195041, -3.6447854964887814, -0.5664537594598403,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_38",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:30.0 video 1>, is the previously moved spoon visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.7683933917007987, 1.2993908504340128, -1.0437109321650417,
          ],
          frame_index: 14536,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The spoon was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:16.0 video 1>; Point=(0.5157, 0.7184)",
          "<TIME 00:08:17.0 video 1>; Point=(0.4721, 0.7369)",
          "<TIME 00:08:18.0 video 1>; Point=(0.4589, 0.8012)",
          "<TIME 00:08:19.0 video 1>; Point=(0.4097, 0.8373)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 499.0,
          sampled_last_visible_time_in_clip_sec: 499.0,
          sampled_last_visible_time_token: "<TIME 00:08:19.0 video 1>",
          projected_pixel: [576.9154596138775, 1178.8952184312832],
          normalized_projected_pixel: [0.40974109347576526, 0.8372835358176727],
          camera_coordinates: [
            -0.08816784326834826, 0.3432261844567208, 0.41527816449099864,
          ],
          frame_index: 14536,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.6488815460441013, -1.9933489944583778, -0.5781957310297666,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 496.0,
              time_token: "<TIME 00:08:16.0 video 1>",
              projected_pixel: [726.1007942701236, 1011.5424793300504],
              normalized_projected_pixel: [
                0.5156965868395764, 0.7184250563423653,
              ],
              camera_coordinates: [
                0.022692489620336653, 0.2522011299866924, 0.5004428165818087,
              ],
              frame_index: 14536,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6488815460441013, -1.9933489944583778, -0.5781957310297666,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 497.0,
              time_token: "<TIME 00:08:17.0 video 1>",
              projected_pixel: [664.7276525149426, 1037.6208627247383],
              normalized_projected_pixel: [
                0.47210770775208993, 0.7369466354579107,
              ],
              camera_coordinates: [
                -0.025244038157288706, 0.24697326890873095, 0.4489497180872559,
              ],
              frame_index: 14536,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6488815460441013, -1.9933489944583778, -0.5781957310297666,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 498.0,
              time_token: "<TIME 00:08:18.0 video 1>",
              projected_pixel: [646.0999423287949, 1128.0657137338003],
              normalized_projected_pixel: [
                0.4588777999494282, 0.8011830353223014,
              ],
              camera_coordinates: [
                -0.03880092221300302, 0.31264159892273213, 0.43465381787622137,
              ],
              frame_index: 14536,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6488815460441013, -1.9933489944583778, -0.5781957310297666,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 499.0,
              time_token: "<TIME 00:08:19.0 video 1>",
              projected_pixel: [576.9154596138775, 1178.8952184312832],
              normalized_projected_pixel: [
                0.40974109347576526, 0.8372835358176727,
              ],
              camera_coordinates: [
                -0.08816784326834826, 0.3432261844567208, 0.41527816449099864,
              ],
              frame_index: 14536,
              status: "in_view",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6488815460441013, -1.9933489944583778, -0.5781957310297666,
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
          "The spoon was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:04.5 video 1>; Point=(0.5044, 0.8398)",
          "<TIME 00:08:05.0 video 1>; Point=(0.5013, 0.8373)",
          "<TIME 00:08:06.0 video 1>; Point=(0.5044, 0.8584)",
          "<TIME 00:08:07.0 video 1>; Point=(0.5167, 0.8503)",
        ],
        answer_metadata: {
          last_placement_time_sec: 484.53333333333336,
          last_placement_time_in_clip_sec: 484.53333333333336,
          last_placement_time_token: "<TIME 00:08:04.5 video 1>",
          projected_pixel: [710.1963791939891, 1182.4962165656498],
          normalized_projected_pixel: [0.5044008374957308, 0.8398410629017399],
          camera_coordinates: [
            0.00817216004284882, 0.32938542792077186, 0.39770246108306706,
          ],
          frame_index: 14536,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.6488815460441013, -1.9933489944583778, -0.5781957310297666,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 484.53333333333336,
              time_token: "<TIME 00:08:04.5 video 1>",
              projected_pixel: [710.1963791939891, 1182.4962165656498],
              normalized_projected_pixel: [
                0.5044008374957308, 0.8398410629017399,
              ],
              camera_coordinates: [
                0.00817216004284882, 0.32938542792077186, 0.39770246108306706,
              ],
              frame_index: 14536,
              status: "last_past_track_end",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6488815460441013, -1.9933489944583778, -0.5781957310297666,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 485.0,
              time_token: "<TIME 00:08:05.0 video 1>",
              projected_pixel: [705.8940981768643, 1178.969864712587],
              normalized_projected_pixel: [
                0.501345240182432, 0.8373365516424623,
              ],
              camera_coordinates: [
                0.005229440846521882, 0.3292104668882692, 0.4010580056385262,
              ],
              frame_index: 14550,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6488815460441013, -1.9933489944583778, -0.5781957310297666,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 486.0,
              time_token: "<TIME 00:08:06.0 video 1>",
              projected_pixel: [710.1851474229353, 1208.6715987634047],
              normalized_projected_pixel: [
                0.5043928603856075, 0.8584315332126454,
              ],
              camera_coordinates: [
                0.00790936814224974, 0.33552809664431943, 0.37959229842086506,
              ],
              frame_index: 14580,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6488815460441013, -1.9933489944583778, -0.5781957310297666,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 487.0,
              time_token: "<TIME 00:08:07.0 video 1>",
              projected_pixel: [727.5682151939546, 1197.2672452707282],
              normalized_projected_pixel: [
                0.5167387892002518, 0.850331850334324,
              ],
              camera_coordinates: [
                0.019406786397848208, 0.3262673071946692, 0.37955085790238563,
              ],
              frame_index: 14610,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.009",
              world_coordinates: [
                -1.6488815460441013, -1.9933489944583778, -0.5781957310297666,
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
          "At the current time <TIME 00:08:30.0 video 1>, based on the last known position of the spoon that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 484.53333333333336,
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
            "At the current time <TIME 00:08:30.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, in which direction is the spoon from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 510.0,
            camera_coordinates: [
              0.7683933917007987, 1.2993908504340128, -1.0437109321650417,
            ],
            world_coordinates: [
              -1.6488815460441013, -1.9933489944583778, -0.5781957310297666,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.7683933917007987,
              z: -1.0437109321650417,
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
            "At the current time <TIME 00:08:30.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, and using the current position of the left glove (marked in red) in the current frame, where is the spoon relative to left glove from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "b991e034f5c8eed0",
            object_x_name: "spoon",
            object_x_reference_time_sec: 510.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.6488815460441013, -1.9933489944583778, -0.5781957310297666,
            ],
            object_x_camera_coordinates: [
              0.7683933917007987, 1.2993908504340128, -1.0437109321650417,
            ],
            object_y_assoc_id: "113f86144358265d",
            object_y_name: "left glove",
            object_y_reference_time_sec: 510.0,
            object_y_world_coordinates: [
              -0.8308104116195041, -3.6447854964887814, -0.5664537594598403,
            ],
            object_y_projected_pixel: [714.8964241205891, 1281.5750949784676],
            object_y_normalized_projected_pixel: [
              0.5077389375856457, 0.9102095845017526,
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
            "At the current time <TIME 00:08:30.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, and using the current position of the left glove (marked in red) in the current frame, how far is the spoon from the left glove: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "b991e034f5c8eed0",
            object_x_name: "spoon",
            object_x_reference_time_sec: 510.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "113f86144358265d",
            object_y_name: "left glove",
            object_y_pixel: [714.8964241205891, 1281.5750949784676],
            object_y_normalized_projected_pixel: [
              0.5077389375856457, 0.9102095845017526,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7572168543770847, 0.9132571208444156, -1.410391733451296,
            ],
            distance_m: 1.8429923426627444,
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
  oos_staged_h10p0_39: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "c062f2a00587fe9c",
    object_a_name: "disk",
    query_time_sec: 511.0,
    query_time_in_clip_sec: 511.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 511.0,
    clip_duration_sec: 511.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "c062f2a00587fe9c",
      object_name: "disk",
      query_time_sec: 511.0,
      oos_span_start_sec: 501.0,
      oos_span_end_sec: 523.0,
      oos_duration_sec: 22.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 511.0,
      clip_duration_sec: 511.0,
      anchor_assoc_id: "6dc0c7424c8a4db0",
      anchor_name: "sink hole cover",
      anchor_projected_pixel: [631.4951857331513, 1291.3584673493351],
      anchor_world_coordinates: [
        -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_39",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:31.0 video 1>, is the previously moved disk visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.5571616045699199, 0.6582259408949535, -0.4956450932943617,
          ],
          frame_index: 2605,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The disk was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:17.0 video 1>; Point=(0.0405, 0.378)",
          "<TIME 00:08:20.0 video 1>; Point=(0.4959, 0.5247)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 500.0,
          sampled_last_visible_time_in_clip_sec: 500.0,
          sampled_last_visible_time_token: "<TIME 00:08:20.0 video 1>",
          projected_pixel: [698.2600191509645, 738.7203663739936],
          normalized_projected_pixel: [0.49592330905608273, 0.5246593511178932],
          camera_coordinates: [
            -0.0009848273532326313, 0.05273892117100365, 0.9981679876038707,
          ],
          frame_index: 2605,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 497.0,
              time_token: "<TIME 00:08:17.0 video 1>",
              projected_pixel: [56.96883646419576, 532.2271528176824],
              normalized_projected_pixel: [
                0.04046082135241176, 0.37800223921710396,
              ],
              camera_coordinates: [
                -0.8405452355240353, -0.22762311910251976, 0.6603409096665429,
              ],
              frame_index: 2605,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 500.0,
              time_token: "<TIME 00:08:20.0 video 1>",
              projected_pixel: [698.2600191509645, 738.7203663739936],
              normalized_projected_pixel: [
                0.49592330905608273, 0.5246593511178932,
              ],
              camera_coordinates: [
                -0.0009848273532326313, 0.05273892117100365, 0.9981679876038707,
              ],
              frame_index: 2605,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
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
          "The disk was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:26.8 video 1>; Point=(0.6521, 0.6811)",
          "<TIME 00:01:27.0 video 1>; Point=(0.6357, 0.7027)",
          "<TIME 00:01:28.0 video 1>; Point=(0.6546, 0.7941)",
          "<TIME 00:01:29.0 video 1>; Point=(0.5739, 0.7902)",
        ],
        answer_metadata: {
          last_placement_time_sec: 86.83333333333333,
          last_placement_time_in_clip_sec: 86.83333333333333,
          last_placement_time_token: "<TIME 00:01:26.8 video 1>",
          projected_pixel: [918.103942172105, 959.0279645612059],
          normalized_projected_pixel: [0.6520624589290519, 0.6811278157394928],
          camera_coordinates: [
            0.12344406815053288, 0.1421444913665615, 0.33889187630359974,
          ],
          frame_index: 2605,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 86.83333333333333,
              time_token: "<TIME 00:01:26.8 video 1>",
              projected_pixel: [918.103942172105, 959.0279645612059],
              normalized_projected_pixel: [
                0.6520624589290519, 0.6811278157394928,
              ],
              camera_coordinates: [
                0.12344406815053288, 0.1421444913665615, 0.33889187630359974,
              ],
              frame_index: 2605,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 87.0,
              time_token: "<TIME 00:01:27.0 video 1>",
              projected_pixel: [895.0243598909445, 989.4253434303612],
              normalized_projected_pixel: [
                0.6356707101498186, 0.7027168632317906,
              ],
              camera_coordinates: [
                0.11483448131214313, 0.16552951714883313, 0.35143700623803287,
              ],
              frame_index: 2610,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 88.0,
              time_token: "<TIME 00:01:28.0 video 1>",
              projected_pixel: [921.6542931713477, 1118.154976820606],
              normalized_projected_pixel: [
                0.6545840150364686, 0.7941441596737259,
              ],
              camera_coordinates: [
                0.14003192423333832, 0.25841120805147383, 0.36220479926229454,
              ],
              frame_index: 2640,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 89.0,
              time_token: "<TIME 00:01:29.0 video 1>",
              projected_pixel: [808.1176198211792, 1112.614654029818],
              normalized_projected_pixel: [
                0.5739471731684511, 0.7902092713279957,
              ],
              camera_coordinates: [
                0.06462129285908658, 0.2395108530857854, 0.34634497005983067,
              ],
              frame_index: 2670,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
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
          "At the current time <TIME 00:08:31.0 video 1>, based on the last known position of the disk that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area next to the window",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 86.83333333333333,
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
            "At the current time <TIME 00:08:31.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, in which direction is the disk from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 511.0,
            camera_coordinates: [
              0.5571616045699199, 0.6582259408949535, -0.4956450932943617,
            ],
            world_coordinates: [
              -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.5571616045699199,
              z: -0.4956450932943617,
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
            "At the current time <TIME 00:08:31.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, and using the current position of the sink hole cover (marked in red) in the current frame, where is the disk relative to sink hole cover from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "c062f2a00587fe9c",
            object_x_name: "disk",
            object_x_reference_time_sec: 511.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5264453323042475, -2.936838722931191, -0.40649682116242736,
            ],
            object_x_camera_coordinates: [
              0.5571616045699199, 0.6582259408949535, -0.4956450932943617,
            ],
            object_y_assoc_id: "6dc0c7424c8a4db0",
            object_y_name: "sink hole cover",
            object_y_reference_time_sec: 511.0,
            object_y_world_coordinates: [
              -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
            ],
            object_y_projected_pixel: [631.4951857331513, 1291.3584673493351],
            object_y_normalized_projected_pixel: [
              0.4485051035036586, 0.9171580023787892,
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
            "At the current time <TIME 00:08:31.0 video 1>, consider the disk that was moved earlier. Using its last known position to infer its current location, and using the current position of the sink hole cover (marked in red) in the current frame, how far is the disk from the sink hole cover: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "c062f2a00587fe9c",
            object_x_name: "disk",
            object_x_reference_time_sec: 511.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "6dc0c7424c8a4db0",
            object_y_name: "sink hole cover",
            object_y_pixel: [631.4951857331513, 1291.3584673493351],
            object_y_normalized_projected_pixel: [
              0.4485051035036586, 0.9171580023787892,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6125750205068692, 0.17209495975851297, -0.9453717686806336,
            ],
            distance_m: 1.139558077476363,
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
  oos_staged_h10p0_40: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "541469e8f03660d2",
    object_a_name: "candy floss bowl",
    query_time_sec: 511.0,
    query_time_in_clip_sec: 511.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 511.0,
    clip_duration_sec: 511.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "541469e8f03660d2",
      object_name: "candy floss bowl",
      query_time_sec: 511.0,
      oos_span_start_sec: 501.0,
      oos_span_end_sec: 523.0,
      oos_duration_sec: 22.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 511.0,
      clip_duration_sec: 511.0,
      anchor_assoc_id: "0ca2d3e6c64cb047",
      anchor_name: "bowl",
      anchor_projected_pixel: [763.4483170615953, 1268.642488845876],
      anchor_world_coordinates: [
        -0.7899093226146502, -3.7934813503398, -0.8682364334379572,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_40",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:31.0 video 1>, is the previously moved candy floss bowl visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.520418548230918, 0.7490285525287028, -0.5360685297316858,
          ],
          frame_index: 2219,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The candy floss bowl was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:17.0 video 1>; Point=(0.0514, 0.425)",
          "<TIME 00:08:18.0 video 1>; Point=(0.0105, 0.5436)",
          "<TIME 00:08:20.0 video 1>; Point=(0.5018, 0.5669)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 500.0,
          sampled_last_visible_time_in_clip_sec: 500.0,
          sampled_last_visible_time_token: "<TIME 00:08:20.0 video 1>",
          projected_pixel: [706.5510617811294, 798.1561099134918],
          normalized_projected_pixel: [0.5018118336513703, 0.5668722371544687],
          camera_coordinates: [
            0.01182915144369906, 0.14089267567860353, 0.9407751466248029,
          ],
          frame_index: 2219,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 497.0,
              time_token: "<TIME 00:08:17.0 video 1>",
              projected_pixel: [72.37164500212327, 598.3466937030231],
              normalized_projected_pixel: [
                0.05140031605264437, 0.4249621404140789,
              ],
              camera_coordinates: [
                -0.7883738433054785, -0.13551272593644925, 0.6555407027113851,
              ],
              frame_index: 2219,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 498.0,
              time_token: "<TIME 00:08:18.0 video 1>",
              projected_pixel: [14.754392668160676, 765.3511566526754],
              normalized_projected_pixel: [
                0.010478972065455026, 0.5435732646680933,
              ],
              camera_coordinates: [
                -0.8643918917554927, 0.07530355532976563, 0.6174451600112989,
              ],
              frame_index: 2219,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 500.0,
              time_token: "<TIME 00:08:20.0 video 1>",
              projected_pixel: [706.5510617811294, 798.1561099134918],
              normalized_projected_pixel: [
                0.5018118336513703, 0.5668722371544687,
              ],
              camera_coordinates: [
                0.01182915144369906, 0.14089267567860353, 0.9407751466248029,
              ],
              frame_index: 2219,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
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
          "The candy floss bowl was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:14.0 video 1>; Point=(0.7495, 0.7719)",
          "<TIME 00:01:14.0 video 1>; Point=(0.754, 0.7837)",
        ],
        answer_metadata: {
          last_placement_time_sec: 73.96666666666667,
          last_placement_time_in_clip_sec: 73.96666666666667,
          last_placement_time_token: "<TIME 00:01:14.0 video 1>",
          projected_pixel: [1055.235328560973, 1086.897487387391],
          normalized_projected_pixel: [0.7494569094893273, 0.771944238201272],
          camera_coordinates: [
            0.230700547610454, 0.24613908535740003, 0.3646212601274359,
          ],
          frame_index: 2219,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 73.96666666666667,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [1055.235328560973, 1086.897487387391],
              normalized_projected_pixel: [
                0.7494569094893273, 0.771944238201272,
              ],
              camera_coordinates: [
                0.230700547610454, 0.24613908535740003, 0.3646212601274359,
              ],
              frame_index: 2219,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 74.0,
              time_token: "<TIME 00:01:14.0 video 1>",
              projected_pixel: [1061.6198032419454, 1103.4475837272262],
              normalized_projected_pixel: [
                0.7539913375297908, 0.7836985679880868,
              ],
              camera_coordinates: [
                0.23558204332830313, 0.25765922082818404, 0.3626969310081225,
              ],
              frame_index: 2220,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
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
          "At the current time <TIME 00:08:31.0 video 1>, based on the last known position of the candy floss bowl that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 73.96666666666667,
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
            "At the current time <TIME 00:08:31.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, in which direction is the candy floss bowl from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 511.0,
            camera_coordinates: [
              0.520418548230918, 0.7490285525287028, -0.5360685297316858,
            ],
            world_coordinates: [
              -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.520418548230918,
              z: -0.5360685297316858,
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
            "At the current time <TIME 00:08:31.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl (marked in red) in the current frame, where is the candy floss bowl relative to bowl from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "541469e8f03660d2",
            object_x_name: "candy floss bowl",
            object_x_reference_time_sec: 511.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.508861387108066, -2.8535498249189284, -0.46960771579468186,
            ],
            object_x_camera_coordinates: [
              0.520418548230918, 0.7490285525287028, -0.5360685297316858,
            ],
            object_y_assoc_id: "0ca2d3e6c64cb047",
            object_y_name: "bowl",
            object_y_reference_time_sec: 511.0,
            object_y_world_coordinates: [
              -0.7899093226146502, -3.7934813503398, -0.8682364334379572,
            ],
            object_y_projected_pixel: [763.4483170615953, 1268.642488845876],
            object_y_normalized_projected_pixel: [
              0.542221816094883, 0.901024494918946,
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
            "At the current time <TIME 00:08:31.0 video 1>, consider the candy floss bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl (marked in red) in the current frame, how far is the candy floss bowl from the bowl: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "541469e8f03660d2",
            object_x_name: "candy floss bowl",
            object_x_reference_time_sec: 511.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0ca2d3e6c64cb047",
            object_y_name: "bowl",
            object_y_pixel: [763.4483170615953, 1268.642488845876],
            object_y_normalized_projected_pixel: [
              0.542221816094883, 0.901024494918946,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.44631664328644427, 0.10958985801067689, -1.1610597379101537,
            ],
            distance_m: 1.2487066100767121,
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
  oos_staged_h10p0_41: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "1f58269e7af47ad8",
    object_a_name: "water filter jug",
    query_time_sec: 512.0,
    query_time_in_clip_sec: 512.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 512.0,
    clip_duration_sec: 512.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "1f58269e7af47ad8",
      object_name: "water filter jug",
      query_time_sec: 512.0,
      oos_span_start_sec: 502.0,
      oos_span_end_sec: 528.0,
      oos_duration_sec: 26.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 512.0,
      clip_duration_sec: 512.0,
      anchor_assoc_id: "31e4d552813d3887",
      anchor_name: "inner flask lid",
      anchor_projected_pixel: [1171.2889215353202, 1230.9292228893553],
      anchor_world_coordinates: [
        -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_41",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:32.0 video 1>, is the previously moved water filter jug visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [66701.11103745978, -11432.05650435893],
          camera_coordinates: [
            -0.6147140784798472, 0.547234914028379, 0.07047697720650037,
          ],
          frame_index: 11472,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The water filter jug was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:21.0 video 1>; Point=(0.0793, 0.6999)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 501.0,
          sampled_last_visible_time_in_clip_sec: 501.0,
          sampled_last_visible_time_token: "<TIME 00:08:21.0 video 1>",
          projected_pixel: [111.70604237078999, 985.3908273844988],
          normalized_projected_pixel: [0.07933667782016335, 0.6998514399037634],
          camera_coordinates: [
            -0.6137456276328197, 0.29251159090513446, 0.5364608076102519,
          ],
          frame_index: 11472,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 501.0,
              time_token: "<TIME 00:08:21.0 video 1>",
              projected_pixel: [111.70604237078999, 985.3908273844988],
              normalized_projected_pixel: [
                0.07933667782016335, 0.6998514399037634,
              ],
              camera_coordinates: [
                -0.6137456276328197, 0.29251159090513446, 0.5364608076102519,
              ],
              frame_index: 11472,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
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
          "The water filter jug was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:22.4 video 1>; Point=(0.126, 0.7293)",
          "<TIME 00:06:23.0 video 1>; Point=(-0.1216, 0.9024)",
          "<TIME 00:06:24.0 video 1>; Point=(1.2479, 2.4477)",
          "<TIME 00:06:25.0 video 1>; Point=(-1.0965, 1.9727)",
        ],
        answer_metadata: {
          last_placement_time_sec: 382.4,
          last_placement_time_in_clip_sec: 382.4,
          last_placement_time_token: "<TIME 00:06:22.4 video 1>",
          projected_pixel: [177.42981718595445, 1026.9166148954741],
          normalized_projected_pixel: [0.12601549516047902, 0.7293441867155356],
          camera_coordinates: [
            -0.37710322906255933, 0.2324197822175793, 0.3848055166743385,
          ],
          frame_index: 11472,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 382.4,
              time_token: "<TIME 00:06:22.4 video 1>",
              projected_pixel: [177.42981718595445, 1026.9166148954741],
              normalized_projected_pixel: [
                0.12601549516047902, 0.7293441867155356,
              ],
              camera_coordinates: [
                -0.37710322906255933, 0.2324197822175793, 0.3848055166743385,
              ],
              frame_index: 11472,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 383.0,
              time_token: "<TIME 00:06:23.0 video 1>",
              projected_pixel: [-171.21219373051395, 1270.5197478991065],
              normalized_projected_pixel: [
                -0.12159956941087638, 0.9023577754965245,
              ],
              camera_coordinates: [
                -0.5995024470380271, 0.3899185282839077, 0.25094646157849754,
              ],
              frame_index: 11490,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 384.0,
              time_token: "<TIME 00:06:24.0 video 1>",
              projected_pixel: [1757.0102543408364, 3446.428740607087],
              normalized_projected_pixel: [
                1.247876601094344, 2.4477476850902606,
              ],
              camera_coordinates: [
                -0.6133208534504428, 0.5167699420340339, 0.11128632411137973,
              ],
              frame_index: 11520,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 385.0,
              time_token: "<TIME 00:06:25.0 video 1>",
              projected_pixel: [-1543.8957898254673, 2777.5208971408774],
              normalized_projected_pixel: [
                -1.0965168961828604, 1.9726710917193733,
              ],
              camera_coordinates: [
                -0.5728477149467242, 0.49230285230726833, 0.1562797478402813,
              ],
              frame_index: 11550,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
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
          "At the current time <TIME 00:08:32.0 video 1>, based on the last known position of the water filter jug that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 382.4,
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
            "At the current time <TIME 00:08:32.0 video 1>, consider the water filter jug that was moved earlier. Using its last known position to infer its current location, in which direction is the water filter jug from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 512.0,
            camera_coordinates: [
              -0.6147140784798472, 0.547234914028379, 0.07047697720650037,
            ],
            world_coordinates: [
              -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.6147140784798472,
              z: 0.07047697720650037,
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
            "At the current time <TIME 00:08:32.0 video 1>, consider the water filter jug that was moved earlier. Using its last known position to infer its current location, and using the current position of the inner flask lid (marked in red) in the current frame, where is the water filter jug relative to inner flask lid from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "1f58269e7af47ad8",
            object_x_name: "water filter jug",
            object_x_reference_time_sec: 512.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.21338885098627897, -3.2562315547721132, -0.5081502452711988,
            ],
            object_x_camera_coordinates: [
              -0.6147140784798472, 0.547234914028379, 0.07047697720650037,
            ],
            object_y_assoc_id: "31e4d552813d3887",
            object_y_name: "inner flask lid",
            object_y_reference_time_sec: 512.0,
            object_y_world_coordinates: [
              -1.1773782843693534, -3.7726139338750215, -0.5999793425765354,
            ],
            object_y_projected_pixel: [1171.2889215353202, 1230.9292228893553],
            object_y_normalized_projected_pixel: [
              0.831881336317699, 0.8742395048930081,
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
            "At the current time <TIME 00:08:32.0 video 1>, consider the water filter jug that was moved earlier. Using its last known position to infer its current location, and using the current position of the inner flask lid (marked in red) in the current frame, how far is the water filter jug from the inner flask lid: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "1f58269e7af47ad8",
            object_x_name: "water filter jug",
            object_x_reference_time_sec: 512.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "31e4d552813d3887",
            object_y_name: "inner flask lid",
            object_y_pixel: [1171.2889215353202, 1230.9292228893553],
            object_y_normalized_projected_pixel: [
              0.831881336317699, 0.8742395048930081,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.0365244939505431, 0.07908312369263348, -0.351741105391024,
            ],
            distance_m: 1.0974329010167836,
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
  oos_staged_h10p0_42: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "181b2e6a7a7b60c9",
    object_a_name: "flask",
    query_time_sec: 518.0,
    query_time_in_clip_sec: 518.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 518.0,
    clip_duration_sec: 518.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "181b2e6a7a7b60c9",
      object_name: "flask",
      query_time_sec: 518.0,
      oos_span_start_sec: 508.0,
      oos_span_end_sec: 528.0,
      oos_duration_sec: 20.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_counter.004",
      relocation_score: 6,
      clip_start_time_sec: 0,
      clip_end_time_sec: 518.0,
      clip_duration_sec: 518.0,
      anchor_assoc_id: "48f1b071f87ba9d3",
      anchor_name: "other oven glove",
      anchor_projected_pixel: [837.2694113250916, 1112.9030258391779],
      anchor_world_coordinates: [
        -1.118007145914913, -4.012267124518988, -0.29965286099745153,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_42",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:38.0 video 1>, is the previously moved flask visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.7416246261679642, 0.49192193994125566, -0.07086383004422414,
          ],
          frame_index: 1921,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The flask was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:24.0 video 1>; Point=(0.0338, 0.6823)",
          "<TIME 00:08:25.0 video 1>; Point=(0.0433, 0.7045)",
          "<TIME 00:08:26.0 video 1>; Point=(0.068, 0.743)",
          "<TIME 00:08:27.0 video 1>; Point=(0.072, 0.7675)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 507.0,
          sampled_last_visible_time_in_clip_sec: 507.0,
          sampled_last_visible_time_token: "<TIME 00:08:27.0 video 1>",
          projected_pixel: [101.33992958451472, 1080.6582783935532],
          normalized_projected_pixel: [0.07197438180718375, 0.7675129818136032],
          camera_coordinates: [
            -0.496705582431614, 0.3120151292421398, 0.39274536673775096,
          ],
          frame_index: 1921,
          status: "in_view",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 504.0,
              time_token: "<TIME 00:08:24.0 video 1>",
              projected_pixel: [47.558392906612994, 960.6984157003458],
              normalized_projected_pixel: [
                0.03377726768935582, 0.6823142156962683,
              ],
              camera_coordinates: [
                -0.5132031801523449, 0.20108546510515435, 0.37659834161465566,
              ],
              frame_index: 1921,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 505.0,
              time_token: "<TIME 00:08:25.0 video 1>",
              projected_pixel: [60.98641739881782, 991.967187863711],
              normalized_projected_pixel: [
                0.04331421690256947, 0.7045221504713857,
              ],
              camera_coordinates: [
                -0.5025244103952287, 0.2257128804296551, 0.3767587586593337,
              ],
              frame_index: 1921,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 506.0,
              time_token: "<TIME 00:08:26.0 video 1>",
              projected_pixel: [95.73228386559015, 1046.1481983195117],
              normalized_projected_pixel: [
                0.06799167888181118, 0.7430029817610169,
              ],
              camera_coordinates: [
                -0.49293955499070474, 0.2785021909582239, 0.39567747191680347,
              ],
              frame_index: 1921,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 507.0,
              time_token: "<TIME 00:08:27.0 video 1>",
              projected_pixel: [101.33992958451472, 1080.6582783935532],
              normalized_projected_pixel: [
                0.07197438180718375, 0.7675129818136032,
              ],
              camera_coordinates: [
                -0.496705582431614, 0.3120151292421398, 0.39274536673775096,
              ],
              frame_index: 1921,
              status: "in_view",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
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
          "The flask was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:04.0 video 1>; Point=(0.4621, 0.709)",
          "<TIME 00:01:05.0 video 1>; Point=(0.3959, 0.7135)",
        ],
        answer_metadata: {
          last_placement_time_sec: 64.03333333333333,
          last_placement_time_in_clip_sec: 64.03333333333333,
          last_placement_time_token: "<TIME 00:01:04.0 video 1>",
          projected_pixel: [650.6339158215737, 998.3306896777027],
          normalized_projected_pixel: [0.46209795157782224, 0.709041683009732],
          camera_coordinates: [
            -0.0433075145881161, 0.2634111519531016, 0.5472220570786896,
          ],
          frame_index: 1921,
          status: "last_past_track_end",
          fixture: "P01_counter.004",
          world_coordinates: [
            -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 64.03333333333333,
              time_token: "<TIME 00:01:04.0 video 1>",
              projected_pixel: [650.6339158215737, 998.3306896777027],
              normalized_projected_pixel: [
                0.46209795157782224, 0.709041683009732,
              ],
              camera_coordinates: [
                -0.0433075145881161, 0.2634111519531016, 0.5472220570786896,
              ],
              frame_index: 1921,
              status: "last_past_track_end",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 65.0,
              time_token: "<TIME 00:01:05.0 video 1>",
              projected_pixel: [557.3697430042494, 1004.615756394742],
              normalized_projected_pixel: [
                0.39585919247460893, 0.7135055088030838,
              ],
              camera_coordinates: [
                -0.12605468885322946, 0.26628787424301437, 0.5377795494779385,
              ],
              frame_index: 1950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.004",
              world_coordinates: [
                -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
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
          "At the current time <TIME 00:08:38.0 video 1>, based on the last known position of the flask that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 64.03333333333333,
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
            "At the current time <TIME 00:08:38.0 video 1>, consider the flask that was moved earlier. Using its last known position to infer its current location, in which direction is the flask from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 518.0,
            camera_coordinates: [
              -0.7416246261679642, 0.49192193994125566, -0.07086383004422414,
            ],
            world_coordinates: [
              -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.7416246261679642,
              z: -0.07086383004422414,
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
            "At the current time <TIME 00:08:38.0 video 1>, consider the flask that was moved earlier. Using its last known position to infer its current location, and using the current position of the other oven glove (marked in red) in the current frame, where is the flask relative to other oven glove from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "181b2e6a7a7b60c9",
            object_x_name: "flask",
            object_x_reference_time_sec: 518.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.20384007221672512, -3.596119449178829, -0.44758002312239803,
            ],
            object_x_camera_coordinates: [
              -0.7416246261679642, 0.49192193994125566, -0.07086383004422414,
            ],
            object_y_assoc_id: "48f1b071f87ba9d3",
            object_y_name: "other oven glove",
            object_y_reference_time_sec: 518.0,
            object_y_world_coordinates: [
              -1.118007145914913, -4.012267124518988, -0.29965286099745153,
            ],
            object_y_projected_pixel: [837.2694113250916, 1112.9030258391779],
            object_y_normalized_projected_pixel: [
              0.5946515705433889, 0.7904140808516888,
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
            "At the current time <TIME 00:08:38.0 video 1>, consider the flask that was moved earlier. Using its last known position to infer its current location, and using the current position of the other oven glove (marked in red) in the current frame, how far is the flask from the other oven glove: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "181b2e6a7a7b60c9",
            object_x_name: "flask",
            object_x_reference_time_sec: 518.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "48f1b071f87ba9d3",
            object_y_name: "other oven glove",
            object_y_pixel: [837.2694113250916, 1112.9030258391779],
            object_y_normalized_projected_pixel: [
              0.5946515705433889, 0.7904140808516888,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.8497531497327115, 0.17512527962117683, -0.5272698479680078,
            ],
            distance_m: 1.015264877566079,
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
  oos_staged_h10p0_43: {
    inputs: {
      "video 1": {
        id: "P01-20240202-195538",
      },
    },
    video_id: "P01-20240202-195538",
    object_a_assoc_id: "6dc0c7424c8a4db0",
    object_a_name: "sink hole cover",
    query_time_sec: 523.0,
    query_time_in_clip_sec: 523.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 523.0,
    clip_duration_sec: 523.0,
    horizon_sec: 10.0,
    generation_info: {
      video_id: "P01-20240202-195538",
      assoc_id: "6dc0c7424c8a4db0",
      object_name: "sink hole cover",
      query_time_sec: 523.0,
      oos_span_start_sec: 513.0,
      oos_span_end_sec: 537.0,
      oos_duration_sec: 24.0,
      horizon_sec: 10.0,
      fixture_at_query: "P01_sink.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 523.0,
      clip_duration_sec: 523.0,
      anchor_assoc_id: "49ff84964587f5fe",
      anchor_name: "washing up liquid bottle",
      anchor_projected_pixel: [539.9482755466429, 1328.609827522389],
      anchor_world_coordinates: [
        -1.2377383328456553, -3.880186130531543, -0.5529931423615246,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h10p0_43",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:43.0 video 1>, is the previously moved sink hole cover visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.48959942619804064, 0.5503223576391918, -0.06488661327619116,
          ],
          frame_index: 8727,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The sink hole cover was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:29.0 video 1>; Point=(0.476, 0.9267)",
          "<TIME 00:08:30.0 video 1>; Point=(0.3891, 0.889)",
          "<TIME 00:08:31.0 video 1>; Point=(0.4485, 0.9172)",
          "<TIME 00:08:32.0 video 1>; Point=(0.4373, 0.9649)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 512.0,
          sampled_last_visible_time_in_clip_sec: 512.0,
          sampled_last_visible_time_token: "<TIME 00:08:32.0 video 1>",
          projected_pixel: [615.7097937970761, 1358.5604331372003],
          normalized_projected_pixel: [0.43729388763996885, 0.9648866712622162],
          camera_coordinates: [
            -0.06910870101591238, 0.5471337210031441, 0.42683234858905905,
          ],
          frame_index: 8727,
          status: "in_view",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 509.0,
              time_token: "<TIME 00:08:29.0 video 1>",
              projected_pixel: [670.2740911097421, 1304.8304015640047],
              normalized_projected_pixel: [
                0.47604693970862366, 0.9267261374744351,
              ],
              camera_coordinates: [
                -0.021086020167190966, 0.45204403868058307, 0.4058247026011599,
              ],
              frame_index: 8727,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 510.0,
              time_token: "<TIME 00:08:30.0 video 1>",
              projected_pixel: [547.8700178122917, 1251.663214858013],
              normalized_projected_pixel: [
                0.38911222855986627, 0.8889653514616569,
              ],
              camera_coordinates: [
                -0.12189650466927815, 0.4422900182887133, 0.4454610633046836,
              ],
              frame_index: 8727,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 511.0,
              time_token: "<TIME 00:08:31.0 video 1>",
              projected_pixel: [631.4951857331513, 1291.3584673493351],
              normalized_projected_pixel: [
                0.4485051035036586, 0.9171580023787892,
              ],
              camera_coordinates: [
                -0.05541341593694926, 0.4861309811364405, 0.44972667538627187,
              ],
              frame_index: 8727,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 512.0,
              time_token: "<TIME 00:08:32.0 video 1>",
              projected_pixel: [615.7097937970761, 1358.5604331372003],
              normalized_projected_pixel: [
                0.43729388763996885, 0.9648866712622162,
              ],
              camera_coordinates: [
                -0.06910870101591238, 0.5471337210031441, 0.42683234858905905,
              ],
              frame_index: 8727,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
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
          "The sink hole cover was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:50.9 video 1>; Point=(0.8713, 0.8185)",
          "<TIME 00:04:51.0 video 1>; Point=(0.8873, 0.8168)",
          "<TIME 00:04:52.0 video 1>; Point=(1.0478, 0.9516)",
          "<TIME 00:04:53.0 video 1>; Point=(0.8483, 0.8188)",
        ],
        answer_metadata: {
          last_placement_time_sec: 290.9,
          last_placement_time_in_clip_sec: 290.9,
          last_placement_time_token: "<TIME 00:04:50.9 video 1>",
          projected_pixel: [1226.72583473553, 1152.4178432703145],
          normalized_projected_pixel: [0.8712541439883026, 0.8184785818681211],
          camera_coordinates: [
            0.41855458856574, 0.35363384649803875, 0.38571798777890104,
          ],
          frame_index: 8727,
          status: "last_past_track_end",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 290.9,
              time_token: "<TIME 00:04:50.9 video 1>",
              projected_pixel: [1226.72583473553, 1152.4178432703145],
              normalized_projected_pixel: [
                0.8712541439883026, 0.8184785818681211,
              ],
              camera_coordinates: [
                0.41855458856574, 0.35363384649803875, 0.38571798777890104,
              ],
              frame_index: 8727,
              status: "last_past_track_end",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 291.0,
              time_token: "<TIME 00:04:51.0 video 1>",
              projected_pixel: [1249.3118819813858, 1149.987272747899],
              normalized_projected_pixel: [
                0.8872953707254161, 0.8167523243948146,
              ],
              camera_coordinates: [
                0.44123836146675277, 0.35559893906116735, 0.3785647849139395,
              ],
              frame_index: 8730,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 292.0,
              time_token: "<TIME 00:04:52.0 video 1>",
              projected_pixel: [1475.2697037573596, 1339.8309926715287],
              normalized_projected_pixel: [
                1.047776778236761, 0.9515845118405744,
              ],
              camera_coordinates: [
                0.6480224715888068, 0.5297989162542384, 0.30129654598580236,
              ],
              frame_index: 8760,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 293.0,
              time_token: "<TIME 00:04:53.0 video 1>",
              projected_pixel: [1194.4211377691581, 1152.8646790454336],
              normalized_projected_pixel: [
                0.8483104671655952, 0.8187959368220409,
              ],
              camera_coordinates: [
                0.4898347421999434, 0.44120425018222564, 0.498030923048671,
              ],
              frame_index: 8790,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
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
          "At the current time <TIME 00:08:43.0 video 1>, based on the last known position of the sink hole cover that was moved earlier, which fixture type is closest to it?",
        choices: ["counter", "sink", "dishwasher", "hook", "microwave"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 290.9,
          correct_fixture: "sink",
          display_correct_answer: "sink",
          raw_correct_fixture: "P01_sink.001",
          fixture_type_pool: [
            "bin",
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hook",
            "microwave",
            "sink",
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
            "At the current time <TIME 00:08:43.0 video 1>, consider the sink hole cover that was moved earlier. Using its last known position to infer its current location, in which direction is the sink hole cover from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 523.0,
            camera_coordinates: [
              -0.48959942619804064, 0.5503223576391918, -0.06488661327619116,
            ],
            world_coordinates: [
              -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.48959942619804064,
              z: -0.06488661327619116,
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
            "At the current time <TIME 00:08:43.0 video 1>, consider the sink hole cover that was moved earlier. Using its last known position to infer its current location, and using the current position of the washing up liquid bottle (marked in red) in the current frame, where is the sink hole cover relative to washing up liquid bottle from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "6dc0c7424c8a4db0",
            object_x_name: "sink hole cover",
            object_x_reference_time_sec: 523.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.6926191506191647, -3.6741724653097276, -0.6507619701873385,
            ],
            object_x_camera_coordinates: [
              -0.48959942619804064, 0.5503223576391918, -0.06488661327619116,
            ],
            object_y_assoc_id: "49ff84964587f5fe",
            object_y_name: "washing up liquid bottle",
            object_y_reference_time_sec: 523.0,
            object_y_world_coordinates: [
              -1.2377383328456553, -3.880186130531543, -0.5529931423615246,
            ],
            object_y_projected_pixel: [539.9482755466429, 1328.609827522389],
            object_y_normalized_projected_pixel: [
              0.38348599115528614, 0.9436149343198785,
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
            "At the current time <TIME 00:08:43.0 video 1>, consider the sink hole cover that was moved earlier. Using its last known position to infer its current location, and using the current position of the washing up liquid bottle (marked in red) in the current frame, how far is the sink hole cover from the washing up liquid bottle: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "6dc0c7424c8a4db0",
            object_x_name: "sink hole cover",
            object_x_reference_time_sec: 523.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "49ff84964587f5fe",
            object_y_name: "washing up liquid bottle",
            object_y_pixel: [539.9482755466429, 1328.609827522389],
            object_y_normalized_projected_pixel: [
              0.38348599115528614, 0.9436149343198785,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.3713802241473283, 0.08503302863403217, -0.45166515244973393,
            ],
            distance_m: 0.5908936425312404,
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
  id: "P01-20240202-195538",
  label: "P01-20240202-195538",
  sampledUrl: "https://youtu.be/jmd33OXtZmM",
  fullUrl: "https://youtu.be/HGmiJ5Colv8",
  duration: 220,
  trajectory: TRAJECTORY,
  rawJson: { TRAJECTORY },
};

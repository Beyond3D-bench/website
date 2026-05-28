import type { TrajectoryData, VideoEntry } from "../Types";

const TRAJECTORY: Record<string, TrajectoryData> = {
  oos_staged_h2p0_0: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "383087b29e839a16",
    object_a_name: "chili",
    query_time_sec: 142.0,
    query_time_in_clip_sec: 142.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 142.0,
    clip_duration_sec: 142.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "383087b29e839a16",
      object_name: "chili",
      query_time_sec: 142.0,
      oos_span_start_sec: 140.0,
      oos_span_end_sec: 145.0,
      oos_duration_sec: 5.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 142.0,
      clip_duration_sec: 142.0,
      anchor_assoc_id: "10fa332ca686f6d9",
      anchor_name: "open notebook",
      anchor_projected_pixel: [771.7441767037479, 1280.961234207019],
      anchor_world_coordinates: [
        1.2502712840415624, -1.039177731622999, -0.6320962723655575,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_0",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:22.0 video 1>, is the previously moved chili visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [8304.72673560193, -1016.9686336121317],
          camera_coordinates: [
            1.6033347844998067, 0.36661708943304716, 0.22313821476931806,
          ],
          frame_index: 603,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The chili was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:18.0 video 1>; Point=(0.065, 0.7435)",
          "<TIME 00:02:19.0 video 1>; Point=(0.5395, 0.6745)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 139.0,
          sampled_last_visible_time_in_clip_sec: 139.0,
          sampled_last_visible_time_token: "<TIME 00:02:19.0 video 1>",
          projected_pixel: [759.6624555001217, 949.7242453762473],
          normalized_projected_pixel: [0.5395329939631547, 0.6745200606365392],
          camera_coordinates: [
            0.07629474269265638, 0.3160248872232389, 0.8194973297378086,
          ],
          frame_index: 603,
          status: "in_view",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 138.0,
              time_token: "<TIME 00:02:18.0 video 1>",
              projected_pixel: [91.53064611126138, 1046.850395504866],
              normalized_projected_pixel: [
                0.06500756115856632, 0.7435017013528877,
              ],
              camera_coordinates: [
                -0.6198849518633874, 0.3360146826132804, 0.48093387366419144,
              ],
              frame_index: 603,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 139.0,
              time_token: "<TIME 00:02:19.0 video 1>",
              projected_pixel: [759.6624555001217, 949.7242453762473],
              normalized_projected_pixel: [
                0.5395329939631547, 0.6745200606365392,
              ],
              camera_coordinates: [
                0.07629474269265638, 0.3160248872232389, 0.8194973297378086,
              ],
              frame_index: 603,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
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
          "The chili was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:20.1 video 1>; Point=(0.5209, 0.6244)",
          "<TIME 00:00:21.0 video 1>; Point=(0.5185, 0.6032)",
          "<TIME 00:00:22.0 video 1>; Point=(0.54, 0.5939)",
          "<TIME 00:00:23.0 video 1>; Point=(0.5708, 0.5638)",
        ],
        answer_metadata: {
          last_placement_time_sec: 20.1,
          last_placement_time_in_clip_sec: 20.1,
          last_placement_time_token: "<TIME 00:00:20.1 video 1>",
          projected_pixel: [733.4320025430177, 879.1955481507966],
          normalized_projected_pixel: [0.5209034108970296, 0.6244286563570999],
          camera_coordinates: [
            0.028124484467941552, 0.15170405800377673, 0.56546816088233,
          ],
          frame_index: 603,
          status: "last_past_track_end",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 20.1,
              time_token: "<TIME 00:00:20.1 video 1>",
              projected_pixel: [733.4320025430177, 879.1955481507966],
              normalized_projected_pixel: [
                0.5209034108970296, 0.6244286563570999,
              ],
              camera_coordinates: [
                0.028124484467941552, 0.15170405800377673, 0.56546816088233,
              ],
              frame_index: 603,
              status: "last_past_track_end",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 21.0,
              time_token: "<TIME 00:00:21.0 video 1>",
              projected_pixel: [730.0026641201814, 849.281659071208],
              normalized_projected_pixel: [
                0.5184678012217198, 0.6031829964994375,
              ],
              camera_coordinates: [
                0.024889379500402292, 0.12360658532063995, 0.5641112396574903,
              ],
              frame_index: 630,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 22.0,
              time_token: "<TIME 00:00:22.0 video 1>",
              projected_pixel: [760.3861556765859, 836.2137967782419],
              normalized_projected_pixel: [
                0.540046985565757, 0.5939018443027286,
              ],
              camera_coordinates: [
                0.052448251540462065, 0.11026031189210345, 0.5578267011148798,
              ],
              frame_index: 660,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 23.0,
              time_token: "<TIME 00:00:23.0 video 1>",
              projected_pixel: [803.7353423456825, 793.7638717370502],
              normalized_projected_pixel: [
                0.570834760188695, 0.5637527498132459,
              ],
              camera_coordinates: [
                0.09283076820937672, 0.07188706232726438, 0.5618426966114636,
              ],
              frame_index: 690,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
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
          "At the current time <TIME 00:02:22.0 video 1>, based on the last known position of the chili that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 20.1,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the hob and the sink",
          raw_correct_fixture: "P04_counter.004",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:02:22.0 video 1>, consider the chili that was moved earlier. Using its last known position to infer its current location, in which direction is the chili from your viewpoint?",
          choices: ["Front-right", "Back-left", "Front-left", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 142.0,
            camera_coordinates: [
              1.6033347844998067, 0.36661708943304716, 0.22313821476931806,
            ],
            world_coordinates: [
              -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.6033347844998067,
              z: 0.22313821476931806,
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
            "At the current time <TIME 00:02:22.0 video 1>, consider the chili that was moved earlier. Using its last known position to infer its current location, and using the current position of the open notebook (marked in red) in the current frame, where is the chili relative to open notebook from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "383087b29e839a16",
            object_x_name: "chili",
            object_x_reference_time_sec: 142.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
            ],
            object_x_camera_coordinates: [
              1.6033347844998067, 0.36661708943304716, 0.22313821476931806,
            ],
            object_y_assoc_id: "10fa332ca686f6d9",
            object_y_name: "open notebook",
            object_y_reference_time_sec: 142.0,
            object_y_world_coordinates: [
              1.2502712840415624, -1.039177731622999, -0.6320962723655575,
            ],
            object_y_projected_pixel: [771.7441767037479, 1280.961234207019],
            object_y_normalized_projected_pixel: [
              0.5481137618634574, 0.9097736038402124,
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
            "At the current time <TIME 00:02:22.0 video 1>, consider the chili that was moved earlier. Using its last known position to infer its current location, and using the current position of the open notebook (marked in red) in the current frame, how far is the chili from the open notebook: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "383087b29e839a16",
            object_x_name: "chili",
            object_x_reference_time_sec: 142.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "10fa332ca686f6d9",
            object_y_name: "open notebook",
            object_y_pixel: [771.7441767037479, 1280.961234207019],
            object_y_normalized_projected_pixel: [
              0.5481137618634574, 0.9097736038402124,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.5450480023297593, -0.11708245972355713, -0.24137043030223881,
            ],
            distance_m: 1.568164951942998,
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
  oos_staged_h2p0_1: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "10fa332ca686f6d9",
    object_a_name: "open notebook",
    query_time_sec: 149.0,
    query_time_in_clip_sec: 149.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 149.0,
    clip_duration_sec: 149.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "10fa332ca686f6d9",
      object_name: "open notebook",
      query_time_sec: 149.0,
      oos_span_start_sec: 147.0,
      oos_span_end_sec: 151.0,
      oos_duration_sec: 4.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 149.0,
      clip_duration_sec: 149.0,
      anchor_assoc_id: "383087b29e839a16",
      anchor_name: "chili",
      anchor_projected_pixel: [246.48401677074014, 968.7037299905255],
      anchor_world_coordinates: [
        -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_1",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:29.0 video 1>, is the previously moved open notebook visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-5429.596576459879, -5041.697057569008],
          camera_coordinates: [
            -1.95232613492119, 0.2593808595789978, 0.23484587697798265,
          ],
          frame_index: 4252,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The open notebook was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:24.0 video 1>; Point=(0.5599, 0.8873)",
          "<TIME 00:02:25.0 video 1>; Point=(0.5745, 0.8776)",
          "<TIME 00:02:26.0 video 1>; Point=(0.3938, 0.9053)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 146.0,
          sampled_last_visible_time_in_clip_sec: 146.0,
          sampled_last_visible_time_token: "<TIME 00:02:26.0 video 1>",
          projected_pixel: [554.4953977757139, 1274.6992412026102],
          normalized_projected_pixel: [0.3938177541020695, 0.9053261656268539],
          camera_coordinates: [
            -0.11368451892470355, 0.42650991849361897, 0.41173942022362153,
          ],
          frame_index: 4252,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2502712840415624, -1.039177731622999, -0.6320962723655575,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 144.0,
              time_token: "<TIME 00:02:24.0 video 1>",
              projected_pixel: [788.2764066422145, 1249.3611865890016],
              normalized_projected_pixel: [
                0.5598554024447546, 0.8873303882024159,
              ],
              camera_coordinates: [
                0.06903763789807993, 0.43500439370171273, 0.4501742203859529,
              ],
              frame_index: 4252,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 145.0,
              time_token: "<TIME 00:02:25.0 video 1>",
              projected_pixel: [808.8625094426176, 1235.6349663083242],
              normalized_projected_pixel: [
                0.5744762140927682, 0.8775816522076166,
              ],
              camera_coordinates: [
                0.08474588301704955, 0.41849082362597134, 0.4468899075962782,
              ],
              frame_index: 4252,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 146.0,
              time_token: "<TIME 00:02:26.0 video 1>",
              projected_pixel: [554.4953977757139, 1274.6992412026102],
              normalized_projected_pixel: [
                0.3938177541020695, 0.9053261656268539,
              ],
              camera_coordinates: [
                -0.11368451892470355, 0.42650991849361897, 0.41173942022362153,
              ],
              frame_index: 4252,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
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
          "The open notebook was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:21.7 video 1>; Point=(0.5323, 0.8738)",
          "<TIME 00:02:22.0 video 1>; Point=(0.5481, 0.9098)",
          "<TIME 00:02:23.0 video 1>; Point=(0.6043, 1.0276)",
          "<TIME 00:02:24.0 video 1>; Point=(0.5599, 0.8873)",
        ],
        answer_metadata: {
          last_placement_time_sec: 141.73333333333332,
          last_placement_time_in_clip_sec: 141.73333333333332,
          last_placement_time_token: "<TIME 00:02:21.7 video 1>",
          projected_pixel: [749.4322715449124, 1230.302853727999],
          normalized_projected_pixel: [0.532267238313148, 0.8737946404318175],
          camera_coordinates: [
            0.039698317184269305, 0.4449196378051928, 0.48348302984027314,
          ],
          frame_index: 4252,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2502712840415624, -1.039177731622999, -0.6320962723655575,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 141.73333333333332,
              time_token: "<TIME 00:02:21.7 video 1>",
              projected_pixel: [749.4322715449124, 1230.302853727999],
              normalized_projected_pixel: [
                0.532267238313148, 0.8737946404318175,
              ],
              camera_coordinates: [
                0.039698317184269305, 0.4449196378051928, 0.48348302984027314,
              ],
              frame_index: 4252,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 142.0,
              time_token: "<TIME 00:02:22.0 video 1>",
              projected_pixel: [771.7441767037479, 1280.961234207019],
              normalized_projected_pixel: [
                0.5481137618634574, 0.9097736038402124,
              ],
              camera_coordinates: [
                0.05828678217004746, 0.4836995491566043, 0.46450864507155687,
              ],
              frame_index: 4260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [850.8387571993215, 1446.9018467818823],
              normalized_projected_pixel: [
                0.6042888900563363, 1.0276291525439505,
              ],
              camera_coordinates: [
                0.11546731037388303, 0.5756603197314528, 0.3241454276154915,
              ],
              frame_index: 4290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 144.0,
              time_token: "<TIME 00:02:24.0 video 1>",
              projected_pixel: [788.2764066422145, 1249.3611865890016],
              normalized_projected_pixel: [
                0.5598554024447546, 0.8873303882024159,
              ],
              camera_coordinates: [
                0.06903763789807993, 0.43500439370171273, 0.4501742203859529,
              ],
              frame_index: 4320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
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
          "At the current time <TIME 00:02:29.0 video 1>, based on the last known position of the open notebook that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 141.73333333333332,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:02:29.0 video 1>, consider the open notebook that was moved earlier. Using its last known position to infer its current location, in which direction is the open notebook from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 149.0,
            camera_coordinates: [
              -1.95232613492119, 0.2593808595789978, 0.23484587697798265,
            ],
            world_coordinates: [
              1.2502712840415624, -1.039177731622999, -0.6320962723655575,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.95232613492119,
              z: 0.23484587697798265,
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
            "At the current time <TIME 00:02:29.0 video 1>, consider the open notebook that was moved earlier. Using its last known position to infer its current location, and using the current position of the chili (marked in red) in the current frame, where is the open notebook relative to chili from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "10fa332ca686f6d9",
            object_x_name: "open notebook",
            object_x_reference_time_sec: 149.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.2502712840415624, -1.039177731622999, -0.6320962723655575,
            ],
            object_x_camera_coordinates: [
              -1.95232613492119, 0.2593808595789978, 0.23484587697798265,
            ],
            object_y_assoc_id: "383087b29e839a16",
            object_y_name: "chili",
            object_y_reference_time_sec: 149.0,
            object_y_world_coordinates: [
              -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
            ],
            object_y_projected_pixel: [246.48401677074014, 968.7037299905255],
            object_y_normalized_projected_pixel: [
              0.1750596710019461, 0.6879998082319073,
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
            "At the current time <TIME 00:02:29.0 video 1>, consider the open notebook that was moved earlier. Using its last known position to infer its current location, and using the current position of the chili (marked in red) in the current frame, how far is the open notebook from the chili: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "10fa332ca686f6d9",
            object_x_name: "open notebook",
            object_x_reference_time_sec: 149.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "383087b29e839a16",
            object_y_name: "chili",
            object_y_pixel: [246.48401677074014, 968.7037299905255],
            object_y_normalized_projected_pixel: [
              0.1750596710019461, 0.6879998082319073,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.5457986474179304, 0.03409218418895088, -0.26169749926300523,
            ],
            distance_m: 1.5681649519429985,
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
  oos_staged_h2p0_2: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "0ef98aa54c776891",
    object_a_name: "pressure cooker",
    query_time_sec: 155.0,
    query_time_in_clip_sec: 155.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 155.0,
    clip_duration_sec: 155.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "0ef98aa54c776891",
      object_name: "pressure cooker",
      query_time_sec: 155.0,
      oos_span_start_sec: 153.0,
      oos_span_end_sec: 160.0,
      oos_duration_sec: 7.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 155.0,
      clip_duration_sec: 155.0,
      anchor_assoc_id: "353c0ce699aa17aa",
      anchor_name: "knife",
      anchor_projected_pixel: [255.24542599219848, 1232.7870082088812],
      anchor_world_coordinates: [
        -0.16155418958264633, -0.4243080108019701, -0.600283274941124,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_2",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:35.0 video 1>, is the previously moved pressure cooker visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-664.4441603800585, 931.4640833118317],
          camera_coordinates: [
            -1.935159056214229, 0.3152414217358399, 0.5769320161592664,
          ],
          frame_index: 4382,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pressure cooker was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:32.0 video 1>; Point=(0.118, 0.4084)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 152.0,
          sampled_last_visible_time_in_clip_sec: 152.0,
          sampled_last_visible_time_token: "<TIME 00:02:32.0 video 1>",
          projected_pixel: [166.2010700131442, 575.0379004472933],
          normalized_projected_pixel: [0.11804053267978992, 0.4084075997494981],
          camera_coordinates: [
            -1.3776991063039161, -0.3597662132819701, 1.4064530755557563,
          ],
          frame_index: 4382,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.1342051346383477, -1.265709818198974, -0.4934034739843818,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 152.0,
              time_token: "<TIME 00:02:32.0 video 1>",
              projected_pixel: [166.2010700131442, 575.0379004472933],
              normalized_projected_pixel: [
                0.11804053267978992, 0.4084075997494981,
              ],
              camera_coordinates: [
                -1.3776991063039161, -0.3597662132819701, 1.4064530755557563,
              ],
              frame_index: 4382,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
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
          "The pressure cooker was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:26.1 video 1>; Point=(0.2379, 0.6771)",
          "<TIME 00:02:29.0 video 1>; Point=(-2.6603, -0.0353)",
        ],
        answer_metadata: {
          last_placement_time_sec: 146.06666666666666,
          last_placement_time_in_clip_sec: 146.06666666666666,
          last_placement_time_token: "<TIME 00:02:26.1 video 1>",
          projected_pixel: [334.95792427878564, 953.4092341255727],
          normalized_projected_pixel: [0.23789625303891027, 0.6771372401460033],
          camera_coordinates: [
            -0.27644717934560115, 0.17844978445597343, 0.43440710201858435,
          ],
          frame_index: 4382,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.1342051346383477, -1.265709818198974, -0.4934034739843818,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 146.06666666666666,
              time_token: "<TIME 00:02:26.1 video 1>",
              projected_pixel: [334.95792427878564, 953.4092341255727],
              normalized_projected_pixel: [
                0.23789625303891027, 0.6771372401460033,
              ],
              camera_coordinates: [
                -0.27644717934560115, 0.17844978445597343, 0.43440710201858435,
              ],
              frame_index: 4382,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 149.0,
              time_token: "<TIME 00:02:29.0 video 1>",
              projected_pixel: [-3745.657950090663, -49.71291495991966],
              normalized_projected_pixel: [
                -2.6602684304621182, -0.035307468011306575,
              ],
              camera_coordinates: [
                -1.9252774052568182, -0.014678650194687143, 0.32530902380975657,
              ],
              frame_index: 4470,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
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
          "At the current time <TIME 00:02:35.0 video 1>, based on the last known position of the pressure cooker that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 146.06666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:02:35.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, in which direction is the pressure cooker from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 155.0,
            camera_coordinates: [
              -1.935159056214229, 0.3152414217358399, 0.5769320161592664,
            ],
            world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.935159056214229,
              z: 0.5769320161592664,
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
            "At the current time <TIME 00:02:35.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, and using the current position of the knife (marked in red) in the current frame, where is the pressure cooker relative to knife from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "0ef98aa54c776891",
            object_x_name: "pressure cooker",
            object_x_reference_time_sec: 155.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            object_x_camera_coordinates: [
              -1.935159056214229, 0.3152414217358399, 0.5769320161592664,
            ],
            object_y_assoc_id: "353c0ce699aa17aa",
            object_y_name: "knife",
            object_y_reference_time_sec: 155.0,
            object_y_world_coordinates: [
              -0.16155418958264633, -0.4243080108019701, -0.600283274941124,
            ],
            object_y_projected_pixel: [255.24542599219848, 1232.7870082088812],
            object_y_normalized_projected_pixel: [
              0.18128226277855006, 0.8755589546938076,
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
            "At the current time <TIME 00:02:35.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, and using the current position of the knife (marked in red) in the current frame, how far is the pressure cooker from the knife: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "0ef98aa54c776891",
            object_x_name: "pressure cooker",
            object_x_reference_time_sec: 155.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "353c0ce699aa17aa",
            object_y_name: "knife",
            object_y_pixel: [255.24542599219848, 1232.7870082088812],
            object_y_normalized_projected_pixel: [
              0.18128226277855006, 0.8755589546938076,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.5348957602167639, -0.14679681906416409, 0.14463132036453785,
            ],
            distance_m: 1.548667982380066,
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
  oos_staged_h2p0_3: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "0ef98aa54c776891",
    object_a_name: "pressure cooker",
    query_time_sec: 165.0,
    query_time_in_clip_sec: 165.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 165.0,
    clip_duration_sec: 165.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "0ef98aa54c776891",
      object_name: "pressure cooker",
      query_time_sec: 165.0,
      oos_span_start_sec: 163.0,
      oos_span_end_sec: 203.0,
      oos_duration_sec: 40.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 165.0,
      clip_duration_sec: 165.0,
      anchor_assoc_id: "353c0ce699aa17aa",
      anchor_name: "knife",
      anchor_projected_pixel: [244.65229960295625, 1168.9375011988916],
      anchor_world_coordinates: [
        -0.16155418958264633, -0.4243080108019701, -0.600283274941124,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_3",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:45.0 video 1>, is the previously moved pressure cooker visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-454.73906893079675, 832.9989417200904],
          camera_coordinates: [
            -1.9437847552215712, 0.20355210364782622, 0.6281953413526169,
          ],
          frame_index: 4382,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pressure cooker was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:41.0 video 1>; Point=(0.0742, 0.4441)",
          "<TIME 00:02:42.0 video 1>; Point=(0.0651, 0.433)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 162.0,
          sampled_last_visible_time_in_clip_sec: 162.0,
          sampled_last_visible_time_token: "<TIME 00:02:42.0 video 1>",
          projected_pixel: [91.61869381082658, 609.7109680948438],
          normalized_projected_pixel: [0.06507009503609842, 0.4330333580219061],
          camera_coordinates: [
            -1.3776312742754924, -0.2374052416629176, 1.1781643200452887,
          ],
          frame_index: 4382,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.1342051346383477, -1.265709818198974, -0.4934034739843818,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 161.0,
              time_token: "<TIME 00:02:41.0 video 1>",
              projected_pixel: [104.51395935495543, 625.2366390210079],
              normalized_projected_pixel: [
                0.07422866431459903, 0.4440601129410568,
              ],
              camera_coordinates: [
                -1.453538652849339, -0.2183298972260882, 1.2860904210656192,
              ],
              frame_index: 4382,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 162.0,
              time_token: "<TIME 00:02:42.0 video 1>",
              projected_pixel: [91.61869381082658, 609.7109680948438],
              normalized_projected_pixel: [
                0.06507009503609842, 0.4330333580219061,
              ],
              camera_coordinates: [
                -1.3776312742754924, -0.2374052416629176, 1.1781643200452887,
              ],
              frame_index: 4382,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
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
          "The pressure cooker was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:26.1 video 1>; Point=(0.2379, 0.6771)",
          "<TIME 00:02:29.0 video 1>; Point=(-2.6603, -0.0353)",
        ],
        answer_metadata: {
          last_placement_time_sec: 146.06666666666666,
          last_placement_time_in_clip_sec: 146.06666666666666,
          last_placement_time_token: "<TIME 00:02:26.1 video 1>",
          projected_pixel: [334.95792427878564, 953.4092341255727],
          normalized_projected_pixel: [0.23789625303891027, 0.6771372401460033],
          camera_coordinates: [
            -0.27644717934560115, 0.17844978445597343, 0.43440710201858435,
          ],
          frame_index: 4382,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.1342051346383477, -1.265709818198974, -0.4934034739843818,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 146.06666666666666,
              time_token: "<TIME 00:02:26.1 video 1>",
              projected_pixel: [334.95792427878564, 953.4092341255727],
              normalized_projected_pixel: [
                0.23789625303891027, 0.6771372401460033,
              ],
              camera_coordinates: [
                -0.27644717934560115, 0.17844978445597343, 0.43440710201858435,
              ],
              frame_index: 4382,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 149.0,
              time_token: "<TIME 00:02:29.0 video 1>",
              projected_pixel: [-3745.657950090663, -49.71291495991966],
              normalized_projected_pixel: [
                -2.6602684304621182, -0.035307468011306575,
              ],
              camera_coordinates: [
                -1.9252774052568182, -0.014678650194687143, 0.32530902380975657,
              ],
              frame_index: 4470,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
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
          "At the current time <TIME 00:02:45.0 video 1>, based on the last known position of the pressure cooker that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 146.06666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:02:45.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, in which direction is the pressure cooker from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 165.0,
            camera_coordinates: [
              -1.9437847552215712, 0.20355210364782622, 0.6281953413526169,
            ],
            world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.9437847552215712,
              z: 0.6281953413526169,
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
            "At the current time <TIME 00:02:45.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, and using the current position of the knife (marked in red) in the current frame, where is the pressure cooker relative to knife from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "0ef98aa54c776891",
            object_x_name: "pressure cooker",
            object_x_reference_time_sec: 165.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            object_x_camera_coordinates: [
              -1.9437847552215712, 0.20355210364782622, 0.6281953413526169,
            ],
            object_y_assoc_id: "353c0ce699aa17aa",
            object_y_name: "knife",
            object_y_reference_time_sec: 165.0,
            object_y_world_coordinates: [
              -0.16155418958264633, -0.4243080108019701, -0.600283274941124,
            ],
            object_y_projected_pixel: [244.65229960295625, 1168.9375011988916],
            object_y_normalized_projected_pixel: [
              0.17375873551346324, 0.8302112934651219,
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
            "At the current time <TIME 00:02:45.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, and using the current position of the knife (marked in red) in the current frame, how far is the pressure cooker from the knife: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "0ef98aa54c776891",
            object_x_name: "pressure cooker",
            object_x_reference_time_sec: 165.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "353c0ce699aa17aa",
            object_y_name: "knife",
            object_y_pixel: [244.65229960295625, 1168.9375011988916],
            object_y_normalized_projected_pixel: [
              0.17375873551346324, 0.8302112934651219,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.5257035609019078, -0.20974306552507604, 0.16312268500893767,
            ],
            distance_m: 1.5486679823800655,
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
  oos_staged_h2p0_4: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "c767cfd63d13daa5",
    object_a_name: "cooling rack",
    query_time_sec: 165.0,
    query_time_in_clip_sec: 165.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 165.0,
    clip_duration_sec: 165.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "c767cfd63d13daa5",
      object_name: "cooling rack",
      query_time_sec: 165.0,
      oos_span_start_sec: 163.0,
      oos_span_end_sec: 202.0,
      oos_duration_sec: 39.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 165.0,
      clip_duration_sec: 165.0,
      anchor_assoc_id: "6fe1e0520c4bb8a6",
      anchor_name: "tablespoon",
      anchor_projected_pixel: [383.12419466573584, 1074.4292381270498],
      anchor_world_coordinates: [
        -0.325866267346246, -0.45362324309914204, -0.5563324402657559,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_4",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:45.0 video 1>, is the previously moved cooling rack visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-348.3358274583459, 870.6855019663058],
          camera_coordinates: [
            -2.0499393693217036, 0.3076322576068419, 0.702218521349951,
          ],
          frame_index: 4332,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cooling rack was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:41.0 video 1>; Point=(0.0856, 0.4688)",
          "<TIME 00:02:42.0 video 1>; Point=(0.0767, 0.4597)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 162.0,
          sampled_last_visible_time_in_clip_sec: 162.0,
          sampled_last_visible_time_token: "<TIME 00:02:42.0 video 1>",
          projected_pixel: [107.99932498768715, 647.2726765856066],
          normalized_projected_pixel: [
            0.07670406604239144, 0.45971070780227746,
          ],
          camera_coordinates: [
            -1.4586834612726138, -0.16646744074124425, 1.30457350920169,
          ],
          frame_index: 4332,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 161.0,
              time_token: "<TIME 00:02:41.0 video 1>",
              projected_pixel: [120.58670986131699, 660.0273478318907],
              normalized_projected_pixel: [
                0.08564397007195809, 0.4687694231760587,
              ],
              camera_coordinates: [
                -1.5313322627957866, -0.14513622111915536, 1.4132586236527895,
              ],
              frame_index: 4332,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 162.0,
              time_token: "<TIME 00:02:42.0 video 1>",
              projected_pixel: [107.99932498768715, 647.2726765856066],
              normalized_projected_pixel: [
                0.07670406604239144, 0.45971070780227746,
              ],
              camera_coordinates: [
                -1.4586834612726138, -0.16646744074124425, 1.30457350920169,
              ],
              frame_index: 4332,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
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
          "The cooling rack was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:24.4 video 1>; Point=(0.4585, 0.6847)",
          "<TIME 00:02:25.0 video 1>; Point=(0.4698, 0.6909)",
          "<TIME 00:02:26.0 video 1>; Point=(0.2002, 0.789)",
        ],
        answer_metadata: {
          last_placement_time_sec: 144.4,
          last_placement_time_in_clip_sec: 144.4,
          last_placement_time_token: "<TIME 00:02:24.4 video 1>",
          projected_pixel: [645.5317481385332, 964.1031564708219],
          normalized_projected_pixel: [0.45847425293929917, 0.6847323554480269],
          camera_coordinates: [
            -0.058081953591238245, 0.2500968071087371, 0.6100728608609653,
          ],
          frame_index: 4332,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 144.4,
              time_token: "<TIME 00:02:24.4 video 1>",
              projected_pixel: [645.5317481385332, 964.1031564708219],
              normalized_projected_pixel: [
                0.45847425293929917, 0.6847323554480269,
              ],
              camera_coordinates: [
                -0.058081953591238245, 0.2500968071087371, 0.6100728608609653,
              ],
              frame_index: 4332,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 145.0,
              time_token: "<TIME 00:02:25.0 video 1>",
              projected_pixel: [661.4488975706744, 972.8323941922986],
              normalized_projected_pixel: [
                0.46977904657008124, 0.6909320981479393,
              ],
              camera_coordinates: [
                -0.04113995911958934, 0.2532646766373037, 0.5964156580124288,
              ],
              frame_index: 4350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 146.0,
              time_token: "<TIME 00:02:26.0 video 1>",
              projected_pixel: [281.8984905474457, 1110.890592571001],
              normalized_projected_pixel: [
                0.20021199612744722, 0.788984795860086,
              ],
              camera_coordinates: [
                -0.3463874934894353, 0.324937500523065, 0.44394570024826313,
              ],
              frame_index: 4380,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
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
          "At the current time <TIME 00:02:45.0 video 1>, based on the last known position of the cooling rack that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 144.4,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:02:45.0 video 1>, consider the cooling rack that was moved earlier. Using its last known position to infer its current location, in which direction is the cooling rack from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 165.0,
            camera_coordinates: [
              -2.0499393693217036, 0.3076322576068419, 0.702218521349951,
            ],
            world_coordinates: [
              1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -2.0499393693217036,
              z: 0.702218521349951,
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
            "At the current time <TIME 00:02:45.0 video 1>, consider the cooling rack that was moved earlier. Using its last known position to infer its current location, and using the current position of the tablespoon (marked in red) in the current frame, where is the cooling rack relative to tablespoon from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "c767cfd63d13daa5",
            object_x_name: "cooling rack",
            object_x_reference_time_sec: 165.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
            ],
            object_x_camera_coordinates: [
              -2.0499393693217036, 0.3076322576068419, 0.702218521349951,
            ],
            object_y_assoc_id: "6fe1e0520c4bb8a6",
            object_y_name: "tablespoon",
            object_y_reference_time_sec: 165.0,
            object_y_world_coordinates: [
              -0.325866267346246, -0.45362324309914204, -0.5563324402657559,
            ],
            object_y_projected_pixel: [383.12419466573584, 1074.4292381270498],
            object_y_normalized_projected_pixel: [
              0.2721052518932783, 0.763088947533416,
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
            "At the current time <TIME 00:02:45.0 video 1>, consider the cooling rack that was moved earlier. Using its last known position to infer its current location, and using the current position of the tablespoon (marked in red) in the current frame, how far is the cooling rack from the tablespoon: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "c767cfd63d13daa5",
            object_x_name: "cooling rack",
            object_x_reference_time_sec: 165.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "6fe1e0520c4bb8a6",
            object_y_name: "tablespoon",
            object_y_pixel: [383.12419466573584, 1074.4292381270498],
            object_y_normalized_projected_pixel: [
              0.2721052518932783, 0.763088947533416,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.7693259537194372, -0.006795747111626782, 0.20371816362650885,
            ],
            distance_m: 1.7810282431436506,
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
  oos_staged_h2p0_5: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "698fd6c88603d750",
    object_a_name: "spatula",
    query_time_sec: 270.0,
    query_time_in_clip_sec: 270.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 270.0,
    clip_duration_sec: 270.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "698fd6c88603d750",
      object_name: "spatula",
      query_time_sec: 270.0,
      oos_span_start_sec: 268.0,
      oos_span_end_sec: 272.0,
      oos_duration_sec: 4.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 270.0,
      clip_duration_sec: 270.0,
      anchor_assoc_id: "383087b29e839a16",
      anchor_name: "chili",
      anchor_projected_pixel: [749.2284943241184, 908.8447338361622],
      anchor_world_coordinates: [
        -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_5",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:04:30.0 video 1>, is the previously moved spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1315.1804551328455, 1060.091572473043],
          camera_coordinates: [
            0.36109093108900536, 0.20388832991547312, 0.27720078631186895,
          ],
          frame_index: 7996,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:27.0 video 1>; Point=(0.8151, 0.7784)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 267.0,
          sampled_last_visible_time_in_clip_sec: 267.0,
          sampled_last_visible_time_token: "<TIME 00:04:27.0 video 1>",
          projected_pixel: [1147.607471879886, 1095.9565094226805],
          normalized_projected_pixel: [0.8150621249146917, 0.7783782027149719],
          camera_coordinates: [
            0.28658935564506577, 0.24571430260102622, 0.34712129299355354,
          ],
          frame_index: 7996,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -0.5401432115596125, -0.3173409067773391, -0.40884996748381924,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 267.0,
              time_token: "<TIME 00:04:27.0 video 1>",
              projected_pixel: [1147.607471879886, 1095.9565094226805],
              normalized_projected_pixel: [
                0.8150621249146917, 0.7783782027149719,
              ],
              camera_coordinates: [
                0.28658935564506577, 0.24571430260102622, 0.34712129299355354,
              ],
              frame_index: 7996,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.5401432115596125, -0.3173409067773391, -0.40884996748381924,
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
          "<TIME 00:04:26.5 video 1>; Point=(0.6575, 0.7527)",
          "<TIME 00:04:27.0 video 1>; Point=(0.8151, 0.7784)",
          "<TIME 00:04:28.0 video 1>; Point=(0.9482, 0.7814)",
          "<TIME 00:04:29.0 video 1>; Point=(0.9759, 0.7468)",
        ],
        answer_metadata: {
          last_placement_time_sec: 266.53333333333336,
          last_placement_time_in_clip_sec: 266.53333333333336,
          last_placement_time_token: "<TIME 00:04:26.5 video 1>",
          projected_pixel: [925.7224652103945, 1059.781404566879],
          normalized_projected_pixel: [0.6574733417687461, 0.7526856566526129],
          camera_coordinates: [
            0.15481554450196197, 0.23959121342552409, 0.4070253017128677,
          ],
          frame_index: 7996,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -0.5401432115596125, -0.3173409067773391, -0.40884996748381924,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 266.53333333333336,
              time_token: "<TIME 00:04:26.5 video 1>",
              projected_pixel: [925.7224652103945, 1059.781404566879],
              normalized_projected_pixel: [
                0.6574733417687461, 0.7526856566526129,
              ],
              camera_coordinates: [
                0.15481554450196197, 0.23959121342552409, 0.4070253017128677,
              ],
              frame_index: 7996,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.5401432115596125, -0.3173409067773391, -0.40884996748381924,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 267.0,
              time_token: "<TIME 00:04:27.0 video 1>",
              projected_pixel: [1147.607471879886, 1095.9565094226805],
              normalized_projected_pixel: [
                0.8150621249146917, 0.7783782027149719,
              ],
              camera_coordinates: [
                0.28658935564506577, 0.24571430260102622, 0.34712129299355354,
              ],
              frame_index: 8010,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.5401432115596125, -0.3173409067773391, -0.40884996748381924,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 268.0,
              time_token: "<TIME 00:04:28.0 video 1>",
              projected_pixel: [1335.0597486978827, 1100.2711792112113],
              normalized_projected_pixel: [
                0.9481958442456553, 0.781442598871599,
              ],
              camera_coordinates: [
                0.39460722611465576, 0.24104488469483143, 0.26466756954501175,
              ],
              frame_index: 8040,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.5401432115596125, -0.3173409067773391, -0.40884996748381924,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 269.0,
              time_token: "<TIME 00:04:29.0 video 1>",
              projected_pixel: [1374.0690841066735, 1051.4744825759094],
              normalized_projected_pixel: [
                0.9759013381439442, 0.7467858541022084,
              ],
              camera_coordinates: [
                0.40204172615416456, 0.202048577505291, 0.24454279820900318,
              ],
              frame_index: 8070,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.5401432115596125, -0.3173409067773391, -0.40884996748381924,
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
          "At the current time <TIME 00:04:30.0 video 1>, based on the last known position of the spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 266.53333333333336,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the hob and the sink",
          raw_correct_fixture: "P04_counter.005",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:04:30.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the spatula from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 270.0,
            camera_coordinates: [
              0.36109093108900536, 0.20388832991547312, 0.27720078631186895,
            ],
            world_coordinates: [
              -0.5401432115596125, -0.3173409067773391, -0.40884996748381924,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.36109093108900536,
              z: 0.27720078631186895,
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
            "At the current time <TIME 00:04:30.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the chili (marked in red) in the current frame, where is the spatula relative to chili from your viewpoint?",
          choices: ["Front-right", "Back-left", "Front-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "698fd6c88603d750",
            object_x_name: "spatula",
            object_x_reference_time_sec: 270.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.5401432115596125, -0.3173409067773391, -0.40884996748381924,
            ],
            object_x_camera_coordinates: [
              0.36109093108900536, 0.20388832991547312, 0.27720078631186895,
            ],
            object_y_assoc_id: "383087b29e839a16",
            object_y_name: "chili",
            object_y_reference_time_sec: 270.0,
            object_y_world_coordinates: [
              -0.24498972687790166, -0.5697906655790432, -0.5772181532547995,
            ],
            object_y_projected_pixel: [749.2284943241184, 908.8447338361622],
            object_y_normalized_projected_pixel: [
              0.5321225101733795, 0.6454863166450016,
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
            "At the current time <TIME 00:04:30.0 video 1>, consider the spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the chili (marked in red) in the current frame, how far is the spatula from the chili: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "698fd6c88603d750",
            object_x_name: "spatula",
            object_x_reference_time_sec: 270.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "383087b29e839a16",
            object_y_name: "chili",
            object_y_pixel: [749.2284943241184, 908.8447338361622],
            object_y_normalized_projected_pixel: [
              0.5321225101733795, 0.6454863166450016,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.3191514880367158, 0.02815640491523891, -0.27666559374957733,
            ],
            distance_m: 0.4233134845697772,
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
  oos_staged_h2p0_6: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "0ef98aa54c776891",
    object_a_name: "pressure cooker",
    query_time_sec: 272.0,
    query_time_in_clip_sec: 272.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 272.0,
    clip_duration_sec: 272.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "0ef98aa54c776891",
      object_name: "pressure cooker",
      query_time_sec: 272.0,
      oos_span_start_sec: 270.0,
      oos_span_end_sec: 290.0,
      oos_duration_sec: 20.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 272.0,
      clip_duration_sec: 272.0,
      anchor_assoc_id: "676223f5e13ff2a2",
      anchor_name: "tablespoon2",
      anchor_projected_pixel: [962.0456794106785, 995.0965085283048],
      anchor_world_coordinates: [
        -0.4410254171160872, -0.6190215973690787, -0.5634809081839869,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_6",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:04:32.0 video 1>, is the previously moved pressure cooker visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-22.14075577453366, 705.4060515807569],
          camera_coordinates: [
            -1.41749119935602, -0.018384754072130832, 0.8655306981758367,
          ],
          frame_index: 4382,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pressure cooker was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:28.0 video 1>; Point=(0.0911, 0.4034)",
          "<TIME 00:04:29.0 video 1>; Point=(0.0517, 0.3781)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 269.0,
          sampled_last_visible_time_in_clip_sec: 269.0,
          sampled_last_visible_time_token: "<TIME 00:04:29.0 video 1>",
          projected_pixel: [72.8009263177463, 532.301877525265],
          normalized_projected_pixel: [0.05170520335067209, 0.3780553107423757],
          camera_coordinates: [
            -1.2689292289130467, -0.36758023128639195, 1.0148507623017966,
          ],
          frame_index: 4382,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.1342051346383477, -1.265709818198974, -0.4934034739843818,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 268.0,
              time_token: "<TIME 00:04:28.0 video 1>",
              projected_pixel: [128.22947406483672, 568.0474145641239],
              normalized_projected_pixel: [
                0.09107206964832154, 0.40344276602565615,
              ],
              camera_coordinates: [
                -1.2279371219558433, -0.3141680269570405, 1.1416417614731265,
              ],
              frame_index: 4382,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 269.0,
              time_token: "<TIME 00:04:29.0 video 1>",
              projected_pixel: [72.8009263177463, 532.301877525265],
              normalized_projected_pixel: [
                0.05170520335067209, 0.3780553107423757,
              ],
              camera_coordinates: [
                -1.2689292289130467, -0.36758023128639195, 1.0148507623017966,
              ],
              frame_index: 4382,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
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
          "The pressure cooker was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:26.1 video 1>; Point=(0.2379, 0.6771)",
          "<TIME 00:02:29.0 video 1>; Point=(-2.6603, -0.0353)",
        ],
        answer_metadata: {
          last_placement_time_sec: 146.06666666666666,
          last_placement_time_in_clip_sec: 146.06666666666666,
          last_placement_time_token: "<TIME 00:02:26.1 video 1>",
          projected_pixel: [334.95792427878564, 953.4092341255727],
          normalized_projected_pixel: [0.23789625303891027, 0.6771372401460033],
          camera_coordinates: [
            -0.27644717934560115, 0.17844978445597343, 0.43440710201858435,
          ],
          frame_index: 4382,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.1342051346383477, -1.265709818198974, -0.4934034739843818,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 146.06666666666666,
              time_token: "<TIME 00:02:26.1 video 1>",
              projected_pixel: [334.95792427878564, 953.4092341255727],
              normalized_projected_pixel: [
                0.23789625303891027, 0.6771372401460033,
              ],
              camera_coordinates: [
                -0.27644717934560115, 0.17844978445597343, 0.43440710201858435,
              ],
              frame_index: 4382,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 149.0,
              time_token: "<TIME 00:02:29.0 video 1>",
              projected_pixel: [-3745.657950090663, -49.71291495991966],
              normalized_projected_pixel: [
                -2.6602684304621182, -0.035307468011306575,
              ],
              camera_coordinates: [
                -1.9252774052568182, -0.014678650194687143, 0.32530902380975657,
              ],
              frame_index: 4470,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
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
          "At the current time <TIME 00:04:32.0 video 1>, based on the last known position of the pressure cooker that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 146.06666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:04:32.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, in which direction is the pressure cooker from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 272.0,
            camera_coordinates: [
              -1.41749119935602, -0.018384754072130832, 0.8655306981758367,
            ],
            world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.41749119935602,
              z: 0.8655306981758367,
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
            "At the current time <TIME 00:04:32.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, and using the current position of the tablespoon2 (marked in red) in the current frame, where is the pressure cooker relative to tablespoon2 from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "0ef98aa54c776891",
            object_x_name: "pressure cooker",
            object_x_reference_time_sec: 272.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            object_x_camera_coordinates: [
              -1.41749119935602, -0.018384754072130832, 0.8655306981758367,
            ],
            object_y_assoc_id: "676223f5e13ff2a2",
            object_y_name: "tablespoon2",
            object_y_reference_time_sec: 272.0,
            object_y_world_coordinates: [
              -0.4410254171160872, -0.6190215973690787, -0.5634809081839869,
            ],
            object_y_projected_pixel: [962.0456794106785, 995.0965085283048],
            object_y_normalized_projected_pixel: [
              0.6832710791269023, 0.7067446793524892,
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
            "At the current time <TIME 00:04:32.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, and using the current position of the tablespoon2 (marked in red) in the current frame, how far is the pressure cooker from the tablespoon2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "0ef98aa54c776891",
            object_x_name: "pressure cooker",
            object_x_reference_time_sec: 272.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "676223f5e13ff2a2",
            object_y_name: "tablespoon2",
            object_y_pixel: [962.0456794106785, 995.0965085283048],
            object_y_normalized_projected_pixel: [
              0.6832710791269023, 0.7067446793524892,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.6486925832509947, -0.26807652622130895, 0.33825365474299585,
            ],
            distance_m: 1.7042499209108728,
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
  oos_staged_h2p0_7: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "10fa332ca686f6d9",
    object_a_name: "open notebook",
    query_time_sec: 272.0,
    query_time_in_clip_sec: 272.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 272.0,
    clip_duration_sec: 272.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "10fa332ca686f6d9",
      object_name: "open notebook",
      query_time_sec: 272.0,
      oos_span_start_sec: 270.0,
      oos_span_end_sec: 290.0,
      oos_duration_sec: 20.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 272.0,
      clip_duration_sec: 272.0,
      anchor_assoc_id: "676223f5e13ff2a2",
      anchor_name: "tablespoon2",
      anchor_projected_pixel: [962.0456794106785, 995.0965085283048],
      anchor_world_coordinates: [
        -0.4410254171160872, -0.6190215973690787, -0.5634809081839869,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_7",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:04:32.0 video 1>, is the previously moved open notebook visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-51.06479903549075, 837.3414670124093],
          camera_coordinates: [
            -1.4961203845150657, 0.2430847538468854, 0.7681912032194324,
          ],
          frame_index: 4252,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The open notebook was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:28.0 video 1>; Point=(0.047, 0.4897)",
          "<TIME 00:04:29.0 video 1>; Point=(0.0196, 0.4742)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 269.0,
          sampled_last_visible_time_in_clip_sec: 269.0,
          sampled_last_visible_time_token: "<TIME 00:04:29.0 video 1>",
          projected_pixel: [27.544053279051354, 667.6038863354746],
          normalized_projected_pixel: [
            0.019562537840235338, 0.4741504874541723,
          ],
          camera_coordinates: [
            -1.367051938594827, -0.09581950436978301, 0.9915726447014123,
          ],
          frame_index: 4252,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2502712840415624, -1.039177731622999, -0.6320962723655575,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 268.0,
              time_token: "<TIME 00:04:28.0 video 1>",
              projected_pixel: [66.18720262429088, 689.4728247321268],
              normalized_projected_pixel: [
                0.047007956409297495, 0.4896824039290673,
              ],
              camera_coordinates: [
                -1.3423866562469993, -0.05403592567976931, 1.084576679381142,
              ],
              frame_index: 4252,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 269.0,
              time_token: "<TIME 00:04:29.0 video 1>",
              projected_pixel: [27.544053279051354, 667.6038863354746],
              normalized_projected_pixel: [
                0.019562537840235338, 0.4741504874541723,
              ],
              camera_coordinates: [
                -1.367051938594827, -0.09581950436978301, 0.9915726447014123,
              ],
              frame_index: 4252,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
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
          "The open notebook was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:21.7 video 1>; Point=(0.5323, 0.8738)",
          "<TIME 00:02:22.0 video 1>; Point=(0.5481, 0.9098)",
          "<TIME 00:02:23.0 video 1>; Point=(0.6043, 1.0276)",
          "<TIME 00:02:24.0 video 1>; Point=(0.5599, 0.8873)",
        ],
        answer_metadata: {
          last_placement_time_sec: 141.73333333333332,
          last_placement_time_in_clip_sec: 141.73333333333332,
          last_placement_time_token: "<TIME 00:02:21.7 video 1>",
          projected_pixel: [749.4322715449124, 1230.302853727999],
          normalized_projected_pixel: [0.532267238313148, 0.8737946404318175],
          camera_coordinates: [
            0.039698317184269305, 0.4449196378051928, 0.48348302984027314,
          ],
          frame_index: 4252,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2502712840415624, -1.039177731622999, -0.6320962723655575,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 141.73333333333332,
              time_token: "<TIME 00:02:21.7 video 1>",
              projected_pixel: [749.4322715449124, 1230.302853727999],
              normalized_projected_pixel: [
                0.532267238313148, 0.8737946404318175,
              ],
              camera_coordinates: [
                0.039698317184269305, 0.4449196378051928, 0.48348302984027314,
              ],
              frame_index: 4252,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 142.0,
              time_token: "<TIME 00:02:22.0 video 1>",
              projected_pixel: [771.7441767037479, 1280.961234207019],
              normalized_projected_pixel: [
                0.5481137618634574, 0.9097736038402124,
              ],
              camera_coordinates: [
                0.05828678217004746, 0.4836995491566043, 0.46450864507155687,
              ],
              frame_index: 4260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [850.8387571993215, 1446.9018467818823],
              normalized_projected_pixel: [
                0.6042888900563363, 1.0276291525439505,
              ],
              camera_coordinates: [
                0.11546731037388303, 0.5756603197314528, 0.3241454276154915,
              ],
              frame_index: 4290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 144.0,
              time_token: "<TIME 00:02:24.0 video 1>",
              projected_pixel: [788.2764066422145, 1249.3611865890016],
              normalized_projected_pixel: [
                0.5598554024447546, 0.8873303882024159,
              ],
              camera_coordinates: [
                0.06903763789807993, 0.43500439370171273, 0.4501742203859529,
              ],
              frame_index: 4320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
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
          "At the current time <TIME 00:04:32.0 video 1>, based on the last known position of the open notebook that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 141.73333333333332,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:04:32.0 video 1>, consider the open notebook that was moved earlier. Using its last known position to infer its current location, in which direction is the open notebook from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 272.0,
            camera_coordinates: [
              -1.4961203845150657, 0.2430847538468854, 0.7681912032194324,
            ],
            world_coordinates: [
              1.2502712840415624, -1.039177731622999, -0.6320962723655575,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.4961203845150657,
              z: 0.7681912032194324,
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
            "At the current time <TIME 00:04:32.0 video 1>, consider the open notebook that was moved earlier. Using its last known position to infer its current location, and using the current position of the tablespoon2 (marked in red) in the current frame, where is the open notebook relative to tablespoon2 from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "10fa332ca686f6d9",
            object_x_name: "open notebook",
            object_x_reference_time_sec: 272.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.2502712840415624, -1.039177731622999, -0.6320962723655575,
            ],
            object_x_camera_coordinates: [
              -1.4961203845150657, 0.2430847538468854, 0.7681912032194324,
            ],
            object_y_assoc_id: "676223f5e13ff2a2",
            object_y_name: "tablespoon2",
            object_y_reference_time_sec: 272.0,
            object_y_world_coordinates: [
              -0.4410254171160872, -0.6190215973690787, -0.5634809081839869,
            ],
            object_y_projected_pixel: [962.0456794106785, 995.0965085283048],
            object_y_normalized_projected_pixel: [
              0.6832710791269023, 0.7067446793524892,
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
            "At the current time <TIME 00:04:32.0 video 1>, consider the open notebook that was moved earlier. Using its last known position to infer its current location, and using the current position of the tablespoon2 (marked in red) in the current frame, how far is the open notebook from the tablespoon2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "10fa332ca686f6d9",
            object_x_name: "open notebook",
            object_x_reference_time_sec: 272.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "676223f5e13ff2a2",
            object_y_name: "tablespoon2",
            object_y_pixel: [962.0456794106785, 995.0965085283048],
            object_y_normalized_projected_pixel: [
              0.6832710791269023, 0.7067446793524892,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.7273217684100404, -0.006607018302292711, 0.24091415978659148,
            ],
            distance_m: 1.7440538342321075,
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
  oos_staged_h2p0_8: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "c767cfd63d13daa5",
    object_a_name: "cooling rack",
    query_time_sec: 272.0,
    query_time_in_clip_sec: 272.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 272.0,
    clip_duration_sec: 272.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "c767cfd63d13daa5",
      object_name: "cooling rack",
      query_time_sec: 272.0,
      oos_span_start_sec: 270.0,
      oos_span_end_sec: 290.0,
      oos_duration_sec: 20.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 272.0,
      clip_duration_sec: 272.0,
      anchor_assoc_id: "353c0ce699aa17aa",
      anchor_name: "knife",
      anchor_projected_pixel: [678.4269340681802, 1319.6662788497238],
      anchor_world_coordinates: [
        -0.16155418958264633, -0.4243080108019701, -0.600283274941124,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_8",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:04:32.0 video 1>, is the previously moved cooling rack visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-15.066327510503925, 748.6376332659295],
          camera_coordinates: [
            -1.523622271770845, 0.0716050076850395, 0.9561891228630385,
          ],
          frame_index: 4332,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cooling rack was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:28.0 video 1>; Point=(0.0946, 0.4336)",
          "<TIME 00:04:29.0 video 1>; Point=(0.0591, 0.4088)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 269.0,
          sampled_last_visible_time_in_clip_sec: 269.0,
          sampled_last_visible_time_token: "<TIME 00:04:29.0 video 1>",
          projected_pixel: [83.22640091663936, 575.5325097154715],
          normalized_projected_pixel: [
            0.059109659741931365, 0.40875888474110195,
          ],
          camera_coordinates: [
            -1.3653026181960382, -0.3071936529163223, 1.1358736638975793,
          ],
          frame_index: 4332,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 268.0,
              time_token: "<TIME 00:04:28.0 video 1>",
              projected_pixel: [133.19852346170762, 610.481596867997],
              normalized_projected_pixel: [
                0.09460122404950826, 0.4335806795937479,
              ],
              camera_coordinates: [
                -1.3259310698968723, -0.24365569704085857, 1.2556860915229826,
              ],
              frame_index: 4332,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 269.0,
              time_token: "<TIME 00:04:29.0 video 1>",
              projected_pixel: [83.22640091663936, 575.5325097154715],
              normalized_projected_pixel: [
                0.059109659741931365, 0.40875888474110195,
              ],
              camera_coordinates: [
                -1.3653026181960382, -0.3071936529163223, 1.1358736638975793,
              ],
              frame_index: 4332,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
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
          "The cooling rack was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:24.4 video 1>; Point=(0.4585, 0.6847)",
          "<TIME 00:02:25.0 video 1>; Point=(0.4698, 0.6909)",
          "<TIME 00:02:26.0 video 1>; Point=(0.2002, 0.789)",
        ],
        answer_metadata: {
          last_placement_time_sec: 144.4,
          last_placement_time_in_clip_sec: 144.4,
          last_placement_time_token: "<TIME 00:02:24.4 video 1>",
          projected_pixel: [645.5317481385332, 964.1031564708219],
          normalized_projected_pixel: [0.45847425293929917, 0.6847323554480269],
          camera_coordinates: [
            -0.058081953591238245, 0.2500968071087371, 0.6100728608609653,
          ],
          frame_index: 4332,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 144.4,
              time_token: "<TIME 00:02:24.4 video 1>",
              projected_pixel: [645.5317481385332, 964.1031564708219],
              normalized_projected_pixel: [
                0.45847425293929917, 0.6847323554480269,
              ],
              camera_coordinates: [
                -0.058081953591238245, 0.2500968071087371, 0.6100728608609653,
              ],
              frame_index: 4332,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 145.0,
              time_token: "<TIME 00:02:25.0 video 1>",
              projected_pixel: [661.4488975706744, 972.8323941922986],
              normalized_projected_pixel: [
                0.46977904657008124, 0.6909320981479393,
              ],
              camera_coordinates: [
                -0.04113995911958934, 0.2532646766373037, 0.5964156580124288,
              ],
              frame_index: 4350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 146.0,
              time_token: "<TIME 00:02:26.0 video 1>",
              projected_pixel: [281.8984905474457, 1110.890592571001],
              normalized_projected_pixel: [
                0.20021199612744722, 0.788984795860086,
              ],
              camera_coordinates: [
                -0.3463874934894353, 0.324937500523065, 0.44394570024826313,
              ],
              frame_index: 4380,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
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
          "At the current time <TIME 00:04:32.0 video 1>, based on the last known position of the cooling rack that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 144.4,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:04:32.0 video 1>, consider the cooling rack that was moved earlier. Using its last known position to infer its current location, in which direction is the cooling rack from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 272.0,
            camera_coordinates: [
              -1.523622271770845, 0.0716050076850395, 0.9561891228630385,
            ],
            world_coordinates: [
              1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.523622271770845,
              z: 0.9561891228630385,
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
            "At the current time <TIME 00:04:32.0 video 1>, consider the cooling rack that was moved earlier. Using its last known position to infer its current location, and using the current position of the knife (marked in red) in the current frame, where is the cooling rack relative to knife from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "c767cfd63d13daa5",
            object_x_name: "cooling rack",
            object_x_reference_time_sec: 272.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
            ],
            object_x_camera_coordinates: [
              -1.523622271770845, 0.0716050076850395, 0.9561891228630385,
            ],
            object_y_assoc_id: "353c0ce699aa17aa",
            object_y_name: "knife",
            object_y_reference_time_sec: 272.0,
            object_y_world_coordinates: [
              -0.16155418958264633, -0.4243080108019701, -0.600283274941124,
            ],
            object_y_projected_pixel: [678.4269340681802, 1319.6662788497238],
            object_y_normalized_projected_pixel: [
              0.4818373111279689, 0.9372629821375879,
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
            "At the current time <TIME 00:04:32.0 video 1>, consider the cooling rack that was moved earlier. Using its last known position to infer its current location, and using the current position of the knife (marked in red) in the current frame, how far is the cooling rack from the knife: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "c767cfd63d13daa5",
            object_x_name: "cooling rack",
            object_x_reference_time_sec: 272.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "353c0ce699aa17aa",
            object_y_name: "knife",
            object_y_pixel: [678.4269340681802, 1319.6662788497238],
            object_y_normalized_projected_pixel: [
              0.4818373111279689, 0.9372629821375879,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.50561228489467, -0.359969739326678, 0.5778558209748474,
            ],
            distance_m: 1.6523812863534797,
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
  oos_staged_h2p0_9: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "0ef98aa54c776891",
    object_a_name: "pressure cooker",
    query_time_sec: 294.0,
    query_time_in_clip_sec: 294.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 294.0,
    clip_duration_sec: 294.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "0ef98aa54c776891",
      object_name: "pressure cooker",
      query_time_sec: 294.0,
      oos_span_start_sec: 292.0,
      oos_span_end_sec: 332.0,
      oos_duration_sec: 40.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 294.0,
      clip_duration_sec: 294.0,
      anchor_assoc_id: "994ac467e1a4013e",
      anchor_name: "bottle of oil",
      anchor_projected_pixel: [576.8755323735359, 750.51576133457],
      anchor_world_coordinates: [
        -0.17209531871667047, -0.7823704289812383, -0.5028501429126884,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_9",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:04:54.0 video 1>, is the previously moved pressure cooker visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-62.259097722135834, 681.1464095434173],
          camera_coordinates: [
            -1.5145580551516447, -0.066214988076716, 0.7617736952529596,
          ],
          frame_index: 4382,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pressure cooker was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:51.0 video 1>; Point=(0.0481, 0.4219)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 291.0,
          sampled_last_visible_time_in_clip_sec: 291.0,
          sampled_last_visible_time_token: "<TIME 00:04:51.0 video 1>",
          projected_pixel: [67.77006131035694, 594.0058619643007],
          normalized_projected_pixel: [0.04813214581701487, 0.4218791633269181],
          camera_coordinates: [
            -1.5099832821785146, -0.28753054269504075, 1.2111568430867354,
          ],
          frame_index: 4382,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.1342051346383477, -1.265709818198974, -0.4934034739843818,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 291.0,
              time_token: "<TIME 00:04:51.0 video 1>",
              projected_pixel: [67.77006131035694, 594.0058619643007],
              normalized_projected_pixel: [
                0.04813214581701487, 0.4218791633269181,
              ],
              camera_coordinates: [
                -1.5099832821785146, -0.28753054269504075, 1.2111568430867354,
              ],
              frame_index: 4382,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
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
          "The pressure cooker was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:26.1 video 1>; Point=(0.2379, 0.6771)",
          "<TIME 00:02:29.0 video 1>; Point=(-2.6603, -0.0353)",
        ],
        answer_metadata: {
          last_placement_time_sec: 146.06666666666666,
          last_placement_time_in_clip_sec: 146.06666666666666,
          last_placement_time_token: "<TIME 00:02:26.1 video 1>",
          projected_pixel: [334.95792427878564, 953.4092341255727],
          normalized_projected_pixel: [0.23789625303891027, 0.6771372401460033],
          camera_coordinates: [
            -0.27644717934560115, 0.17844978445597343, 0.43440710201858435,
          ],
          frame_index: 4382,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.1342051346383477, -1.265709818198974, -0.4934034739843818,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 146.06666666666666,
              time_token: "<TIME 00:02:26.1 video 1>",
              projected_pixel: [334.95792427878564, 953.4092341255727],
              normalized_projected_pixel: [
                0.23789625303891027, 0.6771372401460033,
              ],
              camera_coordinates: [
                -0.27644717934560115, 0.17844978445597343, 0.43440710201858435,
              ],
              frame_index: 4382,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 149.0,
              time_token: "<TIME 00:02:29.0 video 1>",
              projected_pixel: [-3745.657950090663, -49.71291495991966],
              normalized_projected_pixel: [
                -2.6602684304621182, -0.035307468011306575,
              ],
              camera_coordinates: [
                -1.9252774052568182, -0.014678650194687143, 0.32530902380975657,
              ],
              frame_index: 4470,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
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
          "At the current time <TIME 00:04:54.0 video 1>, based on the last known position of the pressure cooker that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 146.06666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:04:54.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, in which direction is the pressure cooker from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 294.0,
            camera_coordinates: [
              -1.5145580551516447, -0.066214988076716, 0.7617736952529596,
            ],
            world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.5145580551516447,
              z: 0.7617736952529596,
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
            "At the current time <TIME 00:04:54.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, and using the current position of the bottle of oil (marked in red) in the current frame, where is the pressure cooker relative to bottle of oil from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "0ef98aa54c776891",
            object_x_name: "pressure cooker",
            object_x_reference_time_sec: 294.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            object_x_camera_coordinates: [
              -1.5145580551516447, -0.066214988076716, 0.7617736952529596,
            ],
            object_y_assoc_id: "994ac467e1a4013e",
            object_y_name: "bottle of oil",
            object_y_reference_time_sec: 294.0,
            object_y_world_coordinates: [
              -0.17209531871667047, -0.7823704289812383, -0.5028501429126884,
            ],
            object_y_projected_pixel: [576.8755323735359, 750.51576133457],
            object_y_normalized_projected_pixel: [
              0.4097127360607499, 0.5330367623114843,
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
            "At the current time <TIME 00:04:54.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, and using the current position of the bottle of oil (marked in red) in the current frame, how far is the pressure cooker from the bottle of oil: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "0ef98aa54c776891",
            object_x_name: "pressure cooker",
            object_x_reference_time_sec: 294.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "994ac467e1a4013e",
            object_y_name: "bottle of oil",
            object_y_pixel: [576.8755323735359, 750.51576133457],
            object_y_normalized_projected_pixel: [
              0.4097127360607499, 0.5330367623114843,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.383197827763645, -0.10227382394835627, 0.12818312433255086,
            ],
            distance_m: 1.3928844457307792,
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
  oos_staged_h2p0_10: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "10fa332ca686f6d9",
    object_a_name: "open notebook",
    query_time_sec: 294.0,
    query_time_in_clip_sec: 294.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 294.0,
    clip_duration_sec: 294.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "10fa332ca686f6d9",
      object_name: "open notebook",
      query_time_sec: 294.0,
      oos_span_start_sec: 292.0,
      oos_span_end_sec: 332.0,
      oos_duration_sec: 40.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 294.0,
      clip_duration_sec: 294.0,
      anchor_assoc_id: "7cb2e40a420c0c25",
      anchor_name: "onion piece",
      anchor_projected_pixel: [770.8829768112525, 1074.1708833380908],
      anchor_world_coordinates: [
        -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_10",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:04:54.0 video 1>, is the previously moved open notebook visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-101.82189955089336, 821.7078336431587],
          camera_coordinates: [
            -1.5709981780111308, 0.2091125520123609, 0.6908294367914056,
          ],
          frame_index: 4252,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The open notebook was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:51.0 video 1>; Point=(0.0086, 0.4967)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 291.0,
          sampled_last_visible_time_in_clip_sec: 291.0,
          sampled_last_visible_time_token: "<TIME 00:04:51.0 video 1>",
          projected_pixel: [12.137771908703598, 699.3686583179847],
          normalized_projected_pixel: [
            0.00862057663970426, 0.49671069482811414,
          ],
          camera_coordinates: [
            -1.63087369497181, -0.03674799996324804, 1.130426093280982,
          ],
          frame_index: 4252,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2502712840415624, -1.039177731622999, -0.6320962723655575,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 291.0,
              time_token: "<TIME 00:04:51.0 video 1>",
              projected_pixel: [12.137771908703598, 699.3686583179847],
              normalized_projected_pixel: [
                0.00862057663970426, 0.49671069482811414,
              ],
              camera_coordinates: [
                -1.63087369497181, -0.03674799996324804, 1.130426093280982,
              ],
              frame_index: 4252,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
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
          "The open notebook was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:21.7 video 1>; Point=(0.5323, 0.8738)",
          "<TIME 00:02:22.0 video 1>; Point=(0.5481, 0.9098)",
          "<TIME 00:02:23.0 video 1>; Point=(0.6043, 1.0276)",
          "<TIME 00:02:24.0 video 1>; Point=(0.5599, 0.8873)",
        ],
        answer_metadata: {
          last_placement_time_sec: 141.73333333333332,
          last_placement_time_in_clip_sec: 141.73333333333332,
          last_placement_time_token: "<TIME 00:02:21.7 video 1>",
          projected_pixel: [749.4322715449124, 1230.302853727999],
          normalized_projected_pixel: [0.532267238313148, 0.8737946404318175],
          camera_coordinates: [
            0.039698317184269305, 0.4449196378051928, 0.48348302984027314,
          ],
          frame_index: 4252,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2502712840415624, -1.039177731622999, -0.6320962723655575,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 141.73333333333332,
              time_token: "<TIME 00:02:21.7 video 1>",
              projected_pixel: [749.4322715449124, 1230.302853727999],
              normalized_projected_pixel: [
                0.532267238313148, 0.8737946404318175,
              ],
              camera_coordinates: [
                0.039698317184269305, 0.4449196378051928, 0.48348302984027314,
              ],
              frame_index: 4252,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 142.0,
              time_token: "<TIME 00:02:22.0 video 1>",
              projected_pixel: [771.7441767037479, 1280.961234207019],
              normalized_projected_pixel: [
                0.5481137618634574, 0.9097736038402124,
              ],
              camera_coordinates: [
                0.05828678217004746, 0.4836995491566043, 0.46450864507155687,
              ],
              frame_index: 4260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [850.8387571993215, 1446.9018467818823],
              normalized_projected_pixel: [
                0.6042888900563363, 1.0276291525439505,
              ],
              camera_coordinates: [
                0.11546731037388303, 0.5756603197314528, 0.3241454276154915,
              ],
              frame_index: 4290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 144.0,
              time_token: "<TIME 00:02:24.0 video 1>",
              projected_pixel: [788.2764066422145, 1249.3611865890016],
              normalized_projected_pixel: [
                0.5598554024447546, 0.8873303882024159,
              ],
              camera_coordinates: [
                0.06903763789807993, 0.43500439370171273, 0.4501742203859529,
              ],
              frame_index: 4320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
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
          "At the current time <TIME 00:04:54.0 video 1>, based on the last known position of the open notebook that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 141.73333333333332,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:04:54.0 video 1>, consider the open notebook that was moved earlier. Using its last known position to infer its current location, in which direction is the open notebook from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 294.0,
            camera_coordinates: [
              -1.5709981780111308, 0.2091125520123609, 0.6908294367914056,
            ],
            world_coordinates: [
              1.2502712840415624, -1.039177731622999, -0.6320962723655575,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.5709981780111308,
              z: 0.6908294367914056,
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
            "At the current time <TIME 00:04:54.0 video 1>, consider the open notebook that was moved earlier. Using its last known position to infer its current location, and using the current position of the onion piece (marked in red) in the current frame, where is the open notebook relative to onion piece from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "10fa332ca686f6d9",
            object_x_name: "open notebook",
            object_x_reference_time_sec: 294.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.2502712840415624, -1.039177731622999, -0.6320962723655575,
            ],
            object_x_camera_coordinates: [
              -1.5709981780111308, 0.2091125520123609, 0.6908294367914056,
            ],
            object_y_assoc_id: "7cb2e40a420c0c25",
            object_y_name: "onion piece",
            object_y_reference_time_sec: 294.0,
            object_y_world_coordinates: [
              -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
            ],
            object_y_projected_pixel: [770.8829768112525, 1074.1708833380908],
            object_y_normalized_projected_pixel: [
              0.5475021142125374, 0.7629054569162577,
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
            "At the current time <TIME 00:04:54.0 video 1>, consider the open notebook that was moved earlier. Using its last known position to infer its current location, and using the current position of the onion piece (marked in red) in the current frame, how far is the open notebook from the onion piece: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "10fa332ca686f6d9",
            object_x_name: "open notebook",
            object_x_reference_time_sec: 294.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "7cb2e40a420c0c25",
            object_y_name: "onion piece",
            object_y_pixel: [770.8829768112525, 1074.1708833380908],
            object_y_normalized_projected_pixel: [
              0.5475021142125374, 0.7629054569162577,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.6169340623431974, -0.034524984553731874, 0.2879415112056377,
            ],
            distance_m: 1.6427349300479053,
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
  oos_staged_h2p0_11: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "c767cfd63d13daa5",
    object_a_name: "cooling rack",
    query_time_sec: 294.0,
    query_time_in_clip_sec: 294.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 294.0,
    clip_duration_sec: 294.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "c767cfd63d13daa5",
      object_name: "cooling rack",
      query_time_sec: 294.0,
      oos_span_start_sec: 292.0,
      oos_span_end_sec: 332.0,
      oos_duration_sec: 40.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 294.0,
      clip_duration_sec: 294.0,
      anchor_assoc_id: "994ac467e1a4013e",
      anchor_name: "bottle of oil",
      anchor_projected_pixel: [576.8755323735359, 750.51576133457],
      anchor_world_coordinates: [
        -0.17209531871667047, -0.7823704289812383, -0.5028501429126884,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_11",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:04:54.0 video 1>, is the previously moved cooling rack visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-53.4452078920267, 723.326775514264],
          camera_coordinates: [
            -1.6243819185682336, 0.018520936931076037, 0.8530943049592375,
          ],
          frame_index: 4332,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cooling rack was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:51.0 video 1>; Point=(0.0511, 0.4491)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 291.0,
          sampled_last_visible_time_in_clip_sec: 291.0,
          sampled_last_visible_time_token: "<TIME 00:04:51.0 video 1>",
          projected_pixel: [71.92364355356085, 632.3069066581122],
          normalized_projected_pixel: [
            0.051082133205654016, 0.44908160984240925,
          ],
          camera_coordinates: [
            -1.613376599652984, -0.21152292279948284, 1.316577786637977,
          ],
          frame_index: 4332,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 291.0,
              time_token: "<TIME 00:04:51.0 video 1>",
              projected_pixel: [71.92364355356085, 632.3069066581122],
              normalized_projected_pixel: [
                0.051082133205654016, 0.44908160984240925,
              ],
              camera_coordinates: [
                -1.613376599652984, -0.21152292279948284, 1.316577786637977,
              ],
              frame_index: 4332,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
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
          "The cooling rack was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:24.4 video 1>; Point=(0.4585, 0.6847)",
          "<TIME 00:02:25.0 video 1>; Point=(0.4698, 0.6909)",
          "<TIME 00:02:26.0 video 1>; Point=(0.2002, 0.789)",
        ],
        answer_metadata: {
          last_placement_time_sec: 144.4,
          last_placement_time_in_clip_sec: 144.4,
          last_placement_time_token: "<TIME 00:02:24.4 video 1>",
          projected_pixel: [645.5317481385332, 964.1031564708219],
          normalized_projected_pixel: [0.45847425293929917, 0.6847323554480269],
          camera_coordinates: [
            -0.058081953591238245, 0.2500968071087371, 0.6100728608609653,
          ],
          frame_index: 4332,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 144.4,
              time_token: "<TIME 00:02:24.4 video 1>",
              projected_pixel: [645.5317481385332, 964.1031564708219],
              normalized_projected_pixel: [
                0.45847425293929917, 0.6847323554480269,
              ],
              camera_coordinates: [
                -0.058081953591238245, 0.2500968071087371, 0.6100728608609653,
              ],
              frame_index: 4332,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 145.0,
              time_token: "<TIME 00:02:25.0 video 1>",
              projected_pixel: [661.4488975706744, 972.8323941922986],
              normalized_projected_pixel: [
                0.46977904657008124, 0.6909320981479393,
              ],
              camera_coordinates: [
                -0.04113995911958934, 0.2532646766373037, 0.5964156580124288,
              ],
              frame_index: 4350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 146.0,
              time_token: "<TIME 00:02:26.0 video 1>",
              projected_pixel: [281.8984905474457, 1110.890592571001],
              normalized_projected_pixel: [
                0.20021199612744722, 0.788984795860086,
              ],
              camera_coordinates: [
                -0.3463874934894353, 0.324937500523065, 0.44394570024826313,
              ],
              frame_index: 4380,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
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
          "At the current time <TIME 00:04:54.0 video 1>, based on the last known position of the cooling rack that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 144.4,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:04:54.0 video 1>, consider the cooling rack that was moved earlier. Using its last known position to infer its current location, in which direction is the cooling rack from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 294.0,
            camera_coordinates: [
              -1.6243819185682336, 0.018520936931076037, 0.8530943049592375,
            ],
            world_coordinates: [
              1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.6243819185682336,
              z: 0.8530943049592375,
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
            "At the current time <TIME 00:04:54.0 video 1>, consider the cooling rack that was moved earlier. Using its last known position to infer its current location, and using the current position of the bottle of oil (marked in red) in the current frame, where is the cooling rack relative to bottle of oil from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "c767cfd63d13daa5",
            object_x_name: "cooling rack",
            object_x_reference_time_sec: 294.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
            ],
            object_x_camera_coordinates: [
              -1.6243819185682336, 0.018520936931076037, 0.8530943049592375,
            ],
            object_y_assoc_id: "994ac467e1a4013e",
            object_y_name: "bottle of oil",
            object_y_reference_time_sec: 294.0,
            object_y_world_coordinates: [
              -0.17209531871667047, -0.7823704289812383, -0.5028501429126884,
            ],
            object_y_projected_pixel: [576.8755323735359, 750.51576133457],
            object_y_normalized_projected_pixel: [
              0.4097127360607499, 0.5330367623114843,
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
            "At the current time <TIME 00:04:54.0 video 1>, consider the cooling rack that was moved earlier. Using its last known position to infer its current location, and using the current position of the bottle of oil (marked in red) in the current frame, how far is the cooling rack from the bottle of oil: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "c767cfd63d13daa5",
            object_x_name: "cooling rack",
            object_x_reference_time_sec: 294.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "994ac467e1a4013e",
            object_y_name: "bottle of oil",
            object_y_pixel: [576.8755323735359, 750.51576133457],
            object_y_normalized_projected_pixel: [
              0.4097127360607499, 0.5330367623114843,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.4930216911802339, -0.017537898940564234, 0.21950373403882883,
            ],
            distance_m: 1.5091730309977462,
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
  oos_staged_h2p0_12: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "0ef98aa54c776891",
    object_a_name: "pressure cooker",
    query_time_sec: 337.0,
    query_time_in_clip_sec: 337.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 337.0,
    clip_duration_sec: 337.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "0ef98aa54c776891",
      object_name: "pressure cooker",
      query_time_sec: 337.0,
      oos_span_start_sec: 335.0,
      oos_span_end_sec: 438.0,
      oos_duration_sec: 103.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 337.0,
      clip_duration_sec: 337.0,
      anchor_assoc_id: "ee313d56db8cdd01",
      anchor_name: "cap",
      anchor_projected_pixel: [600.0519208259468, 708.8729442571463],
      anchor_world_coordinates: [
        -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_12",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:37.0 video 1>, is the previously moved pressure cooker visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-163.39285426827655, 835.3490670110842],
          camera_coordinates: [
            -1.562172121799089, 0.2183313658588948, 0.6222464910591297,
          ],
          frame_index: 4382,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pressure cooker was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:33.0 video 1>; Point=(0.0956, 0.4837)",
          "<TIME 00:05:34.0 video 1>; Point=(0.046, 0.495)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 334.0,
          sampled_last_visible_time_in_clip_sec: 334.0,
          sampled_last_visible_time_token: "<TIME 00:05:34.0 video 1>",
          projected_pixel: [64.76838558663314, 696.9471241557502],
          normalized_projected_pixel: [
            0.046000273854142855, 0.4949908552242544,
          ],
          camera_coordinates: [
            -1.3150193232317031, -0.03742631323950335, 1.0588400687627468,
          ],
          frame_index: 4382,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.1342051346383477, -1.265709818198974, -0.4934034739843818,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 333.0,
              time_token: "<TIME 00:05:33.0 video 1>",
              projected_pixel: [134.64702017472223, 681.0685594963511],
              normalized_projected_pixel: [
                0.09562998591954704, 0.4837134655513857,
              ],
              camera_coordinates: [
                -1.4591835566001952, -0.08785993964352617, 1.394371442322351,
              ],
              frame_index: 4382,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 334.0,
              time_token: "<TIME 00:05:34.0 video 1>",
              projected_pixel: [64.76838558663314, 696.9471241557502],
              normalized_projected_pixel: [
                0.046000273854142855, 0.4949908552242544,
              ],
              camera_coordinates: [
                -1.3150193232317031, -0.03742631323950335, 1.0588400687627468,
              ],
              frame_index: 4382,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
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
          "The pressure cooker was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:26.1 video 1>; Point=(0.2379, 0.6771)",
          "<TIME 00:02:29.0 video 1>; Point=(-2.6603, -0.0353)",
        ],
        answer_metadata: {
          last_placement_time_sec: 146.06666666666666,
          last_placement_time_in_clip_sec: 146.06666666666666,
          last_placement_time_token: "<TIME 00:02:26.1 video 1>",
          projected_pixel: [334.95792427878564, 953.4092341255727],
          normalized_projected_pixel: [0.23789625303891027, 0.6771372401460033],
          camera_coordinates: [
            -0.27644717934560115, 0.17844978445597343, 0.43440710201858435,
          ],
          frame_index: 4382,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.1342051346383477, -1.265709818198974, -0.4934034739843818,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 146.06666666666666,
              time_token: "<TIME 00:02:26.1 video 1>",
              projected_pixel: [334.95792427878564, 953.4092341255727],
              normalized_projected_pixel: [
                0.23789625303891027, 0.6771372401460033,
              ],
              camera_coordinates: [
                -0.27644717934560115, 0.17844978445597343, 0.43440710201858435,
              ],
              frame_index: 4382,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 149.0,
              time_token: "<TIME 00:02:29.0 video 1>",
              projected_pixel: [-3745.657950090663, -49.71291495991966],
              normalized_projected_pixel: [
                -2.6602684304621182, -0.035307468011306575,
              ],
              camera_coordinates: [
                -1.9252774052568182, -0.014678650194687143, 0.32530902380975657,
              ],
              frame_index: 4470,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
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
          "At the current time <TIME 00:05:37.0 video 1>, based on the last known position of the pressure cooker that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 146.06666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:05:37.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, in which direction is the pressure cooker from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-right", "Front-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 337.0,
            camera_coordinates: [
              -1.562172121799089, 0.2183313658588948, 0.6222464910591297,
            ],
            world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.562172121799089,
              z: 0.6222464910591297,
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
            "At the current time <TIME 00:05:37.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, and using the current position of the cap (marked in red) in the current frame, where is the pressure cooker relative to cap from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "0ef98aa54c776891",
            object_x_name: "pressure cooker",
            object_x_reference_time_sec: 337.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            object_x_camera_coordinates: [
              -1.562172121799089, 0.2183313658588948, 0.6222464910591297,
            ],
            object_y_assoc_id: "ee313d56db8cdd01",
            object_y_name: "cap",
            object_y_reference_time_sec: 337.0,
            object_y_world_coordinates: [
              -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
            ],
            object_y_projected_pixel: [600.0519208259468, 708.8729442571463],
            object_y_normalized_projected_pixel: [
              0.42617323922297357, 0.503460897909905,
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
            "At the current time <TIME 00:05:37.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, and using the current position of the cap (marked in red) in the current frame, how far is the pressure cooker from the cap: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "0ef98aa54c776891",
            object_x_name: "pressure cooker",
            object_x_reference_time_sec: 337.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "ee313d56db8cdd01",
            object_y_name: "cap",
            object_y_pixel: [600.0519208259468, 708.8729442571463],
            object_y_normalized_projected_pixel: [
              0.42617323922297357, 0.503460897909905,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.4848952357666556, 0.22357387252896815, 0.16585977027823606,
            ],
            distance_m: 1.5107642440423523,
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
  oos_staged_h2p0_13: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "ee313d56db8cdd01",
    object_a_name: "cap",
    query_time_sec: 498.0,
    query_time_in_clip_sec: 498.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 498.0,
    clip_duration_sec: 498.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "ee313d56db8cdd01",
      object_name: "cap",
      query_time_sec: 498.0,
      oos_span_start_sec: 496.0,
      oos_span_end_sec: 510.0,
      oos_duration_sec: 14.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.004",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 498.0,
      clip_duration_sec: 498.0,
      anchor_assoc_id: "0ef98aa54c776891",
      anchor_name: "pressure cooker",
      anchor_projected_pixel: [251.0008570932489, 771.821757352132],
      anchor_world_coordinates: [
        1.1342051346383477, -1.265709818198974, -0.4934034739843818,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_13",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:18.0 video 1>, is the previously moved cap visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1509.6640274959877, 822.9860884142641],
          camera_coordinates: [
            1.0338136425643056, 0.13933522619984773, 0.45447263422707096,
          ],
          frame_index: 6835,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cap was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:12.0 video 1>; Point=(0.1711, 0.4541)",
          "<TIME 00:08:13.0 video 1>; Point=(0.1773, 0.4475)",
          "<TIME 00:08:14.0 video 1>; Point=(0.2085, 0.415)",
          "<TIME 00:08:15.0 video 1>; Point=(0.5403, 0.4167)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 495.0,
          sampled_last_visible_time_in_clip_sec: 495.0,
          sampled_last_visible_time_token: "<TIME 00:08:15.0 video 1>",
          projected_pixel: [760.8078413378157, 586.7159531072735],
          normalized_projected_pixel: [0.5403464782228805, 0.4167016712409613],
          camera_coordinates: [
            0.05309092570488699, -0.11888430923332806, 0.5607055335936131,
          ],
          frame_index: 6835,
          status: "in_view",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 492.0,
              time_token: "<TIME 00:08:12.0 video 1>",
              projected_pixel: [240.9583380934572, 639.355668969656],
              normalized_projected_pixel: [
                0.1711351833050122, 0.45408783307503975,
              ],
              camera_coordinates: [
                -0.37966135847938787, -0.06254276275375567, 0.4698280271268651,
              ],
              frame_index: 6835,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 493.0,
              time_token: "<TIME 00:08:13.0 video 1>",
              projected_pixel: [249.6143433837069, 630.1111703623449],
              normalized_projected_pixel: [
                0.1772829143350191, 0.4475221380414381,
              ],
              camera_coordinates: [
                -0.3709339665278553, -0.06983821044587385, 0.4691233726751326,
              ],
              frame_index: 6835,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 494.0,
              time_token: "<TIME 00:08:14.0 video 1>",
              projected_pixel: [293.57150967007004, 584.293172756691],
              normalized_projected_pixel: [
                0.208502492663402, 0.41498094656014983,
              ],
              camera_coordinates: [
                -0.3389221521177754, -0.10859804463886291, 0.4804265053700264,
              ],
              frame_index: 6835,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 495.0,
              time_token: "<TIME 00:08:15.0 video 1>",
              projected_pixel: [760.8078413378157, 586.7159531072735],
              normalized_projected_pixel: [
                0.5403464782228805, 0.4167016712409613,
              ],
              camera_coordinates: [
                0.05309092570488699, -0.11888430923332806, 0.5607055335936131,
              ],
              frame_index: 6835,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
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
          "The cap was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:47.8 video 1>; Point=(0.5651, 0.5878)",
          "<TIME 00:03:48.0 video 1>; Point=(0.5402, 0.5744)",
          "<TIME 00:03:49.0 video 1>; Point=(0.0557, 0.5839)",
          "<TIME 00:03:50.0 video 1>; Point=(0.1117, 0.4972)",
        ],
        answer_metadata: {
          last_placement_time_sec: 227.83333333333334,
          last_placement_time_in_clip_sec: 227.83333333333334,
          last_placement_time_token: "<TIME 00:03:47.8 video 1>",
          projected_pixel: [795.7031414885486, 827.6033051869524],
          normalized_projected_pixel: [0.565130072079935, 0.5877864383430059],
          camera_coordinates: [
            0.06708759363167466, 0.08099398455290524, 0.4413482726677804,
          ],
          frame_index: 6835,
          status: "last_past_track_end",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 227.83333333333334,
              time_token: "<TIME 00:03:47.8 video 1>",
              projected_pixel: [795.7031414885486, 827.6033051869524],
              normalized_projected_pixel: [
                0.565130072079935, 0.5877864383430059,
              ],
              camera_coordinates: [
                0.06708759363167466, 0.08099398455290524, 0.4413482726677804,
              ],
              frame_index: 6835,
              status: "last_past_track_end",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 228.0,
              time_token: "<TIME 00:03:48.0 video 1>",
              projected_pixel: [760.5941971883424, 808.7067641155837],
              normalized_projected_pixel: [
                0.5401947423212659, 0.5743655995139089,
              ],
              camera_coordinates: [
                0.04152474766324138, 0.06708682990521309, 0.43984904211655673,
              ],
              frame_index: 6840,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 229.0,
              time_token: "<TIME 00:03:49.0 video 1>",
              projected_pixel: [78.45999378189674, 822.1077769663874],
              normalized_projected_pixel: [
                0.0557244274019153, 0.5838833643227184,
              ],
              camera_coordinates: [
                -0.42777732986791284, 0.0731794639919327, 0.3536511225612946,
              ],
              frame_index: 6870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 230.0,
              time_token: "<TIME 00:03:50.0 video 1>",
              projected_pixel: [157.2073369426024, 700.0683341136752],
              normalized_projected_pixel: [
                0.11165293816946194, 0.49720762366028065,
              ],
              camera_coordinates: [
                -0.41989386642042326, -0.011768964294164436, 0.423701042014498,
              ],
              frame_index: 6900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
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
          "At the current time <TIME 00:08:18.0 video 1>, based on the last known position of the cap that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 227.83333333333334,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the hob and the sink",
          raw_correct_fixture: "P04_counter.004",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:08:18.0 video 1>, consider the cap that was moved earlier. Using its last known position to infer its current location, in which direction is the cap from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 498.0,
            camera_coordinates: [
              1.0338136425643056, 0.13933522619984773, 0.45447263422707096,
            ],
            world_coordinates: [
              -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.0338136425643056,
              z: 0.45447263422707096,
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
            "At the current time <TIME 00:08:18.0 video 1>, consider the cap that was moved earlier. Using its last known position to infer its current location, and using the current position of the pressure cooker (marked in red) in the current frame, where is the cap relative to pressure cooker from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "ee313d56db8cdd01",
            object_x_name: "cap",
            object_x_reference_time_sec: 498.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.24052265439739381, -0.6563182823661309, -0.34789037084569435,
            ],
            object_x_camera_coordinates: [
              1.0338136425643056, 0.13933522619984773, 0.45447263422707096,
            ],
            object_y_assoc_id: "0ef98aa54c776891",
            object_y_name: "pressure cooker",
            object_y_reference_time_sec: 498.0,
            object_y_world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            object_y_projected_pixel: [251.0008570932489, 771.821757352132],
            object_y_normalized_projected_pixel: [
              0.1782676541855461, 0.5481688617557755,
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
            "At the current time <TIME 00:08:18.0 video 1>, consider the cap that was moved earlier. Using its last known position to infer its current location, and using the current position of the pressure cooker (marked in red) in the current frame, how far is the cap from the pressure cooker: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "ee313d56db8cdd01",
            object_x_name: "cap",
            object_x_reference_time_sec: 498.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "0ef98aa54c776891",
            object_y_name: "pressure cooker",
            object_y_pixel: [251.0008570932489, 771.821757352132],
            object_y_normalized_projected_pixel: [
              0.1782676541855461, 0.5481688617557755,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.5020008679676213, 0.08111083661919938, -0.14079426793838068,
            ],
            distance_m: 1.5107642440423519,
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
  oos_staged_h2p0_14: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "695fc1f216eeae30",
    object_a_name: "onione piece 2",
    query_time_sec: 498.0,
    query_time_in_clip_sec: 498.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 498.0,
    clip_duration_sec: 498.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "695fc1f216eeae30",
      object_name: "onione piece 2",
      query_time_sec: 498.0,
      oos_span_start_sec: 496.0,
      oos_span_end_sec: 511.0,
      oos_duration_sec: 15.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 498.0,
      clip_duration_sec: 498.0,
      anchor_assoc_id: "c767cfd63d13daa5",
      anchor_name: "cooling rack",
      anchor_projected_pixel: [206.40970075160897, 839.5979215676895],
      anchor_world_coordinates: [
        1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_14",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:18.0 video 1>, is the previously moved onione piece 2 visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1931.8058138787433, 1154.3653387676366],
          camera_coordinates: [
            1.1157968128257065, 0.4051211373124459, 0.3600678303288548,
          ],
          frame_index: 4849,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The onione piece 2 was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:12.0 video 1>; Point=(0.2294, 0.7105)",
          "<TIME 00:08:13.0 video 1>; Point=(0.2289, 0.707)",
          "<TIME 00:08:14.0 video 1>; Point=(0.2408, 0.6739)",
          "<TIME 00:08:15.0 video 1>; Point=(0.5097, 0.6528)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 495.0,
          sampled_last_visible_time_in_clip_sec: 495.0,
          sampled_last_visible_time_token: "<TIME 00:08:15.0 video 1>",
          projected_pixel: [717.7224952907336, 919.1986437991502],
          normalized_projected_pixel: [0.5097460904053506, 0.6528399458800783],
          camera_coordinates: [
            0.011457463314307359, 0.16008620884045444, 0.4787435753072104,
          ],
          frame_index: 4849,
          status: "in_view",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.2528659359170232, -0.3936540598374464, -0.47877508101404553,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 492.0,
              time_token: "<TIME 00:08:12.0 video 1>",
              projected_pixel: [322.98287449044955, 1000.3265893780997],
              normalized_projected_pixel: [
                0.229391246086967, 0.7104592254105822,
              ],
              camera_coordinates: [
                -0.27368718858629565, 0.20488007772156944, 0.4104128989295507,
              ],
              frame_index: 4849,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.2528659359170232, -0.3936540598374464, -0.47877508101404553,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 493.0,
              time_token: "<TIME 00:08:13.0 video 1>",
              projected_pixel: [322.2530606258953, 995.4650669666955],
              normalized_projected_pixel: [
                0.22887291237634608, 0.707006439607028,
              ],
              camera_coordinates: [
                -0.2725994531006758, 0.20019714275679157, 0.4084036127869707,
              ],
              frame_index: 4849,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.2528659359170232, -0.3936540598374464, -0.47877508101404553,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 494.0,
              time_token: "<TIME 00:08:14.0 video 1>",
              projected_pixel: [339.07900729599567, 948.8472334830809],
              normalized_projected_pixel: [
                0.240823158590906, 0.6738971828715064,
              ],
              camera_coordinates: [
                -0.2629029956510635, 0.16833126366015227, 0.41872639348809415,
              ],
              frame_index: 4849,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.2528659359170232, -0.3936540598374464, -0.47877508101404553,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 495.0,
              time_token: "<TIME 00:08:15.0 video 1>",
              projected_pixel: [717.7224952907336, 919.1986437991502],
              normalized_projected_pixel: [
                0.5097460904053506, 0.6528399458800783,
              ],
              camera_coordinates: [
                0.011457463314307359, 0.16008620884045444, 0.4787435753072104,
              ],
              frame_index: 4849,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.2528659359170232, -0.3936540598374464, -0.47877508101404553,
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
          "The onione piece 2 was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:41.6 video 1>; Point=(0.5152, 0.6721)",
          "<TIME 00:02:42.0 video 1>; Point=(0.518, 0.6908)",
          "<TIME 00:02:43.0 video 1>; Point=(0.1877, 0.8157)",
          "<TIME 00:02:44.0 video 1>; Point=(0.1839, 0.8136)",
        ],
        answer_metadata: {
          last_placement_time_sec: 161.63333333333333,
          last_placement_time_in_clip_sec: 161.63333333333333,
          last_placement_time_token: "<TIME 00:02:41.6 video 1>",
          projected_pixel: [725.4170761271508, 946.3249449284824],
          normalized_projected_pixel: [0.5152109915675788, 0.6721057847503427],
          camera_coordinates: [
            0.01633150325449112, 0.16932237901095581, 0.44592690965398707,
          ],
          frame_index: 4849,
          status: "last_past_track_end",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.2528659359170232, -0.3936540598374464, -0.47877508101404553,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 161.63333333333333,
              time_token: "<TIME 00:02:41.6 video 1>",
              projected_pixel: [725.4170761271508, 946.3249449284824],
              normalized_projected_pixel: [
                0.5152109915675788, 0.6721057847503427,
              ],
              camera_coordinates: [
                0.01633150325449112, 0.16932237901095581, 0.44592690965398707,
              ],
              frame_index: 4849,
              status: "last_past_track_end",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.2528659359170232, -0.3936540598374464, -0.47877508101404553,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 162.0,
              time_token: "<TIME 00:02:42.0 video 1>",
              projected_pixel: [729.2935622983699, 972.6661117674221],
              normalized_projected_pixel: [
                0.5179641777687286, 0.6908139998348168,
              ],
              camera_coordinates: [
                0.018557381599407785, 0.1826942672231951, 0.43061162612739423,
              ],
              frame_index: 4860,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.2528659359170232, -0.3936540598374464, -0.47877508101404553,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 163.0,
              time_token: "<TIME 00:02:43.0 video 1>",
              projected_pixel: [264.271703008425, 1148.5446015863215],
              normalized_projected_pixel: [
                0.18769297088666548, 0.8157276999902852,
              ],
              camera_coordinates: [
                -0.31709837298361676, 0.31272822433332803, 0.3787517187380916,
              ],
              frame_index: 4890,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.2528659359170232, -0.3936540598374464, -0.47877508101404553,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 164.0,
              time_token: "<TIME 00:02:44.0 video 1>",
              projected_pixel: [258.9942913504975, 1145.5582244222574],
              normalized_projected_pixel: [
                0.18394480919779654, 0.8136066934817169,
              ],
              camera_coordinates: [
                -0.3320137706104479, 0.32132352784892965, 0.3912877008834174,
              ],
              frame_index: 4920,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.2528659359170232, -0.3936540598374464, -0.47877508101404553,
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
          "At the current time <TIME 00:08:18.0 video 1>, based on the last known position of the onione piece 2 that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area next to the window",
          "counter area between the hob and the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 161.63333333333333,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the hob and the sink",
          raw_correct_fixture: "P04_counter.004",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:08:18.0 video 1>, consider the onione piece 2 that was moved earlier. Using its last known position to infer its current location, in which direction is the onione piece 2 from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 498.0,
            camera_coordinates: [
              1.1157968128257065, 0.4051211373124459, 0.3600678303288548,
            ],
            world_coordinates: [
              -0.2528659359170232, -0.3936540598374464, -0.47877508101404553,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.1157968128257065,
              z: 0.3600678303288548,
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
            "At the current time <TIME 00:08:18.0 video 1>, consider the onione piece 2 that was moved earlier. Using its last known position to infer its current location, and using the current position of the cooling rack (marked in red) in the current frame, where is the onione piece 2 relative to cooling rack from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "695fc1f216eeae30",
            object_x_name: "onione piece 2",
            object_x_reference_time_sec: 498.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.2528659359170232, -0.3936540598374464, -0.47877508101404553,
            ],
            object_x_camera_coordinates: [
              1.1157968128257065, 0.4051211373124459, 0.3600678303288548,
            ],
            object_y_assoc_id: "c767cfd63d13daa5",
            object_y_name: "cooling rack",
            object_y_reference_time_sec: 498.0,
            object_y_world_coordinates: [
              1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
            ],
            object_y_projected_pixel: [206.40970075160897, 839.5979215676895],
            object_y_normalized_projected_pixel: [
              0.14659779882926774, 0.5963053420225067,
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
            "At the current time <TIME 00:08:18.0 video 1>, consider the onione piece 2 that was moved earlier. Using its last known position to infer its current location, and using the current position of the cooling rack (marked in red) in the current frame, how far is the onione piece 2 from the cooling rack: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "695fc1f216eeae30",
            object_x_name: "onione piece 2",
            object_x_reference_time_sec: 498.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c767cfd63d13daa5",
            object_y_name: "cooling rack",
            object_y_pixel: [206.40970075160897, 839.5979215676895],
            object_y_normalized_projected_pixel: [
              0.14659779882926774, 0.5963053420225067,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.7053372555095452, 0.2578861919966586, -0.305423208308226,
            ],
            distance_m: 1.7515603841217282,
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
  oos_staged_h2p0_15: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "7cb2e40a420c0c25",
    object_a_name: "onion piece",
    query_time_sec: 498.0,
    query_time_in_clip_sec: 498.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 498.0,
    clip_duration_sec: 498.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "7cb2e40a420c0c25",
      object_name: "onion piece",
      query_time_sec: 498.0,
      oos_span_start_sec: 496.0,
      oos_span_end_sec: 511.0,
      oos_duration_sec: 15.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 498.0,
      clip_duration_sec: 498.0,
      anchor_assoc_id: "c767cfd63d13daa5",
      anchor_name: "cooling rack",
      anchor_projected_pixel: [206.40970075160897, 839.5979215676895],
      anchor_world_coordinates: [
        1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_15",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:18.0 video 1>, is the previously moved onion piece visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1708.0750032263395, 1050.4299529608381],
          camera_coordinates: [
            1.1195099912669118, 0.37703872305791214, 0.4015560691963347,
          ],
          frame_index: 4599,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The onion piece was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:12.0 video 1>; Point=(0.2478, 0.6665)",
          "<TIME 00:08:13.0 video 1>; Point=(0.2484, 0.6632)",
          "<TIME 00:08:14.0 video 1>; Point=(0.263, 0.6326)",
          "<TIME 00:08:15.0 video 1>; Point=(0.5351, 0.6221)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 495.0,
          sampled_last_visible_time_in_clip_sec: 495.0,
          sampled_last_visible_time_token: "<TIME 00:08:15.0 video 1>",
          projected_pixel: [753.3733642765944, 875.9147301668911],
          normalized_projected_pixel: [0.5350663098555358, 0.622098529948076],
          camera_coordinates: [
            0.041964255178856325, 0.133745261439895, 0.5087298019621029,
          ],
          frame_index: 4599,
          status: "in_view",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 492.0,
              time_token: "<TIME 00:08:12.0 video 1>",
              projected_pixel: [348.8928299990909, 938.4950833762483],
              normalized_projected_pixel: [
                0.24779320312435435, 0.6665448035342673,
              ],
              camera_coordinates: [
                -0.27204911555033295, 0.17105729344219842, 0.44752111404621364,
              ],
              frame_index: 4599,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 493.0,
              time_token: "<TIME 00:08:13.0 video 1>",
              projected_pixel: [349.7111816458254, 933.8494515591783],
              normalized_projected_pixel: [
                0.24837441878254643, 0.6632453491187346,
              ],
              camera_coordinates: [
                -0.27000251227287014, 0.16661474111499408, 0.44567507435115417,
              ],
              frame_index: 4599,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 494.0,
              time_token: "<TIME 00:08:14.0 video 1>",
              projected_pixel: [370.27564632506267, 890.6339135700995],
              normalized_projected_pixel: [
                0.26297986244677746, 0.6325524954333093,
              ],
              camera_coordinates: [
                -0.25674711467136646, 0.13488253262884636, 0.45569896670911425,
              ],
              frame_index: 4599,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 495.0,
              time_token: "<TIME 00:08:15.0 video 1>",
              projected_pixel: [753.3733642765944, 875.9147301668911],
              normalized_projected_pixel: [
                0.5350663098555358, 0.622098529948076,
              ],
              camera_coordinates: [
                0.041964255178856325, 0.133745261439895, 0.5087298019621029,
              ],
              frame_index: 4599,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
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
          "The onion piece was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:33.3 video 1>; Point=(0.1935, 0.7252)",
          "<TIME 00:02:34.0 video 1>; Point=(0.26, 0.7549)",
          "<TIME 00:02:35.0 video 1>; Point=(0.2046, 0.8187)",
          "<TIME 00:02:36.0 video 1>; Point=(0.1965, 0.8077)",
        ],
        answer_metadata: {
          last_placement_time_sec: 153.3,
          last_placement_time_in_clip_sec: 153.3,
          last_placement_time_token: "<TIME 00:02:33.3 video 1>",
          projected_pixel: [272.49479922441276, 1021.0481391161563],
          normalized_projected_pixel: [0.19353323808552042, 0.7251762351677247],
          camera_coordinates: [
            -0.26515137637810193, 0.18801416219370876, 0.3423460557408744,
          ],
          frame_index: 4599,
          status: "last_past_track_end",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 153.3,
              time_token: "<TIME 00:02:33.3 video 1>",
              projected_pixel: [272.49479922441276, 1021.0481391161563],
              normalized_projected_pixel: [
                0.19353323808552042, 0.7251762351677247,
              ],
              camera_coordinates: [
                -0.26515137637810193, 0.18801416219370876, 0.3423460557408744,
              ],
              frame_index: 4599,
              status: "last_past_track_end",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 154.0,
              time_token: "<TIME 00:02:34.0 video 1>",
              projected_pixel: [366.0584943582551, 1062.9387539546549],
              normalized_projected_pixel: [
                0.25998472610671525, 0.7549280922973401,
              ],
              camera_coordinates: [
                -0.22341656635825313, 0.23006753470064584, 0.3762895260505407,
              ],
              frame_index: 4620,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 155.0,
              time_token: "<TIME 00:02:35.0 video 1>",
              projected_pixel: [288.05754787994454, 1152.7273397685753],
              normalized_projected_pixel: [
                0.20458632661927878, 0.8186983947219996,
              ],
              camera_coordinates: [
                -0.313834033422434, 0.3303728609812565, 0.4007925036185659,
              ],
              frame_index: 4650,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 156.0,
              time_token: "<TIME 00:02:36.0 video 1>",
              projected_pixel: [276.6369444031134, 1137.2517074213008],
              normalized_projected_pixel: [
                0.1964751025590294, 0.8077071785662647,
              ],
              camera_coordinates: [
                -0.31053309088808806, 0.30689876069405797, 0.3868980968493687,
              ],
              frame_index: 4680,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
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
          "At the current time <TIME 00:08:18.0 video 1>, based on the last known position of the onion piece that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 153.3,
          correct_fixture: "counter",
          display_correct_answer: "counter area between the hob and the sink",
          raw_correct_fixture: "P04_counter.004",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:08:18.0 video 1>, consider the onion piece that was moved earlier. Using its last known position to infer its current location, in which direction is the onion piece from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 498.0,
            camera_coordinates: [
              1.1195099912669118, 0.37703872305791214, 0.4015560691963347,
            ],
            world_coordinates: [
              -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.1195099912669118,
              z: 0.4015560691963347,
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
            "At the current time <TIME 00:08:18.0 video 1>, consider the onion piece that was moved earlier. Using its last known position to infer its current location, and using the current position of the cooling rack (marked in red) in the current frame, where is the onion piece relative to cooling rack from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "7cb2e40a420c0c25",
            object_x_name: "onion piece",
            object_x_reference_time_sec: 498.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.27205738995829554, -0.439695574361461, -0.48473752019119626,
            ],
            object_x_camera_coordinates: [
              1.1195099912669118, 0.37703872305791214, 0.4015560691963347,
            ],
            object_y_assoc_id: "c767cfd63d13daa5",
            object_y_name: "cooling rack",
            object_y_reference_time_sec: 498.0,
            object_y_world_coordinates: [
              1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
            ],
            object_y_projected_pixel: [206.40970075160897, 839.5979215676895],
            object_y_normalized_projected_pixel: [
              0.14659779882926774, 0.5963053420225067,
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
            "At the current time <TIME 00:08:18.0 video 1>, consider the onion piece that was moved earlier. Using its last known position to infer its current location, and using the current position of the cooling rack (marked in red) in the current frame, how far is the onion piece from the cooling rack: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "7cb2e40a420c0c25",
            object_x_name: "onion piece",
            object_x_reference_time_sec: 498.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c767cfd63d13daa5",
            object_y_name: "cooling rack",
            object_y_pixel: [206.40970075160897, 839.5979215676895],
            object_y_normalized_projected_pixel: [
              0.14659779882926774, 0.5963053420225067,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.7090504339507504, 0.2298037777421248, -0.2639349694407461,
            ],
            distance_m: 1.7445127772949924,
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
  oos_staged_h2p0_16: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "10fa332ca686f6d9",
    object_a_name: "open notebook",
    query_time_sec: 513.0,
    query_time_in_clip_sec: 513.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 513.0,
    clip_duration_sec: 513.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "10fa332ca686f6d9",
      object_name: "open notebook",
      query_time_sec: 513.0,
      oos_span_start_sec: 511.0,
      oos_span_end_sec: 557.0,
      oos_duration_sec: 46.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 513.0,
      clip_duration_sec: 513.0,
      anchor_assoc_id: "353c0ce699aa17aa",
      anchor_name: "knife",
      anchor_projected_pixel: [687.0334814492682, 939.6946272700494],
      anchor_world_coordinates: [
        -0.16155418958264633, -0.4243080108019701, -0.600283274941124,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_16",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:33.0 video 1>, is the previously moved open notebook visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.7240382581279486, 0.8763659197993783, -0.35124737138892004,
          ],
          frame_index: 4252,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The open notebook was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:27.0 video 1>; Point=(0.279, 0.8189)",
          "<TIME 00:08:28.0 video 1>; Point=(0.239, 0.8968)",
          "<TIME 00:08:29.0 video 1>; Point=(0.348, 0.8487)",
          "<TIME 00:08:30.0 video 1>; Point=(0.2936, 0.9004)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 510.0,
          sampled_last_visible_time_in_clip_sec: 510.0,
          sampled_last_visible_time_token: "<TIME 00:08:30.0 video 1>",
          projected_pixel: [413.3617720596602, 1267.7020401136756],
          normalized_projected_pixel: [0.29358080401964504, 0.9003565625807355],
          camera_coordinates: [
            -0.24439201799880506, 0.4651055158244108, 0.43896476503093446,
          ],
          frame_index: 4252,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2502712840415624, -1.039177731622999, -0.6320962723655575,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 507.0,
              time_token: "<TIME 00:08:27.0 video 1>",
              projected_pixel: [392.87405625588895, 1153.0372293592163],
              normalized_projected_pixel: [
                0.27902986949992115, 0.818918486760807,
              ],
              camera_coordinates: [
                -0.30059232987942464, 0.423462769019516, 0.5360174851864905,
              ],
              frame_index: 4252,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 508.0,
              time_token: "<TIME 00:08:28.0 video 1>",
              projected_pixel: [336.52824345010725, 1262.6721708089021],
              normalized_projected_pixel: [
                0.23901153654126936, 0.8967842122222316,
              ],
              camera_coordinates: [
                -0.303323094258644, 0.452301754802372, 0.4150392907689361,
              ],
              frame_index: 4252,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 509.0,
              time_token: "<TIME 00:08:29.0 video 1>",
              projected_pixel: [490.01063995924426, 1194.9572375061393],
              normalized_projected_pixel: [
                0.3480189204255996, 0.8486912198197012,
              ],
              camera_coordinates: [
                -0.18942742196330853, 0.4254689549931267, 0.49450163189887,
              ],
              frame_index: 4252,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 510.0,
              time_token: "<TIME 00:08:30.0 video 1>",
              projected_pixel: [413.3617720596602, 1267.7020401136756],
              normalized_projected_pixel: [
                0.29358080401964504, 0.9003565625807355,
              ],
              camera_coordinates: [
                -0.24439201799880506, 0.4651055158244108, 0.43896476503093446,
              ],
              frame_index: 4252,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
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
          "The open notebook was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:21.7 video 1>; Point=(0.5323, 0.8738)",
          "<TIME 00:02:22.0 video 1>; Point=(0.5481, 0.9098)",
          "<TIME 00:02:23.0 video 1>; Point=(0.6043, 1.0276)",
          "<TIME 00:02:24.0 video 1>; Point=(0.5599, 0.8873)",
        ],
        answer_metadata: {
          last_placement_time_sec: 141.73333333333332,
          last_placement_time_in_clip_sec: 141.73333333333332,
          last_placement_time_token: "<TIME 00:02:21.7 video 1>",
          projected_pixel: [749.4322715449124, 1230.302853727999],
          normalized_projected_pixel: [0.532267238313148, 0.8737946404318175],
          camera_coordinates: [
            0.039698317184269305, 0.4449196378051928, 0.48348302984027314,
          ],
          frame_index: 4252,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2502712840415624, -1.039177731622999, -0.6320962723655575,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 141.73333333333332,
              time_token: "<TIME 00:02:21.7 video 1>",
              projected_pixel: [749.4322715449124, 1230.302853727999],
              normalized_projected_pixel: [
                0.532267238313148, 0.8737946404318175,
              ],
              camera_coordinates: [
                0.039698317184269305, 0.4449196378051928, 0.48348302984027314,
              ],
              frame_index: 4252,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 142.0,
              time_token: "<TIME 00:02:22.0 video 1>",
              projected_pixel: [771.7441767037479, 1280.961234207019],
              normalized_projected_pixel: [
                0.5481137618634574, 0.9097736038402124,
              ],
              camera_coordinates: [
                0.05828678217004746, 0.4836995491566043, 0.46450864507155687,
              ],
              frame_index: 4260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [850.8387571993215, 1446.9018467818823],
              normalized_projected_pixel: [
                0.6042888900563363, 1.0276291525439505,
              ],
              camera_coordinates: [
                0.11546731037388303, 0.5756603197314528, 0.3241454276154915,
              ],
              frame_index: 4290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 144.0,
              time_token: "<TIME 00:02:24.0 video 1>",
              projected_pixel: [788.2764066422145, 1249.3611865890016],
              normalized_projected_pixel: [
                0.5598554024447546, 0.8873303882024159,
              ],
              camera_coordinates: [
                0.06903763789807993, 0.43500439370171273, 0.4501742203859529,
              ],
              frame_index: 4320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2502712840415624, -1.039177731622999, -0.6320962723655575,
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
          "At the current time <TIME 00:08:33.0 video 1>, based on the last known position of the open notebook that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 141.73333333333332,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:08:33.0 video 1>, consider the open notebook that was moved earlier. Using its last known position to infer its current location, in which direction is the open notebook from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 513.0,
            camera_coordinates: [
              -0.7240382581279486, 0.8763659197993783, -0.35124737138892004,
            ],
            world_coordinates: [
              1.2502712840415624, -1.039177731622999, -0.6320962723655575,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.7240382581279486,
              z: -0.35124737138892004,
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
            "At the current time <TIME 00:08:33.0 video 1>, consider the open notebook that was moved earlier. Using its last known position to infer its current location, and using the current position of the knife (marked in red) in the current frame, where is the open notebook relative to knife from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "10fa332ca686f6d9",
            object_x_name: "open notebook",
            object_x_reference_time_sec: 513.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.2502712840415624, -1.039177731622999, -0.6320962723655575,
            ],
            object_x_camera_coordinates: [
              -0.7240382581279486, 0.8763659197993783, -0.35124737138892004,
            ],
            object_y_assoc_id: "353c0ce699aa17aa",
            object_y_name: "knife",
            object_y_reference_time_sec: 513.0,
            object_y_world_coordinates: [
              -0.16155418958264633, -0.4243080108019701, -0.600283274941124,
            ],
            object_y_projected_pixel: [687.0334814492682, 939.6946272700494],
            object_y_normalized_projected_pixel: [
              0.48794991580203706, 0.6673967523224783,
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
            "At the current time <TIME 00:08:33.0 video 1>, consider the open notebook that was moved earlier. Using its last known position to infer its current location, and using the current position of the knife (marked in red) in the current frame, how far is the open notebook from the knife: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "10fa332ca686f6d9",
            object_x_name: "open notebook",
            object_x_reference_time_sec: 513.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "353c0ce699aa17aa",
            object_y_name: "knife",
            object_y_pixel: [687.0334814492682, 939.6946272700494],
            object_y_normalized_projected_pixel: [
              0.48794991580203706, 0.6673967523224783,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.6998617321243249, 0.5411203110227544, -1.2608371715921356,
            ],
            distance_m: 1.5402363482147405,
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
  oos_staged_h2p0_17: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "0ef98aa54c776891",
    object_a_name: "pressure cooker",
    query_time_sec: 514.0,
    query_time_in_clip_sec: 514.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 514.0,
    clip_duration_sec: 514.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "0ef98aa54c776891",
      object_name: "pressure cooker",
      query_time_sec: 514.0,
      oos_span_start_sec: 512.0,
      oos_span_end_sec: 557.0,
      oos_duration_sec: 45.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 514.0,
      clip_duration_sec: 514.0,
      anchor_assoc_id: "a9451025ec911959",
      anchor_name: "packet of turmeric powder",
      anchor_projected_pixel: [233.78807950685427, 978.1478169113318],
      anchor_world_coordinates: [
        -0.32989582496114606, -0.8138896160958433, -0.5294346809985384,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_17",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:34.0 video 1>, is the previously moved pressure cooker visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.2654310719507553, 0.9049239729526874, -0.5628534557404281,
          ],
          frame_index: 4382,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pressure cooker was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:28.0 video 1>; Point=(0.2197, 0.6541)",
          "<TIME 00:08:29.0 video 1>; Point=(0.362, 0.6188)",
          "<TIME 00:08:30.0 video 1>; Point=(0.2928, 0.6599)",
          "<TIME 00:08:31.0 video 1>; Point=(0.1554, 0.7604)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 511.0,
          sampled_last_visible_time_in_clip_sec: 511.0,
          sampled_last_visible_time_token: "<TIME 00:08:31.0 video 1>",
          projected_pixel: [218.79840147591437, 1070.6923446330252],
          normalized_projected_pixel: [0.15539659195732555, 0.7604349038586826],
          camera_coordinates: [
            -0.38386947736683585, 0.28142278612065985, 0.4209942065831738,
          ],
          frame_index: 4382,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.1342051346383477, -1.265709818198974, -0.4934034739843818,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 508.0,
              time_token: "<TIME 00:08:28.0 video 1>",
              projected_pixel: [309.3589184615421, 920.9322559852232],
              normalized_projected_pixel: [
                0.2197151409527998, 0.6540712045349596,
              ],
              camera_coordinates: [
                -0.3409518175255033, 0.17769123578659043, 0.4998742578505885,
              ],
              frame_index: 4382,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 509.0,
              time_token: "<TIME 00:08:29.0 video 1>",
              projected_pixel: [509.7253276048694, 871.2553731924527],
              normalized_projected_pixel: [
                0.362020829264822, 0.6187893275514579,
              ],
              camera_coordinates: [
                -0.1862428777860301, 0.14965145415719106, 0.583599300328282,
              ],
              frame_index: 4382,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 510.0,
              time_token: "<TIME 00:08:30.0 video 1>",
              projected_pixel: [412.2960418847598, 929.1785457950089],
              normalized_projected_pixel: [
                0.29282389338406234, 0.6599279444566825,
              ],
              camera_coordinates: [
                -0.26500572176028037, 0.19441845227353882, 0.540588671922946,
              ],
              frame_index: 4382,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 511.0,
              time_token: "<TIME 00:08:31.0 video 1>",
              projected_pixel: [218.79840147591437, 1070.6923446330252],
              normalized_projected_pixel: [
                0.15539659195732555, 0.7604349038586826,
              ],
              camera_coordinates: [
                -0.38386947736683585, 0.28142278612065985, 0.4209942065831738,
              ],
              frame_index: 4382,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
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
          "The pressure cooker was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:26.1 video 1>; Point=(0.2379, 0.6771)",
          "<TIME 00:02:29.0 video 1>; Point=(-2.6603, -0.0353)",
        ],
        answer_metadata: {
          last_placement_time_sec: 146.06666666666666,
          last_placement_time_in_clip_sec: 146.06666666666666,
          last_placement_time_token: "<TIME 00:02:26.1 video 1>",
          projected_pixel: [334.95792427878564, 953.4092341255727],
          normalized_projected_pixel: [0.23789625303891027, 0.6771372401460033],
          camera_coordinates: [
            -0.27644717934560115, 0.17844978445597343, 0.43440710201858435,
          ],
          frame_index: 4382,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.1342051346383477, -1.265709818198974, -0.4934034739843818,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 146.06666666666666,
              time_token: "<TIME 00:02:26.1 video 1>",
              projected_pixel: [334.95792427878564, 953.4092341255727],
              normalized_projected_pixel: [
                0.23789625303891027, 0.6771372401460033,
              ],
              camera_coordinates: [
                -0.27644717934560115, 0.17844978445597343, 0.43440710201858435,
              ],
              frame_index: 4382,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 149.0,
              time_token: "<TIME 00:02:29.0 video 1>",
              projected_pixel: [-3745.657950090663, -49.71291495991966],
              normalized_projected_pixel: [
                -2.6602684304621182, -0.035307468011306575,
              ],
              camera_coordinates: [
                -1.9252774052568182, -0.014678650194687143, 0.32530902380975657,
              ],
              frame_index: 4470,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.1342051346383477, -1.265709818198974, -0.4934034739843818,
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
          "At the current time <TIME 00:08:34.0 video 1>, based on the last known position of the pressure cooker that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 146.06666666666666,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:08:34.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, in which direction is the pressure cooker from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 514.0,
            camera_coordinates: [
              -1.2654310719507553, 0.9049239729526874, -0.5628534557404281,
            ],
            world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.2654310719507553,
              z: -0.5628534557404281,
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
            "At the current time <TIME 00:08:34.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, and using the current position of the packet of turmeric powder (marked in red) in the current frame, where is the pressure cooker relative to packet of turmeric powder from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-right", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "0ef98aa54c776891",
            object_x_name: "pressure cooker",
            object_x_reference_time_sec: 514.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.1342051346383477, -1.265709818198974, -0.4934034739843818,
            ],
            object_x_camera_coordinates: [
              -1.2654310719507553, 0.9049239729526874, -0.5628534557404281,
            ],
            object_y_assoc_id: "a9451025ec911959",
            object_y_name: "packet of turmeric powder",
            object_y_reference_time_sec: 514.0,
            object_y_world_coordinates: [
              -0.32989582496114606, -0.8138896160958433, -0.5294346809985384,
            ],
            object_y_projected_pixel: [233.78807950685427, 978.1478169113318],
            object_y_normalized_projected_pixel: [
              0.1660426701042999, 0.6947072563290709,
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
            "At the current time <TIME 00:08:34.0 video 1>, consider the pressure cooker that was moved earlier. Using its last known position to infer its current location, and using the current position of the packet of turmeric powder (marked in red) in the current frame, how far is the pressure cooker from the packet of turmeric powder: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "0ef98aa54c776891",
            object_x_name: "pressure cooker",
            object_x_reference_time_sec: 514.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "a9451025ec911959",
            object_y_name: "packet of turmeric powder",
            object_y_pixel: [233.78807950685427, 978.1478169113318],
            object_y_normalized_projected_pixel: [
              0.1660426701042999, 0.6947072563290709,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.6983405691684307, 0.587723341925729, -1.2312323442862985,
            ],
            distance_m: 1.532655004496305,
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
  oos_staged_h2p0_18: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "c767cfd63d13daa5",
    object_a_name: "cooling rack",
    query_time_sec: 514.0,
    query_time_in_clip_sec: 514.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 514.0,
    clip_duration_sec: 514.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "c767cfd63d13daa5",
      object_name: "cooling rack",
      query_time_sec: 514.0,
      oos_span_start_sec: 512.0,
      oos_span_end_sec: 557.0,
      oos_duration_sec: 45.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 514.0,
      clip_duration_sec: 514.0,
      anchor_assoc_id: "1bf798cf7a93d107",
      anchor_name: "jar of salt",
      anchor_projected_pixel: [303.6425482117905, 1037.9461356240793],
      anchor_world_coordinates: [
        -0.2574533976153539, -0.6242266885342099, -0.4877704959334537,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_18",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:34.0 video 1>, is the previously moved cooling rack visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.307310146132174, 1.0610373474521444, -0.6010066884723697,
          ],
          frame_index: 4332,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The cooling rack was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:28.0 video 1>; Point=(0.1866, 0.7158)",
          "<TIME 00:08:29.0 video 1>; Point=(0.3206, 0.6729)",
          "<TIME 00:08:30.0 video 1>; Point=(0.2527, 0.7185)",
          "<TIME 00:08:31.0 video 1>; Point=(0.1305, 0.8239)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 511.0,
          sampled_last_visible_time_in_clip_sec: 511.0,
          sampled_last_visible_time_token: "<TIME 00:08:31.0 video 1>",
          projected_pixel: [183.79729639734592, 1160.0158047357972],
          normalized_projected_pixel: [0.1305378525549332, 0.8238748613180378],
          camera_coordinates: [
            -0.4819005400197811, 0.4124094459779261, 0.44951292700273787,
          ],
          frame_index: 4332,
          status: "in_view",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 508.0,
              time_token: "<TIME 00:08:28.0 video 1>",
              projected_pixel: [262.7868391624983, 1007.8230658446302],
              normalized_projected_pixel: [
                0.18663838008700165, 0.7157834274464703,
              ],
              camera_coordinates: [
                -0.4432687423654431, 0.29408973177786313, 0.559569724529943,
              ],
              frame_index: 4332,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 509.0,
              time_token: "<TIME 00:08:29.0 video 1>",
              projected_pixel: [451.4617972237694, 947.4559687614932],
              normalized_projected_pixel: [
                0.32064048098279074, 0.6729090687226514,
              ],
              camera_coordinates: [
                -0.28101441931637083, 0.2586182642297838, 0.6656084518808043,
              ],
              frame_index: 4332,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 510.0,
              time_token: "<TIME 00:08:30.0 video 1>",
              projected_pixel: [355.783241281912, 1011.5941449501863],
              normalized_projected_pixel: [
                0.2526869611377216, 0.7184617506748482,
              ],
              camera_coordinates: [
                -0.3650932875778756, 0.31091453263426583, 0.6037713764321204,
              ],
              frame_index: 4332,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 511.0,
              time_token: "<TIME 00:08:31.0 video 1>",
              projected_pixel: [183.79729639734592, 1160.0158047357972],
              normalized_projected_pixel: [
                0.1305378525549332, 0.8238748613180378,
              ],
              camera_coordinates: [
                -0.4819005400197811, 0.4124094459779261, 0.44951292700273787,
              ],
              frame_index: 4332,
              status: "in_view",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
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
          "The cooling rack was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:24.4 video 1>; Point=(0.4585, 0.6847)",
          "<TIME 00:02:25.0 video 1>; Point=(0.4698, 0.6909)",
          "<TIME 00:02:26.0 video 1>; Point=(0.2002, 0.789)",
        ],
        answer_metadata: {
          last_placement_time_sec: 144.4,
          last_placement_time_in_clip_sec: 144.4,
          last_placement_time_token: "<TIME 00:02:24.4 video 1>",
          projected_pixel: [645.5317481385332, 964.1031564708219],
          normalized_projected_pixel: [0.45847425293929917, 0.6847323554480269],
          camera_coordinates: [
            -0.058081953591238245, 0.2500968071087371, 0.6100728608609653,
          ],
          frame_index: 4332,
          status: "last_past_track_end",
          fixture: "P04_counter.001",
          world_coordinates: [
            1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 144.4,
              time_token: "<TIME 00:02:24.4 video 1>",
              projected_pixel: [645.5317481385332, 964.1031564708219],
              normalized_projected_pixel: [
                0.45847425293929917, 0.6847323554480269,
              ],
              camera_coordinates: [
                -0.058081953591238245, 0.2500968071087371, 0.6100728608609653,
              ],
              frame_index: 4332,
              status: "last_past_track_end",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 145.0,
              time_token: "<TIME 00:02:25.0 video 1>",
              projected_pixel: [661.4488975706744, 972.8323941922986],
              normalized_projected_pixel: [
                0.46977904657008124, 0.6909320981479393,
              ],
              camera_coordinates: [
                -0.04113995911958934, 0.2532646766373037, 0.5964156580124288,
              ],
              frame_index: 4350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 146.0,
              time_token: "<TIME 00:02:26.0 video 1>",
              projected_pixel: [281.8984905474457, 1110.890592571001],
              normalized_projected_pixel: [
                0.20021199612744722, 0.788984795860086,
              ],
              camera_coordinates: [
                -0.3463874934894353, 0.324937500523065, 0.44394570024826313,
              ],
              frame_index: 4380,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.001",
              world_coordinates: [
                1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
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
          "At the current time <TIME 00:08:34.0 video 1>, based on the last known position of the cooling rack that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 144.4,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.001",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:08:34.0 video 1>, consider the cooling rack that was moved earlier. Using its last known position to infer its current location, in which direction is the cooling rack from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 514.0,
            camera_coordinates: [
              -1.307310146132174, 1.0610373474521444, -0.6010066884723697,
            ],
            world_coordinates: [
              1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.307310146132174,
              z: -0.6010066884723697,
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
            "At the current time <TIME 00:08:34.0 video 1>, consider the cooling rack that was moved earlier. Using its last known position to infer its current location, and using the current position of the jar of salt (marked in red) in the current frame, where is the cooling rack relative to jar of salt from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "c767cfd63d13daa5",
            object_x_name: "cooling rack",
            object_x_reference_time_sec: 514.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              1.2430601053674817, -1.2944755163437427, -0.6154855843757145,
            ],
            object_x_camera_coordinates: [
              -1.307310146132174, 1.0610373474521444, -0.6010066884723697,
            ],
            object_y_assoc_id: "1bf798cf7a93d107",
            object_y_name: "jar of salt",
            object_y_reference_time_sec: 514.0,
            object_y_world_coordinates: [
              -0.2574533976153539, -0.6242266885342099, -0.4877704959334537,
            ],
            object_y_projected_pixel: [303.6425482117905, 1037.9461356240793],
            object_y_normalized_projected_pixel: [
              0.2156552189004194, 0.7371776531421017,
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
            "At the current time <TIME 00:08:34.0 video 1>, consider the cooling rack that was moved earlier. Using its last known position to infer its current location, and using the current position of the jar of salt (marked in red) in the current frame, how far is the cooling rack from the jar of salt: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "c767cfd63d13daa5",
            object_x_name: "cooling rack",
            object_x_reference_time_sec: 514.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "1bf798cf7a93d107",
            object_y_name: "jar of salt",
            object_y_pixel: [303.6425482117905, 1037.9461356240793],
            object_y_normalized_projected_pixel: [
              0.2156552189004194, 0.7371776531421017,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.9126315784433948, 0.7427112656365322, -1.1543695186352527,
            ],
            distance_m: 1.6483583978096774,
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
  oos_staged_h2p0_19: {
    inputs: {
      "video 1": {
        id: "P04-20240414-165333",
      },
    },
    video_id: "P04-20240414-165333",
    object_a_assoc_id: "82395476e05be14d",
    object_a_name: "large white ceramic bowl",
    query_time_sec: 515.0,
    query_time_in_clip_sec: 515.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 515.0,
    clip_duration_sec: 515.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-165333",
      assoc_id: "82395476e05be14d",
      object_name: "large white ceramic bowl",
      query_time_sec: 515.0,
      oos_span_start_sec: 513.0,
      oos_span_end_sec: 557.0,
      oos_duration_sec: 44.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 515.0,
      clip_duration_sec: 515.0,
      anchor_assoc_id: "676223f5e13ff2a2",
      anchor_name: "tablespoon2",
      anchor_projected_pixel: [339.15121417264857, 860.8958376471679],
      anchor_world_coordinates: [
        -0.44965449525889817, -0.6574083230019101, -0.5839646413290371,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_19",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:35.0 video 1>, is the previously moved large white ceramic bowl visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.1507874818438242, 0.5967582177262849, -0.11752260285495297,
          ],
          frame_index: 14963,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The large white ceramic bowl was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:29.0 video 1>; Point=(0.8431, 0.8222)",
          "<TIME 00:08:30.0 video 1>; Point=(0.7919, 0.8277)",
          "<TIME 00:08:31.0 video 1>; Point=(0.7021, 0.8249)",
          "<TIME 00:08:32.0 video 1>; Point=(0.3833, 0.9614)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 512.0,
          sampled_last_visible_time_in_clip_sec: 512.0,
          sampled_last_visible_time_token: "<TIME 00:08:32.0 video 1>",
          projected_pixel: [539.718500130453, 1353.6771034421422],
          normalized_projected_pixel: [0.3833227983881058, 0.9614183973310669],
          camera_coordinates: [
            -0.13564161373501804, 0.5280362847551203, 0.4153655730878371,
          ],
          frame_index: 14963,
          status: "in_view",
          fixture: "P04_counter.002",
          world_coordinates: [
            0.6891371569489839, -0.7949187218684048, -0.6415921217538477,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 509.0,
              time_token: "<TIME 00:08:29.0 video 1>",
              projected_pixel: [1187.1315238085622, 1157.6565624461246],
              normalized_projected_pixel: [
                0.8431331845231266, 0.8221992631009407,
              ],
              camera_coordinates: [
                0.41844579753828837, 0.383128180946817, 0.43686872935377274,
              ],
              frame_index: 14963,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.6891371569489839, -0.7949187218684048, -0.6415921217538477,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 510.0,
              time_token: "<TIME 00:08:30.0 video 1>",
              projected_pixel: [1114.937542002056, 1165.43780484171],
              normalized_projected_pixel: [
                0.7918590497173693, 0.8277257136659872,
              ],
              camera_coordinates: [
                0.36334311550441534, 0.3977468381990947, 0.4662587138885454,
              ],
              frame_index: 14963,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.6891371569489839, -0.7949187218684048, -0.6415921217538477,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 511.0,
              time_token: "<TIME 00:08:31.0 video 1>",
              projected_pixel: [988.4979624386406, 1161.5161484423752],
              normalized_projected_pixel: [
                0.7020582119592618, 0.8249404463369142,
              ],
              camera_coordinates: [
                0.26193291158451615, 0.4100144272259543, 0.5109558691898416,
              ],
              frame_index: 14963,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.6891371569489839, -0.7949187218684048, -0.6415921217538477,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 512.0,
              time_token: "<TIME 00:08:32.0 video 1>",
              projected_pixel: [539.718500130453, 1353.6771034421422],
              normalized_projected_pixel: [
                0.3833227983881058, 0.9614183973310669,
              ],
              camera_coordinates: [
                -0.13564161373501804, 0.5280362847551203, 0.4153655730878371,
              ],
              frame_index: 14963,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.6891371569489839, -0.7949187218684048, -0.6415921217538477,
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
          "The large white ceramic bowl was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:18.8 video 1>; Point=(0.6512, 0.8881)",
          "<TIME 00:08:19.0 video 1>; Point=(0.6684, 0.9005)",
          "<TIME 00:08:20.0 video 1>; Point=(0.7835, 0.8769)",
          "<TIME 00:08:21.0 video 1>; Point=(0.7777, 0.8022)",
        ],
        answer_metadata: {
          last_placement_time_sec: 498.76666666666665,
          last_placement_time_in_clip_sec: 498.76666666666665,
          last_placement_time_token: "<TIME 00:08:18.8 video 1>",
          projected_pixel: [916.8800419784575, 1250.457054745937],
          normalized_projected_pixel: [0.6511932116324272, 0.8881087036547849],
          camera_coordinates: [
            0.17954651225039708, 0.4504969009067757, 0.4553739325936192,
          ],
          frame_index: 14963,
          status: "last_past_track_end",
          fixture: "P04_counter.002",
          world_coordinates: [
            0.6891371569489839, -0.7949187218684048, -0.6415921217538477,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 498.76666666666665,
              time_token: "<TIME 00:08:18.8 video 1>",
              projected_pixel: [916.8800419784575, 1250.457054745937],
              normalized_projected_pixel: [
                0.6511932116324272, 0.8881087036547849,
              ],
              camera_coordinates: [
                0.17954651225039708, 0.4504969009067757, 0.4553739325936192,
              ],
              frame_index: 14963,
              status: "last_past_track_end",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.6891371569489839, -0.7949187218684048, -0.6415921217538477,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 499.0,
              time_token: "<TIME 00:08:19.0 video 1>",
              projected_pixel: [941.1638166507184, 1267.9512178736852],
              normalized_projected_pixel: [
                0.6684402106894307, 0.9005335354216514,
              ],
              camera_coordinates: [
                0.19758609209400768, 0.45978414175888194, 0.44189676841078596,
              ],
              frame_index: 14970,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.6891371569489839, -0.7949187218684048, -0.6415921217538477,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 500.0,
              time_token: "<TIME 00:08:20.0 video 1>",
              projected_pixel: [1103.1837423716147, 1234.7257274235221],
              normalized_projected_pixel: [
                0.7835111806616581, 0.876935885954206,
              ],
              camera_coordinates: [
                0.33535363686807207, 0.4362880965335934, 0.42366496523450103,
              ],
              frame_index: 15000,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.6891371569489839, -0.7949187218684048, -0.6415921217538477,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 501.0,
              time_token: "<TIME 00:08:21.0 video 1>",
              projected_pixel: [1095.014354238849, 1129.4887851949202],
              normalized_projected_pixel: [
                0.7777090584082734, 0.8021937394850286,
              ],
              camera_coordinates: [
                0.3808568800842105, 0.4029769531895284, 0.5284620950281527,
              ],
              frame_index: 15030,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.6891371569489839, -0.7949187218684048, -0.6415921217538477,
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
          "At the current time <TIME 00:08:35.0 video 1>, based on the last known position of the large white ceramic bowl that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 498.76666666666665,
          correct_fixture: "counter",
          display_correct_answer:
            "counter area beside the hob and close to the door",
          raw_correct_fixture: "P04_counter.002",
          counter_area_choices: [
            "counter area beside the hob and close to the door",
            "counter area between the hob and the sink",
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
            "At the current time <TIME 00:08:35.0 video 1>, consider the large white ceramic bowl that was moved earlier. Using its last known position to infer its current location, in which direction is the large white ceramic bowl from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 515.0,
            camera_coordinates: [
              -1.1507874818438242, 0.5967582177262849, -0.11752260285495297,
            ],
            world_coordinates: [
              0.6891371569489839, -0.7949187218684048, -0.6415921217538477,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.1507874818438242,
              z: -0.11752260285495297,
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
            "At the current time <TIME 00:08:35.0 video 1>, consider the large white ceramic bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the tablespoon2 (marked in red) in the current frame, where is the large white ceramic bowl relative to tablespoon2 from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "82395476e05be14d",
            object_x_name: "large white ceramic bowl",
            object_x_reference_time_sec: 515.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              0.6891371569489839, -0.7949187218684048, -0.6415921217538477,
            ],
            object_x_camera_coordinates: [
              -1.1507874818438242, 0.5967582177262849, -0.11752260285495297,
            ],
            object_y_assoc_id: "676223f5e13ff2a2",
            object_y_name: "tablespoon2",
            object_y_reference_time_sec: 515.0,
            object_y_world_coordinates: [
              -0.44965449525889817, -0.6574083230019101, -0.5839646413290371,
            ],
            object_y_projected_pixel: [339.15121417264857, 860.8958376471679],
            object_y_normalized_projected_pixel: [
              0.24087444188398335, 0.6114317028744091,
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
            "At the current time <TIME 00:08:35.0 video 1>, consider the large white ceramic bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the tablespoon2 (marked in red) in the current frame, how far is the large white ceramic bowl from the tablespoon2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "82395476e05be14d",
            object_x_name: "large white ceramic bowl",
            object_x_reference_time_sec: 515.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "676223f5e13ff2a2",
            object_y_name: "tablespoon2",
            object_y_pixel: [339.15121417264857, 860.8958376471679],
            object_y_normalized_projected_pixel: [
              0.24087444188398335, 0.6114317028744091,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.791896196557649, 0.4536241732667577, -0.6972818560241416,
            ],
            distance_m: 1.148510541281573,
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
};

export const VIDEO: VideoEntry = {
  id: "P04-20240414-165333",
  label: "P04-20240414-165333",
  sampledUrl: "https://youtu.be/v3v2-W6DjBs",
  fullUrl: "https://youtu.be/1JVjhUHWqHM",
  duration: 220,
  trajectory: TRAJECTORY,
  rawJson: { TRAJECTORY },
};

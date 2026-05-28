import type { TrajectoryData, VideoEntry } from "../Types";

const TRAJECTORY: Record<string, TrajectoryData> = {
  oos_staged_h2p0_0: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "08e1677994e5e4df",
    object_a_name: "wooden spatula",
    query_time_sec: 209.0,
    query_time_in_clip_sec: 209.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 209.0,
    clip_duration_sec: 209.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "08e1677994e5e4df",
      object_name: "wooden spatula",
      query_time_sec: 209.0,
      oos_span_start_sec: 207.0,
      oos_span_end_sec: 252.0,
      oos_duration_sec: 45.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 209.0,
      clip_duration_sec: 209.0,
      anchor_assoc_id: "1c965b87f51f3af9",
      anchor_name: "cup",
      anchor_projected_pixel: [293.2210688595228, 856.8370722520885],
      anchor_world_coordinates: [
        -0.26126230819906726, -0.39535115301952584, -0.5524823101197143,
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
          "At the current time <TIME 00:03:29.0 video 1>, is the previously moved wooden spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1521.852059117423, 1136.5680672843725],
          camera_coordinates: [
            0.784044591196897, 0.4055777754872816, 0.3320012665681652,
          ],
          frame_index: 4292,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The wooden spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:26.0 video 1>; Point=(0.987, 0.5249)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 206.0,
          sampled_last_visible_time_in_clip_sec: 206.0,
          sampled_last_visible_time_token: "<TIME 00:03:26.0 video 1>",
          projected_pixel: [1389.6375675537854, 739.005723119517],
          normalized_projected_pixel: [0.9869584996830862, 0.5248620192610206],
          camera_coordinates: [
            0.7669094981305876, 0.026874129318524786, 0.540642715683449,
          ],
          frame_index: 4292,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.2957411976843018, 0.1108579509653971, -0.5339509423232628,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 206.0,
              time_token: "<TIME 00:03:26.0 video 1>",
              projected_pixel: [1389.6375675537854, 739.005723119517],
              normalized_projected_pixel: [
                0.9869584996830862, 0.5248620192610206,
              ],
              camera_coordinates: [
                0.7669094981305876, 0.026874129318524786, 0.540642715683449,
              ],
              frame_index: 4292,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2957411976843018, 0.1108579509653971, -0.5339509423232628,
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
          "The wooden spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:23.1 video 1>; Point=(0.6763, 0.5836)",
          "<TIME 00:02:24.0 video 1>; Point=(0.604, 0.5847)",
          "<TIME 00:02:25.0 video 1>; Point=(0.61, 0.5673)",
          "<TIME 00:02:26.0 video 1>; Point=(0.6175, 0.5633)",
        ],
        answer_metadata: {
          last_placement_time_sec: 143.06666666666666,
          last_placement_time_in_clip_sec: 143.06666666666666,
          last_placement_time_token: "<TIME 00:02:23.1 video 1>",
          projected_pixel: [952.2460204303513, 821.6876886557216],
          normalized_projected_pixel: [0.6763110940556473, 0.5835850061475295],
          camera_coordinates: [
            0.2507278608450643, 0.10662617809949959, 0.6086224823166777,
          ],
          frame_index: 4292,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.2957411976843018, 0.1108579509653971, -0.5339509423232628,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 143.06666666666666,
              time_token: "<TIME 00:02:23.1 video 1>",
              projected_pixel: [952.2460204303513, 821.6876886557216],
              normalized_projected_pixel: [
                0.6763110940556473, 0.5835850061475295,
              ],
              camera_coordinates: [
                0.2507278608450643, 0.10662617809949959, 0.6086224823166777,
              ],
              frame_index: 4292,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2957411976843018, 0.1108579509653971, -0.5339509423232628,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 144.0,
              time_token: "<TIME 00:02:24.0 video 1>",
              projected_pixel: [850.4979197304904, 823.2245467868671],
              normalized_projected_pixel: [
                0.604046817990405, 0.5846765247065817,
              ],
              camera_coordinates: [
                0.1332560478015789, 0.09712167859249676, 0.5505020312241132,
              ],
              frame_index: 4320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2957411976843018, 0.1108579509653971, -0.5339509423232628,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 145.0,
              time_token: "<TIME 00:02:25.0 video 1>",
              projected_pixel: [858.9177201721368, 798.8190007638982],
              normalized_projected_pixel: [
                0.6100267898949835, 0.5673430403152686,
              ],
              camera_coordinates: [
                0.14000008648911078, 0.07458157993375647, 0.5471728556670143,
              ],
              frame_index: 4350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2957411976843018, 0.1108579509653971, -0.5339509423232628,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 146.0,
              time_token: "<TIME 00:02:26.0 video 1>",
              projected_pixel: [869.4568549196031, 793.0647550488542],
              normalized_projected_pixel: [
                0.6175119708235818, 0.5632562180744703,
              ],
              camera_coordinates: [
                0.14951508303304317, 0.06943377708469745, 0.5472492521699058,
              ],
              frame_index: 4380,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2957411976843018, 0.1108579509653971, -0.5339509423232628,
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
          "At the current time <TIME 00:03:29.0 video 1>, based on the last known position of the wooden spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 143.06666666666666,
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
            "At the current time <TIME 00:03:29.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the wooden spatula from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 209.0,
            camera_coordinates: [
              0.784044591196897, 0.4055777754872816, 0.3320012665681652,
            ],
            world_coordinates: [
              -1.2957411976843018, 0.1108579509653971, -0.5339509423232628,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.784044591196897,
              z: 0.3320012665681652,
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
            "At the current time <TIME 00:03:29.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup (marked in red) in the current frame, where is the wooden spatula relative to cup from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 209.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.2957411976843018, 0.1108579509653971, -0.5339509423232628,
            ],
            object_x_camera_coordinates: [
              0.784044591196897, 0.4055777754872816, 0.3320012665681652,
            ],
            object_y_assoc_id: "1c965b87f51f3af9",
            object_y_name: "cup",
            object_y_reference_time_sec: 209.0,
            object_y_world_coordinates: [
              -0.26126230819906726, -0.39535115301952584, -0.5524823101197143,
            ],
            object_y_projected_pixel: [293.2210688595228, 856.8370722520885],
            object_y_normalized_projected_pixel: [
              0.20825360004227472, 0.608549056997222,
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
            "At the current time <TIME 00:03:29.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup (marked in red) in the current frame, how far is the wooden spatula from the cup: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 209.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "1c965b87f51f3af9",
            object_y_name: "cup",
            object_y_pixel: [293.2210688595228, 856.8370722520885],
            object_y_normalized_projected_pixel: [
              0.20825360004227472, 0.608549056997222,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.106613842788966, 0.2944971399970006, -0.1241566704678243,
            ],
            distance_m: 1.1518409791895021,
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
  oos_staged_h2p0_1: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "db162eded46b7ff5",
    object_a_name: "long spatula",
    query_time_sec: 299.0,
    query_time_in_clip_sec: 299.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 299.0,
    clip_duration_sec: 299.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "db162eded46b7ff5",
      object_name: "long spatula",
      query_time_sec: 299.0,
      oos_span_start_sec: 297.0,
      oos_span_end_sec: 310.0,
      oos_duration_sec: 13.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 299.0,
      clip_duration_sec: 299.0,
      anchor_assoc_id: "4947bf2df550ce7a",
      anchor_name: "ladle",
      anchor_projected_pixel: [1291.7513448606292, 506.2180687250904],
      anchor_world_coordinates: [
        -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
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
          "At the current time <TIME 00:04:59.0 video 1>, is the previously moved long spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [2044.7868463160592, 741.8063435331256],
          camera_coordinates: [
            1.7827756182799286, 0.04380399560599038, 0.534058480940623,
          ],
          frame_index: 7890,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The long spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:53.0 video 1>; Point=(0.6387, 0.5927)",
          "<TIME 00:04:54.0 video 1>; Point=(0.587, 0.6411)",
          "<TIME 00:04:55.0 video 1>; Point=(0.5869, 0.6311)",
          "<TIME 00:04:56.0 video 1>; Point=(0.6368, 0.6367)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 296.0,
          sampled_last_visible_time_in_clip_sec: 296.0,
          sampled_last_visible_time_token: "<TIME 00:04:56.0 video 1>",
          projected_pixel: [896.6534297238503, 896.4164803433255],
          normalized_projected_pixel: [0.6368277199743255, 0.6366594320620209],
          camera_coordinates: [
            0.18991100386854898, 0.1773285158623984, 0.5939082735437302,
          ],
          frame_index: 7890,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 293.0,
              time_token: "<TIME 00:04:53.0 video 1>",
              projected_pixel: [899.2290237449648, 834.4817479239821],
              normalized_projected_pixel: [
                0.6386569770915943, 0.5926716959687373,
              ],
              camera_coordinates: [
                0.26441274141635446, 0.1600544862837035, 0.8189615665711264,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 294.0,
              time_token: "<TIME 00:04:54.0 video 1>",
              projected_pixel: [826.4914560550243, 902.6975141825875],
              normalized_projected_pixel: [
                0.5869967727663524, 0.6411203935955877,
              ],
              camera_coordinates: [
                0.12230463195240643, 0.18535584425682872, 0.6024752399595965,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 295.0,
              time_token: "<TIME 00:04:55.0 video 1>",
              projected_pixel: [826.4009212063282, 888.577209124297],
              normalized_projected_pixel: [
                0.5869324724476763, 0.6310917678439609,
              ],
              camera_coordinates: [
                0.11899340083969312, 0.16681828699371648, 0.5870159798769936,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 296.0,
              time_token: "<TIME 00:04:56.0 video 1>",
              projected_pixel: [896.6534297238503, 896.4164803433255],
              normalized_projected_pixel: [
                0.6368277199743255, 0.6366594320620209,
              ],
              camera_coordinates: [
                0.18991100386854898, 0.1773285158623984, 0.5939082735437302,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "The long spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:23.0 video 1>; Point=(0.5456, 0.6035)",
          "<TIME 00:04:24.0 video 1>; Point=(1.0136, 0.7599)",
          "<TIME 00:04:25.0 video 1>; Point=(0.9798, 0.8025)",
          "<TIME 00:04:26.0 video 1>; Point=(0.9822, 0.7947)",
        ],
        answer_metadata: {
          last_placement_time_sec: 263.0,
          last_placement_time_in_clip_sec: 263.0,
          last_placement_time_token: "<TIME 00:04:23.0 video 1>",
          projected_pixel: [768.2699686468745, 849.6894038200255],
          normalized_projected_pixel: [0.545646284550337, 0.6034725879403591],
          camera_coordinates: [
            0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
          ],
          frame_index: 7890,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [768.2699686468745, 849.6894038200255],
              normalized_projected_pixel: [
                0.545646284550337, 0.6034725879403591,
              ],
              camera_coordinates: [
                0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
              ],
              frame_index: 7890,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 264.0,
              time_token: "<TIME 00:04:24.0 video 1>",
              projected_pixel: [1427.1820970145077, 1069.9447235761877],
              normalized_projected_pixel: [
                1.0136236484478038, 0.7599039229944515,
              ],
              camera_coordinates: [
                0.7699519635797746, 0.3785529285615803, 0.3796412915532063,
              ],
              frame_index: 7920,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [1379.5321236322907, 1129.9326094645107],
              normalized_projected_pixel: [
                0.9797813378070246, 0.80250895558559,
              ],
              camera_coordinates: [
                0.7823005937687337, 0.48114388262252394, 0.4198671279037529,
              ],
              frame_index: 7950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 266.0,
              time_token: "<TIME 00:04:26.0 video 1>",
              projected_pixel: [1382.9653634615502, 1118.974342497681],
              normalized_projected_pixel: [
                0.9822197183675783, 0.7947260955239211,
              ],
              camera_coordinates: [
                0.7748697764384478, 0.46163455405297654, 0.41561168138743415,
              ],
              frame_index: 7980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "At the current time <TIME 00:04:59.0 video 1>, based on the last known position of the long spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 263.0,
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
            "At the current time <TIME 00:04:59.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the long spatula from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 299.0,
            camera_coordinates: [
              1.7827756182799286, 0.04380399560599038, 0.534058480940623,
            ],
            world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.7827756182799286,
              z: 0.534058480940623,
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
            "At the current time <TIME 00:04:59.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the ladle (marked in red) in the current frame, where is the long spatula relative to ladle from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 299.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            object_x_camera_coordinates: [
              1.7827756182799286, 0.04380399560599038, 0.534058480940623,
            ],
            object_y_assoc_id: "4947bf2df550ce7a",
            object_y_name: "ladle",
            object_y_reference_time_sec: 299.0,
            object_y_world_coordinates: [
              -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
            ],
            object_y_projected_pixel: [1291.7513448606292, 506.2180687250904],
            object_y_normalized_projected_pixel: [
              0.9174370347021514, 0.35952987835588807,
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
            "At the current time <TIME 00:04:59.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the ladle (marked in red) in the current frame, how far is the long spatula from the ladle: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 299.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "4947bf2df550ce7a",
            object_y_name: "ladle",
            object_y_pixel: [1291.7513448606292, 506.2180687250904],
            object_y_normalized_projected_pixel: [
              0.9174370347021514, 0.35952987835588807,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.0469584543817863, 0.3052655131399262, -0.1187134591998461,
            ],
            distance_m: 1.0969967748855394,
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
  oos_staged_h2p0_2: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "ea7d7fc4d075b4ff",
    object_a_name: "spoon",
    query_time_sec: 302.0,
    query_time_in_clip_sec: 302.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 302.0,
    clip_duration_sec: 302.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "ea7d7fc4d075b4ff",
      object_name: "spoon",
      query_time_sec: 302.0,
      oos_span_start_sec: 300.0,
      oos_span_end_sec: 305.0,
      oos_duration_sec: 5.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.004",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 302.0,
      clip_duration_sec: 302.0,
      anchor_assoc_id: "40ade0a98169a5e9",
      anchor_name: "cup2",
      anchor_projected_pixel: [1266.2716897520168, 367.4440704815983],
      anchor_world_coordinates: [
        -0.17096652410110308, -0.5263621125700811, -0.576646310678254,
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
          "At the current time <TIME 00:05:02.0 video 1>, is the previously moved spoon visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1439.591857798097, 489.95220132723614],
          camera_coordinates: [
            0.6404641422320361, -0.1956383853256986, 0.33297237071573665,
          ],
          frame_index: 3513,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The spoon was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:57.0 video 1>; Point=(0.3827, 0.6214)",
          "<TIME 00:04:59.0 video 1>; Point=(1, 0.473)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 299.0,
          sampled_last_visible_time_in_clip_sec: 299.0,
          sampled_last_visible_time_token: "<TIME 00:04:59.0 video 1>",
          projected_pixel: [1407.9938656294903, 665.9626325857422],
          normalized_projected_pixel: [0.999995643202763, 0.47298482427964644],
          camera_coordinates: [
            0.713829569546395, -0.04961321864109702, 0.4722990997618715,
          ],
          frame_index: 3513,
          status: "in_view",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.27955368685378346, -0.3570615975136957, -0.5059649202978496,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 297.0,
              time_token: "<TIME 00:04:57.0 video 1>",
              projected_pixel: [538.8536897986024, 874.9233432241829],
              normalized_projected_pixel: [
                0.38270858650468925, 0.6213944199035389,
              ],
              camera_coordinates: [
                -0.15921584363371616, 0.15416301375290176, 0.5884176671553066,
              ],
              frame_index: 3513,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27955368685378346, -0.3570615975136957, -0.5059649202978496,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 299.0,
              time_token: "<TIME 00:04:59.0 video 1>",
              projected_pixel: [1407.9938656294903, 665.9626325857422],
              normalized_projected_pixel: [
                0.999995643202763, 0.47298482427964644,
              ],
              camera_coordinates: [
                0.713829569546395, -0.04961321864109702, 0.4722990997618715,
              ],
              frame_index: 3513,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27955368685378346, -0.3570615975136957, -0.5059649202978496,
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
          "<TIME 00:01:57.1 video 1>; Point=(0.5727, 0.7292)",
          "<TIME 00:01:58.0 video 1>; Point=(0.4985, 0.7662)",
          "<TIME 00:01:59.0 video 1>; Point=(0.3327, 0.8067)",
          "<TIME 00:02:00.0 video 1>; Point=(0.202, 0.761)",
        ],
        answer_metadata: {
          last_placement_time_sec: 117.1,
          last_placement_time_in_clip_sec: 117.1,
          last_placement_time_token: "<TIME 00:01:57.1 video 1>",
          projected_pixel: [806.3034239225373, 1026.7715189452545],
          normalized_projected_pixel: [0.5726586817631657, 0.7292411356145273],
          camera_coordinates: [
            0.07297877295320226, 0.2202849875732037, 0.4237371133551237,
          ],
          frame_index: 3513,
          status: "last_past_track_end",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.27955368685378346, -0.3570615975136957, -0.5059649202978496,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 117.1,
              time_token: "<TIME 00:01:57.1 video 1>",
              projected_pixel: [806.3034239225373, 1026.7715189452545],
              normalized_projected_pixel: [
                0.5726586817631657, 0.7292411356145273,
              ],
              camera_coordinates: [
                0.07297877295320226, 0.2202849875732037, 0.4237371133551237,
              ],
              frame_index: 3513,
              status: "last_past_track_end",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27955368685378346, -0.3570615975136957, -0.5059649202978496,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 118.0,
              time_token: "<TIME 00:01:58.0 video 1>",
              projected_pixel: [701.8744267911741, 1078.8139756751484],
              normalized_projected_pixel: [
                0.49849035993691343, 0.766203107723827,
              ],
              camera_coordinates: [
                -0.0009708986600138539, 0.24862503857228124, 0.4060784559017465,
              ],
              frame_index: 3540,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27955368685378346, -0.3570615975136957, -0.5059649202978496,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 119.0,
              time_token: "<TIME 00:01:59.0 video 1>",
              projected_pixel: [468.45154186018647, 1135.8296067555],
              normalized_projected_pixel: [
                0.33270706098024605, 0.8066971638888494,
              ],
              camera_coordinates: [
                -0.1520431495130567, 0.2719541079741137, 0.36806083924786953,
              ],
              frame_index: 3570,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27955368685378346, -0.3570615975136957, -0.5059649202978496,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 120.0,
              time_token: "<TIME 00:02:00.0 video 1>",
              projected_pixel: [284.444047816308, 1071.5168946542083],
              normalized_projected_pixel: [
                0.2020199203240824, 0.7610205217714547,
              ],
              camera_coordinates: [
                -0.3219384816150521, 0.2735749848450931, 0.42245865003730987,
              ],
              frame_index: 3600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.27955368685378346, -0.3570615975136957, -0.5059649202978496,
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
          "At the current time <TIME 00:05:02.0 video 1>, based on the last known position of the spoon that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 117.1,
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
            "At the current time <TIME 00:05:02.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, in which direction is the spoon from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 302.0,
            camera_coordinates: [
              0.6404641422320361, -0.1956383853256986, 0.33297237071573665,
            ],
            world_coordinates: [
              -0.27955368685378346, -0.3570615975136957, -0.5059649202978496,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.6404641422320361,
              z: 0.33297237071573665,
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
            "At the current time <TIME 00:05:02.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, where is the spoon relative to cup2 from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "ea7d7fc4d075b4ff",
            object_x_name: "spoon",
            object_x_reference_time_sec: 302.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.27955368685378346, -0.3570615975136957, -0.5059649202978496,
            ],
            object_x_camera_coordinates: [
              0.6404641422320361, -0.1956383853256986, 0.33297237071573665,
            ],
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_reference_time_sec: 302.0,
            object_y_world_coordinates: [
              -0.17096652410110308, -0.5263621125700811, -0.576646310678254,
            ],
            object_y_projected_pixel: [1266.2716897520168, 367.4440704815983],
            object_y_normalized_projected_pixel: [
              0.89934068874433, 0.26096880005795337,
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
            "At the current time <TIME 00:05:02.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, how far is the spoon from the cup2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "ea7d7fc4d075b4ff",
            object_x_name: "spoon",
            object_x_reference_time_sec: 302.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_pixel: [1266.2716897520168, 367.4440704815983],
            object_y_normalized_projected_pixel: [
              0.89934068874433, 0.26096880005795337,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.17023259294526336, 0.09495582816086223, -0.08633626269742467,
            ],
            distance_m: 0.21318934133568135,
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
  oos_staged_h2p0_3: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "08e1677994e5e4df",
    object_a_name: "wooden spatula",
    query_time_sec: 315.0,
    query_time_in_clip_sec: 315.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 315.0,
    clip_duration_sec: 315.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "08e1677994e5e4df",
      object_name: "wooden spatula",
      query_time_sec: 315.0,
      oos_span_start_sec: 313.0,
      oos_span_end_sec: 317.0,
      oos_duration_sec: 4.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 315.0,
      clip_duration_sec: 315.0,
      anchor_assoc_id: "c89fd59c44994570",
      anchor_name: "frying pan",
      anchor_projected_pixel: [729.9330382302742, 811.6942735395737],
      anchor_world_coordinates: [
        -0.629882290356798, -0.3527539003381792, -0.5861641326231133,
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
          "At the current time <TIME 00:05:15.0 video 1>, is the previously moved wooden spatula visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1432.4970165328482, 876.136925924077],
          camera_coordinates: [
            0.8074351407219056, 0.17888288762020954, 0.4582365669279538,
          ],
          frame_index: 7748,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The wooden spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:11.0 video 1>; Point=(0.9116, 0.4541)",
          "<TIME 00:05:12.0 video 1>; Point=(0.8937, 0.5432)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 312.0,
          sampled_last_visible_time_in_clip_sec: 312.0,
          sampled_last_visible_time_token: "<TIME 00:05:12.0 video 1>",
          projected_pixel: [1258.2890421924437, 764.7602124145882],
          normalized_projected_pixel: [0.8936711947389515, 0.5431535599535428],
          camera_coordinates: [
            0.9159238291603062, 0.0815719553362052, 0.9041911419439674,
          ],
          frame_index: 7748,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 311.0,
              time_token: "<TIME 00:05:11.0 video 1>",
              projected_pixel: [1283.4930343528167, 639.3884554927303],
              normalized_projected_pixel: [
                0.9115717573528528, 0.454111118957905,
              ],
              camera_coordinates: [
                1.077962269409537, -0.14108971829373518, 1.0001261738466942,
              ],
              frame_index: 7748,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 312.0,
              time_token: "<TIME 00:05:12.0 video 1>",
              projected_pixel: [1258.2890421924437, 764.7602124145882],
              normalized_projected_pixel: [
                0.8936711947389515, 0.5431535599535428,
              ],
              camera_coordinates: [
                0.9159238291603062, 0.0815719553362052, 0.9041911419439674,
              ],
              frame_index: 7748,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
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
          "The wooden spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:18.3 video 1>; Point=(0.8965, 0.7246)",
          "<TIME 00:04:19.0 video 1>; Point=(1.0856, 0.8342)",
          "<TIME 00:04:20.0 video 1>; Point=(1.1301, 0.8747)",
          "<TIME 00:04:21.0 video 1>; Point=(0.9729, 0.7434)",
        ],
        answer_metadata: {
          last_placement_time_sec: 258.26666666666665,
          last_placement_time_in_clip_sec: 258.26666666666665,
          last_placement_time_token: "<TIME 00:04:18.3 video 1>",
          projected_pixel: [1262.2666832726827, 1020.2495214033124],
          normalized_projected_pixel: [0.8964962239152576, 0.7246090350875799],
          camera_coordinates: [
            0.5122022410531553, 0.27979182985625517, 0.47250488224150483,
          ],
          frame_index: 7748,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 258.26666666666665,
              time_token: "<TIME 00:04:18.3 video 1>",
              projected_pixel: [1262.2666832726827, 1020.2495214033124],
              normalized_projected_pixel: [
                0.8964962239152576, 0.7246090350875799,
              ],
              camera_coordinates: [
                0.5122022410531553, 0.27979182985625517, 0.47250488224150483,
              ],
              frame_index: 7748,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 259.0,
              time_token: "<TIME 00:04:19.0 video 1>",
              projected_pixel: [1528.5491013349788, 1174.5984086739938],
              normalized_projected_pixel: [
                1.0856172594708655, 0.8342318243423251,
              ],
              camera_coordinates: [
                0.7455196836357179, 0.4171226845173033, 0.31450059187507784,
              ],
              frame_index: 7770,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 260.0,
              time_token: "<TIME 00:04:20.0 video 1>",
              projected_pixel: [1591.1544383993028, 1231.566438090394],
              normalized_projected_pixel: [
                1.1300812772722322, 0.8746920725073821,
              ],
              camera_coordinates: [
                0.800783465999628, 0.46865159766702014, 0.3215261631806963,
              ],
              frame_index: 7800,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 261.0,
              time_token: "<TIME 00:04:21.0 video 1>",
              projected_pixel: [1369.8693834070386, 1046.6846694402873],
              normalized_projected_pixel: [
                0.9729185961697717, 0.7433839981820222,
              ],
              camera_coordinates: [
                0.7205785773959532, 0.3591959662771418, 0.45073618500955814,
              ],
              frame_index: 7830,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
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
          "At the current time <TIME 00:05:15.0 video 1>, based on the last known position of the wooden spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area next to the window",
          "counter area between the hob and the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 258.26666666666665,
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
            "At the current time <TIME 00:05:15.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the wooden spatula from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 315.0,
            camera_coordinates: [
              0.8074351407219056, 0.17888288762020954, 0.4582365669279538,
            ],
            world_coordinates: [
              -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.8074351407219056,
              z: 0.4582365669279538,
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
            "At the current time <TIME 00:05:15.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the frying pan (marked in red) in the current frame, where is the wooden spatula relative to frying pan from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 315.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
            ],
            object_x_camera_coordinates: [
              0.8074351407219056, 0.17888288762020954, 0.4582365669279538,
            ],
            object_y_assoc_id: "c89fd59c44994570",
            object_y_name: "frying pan",
            object_y_reference_time_sec: 315.0,
            object_y_world_coordinates: [
              -0.629882290356798, -0.3527539003381792, -0.5861641326231133,
            ],
            object_y_projected_pixel: [729.9330382302742, 811.6942735395737],
            object_y_normalized_projected_pixel: [
              0.5184183510158197, 0.5764874101843563,
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
            "At the current time <TIME 00:05:15.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the frying pan (marked in red) in the current frame, how far is the wooden spatula from the frying pan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 315.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c89fd59c44994570",
            object_y_name: "frying pan",
            object_y_pixel: [729.9330382302742, 811.6942735395737],
            object_y_normalized_projected_pixel: [
              0.5184183510158197, 0.5764874101843563,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7815424774272086, 0.0863286339009588, -0.1295833420878394,
            ],
            distance_m: 0.7969022020304114,
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
  oos_staged_h2p0_4: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "08e1677994e5e4df",
    object_a_name: "wooden spatula",
    query_time_sec: 322.0,
    query_time_in_clip_sec: 322.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 322.0,
    clip_duration_sec: 322.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "08e1677994e5e4df",
      object_name: "wooden spatula",
      query_time_sec: 322.0,
      oos_span_start_sec: 320.0,
      oos_span_end_sec: 330.0,
      oos_duration_sec: 10.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 322.0,
      clip_duration_sec: 322.0,
      anchor_assoc_id: "61170648df5d8534",
      anchor_name: "spatula3",
      anchor_projected_pixel: [491.425906865432, 866.9971535363812],
      anchor_world_coordinates: [
        -0.37253655229449856, -0.39962728879842535, -0.5645967677405861,
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
          "At the current time <TIME 00:05:22.0 video 1>, is the previously moved wooden spatula visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1439.2505812375412, 1135.1216606623568],
          camera_coordinates: [
            0.7862293171029922, 0.450236204582085, 0.37133561721952035,
          ],
          frame_index: 7748,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The wooden spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:18.0 video 1>; Point=(0.9103, 0.6219)",
          "<TIME 00:05:19.0 video 1>; Point=(0.6895, 0.5971)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 319.0,
          sampled_last_visible_time_in_clip_sec: 319.0,
          sampled_last_visible_time_token: "<TIME 00:05:19.0 video 1>",
          projected_pixel: [970.8262385264187, 840.7852411379747],
          normalized_projected_pixel: [0.6895072716806951, 0.5971486087627661],
          camera_coordinates: [
            0.32748832423945956, 0.15300682915491443, 0.7369699042477184,
          ],
          frame_index: 7748,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 318.0,
              time_token: "<TIME 00:05:18.0 video 1>",
              projected_pixel: [1281.64241074325, 875.5947029190836],
              normalized_projected_pixel: [
                0.9102573939937855, 0.6218712378686674,
              ],
              camera_coordinates: [
                0.9100972859085794, 0.2524780976837912, 0.8377431248835072,
              ],
              frame_index: 7748,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 319.0,
              time_token: "<TIME 00:05:19.0 video 1>",
              projected_pixel: [970.8262385264187, 840.7852411379747],
              normalized_projected_pixel: [
                0.6895072716806951, 0.5971486087627661,
              ],
              camera_coordinates: [
                0.32748832423945956, 0.15300682915491443, 0.7369699042477184,
              ],
              frame_index: 7748,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
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
          "The wooden spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:18.3 video 1>; Point=(0.8965, 0.7246)",
          "<TIME 00:04:19.0 video 1>; Point=(1.0856, 0.8342)",
          "<TIME 00:04:20.0 video 1>; Point=(1.1301, 0.8747)",
          "<TIME 00:04:21.0 video 1>; Point=(0.9729, 0.7434)",
        ],
        answer_metadata: {
          last_placement_time_sec: 258.26666666666665,
          last_placement_time_in_clip_sec: 258.26666666666665,
          last_placement_time_token: "<TIME 00:04:18.3 video 1>",
          projected_pixel: [1262.2666832726827, 1020.2495214033124],
          normalized_projected_pixel: [0.8964962239152576, 0.7246090350875799],
          camera_coordinates: [
            0.5122022410531553, 0.27979182985625517, 0.47250488224150483,
          ],
          frame_index: 7748,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 258.26666666666665,
              time_token: "<TIME 00:04:18.3 video 1>",
              projected_pixel: [1262.2666832726827, 1020.2495214033124],
              normalized_projected_pixel: [
                0.8964962239152576, 0.7246090350875799,
              ],
              camera_coordinates: [
                0.5122022410531553, 0.27979182985625517, 0.47250488224150483,
              ],
              frame_index: 7748,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 259.0,
              time_token: "<TIME 00:04:19.0 video 1>",
              projected_pixel: [1528.5491013349788, 1174.5984086739938],
              normalized_projected_pixel: [
                1.0856172594708655, 0.8342318243423251,
              ],
              camera_coordinates: [
                0.7455196836357179, 0.4171226845173033, 0.31450059187507784,
              ],
              frame_index: 7770,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 260.0,
              time_token: "<TIME 00:04:20.0 video 1>",
              projected_pixel: [1591.1544383993028, 1231.566438090394],
              normalized_projected_pixel: [
                1.1300812772722322, 0.8746920725073821,
              ],
              camera_coordinates: [
                0.800783465999628, 0.46865159766702014, 0.3215261631806963,
              ],
              frame_index: 7800,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 261.0,
              time_token: "<TIME 00:04:21.0 video 1>",
              projected_pixel: [1369.8693834070386, 1046.6846694402873],
              normalized_projected_pixel: [
                0.9729185961697717, 0.7433839981820222,
              ],
              camera_coordinates: [
                0.7205785773959532, 0.3591959662771418, 0.45073618500955814,
              ],
              frame_index: 7830,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
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
          "At the current time <TIME 00:05:22.0 video 1>, based on the last known position of the wooden spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area next to the window",
          "counter area between the hob and the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 258.26666666666665,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the wooden spatula from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 322.0,
            camera_coordinates: [
              0.7862293171029922, 0.450236204582085, 0.37133561721952035,
            ],
            world_coordinates: [
              -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7862293171029922,
              z: 0.37133561721952035,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the spatula3 (marked in red) in the current frame, where is the wooden spatula relative to spatula3 from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 322.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.213976410680628, 0.18935953384300883, -0.5857139278599391,
            ],
            object_x_camera_coordinates: [
              0.7862293171029922, 0.450236204582085, 0.37133561721952035,
            ],
            object_y_assoc_id: "61170648df5d8534",
            object_y_name: "spatula3",
            object_y_reference_time_sec: 322.0,
            object_y_world_coordinates: [
              -0.37253655229449856, -0.39962728879842535, -0.5645967677405861,
            ],
            object_y_projected_pixel: [491.425906865432, 866.9971535363812],
            object_y_normalized_projected_pixel: [
              0.34902408158056253, 0.6157650238184526,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the spatula3 (marked in red) in the current frame, how far is the wooden spatula from the spatula3: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 322.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "61170648df5d8534",
            object_y_name: "spatula3",
            object_y_pixel: [491.425906865432, 866.9971535363812],
            object_y_normalized_projected_pixel: [
              0.34902408158056253, 0.6157650238184526,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9652443632044763, 0.3224197662746478, -0.14043240578661054,
            ],
            distance_m: 1.0273132175620192,
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
  oos_staged_h2p0_5: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "db162eded46b7ff5",
    object_a_name: "long spatula",
    query_time_sec: 322.0,
    query_time_in_clip_sec: 322.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 322.0,
    clip_duration_sec: 322.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "db162eded46b7ff5",
      object_name: "long spatula",
      query_time_sec: 322.0,
      oos_span_start_sec: 320.0,
      oos_span_end_sec: 330.0,
      oos_duration_sec: 10.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 322.0,
      clip_duration_sec: 322.0,
      anchor_assoc_id: "74327afceccb541a",
      anchor_name: "bowl",
      anchor_projected_pixel: [492.3385308731682, 668.1944601652291],
      anchor_world_coordinates: [
        -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
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
          "At the current time <TIME 00:05:22.0 video 1>, is the previously moved long spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1406.8815971033684, 1009.04971129295],
          camera_coordinates: [
            0.8031443190961525, 0.33638415926884857, 0.4461505988576645,
          ],
          frame_index: 7890,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The long spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:18.0 video 1>; Point=(0.8727, 0.5715)",
          "<TIME 00:05:19.0 video 1>; Point=(0.6238, 0.5497)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 319.0,
          sampled_last_visible_time_in_clip_sec: 319.0,
          sampled_last_visible_time_token: "<TIME 00:05:19.0 video 1>",
          projected_pixel: [878.2794508395193, 773.995269185708],
          normalized_projected_pixel: [0.6237780190621586, 0.5497125491375767],
          camera_coordinates: [
            0.22715951379705918, 0.07544190829425956, 0.789538904990028,
          ],
          frame_index: 7890,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 318.0,
              time_token: "<TIME 00:05:18.0 video 1>",
              projected_pixel: [1228.7796725152061, 804.6908609313994],
              normalized_projected_pixel: [
                0.8727128355931861, 0.5715133955478688,
              ],
              camera_coordinates: [
                0.8592367806793404, 0.1460458347847935, 0.9079646985911427,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 319.0,
              time_token: "<TIME 00:05:19.0 video 1>",
              projected_pixel: [878.2794508395193, 773.995269185708],
              normalized_projected_pixel: [
                0.6237780190621586, 0.5497125491375767,
              ],
              camera_coordinates: [
                0.22715951379705918, 0.07544190829425956, 0.789538904990028,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "The long spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:23.0 video 1>; Point=(0.5456, 0.6035)",
          "<TIME 00:04:24.0 video 1>; Point=(1.0136, 0.7599)",
          "<TIME 00:04:25.0 video 1>; Point=(0.9798, 0.8025)",
          "<TIME 00:04:26.0 video 1>; Point=(0.9822, 0.7947)",
        ],
        answer_metadata: {
          last_placement_time_sec: 263.0,
          last_placement_time_in_clip_sec: 263.0,
          last_placement_time_token: "<TIME 00:04:23.0 video 1>",
          projected_pixel: [768.2699686468745, 849.6894038200255],
          normalized_projected_pixel: [0.545646284550337, 0.6034725879403591],
          camera_coordinates: [
            0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
          ],
          frame_index: 7890,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [768.2699686468745, 849.6894038200255],
              normalized_projected_pixel: [
                0.545646284550337, 0.6034725879403591,
              ],
              camera_coordinates: [
                0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
              ],
              frame_index: 7890,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 264.0,
              time_token: "<TIME 00:04:24.0 video 1>",
              projected_pixel: [1427.1820970145077, 1069.9447235761877],
              normalized_projected_pixel: [
                1.0136236484478038, 0.7599039229944515,
              ],
              camera_coordinates: [
                0.7699519635797746, 0.3785529285615803, 0.3796412915532063,
              ],
              frame_index: 7920,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [1379.5321236322907, 1129.9326094645107],
              normalized_projected_pixel: [
                0.9797813378070246, 0.80250895558559,
              ],
              camera_coordinates: [
                0.7823005937687337, 0.48114388262252394, 0.4198671279037529,
              ],
              frame_index: 7950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 266.0,
              time_token: "<TIME 00:04:26.0 video 1>",
              projected_pixel: [1382.9653634615502, 1118.974342497681],
              normalized_projected_pixel: [
                0.9822197183675783, 0.7947260955239211,
              ],
              camera_coordinates: [
                0.7748697764384478, 0.46163455405297654, 0.41561168138743415,
              ],
              frame_index: 7980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "At the current time <TIME 00:05:22.0 video 1>, based on the last known position of the long spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 263.0,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the long spatula from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 322.0,
            camera_coordinates: [
              0.8031443190961525, 0.33638415926884857, 0.4461505988576645,
            ],
            world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.8031443190961525,
              z: 0.4461505988576645,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl (marked in red) in the current frame, where is the long spatula relative to bowl from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 322.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            object_x_camera_coordinates: [
              0.8031443190961525, 0.33638415926884857, 0.4461505988576645,
            ],
            object_y_assoc_id: "74327afceccb541a",
            object_y_name: "bowl",
            object_y_reference_time_sec: 322.0,
            object_y_world_coordinates: [
              -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
            ],
            object_y_projected_pixel: [492.3385308731682, 668.1944601652291],
            object_y_normalized_projected_pixel: [
              0.3496722520406024, 0.4745699290946229,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl (marked in red) in the current frame, how far is the long spatula from the bowl: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 322.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "74327afceccb541a",
            object_y_name: "bowl",
            object_y_pixel: [492.3385308731682, 668.1944601652291],
            object_y_normalized_projected_pixel: [
              0.3496722520406024, 0.4745699290946229,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.014186765866352, 0.384054786351959, -0.16240973000340508,
            ],
            distance_m: 1.0965627183969362,
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
  oos_staged_h2p0_6: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "4947bf2df550ce7a",
    object_a_name: "ladle",
    query_time_sec: 334.0,
    query_time_in_clip_sec: 334.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 334.0,
    clip_duration_sec: 334.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "4947bf2df550ce7a",
      object_name: "ladle",
      query_time_sec: 334.0,
      oos_span_start_sec: 332.0,
      oos_span_end_sec: 343.0,
      oos_duration_sec: 11.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 334.0,
      clip_duration_sec: 334.0,
      anchor_assoc_id: "db162eded46b7ff5",
      anchor_name: "long spatula",
      anchor_projected_pixel: [825.3978822489084, 923.6170591112283],
      anchor_world_coordinates: [
        -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "At the current time <TIME 00:05:34.0 video 1>, is the previously moved ladle visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-815.6713068493159, 1916.1157292033174],
          camera_coordinates: [
            -0.8126431763798931, 0.6515467601554171, 0.2626893324879662,
          ],
          frame_index: 2821,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The ladle was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:28.0 video 1>; Point=(0.3073, 0.5729)",
          "<TIME 00:05:29.0 video 1>; Point=(0.3114, 0.5627)",
          "<TIME 00:05:30.0 video 1>; Point=(0.4124, 0.5576)",
          "<TIME 00:05:31.0 video 1>; Point=(0.3167, 0.5675)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 331.0,
          sampled_last_visible_time_in_clip_sec: 331.0,
          sampled_last_visible_time_token: "<TIME 00:05:31.0 video 1>",
          projected_pixel: [445.9506372368562, 799.0623993182203],
          normalized_projected_pixel: [0.31672630485572173, 0.5675159086066905],
          camera_coordinates: [
            -0.2546308620361501, 0.08243023174981554, 0.5985018854979671,
          ],
          frame_index: 2821,
          status: "in_view",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 328.0,
              time_token: "<TIME 00:05:28.0 video 1>",
              projected_pixel: [432.66006650597564, 806.6271987870895],
              normalized_projected_pixel: [
                0.3072869790525395, 0.5728886355021943,
              ],
              camera_coordinates: [
                -0.3011615802168451, 0.10113398833928522, 0.6715853353482812,
              ],
              frame_index: 2821,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 329.0,
              time_token: "<TIME 00:05:29.0 video 1>",
              projected_pixel: [438.4716289151424, 792.2479953973443],
              normalized_projected_pixel: [
                0.31141450917268637, 0.5626761330947048,
              ],
              camera_coordinates: [
                -0.2986890403633097, 0.08627633737617846, 0.6817298502088321,
              ],
              frame_index: 2821,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 330.0,
              time_token: "<TIME 00:05:30.0 video 1>",
              projected_pixel: [580.6202316211435, 785.0475244976867],
              normalized_projected_pixel: [
                0.41237232359456216, 0.5575621622852889,
              ],
              camera_coordinates: [
                -0.14785165461076905, 0.08350145242736182, 0.7349452678473475,
              ],
              frame_index: 2821,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 331.0,
              time_token: "<TIME 00:05:31.0 video 1>",
              projected_pixel: [445.9506372368562, 799.0623993182203],
              normalized_projected_pixel: [
                0.31672630485572173, 0.5675159086066905,
              ],
              camera_coordinates: [
                -0.2546308620361501, 0.08243023174981554, 0.5985018854979671,
              ],
              frame_index: 2821,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
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
          "The ladle was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:34.0 video 1>; Point=(0.3761, 0.5696)",
          "<TIME 00:01:35.0 video 1>; Point=(0.4674, 0.5385)",
          "<TIME 00:01:36.0 video 1>; Point=(0.392, 0.5449)",
          "<TIME 00:01:37.0 video 1>; Point=(0.3365, 0.5463)",
        ],
        answer_metadata: {
          last_placement_time_sec: 94.03333333333333,
          last_placement_time_in_clip_sec: 94.03333333333333,
          last_placement_time_token: "<TIME 00:01:34.0 video 1>",
          projected_pixel: [529.551867378789, 801.9379147616296],
          normalized_projected_pixel: [0.3761021785360717, 0.5695581780977483],
          camera_coordinates: [
            -0.1634951176246164, 0.08109063388898191, 0.5731112164546994,
          ],
          frame_index: 2821,
          status: "last_past_track_end",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 94.03333333333333,
              time_token: "<TIME 00:01:34.0 video 1>",
              projected_pixel: [529.551867378789, 801.9379147616296],
              normalized_projected_pixel: [
                0.3761021785360717, 0.5695581780977483,
              ],
              camera_coordinates: [
                -0.1634951176246164, 0.08109063388898191, 0.5731112164546994,
              ],
              frame_index: 2821,
              status: "last_past_track_end",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 95.0,
              time_token: "<TIME 00:01:35.0 video 1>",
              projected_pixel: [658.1412170054435, 758.1419433410344],
              normalized_projected_pixel: [
                0.46742984162318435, 0.5384530847592575,
              ],
              camera_coordinates: [
                -0.04418385406951916, 0.041524050486072994, 0.5974767952003868,
              ],
              frame_index: 2850,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 96.0,
              time_token: "<TIME 00:01:36.0 video 1>",
              projected_pixel: [551.9123011748304, 767.2675082107706],
              normalized_projected_pixel: [
                0.391983168448033, 0.544934309808786,
              ],
              camera_coordinates: [
                -0.15238376770507034, 0.05181222928539636, 0.6136568161312415,
              ],
              frame_index: 2880,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 97.0,
              time_token: "<TIME 00:01:37.0 video 1>",
              projected_pixel: [473.77371940658907, 769.1719965594855],
              normalized_projected_pixel: [
                0.33648701662399794, 0.5462869293746345,
              ],
              camera_coordinates: [
                -0.22945056996123506, 0.053374712140223046, 0.607138947574789,
              ],
              frame_index: 2910,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
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
          "At the current time <TIME 00:05:34.0 video 1>, based on the last known position of the ladle that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 94.03333333333333,
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
            "At the current time <TIME 00:05:34.0 video 1>, consider the ladle that was moved earlier. Using its last known position to infer its current location, in which direction is the ladle from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 334.0,
            camera_coordinates: [
              -0.8126431763798931, 0.6515467601554171, 0.2626893324879662,
            ],
            world_coordinates: [
              -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.8126431763798931,
              z: 0.2626893324879662,
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
            "At the current time <TIME 00:05:34.0 video 1>, consider the ladle that was moved earlier. Using its last known position to infer its current location, and using the current position of the long spatula (marked in red) in the current frame, where is the ladle relative to long spatula from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "4947bf2df550ce7a",
            object_x_name: "ladle",
            object_x_reference_time_sec: 334.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.39433719216685253, -0.6032250248967981, -0.5704778344355173,
            ],
            object_x_camera_coordinates: [
              -0.8126431763798931, 0.6515467601554171, 0.2626893324879662,
            ],
            object_y_assoc_id: "db162eded46b7ff5",
            object_y_name: "long spatula",
            object_y_reference_time_sec: 334.0,
            object_y_world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            object_y_projected_pixel: [825.3978822489084, 923.6170591112283],
            object_y_normalized_projected_pixel: [
              0.5862200868245089, 0.6559780249369519,
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
            "At the current time <TIME 00:05:34.0 video 1>, consider the ladle that was moved earlier. Using its last known position to infer its current location, and using the current position of the long spatula (marked in red) in the current frame, how far is the ladle from the long spatula: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "4947bf2df550ce7a",
            object_x_name: "ladle",
            object_x_reference_time_sec: 334.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "db162eded46b7ff5",
            object_y_name: "long spatula",
            object_y_pixel: [825.3978822489084, 923.6170591112283],
            object_y_normalized_projected_pixel: [
              0.5862200868245089, 0.6559780249369519,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.9385399362911946, 0.43746028541015836, -0.36217842396346267,
            ],
            distance_m: 1.0969967748855391,
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
  oos_staged_h2p0_7: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "74327afceccb541a",
    object_a_name: "bowl",
    query_time_sec: 334.0,
    query_time_in_clip_sec: 334.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 334.0,
    clip_duration_sec: 334.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "74327afceccb541a",
      object_name: "bowl",
      query_time_sec: 334.0,
      oos_span_start_sec: 332.0,
      oos_span_end_sec: 343.0,
      oos_duration_sec: 11.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 334.0,
      clip_duration_sec: 334.0,
      anchor_assoc_id: "db162eded46b7ff5",
      anchor_name: "long spatula",
      anchor_projected_pixel: [825.3978822489084, 923.6170591112283],
      anchor_world_coordinates: [
        -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "At the current time <TIME 00:05:34.0 video 1>, is the previously moved bowl visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-1046.8900564216474, 2049.334856066769],
          camera_coordinates: [
            -0.8134910055035965, 0.6337468866242559, 0.2455452547876954,
          ],
          frame_index: 2385,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The bowl was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:28.0 video 1>; Point=(0.3004, 0.5655)",
          "<TIME 00:05:29.0 video 1>; Point=(0.3047, 0.5551)",
          "<TIME 00:05:30.0 video 1>; Point=(0.4083, 0.5495)",
          "<TIME 00:05:31.0 video 1>; Point=(0.314, 0.5586)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 331.0,
          sampled_last_visible_time_in_clip_sec: 331.0,
          sampled_last_visible_time_token: "<TIME 00:05:31.0 video 1>",
          projected_pixel: [442.1687233467607, 786.546290354251],
          normalized_projected_pixel: [0.3140402864678698, 0.5586266266720533],
          camera_coordinates: [
            -0.2500096766698498, 0.0677745318611632, 0.579128480564262,
          ],
          frame_index: 2385,
          status: "in_view",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 328.0,
              time_token: "<TIME 00:05:28.0 video 1>",
              projected_pixel: [422.98140621088265, 796.2211095893682],
              normalized_projected_pixel: [
                0.3004129305475019, 0.5654979471515399,
              ],
              camera_coordinates: [
                -0.3028641558092439, 0.08695105365850825, 0.6514007047513581,
              ],
              frame_index: 2385,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 329.0,
              time_token: "<TIME 00:05:29.0 video 1>",
              projected_pixel: [429.0808552752396, 781.5777900340405],
              normalized_projected_pixel: [
                0.30474492562161903, 0.5550978622400856,
              ],
              camera_coordinates: [
                -0.3004060345234654, 0.07211131389952558, 0.6615338666204768,
              ],
              frame_index: 2385,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 330.0,
              time_token: "<TIME 00:05:30.0 video 1>",
              projected_pixel: [574.8462671917011, 773.7005241811811],
              normalized_projected_pixel: [
                0.408271496585015, 0.5495032131968616,
              ],
              camera_coordinates: [
                -0.15080755550019742, 0.06799911227318337, 0.7159080986298066,
              ],
              frame_index: 2385,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 331.0,
              time_token: "<TIME 00:05:31.0 video 1>",
              projected_pixel: [442.1687233467607, 786.546290354251],
              normalized_projected_pixel: [
                0.3140402864678698, 0.5586266266720533,
              ],
              camera_coordinates: [
                -0.2500096766698498, 0.0677745318611632, 0.579128480564262,
              ],
              frame_index: 2385,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
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
          "The bowl was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:19.5 video 1>; Point=(0.437, 0.5788)",
          "<TIME 00:01:20.0 video 1>; Point=(0.4394, 0.5804)",
          "<TIME 00:01:21.0 video 1>; Point=(0.4439, 0.5767)",
          "<TIME 00:01:22.0 video 1>; Point=(0.3219, 0.5682)",
        ],
        answer_metadata: {
          last_placement_time_sec: 79.5,
          last_placement_time_in_clip_sec: 79.5,
          last_placement_time_token: "<TIME 00:01:19.5 video 1>",
          projected_pixel: [615.3610992407649, 814.9776082352173],
          normalized_projected_pixel: [0.4370462352562251, 0.5788193240306941],
          camera_coordinates: [
            -0.08245519562219536, 0.09311482099797791, 0.5720540997255914,
          ],
          frame_index: 2385,
          status: "last_past_track_end",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 79.5,
              time_token: "<TIME 00:01:19.5 video 1>",
              projected_pixel: [615.3610992407649, 814.9776082352173],
              normalized_projected_pixel: [
                0.4370462352562251, 0.5788193240306941,
              ],
              camera_coordinates: [
                -0.08245519562219536, 0.09311482099797791, 0.5720540997255914,
              ],
              frame_index: 2385,
              status: "last_past_track_end",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 80.0,
              time_token: "<TIME 00:01:20.0 video 1>",
              projected_pixel: [618.625120828265, 817.2082154529053],
              normalized_projected_pixel: [
                0.43936443240643824, 0.5804035621114384,
              ],
              camera_coordinates: [
                -0.08010390796980943, 0.09606774783739319, 0.5772026690246106,
              ],
              frame_index: 2400,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 81.0,
              time_token: "<TIME 00:01:21.0 video 1>",
              projected_pixel: [624.9860382111096, 812.0058561033103],
              normalized_projected_pixel: [
                0.44388212941129945, 0.5767087046188283,
              ],
              camera_coordinates: [
                -0.07399535097972143, 0.09103980730760947, 0.5765522913845404,
              ],
              frame_index: 2430,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 82.0,
              time_token: "<TIME 00:01:22.0 video 1>",
              projected_pixel: [453.1946543013248, 800.023697872541],
              normalized_projected_pixel: [
                0.3218712033390091, 0.5681986490572024,
              ],
              camera_coordinates: [
                -0.21829326511413358, 0.07355072920832811, 0.528422284925199,
              ],
              frame_index: 2460,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
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
          "At the current time <TIME 00:05:34.0 video 1>, based on the last known position of the bowl that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 79.5,
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
            "At the current time <TIME 00:05:34.0 video 1>, consider the bowl that was moved earlier. Using its last known position to infer its current location, in which direction is the bowl from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 334.0,
            camera_coordinates: [
              -0.8134910055035965, 0.6337468866242559, 0.2455452547876954,
            ],
            world_coordinates: [
              -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.8134910055035965,
              z: 0.2455452547876954,
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
            "At the current time <TIME 00:05:34.0 video 1>, consider the bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the long spatula (marked in red) in the current frame, where is the bowl relative to long spatula from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "74327afceccb541a",
            object_x_name: "bowl",
            object_x_reference_time_sec: 334.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.39356024569767917, -0.6006214031241116, -0.5458995672063147,
            ],
            object_x_camera_coordinates: [
              -0.8134910055035965, 0.6337468866242559, 0.2455452547876954,
            ],
            object_y_assoc_id: "db162eded46b7ff5",
            object_y_name: "long spatula",
            object_y_reference_time_sec: 334.0,
            object_y_world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            object_y_projected_pixel: [825.3978822489084, 923.6170591112283],
            object_y_normalized_projected_pixel: [
              0.5862200868245089, 0.6559780249369519,
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
            "At the current time <TIME 00:05:34.0 video 1>, consider the bowl that was moved earlier. Using its last known position to infer its current location, and using the current position of the long spatula (marked in red) in the current frame, how far is the bowl from the long spatula: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "74327afceccb541a",
            object_x_name: "bowl",
            object_x_reference_time_sec: 334.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "db162eded46b7ff5",
            object_y_name: "long spatula",
            object_y_pixel: [825.3978822489084, 923.6170591112283],
            object_y_normalized_projected_pixel: [
              0.5862200868245089, 0.6559780249369519,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.939387765414898, 0.4196604118789971, -0.3793225016637335,
            ],
            distance_m: 1.096562718396936,
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
  oos_staged_h2p0_8: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "c89fd59c44994570",
    object_a_name: "frying pan",
    query_time_sec: 335.0,
    query_time_in_clip_sec: 335.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 335.0,
    clip_duration_sec: 335.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "c89fd59c44994570",
      object_name: "frying pan",
      query_time_sec: 335.0,
      oos_span_start_sec: 333.0,
      oos_span_end_sec: 339.0,
      oos_duration_sec: 6.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 335.0,
      clip_duration_sec: 335.0,
      anchor_assoc_id: "db162eded46b7ff5",
      anchor_name: "long spatula",
      anchor_projected_pixel: [821.8108037810697, 893.8244684470312],
      anchor_world_coordinates: [
        -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "At the current time <TIME 00:05:35.0 video 1>, is the previously moved frying pan visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [190.5395766905175, 1271.8272976996723],
          camera_coordinates: [
            -0.4746399415452292, 0.5150089907520368, 0.36677526105189495,
          ],
          frame_index: 9576,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The frying pan was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:32.0 video 1>; Point=(0.2704, 0.7384)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 332.0,
          sampled_last_visible_time_in_clip_sec: 332.0,
          sampled_last_visible_time_token: "<TIME 00:05:32.0 video 1>",
          projected_pixel: [380.76792026564334, 1039.6062240294775],
          normalized_projected_pixel: [0.27043176155230353, 0.7383566932027539],
          camera_coordinates: [
            -0.2757804108929963, 0.2769865383658531, 0.49123395273301623,
          ],
          frame_index: 9576,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -0.6634828639993642, -0.35381673744909864, -0.5646832317782793,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 332.0,
              time_token: "<TIME 00:05:32.0 video 1>",
              projected_pixel: [380.76792026564334, 1039.6062240294775],
              normalized_projected_pixel: [
                0.27043176155230353, 0.7383566932027539,
              ],
              camera_coordinates: [
                -0.2757804108929963, 0.2769865383658531, 0.49123395273301623,
              ],
              frame_index: 9576,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.6634828639993642, -0.35381673744909864, -0.5646832317782793,
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
          "The frying pan was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:19.2 video 1>; Point=(0.1612, 0.7778)",
          "<TIME 00:05:20.0 video 1>; Point=(0.5312, 0.6253)",
          "<TIME 00:05:21.0 video 1>; Point=(0.5771, 0.6021)",
          "<TIME 00:05:22.0 video 1>; Point=(0.5898, 0.5952)",
        ],
        answer_metadata: {
          last_placement_time_sec: 319.2,
          last_placement_time_in_clip_sec: 319.2,
          last_placement_time_token: "<TIME 00:05:19.2 video 1>",
          projected_pixel: [226.96660523632437, 1095.076777141327],
          normalized_projected_pixel: [0.16119787303716218, 0.7777533928560562],
          camera_coordinates: [
            -0.3542774060685296, 0.28230957685815167, 0.39257761893491094,
          ],
          frame_index: 9576,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -0.6634828639993642, -0.35381673744909864, -0.5646832317782793,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 319.2,
              time_token: "<TIME 00:05:19.2 video 1>",
              projected_pixel: [226.96660523632437, 1095.076777141327],
              normalized_projected_pixel: [
                0.16119787303716218, 0.7777533928560562,
              ],
              camera_coordinates: [
                -0.3542774060685296, 0.28230957685815167, 0.39257761893491094,
              ],
              frame_index: 9576,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.6634828639993642, -0.35381673744909864, -0.5646832317782793,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 320.0,
              time_token: "<TIME 00:05:20.0 video 1>",
              projected_pixel: [747.8643606660927, 880.4730078144064],
              normalized_projected_pixel: [
                0.5311536652458044, 0.6253359430500045,
              ],
              camera_coordinates: [
                0.03882643510607797, 0.14295327807767783, 0.5286726133618265,
              ],
              frame_index: 9600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.6634828639993642, -0.35381673744909864, -0.5646832317782793,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 321.0,
              time_token: "<TIME 00:05:21.0 video 1>",
              projected_pixel: [812.5012791229483, 847.7928884430928],
              normalized_projected_pixel: [
                0.5770605675589121, 0.6021256309965147,
              ],
              camera_coordinates: [
                0.0963636350338481, 0.11628009037905906, 0.536525008690738,
              ],
              frame_index: 9630,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.6634828639993642, -0.35381673744909864, -0.5646832317782793,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 322.0,
              time_token: "<TIME 00:05:22.0 video 1>",
              projected_pixel: [830.3838315935064, 838.0908068855992],
              normalized_projected_pixel: [
                0.589761244029479, 0.5952349480721586,
              ],
              camera_coordinates: [
                0.11332378384025793, 0.10888874485979297, 0.5422331065390736,
              ],
              frame_index: 9660,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.6634828639993642, -0.35381673744909864, -0.5646832317782793,
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
          "At the current time <TIME 00:05:35.0 video 1>, based on the last known position of the frying pan that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 319.2,
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
            "At the current time <TIME 00:05:35.0 video 1>, consider the frying pan that was moved earlier. Using its last known position to infer its current location, in which direction is the frying pan from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 335.0,
            camera_coordinates: [
              -0.4746399415452292, 0.5150089907520368, 0.36677526105189495,
            ],
            world_coordinates: [
              -0.6634828639993642, -0.35381673744909864, -0.5646832317782793,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.4746399415452292,
              z: 0.36677526105189495,
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
            "At the current time <TIME 00:05:35.0 video 1>, consider the frying pan that was moved earlier. Using its last known position to infer its current location, and using the current position of the long spatula (marked in red) in the current frame, where is the frying pan relative to long spatula from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "c89fd59c44994570",
            object_x_name: "frying pan",
            object_x_reference_time_sec: 335.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.6634828639993642, -0.35381673744909864, -0.5646832317782793,
            ],
            object_x_camera_coordinates: [
              -0.4746399415452292, 0.5150089907520368, 0.36677526105189495,
            ],
            object_y_assoc_id: "db162eded46b7ff5",
            object_y_name: "long spatula",
            object_y_reference_time_sec: 335.0,
            object_y_world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            object_y_projected_pixel: [821.8108037810697, 893.8244684470312],
            object_y_normalized_projected_pixel: [
              0.583672445867237, 0.6348185145220392,
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
            "At the current time <TIME 00:05:35.0 video 1>, consider the frying pan that was moved earlier. Using its last known position to infer its current location, and using the current position of the long spatula (marked in red) in the current frame, how far is the frying pan from the long spatula: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "c89fd59c44994570",
            object_x_name: "frying pan",
            object_x_reference_time_sec: 335.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "db162eded46b7ff5",
            object_y_name: "long spatula",
            object_y_pixel: [821.8108037810697, 893.8244684470312],
            object_y_normalized_projected_pixel: [
              0.583672445867237, 0.6348185145220392,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.5980071930686126, 0.32990860690186363, -0.2653037708938484,
            ],
            distance_m: 0.7326925567523017,
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
  oos_staged_h2p0_9: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "08e1677994e5e4df",
    object_a_name: "wooden spatula",
    query_time_sec: 346.0,
    query_time_in_clip_sec: 346.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 346.0,
    clip_duration_sec: 346.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "08e1677994e5e4df",
      object_name: "wooden spatula",
      query_time_sec: 346.0,
      oos_span_start_sec: 344.0,
      oos_span_end_sec: 363.0,
      oos_duration_sec: 19.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 346.0,
      clip_duration_sec: 346.0,
      anchor_assoc_id: "40ade0a98169a5e9",
      anchor_name: "cup2",
      anchor_projected_pixel: [666.3183642634262, 850.432814412268],
      anchor_world_coordinates: [
        -0.17096652410110308, -0.5263621125700811, -0.576646310678254,
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
          "At the current time <TIME 00:05:46.0 video 1>, is the previously moved wooden spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [6328.389079334208, 1504.4351858438276],
          camera_coordinates: [
            1.1656306310896212, 0.5364987524970839, 0.19462386774786533,
          ],
          frame_index: 10191,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The wooden spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:40.0 video 1>; Point=(0.7479, 0.6298)",
          "<TIME 00:05:41.0 video 1>; Point=(0.6713, 0.5844)",
          "<TIME 00:05:42.0 video 1>; Point=(0.6567, 0.5628)",
          "<TIME 00:05:43.0 video 1>; Point=(0.698, 0.5919)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 343.0,
          sampled_last_visible_time_in_clip_sec: 343.0,
          sampled_last_visible_time_token: "<TIME 00:05:43.0 video 1>",
          projected_pixel: [982.8051734802401, 833.4363428816973],
          normalized_projected_pixel: [0.698015037983125, 0.59192922079666],
          camera_coordinates: [
            0.28838630306531243, 0.12139448285182602, 0.6202990126277799,
          ],
          frame_index: 10191,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 340.0,
              time_token: "<TIME 00:05:40.0 video 1>",
              projected_pixel: [1052.9910024539772, 886.781822455401],
              normalized_projected_pixel: [
                0.7478629278792451, 0.62981663526662,
              ],
              camera_coordinates: [
                0.3910281616389769, 0.19136271337558558, 0.6581984012469679,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 341.0,
              time_token: "<TIME 00:05:41.0 video 1>",
              projected_pixel: [945.1514021549066, 822.8864733129903],
              normalized_projected_pixel: [
                0.671272302666837, 0.5844364157052488,
              ],
              camera_coordinates: [
                0.2605958899660368, 0.11535655623545304, 0.6516338126627482,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 342.0,
              time_token: "<TIME 00:05:42.0 video 1>",
              projected_pixel: [924.6111229637046, 792.4578252634043],
              normalized_projected_pixel: [
                0.656684036195813, 0.5628251599882133,
              ],
              camera_coordinates: [
                0.2303485363269686, 0.0797394905737347, 0.6314284429160444,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 343.0,
              time_token: "<TIME 00:05:43.0 video 1>",
              projected_pixel: [982.8051734802401, 833.4363428816973],
              normalized_projected_pixel: [0.698015037983125, 0.59192922079666],
              camera_coordinates: [
                0.28838630306531243, 0.12139448285182602, 0.6202990126277799,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "The wooden spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:39.7 video 1>; Point=(0.7892, 0.6537)",
          "<TIME 00:05:40.0 video 1>; Point=(0.7479, 0.6298)",
          "<TIME 00:05:41.0 video 1>; Point=(0.6713, 0.5844)",
          "<TIME 00:05:42.0 video 1>; Point=(0.6567, 0.5628)",
        ],
        answer_metadata: {
          last_placement_time_sec: 339.7,
          last_placement_time_in_clip_sec: 339.7,
          last_placement_time_token: "<TIME 00:05:39.7 video 1>",
          projected_pixel: [1111.2137841100425, 920.3612069191182],
          normalized_projected_pixel: [0.789214335305428, 0.6536656299141465],
          camera_coordinates: [
            0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
          ],
          frame_index: 10191,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 339.7,
              time_token: "<TIME 00:05:39.7 video 1>",
              projected_pixel: [1111.2137841100425, 920.3612069191182],
              normalized_projected_pixel: [
                0.789214335305428, 0.6536656299141465,
              ],
              camera_coordinates: [
                0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
              ],
              frame_index: 10191,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 340.0,
              time_token: "<TIME 00:05:40.0 video 1>",
              projected_pixel: [1052.9910024539772, 886.781822455401],
              normalized_projected_pixel: [
                0.7478629278792451, 0.62981663526662,
              ],
              camera_coordinates: [
                0.3910281616389769, 0.19136271337558558, 0.6581984012469679,
              ],
              frame_index: 10200,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 341.0,
              time_token: "<TIME 00:05:41.0 video 1>",
              projected_pixel: [945.1514021549066, 822.8864733129903],
              normalized_projected_pixel: [
                0.671272302666837, 0.5844364157052488,
              ],
              camera_coordinates: [
                0.2605958899660368, 0.11535655623545304, 0.6516338126627482,
              ],
              frame_index: 10230,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 342.0,
              time_token: "<TIME 00:05:42.0 video 1>",
              projected_pixel: [924.6111229637046, 792.4578252634043],
              normalized_projected_pixel: [
                0.656684036195813, 0.5628251599882133,
              ],
              camera_coordinates: [
                0.2303485363269686, 0.0797394905737347, 0.6314284429160444,
              ],
              frame_index: 10260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "At the current time <TIME 00:05:46.0 video 1>, based on the last known position of the wooden spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 339.7,
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
            "At the current time <TIME 00:05:46.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the wooden spatula from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 346.0,
            camera_coordinates: [
              1.1656306310896212, 0.5364987524970839, 0.19462386774786533,
            ],
            world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.1656306310896212,
              z: 0.19462386774786533,
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
            "At the current time <TIME 00:05:46.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, where is the wooden spatula relative to cup2 from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 346.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            object_x_camera_coordinates: [
              1.1656306310896212, 0.5364987524970839, 0.19462386774786533,
            ],
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_reference_time_sec: 346.0,
            object_y_world_coordinates: [
              -0.17096652410110308, -0.5263621125700811, -0.576646310678254,
            ],
            object_y_projected_pixel: [666.3183642634262, 850.432814412268],
            object_y_normalized_projected_pixel: [
              0.4732374746189107, 0.604000578417804,
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
            "At the current time <TIME 00:05:46.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, how far is the wooden spatula from the cup2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 346.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_pixel: [666.3183642634262, 850.432814412268],
            object_y_normalized_projected_pixel: [
              0.4732374746189107, 0.604000578417804,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.1992941546939297, 0.41345370914325985, -0.36214395698752305,
            ],
            distance_m: 1.3192417082058647,
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
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "db162eded46b7ff5",
    object_a_name: "long spatula",
    query_time_sec: 346.0,
    query_time_in_clip_sec: 346.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 346.0,
    clip_duration_sec: 346.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "db162eded46b7ff5",
      object_name: "long spatula",
      query_time_sec: 346.0,
      oos_span_start_sec: 344.0,
      oos_span_end_sec: 372.0,
      oos_duration_sec: 28.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 346.0,
      clip_duration_sec: 346.0,
      anchor_assoc_id: "40ade0a98169a5e9",
      anchor_name: "cup2",
      anchor_projected_pixel: [666.3183642634262, 850.432814412268],
      anchor_world_coordinates: [
        -0.17096652410110308, -0.5263621125700811, -0.576646310678254,
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
          "At the current time <TIME 00:05:46.0 video 1>, is the previously moved long spatula visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [4950.531363454153, 2000.9382546136887],
          camera_coordinates: [
            1.0935384333370686, 0.5160355641104297, 0.20857267383757905,
          ],
          frame_index: 7890,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The long spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:40.0 video 1>; Point=(0.7149, 0.65)",
          "<TIME 00:05:41.0 video 1>; Point=(0.6371, 0.6103)",
          "<TIME 00:05:42.0 video 1>; Point=(0.6211, 0.5911)",
          "<TIME 00:05:43.0 video 1>; Point=(0.6616, 0.6181)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 343.0,
          sampled_last_visible_time_in_clip_sec: 343.0,
          sampled_last_visible_time_token: "<TIME 00:05:43.0 video 1>",
          projected_pixel: [931.4974763893271, 870.2289445305457],
          normalized_projected_pixel: [0.6615749122083289, 0.6180603299222626],
          camera_coordinates: [
            0.2240178870311187, 0.15156579030914863, 0.592785461954813,
          ],
          frame_index: 7890,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 340.0,
              time_token: "<TIME 00:05:40.0 video 1>",
              projected_pixel: [1006.5162187309138, 915.2473588612484],
              normalized_projected_pixel: [
                0.714855268985024, 0.6500336355548639,
              ],
              camera_coordinates: [
                0.32283253950221824, 0.2124605449056804, 0.6314620052075353,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 341.0,
              time_token: "<TIME 00:05:41.0 video 1>",
              projected_pixel: [897.0509337311931, 859.3499232818085],
              normalized_projected_pixel: [
                0.6371100381613588, 0.6103337523308299,
              ],
              camera_coordinates: [
                0.1984222018690297, 0.1469245934816194, 0.6208362838672424,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 342.0,
              time_token: "<TIME 00:05:42.0 video 1>",
              projected_pixel: [874.5056686122217, 832.2477805569056],
              normalized_projected_pixel: [
                0.6210977760029984, 0.5910850714182568,
              ],
              camera_coordinates: [
                0.16963681520960516, 0.1152691109153916, 0.6020629998849159,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 343.0,
              time_token: "<TIME 00:05:43.0 video 1>",
              projected_pixel: [931.4974763893271, 870.2289445305457],
              normalized_projected_pixel: [
                0.6615749122083289, 0.6180603299222626,
              ],
              camera_coordinates: [
                0.2240178870311187, 0.15156579030914863, 0.592785461954813,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "The long spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:23.0 video 1>; Point=(0.5456, 0.6035)",
          "<TIME 00:04:24.0 video 1>; Point=(1.0136, 0.7599)",
          "<TIME 00:04:25.0 video 1>; Point=(0.9798, 0.8025)",
          "<TIME 00:04:26.0 video 1>; Point=(0.9822, 0.7947)",
        ],
        answer_metadata: {
          last_placement_time_sec: 263.0,
          last_placement_time_in_clip_sec: 263.0,
          last_placement_time_token: "<TIME 00:04:23.0 video 1>",
          projected_pixel: [768.2699686468745, 849.6894038200255],
          normalized_projected_pixel: [0.545646284550337, 0.6034725879403591],
          camera_coordinates: [
            0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
          ],
          frame_index: 7890,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [768.2699686468745, 849.6894038200255],
              normalized_projected_pixel: [
                0.545646284550337, 0.6034725879403591,
              ],
              camera_coordinates: [
                0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
              ],
              frame_index: 7890,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 264.0,
              time_token: "<TIME 00:04:24.0 video 1>",
              projected_pixel: [1427.1820970145077, 1069.9447235761877],
              normalized_projected_pixel: [
                1.0136236484478038, 0.7599039229944515,
              ],
              camera_coordinates: [
                0.7699519635797746, 0.3785529285615803, 0.3796412915532063,
              ],
              frame_index: 7920,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [1379.5321236322907, 1129.9326094645107],
              normalized_projected_pixel: [
                0.9797813378070246, 0.80250895558559,
              ],
              camera_coordinates: [
                0.7823005937687337, 0.48114388262252394, 0.4198671279037529,
              ],
              frame_index: 7950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 266.0,
              time_token: "<TIME 00:04:26.0 video 1>",
              projected_pixel: [1382.9653634615502, 1118.974342497681],
              normalized_projected_pixel: [
                0.9822197183675783, 0.7947260955239211,
              ],
              camera_coordinates: [
                0.7748697764384478, 0.46163455405297654, 0.41561168138743415,
              ],
              frame_index: 7980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "At the current time <TIME 00:05:46.0 video 1>, based on the last known position of the long spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 263.0,
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
            "At the current time <TIME 00:05:46.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the long spatula from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 346.0,
            camera_coordinates: [
              1.0935384333370686, 0.5160355641104297, 0.20857267383757905,
            ],
            world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.0935384333370686,
              z: 0.20857267383757905,
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
            "At the current time <TIME 00:05:46.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, where is the long spatula relative to cup2 from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 346.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            object_x_camera_coordinates: [
              1.0935384333370686, 0.5160355641104297, 0.20857267383757905,
            ],
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_reference_time_sec: 346.0,
            object_y_world_coordinates: [
              -0.17096652410110308, -0.5263621125700811, -0.576646310678254,
            ],
            object_y_projected_pixel: [666.3183642634262, 850.432814412268],
            object_y_normalized_projected_pixel: [
              0.4732374746189107, 0.604000578417804,
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
            "At the current time <TIME 00:05:46.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, how far is the long spatula from the cup2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 346.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_pixel: [666.3183642634262, 850.432814412268],
            object_y_normalized_projected_pixel: [
              0.4732374746189107, 0.604000578417804,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.1272019569413774, 0.3929905207566057, -0.34819515089780934,
            ],
            distance_m: 1.2434893100649347,
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
  oos_staged_h2p0_11: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "8f9ae69353ae5266",
    object_a_name: "knife",
    query_time_sec: 346.0,
    query_time_in_clip_sec: 346.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 346.0,
    clip_duration_sec: 346.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "8f9ae69353ae5266",
      object_name: "knife",
      query_time_sec: 346.0,
      oos_span_start_sec: 344.0,
      oos_span_end_sec: 353.0,
      oos_duration_sec: 9.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 346.0,
      clip_duration_sec: 346.0,
      anchor_assoc_id: "40ade0a98169a5e9",
      anchor_name: "cup2",
      anchor_projected_pixel: [666.3183642634262, 850.432814412268],
      anchor_world_coordinates: [
        -0.17096652410110308, -0.5263621125700811, -0.576646310678254,
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
          "At the current time <TIME 00:05:46.0 video 1>, is the previously moved knife visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [4491.913229332877, 2088.940571636489],
          camera_coordinates: [
            1.111931314545803, 0.5496556624153233, 0.22455299592530553,
          ],
          frame_index: 10276,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The knife was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:43.0 video 1>; Point=(0.6733, 0.6274)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 343.0,
          sampled_last_visible_time_in_clip_sec: 343.0,
          sampled_last_visible_time_token: "<TIME 00:05:43.0 video 1>",
          projected_pixel: [948.0697726407336, 883.3738777263534],
          normalized_projected_pixel: [0.6733450089777938, 0.6273962199761033],
          camera_coordinates: [
            0.2509501320284536, 0.17179805719449087, 0.6170607444310399,
          ],
          frame_index: 10276,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 343.0,
              time_token: "<TIME 00:05:43.0 video 1>",
              projected_pixel: [948.0697726407336, 883.3738777263534],
              normalized_projected_pixel: [
                0.6733450089777938, 0.6273962199761033,
              ],
              camera_coordinates: [
                0.2509501320284536, 0.17179805719449087, 0.6170607444310399,
              ],
              frame_index: 10276,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
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
          "<TIME 00:05:42.5 video 1>; Point=(0.6196, 0.606)",
          "<TIME 00:05:43.0 video 1>; Point=(0.6733, 0.6274)",
          "<TIME 00:05:44.0 video 1>; Point=(1.1171, 0.8081)",
          "<TIME 00:05:45.0 video 1>; Point=(1.4465, 0.9467)",
        ],
        answer_metadata: {
          last_placement_time_sec: 342.53333333333336,
          last_placement_time_in_clip_sec: 342.53333333333336,
          last_placement_time_token: "<TIME 00:05:42.5 video 1>",
          projected_pixel: [872.327920531678, 853.2579009374319],
          normalized_projected_pixel: [0.6195510799230668, 0.6060070319157898],
          camera_coordinates: [
            0.17143524700639967, 0.13929512372426267, 0.615901956931288,
          ],
          frame_index: 10276,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 342.53333333333336,
              time_token: "<TIME 00:05:42.5 video 1>",
              projected_pixel: [872.327920531678, 853.2579009374319],
              normalized_projected_pixel: [
                0.6195510799230668, 0.6060070319157898,
              ],
              camera_coordinates: [
                0.17143524700639967, 0.13929512372426267, 0.615901956931288,
              ],
              frame_index: 10276,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 343.0,
              time_token: "<TIME 00:05:43.0 video 1>",
              projected_pixel: [948.0697726407336, 883.3738777263534],
              normalized_projected_pixel: [
                0.6733450089777938, 0.6273962199761033,
              ],
              camera_coordinates: [
                0.2509501320284536, 0.17179805719449087, 0.6170607444310399,
              ],
              frame_index: 10290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 344.0,
              time_token: "<TIME 00:05:44.0 video 1>",
              projected_pixel: [1572.8707747431909, 1137.8500584159615],
              normalized_projected_pixel: [
                1.117095720698289, 0.8081321437613362,
              ],
              camera_coordinates: [
                0.7606258155299296, 0.3718410437614711, 0.306131057394571,
              ],
              frame_index: 10320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 345.0,
              time_token: "<TIME 00:05:45.0 video 1>",
              projected_pixel: [2036.6699145359412, 1332.9919944170342],
              normalized_projected_pixel: [
                1.4464985188465491, 0.9467272687620981,
              ],
              camera_coordinates: [
                1.0111179740114327, 0.4768796377026821, 0.32030738037886436,
              ],
              frame_index: 10350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
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
          "At the current time <TIME 00:05:46.0 video 1>, based on the last known position of the knife that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 342.53333333333336,
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
            "At the current time <TIME 00:05:46.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, in which direction is the knife from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 346.0,
            camera_coordinates: [
              1.111931314545803, 0.5496556624153233, 0.22455299592530553,
            ],
            world_coordinates: [
              -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.111931314545803,
              z: 0.22455299592530553,
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
            "At the current time <TIME 00:05:46.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, where is the knife relative to cup2 from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "8f9ae69353ae5266",
            object_x_name: "knife",
            object_x_reference_time_sec: 346.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
            ],
            object_x_camera_coordinates: [
              1.111931314545803, 0.5496556624153233, 0.22455299592530553,
            ],
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_reference_time_sec: 346.0,
            object_y_world_coordinates: [
              -0.17096652410110308, -0.5263621125700811, -0.576646310678254,
            ],
            object_y_projected_pixel: [666.3183642634262, 850.432814412268],
            object_y_normalized_projected_pixel: [
              0.4732374746189107, 0.604000578417804,
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
            "At the current time <TIME 00:05:46.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, how far is the knife from the cup2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "8f9ae69353ae5266",
            object_x_name: "knife",
            object_x_reference_time_sec: 346.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_pixel: [666.3183642634262, 850.432814412268],
            object_y_normalized_projected_pixel: [
              0.4732374746189107, 0.604000578417804,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.1455948381501115, 0.4266106190614993, -0.33221482881008285,
            ],
            distance_m: 1.2667876088648518,
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
  oos_staged_h2p0_12: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "08e1677994e5e4df",
    object_a_name: "wooden spatula",
    query_time_sec: 367.0,
    query_time_in_clip_sec: 367.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 367.0,
    clip_duration_sec: 367.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "08e1677994e5e4df",
      object_name: "wooden spatula",
      query_time_sec: 367.0,
      oos_span_start_sec: 365.0,
      oos_span_end_sec: 372.0,
      oos_duration_sec: 7.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 367.0,
      clip_duration_sec: 367.0,
      anchor_assoc_id: "40ade0a98169a5e9",
      anchor_name: "cup2",
      anchor_projected_pixel: [285.64341564864685, 876.342482415984],
      anchor_world_coordinates: [
        -0.17096652410110308, -0.5263621125700811, -0.576646310678254,
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
          "At the current time <TIME 00:06:07.0 video 1>, is the previously moved wooden spatula visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1473.598782172, 952.6554232468281],
          camera_coordinates: [
            0.9005028391353569, 0.2787637650461293, 0.4173861268525531,
          ],
          frame_index: 10191,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The wooden spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:04.0 video 1>; Point=(0.9999, 0.6345)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 364.0,
          sampled_last_visible_time_in_clip_sec: 364.0,
          sampled_last_visible_time_token: "<TIME 00:06:04.0 video 1>",
          projected_pixel: [1407.8383192055476, 893.3460571623804],
          normalized_projected_pixel: [0.9998851698903036, 0.6344787337800997],
          camera_coordinates: [
            0.974594960056595, 0.24717529907758845, 0.6122263253905522,
          ],
          frame_index: 10191,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 364.0,
              time_token: "<TIME 00:06:04.0 video 1>",
              projected_pixel: [1407.8383192055476, 893.3460571623804],
              normalized_projected_pixel: [
                0.9998851698903036, 0.6344787337800997,
              ],
              camera_coordinates: [
                0.974594960056595, 0.24717529907758845, 0.6122263253905522,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "The wooden spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:39.7 video 1>; Point=(0.7892, 0.6537)",
          "<TIME 00:05:40.0 video 1>; Point=(0.7479, 0.6298)",
          "<TIME 00:05:41.0 video 1>; Point=(0.6713, 0.5844)",
          "<TIME 00:05:42.0 video 1>; Point=(0.6567, 0.5628)",
        ],
        answer_metadata: {
          last_placement_time_sec: 339.7,
          last_placement_time_in_clip_sec: 339.7,
          last_placement_time_token: "<TIME 00:05:39.7 video 1>",
          projected_pixel: [1111.2137841100425, 920.3612069191182],
          normalized_projected_pixel: [0.789214335305428, 0.6536656299141465],
          camera_coordinates: [
            0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
          ],
          frame_index: 10191,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 339.7,
              time_token: "<TIME 00:05:39.7 video 1>",
              projected_pixel: [1111.2137841100425, 920.3612069191182],
              normalized_projected_pixel: [
                0.789214335305428, 0.6536656299141465,
              ],
              camera_coordinates: [
                0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
              ],
              frame_index: 10191,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 340.0,
              time_token: "<TIME 00:05:40.0 video 1>",
              projected_pixel: [1052.9910024539772, 886.781822455401],
              normalized_projected_pixel: [
                0.7478629278792451, 0.62981663526662,
              ],
              camera_coordinates: [
                0.3910281616389769, 0.19136271337558558, 0.6581984012469679,
              ],
              frame_index: 10200,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 341.0,
              time_token: "<TIME 00:05:41.0 video 1>",
              projected_pixel: [945.1514021549066, 822.8864733129903],
              normalized_projected_pixel: [
                0.671272302666837, 0.5844364157052488,
              ],
              camera_coordinates: [
                0.2605958899660368, 0.11535655623545304, 0.6516338126627482,
              ],
              frame_index: 10230,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 342.0,
              time_token: "<TIME 00:05:42.0 video 1>",
              projected_pixel: [924.6111229637046, 792.4578252634043],
              normalized_projected_pixel: [
                0.656684036195813, 0.5628251599882133,
              ],
              camera_coordinates: [
                0.2303485363269686, 0.0797394905737347, 0.6314284429160444,
              ],
              frame_index: 10260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "At the current time <TIME 00:06:07.0 video 1>, based on the last known position of the wooden spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 339.7,
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
            "At the current time <TIME 00:06:07.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the wooden spatula from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 367.0,
            camera_coordinates: [
              0.9005028391353569, 0.2787637650461293, 0.4173861268525531,
            ],
            world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.9005028391353569,
              z: 0.4173861268525531,
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
            "At the current time <TIME 00:06:07.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, where is the wooden spatula relative to cup2 from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 367.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            object_x_camera_coordinates: [
              0.9005028391353569, 0.2787637650461293, 0.4173861268525531,
            ],
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_reference_time_sec: 367.0,
            object_y_world_coordinates: [
              -0.17096652410110308, -0.5263621125700811, -0.576646310678254,
            ],
            object_y_projected_pixel: [285.64341564864685, 876.342482415984],
            object_y_normalized_projected_pixel: [
              0.20287174406864122, 0.6224023312613522,
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
            "At the current time <TIME 00:06:07.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, how far is the wooden spatula from the cup2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 367.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_pixel: [285.64341564864685, 876.342482415984],
            object_y_normalized_projected_pixel: [
              0.20287174406864122, 0.6224023312613522,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.3057751497843588, 0.12279673939757263, -0.14237592376834118,
            ],
            distance_m: 1.319241708205865,
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
  oos_staged_h2p0_13: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "08e1677994e5e4df",
    object_a_name: "wooden spatula",
    query_time_sec: 392.0,
    query_time_in_clip_sec: 392.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 392.0,
    clip_duration_sec: 392.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "08e1677994e5e4df",
      object_name: "wooden spatula",
      query_time_sec: 392.0,
      oos_span_start_sec: 390.0,
      oos_span_end_sec: 420.0,
      oos_duration_sec: 30.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 392.0,
      clip_duration_sec: 392.0,
      anchor_assoc_id: "ea7d7fc4d075b4ff",
      anchor_name: "spoon",
      anchor_projected_pixel: [393.8404509237154, 1025.8619106903177],
      anchor_world_coordinates: [
        -0.27136442088087886, -0.4381788393190772, -0.5930294387158024,
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
          "At the current time <TIME 00:06:32.0 video 1>, is the previously moved wooden spatula visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1395.6402892587175, 848.0555234915336],
          camera_coordinates: [
            0.9295108079267482, 0.17890919366344177, 0.6275815198937862,
          ],
          frame_index: 10191,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The wooden spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:28.0 video 1>; Point=(0.9842, 0.5981)",
          "<TIME 00:06:29.0 video 1>; Point=(0.9858, 0.6017)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 389.0,
          sampled_last_visible_time_in_clip_sec: 389.0,
          sampled_last_visible_time_token: "<TIME 00:06:29.0 video 1>",
          projected_pixel: [1388.049162061219, 847.1330939644891],
          normalized_projected_pixel: [0.9858303707821158, 0.6016570269634156],
          camera_coordinates: [
            0.9245848788786427, 0.1786455506527192, 0.6409435218473685,
          ],
          frame_index: 10191,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 388.0,
              time_token: "<TIME 00:06:28.0 video 1>",
              projected_pixel: [1385.7704070222126, 842.1144812363566],
              normalized_projected_pixel: [
                0.9842119368055487, 0.5980926713326397,
              ],
              camera_coordinates: [
                0.930012144292838, 0.1734322815155948, 0.6507125693254827,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 389.0,
              time_token: "<TIME 00:06:29.0 video 1>",
              projected_pixel: [1388.049162061219, 847.1330939644891],
              normalized_projected_pixel: [
                0.9858303707821158, 0.6016570269634156,
              ],
              camera_coordinates: [
                0.9245848788786427, 0.1786455506527192, 0.6409435218473685,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "The wooden spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:39.7 video 1>; Point=(0.7892, 0.6537)",
          "<TIME 00:05:40.0 video 1>; Point=(0.7479, 0.6298)",
          "<TIME 00:05:41.0 video 1>; Point=(0.6713, 0.5844)",
          "<TIME 00:05:42.0 video 1>; Point=(0.6567, 0.5628)",
        ],
        answer_metadata: {
          last_placement_time_sec: 339.7,
          last_placement_time_in_clip_sec: 339.7,
          last_placement_time_token: "<TIME 00:05:39.7 video 1>",
          projected_pixel: [1111.2137841100425, 920.3612069191182],
          normalized_projected_pixel: [0.789214335305428, 0.6536656299141465],
          camera_coordinates: [
            0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
          ],
          frame_index: 10191,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 339.7,
              time_token: "<TIME 00:05:39.7 video 1>",
              projected_pixel: [1111.2137841100425, 920.3612069191182],
              normalized_projected_pixel: [
                0.789214335305428, 0.6536656299141465,
              ],
              camera_coordinates: [
                0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
              ],
              frame_index: 10191,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 340.0,
              time_token: "<TIME 00:05:40.0 video 1>",
              projected_pixel: [1052.9910024539772, 886.781822455401],
              normalized_projected_pixel: [
                0.7478629278792451, 0.62981663526662,
              ],
              camera_coordinates: [
                0.3910281616389769, 0.19136271337558558, 0.6581984012469679,
              ],
              frame_index: 10200,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 341.0,
              time_token: "<TIME 00:05:41.0 video 1>",
              projected_pixel: [945.1514021549066, 822.8864733129903],
              normalized_projected_pixel: [
                0.671272302666837, 0.5844364157052488,
              ],
              camera_coordinates: [
                0.2605958899660368, 0.11535655623545304, 0.6516338126627482,
              ],
              frame_index: 10230,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 342.0,
              time_token: "<TIME 00:05:42.0 video 1>",
              projected_pixel: [924.6111229637046, 792.4578252634043],
              normalized_projected_pixel: [
                0.656684036195813, 0.5628251599882133,
              ],
              camera_coordinates: [
                0.2303485363269686, 0.0797394905737347, 0.6314284429160444,
              ],
              frame_index: 10260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "At the current time <TIME 00:06:32.0 video 1>, based on the last known position of the wooden spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 339.7,
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
            "At the current time <TIME 00:06:32.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the wooden spatula from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 392.0,
            camera_coordinates: [
              0.9295108079267482, 0.17890919366344177, 0.6275815198937862,
            ],
            world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.9295108079267482,
              z: 0.6275815198937862,
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
            "At the current time <TIME 00:06:32.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the spoon (marked in red) in the current frame, where is the wooden spatula relative to spoon from your viewpoint?",
          choices: ["Front-right", "Back-left", "Front-left", "Back-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 392.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            object_x_camera_coordinates: [
              0.9295108079267482, 0.17890919366344177, 0.6275815198937862,
            ],
            object_y_assoc_id: "ea7d7fc4d075b4ff",
            object_y_name: "spoon",
            object_y_reference_time_sec: 392.0,
            object_y_world_coordinates: [
              -0.27136442088087886, -0.4381788393190772, -0.5930294387158024,
            ],
            object_y_projected_pixel: [393.8404509237154, 1025.8619106903177],
            object_y_normalized_projected_pixel: [
              0.2797162293492297, 0.7285951070243734,
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
            "At the current time <TIME 00:06:32.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the spoon (marked in red) in the current frame, how far is the wooden spatula from the spoon: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 392.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "ea7d7fc4d075b4ff",
            object_y_name: "spoon",
            object_y_pixel: [393.8404509237154, 1025.8619106903177],
            object_y_normalized_projected_pixel: [
              0.2797162293492297, 0.7285951070243734,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.175915916711661, -0.0680799092073131, 0.16672972048321455,
            ],
            distance_m: 1.1896267973217118,
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
  oos_staged_h2p0_14: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "db162eded46b7ff5",
    object_a_name: "long spatula",
    query_time_sec: 405.0,
    query_time_in_clip_sec: 405.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 405.0,
    clip_duration_sec: 405.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "db162eded46b7ff5",
      object_name: "long spatula",
      query_time_sec: 405.0,
      oos_span_start_sec: 403.0,
      oos_span_end_sec: 420.0,
      oos_duration_sec: 17.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 405.0,
      clip_duration_sec: 405.0,
      anchor_assoc_id: "c89fd59c44994570",
      anchor_name: "frying pan",
      anchor_projected_pixel: [848.6116965712487, 907.6602658311158],
      anchor_world_coordinates: [
        -0.678586834634976, -0.32478092423177923, -0.6060414565551092,
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
          "At the current time <TIME 00:06:45.0 video 1>, is the previously moved long spatula visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1408.8835686905704, 922.348107855811],
          camera_coordinates: [
            0.836532849754098, 0.24631068491785996, 0.5106045120338547,
          ],
          frame_index: 7890,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The long spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:06:42.0 video 1>; Point=(0.9802, 0.6117)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 402.0,
          sampled_last_visible_time_in_clip_sec: 402.0,
          sampled_last_visible_time_token: "<TIME 00:06:42.0 video 1>",
          projected_pixel: [1380.0942114662034, 861.328924233108],
          normalized_projected_pixel: [0.9801805479163377, 0.611739292779196],
          camera_coordinates: [
            0.8336980146740067, 0.18045517654523424, 0.5900871288270776,
          ],
          frame_index: 7890,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 402.0,
              time_token: "<TIME 00:06:42.0 video 1>",
              projected_pixel: [1380.0942114662034, 861.328924233108],
              normalized_projected_pixel: [
                0.9801805479163377, 0.611739292779196,
              ],
              camera_coordinates: [
                0.8336980146740067, 0.18045517654523424, 0.5900871288270776,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "The long spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:23.0 video 1>; Point=(0.5456, 0.6035)",
          "<TIME 00:04:24.0 video 1>; Point=(1.0136, 0.7599)",
          "<TIME 00:04:25.0 video 1>; Point=(0.9798, 0.8025)",
          "<TIME 00:04:26.0 video 1>; Point=(0.9822, 0.7947)",
        ],
        answer_metadata: {
          last_placement_time_sec: 263.0,
          last_placement_time_in_clip_sec: 263.0,
          last_placement_time_token: "<TIME 00:04:23.0 video 1>",
          projected_pixel: [768.2699686468745, 849.6894038200255],
          normalized_projected_pixel: [0.545646284550337, 0.6034725879403591],
          camera_coordinates: [
            0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
          ],
          frame_index: 7890,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [768.2699686468745, 849.6894038200255],
              normalized_projected_pixel: [
                0.545646284550337, 0.6034725879403591,
              ],
              camera_coordinates: [
                0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
              ],
              frame_index: 7890,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 264.0,
              time_token: "<TIME 00:04:24.0 video 1>",
              projected_pixel: [1427.1820970145077, 1069.9447235761877],
              normalized_projected_pixel: [
                1.0136236484478038, 0.7599039229944515,
              ],
              camera_coordinates: [
                0.7699519635797746, 0.3785529285615803, 0.3796412915532063,
              ],
              frame_index: 7920,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [1379.5321236322907, 1129.9326094645107],
              normalized_projected_pixel: [
                0.9797813378070246, 0.80250895558559,
              ],
              camera_coordinates: [
                0.7823005937687337, 0.48114388262252394, 0.4198671279037529,
              ],
              frame_index: 7950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 266.0,
              time_token: "<TIME 00:04:26.0 video 1>",
              projected_pixel: [1382.9653634615502, 1118.974342497681],
              normalized_projected_pixel: [
                0.9822197183675783, 0.7947260955239211,
              ],
              camera_coordinates: [
                0.7748697764384478, 0.46163455405297654, 0.41561168138743415,
              ],
              frame_index: 7980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "At the current time <TIME 00:06:45.0 video 1>, based on the last known position of the long spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 263.0,
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
            "At the current time <TIME 00:06:45.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the long spatula from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 405.0,
            camera_coordinates: [
              0.836532849754098, 0.24631068491785996, 0.5106045120338547,
            ],
            world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.836532849754098,
              z: 0.5106045120338547,
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
            "At the current time <TIME 00:06:45.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the frying pan (marked in red) in the current frame, where is the long spatula relative to frying pan from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 405.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            object_x_camera_coordinates: [
              0.836532849754098, 0.24631068491785996, 0.5106045120338547,
            ],
            object_y_assoc_id: "c89fd59c44994570",
            object_y_name: "frying pan",
            object_y_reference_time_sec: 405.0,
            object_y_world_coordinates: [
              -0.678586834634976, -0.32478092423177923, -0.6060414565551092,
            ],
            object_y_projected_pixel: [848.6116965712487, 907.6602658311158],
            object_y_normalized_projected_pixel: [
              0.6027071708602618, 0.6446450751641447,
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
            "At the current time <TIME 00:06:45.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the frying pan (marked in red) in the current frame, how far is the long spatula from the frying pan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 405.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c89fd59c44994570",
            object_y_name: "frying pan",
            object_y_pixel: [848.6116965712487, 907.6602658311158],
            object_y_normalized_projected_pixel: [
              0.6027071708602618, 0.6446450751641447,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6980745232262373, 0.06364107238646555, -0.06692950831647493,
            ],
            distance_m: 0.7041575002480077,
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
  oos_staged_h2p0_15: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "db162eded46b7ff5",
    object_a_name: "long spatula",
    query_time_sec: 426.0,
    query_time_in_clip_sec: 426.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 426.0,
    clip_duration_sec: 426.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "db162eded46b7ff5",
      object_name: "long spatula",
      query_time_sec: 426.0,
      oos_span_start_sec: 424.0,
      oos_span_end_sec: 431.0,
      oos_duration_sec: 7.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 426.0,
      clip_duration_sec: 426.0,
      anchor_assoc_id: "c89fd59c44994570",
      anchor_name: "frying pan",
      anchor_projected_pixel: [795.4587474522675, 886.903928502701],
      anchor_world_coordinates: [
        -0.654244114089532, -0.37166683472968776, -0.5688215321202611,
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
          "At the current time <TIME 00:07:06.0 video 1>, is the previously moved long spatula visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1426.847439643473, 866.2859047528915],
          camera_coordinates: [
            0.8331624926000227, 0.1746292078545981, 0.4897016445674194,
          ],
          frame_index: 7890,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The long spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:01.0 video 1>; Point=(0.8919, 0.5908)",
          "<TIME 00:07:02.0 video 1>; Point=(0.9067, 0.5913)",
          "<TIME 00:07:03.0 video 1>; Point=(0.9672, 0.6134)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 423.0,
          sampled_last_visible_time_in_clip_sec: 423.0,
          sampled_last_visible_time_token: "<TIME 00:07:03.0 video 1>",
          projected_pixel: [1361.8157365945046, 863.6219918738612],
          normalized_projected_pixel: [0.967198676558597, 0.6133678919558674],
          camera_coordinates: [
            0.7749851375131238, 0.17502397171715375, 0.5797189278308832,
          ],
          frame_index: 7890,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 421.0,
              time_token: "<TIME 00:07:01.0 video 1>",
              projected_pixel: [1255.8260624430259, 831.8466848673129],
              normalized_projected_pixel: [
                0.89192191934874, 0.5908002023205348,
              ],
              camera_coordinates: [
                0.8465243098330958, 0.1785912377364807, 0.8355835734855886,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 422.0,
              time_token: "<TIME 00:07:02.0 video 1>",
              projected_pixel: [1276.6975534065218, 832.5606394031552],
              normalized_projected_pixel: [
                0.9067454214534956, 0.5913072723033772,
              ],
              camera_coordinates: [
                0.743779295694052, 0.15220487113585787, 0.6980441253727687,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 423.0,
              time_token: "<TIME 00:07:03.0 video 1>",
              projected_pixel: [1361.8157365945046, 863.6219918738612],
              normalized_projected_pixel: [
                0.967198676558597, 0.6133678919558674,
              ],
              camera_coordinates: [
                0.7749851375131238, 0.17502397171715375, 0.5797189278308832,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "The long spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:23.0 video 1>; Point=(0.5456, 0.6035)",
          "<TIME 00:04:24.0 video 1>; Point=(1.0136, 0.7599)",
          "<TIME 00:04:25.0 video 1>; Point=(0.9798, 0.8025)",
          "<TIME 00:04:26.0 video 1>; Point=(0.9822, 0.7947)",
        ],
        answer_metadata: {
          last_placement_time_sec: 263.0,
          last_placement_time_in_clip_sec: 263.0,
          last_placement_time_token: "<TIME 00:04:23.0 video 1>",
          projected_pixel: [768.2699686468745, 849.6894038200255],
          normalized_projected_pixel: [0.545646284550337, 0.6034725879403591],
          camera_coordinates: [
            0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
          ],
          frame_index: 7890,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [768.2699686468745, 849.6894038200255],
              normalized_projected_pixel: [
                0.545646284550337, 0.6034725879403591,
              ],
              camera_coordinates: [
                0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
              ],
              frame_index: 7890,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 264.0,
              time_token: "<TIME 00:04:24.0 video 1>",
              projected_pixel: [1427.1820970145077, 1069.9447235761877],
              normalized_projected_pixel: [
                1.0136236484478038, 0.7599039229944515,
              ],
              camera_coordinates: [
                0.7699519635797746, 0.3785529285615803, 0.3796412915532063,
              ],
              frame_index: 7920,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [1379.5321236322907, 1129.9326094645107],
              normalized_projected_pixel: [
                0.9797813378070246, 0.80250895558559,
              ],
              camera_coordinates: [
                0.7823005937687337, 0.48114388262252394, 0.4198671279037529,
              ],
              frame_index: 7950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 266.0,
              time_token: "<TIME 00:04:26.0 video 1>",
              projected_pixel: [1382.9653634615502, 1118.974342497681],
              normalized_projected_pixel: [
                0.9822197183675783, 0.7947260955239211,
              ],
              camera_coordinates: [
                0.7748697764384478, 0.46163455405297654, 0.41561168138743415,
              ],
              frame_index: 7980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "At the current time <TIME 00:07:06.0 video 1>, based on the last known position of the long spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 263.0,
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
            "At the current time <TIME 00:07:06.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the long spatula from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 426.0,
            camera_coordinates: [
              0.8331624926000227, 0.1746292078545981, 0.4897016445674194,
            ],
            world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.8331624926000227,
              z: 0.4897016445674194,
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
            "At the current time <TIME 00:07:06.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the frying pan (marked in red) in the current frame, where is the long spatula relative to frying pan from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 426.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            object_x_camera_coordinates: [
              0.8331624926000227, 0.1746292078545981, 0.4897016445674194,
            ],
            object_y_assoc_id: "c89fd59c44994570",
            object_y_name: "frying pan",
            object_y_reference_time_sec: 426.0,
            object_y_world_coordinates: [
              -0.654244114089532, -0.37166683472968776, -0.5688215321202611,
            ],
            object_y_projected_pixel: [795.4587474522675, 886.903928502701],
            object_y_normalized_projected_pixel: [
              0.5649564967700763, 0.6299033583115774,
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
            "At the current time <TIME 00:07:06.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the frying pan (marked in red) in the current frame, how far is the long spatula from the frying pan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 426.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "c89fd59c44994570",
            object_y_name: "frying pan",
            object_y_pixel: [795.4587474522675, 886.903928502701],
            object_y_normalized_projected_pixel: [
              0.5649564967700763, 0.6299033583115774,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7398355777963638, 0.0016464960525296446, -0.12553004710141602,
            ],
            distance_m: 0.75041134442905,
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
  oos_staged_h2p0_16: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "08e1677994e5e4df",
    object_a_name: "wooden spatula",
    query_time_sec: 436.0,
    query_time_in_clip_sec: 436.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 436.0,
    clip_duration_sec: 436.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "08e1677994e5e4df",
      object_name: "wooden spatula",
      query_time_sec: 436.0,
      oos_span_start_sec: 434.0,
      oos_span_end_sec: 443.0,
      oos_duration_sec: 9.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 436.0,
      clip_duration_sec: 436.0,
      anchor_assoc_id: "40ade0a98169a5e9",
      anchor_name: "cup2",
      anchor_projected_pixel: [240.4211364240199, 1073.92913953437],
      anchor_world_coordinates: [
        -0.18960745562488304, -0.4339361530198931, -0.5685964307793513,
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
          "At the current time <TIME 00:07:16.0 video 1>, is the previously moved wooden spatula visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1402.7553328297831, 826.3049790005764],
          camera_coordinates: [
            0.8749686166497148, 0.13948298809748533, 0.5806654889757521,
          ],
          frame_index: 10191,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The wooden spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:12.0 video 1>; Point=(0.968, 0.6057)",
          "<TIME 00:07:13.0 video 1>; Point=(0.9998, 0.6036)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 433.0,
          sampled_last_visible_time_in_clip_sec: 433.0,
          sampled_last_visible_time_token: "<TIME 00:07:13.0 video 1>",
          projected_pixel: [1407.7869419923113, 849.8456796419665],
          normalized_projected_pixel: [0.9998486803922666, 0.6035835792911693],
          camera_coordinates: [
            0.8843803920556239, 0.16960124065554227, 0.5703073314739271,
          ],
          frame_index: 10191,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 432.0,
              time_token: "<TIME 00:07:12.0 video 1>",
              projected_pixel: [1362.9153699931112, 852.8167310291522],
              normalized_projected_pixel: [
                0.9679796661882892, 0.6056937010150228,
              ],
              camera_coordinates: [
                0.8835153543472263, 0.1847112951322794, 0.660971514832275,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 433.0,
              time_token: "<TIME 00:07:13.0 video 1>",
              projected_pixel: [1407.7869419923113, 849.8456796419665],
              normalized_projected_pixel: [
                0.9998486803922666, 0.6035835792911693,
              ],
              camera_coordinates: [
                0.8843803920556239, 0.16960124065554227, 0.5703073314739271,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "The wooden spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:39.7 video 1>; Point=(0.7892, 0.6537)",
          "<TIME 00:05:40.0 video 1>; Point=(0.7479, 0.6298)",
          "<TIME 00:05:41.0 video 1>; Point=(0.6713, 0.5844)",
          "<TIME 00:05:42.0 video 1>; Point=(0.6567, 0.5628)",
        ],
        answer_metadata: {
          last_placement_time_sec: 339.7,
          last_placement_time_in_clip_sec: 339.7,
          last_placement_time_token: "<TIME 00:05:39.7 video 1>",
          projected_pixel: [1111.2137841100425, 920.3612069191182],
          normalized_projected_pixel: [0.789214335305428, 0.6536656299141465],
          camera_coordinates: [
            0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
          ],
          frame_index: 10191,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 339.7,
              time_token: "<TIME 00:05:39.7 video 1>",
              projected_pixel: [1111.2137841100425, 920.3612069191182],
              normalized_projected_pixel: [
                0.789214335305428, 0.6536656299141465,
              ],
              camera_coordinates: [
                0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
              ],
              frame_index: 10191,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 340.0,
              time_token: "<TIME 00:05:40.0 video 1>",
              projected_pixel: [1052.9910024539772, 886.781822455401],
              normalized_projected_pixel: [
                0.7478629278792451, 0.62981663526662,
              ],
              camera_coordinates: [
                0.3910281616389769, 0.19136271337558558, 0.6581984012469679,
              ],
              frame_index: 10200,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 341.0,
              time_token: "<TIME 00:05:41.0 video 1>",
              projected_pixel: [945.1514021549066, 822.8864733129903],
              normalized_projected_pixel: [
                0.671272302666837, 0.5844364157052488,
              ],
              camera_coordinates: [
                0.2605958899660368, 0.11535655623545304, 0.6516338126627482,
              ],
              frame_index: 10230,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 342.0,
              time_token: "<TIME 00:05:42.0 video 1>",
              projected_pixel: [924.6111229637046, 792.4578252634043],
              normalized_projected_pixel: [
                0.656684036195813, 0.5628251599882133,
              ],
              camera_coordinates: [
                0.2303485363269686, 0.0797394905737347, 0.6314284429160444,
              ],
              frame_index: 10260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "At the current time <TIME 00:07:16.0 video 1>, based on the last known position of the wooden spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 339.7,
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
            "At the current time <TIME 00:07:16.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the wooden spatula from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 436.0,
            camera_coordinates: [
              0.8749686166497148, 0.13948298809748533, 0.5806654889757521,
            ],
            world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.8749686166497148,
              z: 0.5806654889757521,
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
            "At the current time <TIME 00:07:16.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, where is the wooden spatula relative to cup2 from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 436.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            object_x_camera_coordinates: [
              0.8749686166497148, 0.13948298809748533, 0.5806654889757521,
            ],
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_reference_time_sec: 436.0,
            object_y_world_coordinates: [
              -0.18960745562488304, -0.4339361530198931, -0.5685964307793513,
            ],
            object_y_projected_pixel: [240.4211364240199, 1073.92913953437],
            object_y_normalized_projected_pixel: [
              0.17075364802842322, 0.7627337638738424,
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
            "At the current time <TIME 00:07:16.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, how far is the wooden spatula from the cup2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 436.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_pixel: [240.4211364240199, 1073.92913953437],
            object_y_normalized_projected_pixel: [
              0.17075364802842322, 0.7627337638738424,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.2438880894857862, -0.14616767899121436, 0.15238626008510647,
            ],
            distance_m: 1.2616830591749275,
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
  oos_staged_h2p0_17: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "08e1677994e5e4df",
    object_a_name: "wooden spatula",
    query_time_sec: 460.0,
    query_time_in_clip_sec: 460.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 460.0,
    clip_duration_sec: 460.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "08e1677994e5e4df",
      object_name: "wooden spatula",
      query_time_sec: 460.0,
      oos_span_start_sec: 458.0,
      oos_span_end_sec: 465.0,
      oos_duration_sec: 7.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 460.0,
      clip_duration_sec: 460.0,
      anchor_assoc_id: "1c965b87f51f3af9",
      anchor_name: "cup",
      anchor_projected_pixel: [262.83954211811505, 784.6755803574756],
      anchor_world_coordinates: [
        -0.1946665494059385, -0.5344223789712377, -0.5333987029666228,
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
          "At the current time <TIME 00:07:40.0 video 1>, is the previously moved wooden spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1454.7579069042786, 982.2182782399561],
          camera_coordinates: [
            0.8019496827765331, 0.2860160625416064, 0.38507753431630093,
          ],
          frame_index: 10191,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The wooden spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:34.0 video 1>; Point=(0.98, 0.5762)",
          "<TIME 00:07:35.0 video 1>; Point=(0.9837, 0.5754)",
          "<TIME 00:07:36.0 video 1>; Point=(0.9733, 0.5873)",
          "<TIME 00:07:37.0 video 1>; Point=(0.9842, 0.6085)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 457.0,
          sampled_last_visible_time_in_clip_sec: 457.0,
          sampled_last_visible_time_token: "<TIME 00:07:37.0 video 1>",
          projected_pixel: [1385.704785261858, 856.767369080987],
          normalized_projected_pixel: [0.9841653304416605, 0.6084995519041101],
          camera_coordinates: [
            0.8487358753332328, 0.17654422900774283, 0.5908304410500136,
          ],
          frame_index: 10191,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 454.0,
              time_token: "<TIME 00:07:34.0 video 1>",
              projected_pixel: [1379.7814551775245, 811.3280500995277],
              normalized_projected_pixel: [
                0.979958419870401, 0.5762273083093237,
              ],
              camera_coordinates: [
                0.8591496651107078, 0.12245126239588178, 0.6178808048059188,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 455.0,
              time_token: "<TIME 00:07:35.0 video 1>",
              projected_pixel: [1385.0258022504217, 810.1845609434931],
              normalized_projected_pixel: [0.98368309818922, 0.57541517112464],
              camera_coordinates: [
                0.86460208351814, 0.12085331041944852, 0.6119341446509328,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 456.0,
              time_token: "<TIME 00:07:36.0 video 1>",
              projected_pixel: [1370.4067541816771, 826.8584612921294],
              normalized_projected_pixel: [
                0.9733002515494866, 0.5872574298949783,
              ],
              camera_coordinates: [
                0.8605967030148909, 0.14439832485587784, 0.6342579135387028,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 457.0,
              time_token: "<TIME 00:07:37.0 video 1>",
              projected_pixel: [1385.704785261858, 856.767369080987],
              normalized_projected_pixel: [
                0.9841653304416605, 0.6084995519041101,
              ],
              camera_coordinates: [
                0.8487358753332328, 0.17654422900774283, 0.5908304410500136,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "The wooden spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:39.7 video 1>; Point=(0.7892, 0.6537)",
          "<TIME 00:05:40.0 video 1>; Point=(0.7479, 0.6298)",
          "<TIME 00:05:41.0 video 1>; Point=(0.6713, 0.5844)",
          "<TIME 00:05:42.0 video 1>; Point=(0.6567, 0.5628)",
        ],
        answer_metadata: {
          last_placement_time_sec: 339.7,
          last_placement_time_in_clip_sec: 339.7,
          last_placement_time_token: "<TIME 00:05:39.7 video 1>",
          projected_pixel: [1111.2137841100425, 920.3612069191182],
          normalized_projected_pixel: [0.789214335305428, 0.6536656299141465],
          camera_coordinates: [
            0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
          ],
          frame_index: 10191,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 339.7,
              time_token: "<TIME 00:05:39.7 video 1>",
              projected_pixel: [1111.2137841100425, 920.3612069191182],
              normalized_projected_pixel: [
                0.789214335305428, 0.6536656299141465,
              ],
              camera_coordinates: [
                0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
              ],
              frame_index: 10191,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 340.0,
              time_token: "<TIME 00:05:40.0 video 1>",
              projected_pixel: [1052.9910024539772, 886.781822455401],
              normalized_projected_pixel: [
                0.7478629278792451, 0.62981663526662,
              ],
              camera_coordinates: [
                0.3910281616389769, 0.19136271337558558, 0.6581984012469679,
              ],
              frame_index: 10200,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 341.0,
              time_token: "<TIME 00:05:41.0 video 1>",
              projected_pixel: [945.1514021549066, 822.8864733129903],
              normalized_projected_pixel: [
                0.671272302666837, 0.5844364157052488,
              ],
              camera_coordinates: [
                0.2605958899660368, 0.11535655623545304, 0.6516338126627482,
              ],
              frame_index: 10230,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 342.0,
              time_token: "<TIME 00:05:42.0 video 1>",
              projected_pixel: [924.6111229637046, 792.4578252634043],
              normalized_projected_pixel: [
                0.656684036195813, 0.5628251599882133,
              ],
              camera_coordinates: [
                0.2303485363269686, 0.0797394905737347, 0.6314284429160444,
              ],
              frame_index: 10260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "At the current time <TIME 00:07:40.0 video 1>, based on the last known position of the wooden spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 339.7,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the wooden spatula from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 460.0,
            camera_coordinates: [
              0.8019496827765331, 0.2860160625416064, 0.38507753431630093,
            ],
            world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.8019496827765331,
              z: 0.38507753431630093,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup (marked in red) in the current frame, where is the wooden spatula relative to cup from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 460.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            object_x_camera_coordinates: [
              0.8019496827765331, 0.2860160625416064, 0.38507753431630093,
            ],
            object_y_assoc_id: "1c965b87f51f3af9",
            object_y_name: "cup",
            object_y_reference_time_sec: 460.0,
            object_y_world_coordinates: [
              -0.1946665494059385, -0.5344223789712377, -0.5333987029666228,
            ],
            object_y_projected_pixel: [262.83954211811505, 784.6755803574756],
            object_y_normalized_projected_pixel: [
              0.18667581116343399, 0.5572979974129798,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup (marked in red) in the current frame, how far is the wooden spatula from the cup: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 460.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "1c965b87f51f3af9",
            object_y_name: "cup",
            object_y_pixel: [262.83954211811505, 784.6755803574756],
            object_y_normalized_projected_pixel: [
              0.18667581116343399, 0.5572979974129798,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.2661268797375012, 0.21321145099628053, -0.22331289790411357,
            ],
            distance_m: 1.3032287016483688,
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
  oos_staged_h2p0_18: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "db162eded46b7ff5",
    object_a_name: "long spatula",
    query_time_sec: 460.0,
    query_time_in_clip_sec: 460.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 460.0,
    clip_duration_sec: 460.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "db162eded46b7ff5",
      object_name: "long spatula",
      query_time_sec: 460.0,
      oos_span_start_sec: 458.0,
      oos_span_end_sec: 465.0,
      oos_duration_sec: 7.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 460.0,
      clip_duration_sec: 460.0,
      anchor_assoc_id: "1c965b87f51f3af9",
      anchor_name: "cup",
      anchor_projected_pixel: [262.83954211811505, 784.6755803574756],
      anchor_world_coordinates: [
        -0.1946665494059385, -0.5344223789712377, -0.5333987029666228,
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
          "At the current time <TIME 00:07:40.0 video 1>, is the previously moved long spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1418.6156292087703, 989.6211693345622],
          camera_coordinates: [
            0.7263413283945064, 0.279493786705034, 0.392249208641225,
          ],
          frame_index: 7890,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The long spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:34.0 video 1>; Point=(0.9643, 0.5864)",
          "<TIME 00:07:35.0 video 1>; Point=(0.9683, 0.5855)",
          "<TIME 00:07:36.0 video 1>; Point=(0.9573, 0.5972)",
          "<TIME 00:07:37.0 video 1>; Point=(0.9663, 0.6173)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 457.0,
          sampled_last_visible_time_in_clip_sec: 457.0,
          sampled_last_visible_time_token: "<TIME 00:07:37.0 video 1>",
          projected_pixel: [1360.5947457215889, 869.2002209833589],
          normalized_projected_pixel: [0.9663314955409011, 0.6173297024029538],
          camera_coordinates: [
            0.7735045222753103, 0.18158408937479978, 0.5796304601739565,
          ],
          frame_index: 7890,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 454.0,
              time_token: "<TIME 00:07:34.0 video 1>",
              projected_pixel: [1357.757517801302, 825.6341117563253],
              normalized_projected_pixel: [
                0.9643164188929702, 0.5863878634632992,
              ],
              camera_coordinates: [
                0.7856435933870993, 0.13284309188256038, 0.6005757897307225,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 455.0,
              time_token: "<TIME 00:07:35.0 video 1>",
              projected_pixel: [1363.3588569790504, 824.45376081957],
              normalized_projected_pixel: [
                0.9682946427408029, 0.5855495460366265,
              ],
              camera_coordinates: [
                0.7909380916469217, 0.1312111452078641, 0.5952929966387845,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 456.0,
              time_token: "<TIME 00:07:36.0 video 1>",
              projected_pixel: [1347.8983119588297, 840.8686466201301],
              normalized_projected_pixel: [
                0.9573141420162142, 0.5972078456108879,
              ],
              camera_coordinates: [
                0.7871275376496123, 0.15371606519013714, 0.6162008455967056,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 457.0,
              time_token: "<TIME 00:07:37.0 video 1>",
              projected_pixel: [1360.5947457215889, 869.2002209833589],
              normalized_projected_pixel: [
                0.9663314955409011, 0.6173297024029538,
              ],
              camera_coordinates: [
                0.7735045222753103, 0.18158408937479978, 0.5796304601739565,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "The long spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:23.0 video 1>; Point=(0.5456, 0.6035)",
          "<TIME 00:04:24.0 video 1>; Point=(1.0136, 0.7599)",
          "<TIME 00:04:25.0 video 1>; Point=(0.9798, 0.8025)",
          "<TIME 00:04:26.0 video 1>; Point=(0.9822, 0.7947)",
        ],
        answer_metadata: {
          last_placement_time_sec: 263.0,
          last_placement_time_in_clip_sec: 263.0,
          last_placement_time_token: "<TIME 00:04:23.0 video 1>",
          projected_pixel: [768.2699686468745, 849.6894038200255],
          normalized_projected_pixel: [0.545646284550337, 0.6034725879403591],
          camera_coordinates: [
            0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
          ],
          frame_index: 7890,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [768.2699686468745, 849.6894038200255],
              normalized_projected_pixel: [
                0.545646284550337, 0.6034725879403591,
              ],
              camera_coordinates: [
                0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
              ],
              frame_index: 7890,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 264.0,
              time_token: "<TIME 00:04:24.0 video 1>",
              projected_pixel: [1427.1820970145077, 1069.9447235761877],
              normalized_projected_pixel: [
                1.0136236484478038, 0.7599039229944515,
              ],
              camera_coordinates: [
                0.7699519635797746, 0.3785529285615803, 0.3796412915532063,
              ],
              frame_index: 7920,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [1379.5321236322907, 1129.9326094645107],
              normalized_projected_pixel: [
                0.9797813378070246, 0.80250895558559,
              ],
              camera_coordinates: [
                0.7823005937687337, 0.48114388262252394, 0.4198671279037529,
              ],
              frame_index: 7950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 266.0,
              time_token: "<TIME 00:04:26.0 video 1>",
              projected_pixel: [1382.9653634615502, 1118.974342497681],
              normalized_projected_pixel: [
                0.9822197183675783, 0.7947260955239211,
              ],
              camera_coordinates: [
                0.7748697764384478, 0.46163455405297654, 0.41561168138743415,
              ],
              frame_index: 7980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "At the current time <TIME 00:07:40.0 video 1>, based on the last known position of the long spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 263.0,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the long spatula from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 460.0,
            camera_coordinates: [
              0.7263413283945064, 0.279493786705034, 0.392249208641225,
            ],
            world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7263413283945064,
              z: 0.392249208641225,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup (marked in red) in the current frame, where is the long spatula relative to cup from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 460.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            object_x_camera_coordinates: [
              0.7263413283945064, 0.279493786705034, 0.392249208641225,
            ],
            object_y_assoc_id: "1c965b87f51f3af9",
            object_y_name: "cup",
            object_y_reference_time_sec: 460.0,
            object_y_world_coordinates: [
              -0.1946665494059385, -0.5344223789712377, -0.5333987029666228,
            ],
            object_y_projected_pixel: [262.83954211811505, 784.6755803574756],
            object_y_normalized_projected_pixel: [
              0.18667581116343399, 0.5572979974129798,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup (marked in red) in the current frame, how far is the long spatula from the cup: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 460.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "1c965b87f51f3af9",
            object_y_name: "cup",
            object_y_pixel: [262.83954211811505, 784.6755803574756],
            object_y_normalized_projected_pixel: [
              0.18667581116343399, 0.5572979974129798,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.1905185253554744, 0.2066891751597082, -0.21614122357918952,
            ],
            distance_m: 1.2275063351661706,
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
  oos_staged_h2p0_19: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "8f9ae69353ae5266",
    object_a_name: "knife",
    query_time_sec: 460.0,
    query_time_in_clip_sec: 460.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 460.0,
    clip_duration_sec: 460.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "8f9ae69353ae5266",
      object_name: "knife",
      query_time_sec: 460.0,
      oos_span_start_sec: 458.0,
      oos_span_end_sec: 465.0,
      oos_duration_sec: 7.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 460.0,
      clip_duration_sec: 460.0,
      anchor_assoc_id: "74327afceccb541a",
      anchor_name: "bowl",
      anchor_projected_pixel: [423.235067657924, 720.768498945093],
      anchor_world_coordinates: [
        -0.3647625065606893, -0.5837945827323863, -0.5554617319317062,
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
          "At the current time <TIME 00:07:40.0 video 1>, is the previously moved knife visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1411.196405464676, 1007.2065964914405],
          camera_coordinates: [
            0.749017292510294, 0.3098672496986422, 0.4091971636922695,
          ],
          frame_index: 10276,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The knife was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:07:34.0 video 1>; Point=(0.9601, 0.5978)",
          "<TIME 00:07:35.0 video 1>; Point=(0.9642, 0.597)",
          "<TIME 00:07:36.0 video 1>; Point=(0.9535, 0.6087)",
          "<TIME 00:07:37.0 video 1>; Point=(0.9633, 0.6298)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 457.0,
          sampled_last_visible_time_in_clip_sec: 457.0,
          sampled_last_visible_time_token: "<TIME 00:07:37.0 video 1>",
          projected_pixel: [1356.3492045914704, 886.8200572327623],
          normalized_projected_pixel: [0.9633161964428057, 0.6298437906482687],
          camera_coordinates: [
            0.7961091646607361, 0.20960343745921242, 0.6003168339201772,
          ],
          frame_index: 10276,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 454.0,
              time_token: "<TIME 00:07:34.0 video 1>",
              projected_pixel: [1351.8632117120978, 841.6904577159522],
              normalized_projected_pixel: [
                0.9601301219546149, 0.5977915182641707,
              ],
              camera_coordinates: [
                0.8077079041340434, 0.15781320057805714, 0.6253475407026292,
              ],
              frame_index: 10276,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 455.0,
              time_token: "<TIME 00:07:35.0 video 1>",
              projected_pixel: [1357.5589443899457, 840.62536487369],
              normalized_projected_pixel: [
                0.9641753866405864, 0.5970350602796094,
              ],
              camera_coordinates: [
                0.8132204546043822, 0.15620653608483132, 0.6198430784951943,
              ],
              frame_index: 10276,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 456.0,
              time_token: "<TIME 00:07:36.0 video 1>",
              projected_pixel: [1342.4724288503699, 856.9797851807252],
              normalized_projected_pixel: [
                0.9534605318539559, 0.6086504156113105,
              ],
              camera_coordinates: [
                0.808915258584378, 0.17970764526640037, 0.640153147465728,
              ],
              frame_index: 10276,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 457.0,
              time_token: "<TIME 00:07:37.0 video 1>",
              projected_pixel: [1356.3492045914704, 886.8200572327623],
              normalized_projected_pixel: [
                0.9633161964428057, 0.6298437906482687,
              ],
              camera_coordinates: [
                0.7961091646607361, 0.20960343745921242, 0.6003168339201772,
              ],
              frame_index: 10276,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
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
          "<TIME 00:05:42.5 video 1>; Point=(0.6196, 0.606)",
          "<TIME 00:05:43.0 video 1>; Point=(0.6733, 0.6274)",
          "<TIME 00:05:44.0 video 1>; Point=(1.1171, 0.8081)",
          "<TIME 00:05:45.0 video 1>; Point=(1.4465, 0.9467)",
        ],
        answer_metadata: {
          last_placement_time_sec: 342.53333333333336,
          last_placement_time_in_clip_sec: 342.53333333333336,
          last_placement_time_token: "<TIME 00:05:42.5 video 1>",
          projected_pixel: [872.327920531678, 853.2579009374319],
          normalized_projected_pixel: [0.6195510799230668, 0.6060070319157898],
          camera_coordinates: [
            0.17143524700639967, 0.13929512372426267, 0.615901956931288,
          ],
          frame_index: 10276,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 342.53333333333336,
              time_token: "<TIME 00:05:42.5 video 1>",
              projected_pixel: [872.327920531678, 853.2579009374319],
              normalized_projected_pixel: [
                0.6195510799230668, 0.6060070319157898,
              ],
              camera_coordinates: [
                0.17143524700639967, 0.13929512372426267, 0.615901956931288,
              ],
              frame_index: 10276,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 343.0,
              time_token: "<TIME 00:05:43.0 video 1>",
              projected_pixel: [948.0697726407336, 883.3738777263534],
              normalized_projected_pixel: [
                0.6733450089777938, 0.6273962199761033,
              ],
              camera_coordinates: [
                0.2509501320284536, 0.17179805719449087, 0.6170607444310399,
              ],
              frame_index: 10290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 344.0,
              time_token: "<TIME 00:05:44.0 video 1>",
              projected_pixel: [1572.8707747431909, 1137.8500584159615],
              normalized_projected_pixel: [
                1.117095720698289, 0.8081321437613362,
              ],
              camera_coordinates: [
                0.7606258155299296, 0.3718410437614711, 0.306131057394571,
              ],
              frame_index: 10320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 345.0,
              time_token: "<TIME 00:05:45.0 video 1>",
              projected_pixel: [2036.6699145359412, 1332.9919944170342],
              normalized_projected_pixel: [
                1.4464985188465491, 0.9467272687620981,
              ],
              camera_coordinates: [
                1.0111179740114327, 0.4768796377026821, 0.32030738037886436,
              ],
              frame_index: 10350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
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
          "At the current time <TIME 00:07:40.0 video 1>, based on the last known position of the knife that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 342.53333333333336,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, in which direction is the knife from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 460.0,
            camera_coordinates: [
              0.749017292510294, 0.3098672496986422, 0.4091971636922695,
            ],
            world_coordinates: [
              -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.749017292510294,
              z: 0.4091971636922695,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl (marked in red) in the current frame, where is the knife relative to bowl from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "8f9ae69353ae5266",
            object_x_name: "knife",
            object_x_reference_time_sec: 460.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
            ],
            object_x_camera_coordinates: [
              0.749017292510294, 0.3098672496986422, 0.4091971636922695,
            ],
            object_y_assoc_id: "74327afceccb541a",
            object_y_name: "bowl",
            object_y_reference_time_sec: 460.0,
            object_y_world_coordinates: [
              -0.3647625065606893, -0.5837945827323863, -0.5554617319317062,
            ],
            object_y_projected_pixel: [423.235067657924, 720.768498945093],
            object_y_normalized_projected_pixel: [
              0.3005930878252301, 0.5119094452735036,
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
            "At the current time <TIME 00:07:40.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl (marked in red) in the current frame, how far is the knife from the bowl: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "8f9ae69353ae5266",
            object_x_name: "knife",
            object_x_reference_time_sec: 460.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "74327afceccb541a",
            object_y_name: "bowl",
            object_y_pixel: [423.235067657924, 720.768498945093],
            object_y_normalized_projected_pixel: [
              0.3005930878252301, 0.5119094452735036,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.060691085666714, 0.3043069890315977, -0.26305198363205895,
            ],
            distance_m: 1.1344005769035337,
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
  oos_staged_h2p0_20: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "08e1677994e5e4df",
    object_a_name: "wooden spatula",
    query_time_sec: 501.0,
    query_time_in_clip_sec: 501.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 501.0,
    clip_duration_sec: 501.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "08e1677994e5e4df",
      object_name: "wooden spatula",
      query_time_sec: 501.0,
      oos_span_start_sec: 499.0,
      oos_span_end_sec: 510.0,
      oos_duration_sec: 11.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 501.0,
      clip_duration_sec: 501.0,
      anchor_assoc_id: "40ade0a98169a5e9",
      anchor_name: "cup2",
      anchor_projected_pixel: [406.03286752721004, 808.7442034824478],
      anchor_world_coordinates: [
        -0.18960745562488304, -0.4339361530198931, -0.5685964307793513,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_20",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:21.0 video 1>, is the previously moved wooden spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [2523.364683809593, 1856.8283219388122],
          camera_coordinates: [
            0.8307662304801865, 0.5425860599397738, 0.2400949458141214,
          ],
          frame_index: 10191,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The wooden spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:17.0 video 1>; Point=(0.9583, 0.6811)",
          "<TIME 00:08:18.0 video 1>; Point=(0.9652, 0.6747)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 498.0,
          sampled_last_visible_time_in_clip_sec: 498.0,
          sampled_last_visible_time_token: "<TIME 00:08:18.0 video 1>",
          projected_pixel: [1359.0209186518348, 950.0457359566582],
          normalized_projected_pixel: [0.9652137206334054, 0.674748392014672],
          camera_coordinates: [
            0.8653611519401276, 0.3105353895291825, 0.6272878510542884,
          ],
          frame_index: 10191,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 497.0,
              time_token: "<TIME 00:08:17.0 video 1>",
              projected_pixel: [1349.2448944755101, 958.9185776260376],
              normalized_projected_pixel: [
                0.9582705216445384, 0.6810501261548563,
              ],
              camera_coordinates: [
                0.8533172433182832, 0.3225461955471219, 0.634921388257707,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 498.0,
              time_token: "<TIME 00:08:18.0 video 1>",
              projected_pixel: [1359.0209186518348, 950.0457359566582],
              normalized_projected_pixel: [
                0.9652137206334054, 0.674748392014672,
              ],
              camera_coordinates: [
                0.8653611519401276, 0.3105353895291825, 0.6272878510542884,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "The wooden spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:39.7 video 1>; Point=(0.7892, 0.6537)",
          "<TIME 00:05:40.0 video 1>; Point=(0.7479, 0.6298)",
          "<TIME 00:05:41.0 video 1>; Point=(0.6713, 0.5844)",
          "<TIME 00:05:42.0 video 1>; Point=(0.6567, 0.5628)",
        ],
        answer_metadata: {
          last_placement_time_sec: 339.7,
          last_placement_time_in_clip_sec: 339.7,
          last_placement_time_token: "<TIME 00:05:39.7 video 1>",
          projected_pixel: [1111.2137841100425, 920.3612069191182],
          normalized_projected_pixel: [0.789214335305428, 0.6536656299141465],
          camera_coordinates: [
            0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
          ],
          frame_index: 10191,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 339.7,
              time_token: "<TIME 00:05:39.7 video 1>",
              projected_pixel: [1111.2137841100425, 920.3612069191182],
              normalized_projected_pixel: [
                0.789214335305428, 0.6536656299141465,
              ],
              camera_coordinates: [
                0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
              ],
              frame_index: 10191,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 340.0,
              time_token: "<TIME 00:05:40.0 video 1>",
              projected_pixel: [1052.9910024539772, 886.781822455401],
              normalized_projected_pixel: [
                0.7478629278792451, 0.62981663526662,
              ],
              camera_coordinates: [
                0.3910281616389769, 0.19136271337558558, 0.6581984012469679,
              ],
              frame_index: 10200,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 341.0,
              time_token: "<TIME 00:05:41.0 video 1>",
              projected_pixel: [945.1514021549066, 822.8864733129903],
              normalized_projected_pixel: [
                0.671272302666837, 0.5844364157052488,
              ],
              camera_coordinates: [
                0.2605958899660368, 0.11535655623545304, 0.6516338126627482,
              ],
              frame_index: 10230,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 342.0,
              time_token: "<TIME 00:05:42.0 video 1>",
              projected_pixel: [924.6111229637046, 792.4578252634043],
              normalized_projected_pixel: [
                0.656684036195813, 0.5628251599882133,
              ],
              camera_coordinates: [
                0.2303485363269686, 0.0797394905737347, 0.6314284429160444,
              ],
              frame_index: 10260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "At the current time <TIME 00:08:21.0 video 1>, based on the last known position of the wooden spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 339.7,
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
            "At the current time <TIME 00:08:21.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the wooden spatula from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 501.0,
            camera_coordinates: [
              0.8307662304801865, 0.5425860599397738, 0.2400949458141214,
            ],
            world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.8307662304801865,
              z: 0.2400949458141214,
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
            "At the current time <TIME 00:08:21.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, where is the wooden spatula relative to cup2 from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 501.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            object_x_camera_coordinates: [
              0.8307662304801865, 0.5425860599397738, 0.2400949458141214,
            ],
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_reference_time_sec: 501.0,
            object_y_world_coordinates: [
              -0.18960745562488304, -0.4339361530198931, -0.5685964307793513,
            ],
            object_y_projected_pixel: [406.03286752721004, 808.7442034824478],
            object_y_normalized_projected_pixel: [
              0.2883756161414844, 0.5743921899733294,
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
            "At the current time <TIME 00:08:21.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, how far is the wooden spatula from the cup2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 501.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_pixel: [406.03286752721004, 808.7442034824478],
            object_y_normalized_projected_pixel: [
              0.2883756161414844, 0.5743921899733294,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.1242954274974062, 0.45073969396433783, -0.35304059511954544,
            ],
            distance_m: 1.2616830591749273,
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
  oos_staged_h2p0_21: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "db162eded46b7ff5",
    object_a_name: "long spatula",
    query_time_sec: 501.0,
    query_time_in_clip_sec: 501.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 501.0,
    clip_duration_sec: 501.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "db162eded46b7ff5",
      object_name: "long spatula",
      query_time_sec: 501.0,
      oos_span_start_sec: 499.0,
      oos_span_end_sec: 510.0,
      oos_duration_sec: 11.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 501.0,
      clip_duration_sec: 501.0,
      anchor_assoc_id: "74327afceccb541a",
      anchor_name: "bowl",
      anchor_projected_pixel: [599.8939593545193, 685.9713532197846],
      anchor_world_coordinates: [
        -0.3647625065606893, -0.5837945827323863, -0.5554617319317062,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_21",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:21.0 video 1>, is the previously moved long spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1990.8786487905065, 1572.4595518570059],
          camera_coordinates: [
            0.7615659253977628, 0.5156071779269326, 0.25724294712348506,
          ],
          frame_index: 7890,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The long spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:17.0 video 1>; Point=(0.9433, 0.6859)",
          "<TIME 00:08:18.0 video 1>; Point=(0.9503, 0.6808)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 498.0,
          sampled_last_visible_time_in_clip_sec: 498.0,
          sampled_last_visible_time_token: "<TIME 00:08:18.0 video 1>",
          projected_pixel: [1338.015145471892, 958.6289062599222],
          normalized_projected_pixel: [0.950294847636287, 0.680844393650513],
          camera_coordinates: [
            0.7914535085421568, 0.30403892783472536, 0.6097934953965327,
          ],
          frame_index: 7890,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 497.0,
              time_token: "<TIME 00:08:17.0 video 1>",
              projected_pixel: [1328.180211961351, 965.7537982024523],
              normalized_projected_pixel: [
                0.9433098096316413, 0.6859046862233327,
              ],
              camera_coordinates: [
                0.7799794822531332, 0.3132153926362924, 0.6163443818772513,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 498.0,
              time_token: "<TIME 00:08:18.0 video 1>",
              projected_pixel: [1338.015145471892, 958.6289062599222],
              normalized_projected_pixel: [
                0.950294847636287, 0.680844393650513,
              ],
              camera_coordinates: [
                0.7914535085421568, 0.30403892783472536, 0.6097934953965327,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "The long spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:23.0 video 1>; Point=(0.5456, 0.6035)",
          "<TIME 00:04:24.0 video 1>; Point=(1.0136, 0.7599)",
          "<TIME 00:04:25.0 video 1>; Point=(0.9798, 0.8025)",
          "<TIME 00:04:26.0 video 1>; Point=(0.9822, 0.7947)",
        ],
        answer_metadata: {
          last_placement_time_sec: 263.0,
          last_placement_time_in_clip_sec: 263.0,
          last_placement_time_token: "<TIME 00:04:23.0 video 1>",
          projected_pixel: [768.2699686468745, 849.6894038200255],
          normalized_projected_pixel: [0.545646284550337, 0.6034725879403591],
          camera_coordinates: [
            0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
          ],
          frame_index: 7890,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [768.2699686468745, 849.6894038200255],
              normalized_projected_pixel: [
                0.545646284550337, 0.6034725879403591,
              ],
              camera_coordinates: [
                0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
              ],
              frame_index: 7890,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 264.0,
              time_token: "<TIME 00:04:24.0 video 1>",
              projected_pixel: [1427.1820970145077, 1069.9447235761877],
              normalized_projected_pixel: [
                1.0136236484478038, 0.7599039229944515,
              ],
              camera_coordinates: [
                0.7699519635797746, 0.3785529285615803, 0.3796412915532063,
              ],
              frame_index: 7920,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [1379.5321236322907, 1129.9326094645107],
              normalized_projected_pixel: [
                0.9797813378070246, 0.80250895558559,
              ],
              camera_coordinates: [
                0.7823005937687337, 0.48114388262252394, 0.4198671279037529,
              ],
              frame_index: 7950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 266.0,
              time_token: "<TIME 00:04:26.0 video 1>",
              projected_pixel: [1382.9653634615502, 1118.974342497681],
              normalized_projected_pixel: [
                0.9822197183675783, 0.7947260955239211,
              ],
              camera_coordinates: [
                0.7748697764384478, 0.46163455405297654, 0.41561168138743415,
              ],
              frame_index: 7980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "At the current time <TIME 00:08:21.0 video 1>, based on the last known position of the long spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 263.0,
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
            "At the current time <TIME 00:08:21.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the long spatula from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 501.0,
            camera_coordinates: [
              0.7615659253977628, 0.5156071779269326, 0.25724294712348506,
            ],
            world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7615659253977628,
              z: 0.25724294712348506,
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
            "At the current time <TIME 00:08:21.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl (marked in red) in the current frame, where is the long spatula relative to bowl from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 501.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            object_x_camera_coordinates: [
              0.7615659253977628, 0.5156071779269326, 0.25724294712348506,
            ],
            object_y_assoc_id: "74327afceccb541a",
            object_y_name: "bowl",
            object_y_reference_time_sec: 501.0,
            object_y_world_coordinates: [
              -0.3647625065606893, -0.5837945827323863, -0.5554617319317062,
            ],
            object_y_projected_pixel: [599.8939593545193, 685.9713532197846],
            object_y_normalized_projected_pixel: [
              0.42606105067792566, 0.4871955633663243,
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
            "At the current time <TIME 00:08:21.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the bowl (marked in red) in the current frame, how far is the long spatula from the bowl: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 501.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "74327afceccb541a",
            object_y_name: "bowl",
            object_y_pixel: [599.8939593545193, 685.9713532197846],
            object_y_normalized_projected_pixel: [
              0.42606105067792566, 0.4871955633663243,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8742719892778856, 0.5482434078122616, -0.40742188143620744,
            ],
            distance_m: 1.1094660584797231,
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
  oos_staged_h2p0_22: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "8f9ae69353ae5266",
    object_a_name: "knife",
    query_time_sec: 501.0,
    query_time_in_clip_sec: 501.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 501.0,
    clip_duration_sec: 501.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "8f9ae69353ae5266",
      object_name: "knife",
      query_time_sec: 501.0,
      oos_span_start_sec: 499.0,
      oos_span_end_sec: 510.0,
      oos_duration_sec: 11.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 501.0,
      clip_duration_sec: 501.0,
      anchor_assoc_id: "40ade0a98169a5e9",
      anchor_name: "cup2",
      anchor_projected_pixel: [406.03286752721004, 808.7442034824478],
      anchor_world_coordinates: [
        -0.18960745562488304, -0.4339361530198931, -0.5685964307793513,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_22",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:21.0 video 1>, is the previously moved knife visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1914.2231303298868, 1561.0239877614508],
          camera_coordinates: [
            0.7773610729300008, 0.5509788830674842, 0.2721873632412697,
          ],
          frame_index: 10276,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The knife was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:17.0 video 1>; Point=(0.9357, 0.6957)",
          "<TIME 00:08:18.0 video 1>; Point=(0.9437, 0.6912)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 498.0,
          sampled_last_visible_time_in_clip_sec: 498.0,
          sampled_last_visible_time_token: "<TIME 00:08:18.0 video 1>",
          projected_pixel: [1328.7466330419866, 973.2655422449909],
          normalized_projected_pixel: [0.9437120973309564, 0.6912397317080902],
          camera_coordinates: [
            0.8072980095452795, 0.3336145258192192, 0.6342519412800808,
          ],
          frame_index: 10276,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 497.0,
              time_token: "<TIME 00:08:17.0 video 1>",
              projected_pixel: [1317.478066432195, 979.503004706625],
              normalized_projected_pixel: [
                0.9357088540001385, 0.6956697476609552,
              ],
              camera_coordinates: [
                0.7940853948932862, 0.34220570789521165, 0.6425085679527563,
              ],
              frame_index: 10276,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 498.0,
              time_token: "<TIME 00:08:18.0 video 1>",
              projected_pixel: [1328.7466330419866, 973.2655422449909],
              normalized_projected_pixel: [
                0.9437120973309564, 0.6912397317080902,
              ],
              camera_coordinates: [
                0.8072980095452795, 0.3336145258192192, 0.6342519412800808,
              ],
              frame_index: 10276,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
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
          "<TIME 00:05:42.5 video 1>; Point=(0.6196, 0.606)",
          "<TIME 00:05:43.0 video 1>; Point=(0.6733, 0.6274)",
          "<TIME 00:05:44.0 video 1>; Point=(1.1171, 0.8081)",
          "<TIME 00:05:45.0 video 1>; Point=(1.4465, 0.9467)",
        ],
        answer_metadata: {
          last_placement_time_sec: 342.53333333333336,
          last_placement_time_in_clip_sec: 342.53333333333336,
          last_placement_time_token: "<TIME 00:05:42.5 video 1>",
          projected_pixel: [872.327920531678, 853.2579009374319],
          normalized_projected_pixel: [0.6195510799230668, 0.6060070319157898],
          camera_coordinates: [
            0.17143524700639967, 0.13929512372426267, 0.615901956931288,
          ],
          frame_index: 10276,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 342.53333333333336,
              time_token: "<TIME 00:05:42.5 video 1>",
              projected_pixel: [872.327920531678, 853.2579009374319],
              normalized_projected_pixel: [
                0.6195510799230668, 0.6060070319157898,
              ],
              camera_coordinates: [
                0.17143524700639967, 0.13929512372426267, 0.615901956931288,
              ],
              frame_index: 10276,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 343.0,
              time_token: "<TIME 00:05:43.0 video 1>",
              projected_pixel: [948.0697726407336, 883.3738777263534],
              normalized_projected_pixel: [
                0.6733450089777938, 0.6273962199761033,
              ],
              camera_coordinates: [
                0.2509501320284536, 0.17179805719449087, 0.6170607444310399,
              ],
              frame_index: 10290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 344.0,
              time_token: "<TIME 00:05:44.0 video 1>",
              projected_pixel: [1572.8707747431909, 1137.8500584159615],
              normalized_projected_pixel: [
                1.117095720698289, 0.8081321437613362,
              ],
              camera_coordinates: [
                0.7606258155299296, 0.3718410437614711, 0.306131057394571,
              ],
              frame_index: 10320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 345.0,
              time_token: "<TIME 00:05:45.0 video 1>",
              projected_pixel: [2036.6699145359412, 1332.9919944170342],
              normalized_projected_pixel: [
                1.4464985188465491, 0.9467272687620981,
              ],
              camera_coordinates: [
                1.0111179740114327, 0.4768796377026821, 0.32030738037886436,
              ],
              frame_index: 10350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
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
          "At the current time <TIME 00:08:21.0 video 1>, based on the last known position of the knife that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 342.53333333333336,
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
            "At the current time <TIME 00:08:21.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, in which direction is the knife from your viewpoint?",
          choices: ["Front-right", "Back-left", "Front-left", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 501.0,
            camera_coordinates: [
              0.7773610729300008, 0.5509788830674842, 0.2721873632412697,
            ],
            world_coordinates: [
              -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7773610729300008,
              z: 0.2721873632412697,
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
            "At the current time <TIME 00:08:21.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, where is the knife relative to cup2 from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "8f9ae69353ae5266",
            object_x_name: "knife",
            object_x_reference_time_sec: 501.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
            ],
            object_x_camera_coordinates: [
              0.7773610729300008, 0.5509788830674842, 0.2721873632412697,
            ],
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_reference_time_sec: 501.0,
            object_y_world_coordinates: [
              -0.18960745562488304, -0.4339361530198931, -0.5685964307793513,
            ],
            object_y_projected_pixel: [406.03286752721004, 808.7442034824478],
            object_y_normalized_projected_pixel: [
              0.2883756161414844, 0.5743921899733294,
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
            "At the current time <TIME 00:08:21.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the cup2 (marked in red) in the current frame, how far is the knife from the cup2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "8f9ae69353ae5266",
            object_x_name: "knife",
            object_x_reference_time_sec: 501.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "40ade0a98169a5e9",
            object_y_name: "cup2",
            object_y_pixel: [406.03286752721004, 808.7442034824478],
            object_y_normalized_projected_pixel: [
              0.2883756161414844, 0.5743921899733294,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.0708902699472205, 0.4591325170920482, -0.32094817769239714,
            ],
            distance_m: 1.2085596266974092,
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
  oos_staged_h2p0_23: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "08e1677994e5e4df",
    object_a_name: "wooden spatula",
    query_time_sec: 544.0,
    query_time_in_clip_sec: 544.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 544.0,
    clip_duration_sec: 544.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "08e1677994e5e4df",
      object_name: "wooden spatula",
      query_time_sec: 544.0,
      oos_span_start_sec: 542.0,
      oos_span_end_sec: 565.0,
      oos_duration_sec: 23.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 3,
      clip_start_time_sec: 0,
      clip_end_time_sec: 544.0,
      clip_duration_sec: 544.0,
      anchor_assoc_id: "e73367f41a448874",
      anchor_name: "pan2",
      anchor_projected_pixel: [686.1217412681685, 929.391833709339],
      anchor_world_coordinates: [
        0.4379582070632468, -0.7991463809316623, -0.6296144724276576,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_23",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:09:04.0 video 1>, is the previously moved wooden spatula visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [5521.946244363003, 797.1532715985409],
          camera_coordinates: [
            1.9526269211901437, 0.34503909967445084, 0.3350696803632176,
          ],
          frame_index: 10191,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The wooden spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:01.0 video 1>; Point=(0.7679, 0.4082)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 541.0,
          sampled_last_visible_time_in_clip_sec: 541.0,
          sampled_last_visible_time_token: "<TIME 00:09:01.0 video 1>",
          projected_pixel: [1081.1980374482903, 574.6909974902143],
          normalized_projected_pixel: [0.7678963334149789, 0.4081612198083908],
          camera_coordinates: [
            1.2339266955433743, -0.46027779743368397, 1.9140057111407907,
          ],
          frame_index: 10191,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 541.0,
              time_token: "<TIME 00:09:01.0 video 1>",
              projected_pixel: [1081.1980374482903, 574.6909974902143],
              normalized_projected_pixel: [
                0.7678963334149789, 0.4081612198083908,
              ],
              camera_coordinates: [
                1.2339266955433743, -0.46027779743368397, 1.9140057111407907,
              ],
              frame_index: 10191,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "The wooden spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:39.7 video 1>; Point=(0.7892, 0.6537)",
          "<TIME 00:05:40.0 video 1>; Point=(0.7479, 0.6298)",
          "<TIME 00:05:41.0 video 1>; Point=(0.6713, 0.5844)",
          "<TIME 00:05:42.0 video 1>; Point=(0.6567, 0.5628)",
        ],
        answer_metadata: {
          last_placement_time_sec: 339.7,
          last_placement_time_in_clip_sec: 339.7,
          last_placement_time_token: "<TIME 00:05:39.7 video 1>",
          projected_pixel: [1111.2137841100425, 920.3612069191182],
          normalized_projected_pixel: [0.789214335305428, 0.6536656299141465],
          camera_coordinates: [
            0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
          ],
          frame_index: 10191,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.336569646067287, 0.0914425288487582, -0.585891405266897,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 339.7,
              time_token: "<TIME 00:05:39.7 video 1>",
              projected_pixel: [1111.2137841100425, 920.3612069191182],
              normalized_projected_pixel: [
                0.789214335305428, 0.6536656299141465,
              ],
              camera_coordinates: [
                0.4403372086399667, 0.22113726397363326, 0.6206068237963063,
              ],
              frame_index: 10191,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 340.0,
              time_token: "<TIME 00:05:40.0 video 1>",
              projected_pixel: [1052.9910024539772, 886.781822455401],
              normalized_projected_pixel: [
                0.7478629278792451, 0.62981663526662,
              ],
              camera_coordinates: [
                0.3910281616389769, 0.19136271337558558, 0.6581984012469679,
              ],
              frame_index: 10200,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 341.0,
              time_token: "<TIME 00:05:41.0 video 1>",
              projected_pixel: [945.1514021549066, 822.8864733129903],
              normalized_projected_pixel: [
                0.671272302666837, 0.5844364157052488,
              ],
              camera_coordinates: [
                0.2605958899660368, 0.11535655623545304, 0.6516338126627482,
              ],
              frame_index: 10230,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 342.0,
              time_token: "<TIME 00:05:42.0 video 1>",
              projected_pixel: [924.6111229637046, 792.4578252634043],
              normalized_projected_pixel: [
                0.656684036195813, 0.5628251599882133,
              ],
              camera_coordinates: [
                0.2303485363269686, 0.0797394905737347, 0.6314284429160444,
              ],
              frame_index: 10260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.336569646067287, 0.0914425288487582, -0.585891405266897,
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
          "At the current time <TIME 00:09:04.0 video 1>, based on the last known position of the wooden spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 339.7,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the wooden spatula from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 544.0,
            camera_coordinates: [
              1.9526269211901437, 0.34503909967445084, 0.3350696803632176,
            ],
            world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.9526269211901437,
              z: 0.3350696803632176,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan2 (marked in red) in the current frame, where is the wooden spatula relative to pan2 from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 544.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.336569646067287, 0.0914425288487582, -0.585891405266897,
            ],
            object_x_camera_coordinates: [
              1.9526269211901437, 0.34503909967445084, 0.3350696803632176,
            ],
            object_y_assoc_id: "e73367f41a448874",
            object_y_name: "pan2",
            object_y_reference_time_sec: 544.0,
            object_y_world_coordinates: [
              0.4379582070632468, -0.7991463809316623, -0.6296144724276576,
            ],
            object_y_projected_pixel: [686.1217412681685, 929.391833709339],
            object_y_normalized_projected_pixel: [
              0.4873023730597788, 0.6600794273503828,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the wooden spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan2 (marked in red) in the current frame, how far is the wooden spatula from the pan2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "08e1677994e5e4df",
            object_x_name: "wooden spatula",
            object_x_reference_time_sec: 544.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e73367f41a448874",
            object_y_name: "pan2",
            object_y_pixel: [686.1217412681685, 929.391833709339],
            object_y_normalized_projected_pixel: [
              0.4873023730597788, 0.6600794273503828,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.9681532905071326, 0.1505641111950073, -0.2184318837713194,
            ],
            distance_m: 1.9859530242082473,
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
  oos_staged_h2p0_24: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "db162eded46b7ff5",
    object_a_name: "long spatula",
    query_time_sec: 544.0,
    query_time_in_clip_sec: 544.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 544.0,
    clip_duration_sec: 544.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "db162eded46b7ff5",
      object_name: "long spatula",
      query_time_sec: 544.0,
      oos_span_start_sec: 542.0,
      oos_span_end_sec: 565.0,
      oos_duration_sec: 23.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 544.0,
      clip_duration_sec: 544.0,
      anchor_assoc_id: "79e747849fbe286b",
      anchor_name: "lid of pan",
      anchor_projected_pixel: [472.5703734317092, 762.0159389641433],
      anchor_world_coordinates: [
        0.601897463431221, -1.0519896072812072, -0.6373449874092773,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_24",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:09:04.0 video 1>, is the previously moved long spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [5122.26495124855, 946.6956466680417],
          camera_coordinates: [
            1.8765312126730078, 0.3405719503027011, 0.33535945412810086,
          ],
          frame_index: 7890,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The long spatula was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:01.0 video 1>; Point=(0.7648, 0.4114)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 541.0,
          sampled_last_visible_time_in_clip_sec: 541.0,
          sampled_last_visible_time_token: "<TIME 00:09:01.0 video 1>",
          projected_pixel: [1076.769219460581, 579.2101985608932],
          normalized_projected_pixel: [0.7647508660941628, 0.4113708796597253],
          camera_coordinates: [
            1.1846382813653762, -0.43281374351803853, 1.8627516945430074,
          ],
          frame_index: 7890,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 541.0,
              time_token: "<TIME 00:09:01.0 video 1>",
              projected_pixel: [1076.769219460581, 579.2101985608932],
              normalized_projected_pixel: [
                0.7647508660941628, 0.4113708796597253,
              ],
              camera_coordinates: [
                1.1846382813653762, -0.43281374351803853, 1.8627516945430074,
              ],
              frame_index: 7890,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "The long spatula was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:23.0 video 1>; Point=(0.5456, 0.6035)",
          "<TIME 00:04:24.0 video 1>; Point=(1.0136, 0.7599)",
          "<TIME 00:04:25.0 video 1>; Point=(0.9798, 0.8025)",
          "<TIME 00:04:26.0 video 1>; Point=(0.9822, 0.7947)",
        ],
        answer_metadata: {
          last_placement_time_sec: 263.0,
          last_placement_time_in_clip_sec: 263.0,
          last_placement_time_token: "<TIME 00:04:23.0 video 1>",
          projected_pixel: [768.2699686468745, 849.6894038200255],
          normalized_projected_pixel: [0.545646284550337, 0.6034725879403591],
          camera_coordinates: [
            0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
          ],
          frame_index: 7890,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [768.2699686468745, 849.6894038200255],
              normalized_projected_pixel: [
                0.545646284550337, 0.6034725879403591,
              ],
              camera_coordinates: [
                0.07087043361723094, 0.1456368028429222, 0.6626286426526407,
              ],
              frame_index: 7890,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 264.0,
              time_token: "<TIME 00:04:24.0 video 1>",
              projected_pixel: [1427.1820970145077, 1069.9447235761877],
              normalized_projected_pixel: [
                1.0136236484478038, 0.7599039229944515,
              ],
              camera_coordinates: [
                0.7699519635797746, 0.3785529285615803, 0.3796412915532063,
              ],
              frame_index: 7920,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [1379.5321236322907, 1129.9326094645107],
              normalized_projected_pixel: [
                0.9797813378070246, 0.80250895558559,
              ],
              camera_coordinates: [
                0.7823005937687337, 0.48114388262252394, 0.4198671279037529,
              ],
              frame_index: 7950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 266.0,
              time_token: "<TIME 00:04:26.0 video 1>",
              projected_pixel: [1382.9653634615502, 1118.974342497681],
              normalized_projected_pixel: [
                0.9822197183675783, 0.7947260955239211,
              ],
              camera_coordinates: [
                0.7748697764384478, 0.46163455405297654, 0.41561168138743415,
              ],
              frame_index: 7980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
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
          "At the current time <TIME 00:09:04.0 video 1>, based on the last known position of the long spatula that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 263.0,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, in which direction is the long spatula from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 544.0,
            camera_coordinates: [
              1.8765312126730078, 0.3405719503027011, 0.33535945412810086,
            ],
            world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.8765312126730078,
              z: 0.33535945412810086,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid of pan (marked in red) in the current frame, where is the long spatula relative to lid of pan from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 544.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.26619424140513, 0.062464779100703034, -0.5816265857811513,
            ],
            object_x_camera_coordinates: [
              1.8765312126730078, 0.3405719503027011, 0.33535945412810086,
            ],
            object_y_assoc_id: "79e747849fbe286b",
            object_y_name: "lid of pan",
            object_y_reference_time_sec: 544.0,
            object_y_world_coordinates: [
              0.601897463431221, -1.0519896072812072, -0.6373449874092773,
            ],
            object_y_projected_pixel: [472.5703734317092, 762.0159389641433],
            object_y_normalized_projected_pixel: [
              0.3356323674941116, 0.5412045021052154,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the long spatula that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid of pan (marked in red) in the current frame, how far is the long spatula from the lid of pan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "db162eded46b7ff5",
            object_x_name: "long spatula",
            object_x_reference_time_sec: 544.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "79e747849fbe286b",
            object_y_name: "lid of pan",
            object_y_pixel: [472.5703734317092, 762.0159389641433],
            object_y_normalized_projected_pixel: [
              0.3356323674941116, 0.5412045021052154,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              2.1306573354076788, 0.2896514769434026, -0.33358818663467826,
            ],
            distance_m: 2.175977880697379,
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
  oos_staged_h2p0_25: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "ea7d7fc4d075b4ff",
    object_a_name: "spoon",
    query_time_sec: 544.0,
    query_time_in_clip_sec: 544.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 544.0,
    clip_duration_sec: 544.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "ea7d7fc4d075b4ff",
      object_name: "spoon",
      query_time_sec: 544.0,
      oos_span_start_sec: 542.0,
      oos_span_end_sec: 565.0,
      oos_duration_sec: 23.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.004",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 544.0,
      clip_duration_sec: 544.0,
      anchor_assoc_id: "79e747849fbe286b",
      anchor_name: "lid of pan",
      anchor_projected_pixel: [472.5703734317092, 762.0159389641433],
      anchor_world_coordinates: [
        0.601897463431221, -1.0519896072812072, -0.6373449874092773,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_25",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:09:04.0 video 1>, is the previously moved spoon visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1908.4986729505704, 1104.4894135305462],
          camera_coordinates: [
            0.8938577423882762, 0.29322737783169767, 0.2896273365317552,
          ],
          frame_index: 12585,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The spoon was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:00.0 video 1>; Point=(0.9953, 0.4773)",
          "<TIME 00:09:01.0 video 1>; Point=(0.7104, 0.4714)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 541.0,
          sampled_last_visible_time_in_clip_sec: 541.0,
          sampled_last_visible_time_token: "<TIME 00:09:01.0 video 1>",
          projected_pixel: [1000.2909507905738, 663.7954287046315],
          normalized_projected_pixel: [0.7104339139137598, 0.47144561697772125],
          camera_coordinates: [
            0.5749042142169175, -0.10055947278377783, 1.1643166214967087,
          ],
          frame_index: 12585,
          status: "in_view",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.34606355039733405, -0.27700551912966476, -0.4916292946627707,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 540.0,
              time_token: "<TIME 00:09:00.0 video 1>",
              projected_pixel: [1401.3420535233577, 672.0991460235124],
              normalized_projected_pixel: [
                0.9952713448319301, 0.47734314348260826,
              ],
              camera_coordinates: [
                1.5052164653338895, -0.09242618950122086, 1.0200356276566827,
              ],
              frame_index: 12585,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.34606355039733405, -0.27700551912966476, -0.4916292946627707,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 541.0,
              time_token: "<TIME 00:09:01.0 video 1>",
              projected_pixel: [1000.2909507905738, 663.7954287046315],
              normalized_projected_pixel: [
                0.7104339139137598, 0.47144561697772125,
              ],
              camera_coordinates: [
                0.5749042142169175, -0.10055947278377783, 1.1643166214967087,
              ],
              frame_index: 12585,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.34606355039733405, -0.27700551912966476, -0.4916292946627707,
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
          "<TIME 00:06:59.5 video 1>; Point=(0.5571, 0.8068)",
          "<TIME 00:07:00.0 video 1>; Point=(0.6675, 0.8254)",
          "<TIME 00:07:01.0 video 1>; Point=(0.4925, 0.8454)",
          "<TIME 00:07:02.0 video 1>; Point=(0.3268, 0.863)",
        ],
        answer_metadata: {
          last_placement_time_sec: 419.5,
          last_placement_time_in_clip_sec: 419.5,
          last_placement_time_token: "<TIME 00:06:59.5 video 1>",
          projected_pixel: [784.3975215071474, 1135.9227810034395],
          normalized_projected_pixel: [0.5571005124340536, 0.8067633387808519],
          camera_coordinates: [
            0.05246676308636422, 0.27215357115812155, 0.3761517001588705,
          ],
          frame_index: 12585,
          status: "last_past_track_end",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.34606355039733405, -0.27700551912966476, -0.4916292946627707,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 419.5,
              time_token: "<TIME 00:06:59.5 video 1>",
              projected_pixel: [784.3975215071474, 1135.9227810034395],
              normalized_projected_pixel: [
                0.5571005124340536, 0.8067633387808519,
              ],
              camera_coordinates: [
                0.05246676308636422, 0.27215357115812155, 0.3761517001588705,
              ],
              frame_index: 12585,
              status: "last_past_track_end",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.34606355039733405, -0.27700551912966476, -0.4916292946627707,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 420.0,
              time_token: "<TIME 00:07:00.0 video 1>",
              projected_pixel: [939.904163354383, 1162.1113054155403],
              normalized_projected_pixel: [
                0.6675455705641924, 0.8253631430508098,
              ],
              camera_coordinates: [
                0.14808414861641606, 0.2797488959574014, 0.3523756552351315,
              ],
              frame_index: 12600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.34606355039733405, -0.27700551912966476, -0.4916292946627707,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 421.0,
              time_token: "<TIME 00:07:01.0 video 1>",
              projected_pixel: [693.4445170713911, 1190.25472888126],
              normalized_projected_pixel: [
                0.49250320814729487, 0.8453513699440767,
              ],
              camera_coordinates: [
                -0.00625778867701076, 0.29750756349808727, 0.35746048865093705,
              ],
              frame_index: 12630,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.34606355039733405, -0.27700551912966476, -0.4916292946627707,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 422.0,
              time_token: "<TIME 00:07:02.0 video 1>",
              projected_pixel: [460.2006336112481, 1215.0715791287462],
              normalized_projected_pixel: [
                0.3268470409170796, 0.86297697381303,
              ],
              camera_coordinates: [
                -0.16734365907991736, 0.3436242100779402, 0.3768063905303747,
              ],
              frame_index: 12660,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.34606355039733405, -0.27700551912966476, -0.4916292946627707,
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
          "At the current time <TIME 00:09:04.0 video 1>, based on the last known position of the spoon that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 419.5,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, in which direction is the spoon from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 544.0,
            camera_coordinates: [
              0.8938577423882762, 0.29322737783169767, 0.2896273365317552,
            ],
            world_coordinates: [
              -0.34606355039733405, -0.27700551912966476, -0.4916292946627707,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.8938577423882762,
              z: 0.2896273365317552,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid of pan (marked in red) in the current frame, where is the spoon relative to lid of pan from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "ea7d7fc4d075b4ff",
            object_x_name: "spoon",
            object_x_reference_time_sec: 544.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.34606355039733405, -0.27700551912966476, -0.4916292946627707,
            ],
            object_x_camera_coordinates: [
              0.8938577423882762, 0.29322737783169767, 0.2896273365317552,
            ],
            object_y_assoc_id: "79e747849fbe286b",
            object_y_name: "lid of pan",
            object_y_reference_time_sec: 544.0,
            object_y_world_coordinates: [
              0.601897463431221, -1.0519896072812072, -0.6373449874092773,
            ],
            object_y_projected_pixel: [472.5703734317092, 762.0159389641433],
            object_y_normalized_projected_pixel: [
              0.3356323674941116, 0.5412045021052154,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the spoon that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid of pan (marked in red) in the current frame, how far is the spoon from the lid of pan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "ea7d7fc4d075b4ff",
            object_x_name: "spoon",
            object_x_reference_time_sec: 544.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "79e747849fbe286b",
            object_y_name: "lid of pan",
            object_y_pixel: [472.5703734317092, 762.0159389641433],
            object_y_normalized_projected_pixel: [
              0.3356323674941116, 0.5412045021052154,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.1479838651229473, 0.24230690447239916, -0.3793203042310239,
            ],
            distance_m: 1.233070753744299,
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
  oos_staged_h2p0_26: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "8f9ae69353ae5266",
    object_a_name: "knife",
    query_time_sec: 544.0,
    query_time_in_clip_sec: 544.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 544.0,
    clip_duration_sec: 544.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "8f9ae69353ae5266",
      object_name: "knife",
      query_time_sec: 544.0,
      oos_span_start_sec: 542.0,
      oos_span_end_sec: 565.0,
      oos_duration_sec: 23.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 544.0,
      clip_duration_sec: 544.0,
      anchor_assoc_id: "79e747849fbe286b",
      anchor_name: "lid of pan",
      anchor_projected_pixel: [472.5703734317092, 762.0159389641433],
      anchor_world_coordinates: [
        0.601897463431221, -1.0519896072812072, -0.6373449874092773,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_26",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:09:04.0 video 1>, is the previously moved knife visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [4702.429575908914, 1089.0063061188425],
          camera_coordinates: [
            1.8984510240348593, 0.36943143622704144, 0.35562350419861855,
          ],
          frame_index: 10276,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The knife was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:01.0 video 1>; Point=(0.767, 0.4177)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 541.0,
          sampled_last_visible_time_in_clip_sec: 541.0,
          sampled_last_visible_time_token: "<TIME 00:09:01.0 video 1>",
          projected_pixel: [1079.9733549703521, 588.1897044706845],
          normalized_projected_pixel: [0.767026530518716, 0.4177483696524748],
          camera_coordinates: [
            1.209782829949403, -0.4093978773163634, 1.886063251113678,
          ],
          frame_index: 10276,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 541.0,
              time_token: "<TIME 00:09:01.0 video 1>",
              projected_pixel: [1079.9733549703521, 588.1897044706845],
              normalized_projected_pixel: [
                0.767026530518716, 0.4177483696524748,
              ],
              camera_coordinates: [
                1.209782829949403, -0.4093978773163634, 1.886063251113678,
              ],
              frame_index: 10276,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
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
          "<TIME 00:05:42.5 video 1>; Point=(0.6196, 0.606)",
          "<TIME 00:05:43.0 video 1>; Point=(0.6733, 0.6274)",
          "<TIME 00:05:44.0 video 1>; Point=(1.1171, 0.8081)",
          "<TIME 00:05:45.0 video 1>; Point=(1.4465, 0.9467)",
        ],
        answer_metadata: {
          last_placement_time_sec: 342.53333333333336,
          last_placement_time_in_clip_sec: 342.53333333333336,
          last_placement_time_token: "<TIME 00:05:42.5 video 1>",
          projected_pixel: [872.327920531678, 853.2579009374319],
          normalized_projected_pixel: [0.6195510799230668, 0.6060070319157898],
          camera_coordinates: [
            0.17143524700639967, 0.13929512372426267, 0.615901956931288,
          ],
          frame_index: 10276,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 342.53333333333336,
              time_token: "<TIME 00:05:42.5 video 1>",
              projected_pixel: [872.327920531678, 853.2579009374319],
              normalized_projected_pixel: [
                0.6195510799230668, 0.6060070319157898,
              ],
              camera_coordinates: [
                0.17143524700639967, 0.13929512372426267, 0.615901956931288,
              ],
              frame_index: 10276,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 343.0,
              time_token: "<TIME 00:05:43.0 video 1>",
              projected_pixel: [948.0697726407336, 883.3738777263534],
              normalized_projected_pixel: [
                0.6733450089777938, 0.6273962199761033,
              ],
              camera_coordinates: [
                0.2509501320284536, 0.17179805719449087, 0.6170607444310399,
              ],
              frame_index: 10290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 344.0,
              time_token: "<TIME 00:05:44.0 video 1>",
              projected_pixel: [1572.8707747431909, 1137.8500584159615],
              normalized_projected_pixel: [
                1.117095720698289, 0.8081321437613362,
              ],
              camera_coordinates: [
                0.7606258155299296, 0.3718410437614711, 0.306131057394571,
              ],
              frame_index: 10320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 345.0,
              time_token: "<TIME 00:05:45.0 video 1>",
              projected_pixel: [2036.6699145359412, 1332.9919944170342],
              normalized_projected_pixel: [
                1.4464985188465491, 0.9467272687620981,
              ],
              camera_coordinates: [
                1.0111179740114327, 0.4768796377026821, 0.32030738037886436,
              ],
              frame_index: 10350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
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
          "At the current time <TIME 00:09:04.0 video 1>, based on the last known position of the knife that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 342.53333333333336,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, in which direction is the knife from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 544.0,
            camera_coordinates: [
              1.8984510240348593, 0.36943143622704144, 0.35562350419861855,
            ],
            world_coordinates: [
              -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.8984510240348593,
              z: 0.35562350419861855,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid of pan (marked in red) in the current frame, where is the knife relative to lid of pan from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "8f9ae69353ae5266",
            object_x_name: "knife",
            object_x_reference_time_sec: 544.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.2819327107299625, 0.08110534595621571, -0.6152243481148734,
            ],
            object_x_camera_coordinates: [
              1.8984510240348593, 0.36943143622704144, 0.35562350419861855,
            ],
            object_y_assoc_id: "79e747849fbe286b",
            object_y_name: "lid of pan",
            object_y_reference_time_sec: 544.0,
            object_y_world_coordinates: [
              0.601897463431221, -1.0519896072812072, -0.6373449874092773,
            ],
            object_y_projected_pixel: [472.5703734317092, 762.0159389641433],
            object_y_normalized_projected_pixel: [
              0.3356323674941116, 0.5412045021052154,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the knife that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid of pan (marked in red) in the current frame, how far is the knife from the lid of pan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "8f9ae69353ae5266",
            object_x_name: "knife",
            object_x_reference_time_sec: 544.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "79e747849fbe286b",
            object_y_name: "lid of pan",
            object_y_pixel: [472.5703734317092, 762.0159389641433],
            object_y_normalized_projected_pixel: [
              0.3356323674941116, 0.5412045021052154,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              2.1525771467695303, 0.31851096286774294, -0.3133241365641606,
            ],
            distance_m: 2.1984561903333586,
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
  oos_staged_h2p0_27: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "c7bfb36be907fcd3",
    object_a_name: "electric hob",
    query_time_sec: 544.0,
    query_time_in_clip_sec: 544.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 544.0,
    clip_duration_sec: 544.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "c7bfb36be907fcd3",
      object_name: "electric hob",
      query_time_sec: 544.0,
      oos_span_start_sec: 542.0,
      oos_span_end_sec: 565.0,
      oos_duration_sec: 23.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 544.0,
      clip_duration_sec: 544.0,
      anchor_assoc_id: "79e747849fbe286b",
      anchor_name: "lid of pan",
      anchor_projected_pixel: [472.5703734317092, 762.0159389641433],
      anchor_world_coordinates: [
        0.601897463431221, -1.0519896072812072, -0.6373449874092773,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_27",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:09:04.0 video 1>, is the previously moved electric hob visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1870.5052103238709, 861.8673936991833],
          camera_coordinates: [
            1.4217356019503473, 0.18370036437139164, 0.45888797037855045,
          ],
          frame_index: 15454,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The electric hob was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:00.0 video 1>; Point=(0.9724, 0.4452)",
          "<TIME 00:09:01.0 video 1>; Point=(0.6925, 0.4349)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 541.0,
          sampled_last_visible_time_in_clip_sec: 541.0,
          sampled_last_visible_time_token: "<TIME 00:09:01.0 video 1>",
          projected_pixel: [975.000847324071, 612.3042208849902],
          normalized_projected_pixel: [0.692472192701755, 0.43487515687854417],
          camera_coordinates: [
            0.751958536149825, -0.28625837600942794, 1.6677727247363614,
          ],
          frame_index: 15454,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -0.903715451490815, -0.27711528401223884, -0.5828691358621276,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 540.0,
              time_token: "<TIME 00:09:00.0 video 1>",
              projected_pixel: [1369.1432004418173, 626.7988331415801],
              normalized_projected_pixel: [
                0.9724028412228816, 0.4451696258107813,
              ],
              camera_coordinates: [
                1.8882703672556482, -0.25039034600435306, 1.4042457224568536,
              ],
              frame_index: 15454,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.903715451490815, -0.27711528401223884, -0.5828691358621276,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 541.0,
              time_token: "<TIME 00:09:01.0 video 1>",
              projected_pixel: [975.000847324071, 612.3042208849902],
              normalized_projected_pixel: [
                0.692472192701755, 0.43487515687854417,
              ],
              camera_coordinates: [
                0.751958536149825, -0.28625837600942794, 1.6677727247363614,
              ],
              frame_index: 15454,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.903715451490815, -0.27711528401223884, -0.5828691358621276,
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
          "The electric hob was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:35.1 video 1>; Point=(0.5234, 0.6799)",
          "<TIME 00:08:36.0 video 1>; Point=(0.3766, 0.6919)",
          "<TIME 00:08:37.0 video 1>; Point=(0.7602, 0.6284)",
          "<TIME 00:08:38.0 video 1>; Point=(0.9551, 0.674)",
        ],
        answer_metadata: {
          last_placement_time_sec: 515.1333333333333,
          last_placement_time_in_clip_sec: 515.1333333333333,
          last_placement_time_token: "<TIME 00:08:35.1 video 1>",
          projected_pixel: [736.9541580349576, 957.2945717950611],
          normalized_projected_pixel: [0.5234049417861915, 0.6798967129226287],
          camera_coordinates: [
            0.03161779029065476, 0.2261506742750911, 0.5678787531468883,
          ],
          frame_index: 15454,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -0.903715451490815, -0.27711528401223884, -0.5828691358621276,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 515.1333333333333,
              time_token: "<TIME 00:08:35.1 video 1>",
              projected_pixel: [736.9541580349576, 957.2945717950611],
              normalized_projected_pixel: [
                0.5234049417861915, 0.6798967129226287,
              ],
              camera_coordinates: [
                0.03161779029065476, 0.2261506742750911, 0.5678787531468883,
              ],
              frame_index: 15454,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.903715451490815, -0.27711528401223884, -0.5828691358621276,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 516.0,
              time_token: "<TIME 00:08:36.0 video 1>",
              projected_pixel: [530.2460910361264, 974.1669185820801],
              normalized_projected_pixel: [
                0.3765952351108852, 0.6918799137656819,
              ],
              camera_coordinates: [
                -0.16231088360406337, 0.242458264015722, 0.5634156821457106,
              ],
              frame_index: 15480,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.903715451490815, -0.27711528401223884, -0.5828691358621276,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 517.0,
              time_token: "<TIME 00:08:37.0 video 1>",
              projected_pixel: [1070.3311428504467, 884.74045139145],
              normalized_projected_pixel: [
                0.7601783685017377, 0.6283667978632458,
              ],
              camera_coordinates: [
                0.3620409664170201, 0.16681935838731513, 0.5779031837112991,
              ],
              frame_index: 15510,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.903715451490815, -0.27711528401223884, -0.5828691358621276,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 518.0,
              time_token: "<TIME 00:08:38.0 video 1>",
              projected_pixel: [1344.821579581273, 948.9856845351694],
              normalized_projected_pixel: [
                0.9551289627707905, 0.6739955145846374,
              ],
              camera_coordinates: [
                0.666620297489118, 0.24334990893892483, 0.5057995273294562,
              ],
              frame_index: 15540,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.903715451490815, -0.27711528401223884, -0.5828691358621276,
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
          "At the current time <TIME 00:09:04.0 video 1>, based on the last known position of the electric hob that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 515.1333333333333,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the electric hob that was moved earlier. Using its last known position to infer its current location, in which direction is the electric hob from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 544.0,
            camera_coordinates: [
              1.4217356019503473, 0.18370036437139164, 0.45888797037855045,
            ],
            world_coordinates: [
              -0.903715451490815, -0.27711528401223884, -0.5828691358621276,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.4217356019503473,
              z: 0.45888797037855045,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the electric hob that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid of pan (marked in red) in the current frame, where is the electric hob relative to lid of pan from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "c7bfb36be907fcd3",
            object_x_name: "electric hob",
            object_x_reference_time_sec: 544.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.903715451490815, -0.27711528401223884, -0.5828691358621276,
            ],
            object_x_camera_coordinates: [
              1.4217356019503473, 0.18370036437139164, 0.45888797037855045,
            ],
            object_y_assoc_id: "79e747849fbe286b",
            object_y_name: "lid of pan",
            object_y_reference_time_sec: 544.0,
            object_y_world_coordinates: [
              0.601897463431221, -1.0519896072812072, -0.6373449874092773,
            ],
            object_y_projected_pixel: [472.5703734317092, 762.0159389641433],
            object_y_normalized_projected_pixel: [
              0.3356323674941116, 0.5412045021052154,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the electric hob that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid of pan (marked in red) in the current frame, how far is the electric hob from the lid of pan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "c7bfb36be907fcd3",
            object_x_name: "electric hob",
            object_x_reference_time_sec: 544.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "79e747849fbe286b",
            object_y_name: "lid of pan",
            object_y_pixel: [472.5703734317092, 762.0159389641433],
            object_y_normalized_projected_pixel: [
              0.3356323674941116, 0.5412045021052154,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.6758617246850185, 0.13277989101209314, -0.21005967038422868,
            ],
            distance_m: 1.69418655550189,
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
  oos_staged_h2p0_28: {
    inputs: {
      "video 1": {
        id: "P04-20240414-175337",
      },
    },
    video_id: "P04-20240414-175337",
    object_a_assoc_id: "c89fd59c44994570",
    object_a_name: "frying pan",
    query_time_sec: 544.0,
    query_time_in_clip_sec: 544.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 544.0,
    clip_duration_sec: 544.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-175337",
      assoc_id: "c89fd59c44994570",
      object_name: "frying pan",
      query_time_sec: 544.0,
      oos_span_start_sec: 542.0,
      oos_span_end_sec: 565.0,
      oos_duration_sec: 23.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 544.0,
      clip_duration_sec: 544.0,
      anchor_assoc_id: "79e747849fbe286b",
      anchor_name: "lid of pan",
      anchor_projected_pixel: [472.5703734317092, 762.0159389641433],
      anchor_world_coordinates: [
        0.601897463431221, -1.0519896072812072, -0.6373449874092773,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h2p0_28",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:09:04.0 video 1>, is the previously moved frying pan visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1548.8713333819187, 794.7634954203563],
          camera_coordinates: [
            1.233857452766379, 0.11765163552622643, 0.5070289407528126,
          ],
          frame_index: 15546,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The frying pan was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:09:00.0 video 1>; Point=(0.9465, 0.4368)",
          "<TIME 00:09:01.0 video 1>; Point=(0.6554, 0.4463)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 541.0,
          sampled_last_visible_time_in_clip_sec: 541.0,
          sampled_last_visible_time_token: "<TIME 00:09:01.0 video 1>",
          projected_pixel: [922.73438803128, 628.4050464009167],
          normalized_projected_pixel: [0.655351127863125, 0.44631040227337837],
          camera_coordinates: [
            0.5735043620026529, -0.2283083773889924, 1.5854678528224002,
          ],
          frame_index: 15546,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -0.7538461558265961, -0.41679622820096907, -0.5802972495724507,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 540.0,
              time_token: "<TIME 00:09:00.0 video 1>",
              projected_pixel: [1332.6539486684787, 615.0331281300734],
              normalized_projected_pixel: [
                0.9464871794520445, 0.4368133012287453,
              ],
              camera_coordinates: [
                1.6854992232804913, -0.268273305240878, 1.380959471333449,
              ],
              frame_index: 15546,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.7538461558265961, -0.41679622820096907, -0.5802972495724507,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 541.0,
              time_token: "<TIME 00:09:01.0 video 1>",
              projected_pixel: [922.73438803128, 628.4050464009167],
              normalized_projected_pixel: [
                0.655351127863125, 0.44631040227337837,
              ],
              camera_coordinates: [
                0.5735043620026529, -0.2283083773889924, 1.5854678528224002,
              ],
              frame_index: 15546,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.7538461558265961, -0.41679622820096907, -0.5802972495724507,
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
          "The frying pan was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:08:38.2 video 1>; Point=(0.9015, 0.6485)",
          "<TIME 00:08:39.0 video 1>; Point=(0.6295, 0.6181)",
          "<TIME 00:08:40.0 video 1>; Point=(0.3253, 0.8117)",
          "<TIME 00:08:41.0 video 1>; Point=(0.5576, 0.601)",
        ],
        answer_metadata: {
          last_placement_time_sec: 518.2,
          last_placement_time_in_clip_sec: 518.2,
          last_placement_time_token: "<TIME 00:08:38.2 video 1>",
          projected_pixel: [1269.3266941302215, 913.0364162464535],
          normalized_projected_pixel: [0.9015104361720323, 0.6484633638114017],
          camera_coordinates: [
            0.599013996855365, 0.2094412647197179, 0.5636157800822533,
          ],
          frame_index: 15546,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -0.7538461558265961, -0.41679622820096907, -0.5802972495724507,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 518.2,
              time_token: "<TIME 00:08:38.2 video 1>",
              projected_pixel: [1269.3266941302215, 913.0364162464535],
              normalized_projected_pixel: [
                0.9015104361720323, 0.6484633638114017,
              ],
              camera_coordinates: [
                0.599013996855365, 0.2094412647197179, 0.5636157800822533,
              ],
              frame_index: 15546,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.7538461558265961, -0.41679622820096907, -0.5802972495724507,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 519.0,
              time_token: "<TIME 00:08:39.0 video 1>",
              projected_pixel: [886.3021289038462, 870.2277520761777],
              normalized_projected_pixel: [
                0.6294759438237544, 0.6180594830086489,
              ],
              camera_coordinates: [
                0.22217694054697174, 0.18736714360768425, 0.7360769888644693,
              ],
              frame_index: 15570,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.7538461558265961, -0.41679622820096907, -0.5802972495724507,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 520.0,
              time_token: "<TIME 00:08:40.0 video 1>",
              projected_pixel: [457.99135863940364, 1142.9424982637472],
              normalized_projected_pixel: [
                0.3252779535791219, 0.8117489334259568,
              ],
              camera_coordinates: [
                -0.2290979213198735, 0.39894744553813477, 0.5282559821122742,
              ],
              frame_index: 15600,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.7538461558265961, -0.41679622820096907, -0.5802972495724507,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 521.0,
              time_token: "<TIME 00:08:41.0 video 1>",
              projected_pixel: [785.1642780714488, 846.1881351081831],
              normalized_projected_pixel: [
                0.5576450838575631, 0.6009858914120619,
              ],
              camera_coordinates: [
                0.08255695131721796, 0.13119042929968133, 0.6129179433392309,
              ],
              frame_index: 15630,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.7538461558265961, -0.41679622820096907, -0.5802972495724507,
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
          "At the current time <TIME 00:09:04.0 video 1>, based on the last known position of the frying pan that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area next to the window",
          "counter area between the hob and the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 518.2,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the frying pan that was moved earlier. Using its last known position to infer its current location, in which direction is the frying pan from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 544.0,
            camera_coordinates: [
              1.233857452766379, 0.11765163552622643, 0.5070289407528126,
            ],
            world_coordinates: [
              -0.7538461558265961, -0.41679622820096907, -0.5802972495724507,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.233857452766379,
              z: 0.5070289407528126,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the frying pan that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid of pan (marked in red) in the current frame, where is the frying pan relative to lid of pan from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "c89fd59c44994570",
            object_x_name: "frying pan",
            object_x_reference_time_sec: 544.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.7538461558265961, -0.41679622820096907, -0.5802972495724507,
            ],
            object_x_camera_coordinates: [
              1.233857452766379, 0.11765163552622643, 0.5070289407528126,
            ],
            object_y_assoc_id: "79e747849fbe286b",
            object_y_name: "lid of pan",
            object_y_reference_time_sec: 544.0,
            object_y_world_coordinates: [
              0.601897463431221, -1.0519896072812072, -0.6373449874092773,
            ],
            object_y_projected_pixel: [472.5703734317092, 762.0159389641433],
            object_y_normalized_projected_pixel: [
              0.3356323674941116, 0.5412045021052154,
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
            "At the current time <TIME 00:09:04.0 video 1>, consider the frying pan that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid of pan (marked in red) in the current frame, how far is the frying pan from the lid of pan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "c89fd59c44994570",
            object_x_name: "frying pan",
            object_x_reference_time_sec: 544.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "79e747849fbe286b",
            object_y_name: "lid of pan",
            object_y_pixel: [472.5703734317092, 762.0159389641433],
            object_y_normalized_projected_pixel: [
              0.3356323674941116, 0.5412045021052154,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.48798357550105, 0.06673116216692793, -0.16191870000996655,
            ],
            distance_m: 1.4982542622592319,
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
  id: "P04-20240414-175337",
  label: "P04-20240414-175337",
  sampledUrl: "https://youtu.be/JMnuKHXt5gY",
  fullUrl: "https://youtu.be/tQ9mT9ro2NQ",
  duration: 220,
  trajectory: TRAJECTORY,
  rawJson: { TRAJECTORY },
};

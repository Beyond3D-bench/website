import type { TrajectoryData, VideoEntry } from "../Types";

const TRAJECTORY: Record<string, TrajectoryData> = {
  oos_staged_h2p0_0: {
    inputs: {
      "video 1": {
        id: "P04-20240414-162242",
      },
    },
    video_id: "P04-20240414-162242",
    object_a_assoc_id: "0b4c111b5f8311c5",
    object_a_name: "wooden chopping board",
    query_time_sec: 23.0,
    query_time_in_clip_sec: 23.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 23.0,
    clip_duration_sec: 23.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-162242",
      assoc_id: "0b4c111b5f8311c5",
      object_name: "wooden chopping board",
      query_time_sec: 23.0,
      oos_span_start_sec: 21.0,
      oos_span_end_sec: 32.0,
      oos_duration_sec: 11.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 23.0,
      clip_duration_sec: 23.0,
      anchor_assoc_id: "9ad03203a3ae4da1",
      anchor_name: "bottle of cleaning solution",
      anchor_projected_pixel: [1004.9447962951936, 379.10747750445836],
      anchor_world_coordinates: [
        -1.4075058474723505, 0.49630069701295787, -0.1300323220771056,
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
          "At the current time <TIME 00:00:23.0 video 1>, is the previously moved wooden chopping board visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.48092265073019874, 1.090233442304343, -0.19430747157056583,
          ],
          frame_index: 319,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The wooden chopping board was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:20.0 video 1>; Point=(0.3174, 0.7909)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 20.0,
          sampled_last_visible_time_in_clip_sec: 20.0,
          sampled_last_visible_time_token: "<TIME 00:00:20.0 video 1>",
          projected_pixel: [446.85454893435, 1113.5913994291197],
          normalized_projected_pixel: [0.3173682875954191, 0.7909029825490907],
          camera_coordinates: [
            -0.39196726088918915, 0.6081190744760027, 0.8720234481312815,
          ],
          frame_index: 319,
          status: "in_view",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 20.0,
              time_token: "<TIME 00:00:20.0 video 1>",
              projected_pixel: [446.85454893435, 1113.5913994291197],
              normalized_projected_pixel: [
                0.3173682875954191, 0.7909029825490907,
              ],
              camera_coordinates: [
                -0.39196726088918915, 0.6081190744760027, 0.8720234481312815,
              ],
              frame_index: 319,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
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
          "The wooden chopping board was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:10.6 video 1>; Point=(0.3103, 0.881)",
          "<TIME 00:00:11.0 video 1>; Point=(0.1593, 1.0301)",
          "<TIME 00:00:12.0 video 1>; Point=(0.282, 0.9086)",
          "<TIME 00:00:13.0 video 1>; Point=(0.4347, 0.8171)",
        ],
        answer_metadata: {
          last_placement_time_sec: 10.633333333333333,
          last_placement_time_in_clip_sec: 10.633333333333333,
          last_placement_time_token: "<TIME 00:00:10.6 video 1>",
          projected_pixel: [436.8953493813797, 1240.4244321476515],
          normalized_projected_pixel: [0.3102949924583662, 0.8809832614685025],
          camera_coordinates: [
            -0.2282842826910108, 0.4494654619353632, 0.4590547890411526,
          ],
          frame_index: 319,
          status: "last_past_track_end",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 10.633333333333333,
              time_token: "<TIME 00:00:10.6 video 1>",
              projected_pixel: [436.8953493813797, 1240.4244321476515],
              normalized_projected_pixel: [
                0.3102949924583662, 0.8809832614685025,
              ],
              camera_coordinates: [
                -0.2282842826910108, 0.4494654619353632, 0.4590547890411526,
              ],
              frame_index: 319,
              status: "last_past_track_end",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 11.0,
              time_token: "<TIME 00:00:11.0 video 1>",
              projected_pixel: [224.2433684911025, 1450.335796959991],
              normalized_projected_pixel: [
                0.15926375603061257, 1.03006803761363,
              ],
              camera_coordinates: [
                -0.35327431253700986, 0.5417407118017855, 0.25410339121837394,
              ],
              frame_index: 330,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 12.0,
              time_token: "<TIME 00:00:12.0 video 1>",
              projected_pixel: [397.00789740239327, 1279.3494450920298],
              normalized_projected_pixel: [
                0.2819658362232907, 0.9086288672528621,
              ],
              camera_coordinates: [
                -0.2705857428495336, 0.497758620997882, 0.45200639039665974,
              ],
              frame_index: 360,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 13.0,
              time_token: "<TIME 00:00:13.0 video 1>",
              projected_pixel: [612.0396390983444, 1150.5439835714692],
              normalized_projected_pixel: [
                0.4346872436778014, 0.8171477156047366,
              ],
              camera_coordinates: [
                -0.08845027864589075, 0.42116504437904273, 0.5591325237637721,
              ],
              frame_index: 390,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
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
          "At the current time <TIME 00:00:23.0 video 1>, based on the last known position of the wooden chopping board that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 10.633333333333333,
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
            "At the current time <TIME 00:00:23.0 video 1>, consider the wooden chopping board that was moved earlier. Using its last known position to infer its current location, in which direction is the wooden chopping board from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 23.0,
            camera_coordinates: [
              -0.48092265073019874, 1.090233442304343, -0.19430747157056583,
            ],
            world_coordinates: [
              -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.48092265073019874,
              z: -0.19430747157056583,
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
            "At the current time <TIME 00:00:23.0 video 1>, consider the wooden chopping board that was moved earlier. Using its last known position to infer its current location, and using the current position of the bottle of cleaning solution (marked in red) in the current frame, where is the wooden chopping board relative to bottle of cleaning solution from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "0b4c111b5f8311c5",
            object_x_name: "wooden chopping board",
            object_x_reference_time_sec: 23.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
            ],
            object_x_camera_coordinates: [
              -0.48092265073019874, 1.090233442304343, -0.19430747157056583,
            ],
            object_y_assoc_id: "9ad03203a3ae4da1",
            object_y_name: "bottle of cleaning solution",
            object_y_reference_time_sec: 23.0,
            object_y_world_coordinates: [
              -1.4075058474723505, 0.49630069701295787, -0.1300323220771056,
            ],
            object_y_projected_pixel: [1004.9447962951936, 379.10747750445836],
            object_y_normalized_projected_pixel: [
              0.7137392019141999, 0.26925246981850737,
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
            "At the current time <TIME 00:00:23.0 video 1>, consider the wooden chopping board that was moved earlier. Using its last known position to infer its current location, and using the current position of the bottle of cleaning solution (marked in red) in the current frame, how far is the wooden chopping board from the bottle of cleaning solution: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "0b4c111b5f8311c5",
            object_x_name: "wooden chopping board",
            object_x_reference_time_sec: 23.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "9ad03203a3ae4da1",
            object_y_name: "bottle of cleaning solution",
            object_y_pixel: [1004.9447962951936, 379.10747750445836],
            object_y_normalized_projected_pixel: [
              0.7137392019141999, 0.26925246981850737,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.7021461937400169, 1.337069831532183, -0.6169609408735555,
            ],
            distance_m: 1.6313815661397784,
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
        id: "P04-20240414-162242",
      },
    },
    video_id: "P04-20240414-162242",
    object_a_assoc_id: "0b4c111b5f8311c5",
    object_a_name: "wooden chopping board",
    query_time_sec: 37.0,
    query_time_in_clip_sec: 37.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 37.0,
    clip_duration_sec: 37.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-162242",
      assoc_id: "0b4c111b5f8311c5",
      object_name: "wooden chopping board",
      query_time_sec: 37.0,
      oos_span_start_sec: 35.0,
      oos_span_end_sec: 47.0,
      oos_duration_sec: 12.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 37.0,
      clip_duration_sec: 37.0,
      anchor_assoc_id: "acd29b44bb88be3c",
      anchor_name: "cooling rack2",
      anchor_projected_pixel: [948.641496257352, 72.73311031659614],
      anchor_world_coordinates: [
        1.1609103406000716, -1.4960663163303418, -0.3284902809471013,
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
          "At the current time <TIME 00:00:37.0 video 1>, is the previously moved wooden chopping board visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.6134367366833975, -0.04317139762276517, -0.5129626165098335,
          ],
          frame_index: 319,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The wooden chopping board was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:33.0 video 1>; Point=(0.9473, 0.5177)",
          "<TIME 00:00:34.0 video 1>; Point=(0.7946, 0.3427)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 34.0,
          sampled_last_visible_time_in_clip_sec: 34.0,
          sampled_last_visible_time_token: "<TIME 00:00:34.0 video 1>",
          projected_pixel: [1118.7997992741014, 482.573030980418],
          normalized_projected_pixel: [0.7946021301662651, 0.342736527684956],
          camera_coordinates: [
            0.8910282937863556, -0.4997174712685139, 1.2234135246718427,
          ],
          frame_index: 319,
          status: "in_view",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 33.0,
              time_token: "<TIME 00:00:33.0 video 1>",
              projected_pixel: [1333.8464572313164, 728.8861853553987],
              normalized_projected_pixel: [
                0.9473341315563327, 0.5176748475535502,
              ],
              camera_coordinates: [
                1.201556506516253, 0.026176192241347096, 0.9887455968064653,
              ],
              frame_index: 319,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 34.0,
              time_token: "<TIME 00:00:34.0 video 1>",
              projected_pixel: [1118.7997992741014, 482.573030980418],
              normalized_projected_pixel: [
                0.7946021301662651, 0.342736527684956,
              ],
              camera_coordinates: [
                0.8910282937863556, -0.4997174712685139, 1.2234135246718427,
              ],
              frame_index: 319,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
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
          "The wooden chopping board was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:10.6 video 1>; Point=(0.3103, 0.881)",
          "<TIME 00:00:11.0 video 1>; Point=(0.1593, 1.0301)",
          "<TIME 00:00:12.0 video 1>; Point=(0.282, 0.9086)",
          "<TIME 00:00:13.0 video 1>; Point=(0.4347, 0.8171)",
        ],
        answer_metadata: {
          last_placement_time_sec: 10.633333333333333,
          last_placement_time_in_clip_sec: 10.633333333333333,
          last_placement_time_token: "<TIME 00:00:10.6 video 1>",
          projected_pixel: [436.8953493813797, 1240.4244321476515],
          normalized_projected_pixel: [0.3102949924583662, 0.8809832614685025],
          camera_coordinates: [
            -0.2282842826910108, 0.4494654619353632, 0.4590547890411526,
          ],
          frame_index: 319,
          status: "last_past_track_end",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 10.633333333333333,
              time_token: "<TIME 00:00:10.6 video 1>",
              projected_pixel: [436.8953493813797, 1240.4244321476515],
              normalized_projected_pixel: [
                0.3102949924583662, 0.8809832614685025,
              ],
              camera_coordinates: [
                -0.2282842826910108, 0.4494654619353632, 0.4590547890411526,
              ],
              frame_index: 319,
              status: "last_past_track_end",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 11.0,
              time_token: "<TIME 00:00:11.0 video 1>",
              projected_pixel: [224.2433684911025, 1450.335796959991],
              normalized_projected_pixel: [
                0.15926375603061257, 1.03006803761363,
              ],
              camera_coordinates: [
                -0.35327431253700986, 0.5417407118017855, 0.25410339121837394,
              ],
              frame_index: 330,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 12.0,
              time_token: "<TIME 00:00:12.0 video 1>",
              projected_pixel: [397.00789740239327, 1279.3494450920298],
              normalized_projected_pixel: [
                0.2819658362232907, 0.9086288672528621,
              ],
              camera_coordinates: [
                -0.2705857428495336, 0.497758620997882, 0.45200639039665974,
              ],
              frame_index: 360,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 13.0,
              time_token: "<TIME 00:00:13.0 video 1>",
              projected_pixel: [612.0396390983444, 1150.5439835714692],
              normalized_projected_pixel: [
                0.4346872436778014, 0.8171477156047366,
              ],
              camera_coordinates: [
                -0.08845027864589075, 0.42116504437904273, 0.5591325237637721,
              ],
              frame_index: 390,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
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
          "At the current time <TIME 00:00:37.0 video 1>, based on the last known position of the wooden chopping board that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 10.633333333333333,
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
            "At the current time <TIME 00:00:37.0 video 1>, consider the wooden chopping board that was moved earlier. Using its last known position to infer its current location, in which direction is the wooden chopping board from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 37.0,
            camera_coordinates: [
              1.6134367366833975, -0.04317139762276517, -0.5129626165098335,
            ],
            world_coordinates: [
              -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.6134367366833975,
              z: -0.5129626165098335,
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
            "At the current time <TIME 00:00:37.0 video 1>, consider the wooden chopping board that was moved earlier. Using its last known position to infer its current location, and using the current position of the cooling rack2 (marked in red) in the current frame, where is the wooden chopping board relative to cooling rack2 from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "0b4c111b5f8311c5",
            object_x_name: "wooden chopping board",
            object_x_reference_time_sec: 37.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.195539391366162, -0.4758901640178693, -0.6274135172807667,
            ],
            object_x_camera_coordinates: [
              1.6134367366833975, -0.04317139762276517, -0.5129626165098335,
            ],
            object_y_assoc_id: "acd29b44bb88be3c",
            object_y_name: "cooling rack2",
            object_y_reference_time_sec: 37.0,
            object_y_world_coordinates: [
              1.1609103406000716, -1.4960663163303418, -0.3284902809471013,
            ],
            object_y_projected_pixel: [948.641496257352, 72.73311031659614],
            object_y_normalized_projected_pixel: [
              0.6737510626827784, 0.05165703857712794,
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
            "At the current time <TIME 00:00:37.0 video 1>, consider the wooden chopping board that was moved earlier. Using its last known position to infer its current location, and using the current position of the cooling rack2 (marked in red) in the current frame, how far is the wooden chopping board from the cooling rack2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "0b4c111b5f8311c5",
            object_x_name: "wooden chopping board",
            object_x_reference_time_sec: 37.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "acd29b44bb88be3c",
            object_y_name: "cooling rack2",
            object_y_pixel: [948.641496257352, 72.73311031659614],
            object_y_normalized_projected_pixel: [
              0.6737510626827784, 0.05165703857712794,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.441820541881175, 0.4070414166711035, -0.8517870440681736,
            ],
            distance_m: 1.7233892068591299,
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
        id: "P04-20240414-162242",
      },
    },
    video_id: "P04-20240414-162242",
    object_a_assoc_id: "40c466381e64904e",
    object_a_name: "lid",
    query_time_sec: 53.0,
    query_time_in_clip_sec: 53.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 53.0,
    clip_duration_sec: 53.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-162242",
      assoc_id: "40c466381e64904e",
      object_name: "lid",
      query_time_sec: 53.0,
      oos_span_start_sec: 51.0,
      oos_span_end_sec: 61.0,
      oos_duration_sec: 10.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.002",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 53.0,
      clip_duration_sec: 53.0,
      anchor_assoc_id: "98cc607fb79bd70f",
      anchor_name: "soap dispenser",
      anchor_projected_pixel: [1291.1145229972446, 678.6731014670065],
      anchor_world_coordinates: [
        -1.4073313245189651, 0.24252494166301464, -0.4933718423920419,
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
          "At the current time <TIME 00:00:53.0 video 1>, is the previously moved lid visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.035163897509991, 0.9165033613905165, -0.2569008836446374,
          ],
          frame_index: 1496,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:47.0 video 1>; Point=(0.4786, 0.6624)",
          "<TIME 00:00:48.0 video 1>; Point=(0.4466, 0.7641)",
          "<TIME 00:00:50.0 video 1>; Point=(0.4996, 0.7719)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 50.0,
          sampled_last_visible_time_in_clip_sec: 50.0,
          sampled_last_visible_time_token: "<TIME 00:00:50.0 video 1>",
          projected_pixel: [703.5006682680021, 1086.8685164816036],
          normalized_projected_pixel: [0.4996453609857969, 0.7719236622738662],
          camera_coordinates: [
            0.00016003987989832158, 0.2973984169160404, 0.4741162686154826,
          ],
          frame_index: 1496,
          status: "in_view",
          fixture: "P04_counter.002",
          world_coordinates: [
            0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 47.0,
              time_token: "<TIME 00:00:47.0 video 1>",
              projected_pixel: [673.9072696631457, 932.7260958199283],
              normalized_projected_pixel: [
                0.4786273222039387, 0.6624475112357445,
              ],
              camera_coordinates: [
                -0.03330336046271842, 0.24681402177214842, 0.6914577334347903,
              ],
              frame_index: 1272,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                1.0503338161654807, -1.0252912892661743, -0.6420749166201372,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 48.0,
              time_token: "<TIME 00:00:48.0 video 1>",
              projected_pixel: [628.8520622248542, 1075.7898479212429],
              normalized_projected_pixel: [
                0.4466278851028794, 0.7640552897167918,
              ],
              camera_coordinates: [
                -0.0681312389137192, 0.329562336925453, 0.5421167460388914,
              ],
              frame_index: 1272,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                1.0503338161654807, -1.0252912892661743, -0.6420749166201372,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 50.0,
              time_token: "<TIME 00:00:50.0 video 1>",
              projected_pixel: [703.5006682680021, 1086.8685164816036],
              normalized_projected_pixel: [
                0.4996453609857969, 0.7719236622738662,
              ],
              camera_coordinates: [
                0.00016003987989832158, 0.2973984169160404, 0.4741162686154826,
              ],
              frame_index: 1496,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
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
          "<TIME 00:00:49.9 video 1>; Point=(0.5131, 0.7301)",
          "<TIME 00:00:50.0 video 1>; Point=(0.4996, 0.7719)",
          "<TIME 00:00:51.0 video 1>; Point=(-0.8201, 3.0614)",
        ],
        answer_metadata: {
          last_placement_time_sec: 49.86666666666667,
          last_placement_time_in_clip_sec: 49.86666666666667,
          last_placement_time_token: "<TIME 00:00:49.9 video 1>",
          projected_pixel: [722.428105088197, 1028.0511148121946],
          normalized_projected_pixel: [0.5130881428183217, 0.7301499394972972],
          camera_coordinates: [
            0.01569795777541305, 0.25555967346022646, 0.4911429616503249,
          ],
          frame_index: 1496,
          status: "last_past_track_end",
          fixture: "P04_counter.002",
          world_coordinates: [
            0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 49.86666666666667,
              time_token: "<TIME 00:00:49.9 video 1>",
              projected_pixel: [722.428105088197, 1028.0511148121946],
              normalized_projected_pixel: [
                0.5130881428183217, 0.7301499394972972,
              ],
              camera_coordinates: [
                0.01569795777541305, 0.25555967346022646, 0.4911429616503249,
              ],
              frame_index: 1496,
              status: "last_past_track_end",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 50.0,
              time_token: "<TIME 00:00:50.0 video 1>",
              projected_pixel: [703.5006682680021, 1086.8685164816036],
              normalized_projected_pixel: [
                0.4996453609857969, 0.7719236622738662,
              ],
              camera_coordinates: [
                0.00016003987989832158, 0.2973984169160404, 0.4741162686154826,
              ],
              frame_index: 1500,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 51.0,
              time_token: "<TIME 00:00:51.0 video 1>",
              projected_pixel: [-1154.6753801427285, 4310.521089103676],
              normalized_projected_pixel: [
                -0.8200819461240969, 3.061449637147497,
              ],
              camera_coordinates: [
                -0.28162176885237455, 0.6137605499944068, 0.10422518769103417,
              ],
              frame_index: 1530,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
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
          "At the current time <TIME 00:00:53.0 video 1>, based on the last known position of the lid that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area next to the window",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 49.86666666666667,
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
            "At the current time <TIME 00:00:53.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, in which direction is the lid from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 53.0,
            camera_coordinates: [
              -1.035163897509991, 0.9165033613905165, -0.2569008836446374,
            ],
            world_coordinates: [
              0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.035163897509991,
              z: -0.2569008836446374,
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
            "At the current time <TIME 00:00:53.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the soap dispenser (marked in red) in the current frame, where is the lid relative to soap dispenser from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "40c466381e64904e",
            object_x_name: "lid",
            object_x_reference_time_sec: 53.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
            ],
            object_x_camera_coordinates: [
              -1.035163897509991, 0.9165033613905165, -0.2569008836446374,
            ],
            object_y_assoc_id: "98cc607fb79bd70f",
            object_y_name: "soap dispenser",
            object_y_reference_time_sec: 53.0,
            object_y_world_coordinates: [
              -1.4073313245189651, 0.24252494166301464, -0.4933718423920419,
            ],
            object_y_projected_pixel: [1291.1145229972446, 678.6731014670065],
            object_y_normalized_projected_pixel: [
              0.9169847464469068, 0.4820121459282717,
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
            "At the current time <TIME 00:00:53.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the soap dispenser (marked in red) in the current frame, how far is the lid from the soap dispenser: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "40c466381e64904e",
            object_x_name: "lid",
            object_x_reference_time_sec: 53.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "98cc607fb79bd70f",
            object_y_name: "soap dispenser",
            object_y_pixel: [1291.1145229972446, 678.6731014670065],
            object_y_normalized_projected_pixel: [
              0.9169847464469068, 0.4820121459282717,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -2.001895231755002, 0.9767347157050792, -1.1398067355362058,
            ],
            distance_m: 2.502149999132865,
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
        id: "P04-20240414-162242",
      },
    },
    video_id: "P04-20240414-162242",
    object_a_assoc_id: "40c466381e64904e",
    object_a_name: "lid",
    query_time_sec: 68.0,
    query_time_in_clip_sec: 68.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 68.0,
    clip_duration_sec: 68.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-162242",
      assoc_id: "40c466381e64904e",
      object_name: "lid",
      query_time_sec: 68.0,
      oos_span_start_sec: 66.0,
      oos_span_end_sec: 70.0,
      oos_duration_sec: 4.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.002",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 68.0,
      clip_duration_sec: 68.0,
      anchor_assoc_id: "7146f5bb248dd7f3",
      anchor_name: "wooden spatula",
      anchor_projected_pixel: [882.7866790786168, 570.7211851472557],
      anchor_world_coordinates: [
        -0.44143278048769174, -0.3475057199999497, -0.596875227432919,
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
          "At the current time <TIME 00:01:08.0 video 1>, is the previously moved lid visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-411.17209900239163, 715.9529903468814],
          camera_coordinates: [
            -1.1869718780999143, 0.0041370524344206405, 0.391044924484757,
          ],
          frame_index: 1496,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:02.0 video 1>; Point=(0.1443, 0.4602)",
          "<TIME 00:01:04.0 video 1>; Point=(0.0302, 0.5675)",
          "<TIME 00:01:05.0 video 1>; Point=(0.0237, 0.445)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 65.0,
          sampled_last_visible_time_in_clip_sec: 65.0,
          sampled_last_visible_time_token: "<TIME 00:01:05.0 video 1>",
          projected_pixel: [33.33973026332092, 626.5655708531342],
          normalized_projected_pixel: [
            0.023678785698381333, 0.4450039565718283,
          ],
          camera_coordinates: [
            -0.7773670021538877, -0.10254721241319444, 0.5701607544526178,
          ],
          frame_index: 1496,
          status: "in_view",
          fixture: "P04_counter.002",
          world_coordinates: [
            0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 62.0,
              time_token: "<TIME 00:01:02.0 video 1>",
              projected_pixel: [203.14641032574536, 647.9234392897739],
              normalized_projected_pixel: [
                0.1442801209699896, 0.46017289722285076,
              ],
              camera_coordinates: [
                -1.021233095283579, -0.1378726746577491, 1.149628047120342,
              ],
              frame_index: 1496,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 64.0,
              time_token: "<TIME 00:01:04.0 video 1>",
              projected_pixel: [42.48843209539689, 798.9763024192766],
              normalized_projected_pixel: [
                0.030176443249571652, 0.5674547602409635,
              ],
              camera_coordinates: [
                -0.9079983832653005, 0.11524597808524872, 0.6842058062881085,
              ],
              frame_index: 1496,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 65.0,
              time_token: "<TIME 00:01:05.0 video 1>",
              projected_pixel: [33.33973026332092, 626.5655708531342],
              normalized_projected_pixel: [
                0.023678785698381333, 0.4450039565718283,
              ],
              camera_coordinates: [
                -0.7773670021538877, -0.10254721241319444, 0.5701607544526178,
              ],
              frame_index: 1496,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
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
          "<TIME 00:00:49.9 video 1>; Point=(0.5131, 0.7301)",
          "<TIME 00:00:50.0 video 1>; Point=(0.4996, 0.7719)",
          "<TIME 00:00:51.0 video 1>; Point=(-0.8201, 3.0614)",
        ],
        answer_metadata: {
          last_placement_time_sec: 49.86666666666667,
          last_placement_time_in_clip_sec: 49.86666666666667,
          last_placement_time_token: "<TIME 00:00:49.9 video 1>",
          projected_pixel: [722.428105088197, 1028.0511148121946],
          normalized_projected_pixel: [0.5130881428183217, 0.7301499394972972],
          camera_coordinates: [
            0.01569795777541305, 0.25555967346022646, 0.4911429616503249,
          ],
          frame_index: 1496,
          status: "last_past_track_end",
          fixture: "P04_counter.002",
          world_coordinates: [
            0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 49.86666666666667,
              time_token: "<TIME 00:00:49.9 video 1>",
              projected_pixel: [722.428105088197, 1028.0511148121946],
              normalized_projected_pixel: [
                0.5130881428183217, 0.7301499394972972,
              ],
              camera_coordinates: [
                0.01569795777541305, 0.25555967346022646, 0.4911429616503249,
              ],
              frame_index: 1496,
              status: "last_past_track_end",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 50.0,
              time_token: "<TIME 00:00:50.0 video 1>",
              projected_pixel: [703.5006682680021, 1086.8685164816036],
              normalized_projected_pixel: [
                0.4996453609857969, 0.7719236622738662,
              ],
              camera_coordinates: [
                0.00016003987989832158, 0.2973984169160404, 0.4741162686154826,
              ],
              frame_index: 1500,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 51.0,
              time_token: "<TIME 00:00:51.0 video 1>",
              projected_pixel: [-1154.6753801427285, 4310.521089103676],
              normalized_projected_pixel: [
                -0.8200819461240969, 3.061449637147497,
              ],
              camera_coordinates: [
                -0.28162176885237455, 0.6137605499944068, 0.10422518769103417,
              ],
              frame_index: 1530,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
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
          "At the current time <TIME 00:01:08.0 video 1>, based on the last known position of the lid that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 49.86666666666667,
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
            "At the current time <TIME 00:01:08.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, in which direction is the lid from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 68.0,
            camera_coordinates: [
              -1.1869718780999143, 0.0041370524344206405, 0.391044924484757,
            ],
            world_coordinates: [
              0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.1869718780999143,
              z: 0.391044924484757,
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
            "At the current time <TIME 00:01:08.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the wooden spatula (marked in red) in the current frame, where is the lid relative to wooden spatula from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "40c466381e64904e",
            object_x_name: "lid",
            object_x_reference_time_sec: 68.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
            ],
            object_x_camera_coordinates: [
              -1.1869718780999143, 0.0041370524344206405, 0.391044924484757,
            ],
            object_y_assoc_id: "7146f5bb248dd7f3",
            object_y_name: "wooden spatula",
            object_y_reference_time_sec: 68.0,
            object_y_world_coordinates: [
              -0.44143278048769174, -0.3475057199999497, -0.596875227432919,
            ],
            object_y_projected_pixel: [882.7866790786168, 570.7211851472557],
            object_y_normalized_projected_pixel: [
              0.6269791754819721, 0.4053417508148123,
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
            "At the current time <TIME 00:01:08.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the wooden spatula (marked in red) in the current frame, how far is the lid from the wooden spatula: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "40c466381e64904e",
            object_x_name: "lid",
            object_x_reference_time_sec: 68.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "7146f5bb248dd7f3",
            object_y_name: "wooden spatula",
            object_y_pixel: [882.7866790786168, 570.7211851472557],
            object_y_normalized_projected_pixel: [
              0.6269791754819721, 0.4053417508148123,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.359596713036731, 0.14358730610989426, -0.19262240705176115,
            ],
            distance_m: 1.380660685423683,
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
  oos_staged_h2p0_4: {
    inputs: {
      "video 1": {
        id: "P04-20240414-162242",
      },
    },
    video_id: "P04-20240414-162242",
    object_a_assoc_id: "40c466381e64904e",
    object_a_name: "lid",
    query_time_sec: 81.0,
    query_time_in_clip_sec: 81.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 81.0,
    clip_duration_sec: 81.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-162242",
      assoc_id: "40c466381e64904e",
      object_name: "lid",
      query_time_sec: 81.0,
      oos_span_start_sec: 79.0,
      oos_span_end_sec: 84.0,
      oos_duration_sec: 5.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.002",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 81.0,
      clip_duration_sec: 81.0,
      anchor_assoc_id: "773772759648ba6c",
      anchor_name: "pot",
      anchor_projected_pixel: [1087.353722319251, 697.0139238768919],
      anchor_world_coordinates: [
        -0.6735004380262972, -0.29564488808308026, -0.494774735240547,
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
          "At the current time <TIME 00:01:21.0 video 1>, is the previously moved lid visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-1403.2377512562527, 1186.9232690023944],
          camera_coordinates: [
            -0.9967593278846268, 0.23968476707277486, 0.24696084592904288,
          ],
          frame_index: 1496,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:17.0 video 1>; Point=(0.1265, 0.3343)",
          "<TIME 00:01:18.0 video 1>; Point=(0.1637, 0.3857)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 78.0,
          sampled_last_visible_time_in_clip_sec: 78.0,
          sampled_last_visible_time_token: "<TIME 00:01:18.0 video 1>",
          projected_pixel: [230.47268249391118, 543.0946527914707],
          normalized_projected_pixel: [0.1636879847257892, 0.38572063408485135],
          camera_coordinates: [
            -0.5975344436912904, -0.21776438915833554, 0.7120671877574267,
          ],
          frame_index: 1496,
          status: "in_view",
          fixture: "P04_counter.002",
          world_coordinates: [
            0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 77.0,
              time_token: "<TIME 00:01:17.0 video 1>",
              projected_pixel: [178.0989942247686, 470.7064404678414],
              normalized_projected_pixel: [
                0.1264907629437277, 0.33430855146863736,
              ],
              camera_coordinates: [
                -0.6392891957606082, -0.2975566527468809, 0.6573738761852337,
              ],
              frame_index: 1496,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 78.0,
              time_token: "<TIME 00:01:18.0 video 1>",
              projected_pixel: [230.47268249391118, 543.0946527914707],
              normalized_projected_pixel: [
                0.1636879847257892, 0.38572063408485135,
              ],
              camera_coordinates: [
                -0.5975344436912904, -0.21776438915833554, 0.7120671877574267,
              ],
              frame_index: 1496,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
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
          "<TIME 00:00:49.9 video 1>; Point=(0.5131, 0.7301)",
          "<TIME 00:00:50.0 video 1>; Point=(0.4996, 0.7719)",
          "<TIME 00:00:51.0 video 1>; Point=(-0.8201, 3.0614)",
        ],
        answer_metadata: {
          last_placement_time_sec: 49.86666666666667,
          last_placement_time_in_clip_sec: 49.86666666666667,
          last_placement_time_token: "<TIME 00:00:49.9 video 1>",
          projected_pixel: [722.428105088197, 1028.0511148121946],
          normalized_projected_pixel: [0.5130881428183217, 0.7301499394972972],
          camera_coordinates: [
            0.01569795777541305, 0.25555967346022646, 0.4911429616503249,
          ],
          frame_index: 1496,
          status: "last_past_track_end",
          fixture: "P04_counter.002",
          world_coordinates: [
            0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 49.86666666666667,
              time_token: "<TIME 00:00:49.9 video 1>",
              projected_pixel: [722.428105088197, 1028.0511148121946],
              normalized_projected_pixel: [
                0.5130881428183217, 0.7301499394972972,
              ],
              camera_coordinates: [
                0.01569795777541305, 0.25555967346022646, 0.4911429616503249,
              ],
              frame_index: 1496,
              status: "last_past_track_end",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 50.0,
              time_token: "<TIME 00:00:50.0 video 1>",
              projected_pixel: [703.5006682680021, 1086.8685164816036],
              normalized_projected_pixel: [
                0.4996453609857969, 0.7719236622738662,
              ],
              camera_coordinates: [
                0.00016003987989832158, 0.2973984169160404, 0.4741162686154826,
              ],
              frame_index: 1500,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 51.0,
              time_token: "<TIME 00:00:51.0 video 1>",
              projected_pixel: [-1154.6753801427285, 4310.521089103676],
              normalized_projected_pixel: [
                -0.8200819461240969, 3.061449637147497,
              ],
              camera_coordinates: [
                -0.28162176885237455, 0.6137605499944068, 0.10422518769103417,
              ],
              frame_index: 1530,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
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
          "At the current time <TIME 00:01:21.0 video 1>, based on the last known position of the lid that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 49.86666666666667,
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
            "At the current time <TIME 00:01:21.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, in which direction is the lid from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 81.0,
            camera_coordinates: [
              -0.9967593278846268, 0.23968476707277486, 0.24696084592904288,
            ],
            world_coordinates: [
              0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.9967593278846268,
              z: 0.24696084592904288,
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
            "At the current time <TIME 00:01:21.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the pot (marked in red) in the current frame, where is the lid relative to pot from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "40c466381e64904e",
            object_x_name: "lid",
            object_x_reference_time_sec: 81.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
            ],
            object_x_camera_coordinates: [
              -0.9967593278846268, 0.23968476707277486, 0.24696084592904288,
            ],
            object_y_assoc_id: "773772759648ba6c",
            object_y_name: "pot",
            object_y_reference_time_sec: 81.0,
            object_y_world_coordinates: [
              -0.6735004380262972, -0.29564488808308026, -0.494774735240547,
            ],
            object_y_projected_pixel: [1087.353722319251, 697.0139238768919],
            object_y_normalized_projected_pixel: [
              0.7722682686926498, 0.4950382982080198,
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
            "At the current time <TIME 00:01:21.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the pot (marked in red) in the current frame, how far is the lid from the pot: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "40c466381e64904e",
            object_x_name: "lid",
            object_x_reference_time_sec: 81.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "773772759648ba6c",
            object_y_name: "pot",
            object_y_pixel: [1087.353722319251, 697.0139238768919],
            object_y_normalized_projected_pixel: [
              0.7722682686926498, 0.4950382982080198,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.502092091243053, 0.264226917362236, -0.5287771412201582,
            ],
            distance_m: 1.6142186281636828,
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
        id: "P04-20240414-162242",
      },
    },
    video_id: "P04-20240414-162242",
    object_a_assoc_id: "9ad03203a3ae4da1",
    object_a_name: "bottle of cleaning solution",
    query_time_sec: 111.0,
    query_time_in_clip_sec: 111.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 111.0,
    clip_duration_sec: 111.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-162242",
      assoc_id: "9ad03203a3ae4da1",
      object_name: "bottle of cleaning solution",
      query_time_sec: 111.0,
      oos_span_start_sec: 109.0,
      oos_span_end_sec: 156.0,
      oos_duration_sec: 47.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_windowsill.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 111.0,
      clip_duration_sec: 111.0,
      anchor_assoc_id: "ac3b6c7808b929fe",
      anchor_name: "pan",
      anchor_projected_pixel: [1134.057844856271, 433.66238357285056],
      anchor_world_coordinates: [
        -0.6184498411940738, -0.5389630492975523, -0.5049830519200225,
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
          "At the current time <TIME 00:01:51.0 video 1>, is the previously moved bottle of cleaning solution visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.5529158816340967, -0.09504367101663233, -0.17338949561089073,
          ],
          frame_index: 668,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The bottle of cleaning solution was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:48.0 video 1>; Point=(0.791, 0.2569)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 108.0,
          sampled_last_visible_time_in_clip_sec: 108.0,
          sampled_last_visible_time_token: "<TIME 00:01:48.0 video 1>",
          projected_pixel: [1113.712002766073, 361.72616794375585],
          normalized_projected_pixel: [0.7909886383281769, 0.25690778973278117],
          camera_coordinates: [
            1.0975278570138363, -0.9463169575264795, 1.4788973640148695,
          ],
          frame_index: 668,
          status: "in_view",
          fixture: "P04_windowsill.001",
          world_coordinates: [
            -1.4075058474723505, 0.49630069701295787, -0.1300323220771056,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 108.0,
              time_token: "<TIME 00:01:48.0 video 1>",
              projected_pixel: [1113.712002766073, 361.72616794375585],
              normalized_projected_pixel: [
                0.7909886383281769, 0.25690778973278117,
              ],
              camera_coordinates: [
                1.0975278570138363, -0.9463169575264795, 1.4788973640148695,
              ],
              frame_index: 668,
              status: "in_view",
              fixture: "P04_windowsill.001",
              world_coordinates: [
                -1.4075058474723505, 0.49630069701295787, -0.1300323220771056,
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
          "The bottle of cleaning solution was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:22.3 video 1>; Point=(0.5108, 0.3829)",
          "<TIME 00:00:23.0 video 1>; Point=(0.7137, 0.2693)",
          "<TIME 00:00:24.0 video 1>; Point=(0.4481, 0.3781)",
          "<TIME 00:00:25.0 video 1>; Point=(0.5141, 0.2854)",
        ],
        answer_metadata: {
          last_placement_time_sec: 22.266666666666666,
          last_placement_time_in_clip_sec: 22.266666666666666,
          last_placement_time_token: "<TIME 00:00:22.3 video 1>",
          projected_pixel: [719.2638354762879, 539.1562709704223],
          normalized_projected_pixel: [0.5108407922416818, 0.3829234879051295],
          camera_coordinates: [
            0.013275366787856069, -0.14558967523072042, 0.5017761402531287,
          ],
          frame_index: 668,
          status: "last_past_track_end",
          fixture: "P04_windowsill.001",
          world_coordinates: [
            -1.4075058474723505, 0.49630069701295787, -0.1300323220771056,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 22.266666666666666,
              time_token: "<TIME 00:00:22.3 video 1>",
              projected_pixel: [719.2638354762879, 539.1562709704223],
              normalized_projected_pixel: [
                0.5108407922416818, 0.3829234879051295,
              ],
              camera_coordinates: [
                0.013275366787856069, -0.14558967523072042, 0.5017761402531287,
              ],
              frame_index: 668,
              status: "last_past_track_end",
              fixture: "P04_windowsill.001",
              world_coordinates: [
                -1.4075058474723505, 0.49630069701295787, -0.1300323220771056,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 23.0,
              time_token: "<TIME 00:00:23.0 video 1>",
              projected_pixel: [1004.9447962951936, 379.10747750445836],
              normalized_projected_pixel: [
                0.7137392019141999, 0.26925246981850737,
              ],
              camera_coordinates: [
                0.22122354300981817, -0.24683638922784013, 0.42265346930298964,
              ],
              frame_index: 690,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_windowsill.001",
              world_coordinates: [
                -1.4075058474723505, 0.49630069701295787, -0.1300323220771056,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 24.0,
              time_token: "<TIME 00:00:24.0 video 1>",
              projected_pixel: [630.8900284132699, 532.366023991632],
              normalized_projected_pixel: [
                0.4480753042707883, 0.37810086931223863,
              ],
              camera_coordinates: [
                -0.04727739631761402, -0.12001186685136356, 0.39810766796097097,
              ],
              frame_index: 720,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_windowsill.001",
              world_coordinates: [
                -1.4075058474723505, 0.49630069701295787, -0.1300323220771056,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 25.0,
              time_token: "<TIME 00:00:25.0 video 1>",
              projected_pixel: [723.902176334588, 401.8798752934963],
              normalized_projected_pixel: [
                0.5141350684194518, 0.28542604779367636,
              ],
              camera_coordinates: [
                0.013963776166926456, -0.2121718844835192, 0.4058164810881426,
              ],
              frame_index: 750,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_windowsill.001",
              world_coordinates: [
                -1.4075058474723505, 0.49630069701295787, -0.1300323220771056,
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
          "At the current time <TIME 00:01:51.0 video 1>, based on the last known position of the bottle of cleaning solution that was moved earlier, which fixture type is closest to it?",
        choices: ["drawer", "top_storage", "bin", "windowsill", "counter"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 22.266666666666666,
          correct_fixture: "windowsill",
          display_correct_answer: "windowsill",
          raw_correct_fixture: "P04_windowsill.001",
          fixture_type_pool: [
            "bin",
            "counter",
            "cupboard",
            "drawer",
            "hob",
            "storage",
            "top_storage",
            "windowsill",
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
            "At the current time <TIME 00:01:51.0 video 1>, consider the bottle of cleaning solution that was moved earlier. Using its last known position to infer its current location, in which direction is the bottle of cleaning solution from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 111.0,
            camera_coordinates: [
              1.5529158816340967, -0.09504367101663233, -0.17338949561089073,
            ],
            world_coordinates: [
              -1.4075058474723505, 0.49630069701295787, -0.1300323220771056,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.5529158816340967,
              z: -0.17338949561089073,
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
            "At the current time <TIME 00:01:51.0 video 1>, consider the bottle of cleaning solution that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan (marked in red) in the current frame, where is the bottle of cleaning solution relative to pan from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "9ad03203a3ae4da1",
            object_x_name: "bottle of cleaning solution",
            object_x_reference_time_sec: 111.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4075058474723505, 0.49630069701295787, -0.1300323220771056,
            ],
            object_x_camera_coordinates: [
              1.5529158816340967, -0.09504367101663233, -0.17338949561089073,
            ],
            object_y_assoc_id: "ac3b6c7808b929fe",
            object_y_name: "pan",
            object_y_reference_time_sec: 111.0,
            object_y_world_coordinates: [
              -0.6184498411940738, -0.5389630492975523, -0.5049830519200225,
            ],
            object_y_projected_pixel: [1134.057844856271, 433.66238357285056],
            object_y_normalized_projected_pixel: [
              0.805438810267238, 0.3079988519693541,
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
            "At the current time <TIME 00:01:51.0 video 1>, consider the bottle of cleaning solution that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan (marked in red) in the current frame, how far is the bottle of cleaning solution from the pan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "9ad03203a3ae4da1",
            object_x_name: "bottle of cleaning solution",
            object_x_reference_time_sec: 111.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "ac3b6c7808b929fe",
            object_y_name: "pan",
            object_y_pixel: [1134.057844856271, 433.66238357285056],
            object_y_normalized_projected_pixel: [
              0.805438810267238, 0.3079988519693541,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.0793588298751933, 0.2148790576713422, -0.7897974184708141,
            ],
            distance_m: 1.3546100749951746,
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
        id: "P04-20240414-162242",
      },
    },
    video_id: "P04-20240414-162242",
    object_a_assoc_id: "40c466381e64904e",
    object_a_name: "lid",
    query_time_sec: 116.0,
    query_time_in_clip_sec: 116.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 116.0,
    clip_duration_sec: 116.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-162242",
      assoc_id: "40c466381e64904e",
      object_name: "lid",
      query_time_sec: 116.0,
      oos_span_start_sec: 114.0,
      oos_span_end_sec: 144.0,
      oos_duration_sec: 30.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.002",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 116.0,
      clip_duration_sec: 116.0,
      anchor_assoc_id: "ac3b6c7808b929fe",
      anchor_name: "pan",
      anchor_projected_pixel: [1189.080323689502, 558.3799024744133],
      anchor_world_coordinates: [
        -0.6184498411940738, -0.5389630492975523, -0.5049830519200225,
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
          "At the current time <TIME 00:01:56.0 video 1>, is the previously moved lid visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-19.185687470052812, 947.1201979440386],
          camera_coordinates: [
            -0.8148620492201998, 0.26190124134495973, 0.44456050712071193,
          ],
          frame_index: 1496,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:51.0 video 1>; Point=(0.0081, 0.5618)",
          "<TIME 00:01:53.0 video 1>; Point=(0.0341, 0.6042)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 113.0,
          sampled_last_visible_time_in_clip_sec: 113.0,
          sampled_last_visible_time_token: "<TIME 00:01:53.0 video 1>",
          projected_pixel: [47.982541305313475, 850.756024061028],
          normalized_projected_pixel: [0.034078509449796505, 0.604230130725162],
          camera_coordinates: [
            -0.8934634120966304, 0.18490881201042733, 0.6759948003372098,
          ],
          frame_index: 1496,
          status: "in_view",
          fixture: "P04_counter.002",
          world_coordinates: [
            0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 111.0,
              time_token: "<TIME 00:01:51.0 video 1>",
              projected_pixel: [11.391334722196802, 791.0487912098225],
              normalized_projected_pixel: [
                0.00809043659246932, 0.561824425575158,
              ],
              camera_coordinates: [
                -0.9588910282063067, 0.10539695810145014, 0.6580429210650736,
              ],
              frame_index: 1496,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 113.0,
              time_token: "<TIME 00:01:53.0 video 1>",
              projected_pixel: [47.982541305313475, 850.756024061028],
              normalized_projected_pixel: [
                0.034078509449796505, 0.604230130725162,
              ],
              camera_coordinates: [
                -0.8934634120966304, 0.18490881201042733, 0.6759948003372098,
              ],
              frame_index: 1496,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
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
          "<TIME 00:00:49.9 video 1>; Point=(0.5131, 0.7301)",
          "<TIME 00:00:50.0 video 1>; Point=(0.4996, 0.7719)",
          "<TIME 00:00:51.0 video 1>; Point=(-0.8201, 3.0614)",
        ],
        answer_metadata: {
          last_placement_time_sec: 49.86666666666667,
          last_placement_time_in_clip_sec: 49.86666666666667,
          last_placement_time_token: "<TIME 00:00:49.9 video 1>",
          projected_pixel: [722.428105088197, 1028.0511148121946],
          normalized_projected_pixel: [0.5130881428183217, 0.7301499394972972],
          camera_coordinates: [
            0.01569795777541305, 0.25555967346022646, 0.4911429616503249,
          ],
          frame_index: 1496,
          status: "last_past_track_end",
          fixture: "P04_counter.002",
          world_coordinates: [
            0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 49.86666666666667,
              time_token: "<TIME 00:00:49.9 video 1>",
              projected_pixel: [722.428105088197, 1028.0511148121946],
              normalized_projected_pixel: [
                0.5130881428183217, 0.7301499394972972,
              ],
              camera_coordinates: [
                0.01569795777541305, 0.25555967346022646, 0.4911429616503249,
              ],
              frame_index: 1496,
              status: "last_past_track_end",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 50.0,
              time_token: "<TIME 00:00:50.0 video 1>",
              projected_pixel: [703.5006682680021, 1086.8685164816036],
              normalized_projected_pixel: [
                0.4996453609857969, 0.7719236622738662,
              ],
              camera_coordinates: [
                0.00016003987989832158, 0.2973984169160404, 0.4741162686154826,
              ],
              frame_index: 1500,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 51.0,
              time_token: "<TIME 00:00:51.0 video 1>",
              projected_pixel: [-1154.6753801427285, 4310.521089103676],
              normalized_projected_pixel: [
                -0.8200819461240969, 3.061449637147497,
              ],
              camera_coordinates: [
                -0.28162176885237455, 0.6137605499944068, 0.10422518769103417,
              ],
              frame_index: 1530,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
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
          "At the current time <TIME 00:01:56.0 video 1>, based on the last known position of the lid that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 49.86666666666667,
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
            "At the current time <TIME 00:01:56.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, in which direction is the lid from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 116.0,
            camera_coordinates: [
              -0.8148620492201998, 0.26190124134495973, 0.44456050712071193,
            ],
            world_coordinates: [
              0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.8148620492201998,
              z: 0.44456050712071193,
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
            "At the current time <TIME 00:01:56.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan (marked in red) in the current frame, where is the lid relative to pan from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "40c466381e64904e",
            object_x_name: "lid",
            object_x_reference_time_sec: 116.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
            ],
            object_x_camera_coordinates: [
              -0.8148620492201998, 0.26190124134495973, 0.44456050712071193,
            ],
            object_y_assoc_id: "ac3b6c7808b929fe",
            object_y_name: "pan",
            object_y_reference_time_sec: 116.0,
            object_y_world_coordinates: [
              -0.6184498411940738, -0.5389630492975523, -0.5049830519200225,
            ],
            object_y_projected_pixel: [1189.080323689502, 558.3799024744133],
            object_y_normalized_projected_pixel: [
              0.8445172753476576, 0.39657663528012305,
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
            "At the current time <TIME 00:01:56.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan (marked in red) in the current frame, how far is the lid from the pan: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "40c466381e64904e",
            object_x_name: "lid",
            object_x_reference_time_sec: 116.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "ac3b6c7808b929fe",
            object_y_name: "pan",
            object_y_pixel: [1189.080323689502, 558.3799024744133],
            object_y_normalized_projected_pixel: [
              0.8445172753476576, 0.39657663528012305,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.4023990338757917, 0.451955744868881, -0.2348283874890078,
            ],
            distance_m: 1.4920225926930284,
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
        id: "P04-20240414-162242",
      },
    },
    video_id: "P04-20240414-162242",
    object_a_assoc_id: "773772759648ba6c",
    object_a_name: "pot",
    query_time_sec: 160.0,
    query_time_in_clip_sec: 160.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 160.0,
    clip_duration_sec: 160.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-162242",
      assoc_id: "773772759648ba6c",
      object_name: "pot",
      query_time_sec: 160.0,
      oos_span_start_sec: 158.0,
      oos_span_end_sec: 168.0,
      oos_duration_sec: 10.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 160.0,
      clip_duration_sec: 160.0,
      anchor_assoc_id: "acd29b44bb88be3c",
      anchor_name: "cooling rack2",
      anchor_projected_pixel: [1285.3333977071366, 717.420374120453],
      anchor_world_coordinates: [
        1.1609103406000716, -1.4960663163303418, -0.3284902809471013,
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
          "At the current time <TIME 00:02:40.0 video 1>, is the previously moved pot visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.5926028697724827, 1.1371277941456768, -0.5721171196911703,
          ],
          frame_index: 2661,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pot was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:37.0 video 1>; Point=(0.005, 0.4619)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 157.0,
          sampled_last_visible_time_in_clip_sec: 157.0,
          sampled_last_visible_time_token: "<TIME 00:02:37.0 video 1>",
          projected_pixel: [7.034773171307393, 650.3615858065699],
          normalized_projected_pixel: [
            0.004996287763712637, 0.4619045353739843,
          ],
          camera_coordinates: [
            -1.3172675390010418, -0.12205084206502415, 0.8930480422192112,
          ],
          frame_index: 2661,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -0.7744352804858534, -0.39196664322638264, -0.4989824158723989,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 157.0,
              time_token: "<TIME 00:02:37.0 video 1>",
              projected_pixel: [7.034773171307393, 650.3615858065699],
              normalized_projected_pixel: [
                0.004996287763712637, 0.4619045353739843,
              ],
              camera_coordinates: [
                -1.3172675390010418, -0.12205084206502415, 0.8930480422192112,
              ],
              frame_index: 2661,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.7744352804858534, -0.39196664322638264, -0.4989824158723989,
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
          "The pot was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:28.7 video 1>; Point=(0.6045, 0.4724)",
          "<TIME 00:01:29.0 video 1>; Point=(0.6317, 0.5132)",
          "<TIME 00:01:30.0 video 1>; Point=(12.2762, -12.1534)",
        ],
        answer_metadata: {
          last_placement_time_sec: 88.7,
          last_placement_time_in_clip_sec: 88.7,
          last_placement_time_token: "<TIME 00:01:28.7 video 1>",
          projected_pixel: [851.1303374076383, 665.1191193417103],
          normalized_projected_pixel: [0.6044959782724704, 0.47238573816882834],
          camera_coordinates: [
            0.13684796627162968, -0.04691059343502613, 0.5631683315068646,
          ],
          frame_index: 2661,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -0.7744352804858534, -0.39196664322638264, -0.4989824158723989,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 88.7,
              time_token: "<TIME 00:01:28.7 video 1>",
              projected_pixel: [851.1303374076383, 665.1191193417103],
              normalized_projected_pixel: [
                0.6044959782724704, 0.47238573816882834,
              ],
              camera_coordinates: [
                0.13684796627162968, -0.04691059343502613, 0.5631683315068646,
              ],
              frame_index: 2661,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.7744352804858534, -0.39196664322638264, -0.4989824158723989,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 89.0,
              time_token: "<TIME 00:01:29.0 video 1>",
              projected_pixel: [889.4706416313112, 722.5828423938563],
              normalized_projected_pixel: [
                0.6317263079767835, 0.5131980414729093,
              ],
              camera_coordinates: [
                0.1743683295661122, 0.006315817729233286, 0.5696408485275732,
              ],
              frame_index: 2670,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.7744352804858534, -0.39196664322638264, -0.4989824158723989,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 90.0,
              time_token: "<TIME 00:01:30.0 video 1>",
              projected_pixel: [17284.887439971313, -17111.94418423573],
              normalized_projected_pixel: [
                12.276198465888717, -12.153369449031059,
              ],
              camera_coordinates: [
                0.7600927390837151, 0.35695143003707974, 0.07811706625090208,
              ],
              frame_index: 2700,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.7744352804858534, -0.39196664322638264, -0.4989824158723989,
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
          "At the current time <TIME 00:02:40.0 video 1>, based on the last known position of the pot that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area between the hob and the sink",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 88.7,
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
            "At the current time <TIME 00:02:40.0 video 1>, consider the pot that was moved earlier. Using its last known position to infer its current location, in which direction is the pot from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 160.0,
            camera_coordinates: [
              0.5926028697724827, 1.1371277941456768, -0.5721171196911703,
            ],
            world_coordinates: [
              -0.7744352804858534, -0.39196664322638264, -0.4989824158723989,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.5926028697724827,
              z: -0.5721171196911703,
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
            "At the current time <TIME 00:02:40.0 video 1>, consider the pot that was moved earlier. Using its last known position to infer its current location, and using the current position of the cooling rack2 (marked in red) in the current frame, where is the pot relative to cooling rack2 from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "773772759648ba6c",
            object_x_name: "pot",
            object_x_reference_time_sec: 160.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.7744352804858534, -0.39196664322638264, -0.4989824158723989,
            ],
            object_x_camera_coordinates: [
              0.5926028697724827, 1.1371277941456768, -0.5721171196911703,
            ],
            object_y_assoc_id: "acd29b44bb88be3c",
            object_y_name: "cooling rack2",
            object_y_reference_time_sec: 160.0,
            object_y_world_coordinates: [
              1.1609103406000716, -1.4960663163303418, -0.3284902809471013,
            ],
            object_y_projected_pixel: [1285.3333977071366, 717.420374120453],
            object_y_normalized_projected_pixel: [
              0.9128788335988186, 0.509531515710549,
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
            "At the current time <TIME 00:02:40.0 video 1>, consider the pot that was moved earlier. Using its last known position to infer its current location, and using the current position of the cooling rack2 (marked in red) in the current frame, how far is the pot from the cooling rack2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "773772759648ba6c",
            object_x_name: "pot",
            object_x_reference_time_sec: 160.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "acd29b44bb88be3c",
            object_y_name: "cooling rack2",
            object_y_pixel: [1285.3333977071366, 717.420374120453],
            object_y_normalized_projected_pixel: [
              0.9128788335988186, 0.509531515710549,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.7187767392292468, 1.1323356099484023, -1.7874122061969566,
            ],
            distance_m: 2.2346512768832905,
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
        id: "P04-20240414-162242",
      },
    },
    video_id: "P04-20240414-162242",
    object_a_assoc_id: "9c50054583bf17ce",
    object_a_name: "metallic cup",
    query_time_sec: 160.0,
    query_time_in_clip_sec: 160.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 160.0,
    clip_duration_sec: 160.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-162242",
      assoc_id: "9c50054583bf17ce",
      object_name: "metallic cup",
      query_time_sec: 160.0,
      oos_span_start_sec: 158.0,
      oos_span_end_sec: 168.0,
      oos_duration_sec: 10.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.005",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 160.0,
      clip_duration_sec: 160.0,
      anchor_assoc_id: "40c466381e64904e",
      anchor_name: "lid",
      anchor_projected_pixel: [1171.7442512620873, 897.3916244357272],
      anchor_world_coordinates: [
        0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
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
          "At the current time <TIME 00:02:40.0 video 1>, is the previously moved metallic cup visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.36734486195510674, 1.0371059064675274, -0.37752776031709556,
          ],
          frame_index: 2672,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The metallic cup was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:37.0 video 1>; Point=(0.0795, 0.4957)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 157.0,
          sampled_last_visible_time_in_clip_sec: 157.0,
          sampled_last_visible_time_token: "<TIME 00:02:37.0 video 1>",
          projected_pixel: [111.90565293755719, 697.9798991595261],
          normalized_projected_pixel: [
            0.07947844668860596, 0.49572436019852706,
          ],
          camera_coordinates: [
            -1.018512848100352, -0.029758338333130963, 0.9220013719396054,
          ],
          frame_index: 2672,
          status: "in_view",
          fixture: "P04_counter.005",
          world_coordinates: [
            -0.5191258627965865, -0.2278331177644855, -0.5795296314715882,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 157.0,
              time_token: "<TIME 00:02:37.0 video 1>",
              projected_pixel: [111.90565293755719, 697.9798991595261],
              normalized_projected_pixel: [
                0.07947844668860596, 0.49572436019852706,
              ],
              camera_coordinates: [
                -1.018512848100352, -0.029758338333130963, 0.9220013719396054,
              ],
              frame_index: 2672,
              status: "in_view",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.5191258627965865, -0.2278331177644855, -0.5795296314715882,
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
          "The metallic cup was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:29.1 video 1>; Point=(0.6034, 0.7795)",
          "<TIME 00:01:30.0 video 1>; Point=(2.7433, 2.328)",
        ],
        answer_metadata: {
          last_placement_time_sec: 89.06666666666666,
          last_placement_time_in_clip_sec: 89.06666666666666,
          last_placement_time_token: "<TIME 00:01:29.1 video 1>",
          projected_pixel: [849.5701550686647, 1097.5600835526793],
          normalized_projected_pixel: [0.6033878942249039, 0.779517104795937],
          camera_coordinates: [
            0.11231691063575051, 0.2933594577029385, 0.44919279328385275,
          ],
          frame_index: 2672,
          status: "last_past_track_end",
          fixture: "P04_counter.005",
          world_coordinates: [
            -0.5191258627965865, -0.2278331177644855, -0.5795296314715882,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 89.06666666666666,
              time_token: "<TIME 00:01:29.1 video 1>",
              projected_pixel: [849.5701550686647, 1097.5600835526793],
              normalized_projected_pixel: [
                0.6033878942249039, 0.779517104795937,
              ],
              camera_coordinates: [
                0.11231691063575051, 0.2933594577029385, 0.44919279328385275,
              ],
              frame_index: 2672,
              status: "last_past_track_end",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.5191258627965865, -0.2278331177644855, -0.5795296314715882,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 90.0,
              time_token: "<TIME 00:01:30.0 video 1>",
              projected_pixel: [3862.5317750708036, 3277.8466231247303],
              normalized_projected_pixel: [
                2.7432754084309683, 2.3280160675601778,
              ],
              camera_coordinates: [
                0.4873070866930852, 0.5057225607344179, 0.12356709818730562,
              ],
              frame_index: 2700,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.005",
              world_coordinates: [
                -0.5191258627965865, -0.2278331177644855, -0.5795296314715882,
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
          "At the current time <TIME 00:02:40.0 video 1>, based on the last known position of the metallic cup that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and close to the door",
          "counter area next to the window",
          "counter area between the hob and the sink",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 89.06666666666666,
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
            "At the current time <TIME 00:02:40.0 video 1>, consider the metallic cup that was moved earlier. Using its last known position to infer its current location, in which direction is the metallic cup from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 160.0,
            camera_coordinates: [
              0.36734486195510674, 1.0371059064675274, -0.37752776031709556,
            ],
            world_coordinates: [
              -0.5191258627965865, -0.2278331177644855, -0.5795296314715882,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.36734486195510674,
              z: -0.37752776031709556,
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
            "At the current time <TIME 00:02:40.0 video 1>, consider the metallic cup that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid (marked in red) in the current frame, where is the metallic cup relative to lid from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "9c50054583bf17ce",
            object_x_name: "metallic cup",
            object_x_reference_time_sec: 160.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.5191258627965865, -0.2278331177644855, -0.5795296314715882,
            ],
            object_x_camera_coordinates: [
              0.36734486195510674, 1.0371059064675274, -0.37752776031709556,
            ],
            object_y_assoc_id: "40c466381e64904e",
            object_y_name: "lid",
            object_y_reference_time_sec: 160.0,
            object_y_world_coordinates: [
              0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
            ],
            object_y_projected_pixel: [1171.7442512620873, 897.3916244357272],
            object_y_normalized_projected_pixel: [
              0.8322047239077325, 0.6373520059912835,
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
            "At the current time <TIME 00:02:40.0 video 1>, consider the metallic cup that was moved earlier. Using its last known position to infer its current location, and using the current position of the lid (marked in red) in the current frame, how far is the metallic cup from the lid: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "9c50054583bf17ce",
            object_x_name: "metallic cup",
            object_x_reference_time_sec: 160.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "40c466381e64904e",
            object_y_name: "lid",
            object_y_pixel: [1171.7442512620873, 897.3916244357272],
            object_y_normalized_projected_pixel: [
              0.8322047239077325, 0.6373520059912835,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.35288833138292086, 0.7573071327768667, -1.2441736765491944,
            ],
            distance_m: 1.4986702122878404,
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
  oos_staged_h2p0_9: {
    inputs: {
      "video 1": {
        id: "P04-20240414-162242",
      },
    },
    video_id: "P04-20240414-162242",
    object_a_assoc_id: "d98e6f99871f9337",
    object_a_name: "pair of scissors",
    query_time_sec: 160.0,
    query_time_in_clip_sec: 160.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 160.0,
    clip_duration_sec: 160.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-162242",
      assoc_id: "d98e6f99871f9337",
      object_name: "pair of scissors",
      query_time_sec: 160.0,
      oos_span_start_sec: 158.0,
      oos_span_end_sec: 168.0,
      oos_duration_sec: 10.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.004",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 160.0,
      clip_duration_sec: 160.0,
      anchor_assoc_id: "acd29b44bb88be3c",
      anchor_name: "cooling rack2",
      anchor_projected_pixel: [1285.3333977071366, 717.420374120453],
      anchor_world_coordinates: [
        1.1609103406000716, -1.4960663163303418, -0.3284902809471013,
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
          "At the current time <TIME 00:02:40.0 video 1>, is the previously moved pair of scissors visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.4482816659461113, 0.9128705069660312, -0.10337043093633932,
          ],
          frame_index: 3600,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The pair of scissors was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:37.0 video 1>; Point=(0.0434, 0.5903)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 157.0,
          sampled_last_visible_time_in_clip_sec: 157.0,
          sampled_last_visible_time_token: "<TIME 00:02:37.0 video 1>",
          projected_pixel: [61.13696088142615, 831.1502347473413],
          normalized_projected_pixel: [0.04342113698964925, 0.5903055644512367],
          camera_coordinates: [
            -0.8979362296509594, 0.16217610832943297, 0.7080623870621219,
          ],
          frame_index: 3600,
          status: "in_view",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.24517997139628972, -0.37491461406996285, -0.6011658051675497,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 157.0,
              time_token: "<TIME 00:02:37.0 video 1>",
              projected_pixel: [61.13696088142615, 831.1502347473413],
              normalized_projected_pixel: [
                0.04342113698964925, 0.5903055644512367,
              ],
              camera_coordinates: [
                -0.8979362296509594, 0.16217610832943297, 0.7080623870621219,
              ],
              frame_index: 3600,
              status: "in_view",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24517997139628972, -0.37491461406996285, -0.6011658051675497,
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
          "The pair of scissors was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:00.0 video 1>; Point=(0.7557, 0.6429)",
          "<TIME 00:02:01.0 video 1>; Point=(0.7315, 0.6372)",
          "<TIME 00:02:02.0 video 1>; Point=(0.7326, 0.6602)",
          "<TIME 00:02:03.0 video 1>; Point=(0.7249, 0.6704)",
        ],
        answer_metadata: {
          last_placement_time_sec: 120.0,
          last_placement_time_in_clip_sec: 120.0,
          last_placement_time_token: "<TIME 00:02:00.0 video 1>",
          projected_pixel: [1063.9701400079293, 905.2515232305587],
          normalized_projected_pixel: [0.7556606108010862, 0.6429343204762491],
          camera_coordinates: [
            0.34916885569059763, 0.18359167399310902, 0.5665534973311459,
          ],
          frame_index: 3600,
          status: "last_past_track_end",
          fixture: "P04_counter.004",
          world_coordinates: [
            -0.24517997139628972, -0.37491461406996285, -0.6011658051675497,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 120.0,
              time_token: "<TIME 00:02:00.0 video 1>",
              projected_pixel: [1063.9701400079293, 905.2515232305587],
              normalized_projected_pixel: [
                0.7556606108010862, 0.6429343204762491,
              ],
              camera_coordinates: [
                0.34916885569059763, 0.18359167399310902, 0.5665534973311459,
              ],
              frame_index: 3600,
              status: "last_past_track_end",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24517997139628972, -0.37491461406996285, -0.6011658051675497,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 121.0,
              time_token: "<TIME 00:02:01.0 video 1>",
              projected_pixel: [1029.9859579604474, 897.2414975320818],
              normalized_projected_pixel: [
                0.731524117869636, 0.6372453817699445,
              ],
              camera_coordinates: [
                0.3235630510141957, 0.17982924289727023, 0.5856781944233841,
              ],
              frame_index: 3630,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24517997139628972, -0.37491461406996285, -0.6011658051675497,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 122.0,
              time_token: "<TIME 00:02:02.0 video 1>",
              projected_pixel: [1031.450714112836, 929.6275638747328],
              normalized_projected_pixel: [
                0.7325644276369574, 0.66024684934285,
              ],
              camera_coordinates: [
                0.3282391011088502, 0.21404474076696042, 0.5883220006290151,
              ],
              frame_index: 3660,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24517997139628972, -0.37491461406996285, -0.6011658051675497,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 123.0,
              time_token: "<TIME 00:02:03.0 video 1>",
              projected_pixel: [1020.6392266241023, 943.9035157168897],
              normalized_projected_pixel: [
                0.724885814363709, 0.670386019685291,
              ],
              camera_coordinates: [
                0.3126784141494875, 0.2249102985608131, 0.5796740949466505,
              ],
              frame_index: 3690,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.004",
              world_coordinates: [
                -0.24517997139628972, -0.37491461406996285, -0.6011658051675497,
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
          "At the current time <TIME 00:02:40.0 video 1>, based on the last known position of the pair of scissors that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 120.0,
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
            "At the current time <TIME 00:02:40.0 video 1>, consider the pair of scissors that was moved earlier. Using its last known position to infer its current location, in which direction is the pair of scissors from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 160.0,
            camera_coordinates: [
              0.4482816659461113, 0.9128705069660312, -0.10337043093633932,
            ],
            world_coordinates: [
              -0.24517997139628972, -0.37491461406996285, -0.6011658051675497,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.4482816659461113,
              z: -0.10337043093633932,
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
            "At the current time <TIME 00:02:40.0 video 1>, consider the pair of scissors that was moved earlier. Using its last known position to infer its current location, and using the current position of the cooling rack2 (marked in red) in the current frame, where is the pair of scissors relative to cooling rack2 from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "d98e6f99871f9337",
            object_x_name: "pair of scissors",
            object_x_reference_time_sec: 160.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.24517997139628972, -0.37491461406996285, -0.6011658051675497,
            ],
            object_x_camera_coordinates: [
              0.4482816659461113, 0.9128705069660312, -0.10337043093633932,
            ],
            object_y_assoc_id: "acd29b44bb88be3c",
            object_y_name: "cooling rack2",
            object_y_reference_time_sec: 160.0,
            object_y_world_coordinates: [
              1.1609103406000716, -1.4960663163303418, -0.3284902809471013,
            ],
            object_y_projected_pixel: [1285.3333977071366, 717.420374120453],
            object_y_normalized_projected_pixel: [
              0.9128788335988186, 0.509531515710549,
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
            "At the current time <TIME 00:02:40.0 video 1>, consider the pair of scissors that was moved earlier. Using its last known position to infer its current location, and using the current position of the cooling rack2 (marked in red) in the current frame, how far is the pair of scissors from the cooling rack2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "d98e6f99871f9337",
            object_x_name: "pair of scissors",
            object_x_reference_time_sec: 160.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "acd29b44bb88be3c",
            object_y_name: "cooling rack2",
            object_y_pixel: [1285.3333977071366, 717.420374120453],
            object_y_normalized_projected_pixel: [
              0.9128788335988186, 0.509531515710549,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.8630979430556182, 0.9080783227687567, -1.3186655174421258,
            ],
            distance_m: 1.8189071022128278,
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
  oos_staged_h2p0_10: {
    inputs: {
      "video 1": {
        id: "P04-20240414-162242",
      },
    },
    video_id: "P04-20240414-162242",
    object_a_assoc_id: "40c466381e64904e",
    object_a_name: "lid",
    query_time_sec: 181.0,
    query_time_in_clip_sec: 181.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 181.0,
    clip_duration_sec: 181.0,
    horizon_sec: 2.0,
    generation_info: {
      video_id: "P04-20240414-162242",
      assoc_id: "40c466381e64904e",
      object_name: "lid",
      query_time_sec: 181.0,
      oos_span_start_sec: 179.0,
      oos_span_end_sec: 182.0,
      oos_duration_sec: 3.0,
      horizon_sec: 2.0,
      fixture_at_query: "P04_counter.002",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 181.0,
      clip_duration_sec: 181.0,
      anchor_assoc_id: "acd29b44bb88be3c",
      anchor_name: "cooling rack2",
      anchor_projected_pixel: [1178.0132795518143, 585.0914974456124],
      anchor_world_coordinates: [
        1.1609103406000716, -1.4960663163303418, -0.3284902809471013,
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
          "At the current time <TIME 00:03:01.0 video 1>, is the previously moved lid visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1301.286494239635, 1282.6264843263739],
          camera_coordinates: [
            0.4974536886508335, 0.4734446291686633, 0.29228211169071006,
          ],
          frame_index: 1496,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:55.0 video 1>; Point=(0.2338, 0.4493)",
          "<TIME 00:02:56.0 video 1>; Point=(0.0473, 0.5587)",
          "<TIME 00:02:57.0 video 1>; Point=(0.3971, 0.5993)",
          "<TIME 00:02:58.0 video 1>; Point=(0.6932, 0.6504)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 178.0,
          sampled_last_visible_time_in_clip_sec: 178.0,
          sampled_last_visible_time_token: "<TIME 00:02:58.0 video 1>",
          projected_pixel: [976.0280392464877, 915.7256656799254],
          normalized_projected_pixel: [0.6932017324193804, 0.6503733421022198],
          camera_coordinates: [
            0.3169933774630319, 0.23244114872241273, 0.6936706327014094,
          ],
          frame_index: 1496,
          status: "in_view",
          fixture: "P04_counter.002",
          world_coordinates: [
            0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 175.0,
              time_token: "<TIME 00:02:55.0 video 1>",
              projected_pixel: [329.1468641227562, 632.5506066018033],
              normalized_projected_pixel: [
                0.23376907963263935, 0.4492546921887808,
              ],
              camera_coordinates: [
                -0.35592642850637674, -0.07906446699879105, 0.5612372554610352,
              ],
              frame_index: 1496,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 176.0,
              time_token: "<TIME 00:02:56.0 video 1>",
              projected_pixel: [66.65252994871162, 786.6794879647393],
              normalized_projected_pixel: [
                0.04733844456584632, 0.5587212272476841,
              ],
              camera_coordinates: [
                -0.5149320182210176, 0.05783515240368492, 0.4149934746013562,
              ],
              frame_index: 1496,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 177.0,
              time_token: "<TIME 00:02:57.0 video 1>",
              projected_pixel: [559.1427632718777, 843.7590257711693],
              normalized_projected_pixel: [
                0.39711843982377676, 0.5992606717124782,
              ],
              camera_coordinates: [
                -0.1824486526718921, 0.16206464695912842, 0.7709567162805488,
              ],
              frame_index: 1496,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 178.0,
              time_token: "<TIME 00:02:58.0 video 1>",
              projected_pixel: [976.0280392464877, 915.7256656799254],
              normalized_projected_pixel: [
                0.6932017324193804, 0.6503733421022198,
              ],
              camera_coordinates: [
                0.3169933774630319, 0.23244114872241273, 0.6936706327014094,
              ],
              frame_index: 1496,
              status: "in_view",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
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
          "<TIME 00:00:49.9 video 1>; Point=(0.5131, 0.7301)",
          "<TIME 00:00:50.0 video 1>; Point=(0.4996, 0.7719)",
          "<TIME 00:00:51.0 video 1>; Point=(-0.8201, 3.0614)",
        ],
        answer_metadata: {
          last_placement_time_sec: 49.86666666666667,
          last_placement_time_in_clip_sec: 49.86666666666667,
          last_placement_time_token: "<TIME 00:00:49.9 video 1>",
          projected_pixel: [722.428105088197, 1028.0511148121946],
          normalized_projected_pixel: [0.5130881428183217, 0.7301499394972972],
          camera_coordinates: [
            0.01569795777541305, 0.25555967346022646, 0.4911429616503249,
          ],
          frame_index: 1496,
          status: "last_past_track_end",
          fixture: "P04_counter.002",
          world_coordinates: [
            0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 49.86666666666667,
              time_token: "<TIME 00:00:49.9 video 1>",
              projected_pixel: [722.428105088197, 1028.0511148121946],
              normalized_projected_pixel: [
                0.5130881428183217, 0.7301499394972972,
              ],
              camera_coordinates: [
                0.01569795777541305, 0.25555967346022646, 0.4911429616503249,
              ],
              frame_index: 1496,
              status: "last_past_track_end",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 50.0,
              time_token: "<TIME 00:00:50.0 video 1>",
              projected_pixel: [703.5006682680021, 1086.8685164816036],
              normalized_projected_pixel: [
                0.4996453609857969, 0.7719236622738662,
              ],
              camera_coordinates: [
                0.00016003987989832158, 0.2973984169160404, 0.4741162686154826,
              ],
              frame_index: 1500,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 51.0,
              time_token: "<TIME 00:00:51.0 video 1>",
              projected_pixel: [-1154.6753801427285, 4310.521089103676],
              normalized_projected_pixel: [
                -0.8200819461240969, 3.061449637147497,
              ],
              camera_coordinates: [
                -0.28162176885237455, 0.6137605499944068, 0.10422518769103417,
              ],
              frame_index: 1530,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P04_counter.002",
              world_coordinates: [
                0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
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
          "At the current time <TIME 00:03:01.0 video 1>, based on the last known position of the lid that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the hob and the sink",
          "counter area beside the hob and close to the door",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 49.86666666666667,
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
            "At the current time <TIME 00:03:01.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, in which direction is the lid from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 181.0,
            camera_coordinates: [
              0.4974536886508335, 0.4734446291686633, 0.29228211169071006,
            ],
            world_coordinates: [
              0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.4974536886508335,
              z: 0.29228211169071006,
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
            "At the current time <TIME 00:03:01.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the cooling rack2 (marked in red) in the current frame, where is the lid relative to cooling rack2 from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "40c466381e64904e",
            object_x_name: "lid",
            object_x_reference_time_sec: 181.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              0.8384000805571679, -0.8604046517069297, -0.5248581328083677,
            ],
            object_x_camera_coordinates: [
              0.4974536886508335, 0.4734446291686633, 0.29228211169071006,
            ],
            object_y_assoc_id: "acd29b44bb88be3c",
            object_y_name: "cooling rack2",
            object_y_reference_time_sec: 181.0,
            object_y_world_coordinates: [
              1.1609103406000716, -1.4960663163303418, -0.3284902809471013,
            ],
            object_y_projected_pixel: [1178.0132795518143, 585.0914974456124],
            object_y_normalized_projected_pixel: [
              0.8366571587725954, 0.41554793852671335,
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
            "At the current time <TIME 00:03:01.0 video 1>, consider the lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the cooling rack2 (marked in red) in the current frame, how far is the lid from the cooling rack2: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "40c466381e64904e",
            object_x_name: "lid",
            object_x_reference_time_sec: 181.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "acd29b44bb88be3c",
            object_y_name: "cooling rack2",
            object_y_pixel: [1178.0132795518143, 585.0914974456124],
            object_y_normalized_projected_pixel: [
              0.8366571587725954, 0.41554793852671335,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.06822395807663623, 0.62888706058682, -0.38273425443796305,
            ],
            distance_m: 0.7393503587267383,
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
  id: "P04-20240414-162242",
  label: "P04-20240414-162242",
  sampledUrl: "https://youtu.be/jZDL1oNv-rc",
  fullUrl: "https://youtu.be/d4ksz-FHMXg",
  duration: 220,
  trajectory: TRAJECTORY,
  rawJson: { TRAJECTORY },
};

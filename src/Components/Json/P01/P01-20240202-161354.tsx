import type { TrajectoryData, VideoEntry } from "../Types";

const TRAJECTORY: Record<string, TrajectoryData> = {
  oos_staged_h5p0_0: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "2446996a209d953b",
    object_a_name: "food processor",
    query_time_sec: 36.0,
    query_time_in_clip_sec: 36.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 36.0,
    clip_duration_sec: 36.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "2446996a209d953b",
      object_name: "food processor",
      query_time_sec: 36.0,
      oos_span_start_sec: 31.0,
      oos_span_end_sec: 143.0,
      oos_duration_sec: 112.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 36.0,
      clip_duration_sec: 36.0,
      anchor_assoc_id: "ef5986951d96d648",
      anchor_name: "mug",
      anchor_projected_pixel: [1194.7132193907378, 1168.422662046585],
      anchor_world_coordinates: [
        -1.1236786751020007, -3.752970022663024, -0.5494143305167961,
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
          "At the current time <TIME 00:00:36.0 video 1>, is the previously moved food processor visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.7164534795087854, 0.7480772594527361, -0.45996571073176096,
          ],
          frame_index: 693,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:27.0 video 1>; Point=(0.527, 0.8672)",
          "<TIME 00:00:29.0 video 1>; Point=(0.5886, 0.9576)",
          "<TIME 00:00:30.0 video 1>; Point=(0.4989, 0.9977)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 30.0,
          sampled_last_visible_time_in_clip_sec: 30.0,
          sampled_last_visible_time_token: "<TIME 00:00:30.0 video 1>",
          projected_pixel: [702.5039328055775, 1404.7948054325584],
          normalized_projected_pixel: [0.49893745227668856, 0.9977235834038057],
          camera_coordinates: [
            0.002891554223455106, 0.46156422251660784, 0.3165107723435545,
          ],
          frame_index: 693,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 27.0,
              time_token: "<TIME 00:00:27.0 video 1>",
              projected_pixel: [742.0182533477234, 1220.987014666448],
              normalized_projected_pixel: [
                0.5270016003890081, 0.8671782774619659,
              ],
              camera_coordinates: [
                0.03174645998953585, 0.3740470147704039, 0.41034630740747646,
              ],
              frame_index: 693,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 29.0,
              time_token: "<TIME 00:00:29.0 video 1>",
              projected_pixel: [828.6870795188952, 1348.3661015120133],
              normalized_projected_pixel: [
                0.5885561644310335, 0.9576463789147822,
              ],
              camera_coordinates: [
                0.08950832062187564, 0.440558393385699, 0.35046916152835106,
              ],
              frame_index: 693,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 30.0,
              time_token: "<TIME 00:00:30.0 video 1>",
              projected_pixel: [702.5039328055775, 1404.7948054325584],
              normalized_projected_pixel: [
                0.49893745227668856, 0.9977235834038057,
              ],
              camera_coordinates: [
                0.002891554223455106, 0.46156422251660784, 0.3165107723435545,
              ],
              frame_index: 693,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
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
          "<TIME 00:00:23.1 video 1>; Point=(0.317, 0.8573)",
          "<TIME 00:00:24.0 video 1>; Point=(0.5811, 0.7705)",
          "<TIME 00:00:25.0 video 1>; Point=(0.678, 0.7931)",
          "<TIME 00:00:26.0 video 1>; Point=(0.4657, 0.8842)",
        ],
        answer_metadata: {
          last_placement_time_sec: 23.1,
          last_placement_time_in_clip_sec: 23.1,
          last_placement_time_token: "<TIME 00:00:23.1 video 1>",
          projected_pixel: [446.34994237060675, 1207.0895857584717],
          normalized_projected_pixel: [0.3170099022518514, 0.8573079444307328],
          camera_coordinates: [
            -0.1746454529678747, 0.3473803310285428, 0.38202734619127354,
          ],
          frame_index: 693,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 23.1,
              time_token: "<TIME 00:00:23.1 video 1>",
              projected_pixel: [446.34994237060675, 1207.0895857584717],
              normalized_projected_pixel: [
                0.3170099022518514, 0.8573079444307328,
              ],
              camera_coordinates: [
                -0.1746454529678747, 0.3473803310285428, 0.38202734619127354,
              ],
              frame_index: 693,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 24.0,
              time_token: "<TIME 00:00:24.0 video 1>",
              projected_pixel: [818.2138764961687, 1084.8953487473564],
              normalized_projected_pixel: [
                0.5811178100114834, 0.7705222647353384,
              ],
              camera_coordinates: [
                0.09769716073549439, 0.3090365367913537, 0.4834127270188273,
              ],
              frame_index: 720,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 25.0,
              time_token: "<TIME 00:00:25.0 video 1>",
              projected_pixel: [954.6659272851684, 1116.6701249696914],
              normalized_projected_pixel: [
                0.6780297779013981, 0.7930895773932467,
              ],
              camera_coordinates: [
                0.20152054173007738, 0.3227937867311299, 0.4512065183963019,
              ],
              frame_index: 750,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 26.0,
              time_token: "<TIME 00:00:26.0 video 1>",
              projected_pixel: [655.7729693482936, 1244.9022272593083],
              normalized_projected_pixel: [
                0.46574784754850396, 0.884163513678486,
              ],
              camera_coordinates: [
                -0.0293251104869654, 0.37170704657031256, 0.38482210252822013,
              ],
              frame_index: 780,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
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
          "At the current time <TIME 00:00:36.0 video 1>, based on the last known position of the food processor that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area below the boiler",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 23.1,
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
            "At the current time <TIME 00:00:36.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the food processor from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 36.0,
            camera_coordinates: [
              0.7164534795087854, 0.7480772594527361, -0.45996571073176096,
            ],
            world_coordinates: [
              -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.7164534795087854,
              z: -0.45996571073176096,
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
            "At the current time <TIME 00:00:36.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the mug (marked in red) in the current frame, where is the food processor relative to mug from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "2446996a209d953b",
            object_x_name: "food processor",
            object_x_reference_time_sec: 36.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
            ],
            object_x_camera_coordinates: [
              0.7164534795087854, 0.7480772594527361, -0.45996571073176096,
            ],
            object_y_assoc_id: "ef5986951d96d648",
            object_y_name: "mug",
            object_y_reference_time_sec: 36.0,
            object_y_world_coordinates: [
              -1.1236786751020007, -3.752970022663024, -0.5494143305167961,
            ],
            object_y_projected_pixel: [1194.7132193907378, 1168.422662046585],
            object_y_normalized_projected_pixel: [
              0.8485179114991035, 0.8298456406580859,
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
            "At the current time <TIME 00:00:36.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the mug (marked in red) in the current frame, how far is the food processor from the mug: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "2446996a209d953b",
            object_x_name: "food processor",
            object_x_reference_time_sec: 36.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "ef5986951d96d648",
            object_y_name: "mug",
            object_y_pixel: [1194.7132193907378, 1168.422662046585],
            object_y_normalized_projected_pixel: [
              0.8485179114991035, 0.8298456406580859,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.3381780140107853, 0.3956946852153156, -0.8387653954787213,
            ],
            distance_m: 0.987150465593013,
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
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "66e249fe8f75b64e",
    object_a_name: "plastic box of tomatoes",
    query_time_sec: 151.0,
    query_time_in_clip_sec: 151.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 151.0,
    clip_duration_sec: 151.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "66e249fe8f75b64e",
      object_name: "plastic box of tomatoes",
      query_time_sec: 151.0,
      oos_span_start_sec: 146.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 181.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_fridgefreezer.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 151.0,
      clip_duration_sec: 151.0,
      anchor_assoc_id: "6ae79daa7ca78194",
      anchor_name: "pasta box",
      anchor_projected_pixel: [716.2456906904002, 1179.2251551495135],
      anchor_world_coordinates: [
        -0.15881868280053146, -2.6383096969256727, -0.5124273939696613,
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
          "At the current time <TIME 00:02:31.0 video 1>, is the previously moved plastic box of tomatoes visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.448868434443823, 0.17241646863414528, -0.49262392302989766,
          ],
          frame_index: 4233,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The plastic box of tomatoes was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:22.0 video 1>; Point=(0.6325, 0.383)",
          "<TIME 00:02:24.0 video 1>; Point=(0.0284, 0.5707)",
          "<TIME 00:02:25.0 video 1>; Point=(0.3383, 0.6938)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 145.0,
          sampled_last_visible_time_in_clip_sec: 145.0,
          sampled_last_visible_time_token: "<TIME 00:02:25.0 video 1>",
          projected_pixel: [476.3045976614603, 976.8225604086888],
          normalized_projected_pixel: [0.3382845153845599, 0.6937660230175346],
          camera_coordinates: [
            -0.21798365326423796, 0.26535436620970476, 0.5879920227711217,
          ],
          frame_index: 4233,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_fridgefreezer.001",
          world_coordinates: [
            -0.43788747264777833, -0.8715417302478691, -0.17962812002237724,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 142.0,
              time_token: "<TIME 00:02:22.0 video 1>",
              projected_pixel: [890.5151812209547, 539.2315285245214],
              normalized_projected_pixel: [
                0.6324681684807917, 0.3829769378725294,
              ],
              camera_coordinates: [
                0.1062399695113514, -0.0925410070435993, 0.33823692444388237,
              ],
              frame_index: 4233,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.43788747264777833, -0.8715417302478691, -0.17962812002237724,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 144.0,
              time_token: "<TIME 00:02:24.0 video 1>",
              projected_pixel: [40.037549987115085, 803.5340194499832],
              normalized_projected_pixel: [
                0.0284357599340306, 0.5706917751775449,
              ],
              camera_coordinates: [
                -0.47764165993380425, 0.07089128187464327, 0.36504414257128265,
              ],
              frame_index: 4233,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.43788747264777833, -0.8715417302478691, -0.17962812002237724,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 145.0,
              time_token: "<TIME 00:02:25.0 video 1>",
              projected_pixel: [476.3045976614603, 976.8225604086888],
              normalized_projected_pixel: [
                0.3382845153845599, 0.6937660230175346,
              ],
              camera_coordinates: [
                -0.21798365326423796, 0.26535436620970476, 0.5879920227711217,
              ],
              frame_index: 4233,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.43788747264777833, -0.8715417302478691, -0.17962812002237724,
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
          "The plastic box of tomatoes was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:21.1 video 1>; Point=(0.6343, 0.454)",
          "<TIME 00:02:22.0 video 1>; Point=(0.6325, 0.383)",
          "<TIME 00:02:23.0 video 1>; Point=(0.0035, 0.7123)",
          "<TIME 00:02:24.0 video 1>; Point=(0.0284, 0.5707)",
        ],
        answer_metadata: {
          last_placement_time_sec: 141.1,
          last_placement_time_in_clip_sec: 141.1,
          last_placement_time_token: "<TIME 00:02:21.1 video 1>",
          projected_pixel: [893.0752149522373, 639.2158525366774],
          normalized_projected_pixel: [0.6342863742558503, 0.45398853163116293],
          camera_coordinates: [
            0.11501364523044355, -0.03972506923677771, 0.3628016746672033,
          ],
          frame_index: 4233,
          status: "last_past_track_end",
          fixture: "P01_fridgefreezer.001",
          world_coordinates: [
            -0.43788747264777833, -0.8715417302478691, -0.17962812002237724,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 141.1,
              time_token: "<TIME 00:02:21.1 video 1>",
              projected_pixel: [893.0752149522373, 639.2158525366774],
              normalized_projected_pixel: [
                0.6342863742558503, 0.45398853163116293,
              ],
              camera_coordinates: [
                0.11501364523044355, -0.03972506923677771, 0.3628016746672033,
              ],
              frame_index: 4233,
              status: "last_past_track_end",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.43788747264777833, -0.8715417302478691, -0.17962812002237724,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 142.0,
              time_token: "<TIME 00:02:22.0 video 1>",
              projected_pixel: [890.5151812209547, 539.2315285245214],
              normalized_projected_pixel: [
                0.6324681684807917, 0.3829769378725294,
              ],
              camera_coordinates: [
                0.1062399695113514, -0.0925410070435993, 0.33823692444388237,
              ],
              frame_index: 4260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.43788747264777833, -0.8715417302478691, -0.17962812002237724,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [4.890179791058699, 1002.8568224033238],
              normalized_projected_pixel: [
                0.0034731390561496445, 0.7122562659114515,
              ],
              camera_coordinates: [
                -0.3178451676646, 0.13626348142423295, 0.18671924188741135,
              ],
              frame_index: 4290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.43788747264777833, -0.8715417302478691, -0.17962812002237724,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 144.0,
              time_token: "<TIME 00:02:24.0 video 1>",
              projected_pixel: [40.037549987115085, 803.5340194499832],
              normalized_projected_pixel: [
                0.0284357599340306, 0.5706917751775449,
              ],
              camera_coordinates: [
                -0.47764165993380425, 0.07089128187464327, 0.36504414257128265,
              ],
              frame_index: 4320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.43788747264777833, -0.8715417302478691, -0.17962812002237724,
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
          "At the current time <TIME 00:02:31.0 video 1>, based on the last known position of the plastic box of tomatoes that was moved earlier, which fixture type is closest to it?",
        choices: ["drawer", "shelf", "hob", "counter", "fridgefreezer"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 141.1,
          correct_fixture: "fridgefreezer",
          display_correct_answer: "fridgefreezer",
          raw_correct_fixture: "P01_fridgefreezer.001",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hob",
            "shelf",
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
            "At the current time <TIME 00:02:31.0 video 1>, consider the plastic box of tomatoes that was moved earlier. Using its last known position to infer its current location, in which direction is the plastic box of tomatoes from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 151.0,
            camera_coordinates: [
              -1.448868434443823, 0.17241646863414528, -0.49262392302989766,
            ],
            world_coordinates: [
              -0.43788747264777833, -0.8715417302478691, -0.17962812002237724,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.448868434443823,
              z: -0.49262392302989766,
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
            "At the current time <TIME 00:02:31.0 video 1>, consider the plastic box of tomatoes that was moved earlier. Using its last known position to infer its current location, and using the current position of the pasta box (marked in red) in the current frame, where is the plastic box of tomatoes relative to pasta box from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "66e249fe8f75b64e",
            object_x_name: "plastic box of tomatoes",
            object_x_reference_time_sec: 151.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.43788747264777833, -0.8715417302478691, -0.17962812002237724,
            ],
            object_x_camera_coordinates: [
              -1.448868434443823, 0.17241646863414528, -0.49262392302989766,
            ],
            object_y_assoc_id: "6ae79daa7ca78194",
            object_y_name: "pasta box",
            object_y_reference_time_sec: 151.0,
            object_y_world_coordinates: [
              -0.15881868280053146, -2.6383096969256727, -0.5124273939696613,
            ],
            object_y_projected_pixel: [716.2456906904002, 1179.2251551495135],
            object_y_normalized_projected_pixel: [
              0.5086972235017048, 0.8375178658732341,
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
            "At the current time <TIME 00:02:31.0 video 1>, consider the plastic box of tomatoes that was moved earlier. Using its last known position to infer its current location, and using the current position of the pasta box (marked in red) in the current frame, how far is the plastic box of tomatoes from the pasta box: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "66e249fe8f75b64e",
            object_x_name: "plastic box of tomatoes",
            object_x_reference_time_sec: 151.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "6ae79daa7ca78194",
            object_y_name: "pasta box",
            object_y_pixel: [716.2456906904002, 1179.2251551495135],
            object_y_normalized_projected_pixel: [
              0.5086972235017048, 0.8375178658732341,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.4658812549849227, -0.27814555395073964, -1.0411200657881545,
            ],
            distance_m: 1.8193690648918563,
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
  oos_staged_h5p0_2: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "d3adc7ccca10c21f",
    object_a_name: "yoghurt",
    query_time_sec: 151.0,
    query_time_in_clip_sec: 151.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 151.0,
    clip_duration_sec: 151.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "d3adc7ccca10c21f",
      object_name: "yoghurt",
      query_time_sec: 151.0,
      oos_span_start_sec: 146.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 181.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_fridgefreezer.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 151.0,
      clip_duration_sec: 151.0,
      anchor_assoc_id: "6712c70397c667be",
      anchor_name: "kettle",
      anchor_projected_pixel: [1171.3995256680544, 943.486774158179],
      anchor_world_coordinates: [
        -0.14996557774979638, -3.4164436324534586, -0.4255055620096967,
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
          "At the current time <TIME 00:02:31.0 video 1>, is the previously moved yoghurt visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.2793200480302482, -0.011811614845014168, -0.4443973090948784,
          ],
          frame_index: 4202,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The yoghurt was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:22.0 video 1>; Point=(0.8787, 0.1886)",
          "<TIME 00:02:23.0 video 1>; Point=(0.2207, 0.4273)",
          "<TIME 00:02:24.0 video 1>; Point=(0.1728, 0.3803)",
          "<TIME 00:02:25.0 video 1>; Point=(0.4415, 0.5556)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 145.0,
          sampled_last_visible_time_in_clip_sec: 145.0,
          sampled_last_visible_time_token: "<TIME 00:02:25.0 video 1>",
          projected_pixel: [621.5729346394085, 782.2253493534735],
          normalized_projected_pixel: [0.4414580501700344, 0.5555577765294556],
          camera_coordinates: [
            -0.0909818440789334, 0.08933702559470268, 0.7217862103727142,
          ],
          frame_index: 4202,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_fridgefreezer.001",
          world_coordinates: [
            -0.4291987106299118, -1.0453596040497142, 0.006716454707049999,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 142.0,
              time_token: "<TIME 00:02:22.0 video 1>",
              projected_pixel: [1237.236970063837, 265.5824837611158],
              normalized_projected_pixel: [
                0.8787194389657933, 0.18862392312579246,
              ],
              camera_coordinates: [
                0.298979373511267, -0.2441367079074626, 0.2683605049961193,
              ],
              frame_index: 4202,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4291987106299118, -1.0453596040497142, 0.006716454707049999,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [310.68252981672094, 601.7056684137677],
              normalized_projected_pixel: [
                0.2206552058357393, 0.42734777586205097,
              ],
              camera_coordinates: [
                -0.20450573756953883, -0.05511061908285979, 0.31138910837613537,
              ],
              frame_index: 4202,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4291987106299118, -1.0453596040497142, 0.006716454707049999,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 144.0,
              time_token: "<TIME 00:02:24.0 video 1>",
              projected_pixel: [243.27853360929635, 535.5201515426661],
              normalized_projected_pixel: [
                0.1727830494384207, 0.3803410167206435,
              ],
              camera_coordinates: [
                -0.3673658375755191, -0.1377240753205055, 0.4616429216268835,
              ],
              frame_index: 4202,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4291987106299118, -1.0453596040497142, 0.006716454707049999,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 145.0,
              time_token: "<TIME 00:02:25.0 video 1>",
              projected_pixel: [621.5729346394085, 782.2253493534735],
              normalized_projected_pixel: [
                0.4414580501700344, 0.5555577765294556,
              ],
              camera_coordinates: [
                -0.0909818440789334, 0.08933702559470268, 0.7217862103727142,
              ],
              frame_index: 4202,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4291987106299118, -1.0453596040497142, 0.006716454707049999,
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
          "The yoghurt was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:20.1 video 1>; Point=(0.5685, 0.7197)",
          "<TIME 00:02:21.0 video 1>; Point=(0.8177, 0.2675)",
          "<TIME 00:02:22.0 video 1>; Point=(0.8787, 0.1886)",
          "<TIME 00:02:23.0 video 1>; Point=(0.2207, 0.4273)",
        ],
        answer_metadata: {
          last_placement_time_sec: 140.06666666666666,
          last_placement_time_in_clip_sec: 140.06666666666666,
          last_placement_time_token: "<TIME 00:02:20.1 video 1>",
          projected_pixel: [800.465066534469, 1013.3511186897409],
          normalized_projected_pixel: [0.5685121211182308, 0.7197096013421456],
          camera_coordinates: [
            0.061947518769887244, 0.18676383527542573, 0.3672612050003441,
          ],
          frame_index: 4202,
          status: "last_past_track_end",
          fixture: "P01_fridgefreezer.001",
          world_coordinates: [
            -0.4291987106299118, -1.0453596040497142, 0.006716454707049999,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 140.06666666666666,
              time_token: "<TIME 00:02:20.1 video 1>",
              projected_pixel: [800.465066534469, 1013.3511186897409],
              normalized_projected_pixel: [
                0.5685121211182308, 0.7197096013421456,
              ],
              camera_coordinates: [
                0.061947518769887244, 0.18676383527542573, 0.3672612050003441,
              ],
              frame_index: 4202,
              status: "last_past_track_end",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4291987106299118, -1.0453596040497142, 0.006716454707049999,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 141.0,
              time_token: "<TIME 00:02:21.0 video 1>",
              projected_pixel: [1151.3426790613435, 376.67593376680725],
              normalized_projected_pixel: [
                0.8177149709242496, 0.2675255211411983,
              ],
              camera_coordinates: [
                0.25773987912052243, -0.18735887805541743, 0.314524063988757,
              ],
              frame_index: 4230,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4291987106299118, -1.0453596040497142, 0.006716454707049999,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 142.0,
              time_token: "<TIME 00:02:22.0 video 1>",
              projected_pixel: [1237.236970063837, 265.5824837611158],
              normalized_projected_pixel: [
                0.8787194389657933, 0.18862392312579246,
              ],
              camera_coordinates: [
                0.298979373511267, -0.2441367079074626, 0.2683605049961193,
              ],
              frame_index: 4260,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4291987106299118, -1.0453596040497142, 0.006716454707049999,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [310.68252981672094, 601.7056684137677],
              normalized_projected_pixel: [
                0.2206552058357393, 0.42734777586205097,
              ],
              camera_coordinates: [
                -0.20450573756953883, -0.05511061908285979, 0.31138910837613537,
              ],
              frame_index: 4290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4291987106299118, -1.0453596040497142, 0.006716454707049999,
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
          "At the current time <TIME 00:02:31.0 video 1>, based on the last known position of the yoghurt that was moved earlier, which fixture type is closest to it?",
        choices: ["counter", "shelf", "drawer", "sink", "fridgefreezer"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 140.06666666666666,
          correct_fixture: "fridgefreezer",
          display_correct_answer: "fridgefreezer",
          raw_correct_fixture: "P01_fridgefreezer.001",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hob",
            "shelf",
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
            "At the current time <TIME 00:02:31.0 video 1>, consider the yoghurt that was moved earlier. Using its last known position to infer its current location, in which direction is the yoghurt from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 151.0,
            camera_coordinates: [
              -1.2793200480302482, -0.011811614845014168, -0.4443973090948784,
            ],
            world_coordinates: [
              -0.4291987106299118, -1.0453596040497142, 0.006716454707049999,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.2793200480302482,
              z: -0.4443973090948784,
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
            "At the current time <TIME 00:02:31.0 video 1>, consider the yoghurt that was moved earlier. Using its last known position to infer its current location, and using the current position of the kettle (marked in red) in the current frame, where is the yoghurt relative to kettle from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "d3adc7ccca10c21f",
            object_x_name: "yoghurt",
            object_x_reference_time_sec: 151.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4291987106299118, -1.0453596040497142, 0.006716454707049999,
            ],
            object_x_camera_coordinates: [
              -1.2793200480302482, -0.011811614845014168, -0.4443973090948784,
            ],
            object_y_assoc_id: "6712c70397c667be",
            object_y_name: "kettle",
            object_y_reference_time_sec: 151.0,
            object_y_world_coordinates: [
              -0.14996557774979638, -3.4164436324534586, -0.4255055620096967,
            ],
            object_y_projected_pixel: [1171.3995256680544, 943.486774158179],
            object_y_normalized_projected_pixel: [
              0.8319598903892431, 0.6700900384646157,
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
            "At the current time <TIME 00:02:31.0 video 1>, consider the yoghurt that was moved earlier. Using its last known position to infer its current location, and using the current position of the kettle (marked in red) in the current frame, how far is the yoghurt from the kettle: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "d3adc7ccca10c21f",
            object_x_name: "yoghurt",
            object_x_reference_time_sec: 151.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "6712c70397c667be",
            object_y_name: "kettle",
            object_y_pixel: [1171.3995256680544, 943.486774158179],
            object_y_normalized_projected_pixel: [
              0.8319598903892431, 0.6700900384646157,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -2.007332591976118, -0.3771395686084305, -1.309659533987499,
            ],
            distance_m: 2.426278319563538,
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
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "fa029002e77523d0",
    object_a_name: "plastic container of grapes",
    query_time_sec: 151.0,
    query_time_in_clip_sec: 151.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 151.0,
    clip_duration_sec: 151.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "fa029002e77523d0",
      object_name: "plastic container of grapes",
      query_time_sec: 151.0,
      oos_span_start_sec: 146.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 181.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_fridgefreezer.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 151.0,
      clip_duration_sec: 151.0,
      anchor_assoc_id: "733a851847a89247",
      anchor_name: "parmesan cheese",
      anchor_projected_pixel: [919.9167819027465, 1257.6849121364476],
      anchor_world_coordinates: [
        -0.28795471760741176, -2.7929205596577495, -0.5530432441648793,
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
          "At the current time <TIME 00:02:31.0 video 1>, is the previously moved plastic container of grapes visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -1.3916671224513715, 0.26081364352805775, -0.47252274173362574,
          ],
          frame_index: 4261,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The plastic container of grapes was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:24.0 video 1>; Point=(0.103, 0.6388)",
          "<TIME 00:02:25.0 video 1>; Point=(0.386, 0.7485)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 145.0,
          sampled_last_visible_time_in_clip_sec: 145.0,
          sampled_last_visible_time_token: "<TIME 00:02:25.0 video 1>",
          projected_pixel: [543.4541747161509, 1053.9239839508018],
          normalized_projected_pixel: [0.3859759763609026, 0.74852555678324],
          camera_coordinates: [
            -0.1571598229208102, 0.35237540291808406, 0.6027537619959255,
          ],
          frame_index: 4261,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_fridgefreezer.001",
          world_coordinates: [
            -0.4599823342942417, -0.9321242926363082, -0.2652533402303441,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 144.0,
              time_token: "<TIME 00:02:24.0 video 1>",
              projected_pixel: [144.9856093141841, 899.3878241568905],
              normalized_projected_pixel: [
                0.10297273388791485, 0.6387697614750643,
              ],
              camera_coordinates: [
                -0.42663210967774423, 0.1491354735499303, 0.41763673106190313,
              ],
              frame_index: 4261,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4599823342942417, -0.9321242926363082, -0.2652533402303441,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 145.0,
              time_token: "<TIME 00:02:25.0 video 1>",
              projected_pixel: [543.4541747161509, 1053.9239839508018],
              normalized_projected_pixel: [
                0.3859759763609026, 0.74852555678324,
              ],
              camera_coordinates: [
                -0.1571598229208102, 0.35237540291808406, 0.6027537619959255,
              ],
              frame_index: 4261,
              status: "observed_visible_in_open_fixture",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4599823342942417, -0.9321242926363082, -0.2652533402303441,
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
          "The plastic container of grapes was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:22.0 video 1>; Point=(0.6806, 0.5004)",
          "<TIME 00:02:23.0 video 1>; Point=(0.1062, 0.8211)",
          "<TIME 00:02:24.0 video 1>; Point=(0.103, 0.6388)",
          "<TIME 00:02:25.0 video 1>; Point=(0.386, 0.7485)",
        ],
        answer_metadata: {
          last_placement_time_sec: 142.03333333333333,
          last_placement_time_in_clip_sec: 142.03333333333333,
          last_placement_time_token: "<TIME 00:02:22.0 video 1>",
          projected_pixel: [958.2168678818533, 704.5963335500729],
          normalized_projected_pixel: [0.6805517527569981, 0.5004235323509041],
          camera_coordinates: [
            0.1507714661364319, -0.0009949598965247608, 0.35464513559846045,
          ],
          frame_index: 4261,
          status: "last_past_track_end",
          fixture: "P01_fridgefreezer.001",
          world_coordinates: [
            -0.4599823342942417, -0.9321242926363082, -0.2652533402303441,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 142.03333333333333,
              time_token: "<TIME 00:02:22.0 video 1>",
              projected_pixel: [958.2168678818533, 704.5963335500729],
              normalized_projected_pixel: [
                0.6805517527569981, 0.5004235323509041,
              ],
              camera_coordinates: [
                0.1507714661364319, -0.0009949598965247608, 0.35464513559846045,
              ],
              frame_index: 4261,
              status: "last_past_track_end",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4599823342942417, -0.9321242926363082, -0.2652533402303441,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 143.0,
              time_token: "<TIME 00:02:23.0 video 1>",
              projected_pixel: [149.5177209124746, 1156.1719739071718],
              normalized_projected_pixel: [
                0.10619156314806434, 0.8211448678317982,
              ],
              camera_coordinates: [
                -0.27041452080645423, 0.22201126060388415, 0.2301676045350869,
              ],
              frame_index: 4290,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4599823342942417, -0.9321242926363082, -0.2652533402303441,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 144.0,
              time_token: "<TIME 00:02:24.0 video 1>",
              projected_pixel: [144.9856093141841, 899.3878241568905],
              normalized_projected_pixel: [
                0.10297273388791485, 0.6387697614750643,
              ],
              camera_coordinates: [
                -0.42663210967774423, 0.1491354735499303, 0.41763673106190313,
              ],
              frame_index: 4320,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4599823342942417, -0.9321242926363082, -0.2652533402303441,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 145.0,
              time_token: "<TIME 00:02:25.0 video 1>",
              projected_pixel: [543.4541747161509, 1053.9239839508018],
              normalized_projected_pixel: [
                0.3859759763609026, 0.74852555678324,
              ],
              camera_coordinates: [
                -0.1571598229208102, 0.35237540291808406, 0.6027537619959255,
              ],
              frame_index: 4350,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_fridgefreezer.001",
              world_coordinates: [
                -0.4599823342942417, -0.9321242926363082, -0.2652533402303441,
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
          "At the current time <TIME 00:02:31.0 video 1>, based on the last known position of the plastic container of grapes that was moved earlier, which fixture type is closest to it?",
        choices: ["sink", "dishwasher", "drawer", "counter", "fridgefreezer"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 142.03333333333333,
          correct_fixture: "fridgefreezer",
          display_correct_answer: "fridgefreezer",
          raw_correct_fixture: "P01_fridgefreezer.001",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hob",
            "shelf",
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
            "At the current time <TIME 00:02:31.0 video 1>, consider the plastic container of grapes that was moved earlier. Using its last known position to infer its current location, in which direction is the plastic container of grapes from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 151.0,
            camera_coordinates: [
              -1.3916671224513715, 0.26081364352805775, -0.47252274173362574,
            ],
            world_coordinates: [
              -0.4599823342942417, -0.9321242926363082, -0.2652533402303441,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -1.3916671224513715,
              z: -0.47252274173362574,
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
            "At the current time <TIME 00:02:31.0 video 1>, consider the plastic container of grapes that was moved earlier. Using its last known position to infer its current location, and using the current position of the parmesan cheese (marked in red) in the current frame, where is the plastic container of grapes relative to parmesan cheese from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "fa029002e77523d0",
            object_x_name: "plastic container of grapes",
            object_x_reference_time_sec: 151.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4599823342942417, -0.9321242926363082, -0.2652533402303441,
            ],
            object_x_camera_coordinates: [
              -1.3916671224513715, 0.26081364352805775, -0.47252274173362574,
            ],
            object_y_assoc_id: "733a851847a89247",
            object_y_name: "parmesan cheese",
            object_y_reference_time_sec: 151.0,
            object_y_world_coordinates: [
              -0.28795471760741176, -2.7929205596577495, -0.5530432441648793,
            ],
            object_y_projected_pixel: [919.9167819027465, 1257.6849121364476],
            object_y_normalized_projected_pixel: [
              0.653349987146837, 0.8932421250969088,
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
            "At the current time <TIME 00:02:31.0 video 1>, consider the plastic container of grapes that was moved earlier. Using its last known position to infer its current location, and using the current position of the parmesan cheese (marked in red) in the current frame, how far is the plastic container of grapes from the parmesan cheese: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "fa029002e77523d0",
            object_x_name: "plastic container of grapes",
            object_x_reference_time_sec: 151.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "733a851847a89247",
            object_y_name: "parmesan cheese",
            object_y_pixel: [919.9167819027465, 1257.6849121364476],
            object_y_normalized_projected_pixel: [
              0.653349987146837, 0.8932421250969088,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.5987031795797637, -0.2543901739152329, -0.9769406635448552,
            ],
            distance_m: 1.8907615600785126,
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
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "8cebaa57ebc85608",
    object_a_name: "food processing lid",
    query_time_sec: 203.0,
    query_time_in_clip_sec: 203.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 203.0,
    clip_duration_sec: 203.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "8cebaa57ebc85608",
      object_name: "food processing lid",
      query_time_sec: 203.0,
      oos_span_start_sec: 198.0,
      oos_span_end_sec: 253.0,
      oos_duration_sec: 55.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_shelf.005",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 203.0,
      clip_duration_sec: 203.0,
      anchor_assoc_id: "733a851847a89247",
      anchor_name: "parmesan cheese",
      anchor_projected_pixel: [1047.524749537829, 840.4686128499587],
      anchor_world_coordinates: [
        -0.18945456451591303, -2.7744082578368703, -0.5673310990587611,
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
          "At the current time <TIME 00:03:23.0 video 1>, is the previously moved food processing lid visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.48241563444443836, 0.8559652361706083, -0.9553730667458631,
          ],
          frame_index: 980,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The food processing lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:17.0 video 1>; Point=(0.9694, 0.3321)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 197.0,
          sampled_last_visible_time_in_clip_sec: 197.0,
          sampled_last_visible_time_token: "<TIME 00:03:17.0 video 1>",
          projected_pixel: [1364.9247177870566, 467.64478795344735],
          normalized_projected_pixel: [0.9694067597919436, 0.33213408235330066],
          camera_coordinates: [
            0.6851786016074326, -0.24469479818306894, 0.48630079429130335,
          ],
          frame_index: 980,
          status: "in_view",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 197.0,
              time_token: "<TIME 00:03:17.0 video 1>",
              projected_pixel: [1364.9247177870566, 467.64478795344735],
              normalized_projected_pixel: [
                0.9694067597919436, 0.33213408235330066,
              ],
              camera_coordinates: [
                0.6851786016074326, -0.24469479818306894, 0.48630079429130335,
              ],
              frame_index: 980,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
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
          "The food processing lid was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:32.7 video 1>; Point=(0.8742, 0.6459)",
        ],
        answer_metadata: {
          last_placement_time_sec: 32.666666666666664,
          last_placement_time_in_clip_sec: 32.666666666666664,
          last_placement_time_token: "<TIME 00:00:32.7 video 1>",
          projected_pixel: [1230.8615844516403, 909.4745235342416],
          normalized_projected_pixel: [0.8741914662298581, 0.6459336104646602],
          camera_coordinates: [
            0.4291946739274046, 0.16394647453153555, 0.44298225498258903,
          ],
          frame_index: 980,
          status: "last_past_track_end",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 32.666666666666664,
              time_token: "<TIME 00:00:32.7 video 1>",
              projected_pixel: [1230.8615844516403, 909.4745235342416],
              normalized_projected_pixel: [
                0.8741914662298581, 0.6459336104646602,
              ],
              camera_coordinates: [
                0.4291946739274046, 0.16394647453153555, 0.44298225498258903,
              ],
              frame_index: 980,
              status: "last_past_track_end",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
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
          "At the current time <TIME 00:03:23.0 video 1>, based on the last known position of the food processing lid that was moved earlier, which fixture type is closest to it?",
        choices: ["shelf", "hob", "sink", "dishwasher", "counter"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 32.666666666666664,
          correct_fixture: "shelf",
          display_correct_answer: "shelf",
          raw_correct_fixture: "P01_shelf.005",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hob",
            "shelf",
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
            "At the current time <TIME 00:03:23.0 video 1>, consider the food processing lid that was moved earlier. Using its last known position to infer its current location, in which direction is the food processing lid from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 203.0,
            camera_coordinates: [
              0.48241563444443836, 0.8559652361706083, -0.9553730667458631,
            ],
            world_coordinates: [
              -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.48241563444443836,
              z: -0.9553730667458631,
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
            "At the current time <TIME 00:03:23.0 video 1>, consider the food processing lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the parmesan cheese (marked in red) in the current frame, where is the food processing lid relative to parmesan cheese from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "8cebaa57ebc85608",
            object_x_name: "food processing lid",
            object_x_reference_time_sec: 203.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
            ],
            object_x_camera_coordinates: [
              0.48241563444443836, 0.8559652361706083, -0.9553730667458631,
            ],
            object_y_assoc_id: "733a851847a89247",
            object_y_name: "parmesan cheese",
            object_y_reference_time_sec: 203.0,
            object_y_world_coordinates: [
              -0.18945456451591303, -2.7744082578368703, -0.5673310990587611,
            ],
            object_y_projected_pixel: [1047.524749537829, 840.4686128499587],
            object_y_normalized_projected_pixel: [
              0.7439806459785717, 0.5969237307173002,
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
            "At the current time <TIME 00:03:23.0 video 1>, consider the food processing lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the parmesan cheese (marked in red) in the current frame, how far is the food processing lid from the parmesan cheese: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "8cebaa57ebc85608",
            object_x_name: "food processing lid",
            object_x_reference_time_sec: 203.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "733a851847a89247",
            object_y_name: "parmesan cheese",
            object_y_pixel: [1047.524749537829, 840.4686128499587],
            object_y_normalized_projected_pixel: [
              0.7439806459785717, 0.5969237307173002,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.05584697425928109, 0.6918937552958251, -1.6850172948557254,
            ],
            distance_m: 1.8223937930958234,
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
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "facd86505c717e65",
    object_a_name: "whole food processor",
    query_time_sec: 203.0,
    query_time_in_clip_sec: 203.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 203.0,
    clip_duration_sec: 203.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "facd86505c717e65",
      object_name: "whole food processor",
      query_time_sec: 203.0,
      oos_span_start_sec: 198.0,
      oos_span_end_sec: 253.0,
      oos_duration_sec: 55.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_shelf.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 203.0,
      clip_duration_sec: 203.0,
      anchor_assoc_id: "3b8a02b6d19b4146",
      anchor_name: "weighing scales",
      anchor_projected_pixel: [1305.4870595173647, 902.6563627629153],
      anchor_world_coordinates: [
        -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
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
          "At the current time <TIME 00:03:23.0 video 1>, is the previously moved whole food processor visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.48241563444443836, 0.8559652361706083, -0.9553730667458631,
          ],
          frame_index: 980,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The whole food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:17.0 video 1>; Point=(0.9694, 0.3321)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 197.0,
          sampled_last_visible_time_in_clip_sec: 197.0,
          sampled_last_visible_time_token: "<TIME 00:03:17.0 video 1>",
          projected_pixel: [1364.9247177870566, 467.64478795344735],
          normalized_projected_pixel: [0.9694067597919436, 0.33213408235330066],
          camera_coordinates: [
            0.6851786016074326, -0.24469479818306894, 0.48630079429130335,
          ],
          frame_index: 980,
          status: "in_view",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 197.0,
              time_token: "<TIME 00:03:17.0 video 1>",
              projected_pixel: [1364.9247177870566, 467.64478795344735],
              normalized_projected_pixel: [
                0.9694067597919436, 0.33213408235330066,
              ],
              camera_coordinates: [
                0.6851786016074326, -0.24469479818306894, 0.48630079429130335,
              ],
              frame_index: 980,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
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
          "The whole food processor was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:32.7 video 1>; Point=(0.8742, 0.6459)",
        ],
        answer_metadata: {
          last_placement_time_sec: 32.666666666666664,
          last_placement_time_in_clip_sec: 32.666666666666664,
          last_placement_time_token: "<TIME 00:00:32.7 video 1>",
          projected_pixel: [1230.8615844516403, 909.4745235342416],
          normalized_projected_pixel: [0.8741914662298581, 0.6459336104646602],
          camera_coordinates: [
            0.4291946739274046, 0.16394647453153555, 0.44298225498258903,
          ],
          frame_index: 980,
          status: "last_past_track_end",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 32.666666666666664,
              time_token: "<TIME 00:00:32.7 video 1>",
              projected_pixel: [1230.8615844516403, 909.4745235342416],
              normalized_projected_pixel: [
                0.8741914662298581, 0.6459336104646602,
              ],
              camera_coordinates: [
                0.4291946739274046, 0.16394647453153555, 0.44298225498258903,
              ],
              frame_index: 980,
              status: "last_past_track_end",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
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
          "At the current time <TIME 00:03:23.0 video 1>, based on the last known position of the whole food processor that was moved earlier, which fixture type is closest to it?",
        choices: ["shelf", "cupboard", "drawer", "dishwasher", "counter"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 32.666666666666664,
          correct_fixture: "shelf",
          display_correct_answer: "shelf",
          raw_correct_fixture: "P01_shelf.005",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hob",
            "shelf",
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
            "At the current time <TIME 00:03:23.0 video 1>, consider the whole food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the whole food processor from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 203.0,
            camera_coordinates: [
              0.48241563444443836, 0.8559652361706083, -0.9553730667458631,
            ],
            world_coordinates: [
              -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.48241563444443836,
              z: -0.9553730667458631,
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
            "At the current time <TIME 00:03:23.0 video 1>, consider the whole food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the weighing scales (marked in red) in the current frame, where is the whole food processor relative to weighing scales from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "facd86505c717e65",
            object_x_name: "whole food processor",
            object_x_reference_time_sec: 203.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
            ],
            object_x_camera_coordinates: [
              0.48241563444443836, 0.8559652361706083, -0.9553730667458631,
            ],
            object_y_assoc_id: "3b8a02b6d19b4146",
            object_y_name: "weighing scales",
            object_y_reference_time_sec: 203.0,
            object_y_world_coordinates: [
              -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
            ],
            object_y_projected_pixel: [1305.4870595173647, 902.6563627629153],
            object_y_normalized_projected_pixel: [
              0.9271925138617647, 0.6410911667350251,
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
            "At the current time <TIME 00:03:23.0 video 1>, consider the whole food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the weighing scales (marked in red) in the current frame, how far is the whole food processor from the weighing scales: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "facd86505c717e65",
            object_x_name: "whole food processor",
            object_x_reference_time_sec: 203.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "3b8a02b6d19b4146",
            object_y_name: "weighing scales",
            object_y_pixel: [1305.4870595173647, 902.6563627629153],
            object_y_normalized_projected_pixel: [
              0.9271925138617647, 0.6410911667350251,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.152144533206795, 0.6503963643521036, -1.5005847888537864,
            ],
            distance_m: 1.642534047831737,
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
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "2446996a209d953b",
    object_a_name: "food processor",
    query_time_sec: 204.0,
    query_time_in_clip_sec: 204.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 204.0,
    clip_duration_sec: 204.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "2446996a209d953b",
      object_name: "food processor",
      query_time_sec: 204.0,
      oos_span_start_sec: 199.0,
      oos_span_end_sec: 253.0,
      oos_duration_sec: 54.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.008",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 204.0,
      clip_duration_sec: 204.0,
      anchor_assoc_id: "b3483c58c494e31e",
      anchor_name: "sponge",
      anchor_projected_pixel: [838.1242359682462, 740.6588455918472],
      anchor_world_coordinates: [
        -0.6444989139750249, -3.9734436969170464, -0.559188902518651,
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
          "At the current time <TIME 00:03:24.0 video 1>, is the previously moved food processor visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [3378.8992150316417, 1934.1665714285382],
          camera_coordinates: [
            0.9463983345670839, 0.4744350944275859, 0.23573670902695687,
          ],
          frame_index: 693,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:17.0 video 1>; Point=(0.5817, 0.3283)",
          "<TIME 00:03:18.0 video 1>; Point=(0.9635, 0.3172)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 198.0,
          sampled_last_visible_time_in_clip_sec: 198.0,
          sampled_last_visible_time_token: "<TIME 00:03:18.0 video 1>",
          projected_pixel: [1356.5932947292704, 446.60176378620775],
          normalized_projected_pixel: [0.963489555915675, 0.317188752689068],
          camera_coordinates: [
            0.4905776638491699, -0.1930927882824811, 0.3528670522530426,
          ],
          frame_index: 693,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 197.0,
              time_token: "<TIME 00:03:17.0 video 1>",
              projected_pixel: [819.0443185895044, 462.2612514112199],
              normalized_projected_pixel: [
                0.5817076126345913, 0.32831054787728686,
              ],
              camera_coordinates: [
                0.10843927511835694, -0.2198631363804, 0.5488826114440577,
              ],
              frame_index: 693,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 198.0,
              time_token: "<TIME 00:03:18.0 video 1>",
              projected_pixel: [1356.5932947292704, 446.60176378620775],
              normalized_projected_pixel: [
                0.963489555915675, 0.317188752689068,
              ],
              camera_coordinates: [
                0.4905776638491699, -0.1930927882824811, 0.3528670522530426,
              ],
              frame_index: 693,
              status: "in_view",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
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
          "<TIME 00:00:23.1 video 1>; Point=(0.317, 0.8573)",
          "<TIME 00:00:24.0 video 1>; Point=(0.5811, 0.7705)",
          "<TIME 00:00:25.0 video 1>; Point=(0.678, 0.7931)",
          "<TIME 00:00:26.0 video 1>; Point=(0.4657, 0.8842)",
        ],
        answer_metadata: {
          last_placement_time_sec: 23.1,
          last_placement_time_in_clip_sec: 23.1,
          last_placement_time_token: "<TIME 00:00:23.1 video 1>",
          projected_pixel: [446.34994237060675, 1207.0895857584717],
          normalized_projected_pixel: [0.3170099022518514, 0.8573079444307328],
          camera_coordinates: [
            -0.1746454529678747, 0.3473803310285428, 0.38202734619127354,
          ],
          frame_index: 693,
          status: "last_past_track_end",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 23.1,
              time_token: "<TIME 00:00:23.1 video 1>",
              projected_pixel: [446.34994237060675, 1207.0895857584717],
              normalized_projected_pixel: [
                0.3170099022518514, 0.8573079444307328,
              ],
              camera_coordinates: [
                -0.1746454529678747, 0.3473803310285428, 0.38202734619127354,
              ],
              frame_index: 693,
              status: "last_past_track_end",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 24.0,
              time_token: "<TIME 00:00:24.0 video 1>",
              projected_pixel: [818.2138764961687, 1084.8953487473564],
              normalized_projected_pixel: [
                0.5811178100114834, 0.7705222647353384,
              ],
              camera_coordinates: [
                0.09769716073549439, 0.3090365367913537, 0.4834127270188273,
              ],
              frame_index: 720,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 25.0,
              time_token: "<TIME 00:00:25.0 video 1>",
              projected_pixel: [954.6659272851684, 1116.6701249696914],
              normalized_projected_pixel: [
                0.6780297779013981, 0.7930895773932467,
              ],
              camera_coordinates: [
                0.20152054173007738, 0.3227937867311299, 0.4512065183963019,
              ],
              frame_index: 750,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 26.0,
              time_token: "<TIME 00:00:26.0 video 1>",
              projected_pixel: [655.7729693482936, 1244.9022272593083],
              normalized_projected_pixel: [
                0.46574784754850396, 0.884163513678486,
              ],
              camera_coordinates: [
                -0.0293251104869654, 0.37170704657031256, 0.38482210252822013,
              ],
              frame_index: 780,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.008",
              world_coordinates: [
                -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
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
          "At the current time <TIME 00:03:24.0 video 1>, based on the last known position of the food processor that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 23.1,
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
            "At the current time <TIME 00:03:24.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the food processor from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 204.0,
            camera_coordinates: [
              0.9463983345670839, 0.4744350944275859, 0.23573670902695687,
            ],
            world_coordinates: [
              -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.9463983345670839,
              z: 0.23573670902695687,
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
            "At the current time <TIME 00:03:24.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the sponge (marked in red) in the current frame, where is the food processor relative to sponge from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "2446996a209d953b",
            object_x_name: "food processor",
            object_x_reference_time_sec: 204.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.646055486841659, -2.9163277154528653, -0.5091879950725354,
            ],
            object_x_camera_coordinates: [
              0.9463983345670839, 0.4744350944275859, 0.23573670902695687,
            ],
            object_y_assoc_id: "b3483c58c494e31e",
            object_y_name: "sponge",
            object_y_reference_time_sec: 204.0,
            object_y_world_coordinates: [
              -0.6444989139750249, -3.9734436969170464, -0.559188902518651,
            ],
            object_y_projected_pixel: [838.1242359682462, 740.6588455918472],
            object_y_normalized_projected_pixel: [
              0.5952586903183567, 0.5260361119260278,
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
            "At the current time <TIME 00:03:24.0 video 1>, consider the food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the sponge (marked in red) in the current frame, how far is the food processor from the sponge: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "2446996a209d953b",
            object_x_name: "food processor",
            object_x_reference_time_sec: 204.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "b3483c58c494e31e",
            object_y_name: "sponge",
            object_y_pixel: [838.1242359682462, 740.6588455918472],
            object_y_normalized_projected_pixel: [
              0.5952586903183567, 0.5260361119260278,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6053029537489678, 0.3904365475723178, -1.2666007635270695,
            ],
            distance_m: 1.4570895160094905,
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
  oos_staged_h5p0_7: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "8234519be9f5a614",
    object_a_name: "glass",
    query_time_sec: 218.0,
    query_time_in_clip_sec: 218.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 218.0,
    clip_duration_sec: 218.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "8234519be9f5a614",
      object_name: "glass",
      query_time_sec: 218.0,
      oos_span_start_sec: 213.0,
      oos_span_end_sec: 250.0,
      oos_duration_sec: 37.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.006",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 218.0,
      clip_duration_sec: 218.0,
      anchor_assoc_id: "6ae79daa7ca78194",
      anchor_name: "pasta box",
      anchor_projected_pixel: [1035.4371980490434, 913.1229519192746],
      anchor_world_coordinates: [
        -0.10559997408442437, -2.625266053377213, -0.485917430540896,
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
          "At the current time <TIME 00:03:38.0 video 1>, is the previously moved glass visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.3175809026404988, 0.7336847904607641, -0.39192347747042,
          ],
          frame_index: 1876,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The glass was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:32.0 video 1>; Point=(0.9998, 0.6485)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 212.0,
          sampled_last_visible_time_in_clip_sec: 212.0,
          sampled_last_visible_time_token: "<TIME 00:03:32.0 video 1>",
          projected_pixel: [1407.6666074511295, 913.0223897885891],
          normalized_projected_pixel: [0.9997632155192681, 0.6484534018384865],
          camera_coordinates: [
            1.5118402127982242, 0.44172376614339726, 0.9290626787614495,
          ],
          frame_index: 1876,
          status: "in_view",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 212.0,
              time_token: "<TIME 00:03:32.0 video 1>",
              projected_pixel: [1407.6666074511295, 913.0223897885891],
              normalized_projected_pixel: [
                0.9997632155192681, 0.6484534018384865,
              ],
              camera_coordinates: [
                1.5118402127982242, 0.44172376614339726, 0.9290626787614495,
              ],
              frame_index: 1876,
              status: "in_view",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
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
          "The glass was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:02.5 video 1>; Point=(0.666, 0.7948)",
          "<TIME 00:01:03.0 video 1>; Point=(0.758, 0.9335)",
          "<TIME 00:01:04.0 video 1>; Point=(0.8312, 0.9534)",
          "<TIME 00:01:05.0 video 1>; Point=(0.8545, 1.0001)",
        ],
        answer_metadata: {
          last_placement_time_sec: 62.53333333333333,
          last_placement_time_in_clip_sec: 62.53333333333333,
          last_placement_time_token: "<TIME 00:01:02.5 video 1>",
          projected_pixel: [937.6836186493523, 1119.1150396111418],
          normalized_projected_pixel: [0.6659684791543695, 0.794826022451095],
          camera_coordinates: [
            0.20204969887344226, 0.3486801860164248, 0.48586043024065306,
          ],
          frame_index: 1876,
          status: "last_past_track_end",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 62.53333333333333,
              time_token: "<TIME 00:01:02.5 video 1>",
              projected_pixel: [937.6836186493523, 1119.1150396111418],
              normalized_projected_pixel: [
                0.6659684791543695, 0.794826022451095,
              ],
              camera_coordinates: [
                0.20204969887344226, 0.3486801860164248, 0.48586043024065306,
              ],
              frame_index: 1876,
              status: "last_past_track_end",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 63.0,
              time_token: "<TIME 00:01:03.0 video 1>",
              projected_pixel: [1067.26121267808, 1314.4106470261745],
              normalized_projected_pixel: [
                0.7579980203679546, 0.9335302890810898,
              ],
              camera_coordinates: [
                0.26744938144822483, 0.4409727665559555, 0.33924648137574653,
              ],
              frame_index: 1890,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 64.0,
              time_token: "<TIME 00:01:04.0 video 1>",
              projected_pixel: [1170.3970380722126, 1342.3481965832214],
              normalized_projected_pixel: [
                0.8312478963581055, 0.9533722987096742,
              ],
              camera_coordinates: [
                0.35778672693349467, 0.48241224316296694, 0.28142170963112445,
              ],
              frame_index: 1920,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 65.0,
              time_token: "<TIME 00:01:05.0 video 1>",
              projected_pixel: [1203.079240757254, 1408.1341393098196],
              normalized_projected_pixel: [
                0.8544596880378225, 1.0000952693961787,
              ],
              camera_coordinates: [
                0.3613412265088145, 0.5029735614061472, 0.25273566832828465,
              ],
              frame_index: 1950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
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
          "At the current time <TIME 00:03:38.0 video 1>, based on the last known position of the glass that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area close to the microwave",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 62.53333333333333,
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
            "At the current time <TIME 00:03:38.0 video 1>, consider the glass that was moved earlier. Using its last known position to infer its current location, in which direction is the glass from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 218.0,
            camera_coordinates: [
              1.3175809026404988, 0.7336847904607641, -0.39192347747042,
            ],
            world_coordinates: [
              -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.3175809026404988,
              z: -0.39192347747042,
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
            "At the current time <TIME 00:03:38.0 video 1>, consider the glass that was moved earlier. Using its last known position to infer its current location, and using the current position of the pasta box (marked in red) in the current frame, where is the glass relative to pasta box from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "8234519be9f5a614",
            object_x_name: "glass",
            object_x_reference_time_sec: 218.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
            ],
            object_x_camera_coordinates: [
              1.3175809026404988, 0.7336847904607641, -0.39192347747042,
            ],
            object_y_assoc_id: "6ae79daa7ca78194",
            object_y_name: "pasta box",
            object_y_reference_time_sec: 218.0,
            object_y_world_coordinates: [
              -0.10559997408442437, -2.625266053377213, -0.485917430540896,
            ],
            object_y_projected_pixel: [1035.4371980490434, 913.1229519192746],
            object_y_normalized_projected_pixel: [
              0.735395737250741, 0.6485248238063029,
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
            "At the current time <TIME 00:03:38.0 video 1>, consider the glass that was moved earlier. Using its last known position to infer its current location, and using the current position of the pasta box (marked in red) in the current frame, how far is the glass from the pasta box: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "8234519be9f5a614",
            object_x_name: "glass",
            object_x_reference_time_sec: 218.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "6ae79daa7ca78194",
            object_y_name: "pasta box",
            object_y_pixel: [1035.4371980490434, 913.1229519192746],
            object_y_normalized_projected_pixel: [
              0.735395737250741, 0.6485248238063029,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9798441341819064, 0.5262880871725752, -0.9864693749697717,
            ],
            distance_m: 1.4866726289750913,
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
  oos_staged_h5p0_8: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "4f8930764a85086a",
    object_a_name: "right hand glove",
    query_time_sec: 218.0,
    query_time_in_clip_sec: 218.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 218.0,
    clip_duration_sec: 218.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "4f8930764a85086a",
      object_name: "right hand glove",
      query_time_sec: 218.0,
      oos_span_start_sec: 213.0,
      oos_span_end_sec: 250.0,
      oos_duration_sec: 37.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_sink.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 218.0,
      clip_duration_sec: 218.0,
      anchor_assoc_id: "548b751c64ce1ca6",
      anchor_name: "butter",
      anchor_projected_pixel: [1173.1019762941633, 1082.65827549469],
      anchor_world_coordinates: [
        -0.27031266627680134, -2.705543992169007, -0.5402038957757346,
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
          "At the current time <TIME 00:03:38.0 video 1>, is the previously moved right hand glove visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.2259348022907304, 0.70023491285347, -0.19643768886738933,
          ],
          frame_index: 1718,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The right hand glove was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:32.0 video 1>; Point=(0.9521, 0.6595)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 212.0,
          sampled_last_visible_time_in_clip_sec: 212.0,
          sampled_last_visible_time_token: "<TIME 00:03:32.0 video 1>",
          projected_pixel: [1340.5718915958528, 928.5256025015469],
          normalized_projected_pixel: [0.9521107184629636, 0.6594642063221214],
          camera_coordinates: [
            1.3108089706589716, 0.4543722770787834, 1.013673850731102,
          ],
          frame_index: 1718,
          status: "in_view",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 212.0,
              time_token: "<TIME 00:03:32.0 video 1>",
              projected_pixel: [1340.5718915958528, 928.5256025015469],
              normalized_projected_pixel: [
                0.9521107184629636, 0.6594642063221214,
              ],
              camera_coordinates: [
                1.3108089706589716, 0.4543722770787834, 1.013673850731102,
              ],
              frame_index: 1718,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
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
          "The right hand glove was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:57.3 video 1>; Point=(0.5881, 0.7926)",
          "<TIME 00:00:58.0 video 1>; Point=(0.5578, 0.7985)",
          "<TIME 00:00:59.0 video 1>; Point=(0.6524, 0.8386)",
          "<TIME 00:01:00.0 video 1>; Point=(0.6898, 0.8204)",
        ],
        answer_metadata: {
          last_placement_time_sec: 57.266666666666666,
          last_placement_time_in_clip_sec: 57.266666666666666,
          last_placement_time_token: "<TIME 00:00:57.3 video 1>",
          projected_pixel: [828.0437509469465, 1116.0108503039537],
          normalized_projected_pixel: [0.5880992549339109, 0.7926213425454217],
          camera_coordinates: [
            0.10394966751851059, 0.32872690586284836, 0.46997474461549915,
          ],
          frame_index: 1718,
          status: "last_past_track_end",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 57.266666666666666,
              time_token: "<TIME 00:00:57.3 video 1>",
              projected_pixel: [828.0437509469465, 1116.0108503039537],
              normalized_projected_pixel: [
                0.5880992549339109, 0.7926213425454217,
              ],
              camera_coordinates: [
                0.10394966751851059, 0.32872690586284836, 0.46997474461549915,
              ],
              frame_index: 1718,
              status: "last_past_track_end",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 58.0,
              time_token: "<TIME 00:00:58.0 video 1>",
              projected_pixel: [785.3515794693943, 1124.3547174346568],
              normalized_projected_pixel: [
                0.5577781104186039, 0.7985473845416596,
              ],
              camera_coordinates: [
                0.07085254345907854, 0.34095401172395445, 0.47812173619557585,
              ],
              frame_index: 1740,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 59.0,
              time_token: "<TIME 00:00:59.0 video 1>",
              projected_pixel: [918.5989132968343, 1180.7963914089146],
              normalized_projected_pixel: [
                0.6524140009210471, 0.8386338007165587,
              ],
              camera_coordinates: [
                0.16939019035920988, 0.36502449433606854, 0.4332360650031619,
              ],
              frame_index: 1770,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 60.0,
              time_token: "<TIME 00:01:00.0 video 1>",
              projected_pixel: [971.232642227801, 1155.0564855846326],
              normalized_projected_pixel: [
                0.689795910673154, 0.820352617602722,
              ],
              camera_coordinates: [
                0.2107361182272034, 0.346667637427549, 0.4346714648073975,
              ],
              frame_index: 1800,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
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
          "At the current time <TIME 00:03:38.0 video 1>, based on the last known position of the right hand glove that was moved earlier, which fixture type is closest to it?",
        choices: ["dishwasher", "counter", "drawer", "sink", "fridgefreezer"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 57.266666666666666,
          correct_fixture: "sink",
          display_correct_answer: "sink",
          raw_correct_fixture: "P01_sink.001",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hob",
            "shelf",
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
            "At the current time <TIME 00:03:38.0 video 1>, consider the right hand glove that was moved earlier. Using its last known position to infer its current location, in which direction is the right hand glove from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 218.0,
            camera_coordinates: [
              1.2259348022907304, 0.70023491285347, -0.19643768886738933,
            ],
            world_coordinates: [
              -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.2259348022907304,
              z: -0.19643768886738933,
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
            "At the current time <TIME 00:03:38.0 video 1>, consider the right hand glove that was moved earlier. Using its last known position to infer its current location, and using the current position of the butter (marked in red) in the current frame, where is the right hand glove relative to butter from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "4f8930764a85086a",
            object_x_name: "right hand glove",
            object_x_reference_time_sec: 218.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
            ],
            object_x_camera_coordinates: [
              1.2259348022907304, 0.70023491285347, -0.19643768886738933,
            ],
            object_y_assoc_id: "548b751c64ce1ca6",
            object_y_name: "butter",
            object_y_reference_time_sec: 218.0,
            object_y_world_coordinates: [
              -0.27031266627680134, -2.705543992169007, -0.5402038957757346,
            ],
            object_y_projected_pixel: [1173.1019762941633, 1082.65827549469],
            object_y_normalized_projected_pixel: [
              0.8331690172543773, 0.768933434300206,
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
            "At the current time <TIME 00:03:38.0 video 1>, consider the right hand glove that was moved earlier. Using its last known position to infer its current location, and using the current position of the butter (marked in red) in the current frame, how far is the right hand glove from the butter: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "4f8930764a85086a",
            object_x_name: "right hand glove",
            object_x_reference_time_sec: 218.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "548b751c64ce1ca6",
            object_y_name: "butter",
            object_y_pixel: [1173.1019762941633, 1082.65827549469],
            object_y_normalized_projected_pixel: [
              0.8331690172543773, 0.768933434300206,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8138088682864622, 0.3733361190106867, -0.661726705945958,
            ],
            distance_m: 1.1133494353623854,
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
  oos_staged_h5p0_9: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "8cebaa57ebc85608",
    object_a_name: "food processing lid",
    query_time_sec: 261.0,
    query_time_in_clip_sec: 261.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 261.0,
    clip_duration_sec: 261.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "8cebaa57ebc85608",
      object_name: "food processing lid",
      query_time_sec: 261.0,
      oos_span_start_sec: 256.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 71.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_shelf.005",
      relocation_score: 1,
      clip_start_time_sec: 0,
      clip_end_time_sec: 261.0,
      clip_duration_sec: 261.0,
      anchor_assoc_id: "8b3e8b1921153770",
      anchor_name: "jar of black pepper",
      anchor_projected_pixel: [1238.8158246394632, 1057.2406722605508],
      anchor_world_coordinates: [
        -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
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
          "At the current time <TIME 00:04:21.0 video 1>, is the previously moved food processing lid visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.2573775421539928, 0.8099244553549613, -1.1195354380081661,
          ],
          frame_index: 980,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The food processing lid was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:14.0 video 1>; Point=(0.5311, 0.3666)",
          "<TIME 00:04:15.0 video 1>; Point=(0.9745, 0.4451)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 255.0,
          sampled_last_visible_time_in_clip_sec: 255.0,
          sampled_last_visible_time_token: "<TIME 00:04:15.0 video 1>",
          projected_pixel: [1372.1437204443196, 626.7147582612677],
          normalized_projected_pixel: [0.9745338923610224, 0.44510991353783214],
          camera_coordinates: [
            0.6967816223952037, -0.08179647379430088, 0.5146932704124356,
          ],
          frame_index: 980,
          status: "in_view",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 254.0,
              time_token: "<TIME 00:04:14.0 video 1>",
              projected_pixel: [747.8323432964465, 516.1908290766419],
              normalized_projected_pixel: [
                0.5311309256366807, 0.36661280474193314,
              ],
              camera_coordinates: [
                0.07538118311222641, -0.29212319228935674, 0.9416650047598925,
              ],
              frame_index: 980,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 255.0,
              time_token: "<TIME 00:04:15.0 video 1>",
              projected_pixel: [1372.1437204443196, 626.7147582612677],
              normalized_projected_pixel: [
                0.9745338923610224, 0.44510991353783214,
              ],
              camera_coordinates: [
                0.6967816223952037, -0.08179647379430088, 0.5146932704124356,
              ],
              frame_index: 980,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
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
          "The food processing lid was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:32.7 video 1>; Point=(0.8742, 0.6459)",
        ],
        answer_metadata: {
          last_placement_time_sec: 32.666666666666664,
          last_placement_time_in_clip_sec: 32.666666666666664,
          last_placement_time_token: "<TIME 00:00:32.7 video 1>",
          projected_pixel: [1230.8615844516403, 909.4745235342416],
          normalized_projected_pixel: [0.8741914662298581, 0.6459336104646602],
          camera_coordinates: [
            0.4291946739274046, 0.16394647453153555, 0.44298225498258903,
          ],
          frame_index: 980,
          status: "last_past_track_end",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 32.666666666666664,
              time_token: "<TIME 00:00:32.7 video 1>",
              projected_pixel: [1230.8615844516403, 909.4745235342416],
              normalized_projected_pixel: [
                0.8741914662298581, 0.6459336104646602,
              ],
              camera_coordinates: [
                0.4291946739274046, 0.16394647453153555, 0.44298225498258903,
              ],
              frame_index: 980,
              status: "last_past_track_end",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
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
          "At the current time <TIME 00:04:21.0 video 1>, based on the last known position of the food processing lid that was moved earlier, which fixture type is closest to it?",
        choices: ["counter", "dishwasher", "shelf", "fridgefreezer", "sink"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 32.666666666666664,
          correct_fixture: "shelf",
          display_correct_answer: "shelf",
          raw_correct_fixture: "P01_shelf.005",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hob",
            "shelf",
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the food processing lid that was moved earlier. Using its last known position to infer its current location, in which direction is the food processing lid from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 261.0,
            camera_coordinates: [
              0.2573775421539928, 0.8099244553549613, -1.1195354380081661,
            ],
            world_coordinates: [
              -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.2573775421539928,
              z: -1.1195354380081661,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the food processing lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the jar of black pepper (marked in red) in the current frame, where is the food processing lid relative to jar of black pepper from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "8cebaa57ebc85608",
            object_x_name: "food processing lid",
            object_x_reference_time_sec: 261.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
            ],
            object_x_camera_coordinates: [
              0.2573775421539928, 0.8099244553549613, -1.1195354380081661,
            ],
            object_y_assoc_id: "8b3e8b1921153770",
            object_y_name: "jar of black pepper",
            object_y_reference_time_sec: 261.0,
            object_y_world_coordinates: [
              -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
            ],
            object_y_projected_pixel: [1238.8158246394632, 1057.2406722605508],
            object_y_normalized_projected_pixel: [
              0.8798407845450733, 0.7508811592759593,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the food processing lid that was moved earlier. Using its last known position to infer its current location, and using the current position of the jar of black pepper (marked in red) in the current frame, how far is the food processing lid from the jar of black pepper: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "8cebaa57ebc85608",
            object_x_name: "food processing lid",
            object_x_reference_time_sec: 261.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "8b3e8b1921153770",
            object_y_name: "jar of black pepper",
            object_y_pixel: [1238.8158246394632, 1057.2406722605508],
            object_y_normalized_projected_pixel: [
              0.8798407845450733, 0.7508811592759593,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.2754474372556075, 0.4636716985795195, -1.6303215264692312,
            ],
            distance_m: 1.7172102417651902,
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
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "facd86505c717e65",
    object_a_name: "whole food processor",
    query_time_sec: 261.0,
    query_time_in_clip_sec: 261.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 261.0,
    clip_duration_sec: 261.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "facd86505c717e65",
      object_name: "whole food processor",
      query_time_sec: 261.0,
      oos_span_start_sec: 256.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 71.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_shelf.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 261.0,
      clip_duration_sec: 261.0,
      anchor_assoc_id: "8b3e8b1921153770",
      anchor_name: "jar of black pepper",
      anchor_projected_pixel: [1238.8158246394632, 1057.2406722605508],
      anchor_world_coordinates: [
        -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
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
          "At the current time <TIME 00:04:21.0 video 1>, is the previously moved whole food processor visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.2573775421539928, 0.8099244553549613, -1.1195354380081661,
          ],
          frame_index: 980,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The whole food processor was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:14.0 video 1>; Point=(0.5311, 0.3666)",
          "<TIME 00:04:15.0 video 1>; Point=(0.9745, 0.4451)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 255.0,
          sampled_last_visible_time_in_clip_sec: 255.0,
          sampled_last_visible_time_token: "<TIME 00:04:15.0 video 1>",
          projected_pixel: [1372.1437204443196, 626.7147582612677],
          normalized_projected_pixel: [0.9745338923610224, 0.44510991353783214],
          camera_coordinates: [
            0.6967816223952037, -0.08179647379430088, 0.5146932704124356,
          ],
          frame_index: 980,
          status: "in_view",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 254.0,
              time_token: "<TIME 00:04:14.0 video 1>",
              projected_pixel: [747.8323432964465, 516.1908290766419],
              normalized_projected_pixel: [
                0.5311309256366807, 0.36661280474193314,
              ],
              camera_coordinates: [
                0.07538118311222641, -0.29212319228935674, 0.9416650047598925,
              ],
              frame_index: 980,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 255.0,
              time_token: "<TIME 00:04:15.0 video 1>",
              projected_pixel: [1372.1437204443196, 626.7147582612677],
              normalized_projected_pixel: [
                0.9745338923610224, 0.44510991353783214,
              ],
              camera_coordinates: [
                0.6967816223952037, -0.08179647379430088, 0.5146932704124356,
              ],
              frame_index: 980,
              status: "in_view",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
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
          "The whole food processor was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:32.7 video 1>; Point=(0.8742, 0.6459)",
        ],
        answer_metadata: {
          last_placement_time_sec: 32.666666666666664,
          last_placement_time_in_clip_sec: 32.666666666666664,
          last_placement_time_token: "<TIME 00:00:32.7 video 1>",
          projected_pixel: [1230.8615844516403, 909.4745235342416],
          normalized_projected_pixel: [0.8741914662298581, 0.6459336104646602],
          camera_coordinates: [
            0.4291946739274046, 0.16394647453153555, 0.44298225498258903,
          ],
          frame_index: 980,
          status: "last_past_track_end",
          fixture: "P01_shelf.005",
          world_coordinates: [
            -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 32.666666666666664,
              time_token: "<TIME 00:00:32.7 video 1>",
              projected_pixel: [1230.8615844516403, 909.4745235342416],
              normalized_projected_pixel: [
                0.8741914662298581, 0.6459336104646602,
              ],
              camera_coordinates: [
                0.4291946739274046, 0.16394647453153555, 0.44298225498258903,
              ],
              frame_index: 980,
              status: "last_past_track_end",
              fixture: "P01_shelf.005",
              world_coordinates: [
                -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
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
          "At the current time <TIME 00:04:21.0 video 1>, based on the last known position of the whole food processor that was moved earlier, which fixture type is closest to it?",
        choices: ["drawer", "shelf", "cupboard", "counter", "sink"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 32.666666666666664,
          correct_fixture: "shelf",
          display_correct_answer: "shelf",
          raw_correct_fixture: "P01_shelf.005",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hob",
            "shelf",
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the whole food processor that was moved earlier. Using its last known position to infer its current location, in which direction is the whole food processor from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 261.0,
            camera_coordinates: [
              0.2573775421539928, 0.8099244553549613, -1.1195354380081661,
            ],
            world_coordinates: [
              -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.2573775421539928,
              z: -1.1195354380081661,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the whole food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the jar of black pepper (marked in red) in the current frame, where is the whole food processor relative to jar of black pepper from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "facd86505c717e65",
            object_x_name: "whole food processor",
            object_x_reference_time_sec: 261.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.9732429262016589, -2.4568197583706035, -0.3714848255802244,
            ],
            object_x_camera_coordinates: [
              0.2573775421539928, 0.8099244553549613, -1.1195354380081661,
            ],
            object_y_assoc_id: "8b3e8b1921153770",
            object_y_name: "jar of black pepper",
            object_y_reference_time_sec: 261.0,
            object_y_world_coordinates: [
              -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
            ],
            object_y_projected_pixel: [1238.8158246394632, 1057.2406722605508],
            object_y_normalized_projected_pixel: [
              0.8798407845450733, 0.7508811592759593,
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
            "At the current time <TIME 00:04:21.0 video 1>, consider the whole food processor that was moved earlier. Using its last known position to infer its current location, and using the current position of the jar of black pepper (marked in red) in the current frame, how far is the whole food processor from the jar of black pepper: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "facd86505c717e65",
            object_x_name: "whole food processor",
            object_x_reference_time_sec: 261.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "8b3e8b1921153770",
            object_y_name: "jar of black pepper",
            object_y_pixel: [1238.8158246394632, 1057.2406722605508],
            object_y_normalized_projected_pixel: [
              0.8798407845450733, 0.7508811592759593,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.2754474372556075, 0.4636716985795195, -1.6303215264692312,
            ],
            distance_m: 1.7172102417651902,
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
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "8234519be9f5a614",
    object_a_name: "glass",
    query_time_sec: 266.0,
    query_time_in_clip_sec: 266.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 266.0,
    clip_duration_sec: 266.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "8234519be9f5a614",
      object_name: "glass",
      query_time_sec: 266.0,
      oos_span_start_sec: 261.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 66.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.006",
      relocation_score: 2,
      clip_start_time_sec: 0,
      clip_end_time_sec: 266.0,
      clip_duration_sec: 266.0,
      anchor_assoc_id: "733a851847a89247",
      anchor_name: "parmesan cheese",
      anchor_projected_pixel: [1126.0548229871517, 1038.1489159585483],
      anchor_world_coordinates: [
        -0.18945456451591303, -2.7744082578368703, -0.5673310990587611,
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
          "At the current time <TIME 00:04:26.0 video 1>, is the previously moved glass visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.36449451969839375, 0.9082523867770658, -0.5970604942561417,
          ],
          frame_index: 1876,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The glass was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:19.0 video 1>; Point=(0.3275, 0.2427)",
          "<TIME 00:04:20.0 video 1>; Point=(0.7752, 0.6219)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 260.0,
          sampled_last_visible_time_in_clip_sec: 260.0,
          sampled_last_visible_time_token: "<TIME 00:04:20.0 video 1>",
          projected_pixel: [1091.4526747595064, 875.5912597122393],
          normalized_projected_pixel: [0.7751794565053313, 0.6218687924092609],
          camera_coordinates: [
            0.6868412814322289, 0.2960598571287205, 1.025665633137633,
          ],
          frame_index: 1876,
          status: "in_view",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 259.0,
              time_token: "<TIME 00:04:19.0 video 1>",
              projected_pixel: [461.14355455083245, 341.72182647858983],
              normalized_projected_pixel: [
                0.32751672908439805, 0.2427001608512712,
              ],
              camera_coordinates: [
                -0.30225928858383666, -0.4642342827205912, 0.7440435581260707,
              ],
              frame_index: 1876,
              status: "in_view",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 260.0,
              time_token: "<TIME 00:04:20.0 video 1>",
              projected_pixel: [1091.4526747595064, 875.5912597122393],
              normalized_projected_pixel: [
                0.7751794565053313, 0.6218687924092609,
              ],
              camera_coordinates: [
                0.6868412814322289, 0.2960598571287205, 1.025665633137633,
              ],
              frame_index: 1876,
              status: "in_view",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
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
          "The glass was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:02.5 video 1>; Point=(0.666, 0.7948)",
          "<TIME 00:01:03.0 video 1>; Point=(0.758, 0.9335)",
          "<TIME 00:01:04.0 video 1>; Point=(0.8312, 0.9534)",
          "<TIME 00:01:05.0 video 1>; Point=(0.8545, 1.0001)",
        ],
        answer_metadata: {
          last_placement_time_sec: 62.53333333333333,
          last_placement_time_in_clip_sec: 62.53333333333333,
          last_placement_time_token: "<TIME 00:01:02.5 video 1>",
          projected_pixel: [937.6836186493523, 1119.1150396111418],
          normalized_projected_pixel: [0.6659684791543695, 0.794826022451095],
          camera_coordinates: [
            0.20204969887344226, 0.3486801860164248, 0.48586043024065306,
          ],
          frame_index: 1876,
          status: "last_past_track_end",
          fixture: "P01_counter.006",
          world_coordinates: [
            -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 62.53333333333333,
              time_token: "<TIME 00:01:02.5 video 1>",
              projected_pixel: [937.6836186493523, 1119.1150396111418],
              normalized_projected_pixel: [
                0.6659684791543695, 0.794826022451095,
              ],
              camera_coordinates: [
                0.20204969887344226, 0.3486801860164248, 0.48586043024065306,
              ],
              frame_index: 1876,
              status: "last_past_track_end",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 63.0,
              time_token: "<TIME 00:01:03.0 video 1>",
              projected_pixel: [1067.26121267808, 1314.4106470261745],
              normalized_projected_pixel: [
                0.7579980203679546, 0.9335302890810898,
              ],
              camera_coordinates: [
                0.26744938144822483, 0.4409727665559555, 0.33924648137574653,
              ],
              frame_index: 1890,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 64.0,
              time_token: "<TIME 00:01:04.0 video 1>",
              projected_pixel: [1170.3970380722126, 1342.3481965832214],
              normalized_projected_pixel: [
                0.8312478963581055, 0.9533722987096742,
              ],
              camera_coordinates: [
                0.35778672693349467, 0.48241224316296694, 0.28142170963112445,
              ],
              frame_index: 1920,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 65.0,
              time_token: "<TIME 00:01:05.0 video 1>",
              projected_pixel: [1203.079240757254, 1408.1341393098196],
              normalized_projected_pixel: [
                0.8544596880378225, 1.0000952693961787,
              ],
              camera_coordinates: [
                0.3613412265088145, 0.5029735614061472, 0.25273566832828465,
              ],
              frame_index: 1950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.006",
              world_coordinates: [
                -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
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
          "At the current time <TIME 00:04:26.0 video 1>, based on the last known position of the glass that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 62.53333333333333,
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
            "At the current time <TIME 00:04:26.0 video 1>, consider the glass that was moved earlier. Using its last known position to infer its current location, in which direction is the glass from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 266.0,
            camera_coordinates: [
              0.36449451969839375, 0.9082523867770658, -0.5970604942561417,
            ],
            world_coordinates: [
              -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.36449451969839375,
              z: -0.5970604942561417,
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
            "At the current time <TIME 00:04:26.0 video 1>, consider the glass that was moved earlier. Using its last known position to infer its current location, and using the current position of the parmesan cheese (marked in red) in the current frame, where is the glass relative to parmesan cheese from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "8234519be9f5a614",
            object_x_name: "glass",
            object_x_reference_time_sec: 266.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.1630894400065805, -3.6650387150229036, -0.5897651426082223,
            ],
            object_x_camera_coordinates: [
              0.36449451969839375, 0.9082523867770658, -0.5970604942561417,
            ],
            object_y_assoc_id: "733a851847a89247",
            object_y_name: "parmesan cheese",
            object_y_reference_time_sec: 266.0,
            object_y_world_coordinates: [
              -0.18945456451591303, -2.7744082578368703, -0.5673310990587611,
            ],
            object_y_projected_pixel: [1126.0548229871517, 1038.1489159585483],
            object_y_normalized_projected_pixel: [
              0.7997548458715567, 0.7373216732660144,
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
            "At the current time <TIME 00:04:26.0 video 1>, consider the glass that was moved earlier. Using its last known position to infer its current location, and using the current position of the parmesan cheese (marked in red) in the current frame, how far is the glass from the parmesan cheese: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "8234519be9f5a614",
            object_x_name: "glass",
            object_x_reference_time_sec: 266.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "733a851847a89247",
            object_y_name: "parmesan cheese",
            object_y_pixel: [1126.0548229871517, 1038.1489159585483],
            object_y_normalized_projected_pixel: [
              0.7997548458715567, 0.7373216732660144,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.09314802273058609, 0.5529762420483231, -1.1946679412877064,
            ],
            distance_m: 1.3197313243039699,
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
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "4f8930764a85086a",
    object_a_name: "right hand glove",
    query_time_sec: 266.0,
    query_time_in_clip_sec: 266.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 266.0,
    clip_duration_sec: 266.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "4f8930764a85086a",
      object_name: "right hand glove",
      query_time_sec: 266.0,
      oos_span_start_sec: 261.0,
      oos_span_end_sec: 286.0,
      oos_duration_sec: 25.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_sink.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 266.0,
      clip_duration_sec: 266.0,
      anchor_assoc_id: "548b751c64ce1ca6",
      anchor_name: "butter",
      anchor_projected_pixel: [1047.2406101466734, 1034.2266883104526],
      anchor_world_coordinates: [
        -0.27031266627680134, -2.705543992169007, -0.5402038957757346,
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
          "At the current time <TIME 00:04:26.0 video 1>, is the previously moved right hand glove visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.422897067011355, 0.8727054904214488, -0.389555901068781,
          ],
          frame_index: 1718,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The right hand glove was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:19.0 video 1>; Point=(0.2291, 0.3161)",
          "<TIME 00:04:20.0 video 1>; Point=(0.6908, 0.6444)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 260.0,
          sampled_last_visible_time_in_clip_sec: 260.0,
          sampled_last_visible_time_token: "<TIME 00:04:20.0 video 1>",
          projected_pixel: [972.7155032498055, 907.2617864591042],
          normalized_projected_pixel: [0.6908490790126459, 0.6443620642465229],
          camera_coordinates: [
            0.4756689472068931, 0.3487761598035498, 1.0446348781708559,
          ],
          frame_index: 1718,
          status: "in_view",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 259.0,
              time_token: "<TIME 00:04:19.0 video 1>",
              projected_pixel: [322.59932169578695, 445.0735230703899],
              normalized_projected_pixel: [
                0.22911883643166686, 0.31610335445340193,
              ],
              camera_coordinates: [
                -0.4462241757757774, -0.31000853505010495, 0.6872885973005802,
              ],
              frame_index: 1718,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 260.0,
              time_token: "<TIME 00:04:20.0 video 1>",
              projected_pixel: [972.7155032498055, 907.2617864591042],
              normalized_projected_pixel: [
                0.6908490790126459, 0.6443620642465229,
              ],
              camera_coordinates: [
                0.4756689472068931, 0.3487761598035498, 1.0446348781708559,
              ],
              frame_index: 1718,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
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
          "The right hand glove was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:57.3 video 1>; Point=(0.5881, 0.7926)",
          "<TIME 00:00:58.0 video 1>; Point=(0.5578, 0.7985)",
          "<TIME 00:00:59.0 video 1>; Point=(0.6524, 0.8386)",
          "<TIME 00:01:00.0 video 1>; Point=(0.6898, 0.8204)",
        ],
        answer_metadata: {
          last_placement_time_sec: 57.266666666666666,
          last_placement_time_in_clip_sec: 57.266666666666666,
          last_placement_time_token: "<TIME 00:00:57.3 video 1>",
          projected_pixel: [828.0437509469465, 1116.0108503039537],
          normalized_projected_pixel: [0.5880992549339109, 0.7926213425454217],
          camera_coordinates: [
            0.10394966751851059, 0.32872690586284836, 0.46997474461549915,
          ],
          frame_index: 1718,
          status: "last_past_track_end",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 57.266666666666666,
              time_token: "<TIME 00:00:57.3 video 1>",
              projected_pixel: [828.0437509469465, 1116.0108503039537],
              normalized_projected_pixel: [
                0.5880992549339109, 0.7926213425454217,
              ],
              camera_coordinates: [
                0.10394966751851059, 0.32872690586284836, 0.46997474461549915,
              ],
              frame_index: 1718,
              status: "last_past_track_end",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 58.0,
              time_token: "<TIME 00:00:58.0 video 1>",
              projected_pixel: [785.3515794693943, 1124.3547174346568],
              normalized_projected_pixel: [
                0.5577781104186039, 0.7985473845416596,
              ],
              camera_coordinates: [
                0.07085254345907854, 0.34095401172395445, 0.47812173619557585,
              ],
              frame_index: 1740,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 59.0,
              time_token: "<TIME 00:00:59.0 video 1>",
              projected_pixel: [918.5989132968343, 1180.7963914089146],
              normalized_projected_pixel: [
                0.6524140009210471, 0.8386338007165587,
              ],
              camera_coordinates: [
                0.16939019035920988, 0.36502449433606854, 0.4332360650031619,
              ],
              frame_index: 1770,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 60.0,
              time_token: "<TIME 00:01:00.0 video 1>",
              projected_pixel: [971.232642227801, 1155.0564855846326],
              normalized_projected_pixel: [
                0.689795910673154, 0.820352617602722,
              ],
              camera_coordinates: [
                0.2107361182272034, 0.346667637427549, 0.4346714648073975,
              ],
              frame_index: 1800,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
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
          "At the current time <TIME 00:04:26.0 video 1>, based on the last known position of the right hand glove that was moved earlier, which fixture type is closest to it?",
        choices: ["fridgefreezer", "drawer", "sink", "cupboard", "counter"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 57.266666666666666,
          correct_fixture: "sink",
          display_correct_answer: "sink",
          raw_correct_fixture: "P01_sink.001",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hob",
            "shelf",
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
            "At the current time <TIME 00:04:26.0 video 1>, consider the right hand glove that was moved earlier. Using its last known position to infer its current location, in which direction is the right hand glove from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 266.0,
            camera_coordinates: [
              0.422897067011355, 0.8727054904214488, -0.389555901068781,
            ],
            world_coordinates: [
              -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.422897067011355,
              z: -0.389555901068781,
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
            "At the current time <TIME 00:04:26.0 video 1>, consider the right hand glove that was moved earlier. Using its last known position to infer its current location, and using the current position of the butter (marked in red) in the current frame, where is the right hand glove relative to butter from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "4f8930764a85086a",
            object_x_name: "right hand glove",
            object_x_reference_time_sec: 266.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
            ],
            object_x_camera_coordinates: [
              0.422897067011355, 0.8727054904214488, -0.389555901068781,
            ],
            object_y_assoc_id: "548b751c64ce1ca6",
            object_y_name: "butter",
            object_y_reference_time_sec: 266.0,
            object_y_world_coordinates: [
              -0.27031266627680134, -2.705543992169007, -0.5402038957757346,
            ],
            object_y_projected_pixel: [1047.2406101466734, 1034.2266883104526],
            object_y_normalized_projected_pixel: [
              0.7437788424337168, 0.7345360002204919,
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
            "At the current time <TIME 00:04:26.0 video 1>, consider the right hand glove that was moved earlier. Using its last known position to infer its current location, and using the current position of the butter (marked in red) in the current frame, how far is the right hand glove from the butter: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "4f8930764a85086a",
            object_x_name: "right hand glove",
            object_x_reference_time_sec: 266.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "548b751c64ce1ca6",
            object_y_name: "butter",
            object_y_pixel: [1047.2406101466734, 1034.2266883104526],
            object_y_normalized_projected_pixel: [
              0.7437788424337168, 0.7345360002204919,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.07081571473412285, 0.5415933137035467, -0.9701591530878058,
            ],
            distance_m: 1.113349435362385,
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
  oos_staged_h5p0_13: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "311d20193ffa8145",
    object_a_name: "left glove",
    query_time_sec: 269.0,
    query_time_in_clip_sec: 269.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 269.0,
    clip_duration_sec: 269.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "311d20193ffa8145",
      object_name: "left glove",
      query_time_sec: 269.0,
      oos_span_start_sec: 264.0,
      oos_span_end_sec: 276.0,
      oos_duration_sec: 12.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_sink.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 269.0,
      clip_duration_sec: 269.0,
      anchor_assoc_id: "5ebec360a68f00c4",
      anchor_name: "strainer",
      anchor_projected_pixel: [1054.159589569931, 1221.78866069177],
      anchor_world_coordinates: [
        -0.22029195688110162, -2.5474176905549566, -0.5941908201859134,
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
          "At the current time <TIME 00:04:29.0 video 1>, is the previously moved left glove visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.9823302199282697, 1.121297042640239, -0.223908290044462,
          ],
          frame_index: 1783,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The left glove was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:20.0 video 1>; Point=(0.6356, 0.6239)",
          "<TIME 00:04:23.0 video 1>; Point=(0.8885, 0.8154)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 263.0,
          sampled_last_visible_time_in_clip_sec: 263.0,
          sampled_last_visible_time_token: "<TIME 00:04:23.0 video 1>",
          projected_pixel: [1251.0188251016746, 1148.1072452355602],
          normalized_projected_pixel: [0.8885076882824393, 0.815417077582074],
          camera_coordinates: [
            0.6044585338329247, 0.48358091924590235, 0.5168407396456856,
          ],
          frame_index: 1783,
          status: "in_view",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.8440459425783492, -3.543914000775077, -0.6118182197505325,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 260.0,
              time_token: "<TIME 00:04:20.0 video 1>",
              projected_pixel: [894.9616967562677, 878.4125400938906],
              normalized_projected_pixel: [
                0.6356262050825765, 0.62387254268032,
              ],
              camera_coordinates: [
                0.35224592877298067, 0.30887957247149567, 1.0951486723750175,
              ],
              frame_index: 1783,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.8440459425783492, -3.543914000775077, -0.6118182197505325,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [1251.0188251016746, 1148.1072452355602],
              normalized_projected_pixel: [
                0.8885076882824393, 0.815417077582074,
              ],
              camera_coordinates: [
                0.6044585338329247, 0.48358091924590235, 0.5168407396456856,
              ],
              frame_index: 1783,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.8440459425783492, -3.543914000775077, -0.6118182197505325,
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
          "<TIME 00:00:59.4 video 1>; Point=(0.5887, 0.782)",
          "<TIME 00:01:00.0 video 1>; Point=(0.5704, 0.7839)",
          "<TIME 00:01:01.0 video 1>; Point=(0.555, 0.8413)",
          "<TIME 00:01:02.0 video 1>; Point=(0.486, 0.9452)",
        ],
        answer_metadata: {
          last_placement_time_sec: 59.43333333333333,
          last_placement_time_in_clip_sec: 59.43333333333333,
          last_placement_time_token: "<TIME 00:00:59.4 video 1>",
          projected_pixel: [828.9271210881113, 1101.0958610616444],
          normalized_projected_pixel: [0.588726648500079, 0.7820283104130997],
          camera_coordinates: [
            0.0971928652162366, 0.2942074668256387, 0.4386451732278549,
          ],
          frame_index: 1783,
          status: "last_past_track_end",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.8440459425783492, -3.543914000775077, -0.6118182197505325,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 59.43333333333333,
              time_token: "<TIME 00:00:59.4 video 1>",
              projected_pixel: [828.9271210881113, 1101.0958610616444],
              normalized_projected_pixel: [
                0.588726648500079, 0.7820283104130997,
              ],
              camera_coordinates: [
                0.0971928652162366, 0.2942074668256387, 0.4386451732278549,
              ],
              frame_index: 1783,
              status: "last_past_track_end",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.8440459425783492, -3.543914000775077, -0.6118182197505325,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 60.0,
              time_token: "<TIME 00:01:00.0 video 1>",
              projected_pixel: [803.1061096274185, 1103.7488045484165],
              normalized_projected_pixel: [
                0.5703878619512915, 0.7839125032304094,
              ],
              camera_coordinates: [
                0.0795314994250087, 0.30219003649063936, 0.4482255632595391,
              ],
              frame_index: 1800,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.8440459425783492, -3.543914000775077, -0.6118182197505325,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 61.0,
              time_token: "<TIME 00:01:01.0 video 1>",
              projected_pixel: [781.3833172796411, 1184.6164294423913],
              normalized_projected_pixel: [
                0.5549597423861088, 0.8413468959107893,
              ],
              camera_coordinates: [
                0.061096749411896356, 0.35213447275696796, 0.4217421902477252,
              ],
              frame_index: 1830,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.8440459425783492, -3.543914000775077, -0.6118182197505325,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 62.0,
              time_token: "<TIME 00:01:02.0 video 1>",
              projected_pixel: [684.2787272192166, 1330.8515079678366],
              normalized_projected_pixel: [
                0.48599341421819364, 0.9452070369089749,
              ],
              camera_coordinates: [
                -0.009720919039304055, 0.4369753446778972, 0.3682691081162801,
              ],
              frame_index: 1860,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.8440459425783492, -3.543914000775077, -0.6118182197505325,
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
          "At the current time <TIME 00:04:29.0 video 1>, based on the last known position of the left glove that was moved earlier, which fixture type is closest to it?",
        choices: ["cupboard", "hob", "shelf", "counter", "sink"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 59.43333333333333,
          correct_fixture: "sink",
          display_correct_answer: "sink",
          raw_correct_fixture: "P01_sink.001",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hob",
            "shelf",
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
            "At the current time <TIME 00:04:29.0 video 1>, consider the left glove that was moved earlier. Using its last known position to infer its current location, in which direction is the left glove from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 269.0,
            camera_coordinates: [
              0.9823302199282697, 1.121297042640239, -0.223908290044462,
            ],
            world_coordinates: [
              -0.8440459425783492, -3.543914000775077, -0.6118182197505325,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.9823302199282697,
              z: -0.223908290044462,
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
            "At the current time <TIME 00:04:29.0 video 1>, consider the left glove that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, where is the left glove relative to strainer from your viewpoint?",
          choices: ["Front-right", "Back-left", "Front-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "311d20193ffa8145",
            object_x_name: "left glove",
            object_x_reference_time_sec: 269.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.8440459425783492, -3.543914000775077, -0.6118182197505325,
            ],
            object_x_camera_coordinates: [
              0.9823302199282697, 1.121297042640239, -0.223908290044462,
            ],
            object_y_assoc_id: "5ebec360a68f00c4",
            object_y_name: "strainer",
            object_y_reference_time_sec: 269.0,
            object_y_world_coordinates: [
              -0.22029195688110162, -2.5474176905549566, -0.5941908201859134,
            ],
            object_y_projected_pixel: [1054.159589569931, 1221.78866069177],
            object_y_normalized_projected_pixel: [
              0.7486928903195533, 0.8677476283322231,
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
            "At the current time <TIME 00:04:29.0 video 1>, consider the left glove that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, how far is the left glove from the strainer: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "311d20193ffa8145",
            object_x_name: "left glove",
            object_x_reference_time_sec: 269.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "5ebec360a68f00c4",
            object_y_name: "strainer",
            object_y_pixel: [1054.159589569931, 1221.78866069177],
            object_y_normalized_projected_pixel: [
              0.7486928903195533, 0.8677476283322231,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6818819393460545, 0.685912348528301, -0.6685401462148566,
            ],
            distance_m: 1.1757485514219983,
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
  oos_staged_h5p0_14: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "b3483c58c494e31e",
    object_a_name: "sponge",
    query_time_sec: 269.0,
    query_time_in_clip_sec: 269.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 269.0,
    clip_duration_sec: 269.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "b3483c58c494e31e",
      object_name: "sponge",
      query_time_sec: 269.0,
      oos_span_start_sec: 264.0,
      oos_span_end_sec: 276.0,
      oos_duration_sec: 12.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.005",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 269.0,
      clip_duration_sec: 269.0,
      anchor_assoc_id: "6ae79daa7ca78194",
      anchor_name: "pasta box",
      anchor_projected_pixel: [1197.3518884713299, 1077.254026232432],
      anchor_world_coordinates: [
        -0.10559997408442437, -2.625266053377213, -0.485917430540896,
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
          "At the current time <TIME 00:04:29.0 video 1>, is the previously moved sponge visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.4551102651769894, 1.1456318199827122, -0.16939710815640607,
          ],
          frame_index: 3017,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The sponge was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:20.0 video 1>; Point=(0.6114, 0.5403)",
          "<TIME 00:04:23.0 video 1>; Point=(0.8619, 0.6382)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 263.0,
          sampled_last_visible_time_in_clip_sec: 263.0,
          sampled_last_visible_time_token: "<TIME 00:04:23.0 video 1>",
          projected_pixel: [1213.5376760972279, 898.5691559778924],
          normalized_projected_pixel: [0.8618875540463266, 0.6381883210070258],
          camera_coordinates: [
            0.8320978588691079, 0.3108959642160079, 0.898213084641907,
          ],
          frame_index: 3017,
          status: "in_view",
          fixture: "P01_counter.005",
          world_coordinates: [
            -0.6444989139750249, -3.9734436969170464, -0.559188902518651,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 260.0,
              time_token: "<TIME 00:04:20.0 video 1>",
              projected_pixel: [860.9076774041498, 760.6748662157681],
              normalized_projected_pixel: [
                0.6114401117927201, 0.540252035664608,
              ],
              camera_coordinates: [
                0.4058541065790484, 0.13601474090830157, 1.5359757754499812,
              ],
              frame_index: 3017,
              status: "in_view",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6444989139750249, -3.9734436969170464, -0.559188902518651,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [1213.5376760972279, 898.5691559778924],
              normalized_projected_pixel: [
                0.8618875540463266, 0.6381883210070258,
              ],
              camera_coordinates: [
                0.8320978588691079, 0.3108959642160079, 0.898213084641907,
              ],
              frame_index: 3017,
              status: "in_view",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6444989139750249, -3.9734436969170464, -0.559188902518651,
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
          "The sponge was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:01:40.6 video 1>; Point=(0.4942, 0.6149)",
          "<TIME 00:01:41.0 video 1>; Point=(0.4767, 0.6008)",
          "<TIME 00:01:42.0 video 1>; Point=(2.6644, 1.0616)",
        ],
        answer_metadata: {
          last_placement_time_sec: 100.56666666666666,
          last_placement_time_in_clip_sec: 100.56666666666666,
          last_placement_time_token: "<TIME 00:01:40.6 video 1>",
          projected_pixel: [695.7928011982057, 865.7477462317543],
          normalized_projected_pixel: [0.4941710235782711, 0.6148776606759618],
          camera_coordinates: [
            -0.00276599260285737, 0.14662652655403896, 0.5641524429515941,
          ],
          frame_index: 3017,
          status: "last_past_track_end",
          fixture: "P01_counter.005",
          world_coordinates: [
            -0.6444989139750249, -3.9734436969170464, -0.559188902518651,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 100.56666666666666,
              time_token: "<TIME 00:01:40.6 video 1>",
              projected_pixel: [695.7928011982057, 865.7477462317543],
              normalized_projected_pixel: [
                0.4941710235782711, 0.6148776606759618,
              ],
              camera_coordinates: [
                -0.00276599260285737, 0.14662652655403896, 0.5641524429515941,
              ],
              frame_index: 3017,
              status: "last_past_track_end",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6444989139750249, -3.9734436969170464, -0.559188902518651,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 101.0,
              time_token: "<TIME 00:01:41.0 video 1>",
              projected_pixel: [671.1948127246546, 845.8977201842109],
              normalized_projected_pixel: [
                0.476700861310124, 0.6007796308126498,
              ],
              camera_coordinates: [
                -0.026006702623654565, 0.13140243300577414, 0.577480052568375,
              ],
              frame_index: 3030,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6444989139750249, -3.9734436969170464, -0.559188902518651,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 102.0,
              time_token: "<TIME 00:01:42.0 video 1>",
              projected_pixel: [3751.406641359622, 1494.701562771812],
              normalized_projected_pixel: [
                2.6643513077838223, 1.0615778144686165,
              ],
              camera_coordinates: [
                0.8331427305591723, 0.24484073576874066, 0.1890033089658636,
              ],
              frame_index: 3060,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.005",
              world_coordinates: [
                -0.6444989139750249, -3.9734436969170464, -0.559188902518651,
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
          "At the current time <TIME 00:04:29.0 video 1>, based on the last known position of the sponge that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 100.56666666666666,
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
            "At the current time <TIME 00:04:29.0 video 1>, consider the sponge that was moved earlier. Using its last known position to infer its current location, in which direction is the sponge from your viewpoint?",
          choices: ["Front-right", "Back-left", "Front-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 269.0,
            camera_coordinates: [
              1.4551102651769894, 1.1456318199827122, -0.16939710815640607,
            ],
            world_coordinates: [
              -0.6444989139750249, -3.9734436969170464, -0.559188902518651,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.4551102651769894,
              z: -0.16939710815640607,
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
            "At the current time <TIME 00:04:29.0 video 1>, consider the sponge that was moved earlier. Using its last known position to infer its current location, and using the current position of the pasta box (marked in red) in the current frame, where is the sponge relative to pasta box from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "b3483c58c494e31e",
            object_x_name: "sponge",
            object_x_reference_time_sec: 269.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.6444989139750249, -3.9734436969170464, -0.559188902518651,
            ],
            object_x_camera_coordinates: [
              1.4551102651769894, 1.1456318199827122, -0.16939710815640607,
            ],
            object_y_assoc_id: "6ae79daa7ca78194",
            object_y_name: "pasta box",
            object_y_reference_time_sec: 269.0,
            object_y_world_coordinates: [
              -0.10559997408442437, -2.625266053377213, -0.485917430540896,
            ],
            object_y_projected_pixel: [1197.3518884713299, 1077.254026232432],
            object_y_normalized_projected_pixel: [
              0.8503919662438423, 0.765095189085534,
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
            "At the current time <TIME 00:04:29.0 video 1>, consider the sponge that was moved earlier. Using its last known position to infer its current location, and using the current position of the pasta box (marked in red) in the current frame, how far is the sponge from the pasta box: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "b3483c58c494e31e",
            object_x_name: "sponge",
            object_x_reference_time_sec: 269.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "6ae79daa7ca78194",
            object_y_name: "pasta box",
            object_y_pixel: [1197.3518884713299, 1077.254026232432],
            object_y_normalized_projected_pixel: [
              0.8503919662438423, 0.765095189085534,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.0197042168256782, 0.8217480503261709, -0.6311079040343915,
            ],
            distance_m: 1.4537412887311194,
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
  oos_staged_h5p0_15: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "001d4f1c5bdf97a7",
    object_a_name: "galss2",
    query_time_sec: 271.0,
    query_time_in_clip_sec: 271.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 271.0,
    clip_duration_sec: 271.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "001d4f1c5bdf97a7",
      object_name: "galss2",
      query_time_sec: 271.0,
      oos_span_start_sec: 266.0,
      oos_span_end_sec: 276.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 271.0,
      clip_duration_sec: 271.0,
      anchor_assoc_id: "181a9557e45e46f6",
      anchor_name: "pan3",
      anchor_projected_pixel: [886.2221875161581, 920.9322158071445],
      anchor_world_coordinates: [
        -0.09570932171617191, -2.2522509187619004, -0.4683339932325733,
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
          "At the current time <TIME 00:04:31.0 video 1>, is the previously moved galss2 visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [5923.949932563829, 3632.9091819245673],
          camera_coordinates: [
            0.8202494550343193, 0.7291261211973208, 0.18757566241595292,
          ],
          frame_index: 6838,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The galss2 was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:22.0 video 1>; Point=(0.8827, 0.631)",
          "<TIME 00:04:23.0 video 1>; Point=(0.4785, 0.7045)",
          "<TIME 00:04:24.0 video 1>; Point=(0.4531, 0.9389)",
          "<TIME 00:04:25.0 video 1>; Point=(0.4254, 0.8699)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 265.0,
          sampled_last_visible_time_in_clip_sec: 265.0,
          sampled_last_visible_time_token: "<TIME 00:04:25.0 video 1>",
          projected_pixel: [598.9785739619372, 1224.8358929267006],
          normalized_projected_pixel: [0.42541091900705763, 0.8699118557718044],
          camera_coordinates: [
            -0.06593058836583676, 0.34435315380389375, 0.37262088166736224,
          ],
          frame_index: 6838,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 262.0,
              time_token: "<TIME 00:04:22.0 video 1>",
              projected_pixel: [1242.8101462532507, 888.379189792605],
              normalized_projected_pixel: [
                0.8826776606912291, 0.630951129114066,
              ],
              camera_coordinates: [
                0.6640956100932796, 0.22238890865083, 0.6686880765389196,
              ],
              frame_index: 6838,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [673.7524696385834, 991.9826429108607],
              normalized_projected_pixel: [
                0.4785173790046757, 0.7045331270673727,
              ],
              camera_coordinates: [
                -0.026727212911905163, 0.30654940973916706, 0.6520151385737036,
              ],
              frame_index: 6838,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 264.0,
              time_token: "<TIME 00:04:24.0 video 1>",
              projected_pixel: [638.0255039625067, 1321.983935519318],
              normalized_projected_pixel: [
                0.45314311360973486, 0.938909045113152,
              ],
              camera_coordinates: [
                -0.03817522116990002, 0.390907020923688, 0.33588859798966103,
              ],
              frame_index: 6838,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [598.9785739619372, 1224.8358929267006],
              normalized_projected_pixel: [
                0.42541091900705763, 0.8699118557718044,
              ],
              camera_coordinates: [
                -0.06593058836583676, 0.34435315380389375, 0.37262088166736224,
              ],
              frame_index: 6838,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
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
          "The galss2 was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:47.9 video 1>; Point=(0.6458, 0.7601)",
          "<TIME 00:03:48.0 video 1>; Point=(0.6479, 0.7716)",
          "<TIME 00:03:49.0 video 1>; Point=(0.6561, 0.927)",
          "<TIME 00:03:50.0 video 1>; Point=(0.6418, 0.9785)",
        ],
        answer_metadata: {
          last_placement_time_sec: 227.93333333333334,
          last_placement_time_in_clip_sec: 227.93333333333334,
          last_placement_time_token: "<TIME 00:03:47.9 video 1>",
          projected_pixel: [909.2697460780184, 1070.2619759730349],
          normalized_projected_pixel: [0.6457881719304108, 0.7601292442990304],
          camera_coordinates: [
            0.1566898345514276, 0.27060642718163114, 0.43703028894695894,
          ],
          frame_index: 6838,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 227.93333333333334,
              time_token: "<TIME 00:03:47.9 video 1>",
              projected_pixel: [909.2697460780184, 1070.2619759730349],
              normalized_projected_pixel: [
                0.6457881719304108, 0.7601292442990304,
              ],
              camera_coordinates: [
                0.1566898345514276, 0.27060642718163114, 0.43703028894695894,
              ],
              frame_index: 6838,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 228.0,
              time_token: "<TIME 00:03:48.0 video 1>",
              projected_pixel: [912.195113542486, 1086.425572986021],
              normalized_projected_pixel: [
                0.6478658476864246, 0.7716090717230263,
              ],
              camera_coordinates: [
                0.15810691923689602, 0.281252529496131, 0.4325158409039359,
              ],
              frame_index: 6840,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 229.0,
              time_token: "<TIME 00:03:49.0 video 1>",
              projected_pixel: [923.8285898108031, 1305.1956832601313],
              normalized_projected_pixel: [
                0.6561282598088091, 0.9269855704972524,
              ],
              camera_coordinates: [
                0.1654024589248837, 0.4392568456853313, 0.38096677062941176,
              ],
              frame_index: 6870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 230.0,
              time_token: "<TIME 00:03:50.0 video 1>",
              projected_pixel: [903.5997798002451, 1377.6674922870625],
              normalized_projected_pixel: [
                0.6417612072444923, 0.9784570257720614,
              ],
              camera_coordinates: [
                0.15079344120758087, 0.49307512137667214, 0.3498682509903749,
              ],
              frame_index: 6900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
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
          "At the current time <TIME 00:04:31.0 video 1>, based on the last known position of the galss2 that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area below the boiler",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 227.93333333333334,
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
            "At the current time <TIME 00:04:31.0 video 1>, consider the galss2 that was moved earlier. Using its last known position to infer its current location, in which direction is the galss2 from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 271.0,
            camera_coordinates: [
              0.8202494550343193, 0.7291261211973208, 0.18757566241595292,
            ],
            world_coordinates: [
              -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.8202494550343193,
              z: 0.18757566241595292,
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
            "At the current time <TIME 00:04:31.0 video 1>, consider the galss2 that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan3 (marked in red) in the current frame, where is the galss2 relative to pan3 from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "001d4f1c5bdf97a7",
            object_x_name: "galss2",
            object_x_reference_time_sec: 271.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
            ],
            object_x_camera_coordinates: [
              0.8202494550343193, 0.7291261211973208, 0.18757566241595292,
            ],
            object_y_assoc_id: "181a9557e45e46f6",
            object_y_name: "pan3",
            object_y_reference_time_sec: 271.0,
            object_y_world_coordinates: [
              -0.09570932171617191, -2.2522509187619004, -0.4683339932325733,
            ],
            object_y_projected_pixel: [886.2221875161581, 920.9322158071445],
            object_y_normalized_projected_pixel: [
              0.6294191672699987, 0.6540711759993925,
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
            "At the current time <TIME 00:04:31.0 video 1>, consider the galss2 that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan3 (marked in red) in the current frame, how far is the galss2 from the pan3: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "001d4f1c5bdf97a7",
            object_x_name: "galss2",
            object_x_reference_time_sec: 271.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "181a9557e45e46f6",
            object_y_name: "pan3",
            object_y_pixel: [886.2221875161581, 920.9322158071445],
            object_y_normalized_projected_pixel: [
              0.6294191672699987, 0.6540711759993925,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6637143517072497, 0.5499921298045143, -0.3200440479361298,
            ],
            distance_m: 0.9194760878502628,
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
  oos_staged_h5p0_16: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "3b8a02b6d19b4146",
    object_a_name: "weighing scales",
    query_time_sec: 271.0,
    query_time_in_clip_sec: 271.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 271.0,
    clip_duration_sec: 271.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "3b8a02b6d19b4146",
      object_name: "weighing scales",
      query_time_sec: 271.0,
      oos_span_start_sec: 266.0,
      oos_span_end_sec: 276.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 271.0,
      clip_duration_sec: 271.0,
      anchor_assoc_id: "5ebec360a68f00c4",
      anchor_name: "strainer",
      anchor_projected_pixel: [1071.1761590918609, 1256.9594398212948],
      anchor_world_coordinates: [
        -0.22029195688110162, -2.5474176905549566, -0.5941908201859134,
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
          "At the current time <TIME 00:04:31.0 video 1>, is the previously moved weighing scales visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [3611.87953797517, 3485.7558639035387],
          camera_coordinates: [
            0.5951688745339092, 0.7109475410509598, 0.18128724357762527,
          ],
          frame_index: 4665,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The weighing scales was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:22.0 video 1>; Point=(0.8662, 0.7402)",
          "<TIME 00:04:23.0 video 1>; Point=(0.3835, 0.8438)",
          "<TIME 00:04:25.0 video 1>; Point=(0.211, 0.9083)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 265.0,
          sampled_last_visible_time_in_clip_sec: 265.0,
          sampled_last_visible_time_token: "<TIME 00:04:25.0 video 1>",
          projected_pixel: [297.1478247817908, 1278.839224393303],
          normalized_projected_pixel: [0.21104248919161278, 0.9082664945975164],
          camera_coordinates: [
            -0.281124132541382, 0.401763743083439, 0.33484475839129346,
          ],
          frame_index: 4665,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 262.0,
              time_token: "<TIME 00:04:22.0 video 1>",
              projected_pixel: [1219.5479923883076, 1042.1405898750677],
              normalized_projected_pixel: [
                0.8661562445939684, 0.7401566689453606,
              ],
              camera_coordinates: [
                0.5249537130893747, 0.33851349918348916, 0.5338330259186237,
              ],
              frame_index: 4665,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [540.0155268180249, 1188.0232133077534],
              normalized_projected_pixel: [
                0.38353375484234725, 0.8437664867242567,
              ],
              camera_coordinates: [
                -0.13497565175494186, 0.4108705555290753, 0.48340124016923713,
              ],
              frame_index: 4665,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [297.1478247817908, 1278.839224393303],
              normalized_projected_pixel: [
                0.21104248919161278, 0.9082664945975164,
              ],
              camera_coordinates: [
                -0.281124132541382, 0.401763743083439, 0.33484475839129346,
              ],
              frame_index: 4665,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
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
          "The weighing scales was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:35.5 video 1>; Point=(0.5857, 0.7435)",
          "<TIME 00:02:36.0 video 1>; Point=(0.5732, 0.7187)",
          "<TIME 00:02:37.0 video 1>; Point=(0.5873, 0.7044)",
          "<TIME 00:02:38.0 video 1>; Point=(0.5216, 0.7512)",
        ],
        answer_metadata: {
          last_placement_time_sec: 155.5,
          last_placement_time_in_clip_sec: 155.5,
          last_placement_time_token: "<TIME 00:02:35.5 video 1>",
          projected_pixel: [824.6436533430087, 1046.8940840497758],
          normalized_projected_pixel: [0.5856844128856596, 0.7435327301489885],
          camera_coordinates: [
            0.09505897430926291, 0.25681213730215185, 0.4509960031445411,
          ],
          frame_index: 4665,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 155.5,
              time_token: "<TIME 00:02:35.5 video 1>",
              projected_pixel: [824.6436533430087, 1046.8940840497758],
              normalized_projected_pixel: [
                0.5856844128856596, 0.7435327301489885,
              ],
              camera_coordinates: [
                0.09505897430926291, 0.25681213730215185, 0.4509960031445411,
              ],
              frame_index: 4665,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 156.0,
              time_token: "<TIME 00:02:36.0 video 1>",
              projected_pixel: [807.0652838838374, 1011.9144052382447],
              normalized_projected_pixel: [
                0.57319977548568, 0.7186892082657989,
              ],
              camera_coordinates: [
                0.08295615756237718, 0.23378082712959525, 0.4618121362370593,
              ],
              frame_index: 4680,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 157.0,
              time_token: "<TIME 00:02:37.0 video 1>",
              projected_pixel: [826.9641395952506, 991.7622497954729],
              normalized_projected_pixel: [
                0.5873324855079904, 0.704376597866103,
              ],
              camera_coordinates: [
                0.09443115708987149, 0.2100572059435402, 0.44529254073337715,
              ],
              frame_index: 4710,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 158.0,
              time_token: "<TIME 00:02:38.0 video 1>",
              projected_pixel: [734.4696784633487, 1057.7562865422049],
              normalized_projected_pixel: [
                0.5216403966359011, 0.7512473626009978,
              ],
              camera_coordinates: [
                0.024683423032731078, 0.24166275614864363, 0.4122189204899505,
              ],
              frame_index: 4740,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
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
          "At the current time <TIME 00:04:31.0 video 1>, based on the last known position of the weighing scales that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
        ],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 155.5,
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
            "At the current time <TIME 00:04:31.0 video 1>, consider the weighing scales that was moved earlier. Using its last known position to infer its current location, in which direction is the weighing scales from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 271.0,
            camera_coordinates: [
              0.5951688745339092, 0.7109475410509598, 0.18128724357762527,
            ],
            world_coordinates: [
              -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.5951688745339092,
              z: 0.18128724357762527,
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
            "At the current time <TIME 00:04:31.0 video 1>, consider the weighing scales that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, where is the weighing scales relative to strainer from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "3b8a02b6d19b4146",
            object_x_name: "weighing scales",
            object_x_reference_time_sec: 271.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
            ],
            object_x_camera_coordinates: [
              0.5951688745339092, 0.7109475410509598, 0.18128724357762527,
            ],
            object_y_assoc_id: "5ebec360a68f00c4",
            object_y_name: "strainer",
            object_y_reference_time_sec: 271.0,
            object_y_world_coordinates: [
              -0.22029195688110162, -2.5474176905549566, -0.5941908201859134,
            ],
            object_y_projected_pixel: [1071.1761590918609, 1256.9594398212948],
            object_y_normalized_projected_pixel: [
              0.7607785220822876, 0.8927268748730787,
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
            "At the current time <TIME 00:04:31.0 video 1>, consider the weighing scales that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, how far is the weighing scales from the strainer: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "3b8a02b6d19b4146",
            object_x_name: "weighing scales",
            object_x_reference_time_sec: 271.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "5ebec360a68f00c4",
            object_y_name: "strainer",
            object_y_pixel: [1071.1761590918609, 1256.9594398212948],
            object_y_normalized_projected_pixel: [
              0.7607785220822876, 0.8927268748730787,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.275054969125619, 0.2380263968823162, -0.2527438710569499,
            ],
            distance_m: 0.4429348326902336,
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
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "841dd6ff987bcbab",
    object_a_name: "water filter",
    query_time_sec: 271.0,
    query_time_in_clip_sec: 271.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 271.0,
    clip_duration_sec: 271.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "841dd6ff987bcbab",
      object_name: "water filter",
      query_time_sec: 271.0,
      oos_span_start_sec: 266.0,
      oos_span_end_sec: 276.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 271.0,
      clip_duration_sec: 271.0,
      anchor_assoc_id: "181a9557e45e46f6",
      anchor_name: "pan3",
      anchor_projected_pixel: [886.2221875161581, 920.9322158071445],
      anchor_world_coordinates: [
        -0.09570932171617191, -2.2522509187619004, -0.4683339932325733,
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
          "At the current time <TIME 00:04:31.0 video 1>, is the previously moved water filter visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [4159.146301499877, 2729.064835775418],
          camera_coordinates: [
            0.9948084208963872, 0.7050500654324139, 0.2411598500180776,
          ],
          frame_index: 6823,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The water filter was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:22.0 video 1>; Point=(0.8553, 0.5624)",
          "<TIME 00:04:23.0 video 1>; Point=(0.4976, 0.6184)",
          "<TIME 00:04:24.0 video 1>; Point=(0.5648, 0.7831)",
          "<TIME 00:04:25.0 video 1>; Point=(0.5733, 0.7565)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 265.0,
          sampled_last_visible_time_in_clip_sec: 265.0,
          sampled_last_visible_time_token: "<TIME 00:04:25.0 video 1>",
          projected_pixel: [807.1494895176429, 1065.1292144745782],
          normalized_projected_pixel: [0.5732595806233259, 0.756483817098422],
          camera_coordinates: [
            0.08291208849751097, 0.2739644602784911, 0.455162044446602,
          ],
          frame_index: 6823,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 262.0,
              time_token: "<TIME 00:04:22.0 video 1>",
              projected_pixel: [1204.2648415883127, 791.9110408352869],
              normalized_projected_pixel: [
                0.8553017340826085, 0.5624368187750618,
              ],
              camera_coordinates: [
                0.7242638179426417, 0.12284168055110922, 0.8114882527533318,
              ],
              frame_index: 6823,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 263.0,
              time_token: "<TIME 00:04:23.0 video 1>",
              projected_pixel: [700.6829001757934, 870.7373169228457],
              normalized_projected_pixel: [
                0.4976441052384896, 0.6184213898599756,
              ],
              camera_coordinates: [
                0.002493931963183371, 0.21723256407897368, 0.8104145702599042,
              ],
              frame_index: 6823,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 264.0,
              time_token: "<TIME 00:04:24.0 video 1>",
              projected_pixel: [795.253070882614, 1102.5451482347075],
              normalized_projected_pixel: [
                0.5648104196609475, 0.7830576336894229,
              ],
              camera_coordinates: [
                0.07431174633421067, 0.30435841453165613, 0.45326736548334073,
              ],
              frame_index: 6823,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [807.1494895176429, 1065.1292144745782],
              normalized_projected_pixel: [
                0.5732595806233259, 0.756483817098422,
              ],
              camera_coordinates: [
                0.08291208849751097, 0.2739644602784911, 0.455162044446602,
              ],
              frame_index: 6823,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
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
          "The water filter was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:47.4 video 1>; Point=(0.7684, 0.6373)",
          "<TIME 00:03:48.0 video 1>; Point=(0.735, 0.6541)",
          "<TIME 00:03:49.0 video 1>; Point=(0.7358, 0.8048)",
          "<TIME 00:03:50.0 video 1>; Point=(0.7233, 0.8622)",
        ],
        answer_metadata: {
          last_placement_time_sec: 227.43333333333334,
          last_placement_time_in_clip_sec: 227.43333333333334,
          last_placement_time_token: "<TIME 00:03:47.4 video 1>",
          projected_pixel: [1081.8611629925913, 897.2728156787665],
          normalized_projected_pixel: [0.7683673032617836, 0.6372676247718512],
          camera_coordinates: [
            0.3262417579645467, 0.16259191234187353, 0.49927160543497406,
          ],
          frame_index: 6823,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 227.43333333333334,
              time_token: "<TIME 00:03:47.4 video 1>",
              projected_pixel: [1081.8611629925913, 897.2728156787665],
              normalized_projected_pixel: [
                0.7683673032617836, 0.6372676247718512,
              ],
              camera_coordinates: [
                0.3262417579645467, 0.16259191234187353, 0.49927160543497406,
              ],
              frame_index: 6823,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 228.0,
              time_token: "<TIME 00:03:48.0 video 1>",
              projected_pixel: [1034.838371889072, 920.9361013413882],
              normalized_projected_pixel: [
                0.7349704345803069, 0.6540739356117814,
              ],
              camera_coordinates: [
                0.2926918013494011, 0.1868544747851174, 0.5155680591678011,
              ],
              frame_index: 6840,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 229.0,
              time_token: "<TIME 00:03:49.0 video 1>",
              projected_pixel: [1035.960793216494, 1133.186471646833],
              normalized_projected_pixel: [
                0.7357676088185326, 0.8048199372491712,
              ],
              camera_coordinates: [
                0.29827208118616033, 0.3772797786096811, 0.4924399100929394,
              ],
              frame_index: 6870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 230.0,
              time_token: "<TIME 00:03:50.0 video 1>",
              projected_pixel: [1018.4512129617954, 1213.9225031944313],
              normalized_projected_pixel: [
                0.7233318273876388, 0.862160868746045,
              ],
              camera_coordinates: [
                0.28056182304255195, 0.4450070013985617, 0.4714058052800355,
              ],
              frame_index: 6900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
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
          "At the current time <TIME 00:04:31.0 video 1>, based on the last known position of the water filter that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area between the fridge and the hob",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 227.43333333333334,
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
            "At the current time <TIME 00:04:31.0 video 1>, consider the water filter that was moved earlier. Using its last known position to infer its current location, in which direction is the water filter from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 271.0,
            camera_coordinates: [
              0.9948084208963872, 0.7050500654324139, 0.2411598500180776,
            ],
            world_coordinates: [
              -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.9948084208963872,
              z: 0.2411598500180776,
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
            "At the current time <TIME 00:04:31.0 video 1>, consider the water filter that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan3 (marked in red) in the current frame, where is the water filter relative to pan3 from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "841dd6ff987bcbab",
            object_x_name: "water filter",
            object_x_reference_time_sec: 271.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
            ],
            object_x_camera_coordinates: [
              0.9948084208963872, 0.7050500654324139, 0.2411598500180776,
            ],
            object_y_assoc_id: "181a9557e45e46f6",
            object_y_name: "pan3",
            object_y_reference_time_sec: 271.0,
            object_y_world_coordinates: [
              -0.09570932171617191, -2.2522509187619004, -0.4683339932325733,
            ],
            object_y_projected_pixel: [886.2221875161581, 920.9322158071445],
            object_y_normalized_projected_pixel: [
              0.6294191672699987, 0.6540711759993925,
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
            "At the current time <TIME 00:04:31.0 video 1>, consider the water filter that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan3 (marked in red) in the current frame, how far is the water filter from the pan3: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "841dd6ff987bcbab",
            object_x_name: "water filter",
            object_x_reference_time_sec: 271.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "181a9557e45e46f6",
            object_y_name: "pan3",
            object_y_pixel: [886.2221875161581, 920.9322158071445],
            object_y_normalized_projected_pixel: [
              0.6294191672699987, 0.6540711759993925,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8382733175693176, 0.5259160740396074, -0.2664598603340051,
            ],
            distance_m: 1.0248369280286114,
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
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "4f8930764a85086a",
    object_a_name: "right hand glove",
    query_time_sec: 293.0,
    query_time_in_clip_sec: 293.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 293.0,
    clip_duration_sec: 293.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "4f8930764a85086a",
      object_name: "right hand glove",
      query_time_sec: 293.0,
      oos_span_start_sec: 288.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 39.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_sink.001",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 293.0,
      clip_duration_sec: 293.0,
      anchor_assoc_id: "6ae79daa7ca78194",
      anchor_name: "pasta box",
      anchor_projected_pixel: [1108.7196327192046, 840.0954028136786],
      anchor_world_coordinates: [
        -0.10559997408442437, -2.625266053377213, -0.485917430540896,
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
          "At the current time <TIME 00:04:53.0 video 1>, is the previously moved right hand glove visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.257275521831012, 0.7013598658523568, -0.194009366215255,
          ],
          frame_index: 1718,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The right hand glove was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:47.0 video 1>; Point=(0.9712, 0.6219)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 287.0,
          sampled_last_visible_time_in_clip_sec: 287.0,
          sampled_last_visible_time_token: "<TIME 00:04:47.0 video 1>",
          projected_pixel: [1367.4563229617493, 875.6285641613649],
          normalized_projected_pixel: [0.9712047748307878, 0.6218952870464239],
          camera_coordinates: [
            1.2718584002226283, 0.3226833048161231, 0.9288408523182965,
          ],
          frame_index: 1718,
          status: "in_view",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 287.0,
              time_token: "<TIME 00:04:47.0 video 1>",
              projected_pixel: [1367.4563229617493, 875.6285641613649],
              normalized_projected_pixel: [
                0.9712047748307878, 0.6218952870464239,
              ],
              camera_coordinates: [
                1.2718584002226283, 0.3226833048161231, 0.9288408523182965,
              ],
              frame_index: 1718,
              status: "in_view",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
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
          "The right hand glove was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:00:57.3 video 1>; Point=(0.5881, 0.7926)",
          "<TIME 00:00:58.0 video 1>; Point=(0.5578, 0.7985)",
          "<TIME 00:00:59.0 video 1>; Point=(0.6524, 0.8386)",
          "<TIME 00:01:00.0 video 1>; Point=(0.6898, 0.8204)",
        ],
        answer_metadata: {
          last_placement_time_sec: 57.266666666666666,
          last_placement_time_in_clip_sec: 57.266666666666666,
          last_placement_time_token: "<TIME 00:00:57.3 video 1>",
          projected_pixel: [828.0437509469465, 1116.0108503039537],
          normalized_projected_pixel: [0.5880992549339109, 0.7926213425454217],
          camera_coordinates: [
            0.10394966751851059, 0.32872690586284836, 0.46997474461549915,
          ],
          frame_index: 1718,
          status: "last_past_track_end",
          fixture: "P01_sink.001",
          world_coordinates: [
            -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 57.266666666666666,
              time_token: "<TIME 00:00:57.3 video 1>",
              projected_pixel: [828.0437509469465, 1116.0108503039537],
              normalized_projected_pixel: [
                0.5880992549339109, 0.7926213425454217,
              ],
              camera_coordinates: [
                0.10394966751851059, 0.32872690586284836, 0.46997474461549915,
              ],
              frame_index: 1718,
              status: "last_past_track_end",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 58.0,
              time_token: "<TIME 00:00:58.0 video 1>",
              projected_pixel: [785.3515794693943, 1124.3547174346568],
              normalized_projected_pixel: [
                0.5577781104186039, 0.7985473845416596,
              ],
              camera_coordinates: [
                0.07085254345907854, 0.34095401172395445, 0.47812173619557585,
              ],
              frame_index: 1740,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 59.0,
              time_token: "<TIME 00:00:59.0 video 1>",
              projected_pixel: [918.5989132968343, 1180.7963914089146],
              normalized_projected_pixel: [
                0.6524140009210471, 0.8386338007165587,
              ],
              camera_coordinates: [
                0.16939019035920988, 0.36502449433606854, 0.4332360650031619,
              ],
              frame_index: 1770,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 60.0,
              time_token: "<TIME 00:01:00.0 video 1>",
              projected_pixel: [971.232642227801, 1155.0564855846326],
              normalized_projected_pixel: [
                0.689795910673154, 0.820352617602722,
              ],
              camera_coordinates: [
                0.2107361182272034, 0.346667637427549, 0.4346714648073975,
              ],
              frame_index: 1800,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_sink.001",
              world_coordinates: [
                -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
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
          "At the current time <TIME 00:04:53.0 video 1>, based on the last known position of the right hand glove that was moved earlier, which fixture type is closest to it?",
        choices: ["counter", "sink", "shelf", "hob", "cupboard"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 57.266666666666666,
          correct_fixture: "sink",
          display_correct_answer: "sink",
          raw_correct_fixture: "P01_sink.001",
          fixture_type_pool: [
            "counter",
            "cupboard",
            "dishwasher",
            "drawer",
            "fridgefreezer",
            "hob",
            "shelf",
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
            "At the current time <TIME 00:04:53.0 video 1>, consider the right hand glove that was moved earlier. Using its last known position to infer its current location, in which direction is the right hand glove from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 293.0,
            camera_coordinates: [
              1.257275521831012, 0.7013598658523568, -0.194009366215255,
            ],
            world_coordinates: [
              -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.257275521831012,
              z: -0.194009366215255,
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
            "At the current time <TIME 00:04:53.0 video 1>, consider the right hand glove that was moved earlier. Using its last known position to infer its current location, and using the current position of the pasta box (marked in red) in the current frame, where is the right hand glove relative to pasta box from your viewpoint?",
          choices: ["Front-right", "Back-right", "Back-left", "Front-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "4f8930764a85086a",
            object_x_name: "right hand glove",
            object_x_reference_time_sec: 293.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.979558517980091, -3.5578786697685327, -0.6404180885067515,
            ],
            object_x_camera_coordinates: [
              1.257275521831012, 0.7013598658523568, -0.194009366215255,
            ],
            object_y_assoc_id: "6ae79daa7ca78194",
            object_y_name: "pasta box",
            object_y_reference_time_sec: 293.0,
            object_y_world_coordinates: [
              -0.10559997408442437, -2.625266053377213, -0.485917430540896,
            ],
            object_y_projected_pixel: [1108.7196327192046, 840.0954028136786],
            object_y_normalized_projected_pixel: [
              0.7874429209653442, 0.5966586667710785,
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
            "At the current time <TIME 00:04:53.0 video 1>, consider the right hand glove that was moved earlier. Using its last known position to infer its current location, and using the current position of the pasta box (marked in red) in the current frame, how far is the right hand glove from the pasta box: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "4f8930764a85086a",
            object_x_name: "right hand glove",
            object_x_reference_time_sec: 293.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "6ae79daa7ca78194",
            object_y_name: "pasta box",
            object_y_pixel: [1108.7196327192046, 840.0954028136786],
            object_y_normalized_projected_pixel: [
              0.7874429209653442, 0.5966586667710785,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8126642555479506, 0.5562437752978364, -0.8292224986151088,
            ],
            distance_m: 1.2874161262048798,
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
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "6712c70397c667be",
    object_a_name: "kettle",
    query_time_sec: 302.0,
    query_time_in_clip_sec: 302.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 302.0,
    clip_duration_sec: 302.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "6712c70397c667be",
      object_name: "kettle",
      query_time_sec: 302.0,
      oos_span_start_sec: 297.0,
      oos_span_end_sec: 308.0,
      oos_duration_sec: 11.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 302.0,
      clip_duration_sec: 302.0,
      anchor_assoc_id: "5ebec360a68f00c4",
      anchor_name: "strainer",
      anchor_projected_pixel: [977.7437200145332, 1046.1179657687992],
      anchor_world_coordinates: [
        -0.22029195688110162, -2.5474176905549566, -0.5941908201859134,
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
          "At the current time <TIME 00:05:02.0 video 1>, is the previously moved kettle visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [3190.778439419033, 1186.3113140054793],
          camera_coordinates: [
            1.075871193952103, 0.22626868703959835, 0.2598900381714424,
          ],
          frame_index: 7922,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The kettle was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:56.0 video 1>; Point=(0.9605, 0.4369)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 296.0,
          sampled_last_visible_time_in_clip_sec: 296.0,
          sampled_last_visible_time_token: "<TIME 00:04:56.0 video 1>",
          projected_pixel: [1352.3732896824836, 615.2250993418971],
          normalized_projected_pixel: [0.9604923932404003, 0.43694964441896106],
          camera_coordinates: [
            1.0244511310755162, -0.14194526588262052, 0.7981930981353289,
          ],
          frame_index: 7922,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 296.0,
              time_token: "<TIME 00:04:56.0 video 1>",
              projected_pixel: [1352.3732896824836, 615.2250993418971],
              normalized_projected_pixel: [
                0.9604923932404003, 0.43694964441896106,
              ],
              camera_coordinates: [
                1.0244511310755162, -0.14194526588262052, 0.7981930981353289,
              ],
              frame_index: 7922,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
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
          "The kettle was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:24.1 video 1>; Point=(0.6716, 0.6989)",
          "<TIME 00:04:25.0 video 1>; Point=(0.6929, 0.6941)",
          "<TIME 00:04:26.0 video 1>; Point=(11.046, 0.9456)",
          "<TIME 00:04:27.0 video 1>; Point=(952.5662, -245.5482)",
        ],
        answer_metadata: {
          last_placement_time_sec: 264.06666666666666,
          last_placement_time_in_clip_sec: 264.06666666666666,
          last_placement_time_token: "<TIME 00:04:24.1 video 1>",
          projected_pixel: [945.5555249583563, 984.1199285788384],
          normalized_projected_pixel: [0.6715593217033781, 0.6989488129111069],
          camera_coordinates: [
            0.18330097122558708, 0.2062051372222285, 0.4430696425402655,
          ],
          frame_index: 7922,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 264.06666666666666,
              time_token: "<TIME 00:04:24.1 video 1>",
              projected_pixel: [945.5555249583563, 984.1199285788384],
              normalized_projected_pixel: [
                0.6715593217033781, 0.6989488129111069,
              ],
              camera_coordinates: [
                0.18330097122558708, 0.2062051372222285, 0.4430696425402655,
              ],
              frame_index: 7922,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [975.5463503318392, 977.2832577655039],
              normalized_projected_pixel: [
                0.6928596238152267, 0.6940932228448181,
              ],
              camera_coordinates: [
                0.20192893796366862, 0.19757492807716548, 0.4332762337910937,
              ],
              frame_index: 7950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 266.0,
              time_token: "<TIME 00:04:26.0 video 1>",
              projected_pixel: [15552.828033713475, 1331.4335231599418],
              normalized_projected_pixel: [
                11.046042637580593, 0.9456203999715496,
              ],
              camera_coordinates: [
                0.8964318104908262, 0.3486352857985888, 0.1299824599774575,
              ],
              frame_index: 7980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 267.0,
              time_token: "<TIME 00:04:27.0 video 1>",
              projected_pixel: [1341213.2317459122, -345731.90425693936],
              normalized_projected_pixel: [
                952.5662157286308, -245.5482274552126,
              ],
              camera_coordinates: [
                1.1141218704892706, 0.3721103662907417, 0.025460983712639607,
              ],
              frame_index: 8010,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
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
          "At the current time <TIME 00:05:02.0 video 1>, based on the last known position of the kettle that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 264.06666666666666,
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
            "At the current time <TIME 00:05:02.0 video 1>, consider the kettle that was moved earlier. Using its last known position to infer its current location, in which direction is the kettle from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 302.0,
            camera_coordinates: [
              1.075871193952103, 0.22626868703959835, 0.2598900381714424,
            ],
            world_coordinates: [
              -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.075871193952103,
              z: 0.2598900381714424,
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
            "At the current time <TIME 00:05:02.0 video 1>, consider the kettle that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, where is the kettle relative to strainer from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "6712c70397c667be",
            object_x_name: "kettle",
            object_x_reference_time_sec: 302.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
            ],
            object_x_camera_coordinates: [
              1.075871193952103, 0.22626868703959835, 0.2598900381714424,
            ],
            object_y_assoc_id: "5ebec360a68f00c4",
            object_y_name: "strainer",
            object_y_reference_time_sec: 302.0,
            object_y_world_coordinates: [
              -0.22029195688110162, -2.5474176905549566, -0.5941908201859134,
            ],
            object_y_projected_pixel: [977.7437200145332, 1046.1179657687992],
            object_y_normalized_projected_pixel: [
              0.69442025569214, 0.7429815097789767,
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
            "At the current time <TIME 00:05:02.0 video 1>, consider the kettle that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, how far is the kettle from the strainer: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "6712c70397c667be",
            object_x_name: "kettle",
            object_x_reference_time_sec: 302.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "5ebec360a68f00c4",
            object_y_name: "strainer",
            object_y_pixel: [977.7437200145332, 1046.1179657687992],
            object_y_normalized_projected_pixel: [
              0.69442025569214, 0.7429815097789767,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.793630687688681, -0.11723807349318605, -0.330318105004603,
            ],
            distance_m: 0.8675854337247914,
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
  oos_staged_h5p0_20: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "001d4f1c5bdf97a7",
    object_a_name: "galss2",
    query_time_sec: 303.0,
    query_time_in_clip_sec: 303.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 303.0,
    clip_duration_sec: 303.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "001d4f1c5bdf97a7",
      object_name: "galss2",
      query_time_sec: 303.0,
      oos_span_start_sec: 298.0,
      oos_span_end_sec: 308.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 303.0,
      clip_duration_sec: 303.0,
      anchor_assoc_id: "6ae79daa7ca78194",
      anchor_name: "pasta box",
      anchor_projected_pixel: [1069.1768511691546, 902.2624318612169],
      anchor_world_coordinates: [
        -0.10559997408442437, -2.625266053377213, -0.485917430540896,
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
          "At the current time <TIME 00:05:03.0 video 1>, is the previously moved galss2 visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1974.826533215403, 1288.5803029848664],
          camera_coordinates: [
            0.7943341735360216, 0.36616930439486106, 0.2631592988604132,
          ],
          frame_index: 6838,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The galss2 was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:56.0 video 1>; Point=(0.9558, 0.5477)",
          "<TIME 00:04:57.0 video 1>; Point=(0.9703, 0.6295)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 297.0,
          sampled_last_visible_time_in_clip_sec: 297.0,
          sampled_last_visible_time_token: "<TIME 00:04:57.0 video 1>",
          projected_pixel: [1366.1930079524652, 886.3125118223445],
          normalized_projected_pixel: [0.9703075340571486, 0.6294833180556424],
          camera_coordinates: [
            0.7451814201614066, 0.2013379667859318, 0.5438830134637442,
          ],
          frame_index: 6838,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 296.0,
              time_token: "<TIME 00:04:56.0 video 1>",
              projected_pixel: [1345.7338452311265, 771.1215731851228],
              normalized_projected_pixel: [
                0.9557768787152887, 0.5476715718644338,
              ],
              camera_coordinates: [
                0.850183654971338, 0.08564013675219717, 0.6765075344310226,
              ],
              frame_index: 6838,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 297.0,
              time_token: "<TIME 00:04:57.0 video 1>",
              projected_pixel: [1366.1930079524652, 886.3125118223445],
              normalized_projected_pixel: [
                0.9703075340571486, 0.6294833180556424,
              ],
              camera_coordinates: [
                0.7451814201614066, 0.2013379667859318, 0.5438830134637442,
              ],
              frame_index: 6838,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
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
          "The galss2 was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:47.9 video 1>; Point=(0.6458, 0.7601)",
          "<TIME 00:03:48.0 video 1>; Point=(0.6479, 0.7716)",
          "<TIME 00:03:49.0 video 1>; Point=(0.6561, 0.927)",
          "<TIME 00:03:50.0 video 1>; Point=(0.6418, 0.9785)",
        ],
        answer_metadata: {
          last_placement_time_sec: 227.93333333333334,
          last_placement_time_in_clip_sec: 227.93333333333334,
          last_placement_time_token: "<TIME 00:03:47.9 video 1>",
          projected_pixel: [909.2697460780184, 1070.2619759730349],
          normalized_projected_pixel: [0.6457881719304108, 0.7601292442990304],
          camera_coordinates: [
            0.1566898345514276, 0.27060642718163114, 0.43703028894695894,
          ],
          frame_index: 6838,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 227.93333333333334,
              time_token: "<TIME 00:03:47.9 video 1>",
              projected_pixel: [909.2697460780184, 1070.2619759730349],
              normalized_projected_pixel: [
                0.6457881719304108, 0.7601292442990304,
              ],
              camera_coordinates: [
                0.1566898345514276, 0.27060642718163114, 0.43703028894695894,
              ],
              frame_index: 6838,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 228.0,
              time_token: "<TIME 00:03:48.0 video 1>",
              projected_pixel: [912.195113542486, 1086.425572986021],
              normalized_projected_pixel: [
                0.6478658476864246, 0.7716090717230263,
              ],
              camera_coordinates: [
                0.15810691923689602, 0.281252529496131, 0.4325158409039359,
              ],
              frame_index: 6840,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 229.0,
              time_token: "<TIME 00:03:49.0 video 1>",
              projected_pixel: [923.8285898108031, 1305.1956832601313],
              normalized_projected_pixel: [
                0.6561282598088091, 0.9269855704972524,
              ],
              camera_coordinates: [
                0.1654024589248837, 0.4392568456853313, 0.38096677062941176,
              ],
              frame_index: 6870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 230.0,
              time_token: "<TIME 00:03:50.0 video 1>",
              projected_pixel: [903.5997798002451, 1377.6674922870625],
              normalized_projected_pixel: [
                0.6417612072444923, 0.9784570257720614,
              ],
              camera_coordinates: [
                0.15079344120758087, 0.49307512137667214, 0.3498682509903749,
              ],
              frame_index: 6900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
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
          "At the current time <TIME 00:05:03.0 video 1>, based on the last known position of the galss2 that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area next to the window",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 227.93333333333334,
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
            "At the current time <TIME 00:05:03.0 video 1>, consider the galss2 that was moved earlier. Using its last known position to infer its current location, in which direction is the galss2 from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 303.0,
            camera_coordinates: [
              0.7943341735360216, 0.36616930439486106, 0.2631592988604132,
            ],
            world_coordinates: [
              -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7943341735360216,
              z: 0.2631592988604132,
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
            "At the current time <TIME 00:05:03.0 video 1>, consider the galss2 that was moved earlier. Using its last known position to infer its current location, and using the current position of the pasta box (marked in red) in the current frame, where is the galss2 relative to pasta box from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "001d4f1c5bdf97a7",
            object_x_name: "galss2",
            object_x_reference_time_sec: 303.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
            ],
            object_x_camera_coordinates: [
              0.7943341735360216, 0.36616930439486106, 0.2631592988604132,
            ],
            object_y_assoc_id: "6ae79daa7ca78194",
            object_y_name: "pasta box",
            object_y_reference_time_sec: 303.0,
            object_y_world_coordinates: [
              -0.10559997408442437, -2.625266053377213, -0.485917430540896,
            ],
            object_y_projected_pixel: [1069.1768511691546, 902.2624318612169],
            object_y_normalized_projected_pixel: [
              0.7593585590690018, 0.6408113862650688,
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
            "At the current time <TIME 00:05:03.0 video 1>, consider the galss2 that was moved earlier. Using its last known position to infer its current location, and using the current position of the pasta box (marked in red) in the current frame, how far is the galss2 from the pasta box: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "001d4f1c5bdf97a7",
            object_x_name: "galss2",
            object_x_reference_time_sec: 303.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "6ae79daa7ca78194",
            object_y_name: "pasta box",
            object_y_pixel: [1069.1768511691546, 902.2624318612169],
            object_y_normalized_projected_pixel: [
              0.7593585590690018, 0.6408113862650688,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.4090561390266698, 0.16240068626521453, -0.3485470320476243,
            ],
            distance_m: 0.5614142332752408,
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
  oos_staged_h5p0_21: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "3b8a02b6d19b4146",
    object_a_name: "weighing scales",
    query_time_sec: 303.0,
    query_time_in_clip_sec: 303.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 303.0,
    clip_duration_sec: 303.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "3b8a02b6d19b4146",
      object_name: "weighing scales",
      query_time_sec: 303.0,
      oos_span_start_sec: 298.0,
      oos_span_end_sec: 308.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 303.0,
      clip_duration_sec: 303.0,
      anchor_assoc_id: "733a851847a89247",
      anchor_name: "parmesan cheese",
      anchor_projected_pixel: [1202.6238354262143, 1041.9984501755068],
      anchor_world_coordinates: [
        -0.18945456451591303, -2.7744082578368703, -0.5673310990587611,
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
          "At the current time <TIME 00:05:03.0 video 1>, is the previously moved weighing scales visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1437.2452871769456, 1248.5721839586072],
          camera_coordinates: [
            0.5762593334115365, 0.42375447789862275, 0.2757523367483856,
          ],
          frame_index: 4665,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The weighing scales was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:56.0 video 1>; Point=(0.9306, 0.6354)",
          "<TIME 00:04:57.0 video 1>; Point=(0.9141, 0.7318)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 297.0,
          sampled_last_visible_time_in_clip_sec: 297.0,
          sampled_last_visible_time_token: "<TIME 00:04:57.0 video 1>",
          projected_pixel: [1287.0677350511112, 1030.3613530582488],
          normalized_projected_pixel: [0.9141106072806188, 0.7317907337061427],
          camera_coordinates: [
            0.5578440715954511, 0.30738471941879925, 0.47539887811600917,
          ],
          frame_index: 4665,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 296.0,
              time_token: "<TIME 00:04:56.0 video 1>",
              projected_pixel: [1310.3535629003825, 894.6267894544071],
              normalized_projected_pixel: [
                0.9306488372872035, 0.6353883447829596,
              ],
              camera_coordinates: [
                0.6870228894422121, 0.21178770567081412, 0.5843303780749161,
              ],
              frame_index: 4665,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 297.0,
              time_token: "<TIME 00:04:57.0 video 1>",
              projected_pixel: [1287.0677350511112, 1030.3613530582488],
              normalized_projected_pixel: [
                0.9141106072806188, 0.7317907337061427,
              ],
              camera_coordinates: [
                0.5578440715954511, 0.30738471941879925, 0.47539887811600917,
              ],
              frame_index: 4665,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
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
          "The weighing scales was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:35.5 video 1>; Point=(0.5857, 0.7435)",
          "<TIME 00:02:36.0 video 1>; Point=(0.5732, 0.7187)",
          "<TIME 00:02:37.0 video 1>; Point=(0.5873, 0.7044)",
          "<TIME 00:02:38.0 video 1>; Point=(0.5216, 0.7512)",
        ],
        answer_metadata: {
          last_placement_time_sec: 155.5,
          last_placement_time_in_clip_sec: 155.5,
          last_placement_time_token: "<TIME 00:02:35.5 video 1>",
          projected_pixel: [824.6436533430087, 1046.8940840497758],
          normalized_projected_pixel: [0.5856844128856596, 0.7435327301489885],
          camera_coordinates: [
            0.09505897430926291, 0.25681213730215185, 0.4509960031445411,
          ],
          frame_index: 4665,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 155.5,
              time_token: "<TIME 00:02:35.5 video 1>",
              projected_pixel: [824.6436533430087, 1046.8940840497758],
              normalized_projected_pixel: [
                0.5856844128856596, 0.7435327301489885,
              ],
              camera_coordinates: [
                0.09505897430926291, 0.25681213730215185, 0.4509960031445411,
              ],
              frame_index: 4665,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 156.0,
              time_token: "<TIME 00:02:36.0 video 1>",
              projected_pixel: [807.0652838838374, 1011.9144052382447],
              normalized_projected_pixel: [
                0.57319977548568, 0.7186892082657989,
              ],
              camera_coordinates: [
                0.08295615756237718, 0.23378082712959525, 0.4618121362370593,
              ],
              frame_index: 4680,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 157.0,
              time_token: "<TIME 00:02:37.0 video 1>",
              projected_pixel: [826.9641395952506, 991.7622497954729],
              normalized_projected_pixel: [
                0.5873324855079904, 0.704376597866103,
              ],
              camera_coordinates: [
                0.09443115708987149, 0.2100572059435402, 0.44529254073337715,
              ],
              frame_index: 4710,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 158.0,
              time_token: "<TIME 00:02:38.0 video 1>",
              projected_pixel: [734.4696784633487, 1057.7562865422049],
              normalized_projected_pixel: [
                0.5216403966359011, 0.7512473626009978,
              ],
              camera_coordinates: [
                0.024683423032731078, 0.24166275614864363, 0.4122189204899505,
              ],
              frame_index: 4740,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
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
          "At the current time <TIME 00:05:03.0 video 1>, based on the last known position of the weighing scales that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 155.5,
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
            "At the current time <TIME 00:05:03.0 video 1>, consider the weighing scales that was moved earlier. Using its last known position to infer its current location, in which direction is the weighing scales from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 303.0,
            camera_coordinates: [
              0.5762593334115365, 0.42375447789862275, 0.2757523367483856,
            ],
            world_coordinates: [
              -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.5762593334115365,
              z: 0.2757523367483856,
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
            "At the current time <TIME 00:05:03.0 video 1>, consider the weighing scales that was moved earlier. Using its last known position to infer its current location, and using the current position of the parmesan cheese (marked in red) in the current frame, where is the weighing scales relative to parmesan cheese from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 0,
          acceptable_idxs: [0],
          answer_metadata: {
            object_x_assoc_id: "3b8a02b6d19b4146",
            object_x_name: "weighing scales",
            object_x_reference_time_sec: 303.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
            ],
            object_x_camera_coordinates: [
              0.5762593334115365, 0.42375447789862275, 0.2757523367483856,
            ],
            object_y_assoc_id: "733a851847a89247",
            object_y_name: "parmesan cheese",
            object_y_reference_time_sec: 303.0,
            object_y_world_coordinates: [
              -0.18945456451591303, -2.7744082578368703, -0.5673310990587611,
            ],
            object_y_projected_pixel: [1202.6238354262143, 1041.9984501755068],
            object_y_normalized_projected_pixel: [
              0.8541362467515726, 0.7400557174541952,
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
            "At the current time <TIME 00:05:03.0 video 1>, consider the weighing scales that was moved earlier. Using its last known position to infer its current location, and using the current position of the parmesan cheese (marked in red) in the current frame, how far is the weighing scales from the parmesan cheese: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "3b8a02b6d19b4146",
            object_x_name: "weighing scales",
            object_x_reference_time_sec: 303.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "733a851847a89247",
            object_y_name: "parmesan cheese",
            object_y_pixel: [1202.6238354262143, 1041.9984501755068],
            object_y_normalized_projected_pixel: [
              0.8541362467515726, 0.7400557174541952,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.07804421235426906, 0.09185786441058352, -0.2539076280209611,
            ],
            distance_m: 0.2810655615747012,
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
  oos_staged_h5p0_22: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "841dd6ff987bcbab",
    object_a_name: "water filter",
    query_time_sec: 303.0,
    query_time_in_clip_sec: 303.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 303.0,
    clip_duration_sec: 303.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "841dd6ff987bcbab",
      object_name: "water filter",
      query_time_sec: 303.0,
      oos_span_start_sec: 298.0,
      oos_span_end_sec: 308.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 303.0,
      clip_duration_sec: 303.0,
      anchor_assoc_id: "548b751c64ce1ca6",
      anchor_name: "butter",
      anchor_projected_pixel: [1159.8104005820464, 1086.467215491095],
      anchor_world_coordinates: [
        -0.27031266627680134, -2.705543992169007, -0.5402038957757346,
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
          "At the current time <TIME 00:05:03.0 video 1>, is the previously moved water filter visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1973.101390751254, 1094.0017589103009],
          camera_coordinates: [
            0.9577946573724225, 0.29465766245317826, 0.30885951194288697,
          ],
          frame_index: 6823,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The water filter was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:56.0 video 1>; Point=(0.9396, 0.4875)",
          "<TIME 00:04:57.0 video 1>; Point=(0.9707, 0.5541)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 297.0,
          sampled_last_visible_time_in_clip_sec: 297.0,
          sampled_last_visible_time_token: "<TIME 00:04:57.0 video 1>",
          projected_pixel: [1366.7690359727533, 780.2327245103571],
          normalized_projected_pixel: [0.9707166448670123, 0.5541425600215605],
          camera_coordinates: [
            0.8578391137263099, 0.09543297404009438, 0.6439536424072536,
          ],
          frame_index: 6823,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 296.0,
              time_token: "<TIME 00:04:56.0 video 1>",
              projected_pixel: [1323.0202596339386, 686.3757655450273],
              normalized_projected_pixel: [
                0.9396450707627405, 0.48748278802913875,
              ],
              camera_coordinates: [
                0.9364087555106395, -0.029313438153662885, 0.7917145734449613,
              ],
              frame_index: 6823,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 297.0,
              time_token: "<TIME 00:04:57.0 video 1>",
              projected_pixel: [1366.7690359727533, 780.2327245103571],
              normalized_projected_pixel: [
                0.9707166448670123, 0.5541425600215605,
              ],
              camera_coordinates: [
                0.8578391137263099, 0.09543297404009438, 0.6439536424072536,
              ],
              frame_index: 6823,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
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
          "The water filter was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:47.4 video 1>; Point=(0.7684, 0.6373)",
          "<TIME 00:03:48.0 video 1>; Point=(0.735, 0.6541)",
          "<TIME 00:03:49.0 video 1>; Point=(0.7358, 0.8048)",
          "<TIME 00:03:50.0 video 1>; Point=(0.7233, 0.8622)",
        ],
        answer_metadata: {
          last_placement_time_sec: 227.43333333333334,
          last_placement_time_in_clip_sec: 227.43333333333334,
          last_placement_time_token: "<TIME 00:03:47.4 video 1>",
          projected_pixel: [1081.8611629925913, 897.2728156787665],
          normalized_projected_pixel: [0.7683673032617836, 0.6372676247718512],
          camera_coordinates: [
            0.3262417579645467, 0.16259191234187353, 0.49927160543497406,
          ],
          frame_index: 6823,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 227.43333333333334,
              time_token: "<TIME 00:03:47.4 video 1>",
              projected_pixel: [1081.8611629925913, 897.2728156787665],
              normalized_projected_pixel: [
                0.7683673032617836, 0.6372676247718512,
              ],
              camera_coordinates: [
                0.3262417579645467, 0.16259191234187353, 0.49927160543497406,
              ],
              frame_index: 6823,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 228.0,
              time_token: "<TIME 00:03:48.0 video 1>",
              projected_pixel: [1034.838371889072, 920.9361013413882],
              normalized_projected_pixel: [
                0.7349704345803069, 0.6540739356117814,
              ],
              camera_coordinates: [
                0.2926918013494011, 0.1868544747851174, 0.5155680591678011,
              ],
              frame_index: 6840,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 229.0,
              time_token: "<TIME 00:03:49.0 video 1>",
              projected_pixel: [1035.960793216494, 1133.186471646833],
              normalized_projected_pixel: [
                0.7357676088185326, 0.8048199372491712,
              ],
              camera_coordinates: [
                0.29827208118616033, 0.3772797786096811, 0.4924399100929394,
              ],
              frame_index: 6870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 230.0,
              time_token: "<TIME 00:03:50.0 video 1>",
              projected_pixel: [1018.4512129617954, 1213.9225031944313],
              normalized_projected_pixel: [
                0.7233318273876388, 0.862160868746045,
              ],
              camera_coordinates: [
                0.28056182304255195, 0.4450070013985617, 0.4714058052800355,
              ],
              frame_index: 6900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
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
          "At the current time <TIME 00:05:03.0 video 1>, based on the last known position of the water filter that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area below the boiler",
          "counter area close to the microwave",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 227.43333333333334,
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
            "At the current time <TIME 00:05:03.0 video 1>, consider the water filter that was moved earlier. Using its last known position to infer its current location, in which direction is the water filter from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 303.0,
            camera_coordinates: [
              0.9577946573724225, 0.29465766245317826, 0.30885951194288697,
            ],
            world_coordinates: [
              -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.9577946573724225,
              z: 0.30885951194288697,
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
            "At the current time <TIME 00:05:03.0 video 1>, consider the water filter that was moved earlier. Using its last known position to infer its current location, and using the current position of the butter (marked in red) in the current frame, where is the water filter relative to butter from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "841dd6ff987bcbab",
            object_x_name: "water filter",
            object_x_reference_time_sec: 303.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
            ],
            object_x_camera_coordinates: [
              0.9577946573724225, 0.29465766245317826, 0.30885951194288697,
            ],
            object_y_assoc_id: "548b751c64ce1ca6",
            object_y_name: "butter",
            object_y_reference_time_sec: 303.0,
            object_y_world_coordinates: [
              -0.27031266627680134, -2.705543992169007, -0.5402038957757346,
            ],
            object_y_projected_pixel: [1159.8104005820464, 1086.467215491095],
            object_y_normalized_projected_pixel: [
              0.8237289776861125, 0.7716386473658345,
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
            "At the current time <TIME 00:05:03.0 video 1>, consider the water filter that was moved earlier. Using its last known position to infer its current location, and using the current position of the butter (marked in red) in the current frame, how far is the water filter from the butter: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "841dd6ff987bcbab",
            object_x_name: "water filter",
            object_x_reference_time_sec: 303.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "548b751c64ce1ca6",
            object_y_name: "butter",
            object_y_pixel: [1159.8104005820464, 1086.467215491095],
            object_y_normalized_projected_pixel: [
              0.8237289776861125, 0.7716386473658345,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.5532212375153018, -0.03882441807733672, -0.1638362276065326,
            ],
            distance_m: 0.5782762164859847,
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
  oos_staged_h5p0_23: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "eb9e167cc2740d23",
    object_a_name: "salt bottle",
    query_time_sec: 303.0,
    query_time_in_clip_sec: 303.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 303.0,
    clip_duration_sec: 303.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "eb9e167cc2740d23",
      object_name: "salt bottle",
      query_time_sec: 303.0,
      oos_span_start_sec: 298.0,
      oos_span_end_sec: 308.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 303.0,
      clip_duration_sec: 303.0,
      anchor_assoc_id: "181a9557e45e46f6",
      anchor_name: "pan3",
      anchor_projected_pixel: [731.3647540244251, 819.5342347893065],
      anchor_world_coordinates: [
        -0.09570932171617191, -2.2522509187619004, -0.4683339932325733,
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
          "At the current time <TIME 00:05:03.0 video 1>, is the previously moved salt bottle visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1287.7210381138127, 1171.4802220197396],
          camera_coordinates: [
            0.4894601875531204, 0.38668335406314436, 0.34654085546081403,
          ],
          frame_index: 8636,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The salt bottle was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:55.0 video 1>; Point=(0.9351, 0.6995)",
          "<TIME 00:04:56.0 video 1>; Point=(0.8686, 0.6407)",
          "<TIME 00:04:57.0 video 1>; Point=(0.8383, 0.7268)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 297.0,
          sampled_last_visible_time_in_clip_sec: 297.0,
          sampled_last_visible_time_token: "<TIME 00:04:57.0 video 1>",
          projected_pixel: [1180.3360329308055, 1023.3977654409914],
          normalized_projected_pixel: [0.8383068415701743, 0.7268450038643405],
          camera_coordinates: [
            0.4444542595090901, 0.2926022917409165, 0.5044437515473728,
          ],
          frame_index: 8636,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 295.0,
              time_token: "<TIME 00:04:55.0 video 1>",
              projected_pixel: [1316.6895546993057, 984.9301275112025],
              normalized_projected_pixel: [
                0.9351488314625751, 0.6995242382892063,
              ],
              camera_coordinates: [
                0.638600774185893, 0.2881385074233214, 0.5138209012547694,
              ],
              frame_index: 8636,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 296.0,
              time_token: "<TIME 00:04:56.0 video 1>",
              projected_pixel: [1222.990924390579, 902.1139398579177],
              normalized_projected_pixel: [
                0.8686015088001272, 0.6407059231945438,
              ],
              camera_coordinates: [
                0.5702285721367053, 0.21307769000132037, 0.6009676167653818,
              ],
              frame_index: 8636,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 297.0,
              time_token: "<TIME 00:04:57.0 video 1>",
              projected_pixel: [1180.3360329308055, 1023.3977654409914],
              normalized_projected_pixel: [
                0.8383068415701743, 0.7268450038643405,
              ],
              camera_coordinates: [
                0.4444542595090901, 0.2926022917409165, 0.5044437515473728,
              ],
              frame_index: 8636,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
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
          "<TIME 00:04:47.9 video 1>; Point=(0.911, 0.7777)",
          "<TIME 00:04:48.0 video 1>; Point=(0.9229, 0.7851)",
          "<TIME 00:04:49.0 video 1>; Point=(0.9849, 0.692)",
          "<TIME 00:04:50.0 video 1>; Point=(0.9558, 0.733)",
        ],
        answer_metadata: {
          last_placement_time_sec: 287.8666666666667,
          last_placement_time_in_clip_sec: 287.8666666666667,
          last_placement_time_token: "<TIME 00:04:47.9 video 1>",
          projected_pixel: [1282.7460222032837, 1094.9617968207149],
          normalized_projected_pixel: [0.9110412089511958, 0.7776717306965305],
          camera_coordinates: [
            0.5077735807333181, 0.3380161975608828, 0.41547825377580216,
          ],
          frame_index: 8636,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 287.8666666666667,
              time_token: "<TIME 00:04:47.9 video 1>",
              projected_pixel: [1282.7460222032837, 1094.9617968207149],
              normalized_projected_pixel: [
                0.9110412089511958, 0.7776717306965305,
              ],
              camera_coordinates: [
                0.5077735807333181, 0.3380161975608828, 0.41547825377580216,
              ],
              frame_index: 8636,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 288.0,
              time_token: "<TIME 00:04:48.0 video 1>",
              projected_pixel: [1299.4504370438324, 1105.4402259219369],
              normalized_projected_pixel: [
                0.9229051399459037, 0.7851137968195574,
              ],
              camera_coordinates: [
                0.5251635995544044, 0.3490654003060416, 0.39987604894676754,
              ],
              frame_index: 8640,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 289.0,
              time_token: "<TIME 00:04:49.0 video 1>",
              projected_pixel: [1386.692429364823, 974.389621377054],
              normalized_projected_pixel: [
                0.9848667822193345, 0.692038083364385,
              ],
              camera_coordinates: [
                0.6558474874555085, 0.2559100472569711, 0.4153152065696678,
              ],
              frame_index: 8670,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 290.0,
              time_token: "<TIME 00:04:50.0 video 1>",
              projected_pixel: [1345.7198516945195, 1032.0183099828973],
              normalized_projected_pixel: [
                0.9557669401239486, 0.7329675497037623,
              ],
              camera_coordinates: [
                0.6075468130126436, 0.30609707364820543, 0.4262568021207946,
              ],
              frame_index: 8700,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
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
          "At the current time <TIME 00:05:03.0 video 1>, based on the last known position of the salt bottle that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area close to the microwave",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 287.8666666666667,
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
            "At the current time <TIME 00:05:03.0 video 1>, consider the salt bottle that was moved earlier. Using its last known position to infer its current location, in which direction is the salt bottle from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 303.0,
            camera_coordinates: [
              0.4894601875531204, 0.38668335406314436, 0.34654085546081403,
            ],
            world_coordinates: [
              -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.4894601875531204,
              z: 0.34654085546081403,
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
            "At the current time <TIME 00:05:03.0 video 1>, consider the salt bottle that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan3 (marked in red) in the current frame, where is the salt bottle relative to pan3 from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "eb9e167cc2740d23",
            object_x_name: "salt bottle",
            object_x_reference_time_sec: 303.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
            ],
            object_x_camera_coordinates: [
              0.4894601875531204, 0.38668335406314436, 0.34654085546081403,
            ],
            object_y_assoc_id: "181a9557e45e46f6",
            object_y_name: "pan3",
            object_y_reference_time_sec: 303.0,
            object_y_world_coordinates: [
              -0.09570932171617191, -2.2522509187619004, -0.4683339932325733,
            ],
            object_y_projected_pixel: [731.3647540244251, 819.5342347893065],
            object_y_normalized_projected_pixel: [
              0.5194351946196201, 0.5820555644810416,
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
            "At the current time <TIME 00:05:03.0 video 1>, consider the salt bottle that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan3 (marked in red) in the current frame, how far is the salt bottle from the pan3: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "eb9e167cc2740d23",
            object_x_name: "salt bottle",
            object_x_reference_time_sec: 303.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "181a9557e45e46f6",
            object_y_name: "pan3",
            object_y_pixel: [731.3647540244251, 819.5342347893065],
            object_y_normalized_projected_pixel: [
              0.5194351946196201, 0.5820555644810416,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.4505253450642588, 0.2512435101564712, -0.3873328396578375,
            ],
            distance_m: 0.645076054910131,
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
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "001d4f1c5bdf97a7",
    object_a_name: "galss2",
    query_time_sec: 322.0,
    query_time_in_clip_sec: 322.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 322.0,
    clip_duration_sec: 322.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "001d4f1c5bdf97a7",
      object_name: "galss2",
      query_time_sec: 322.0,
      oos_span_start_sec: 317.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 322.0,
      clip_duration_sec: 322.0,
      anchor_assoc_id: "181a9557e45e46f6",
      anchor_name: "pan3",
      anchor_projected_pixel: [967.9843060807736, 228.70474968122807],
      anchor_world_coordinates: [
        -0.08076216737530556, -2.264470111404094, -0.4844248067807946,
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
          "At the current time <TIME 00:05:22.0 video 1>, is the previously moved galss2 visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1760.2547360170265, 591.8784746058299],
          camera_coordinates: [
            1.0896095491037112, -0.11567998408399127, 0.379312673056328,
          ],
          frame_index: 6838,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The galss2 was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:16.0 video 1>; Point=(0.9385, 0.6705)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 316.0,
          sampled_last_visible_time_in_clip_sec: 316.0,
          sampled_last_visible_time_token: "<TIME 00:05:16.0 video 1>",
          projected_pixel: [1321.3983054572968, 944.006307618792],
          normalized_projected_pixel: [0.9384931146713756, 0.6704590252974375],
          camera_coordinates: [
            0.6520083633236582, 0.24913399495129082, 0.5287415803061217,
          ],
          frame_index: 6838,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 316.0,
              time_token: "<TIME 00:05:16.0 video 1>",
              projected_pixel: [1321.3983054572968, 944.006307618792],
              normalized_projected_pixel: [
                0.9384931146713756, 0.6704590252974375,
              ],
              camera_coordinates: [
                0.6520083633236582, 0.24913399495129082, 0.5287415803061217,
              ],
              frame_index: 6838,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
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
          "The galss2 was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:47.9 video 1>; Point=(0.6458, 0.7601)",
          "<TIME 00:03:48.0 video 1>; Point=(0.6479, 0.7716)",
          "<TIME 00:03:49.0 video 1>; Point=(0.6561, 0.927)",
          "<TIME 00:03:50.0 video 1>; Point=(0.6418, 0.9785)",
        ],
        answer_metadata: {
          last_placement_time_sec: 227.93333333333334,
          last_placement_time_in_clip_sec: 227.93333333333334,
          last_placement_time_token: "<TIME 00:03:47.9 video 1>",
          projected_pixel: [909.2697460780184, 1070.2619759730349],
          normalized_projected_pixel: [0.6457881719304108, 0.7601292442990304],
          camera_coordinates: [
            0.1566898345514276, 0.27060642718163114, 0.43703028894695894,
          ],
          frame_index: 6838,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 227.93333333333334,
              time_token: "<TIME 00:03:47.9 video 1>",
              projected_pixel: [909.2697460780184, 1070.2619759730349],
              normalized_projected_pixel: [
                0.6457881719304108, 0.7601292442990304,
              ],
              camera_coordinates: [
                0.1566898345514276, 0.27060642718163114, 0.43703028894695894,
              ],
              frame_index: 6838,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 228.0,
              time_token: "<TIME 00:03:48.0 video 1>",
              projected_pixel: [912.195113542486, 1086.425572986021],
              normalized_projected_pixel: [
                0.6478658476864246, 0.7716090717230263,
              ],
              camera_coordinates: [
                0.15810691923689602, 0.281252529496131, 0.4325158409039359,
              ],
              frame_index: 6840,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 229.0,
              time_token: "<TIME 00:03:49.0 video 1>",
              projected_pixel: [923.8285898108031, 1305.1956832601313],
              normalized_projected_pixel: [
                0.6561282598088091, 0.9269855704972524,
              ],
              camera_coordinates: [
                0.1654024589248837, 0.4392568456853313, 0.38096677062941176,
              ],
              frame_index: 6870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 230.0,
              time_token: "<TIME 00:03:50.0 video 1>",
              projected_pixel: [903.5997798002451, 1377.6674922870625],
              normalized_projected_pixel: [
                0.6417612072444923, 0.9784570257720614,
              ],
              camera_coordinates: [
                0.15079344120758087, 0.49307512137667214, 0.3498682509903749,
              ],
              frame_index: 6900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
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
          "At the current time <TIME 00:05:22.0 video 1>, based on the last known position of the galss2 that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area below the boiler",
          "counter area next to the window",
          "counter area between the fridge and the hob",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 227.93333333333334,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the galss2 that was moved earlier. Using its last known position to infer its current location, in which direction is the galss2 from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 322.0,
            camera_coordinates: [
              1.0896095491037112, -0.11567998408399127, 0.379312673056328,
            ],
            world_coordinates: [
              -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.0896095491037112,
              z: 0.379312673056328,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the galss2 that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan3 (marked in red) in the current frame, where is the galss2 relative to pan3 from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "001d4f1c5bdf97a7",
            object_x_name: "galss2",
            object_x_reference_time_sec: 322.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3224188379970395, -3.143117570090608, -0.48822572283295324,
            ],
            object_x_camera_coordinates: [
              1.0896095491037112, -0.11567998408399127, 0.379312673056328,
            ],
            object_y_assoc_id: "181a9557e45e46f6",
            object_y_name: "pan3",
            object_y_reference_time_sec: 322.0,
            object_y_world_coordinates: [
              -0.08076216737530556, -2.264470111404094, -0.4844248067807946,
            ],
            object_y_projected_pixel: [967.9843060807736, 228.70474968122807],
            object_y_normalized_projected_pixel: [
              0.6874888537505495, 0.16243235062587222,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the galss2 that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan3 (marked in red) in the current frame, how far is the galss2 from the pan3: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "001d4f1c5bdf97a7",
            object_x_name: "galss2",
            object_x_reference_time_sec: 322.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "181a9557e45e46f6",
            object_y_name: "pan3",
            object_y_pixel: [967.9843060807736, 228.70474968122807],
            object_y_normalized_projected_pixel: [
              0.6874888537505495, 0.16243235062587222,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8374478520839976, 0.33060923431813627, -0.14075645384336904,
            ],
            distance_m: 0.9112813781017837,
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
  oos_staged_h5p0_25: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "3b8a02b6d19b4146",
    object_a_name: "weighing scales",
    query_time_sec: 322.0,
    query_time_in_clip_sec: 322.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 322.0,
    clip_duration_sec: 322.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "3b8a02b6d19b4146",
      object_name: "weighing scales",
      query_time_sec: 322.0,
      oos_span_start_sec: 317.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 322.0,
      clip_duration_sec: 322.0,
      anchor_assoc_id: "181a9557e45e46f6",
      anchor_name: "pan3",
      anchor_projected_pixel: [967.9843060807736, 228.70474968122807],
      anchor_world_coordinates: [
        -0.08076216737530556, -2.264470111404094, -0.4844248067807946,
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
          "At the current time <TIME 00:05:22.0 video 1>, is the previously moved weighing scales visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1525.859916466982, 665.937688749362],
          camera_coordinates: [
            0.8761134963662331, -0.041851115132950145, 0.379233420600133,
          ],
          frame_index: 4665,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The weighing scales was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:16.0 video 1>; Point=(0.8713, 0.7829)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 316.0,
          sampled_last_visible_time_in_clip_sec: 316.0,
          sampled_last_visible_time_token: "<TIME 00:05:16.0 video 1>",
          projected_pixel: [1226.8540189934156, 1102.2550286125472],
          normalized_projected_pixel: [0.8713451839441873, 0.7828515828214114],
          camera_coordinates: [
            0.4660345952746061, 0.3493983459605817, 0.44879103171295115,
          ],
          frame_index: 4665,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 316.0,
              time_token: "<TIME 00:05:16.0 video 1>",
              projected_pixel: [1226.8540189934156, 1102.2550286125472],
              normalized_projected_pixel: [
                0.8713451839441873, 0.7828515828214114,
              ],
              camera_coordinates: [
                0.4660345952746061, 0.3493983459605817, 0.44879103171295115,
              ],
              frame_index: 4665,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
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
          "The weighing scales was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:02:35.5 video 1>; Point=(0.5857, 0.7435)",
          "<TIME 00:02:36.0 video 1>; Point=(0.5732, 0.7187)",
          "<TIME 00:02:37.0 video 1>; Point=(0.5873, 0.7044)",
          "<TIME 00:02:38.0 video 1>; Point=(0.5216, 0.7512)",
        ],
        answer_metadata: {
          last_placement_time_sec: 155.5,
          last_placement_time_in_clip_sec: 155.5,
          last_placement_time_token: "<TIME 00:02:35.5 video 1>",
          projected_pixel: [824.6436533430087, 1046.8940840497758],
          normalized_projected_pixel: [0.5856844128856596, 0.7435327301489885],
          camera_coordinates: [
            0.09505897430926291, 0.25681213730215185, 0.4509960031445411,
          ],
          frame_index: 4665,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 155.5,
              time_token: "<TIME 00:02:35.5 video 1>",
              projected_pixel: [824.6436533430087, 1046.8940840497758],
              normalized_projected_pixel: [
                0.5856844128856596, 0.7435327301489885,
              ],
              camera_coordinates: [
                0.09505897430926291, 0.25681213730215185, 0.4509960031445411,
              ],
              frame_index: 4665,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 156.0,
              time_token: "<TIME 00:02:36.0 video 1>",
              projected_pixel: [807.0652838838374, 1011.9144052382447],
              normalized_projected_pixel: [
                0.57319977548568, 0.7186892082657989,
              ],
              camera_coordinates: [
                0.08295615756237718, 0.23378082712959525, 0.4618121362370593,
              ],
              frame_index: 4680,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 157.0,
              time_token: "<TIME 00:02:37.0 video 1>",
              projected_pixel: [826.9641395952506, 991.7622497954729],
              normalized_projected_pixel: [
                0.5873324855079904, 0.704376597866103,
              ],
              camera_coordinates: [
                0.09443115708987149, 0.2100572059435402, 0.44529254073337715,
              ],
              frame_index: 4710,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 158.0,
              time_token: "<TIME 00:02:38.0 video 1>",
              projected_pixel: [734.4696784633487, 1057.7562865422049],
              normalized_projected_pixel: [
                0.5216403966359011, 0.7512473626009978,
              ],
              camera_coordinates: [
                0.024683423032731078, 0.24166275614864363, 0.4122189204899505,
              ],
              frame_index: 4740,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
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
          "At the current time <TIME 00:05:22.0 video 1>, based on the last known position of the weighing scales that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area below the boiler",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 155.5,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the weighing scales that was moved earlier. Using its last known position to infer its current location, in which direction is the weighing scales from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 322.0,
            camera_coordinates: [
              0.8761134963662331, -0.041851115132950145, 0.379233420600133,
            ],
            world_coordinates: [
              -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.8761134963662331,
              z: 0.379233420600133,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the weighing scales that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan3 (marked in red) in the current frame, where is the weighing scales relative to pan3 from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "3b8a02b6d19b4146",
            object_x_name: "weighing scales",
            object_x_reference_time_sec: 322.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4129812971872221, -2.942300618771191, -0.5382483752439079,
            ],
            object_x_camera_coordinates: [
              0.8761134963662331, -0.041851115132950145, 0.379233420600133,
            ],
            object_y_assoc_id: "181a9557e45e46f6",
            object_y_name: "pan3",
            object_y_reference_time_sec: 322.0,
            object_y_world_coordinates: [
              -0.08076216737530556, -2.264470111404094, -0.4844248067807946,
            ],
            object_y_projected_pixel: [967.9843060807736, 228.70474968122807],
            object_y_normalized_projected_pixel: [
              0.6874888537505495, 0.16243235062587222,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the weighing scales that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan3 (marked in red) in the current frame, how far is the weighing scales from the pan3: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["far", "close", "medium"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "3b8a02b6d19b4146",
            object_x_name: "weighing scales",
            object_x_reference_time_sec: 322.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "181a9557e45e46f6",
            object_y_name: "pan3",
            object_y_pixel: [967.9843060807736, 228.70474968122807],
            object_y_normalized_projected_pixel: [
              0.6874888537505495, 0.16243235062587222,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6239517993465196, 0.4044381032691774, -0.14083570629956405,
            ],
            distance_m: 0.7567831416281856,
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
  oos_staged_h5p0_26: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "6712c70397c667be",
    object_a_name: "kettle",
    query_time_sec: 322.0,
    query_time_in_clip_sec: 322.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 322.0,
    clip_duration_sec: 322.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "6712c70397c667be",
      object_name: "kettle",
      query_time_sec: 322.0,
      oos_span_start_sec: 317.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 322.0,
      clip_duration_sec: 322.0,
      anchor_assoc_id: "5ebec360a68f00c4",
      anchor_name: "strainer",
      anchor_projected_pixel: [1218.789460106082, 468.4946655668373],
      anchor_world_coordinates: [
        -0.22029195688110162, -2.5474176905549566, -0.5941908201859134,
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
          "At the current time <TIME 00:05:22.0 video 1>, is the previously moved kettle visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [2796.9846899357326, 266.4765611016604],
          camera_coordinates: [
            1.3537235783732262, -0.27787500524719566, 0.3491763198081888,
          ],
          frame_index: 7922,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The kettle was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:16.0 video 1>; Point=(0.9781, 0.5291)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 316.0,
          sampled_last_visible_time_in_clip_sec: 316.0,
          sampled_last_visible_time_token: "<TIME 00:05:16.0 video 1>",
          projected_pixel: [1377.1081387738686, 744.9030096111051],
          normalized_projected_pixel: [0.9780597576518953, 0.5290504329624326],
          camera_coordinates: [
            0.8667958988601403, 0.04987569960271401, 0.6342597846461826,
          ],
          frame_index: 7922,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 316.0,
              time_token: "<TIME 00:05:16.0 video 1>",
              projected_pixel: [1377.1081387738686, 744.9030096111051],
              normalized_projected_pixel: [
                0.9780597576518953, 0.5290504329624326,
              ],
              camera_coordinates: [
                0.8667958988601403, 0.04987569960271401, 0.6342597846461826,
              ],
              frame_index: 7922,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
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
          "The kettle was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:04:24.1 video 1>; Point=(0.6716, 0.6989)",
          "<TIME 00:04:25.0 video 1>; Point=(0.6929, 0.6941)",
          "<TIME 00:04:26.0 video 1>; Point=(11.046, 0.9456)",
          "<TIME 00:04:27.0 video 1>; Point=(952.5662, -245.5482)",
        ],
        answer_metadata: {
          last_placement_time_sec: 264.06666666666666,
          last_placement_time_in_clip_sec: 264.06666666666666,
          last_placement_time_token: "<TIME 00:04:24.1 video 1>",
          projected_pixel: [945.5555249583563, 984.1199285788384],
          normalized_projected_pixel: [0.6715593217033781, 0.6989488129111069],
          camera_coordinates: [
            0.18330097122558708, 0.2062051372222285, 0.4430696425402655,
          ],
          frame_index: 7922,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 264.06666666666666,
              time_token: "<TIME 00:04:24.1 video 1>",
              projected_pixel: [945.5555249583563, 984.1199285788384],
              normalized_projected_pixel: [
                0.6715593217033781, 0.6989488129111069,
              ],
              camera_coordinates: [
                0.18330097122558708, 0.2062051372222285, 0.4430696425402655,
              ],
              frame_index: 7922,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 265.0,
              time_token: "<TIME 00:04:25.0 video 1>",
              projected_pixel: [975.5463503318392, 977.2832577655039],
              normalized_projected_pixel: [
                0.6928596238152267, 0.6940932228448181,
              ],
              camera_coordinates: [
                0.20192893796366862, 0.19757492807716548, 0.4332762337910937,
              ],
              frame_index: 7950,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 266.0,
              time_token: "<TIME 00:04:26.0 video 1>",
              projected_pixel: [15552.828033713475, 1331.4335231599418],
              normalized_projected_pixel: [
                11.046042637580593, 0.9456203999715496,
              ],
              camera_coordinates: [
                0.8964318104908262, 0.3486352857985888, 0.1299824599774575,
              ],
              frame_index: 7980,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 267.0,
              time_token: "<TIME 00:04:27.0 video 1>",
              projected_pixel: [1341213.2317459122, -345731.90425693936],
              normalized_projected_pixel: [
                952.5662157286308, -245.5482274552126,
              ],
              camera_coordinates: [
                1.1141218704892706, 0.3721103662907417, 0.025460983712639607,
              ],
              frame_index: 8010,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
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
          "At the current time <TIME 00:05:22.0 video 1>, based on the last known position of the kettle that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area next to the window",
          "counter area close to the microwave",
          "counter area below the boiler",
        ],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 264.06666666666666,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the kettle that was moved earlier. Using its last known position to infer its current location, in which direction is the kettle from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 322.0,
            camera_coordinates: [
              1.3537235783732262, -0.27787500524719566, 0.3491763198081888,
            ],
            world_coordinates: [
              -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.3537235783732262,
              z: 0.3491763198081888,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the kettle that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, where is the kettle relative to strainer from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-right", "Back-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "6712c70397c667be",
            object_x_name: "kettle",
            object_x_reference_time_sec: 322.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.16626174301380703, -3.382132003077238, -0.3638926715365068,
            ],
            object_x_camera_coordinates: [
              1.3537235783732262, -0.27787500524719566, 0.3491763198081888,
            ],
            object_y_assoc_id: "5ebec360a68f00c4",
            object_y_name: "strainer",
            object_y_reference_time_sec: 322.0,
            object_y_world_coordinates: [
              -0.22029195688110162, -2.5474176905549566, -0.5941908201859134,
            ],
            object_y_projected_pixel: [1218.789460106082, 468.4946655668373],
            object_y_normalized_projected_pixel: [
              0.8656175142798879, 0.33273768861281056,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the kettle that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, how far is the kettle from the strainer: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "close", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "6712c70397c667be",
            object_x_name: "kettle",
            object_x_reference_time_sec: 322.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "5ebec360a68f00c4",
            object_y_name: "strainer",
            object_y_pixel: [1218.789460106082, 468.4946655668373],
            object_y_normalized_projected_pixel: [
              0.8656175142798879, 0.33273768861281056,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8460975729254301, -0.046245927666121345, -0.18623827768595483,
            ],
            distance_m: 0.8675854337247914,
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
  oos_staged_h5p0_27: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "841dd6ff987bcbab",
    object_a_name: "water filter",
    query_time_sec: 322.0,
    query_time_in_clip_sec: 322.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 322.0,
    clip_duration_sec: 322.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "841dd6ff987bcbab",
      object_name: "water filter",
      query_time_sec: 322.0,
      oos_span_start_sec: 317.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 322.0,
      clip_duration_sec: 322.0,
      anchor_assoc_id: "6ae79daa7ca78194",
      anchor_name: "pasta box",
      anchor_projected_pixel: [1287.4760882522198, 342.6149947410808],
      anchor_world_coordinates: [
        -0.10559997408442437, -2.625266053377213, -0.485917430540896,
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
          "At the current time <TIME 00:05:22.0 video 1>, is the previously moved water filter visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1869.0642080593166, 492.46890420061925],
          camera_coordinates: [
            1.2358853737010072, -0.22346201136483512, 0.40944856392787077,
          ],
          frame_index: 6823,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The water filter was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:16.0 video 1>; Point=(0.9403, 0.5871)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 316.0,
          sampled_last_visible_time_in_clip_sec: 316.0,
          sampled_last_visible_time_token: "<TIME 00:05:16.0 video 1>",
          projected_pixel: [1323.9487243083788, 826.590929609333],
          normalized_projected_pixel: [0.9403044916962918, 0.5870674215975377],
          camera_coordinates: [
            0.7615808073418067, 0.1468645758023017, 0.6357770865824371,
          ],
          frame_index: 6823,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 316.0,
              time_token: "<TIME 00:05:16.0 video 1>",
              projected_pixel: [1323.9487243083788, 826.590929609333],
              normalized_projected_pixel: [
                0.9403044916962918, 0.5870674215975377,
              ],
              camera_coordinates: [
                0.7615808073418067, 0.1468645758023017, 0.6357770865824371,
              ],
              frame_index: 6823,
              status: "in_view",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
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
          "The water filter was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:47.4 video 1>; Point=(0.7684, 0.6373)",
          "<TIME 00:03:48.0 video 1>; Point=(0.735, 0.6541)",
          "<TIME 00:03:49.0 video 1>; Point=(0.7358, 0.8048)",
          "<TIME 00:03:50.0 video 1>; Point=(0.7233, 0.8622)",
        ],
        answer_metadata: {
          last_placement_time_sec: 227.43333333333334,
          last_placement_time_in_clip_sec: 227.43333333333334,
          last_placement_time_token: "<TIME 00:03:47.4 video 1>",
          projected_pixel: [1081.8611629925913, 897.2728156787665],
          normalized_projected_pixel: [0.7683673032617836, 0.6372676247718512],
          camera_coordinates: [
            0.3262417579645467, 0.16259191234187353, 0.49927160543497406,
          ],
          frame_index: 6823,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 227.43333333333334,
              time_token: "<TIME 00:03:47.4 video 1>",
              projected_pixel: [1081.8611629925913, 897.2728156787665],
              normalized_projected_pixel: [
                0.7683673032617836, 0.6372676247718512,
              ],
              camera_coordinates: [
                0.3262417579645467, 0.16259191234187353, 0.49927160543497406,
              ],
              frame_index: 6823,
              status: "last_past_track_end",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 228.0,
              time_token: "<TIME 00:03:48.0 video 1>",
              projected_pixel: [1034.838371889072, 920.9361013413882],
              normalized_projected_pixel: [
                0.7349704345803069, 0.6540739356117814,
              ],
              camera_coordinates: [
                0.2926918013494011, 0.1868544747851174, 0.5155680591678011,
              ],
              frame_index: 6840,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 229.0,
              time_token: "<TIME 00:03:49.0 video 1>",
              projected_pixel: [1035.960793216494, 1133.186471646833],
              normalized_projected_pixel: [
                0.7357676088185326, 0.8048199372491712,
              ],
              camera_coordinates: [
                0.29827208118616033, 0.3772797786096811, 0.4924399100929394,
              ],
              frame_index: 6870,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 230.0,
              time_token: "<TIME 00:03:50.0 video 1>",
              projected_pixel: [1018.4512129617954, 1213.9225031944313],
              normalized_projected_pixel: [
                0.7233318273876388, 0.862160868746045,
              ],
              camera_coordinates: [
                0.28056182304255195, 0.4450070013985617, 0.4714058052800355,
              ],
              frame_index: 6900,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.003",
              world_coordinates: [
                -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
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
          "At the current time <TIME 00:05:22.0 video 1>, based on the last known position of the water filter that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area close to the microwave",
          "counter area between the fridge and the hob",
          "counter area next to the window",
        ],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 227.43333333333334,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the water filter that was moved earlier. Using its last known position to infer its current location, in which direction is the water filter from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 322.0,
            camera_coordinates: [
              1.2358853737010072, -0.22346201136483512, 0.40944856392787077,
            ],
            world_coordinates: [
              -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 1.2358853737010072,
              z: 0.40944856392787077,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the water filter that was moved earlier. Using its last known position to infer its current location, and using the current position of the pasta box (marked in red) in the current frame, where is the water filter relative to pasta box from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "841dd6ff987bcbab",
            object_x_name: "water filter",
            object_x_reference_time_sec: 322.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.19645507795212414, -3.271960773312372, -0.4500902495316906,
            ],
            object_x_camera_coordinates: [
              1.2358853737010072, -0.22346201136483512, 0.40944856392787077,
            ],
            object_y_assoc_id: "6ae79daa7ca78194",
            object_y_name: "pasta box",
            object_y_reference_time_sec: 322.0,
            object_y_world_coordinates: [
              -0.10559997408442437, -2.625266053377213, -0.485917430540896,
            ],
            object_y_projected_pixel: [1287.4760882522198, 342.6149947410808],
            object_y_normalized_projected_pixel: [
              0.9144006308609516, 0.24333451331042671,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the water filter that was moved earlier. Using its last known position to infer its current location, and using the current position of the pasta box (marked in red) in the current frame, how far is the water filter from the pasta box: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "medium", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "841dd6ff987bcbab",
            object_x_name: "water filter",
            object_x_reference_time_sec: 322.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "6ae79daa7ca78194",
            object_y_name: "pasta box",
            object_y_pixel: [1287.4760882522198, 342.6149947410808],
            object_y_normalized_projected_pixel: [
              0.9144006308609516, 0.24333451331042671,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6300188496970769, 0.14991320736532443, -0.09140337452032776,
            ],
            distance_m: 0.6540277498622593,
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
  oos_staged_h5p0_28: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "8b3e8b1921153770",
    object_a_name: "jar of black pepper",
    query_time_sec: 322.0,
    query_time_in_clip_sec: 322.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 322.0,
    clip_duration_sec: 322.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "8b3e8b1921153770",
      object_name: "jar of black pepper",
      query_time_sec: 322.0,
      oos_span_start_sec: 317.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 322.0,
      clip_duration_sec: 322.0,
      anchor_assoc_id: "181a9557e45e46f6",
      anchor_name: "pan3",
      anchor_projected_pixel: [967.9843060807736, 228.70474968122807],
      anchor_world_coordinates: [
        -0.08076216737530556, -2.264470111404094, -0.4844248067807946,
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
          "At the current time <TIME 00:05:22.0 video 1>, is the previously moved jar of black pepper visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1421.7878376061835, 550.0066870271731],
          camera_coordinates: [
            0.740981567214575, -0.15942285198957196, 0.4451055218894444,
          ],
          frame_index: 6401,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The jar of black pepper was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:13.0 video 1>; Point=(0.7616, 0.7868)",
          "<TIME 00:05:15.0 video 1>; Point=(0.8943, 0.7651)",
          "<TIME 00:05:16.0 video 1>; Point=(0.7275, 0.7385)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 316.0,
          sampled_last_visible_time_in_clip_sec: 316.0,
          sampled_last_visible_time_token: "<TIME 00:05:16.0 video 1>",
          projected_pixel: [1024.3403285436714, 1039.8159606253732],
          normalized_projected_pixel: [0.7275144378861302, 0.7385056538532481],
          camera_coordinates: [
            0.2991319408963422, 0.30621446828547927, 0.5306539780466399,
          ],
          frame_index: 6401,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 313.0,
              time_token: "<TIME 00:05:13.0 video 1>",
              projected_pixel: [1072.3672198187917, 1107.865865741777],
              normalized_projected_pixel: [
                0.7616244458940282, 0.7868365523734212,
              ],
              camera_coordinates: [
                0.3179544658486577, 0.34151426502908117, 0.47273490173561705,
              ],
              frame_index: 6401,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 315.0,
              time_token: "<TIME 00:05:15.0 video 1>",
              projected_pixel: [1259.144564275021, 1077.3253171752417],
              normalized_projected_pixel: [
                0.8942788098544182, 0.765145821857416,
              ],
              camera_coordinates: [
                0.5532975740598882, 0.3663740393361314, 0.4946221832251784,
              ],
              frame_index: 6401,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 316.0,
              time_token: "<TIME 00:05:16.0 video 1>",
              projected_pixel: [1024.3403285436714, 1039.8159606253732],
              normalized_projected_pixel: [
                0.7275144378861302, 0.7385056538532481,
              ],
              camera_coordinates: [
                0.2991319408963422, 0.30621446828547927, 0.5306539780466399,
              ],
              frame_index: 6401,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
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
          "The jar of black pepper was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:03:33.4 video 1>; Point=(0.608, 0.6832)",
          "<TIME 00:03:34.0 video 1>; Point=(0.5703, 0.6654)",
          "<TIME 00:03:35.0 video 1>; Point=(0.5648, 0.6571)",
          "<TIME 00:03:36.0 video 1>; Point=(0.6157, 0.6695)",
        ],
        answer_metadata: {
          last_placement_time_sec: 213.36666666666667,
          last_placement_time_in_clip_sec: 213.36666666666667,
          last_placement_time_token: "<TIME 00:03:33.4 video 1>",
          projected_pixel: [856.0558433435352, 961.9117866637671],
          normalized_projected_pixel: [0.6079942069201244, 0.6831759848464255],
          camera_coordinates: [
            0.14468564156010721, 0.23495695711441011, 0.5576155020708203,
          ],
          frame_index: 6401,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 213.36666666666667,
              time_token: "<TIME 00:03:33.4 video 1>",
              projected_pixel: [856.0558433435352, 961.9117866637671],
              normalized_projected_pixel: [
                0.6079942069201244, 0.6831759848464255,
              ],
              camera_coordinates: [
                0.14468564156010721, 0.23495695711441011, 0.5576155020708203,
              ],
              frame_index: 6401,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 214.0,
              time_token: "<TIME 00:03:34.0 video 1>",
              projected_pixel: [802.9633769860352, 936.9357608723385],
              normalized_projected_pixel: [
                0.5702864893366727, 0.6654373301650132,
              ],
              camera_coordinates: [
                0.09343915565793193, 0.20668863546276514, 0.547197587945873,
              ],
              frame_index: 6420,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 215.0,
              time_token: "<TIME 00:03:35.0 video 1>",
              projected_pixel: [795.1836126015035, 925.1334586016668],
              normalized_projected_pixel: [
                0.564761088495386, 0.6570550132114111,
              ],
              camera_coordinates: [
                0.09248809532216917, 0.209797642015682, 0.5861822857021034,
              ],
              frame_index: 6450,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 216.0,
              time_token: "<TIME 00:03:36.0 video 1>",
              projected_pixel: [866.9324765366614, 942.6324711197602],
              normalized_projected_pixel: [
                0.6157190884493334, 0.669483289147557,
              ],
              camera_coordinates: [
                0.16213360189105241, 0.2277130054650547, 0.5855240863065699,
              ],
              frame_index: 6480,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
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
          "At the current time <TIME 00:05:22.0 video 1>, based on the last known position of the jar of black pepper that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area close to the microwave",
          "counter area below the boiler",
          "counter area beside the hob and near the sink",
          "counter area between the fridge and the hob",
          "counter area next to the window",
        ],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 213.36666666666667,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the jar of black pepper that was moved earlier. Using its last known position to infer its current location, in which direction is the jar of black pepper from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 322.0,
            camera_coordinates: [
              0.740981567214575, -0.15942285198957196, 0.4451055218894444,
            ],
            world_coordinates: [
              -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.740981567214575,
              z: 0.4451055218894444,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the jar of black pepper that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan3 (marked in red) in the current frame, where is the jar of black pepper relative to pan3 from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "8b3e8b1921153770",
            object_x_name: "jar of black pepper",
            object_x_reference_time_sec: 322.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.29734781330787297, -2.790503426948314, -0.5413135461386361,
            ],
            object_x_camera_coordinates: [
              0.740981567214575, -0.15942285198957196, 0.4451055218894444,
            ],
            object_y_assoc_id: "181a9557e45e46f6",
            object_y_name: "pan3",
            object_y_reference_time_sec: 322.0,
            object_y_world_coordinates: [
              -0.08076216737530556, -2.264470111404094, -0.4844248067807946,
            ],
            object_y_projected_pixel: [967.9843060807736, 228.70474968122807],
            object_y_normalized_projected_pixel: [
              0.6874888537505495, 0.16243235062587222,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the jar of black pepper that was moved earlier. Using its last known position to infer its current location, and using the current position of the pan3 (marked in red) in the current frame, how far is the jar of black pepper from the pan3: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["close", "far", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "8b3e8b1921153770",
            object_x_name: "jar of black pepper",
            object_x_reference_time_sec: 322.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "181a9557e45e46f6",
            object_y_name: "pan3",
            object_y_pixel: [967.9843060807736, 228.70474968122807],
            object_y_normalized_projected_pixel: [
              0.6874888537505495, 0.16243235062587222,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.4888198701948614, 0.2868663664125556, -0.07496360501025262,
            ],
            distance_m: 0.5717138442894285,
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
  oos_staged_h5p0_29: {
    inputs: {
      "video 1": {
        id: "P01-20240202-161354",
      },
    },
    video_id: "P01-20240202-161354",
    object_a_assoc_id: "eb9e167cc2740d23",
    object_a_name: "salt bottle",
    query_time_sec: 322.0,
    query_time_in_clip_sec: 322.0,
    clip_start_time_sec: 0,
    clip_end_time_sec: 322.0,
    clip_duration_sec: 322.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240202-161354",
      assoc_id: "eb9e167cc2740d23",
      object_name: "salt bottle",
      query_time_sec: 322.0,
      oos_span_start_sec: 317.0,
      oos_span_end_sec: 327.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 0,
      clip_end_time_sec: 322.0,
      clip_duration_sec: 322.0,
      anchor_assoc_id: "5ebec360a68f00c4",
      anchor_name: "strainer",
      anchor_projected_pixel: [1218.789460106082, 468.4946655668373],
      anchor_world_coordinates: [
        -0.22029195688110162, -2.5474176905549566, -0.5941908201859134,
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
          "At the current time <TIME 00:05:22.0 video 1>, is the previously moved salt bottle visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1460.3414118361598, 610.0441841947154],
          camera_coordinates: [
            0.7741654718293853, -0.09709196341383453, 0.401014680892376,
          ],
          frame_index: 8636,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "The salt bottle was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
        choices: [],
        acceptable_answers: [
          "<TIME 00:05:13.0 video 1>; Point=(0.8194, 0.8326)",
          "<TIME 00:05:16.0 video 1>; Point=(0.788, 0.7767)",
        ],
        answer_metadata: {
          sampled_last_visible_time_sec: 316.0,
          sampled_last_visible_time_in_clip_sec: 316.0,
          sampled_last_visible_time_token: "<TIME 00:05:16.0 video 1>",
          projected_pixel: [1109.570548608181, 1093.6200560751813],
          normalized_projected_pixel: [0.7880472646364922, 0.7767187898261231],
          camera_coordinates: [
            0.3516014849431168, 0.33131815930715747, 0.4710967358290361,
          ],
          frame_index: 8636,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 313.0,
              time_token: "<TIME 00:05:13.0 video 1>",
              projected_pixel: [1153.675852917905, 1172.3527788468766],
              normalized_projected_pixel: [
                0.8193720546291939, 0.8326369167946567,
              ],
              camera_coordinates: [
                0.3591223829384722, 0.36775192774239424, 0.4053027053174134,
              ],
              frame_index: 8636,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
              ],
              reference_source:
                "step2_acceptable_answers_from_merged_visibility_track",
            },
            {
              time_sec: 316.0,
              time_token: "<TIME 00:05:16.0 video 1>",
              projected_pixel: [1109.570548608181, 1093.6200560751813],
              normalized_projected_pixel: [
                0.7880472646364922, 0.7767187898261231,
              ],
              camera_coordinates: [
                0.3516014849431168, 0.33131815930715747, 0.4710967358290361,
              ],
              frame_index: 8636,
              status: "in_view",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
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
          "<TIME 00:04:47.9 video 1>; Point=(0.911, 0.7777)",
          "<TIME 00:04:48.0 video 1>; Point=(0.9229, 0.7851)",
          "<TIME 00:04:49.0 video 1>; Point=(0.9849, 0.692)",
          "<TIME 00:04:50.0 video 1>; Point=(0.9558, 0.733)",
        ],
        answer_metadata: {
          last_placement_time_sec: 287.8666666666667,
          last_placement_time_in_clip_sec: 287.8666666666667,
          last_placement_time_token: "<TIME 00:04:47.9 video 1>",
          projected_pixel: [1282.7460222032837, 1094.9617968207149],
          normalized_projected_pixel: [0.9110412089511958, 0.7776717306965305],
          camera_coordinates: [
            0.5077735807333181, 0.3380161975608828, 0.41547825377580216,
          ],
          frame_index: 8636,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
          ],
          acceptable_answer_metadata: [
            {
              time_sec: 287.8666666666667,
              time_token: "<TIME 00:04:47.9 video 1>",
              projected_pixel: [1282.7460222032837, 1094.9617968207149],
              normalized_projected_pixel: [
                0.9110412089511958, 0.7776717306965305,
              ],
              camera_coordinates: [
                0.5077735807333181, 0.3380161975608828, 0.41547825377580216,
              ],
              frame_index: 8636,
              status: "last_past_track_end",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
              ],
              reference_source:
                "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
            },
            {
              time_sec: 288.0,
              time_token: "<TIME 00:04:48.0 video 1>",
              projected_pixel: [1299.4504370438324, 1105.4402259219369],
              normalized_projected_pixel: [
                0.9229051399459037, 0.7851137968195574,
              ],
              camera_coordinates: [
                0.5251635995544044, 0.3490654003060416, 0.39987604894676754,
              ],
              frame_index: 8640,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 289.0,
              time_token: "<TIME 00:04:49.0 video 1>",
              projected_pixel: [1386.692429364823, 974.389621377054],
              normalized_projected_pixel: [
                0.9848667822193345, 0.692038083364385,
              ],
              camera_coordinates: [
                0.6558474874555085, 0.2559100472569711, 0.4153152065696678,
              ],
              frame_index: 8670,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
              ],
              reference_source:
                "step3_acceptable_answers_projected_after_raw_track_end",
            },
            {
              time_sec: 290.0,
              time_token: "<TIME 00:04:50.0 video 1>",
              projected_pixel: [1345.7198516945195, 1032.0183099828973],
              normalized_projected_pixel: [
                0.9557669401239486, 0.7329675497037623,
              ],
              camera_coordinates: [
                0.6075468130126436, 0.30609707364820543, 0.4262568021207946,
              ],
              frame_index: 8700,
              status: "step3_future_projection_from_raw_placement_world_point",
              fixture: "P01_counter.002",
              world_coordinates: [
                -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
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
          "At the current time <TIME 00:05:22.0 video 1>, based on the last known position of the salt bottle that was moved earlier, which counter area is closest to it?",
        choices: [
          "counter area next to the window",
          "counter area below the boiler",
          "counter area between the fridge and the hob",
          "counter area close to the microwave",
          "counter area beside the hob and near the sink",
        ],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 287.8666666666667,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the salt bottle that was moved earlier. Using its last known position to infer its current location, in which direction is the salt bottle from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 322.0,
            camera_coordinates: [
              0.7741654718293853, -0.09709196341383453, 0.401014680892376,
            ],
            world_coordinates: [
              -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.7741654718293853,
              z: 0.401014680892376,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the salt bottle that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, where is the salt bottle relative to strainer from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "eb9e167cc2740d23",
            object_x_name: "salt bottle",
            object_x_reference_time_sec: 322.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.36849102774107234, -2.8331127472406004, -0.5340058570171834,
            ],
            object_x_camera_coordinates: [
              0.7741654718293853, -0.09709196341383453, 0.401014680892376,
            ],
            object_y_assoc_id: "5ebec360a68f00c4",
            object_y_name: "strainer",
            object_y_reference_time_sec: 322.0,
            object_y_world_coordinates: [
              -0.22029195688110162, -2.5474176905549566, -0.5941908201859134,
            ],
            object_y_projected_pixel: [1218.789460106082, 468.4946655668373],
            object_y_normalized_projected_pixel: [
              0.8656175142798879, 0.33273768861281056,
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
            "At the current time <TIME 00:05:22.0 video 1>, consider the salt bottle that was moved earlier. Using its last known position to infer its current location, and using the current position of the strainer (marked in red) in the current frame, how far is the salt bottle from the strainer: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
          choices: ["medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "eb9e167cc2740d23",
            object_x_name: "salt bottle",
            object_x_reference_time_sec: 322.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "5ebec360a68f00c4",
            object_y_name: "strainer",
            object_y_pixel: [1218.789460106082, 468.4946655668373],
            object_y_normalized_projected_pixel: [
              0.8656175142798879, 0.33273768861281056,
            ],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.2665394663815892, 0.1345371141672398, -0.1343999166017676,
            ],
            distance_m: 0.3274245864470066,
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
  id: "P01-20240202-161354",
  label: "P01-20240202-161354",
  sampledUrl: "https://youtu.be/o86ELADbUsE",
  fullUrl: "https://youtu.be/5DvV0QiO0g4",
  duration: 220,
  trajectory: TRAJECTORY,
  rawJson: { TRAJECTORY },
};

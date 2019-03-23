console.log('striting scripts');
var vidFileNames; //container array to hold the playlist items
var vidElement;// the <video> element that represinting player
window.onload=init;
var curPos=0;//point to the current postition index 



function init(){
 // initializing the 
 vidElement= document.getElementById('videoPlayer');
 // detecting the end of video:
vidElement.addEventListener('ended',nextVideo);
vidFileNames=[
  "6279459_her_name_is_alex.mp4",
  "11162882_creampie_then_cleanup.mp4",
  "4233562_she_finishes_it_off_7_cum_in_mouth_compilation.mp4",
  "xvideos.com_e9a4242bfeeb469e3375912bc97105fa.mp4",
  "xvideos.com_866f537965316abfecb1c9b235cead2c.mp4",
  "2483209_french_brunette_sodomized_in_threesome_with_papy_voyeur.mp4",
  "7094569_cum_in_mouth_oral_creampie_compilation.mp4",
  "xvideos.com_996f1716f69e4f158b64f814fdf40de3-2.mp4",
  "1627957_skinny_teen_girl_takes_huge_cock_in_all_her_holes.mp4",
  "xhamster.com_9520029_amazing_wife_loves_sucking_husbands_cock_240p.mp4",
  "5040401_mouth_creampies_the_ultimate_compilation_3.mp4",
  "11153429_big_tits_german_susi_fuck_young_guy_big_cock_stockings.mp4",
  "xhamster.com_8127266_amazing_bubble_butt_creampie_240p.mp4",
  "xhamster.com_7236284_mlml_s_amazing_teen_pie_240p.mp4",
  "6363339_the_ultimate_cum_slut_compilation.mp4",
  "xvideos.com_7d74945d18018a929d9c417ebcd8f29b.mp4",
  "xvideos.com_99b43c620501dc04a708f9d4b86a9372 (1).mp4",
  "xvideos.com_99b43c620501dc04a708f9d4b86a9372.mp4",
  "2384816_amateur_french_couple_doing_hard_anal_sex.mp4",
  "xvideos.com_a9616fe83c00211fc0370f571b31495f.mp4",
  "xhamster.com_9788693_best_gf_receives_that_cum_on_her_face_240p.mp4",
  "xvideos.com_f6a276dd92723a8acb73c2b2d7c5359f.mp4",
  "5154856_a_wife_with_a_oral_fixation_compilation.mp4",
  "xhamster.com_7316945_anal_teen_240p.mp4",
  "xvideos.com_2bad8e6af4527e192ffad6956ae34326.mp4",
  "xvideos.com_1bec98886b97912b6e3189cd8c6fc269-1.mp4",
  "2416724_amateur_french_couple_in_3some_anal_fucking_with_papy_voyeur.mp4",
  "5280699_cum_in_mouth_oral_creampie_compilation_ch2.mp4",
  "2697117_ce_couple_amateur_francais_adore_la_sodo.mp4",
  "xhamster.com_6145984_amazing_blowjob_240p.mp4",
  "xhamster.com_9564417_huge_facial_on_hot_gf_240p.mp4",
  "3039980_she_finishes_it_off_cum_in_mouth_compilation.mp4",
  "2384820_french_slut_in_fishnet_stockings_analized.mp4",
  "xvideos.com_bbe491f883e7e275be98f5f7cb05c0db.mp4"
  ];

}


function play(){
 console.log('play button');
 vidElement.play();
}
function nextVideo(){

 console.log('nextVideo()');
 //TODO: check if CurPos reaching the last index (>= vidFileNames.length) and if so, reset to 0 index...
 curPos=curPos+1;
 // change video src attribute to next item 
 vidElement.src=vidFileNames[curPos];
 vidElement.play();

}
function prevVideo(){
 console.log('prevVideo()');
 curPos=curPos-1;
 vidElement.src=vidFileNames[curPos];
 vidElement.play();
}
function forward10Sec(){
 console.log('forward10Sec');
}
function backward10Sec(){
 console.log('forward10sec');
}
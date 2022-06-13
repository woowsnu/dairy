package com.diary.back.service;

import com.diary.back.model.Emotion;
import com.diary.back.repository.EmotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmotionServiceImpl implements EmotionService {

    @Autowired
    private EmotionRepository repository;

//    @Override
//    public List<Emotion> findAll(){
//        return repository.findAll();
//    }

    @Override
    public List<Emotion> findAll(){
        List<Emotion> emotion = new ArrayList<>();
        repository.findAll().forEach(e -> emotion.add(e));
        return emotion;
    }

    @Override
    public Optional<Emotion> findbycatid(Long emotion_cat_id) {
        Optional<Emotion> emotionn = repository.findById(emotion_cat_id);
        return emotionn;
    }

//    public Optional<Emotion> find

//    public Optional<Emotion> search()
//
//    public List<Emotion> search(Emotion emotion) {
//        Emotion emotiontwo = repository.findBy(emotion_cat_id);
//    }

//            --------------------------------------------
//    @Override
//    public List<Emotion> searchBycatid(Emotion emotion){
//
//
//
//
//        final Optional<Emotion> foundEmotion = repository.findById(emotion.getEmotion_cat_id());
//
//        foundEmotion.ifPresent(newEmotion -> {
//            newEmotion.setEmotion_word_id(emotion.getEmotion_word_id());
//            newEmotion.setEmotion_cat_average(emotion.getEmotion_cat_average());
//            newEmotion.setEmotion_cat_frequency(emotion.getEmotion_cat_frequency());
//            newEmotion.setEmotion_cat_sd(emotion.getEmotion_cat_sd());
//            newEmotion.setEmotion_word(emotion.getEmotion_word());
//            newEmotion.setEmotion_cat_id(emotion.getEmotion_cat_id());
//
//            repository.save(newEmotion);
//        });
//
//        return repository.findAll();
//        ----------------------------------------------------
////    final Optional<Emotion> foundEmotion = repository.findById(emotion.getEmotion_cat_id());
//    Optional<Emotion> searchEmotion = Optional.of(repository.getReferenceById(emotion.getEmotion_cat_id()));
////        Optional<Emotion> searchEmotion = repository.getReferenceById(emotion.emotion_word_i);
//        Optional<Long> newSearchEmotion = searchEmotion.filter()
//
//    newSearchEmotion.ifPresent(twoSearchEmotion ->{
//        twoSearchEmotion
//    });}
//
//        return null;
//    }

//
//    @Override
//    public List<Emotion> findEmotion(){
//
//        final Optional<Emotion> foundEmotion = repository.findById(emotion_cat_id);
//            foundEmotion.filter("emotion_cat_id"::equals emotion -> {
//
//
//                return false;
//            });
////            List<Emotion> emotions = Optional.of(foundEmotion).map(List<Emotion> foundEmotion);
////                }
////
////
////        );
//
////            optional타입으로 findbyId에 해당하는 이모션 패키지를 받음. 리스트형식이네 -> optional 타입으로 다형성에 맞춰서 전달이 됨
////            optional 타입을 하나씩 까서
////            list<Emotion> emotion = new emotion.map(emotion)~
//
//        return repository.findById(emotion_cat_id);
//    }
//
//    @Override
//    public Emotion post(Long emotion_cat_id, Emotion emotion) {
//
//        //
//
//
//
//        return null;
//    }
//}
}

package com.team.service;

import java.util.ArrayList;

import com.mangoplate.vo.MangoRestVO;

public interface ListService {

	ArrayList<MangoRestVO> getContent(String rcategory);
}
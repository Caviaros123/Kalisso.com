<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Model_general extends CI_Model {

	public function __construct()
	{
		parent::__construct();
	}
	
	function getRelatedProduct()
	{
		$sql	= "SELECT product_id, product_name, product_price, product_image, product_rating, product_review FROM tbl_product ORDER BY RAND() LIMIT 8";
		$query	= $this->db->query($sql);
		$rs		= $query->result_array();
		
		return $rs;
	}

	function getReview($skip, $limit)
	{
		$sql	= "SELECT review_id, review_name, review_rating, review, review_date FROM tbl_review ORDER BY review_id ASC LIMIT ?, ?";
		$query	= $this->db->query($sql, array($skip, $limit));
		$rs		= $query->result_array();
		
		return $rs;
	}
}
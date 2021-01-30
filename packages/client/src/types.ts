export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Companies" */
export type Companies = {
  __typename?: 'Companies';
  id: Scalars['uuid'];
  name: Scalars['String'];
  rating: Scalars['numeric'];
};

/** aggregated selection of "Companies" */
export type Companies_Aggregate = {
  __typename?: 'Companies_aggregate';
  aggregate?: Maybe<Companies_Aggregate_Fields>;
  nodes: Array<Companies>;
};

/** aggregate fields of "Companies" */
export type Companies_Aggregate_Fields = {
  __typename?: 'Companies_aggregate_fields';
  avg?: Maybe<Companies_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Companies_Max_Fields>;
  min?: Maybe<Companies_Min_Fields>;
  stddev?: Maybe<Companies_Stddev_Fields>;
  stddev_pop?: Maybe<Companies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Companies_Stddev_Samp_Fields>;
  sum?: Maybe<Companies_Sum_Fields>;
  var_pop?: Maybe<Companies_Var_Pop_Fields>;
  var_samp?: Maybe<Companies_Var_Samp_Fields>;
  variance?: Maybe<Companies_Variance_Fields>;
};


/** aggregate fields of "Companies" */
export type Companies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Companies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Companies" */
export type Companies_Aggregate_Order_By = {
  avg?: Maybe<Companies_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Companies_Max_Order_By>;
  min?: Maybe<Companies_Min_Order_By>;
  stddev?: Maybe<Companies_Stddev_Order_By>;
  stddev_pop?: Maybe<Companies_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Companies_Stddev_Samp_Order_By>;
  sum?: Maybe<Companies_Sum_Order_By>;
  var_pop?: Maybe<Companies_Var_Pop_Order_By>;
  var_samp?: Maybe<Companies_Var_Samp_Order_By>;
  variance?: Maybe<Companies_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Companies" */
export type Companies_Arr_Rel_Insert_Input = {
  data: Array<Companies_Insert_Input>;
  on_conflict?: Maybe<Companies_On_Conflict>;
};

/** aggregate avg on columns */
export type Companies_Avg_Fields = {
  __typename?: 'Companies_avg_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Companies" */
export type Companies_Avg_Order_By = {
  rating?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Companies". All fields are combined with a logical 'AND'. */
export type Companies_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Companies_Bool_Exp>>>;
  _not?: Maybe<Companies_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Companies_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  rating?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "Companies" */
export enum Companies_Constraint {
  /** unique or primary key constraint */
  CompaniesPkey = 'Companies_pkey'
}

/** input type for incrementing integer column in table "Companies" */
export type Companies_Inc_Input = {
  rating?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Companies" */
export type Companies_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Companies_Max_Fields = {
  __typename?: 'Companies_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "Companies" */
export type Companies_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Companies_Min_Fields = {
  __typename?: 'Companies_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "Companies" */
export type Companies_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** response of any mutation on the table "Companies" */
export type Companies_Mutation_Response = {
  __typename?: 'Companies_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Companies>;
};

/** input type for inserting object relation for remote table "Companies" */
export type Companies_Obj_Rel_Insert_Input = {
  data: Companies_Insert_Input;
  on_conflict?: Maybe<Companies_On_Conflict>;
};

/** on conflict condition type for table "Companies" */
export type Companies_On_Conflict = {
  constraint: Companies_Constraint;
  update_columns: Array<Companies_Update_Column>;
  where?: Maybe<Companies_Bool_Exp>;
};

/** ordering options when selecting data from "Companies" */
export type Companies_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** primary key columns input for table: "Companies" */
export type Companies_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Companies" */
export enum Companies_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Rating = 'rating'
}

/** input type for updating data in table "Companies" */
export type Companies_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Companies_Stddev_Fields = {
  __typename?: 'Companies_stddev_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Companies" */
export type Companies_Stddev_Order_By = {
  rating?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Companies_Stddev_Pop_Fields = {
  __typename?: 'Companies_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Companies" */
export type Companies_Stddev_Pop_Order_By = {
  rating?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Companies_Stddev_Samp_Fields = {
  __typename?: 'Companies_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Companies" */
export type Companies_Stddev_Samp_Order_By = {
  rating?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Companies_Sum_Fields = {
  __typename?: 'Companies_sum_fields';
  rating?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "Companies" */
export type Companies_Sum_Order_By = {
  rating?: Maybe<Order_By>;
};

/** update columns of table "Companies" */
export enum Companies_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Rating = 'rating'
}

/** aggregate var_pop on columns */
export type Companies_Var_Pop_Fields = {
  __typename?: 'Companies_var_pop_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Companies" */
export type Companies_Var_Pop_Order_By = {
  rating?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Companies_Var_Samp_Fields = {
  __typename?: 'Companies_var_samp_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Companies" */
export type Companies_Var_Samp_Order_By = {
  rating?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Companies_Variance_Fields = {
  __typename?: 'Companies_variance_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Companies" */
export type Companies_Variance_Order_By = {
  rating?: Maybe<Order_By>;
};

/** columns and relationships of "Quotes" */
export type Quotes = {
  __typename?: 'Quotes';
  /** An object relationship */
  Company: Companies;
  company_id: Scalars['uuid'];
  id: Scalars['uuid'];
  monthly: Scalars['numeric'];
  selected: Scalars['Boolean'];
  setup: Scalars['numeric'];
  term: Scalars['numeric'];
  total: Scalars['numeric'];
};

/** aggregated selection of "Quotes" */
export type Quotes_Aggregate = {
  __typename?: 'Quotes_aggregate';
  aggregate?: Maybe<Quotes_Aggregate_Fields>;
  nodes: Array<Quotes>;
};

/** aggregate fields of "Quotes" */
export type Quotes_Aggregate_Fields = {
  __typename?: 'Quotes_aggregate_fields';
  avg?: Maybe<Quotes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Quotes_Max_Fields>;
  min?: Maybe<Quotes_Min_Fields>;
  stddev?: Maybe<Quotes_Stddev_Fields>;
  stddev_pop?: Maybe<Quotes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quotes_Stddev_Samp_Fields>;
  sum?: Maybe<Quotes_Sum_Fields>;
  var_pop?: Maybe<Quotes_Var_Pop_Fields>;
  var_samp?: Maybe<Quotes_Var_Samp_Fields>;
  variance?: Maybe<Quotes_Variance_Fields>;
};


/** aggregate fields of "Quotes" */
export type Quotes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Quotes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Quotes" */
export type Quotes_Aggregate_Order_By = {
  avg?: Maybe<Quotes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Quotes_Max_Order_By>;
  min?: Maybe<Quotes_Min_Order_By>;
  stddev?: Maybe<Quotes_Stddev_Order_By>;
  stddev_pop?: Maybe<Quotes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Quotes_Stddev_Samp_Order_By>;
  sum?: Maybe<Quotes_Sum_Order_By>;
  var_pop?: Maybe<Quotes_Var_Pop_Order_By>;
  var_samp?: Maybe<Quotes_Var_Samp_Order_By>;
  variance?: Maybe<Quotes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Quotes" */
export type Quotes_Arr_Rel_Insert_Input = {
  data: Array<Quotes_Insert_Input>;
  on_conflict?: Maybe<Quotes_On_Conflict>;
};

/** aggregate avg on columns */
export type Quotes_Avg_Fields = {
  __typename?: 'Quotes_avg_fields';
  monthly?: Maybe<Scalars['Float']>;
  setup?: Maybe<Scalars['Float']>;
  term?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Quotes" */
export type Quotes_Avg_Order_By = {
  monthly?: Maybe<Order_By>;
  setup?: Maybe<Order_By>;
  term?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Quotes". All fields are combined with a logical 'AND'. */
export type Quotes_Bool_Exp = {
  Company?: Maybe<Companies_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Quotes_Bool_Exp>>>;
  _not?: Maybe<Quotes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Quotes_Bool_Exp>>>;
  company_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  monthly?: Maybe<Numeric_Comparison_Exp>;
  selected?: Maybe<Boolean_Comparison_Exp>;
  setup?: Maybe<Numeric_Comparison_Exp>;
  term?: Maybe<Numeric_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "Quotes" */
export enum Quotes_Constraint {
  /** unique or primary key constraint */
  QuotesPkey = 'Quotes_pkey'
}

/** input type for incrementing integer column in table "Quotes" */
export type Quotes_Inc_Input = {
  monthly?: Maybe<Scalars['numeric']>;
  setup?: Maybe<Scalars['numeric']>;
  term?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Quotes" */
export type Quotes_Insert_Input = {
  Company?: Maybe<Companies_Obj_Rel_Insert_Input>;
  company_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  monthly?: Maybe<Scalars['numeric']>;
  selected?: Maybe<Scalars['Boolean']>;
  setup?: Maybe<Scalars['numeric']>;
  term?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Quotes_Max_Fields = {
  __typename?: 'Quotes_max_fields';
  company_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  monthly?: Maybe<Scalars['numeric']>;
  setup?: Maybe<Scalars['numeric']>;
  term?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "Quotes" */
export type Quotes_Max_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  monthly?: Maybe<Order_By>;
  setup?: Maybe<Order_By>;
  term?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Quotes_Min_Fields = {
  __typename?: 'Quotes_min_fields';
  company_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  monthly?: Maybe<Scalars['numeric']>;
  setup?: Maybe<Scalars['numeric']>;
  term?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "Quotes" */
export type Quotes_Min_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  monthly?: Maybe<Order_By>;
  setup?: Maybe<Order_By>;
  term?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** response of any mutation on the table "Quotes" */
export type Quotes_Mutation_Response = {
  __typename?: 'Quotes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Quotes>;
};

/** input type for inserting object relation for remote table "Quotes" */
export type Quotes_Obj_Rel_Insert_Input = {
  data: Quotes_Insert_Input;
  on_conflict?: Maybe<Quotes_On_Conflict>;
};

/** on conflict condition type for table "Quotes" */
export type Quotes_On_Conflict = {
  constraint: Quotes_Constraint;
  update_columns: Array<Quotes_Update_Column>;
  where?: Maybe<Quotes_Bool_Exp>;
};

/** ordering options when selecting data from "Quotes" */
export type Quotes_Order_By = {
  Company?: Maybe<Companies_Order_By>;
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  monthly?: Maybe<Order_By>;
  selected?: Maybe<Order_By>;
  setup?: Maybe<Order_By>;
  term?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** primary key columns input for table: "Quotes" */
export type Quotes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Quotes" */
export enum Quotes_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Id = 'id',
  /** column name */
  Monthly = 'monthly',
  /** column name */
  Selected = 'selected',
  /** column name */
  Setup = 'setup',
  /** column name */
  Term = 'term',
  /** column name */
  Total = 'total'
}

/** input type for updating data in table "Quotes" */
export type Quotes_Set_Input = {
  company_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  monthly?: Maybe<Scalars['numeric']>;
  selected?: Maybe<Scalars['Boolean']>;
  setup?: Maybe<Scalars['numeric']>;
  term?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Quotes_Stddev_Fields = {
  __typename?: 'Quotes_stddev_fields';
  monthly?: Maybe<Scalars['Float']>;
  setup?: Maybe<Scalars['Float']>;
  term?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Quotes" */
export type Quotes_Stddev_Order_By = {
  monthly?: Maybe<Order_By>;
  setup?: Maybe<Order_By>;
  term?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Quotes_Stddev_Pop_Fields = {
  __typename?: 'Quotes_stddev_pop_fields';
  monthly?: Maybe<Scalars['Float']>;
  setup?: Maybe<Scalars['Float']>;
  term?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Quotes" */
export type Quotes_Stddev_Pop_Order_By = {
  monthly?: Maybe<Order_By>;
  setup?: Maybe<Order_By>;
  term?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Quotes_Stddev_Samp_Fields = {
  __typename?: 'Quotes_stddev_samp_fields';
  monthly?: Maybe<Scalars['Float']>;
  setup?: Maybe<Scalars['Float']>;
  term?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Quotes" */
export type Quotes_Stddev_Samp_Order_By = {
  monthly?: Maybe<Order_By>;
  setup?: Maybe<Order_By>;
  term?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Quotes_Sum_Fields = {
  __typename?: 'Quotes_sum_fields';
  monthly?: Maybe<Scalars['numeric']>;
  setup?: Maybe<Scalars['numeric']>;
  term?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "Quotes" */
export type Quotes_Sum_Order_By = {
  monthly?: Maybe<Order_By>;
  setup?: Maybe<Order_By>;
  term?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** update columns of table "Quotes" */
export enum Quotes_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Id = 'id',
  /** column name */
  Monthly = 'monthly',
  /** column name */
  Selected = 'selected',
  /** column name */
  Setup = 'setup',
  /** column name */
  Term = 'term',
  /** column name */
  Total = 'total'
}

/** aggregate var_pop on columns */
export type Quotes_Var_Pop_Fields = {
  __typename?: 'Quotes_var_pop_fields';
  monthly?: Maybe<Scalars['Float']>;
  setup?: Maybe<Scalars['Float']>;
  term?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Quotes" */
export type Quotes_Var_Pop_Order_By = {
  monthly?: Maybe<Order_By>;
  setup?: Maybe<Order_By>;
  term?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Quotes_Var_Samp_Fields = {
  __typename?: 'Quotes_var_samp_fields';
  monthly?: Maybe<Scalars['Float']>;
  setup?: Maybe<Scalars['Float']>;
  term?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Quotes" */
export type Quotes_Var_Samp_Order_By = {
  monthly?: Maybe<Order_By>;
  setup?: Maybe<Order_By>;
  term?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Quotes_Variance_Fields = {
  __typename?: 'Quotes_variance_fields';
  monthly?: Maybe<Scalars['Float']>;
  setup?: Maybe<Scalars['Float']>;
  term?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Quotes" */
export type Quotes_Variance_Order_By = {
  monthly?: Maybe<Order_By>;
  setup?: Maybe<Order_By>;
  term?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Companies" */
  delete_Companies?: Maybe<Companies_Mutation_Response>;
  /** delete single row from the table: "Companies" */
  delete_Companies_by_pk?: Maybe<Companies>;
  /** delete data from the table: "Quotes" */
  delete_Quotes?: Maybe<Quotes_Mutation_Response>;
  /** delete single row from the table: "Quotes" */
  delete_Quotes_by_pk?: Maybe<Quotes>;
  /** insert data into the table: "Companies" */
  insert_Companies?: Maybe<Companies_Mutation_Response>;
  /** insert a single row into the table: "Companies" */
  insert_Companies_one?: Maybe<Companies>;
  /** insert data into the table: "Quotes" */
  insert_Quotes?: Maybe<Quotes_Mutation_Response>;
  /** insert a single row into the table: "Quotes" */
  insert_Quotes_one?: Maybe<Quotes>;
  /** update data of the table: "Companies" */
  update_Companies?: Maybe<Companies_Mutation_Response>;
  /** update single row of the table: "Companies" */
  update_Companies_by_pk?: Maybe<Companies>;
  /** update data of the table: "Quotes" */
  update_Quotes?: Maybe<Quotes_Mutation_Response>;
  /** update single row of the table: "Quotes" */
  update_Quotes_by_pk?: Maybe<Quotes>;
};


/** mutation root */
export type Mutation_RootDelete_CompaniesArgs = {
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Companies_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_QuotesArgs = {
  where: Quotes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quotes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_CompaniesArgs = {
  objects: Array<Companies_Insert_Input>;
  on_conflict?: Maybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Companies_OneArgs = {
  object: Companies_Insert_Input;
  on_conflict?: Maybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuotesArgs = {
  objects: Array<Quotes_Insert_Input>;
  on_conflict?: Maybe<Quotes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quotes_OneArgs = {
  object: Quotes_Insert_Input;
  on_conflict?: Maybe<Quotes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CompaniesArgs = {
  _inc?: Maybe<Companies_Inc_Input>;
  _set?: Maybe<Companies_Set_Input>;
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Companies_By_PkArgs = {
  _inc?: Maybe<Companies_Inc_Input>;
  _set?: Maybe<Companies_Set_Input>;
  pk_columns: Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuotesArgs = {
  _inc?: Maybe<Quotes_Inc_Input>;
  _set?: Maybe<Quotes_Set_Input>;
  where: Quotes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quotes_By_PkArgs = {
  _inc?: Maybe<Quotes_Inc_Input>;
  _set?: Maybe<Quotes_Set_Input>;
  pk_columns: Quotes_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Companies" */
  Companies: Array<Companies>;
  /** fetch aggregated fields from the table: "Companies" */
  Companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "Companies" using primary key columns */
  Companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "Quotes" */
  Quotes: Array<Quotes>;
  /** fetch aggregated fields from the table: "Quotes" */
  Quotes_aggregate: Quotes_Aggregate;
  /** fetch data from the table: "Quotes" using primary key columns */
  Quotes_by_pk?: Maybe<Quotes>;
};


/** query root */
export type Query_RootCompaniesArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


/** query root */
export type Query_RootCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


/** query root */
export type Query_RootCompanies_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootQuotesArgs = {
  distinct_on?: Maybe<Array<Quotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quotes_Order_By>>;
  where?: Maybe<Quotes_Bool_Exp>;
};


/** query root */
export type Query_RootQuotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Quotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quotes_Order_By>>;
  where?: Maybe<Quotes_Bool_Exp>;
};


/** query root */
export type Query_RootQuotes_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Companies" */
  Companies: Array<Companies>;
  /** fetch aggregated fields from the table: "Companies" */
  Companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "Companies" using primary key columns */
  Companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "Quotes" */
  Quotes: Array<Quotes>;
  /** fetch aggregated fields from the table: "Quotes" */
  Quotes_aggregate: Quotes_Aggregate;
  /** fetch data from the table: "Quotes" using primary key columns */
  Quotes_by_pk?: Maybe<Quotes>;
};


/** subscription root */
export type Subscription_RootCompaniesArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCompanies_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuotesArgs = {
  distinct_on?: Maybe<Array<Quotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quotes_Order_By>>;
  where?: Maybe<Quotes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Quotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quotes_Order_By>>;
  where?: Maybe<Quotes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuotes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

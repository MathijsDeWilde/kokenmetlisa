export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
	public: {
		Tables: {
			categories: {
				Row: {
					created_at: string;
					id: string;
					Name: string;
					ParentCategory: string | null;
				};
				Insert: {
					created_at?: string;
					id?: string;
					Name: string;
					ParentCategory?: string | null;
				};
				Update: {
					created_at?: string;
					id?: string;
					Name?: string;
					ParentCategory?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'Categories_ParentCategory_fkey';
						columns: ['ParentCategory'];
						isOneToOne: false;
						referencedRelation: 'categories';
						referencedColumns: ['id'];
					}
				];
			};
			dishCategories: {
				Row: {
					category: string;
					dish: string;
				};
				Insert: {
					category: string;
					dish: string;
				};
				Update: {
					category?: string;
					dish?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'DishCategories_categoryId_fkey';
						columns: ['category'];
						isOneToOne: false;
						referencedRelation: 'categories';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'DishCategories_dishId_fkey';
						columns: ['dish'];
						isOneToOne: false;
						referencedRelation: 'dishes';
						referencedColumns: ['id'];
					}
				];
			};
			dishes: {
				Row: {
					created_at: string;
					description: string | null;
					hint: string | null;
					id: string;
					name: string;
				};
				Insert: {
					created_at?: string;
					description?: string | null;
					hint?: string | null;
					id?: string;
					name: string;
				};
				Update: {
					created_at?: string;
					description?: string | null;
					hint?: string | null;
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
			dishIngredients: {
				Row: {
					dish: string;
					ingredient: string;
					quantity: string;
				};
				Insert: {
					dish: string;
					ingredient: string;
					quantity: string;
				};
				Update: {
					dish?: string;
					ingredient?: string;
					quantity?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'DishIngredients_dishId_fkey';
						columns: ['dish'];
						isOneToOne: false;
						referencedRelation: 'dishes';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'DishIngredients_ingredientId_fkey';
						columns: ['ingredient'];
						isOneToOne: false;
						referencedRelation: 'ingredients';
						referencedColumns: ['id'];
					}
				];
			};
			dishTypes: {
				Row: {
					created_at: string;
					dish: string;
					type: string;
				};
				Insert: {
					created_at?: string;
					dish: string;
					type: string;
				};
				Update: {
					created_at?: string;
					dish?: string;
					type?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'DishTypes_dish_fkey';
						columns: ['dish'];
						isOneToOne: false;
						referencedRelation: 'dishes';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'DishTypes_type_fkey';
						columns: ['type'];
						isOneToOne: false;
						referencedRelation: 'types';
						referencedColumns: ['id'];
					}
				];
			};
			ingredients: {
				Row: {
					created_at: string;
					id: string;
					name: string;
				};
				Insert: {
					created_at?: string;
					id?: string;
					name: string;
				};
				Update: {
					created_at?: string;
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
			preparationStep: {
				Row: {
					created_at: string;
					dish: string;
					Explanation: string;
					id: string;
					Step: number;
				};
				Insert: {
					created_at?: string;
					dish: string;
					Explanation: string;
					id?: string;
					Step?: number;
				};
				Update: {
					created_at?: string;
					dish?: string;
					Explanation?: string;
					id?: string;
					Step?: number;
				};
				Relationships: [
					{
						foreignKeyName: 'PreparationStep_dish_fkey';
						columns: ['dish'];
						isOneToOne: false;
						referencedRelation: 'dishes';
						referencedColumns: ['id'];
					}
				];
			};
			types: {
				Row: {
					created_at: string;
					id: string;
					name: string;
				};
				Insert: {
					created_at?: string;
					id?: string;
					name: string;
				};
				Update: {
					created_at?: string;
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (PublicSchema['Tables'] & PublicSchema['Views'])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
				Database[PublicTableNameOrOptions['schema']]['Views'])
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
			Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
		? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema['Tables']
		? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema['Tables']
		? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
		: never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
		? PublicSchema['Enums'][PublicEnumNameOrOptions]
		: never;

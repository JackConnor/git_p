class CreateAnswersTable < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :body, :text
      t.references :question, index: true, foreign_key: true
      t.timestamps null:false
    end
  end
end

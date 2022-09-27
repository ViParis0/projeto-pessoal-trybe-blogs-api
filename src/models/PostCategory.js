module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    });

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, { 
            through: PostCategory,
            foreignKey: 'categoryId', 
            as: 'posts',
            otherKey: 'postId',
        })

        models.BlogPost.belongsToMany(models.Category, { 
            through: PostCategory,
            foreignKey: 'postId', 
            as: 'categories',
            otherKey: 'categoryId',
        })
        }
  
    return PostCategory;
  };
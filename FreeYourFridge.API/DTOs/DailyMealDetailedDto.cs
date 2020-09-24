﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FreeYourFridge.API.Models;

namespace FreeYourFridge.API.DTOs
{
    public class DailyMealDetailedDto:DailyMealBasicDto
    {
        public int ReadyInMinute { get; set; }
        public ICollection<Nutrition> Nutritions { get; set; }
        public ICollection<Instruction> Instructions { get; set; }
        public ICollection<ExternalUsedIngredientDto> ExternalUsedIngredients { get; set; }
        public int Calories { get; set; }
        public int Carbs { get; set; }
        public int Fat { get; set; }
        public int Protein { get; set; }
        public string? UserRemarks { get; set; }
    }
}

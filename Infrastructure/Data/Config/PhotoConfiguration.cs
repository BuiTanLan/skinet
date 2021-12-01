﻿using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config;

public class PhotoConfiguration : IEntityTypeConfiguration<Photo>
{

    public void Configure(EntityTypeBuilder<Photo> builder)
    {
        builder.HasOne(t => t.Product).WithMany()
           .HasForeignKey(p => p.ProductId)
           .OnDelete(DeleteBehavior.Cascade);


    }
}

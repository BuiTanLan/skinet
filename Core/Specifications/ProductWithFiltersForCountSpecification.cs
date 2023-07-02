using Core.Entities;

namespace Core.Specifications;

public class ProductWithFiltersForCountSpecification(ProductSpecParams productParams) : BaseSpecification<Product>(x =>
    (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains
        (productParams.Search)) &&
    (productParams.BrandName == "all" || x.ProductBrand.Name.ToLower() == productParams.BrandName) &&
    (productParams.TypeName == "all" || x.ProductType.Name.ToLower() == productParams.TypeName));

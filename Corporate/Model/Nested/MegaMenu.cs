//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder.Embedded v10.8.8+d60137e
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Linq.Expressions;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PublishedCache;
using Umbraco.Cms.Infrastructure.ModelsBuilder;
using Umbraco.Cms.Core;
using Umbraco.Extensions;

namespace Umbraco.Cms.Web.Common.PublishedModels
{
    /// <summary>Mega Menu</summary>
    [PublishedModel("megaMenu")]
    public partial class MegaMenu : PublishedElementModel
    {
        // helpers
#pragma warning disable 0109 // new is redundant
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.8.8+d60137e")]
        public new const string ModelTypeAlias = "megaMenu";
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.8.8+d60137e")]
        public new const PublishedItemType ModelItemType = PublishedItemType.Content;
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.8.8+d60137e")]
        [return: global::System.Diagnostics.CodeAnalysis.MaybeNull]
        public new static IPublishedContentType GetModelContentType(IPublishedSnapshotAccessor publishedSnapshotAccessor)
            => PublishedModelUtility.GetModelContentType(publishedSnapshotAccessor, ModelItemType, ModelTypeAlias);
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.8.8+d60137e")]
        [return: global::System.Diagnostics.CodeAnalysis.MaybeNull]
        public static IPublishedPropertyType GetModelPropertyType<TValue>(IPublishedSnapshotAccessor publishedSnapshotAccessor, Expression<Func<MegaMenu, TValue>> selector)
            => PublishedModelUtility.GetModelPropertyType(GetModelContentType(publishedSnapshotAccessor), selector);
#pragma warning restore 0109

        private IPublishedValueFallback _publishedValueFallback;

        // ctor
        public MegaMenu(IPublishedElement content, IPublishedValueFallback publishedValueFallback)
            : base(content, publishedValueFallback)
        {
            _publishedValueFallback = publishedValueFallback;
        }

        // properties

        ///<summary>
        /// Nav Menu
        ///</summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.8.8+d60137e")]
        [global::System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("navMenu")]
        public virtual global::Umbraco.Cms.Core.Models.Link NavMenu => this.Value<global::Umbraco.Cms.Core.Models.Link>(_publishedValueFallback, "navMenu");
    }
}

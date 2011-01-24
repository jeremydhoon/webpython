from django.conf.urls.defaults import *

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

from django.conf import settings
import compilepython.views

urlpatterns = patterns(
    '',
    (r'^$', compilepython.views.redirect_to_session),
    (r'^(?P<sSessionId>\w+)$', compilepython.views.session),
    (r'^(?P<sSessionId>\w+)/compile/?$', compilepython.views.compile_python),
    (r'static/(?P<path>.*)$', 'django.views.static.serve', {
        'document_root': settings.STATIC_ROOT})
                                                            
    # Example:
    # (r'^webpython/', include('webpython.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # (r'^admin/', include(admin.site.urls)),
)

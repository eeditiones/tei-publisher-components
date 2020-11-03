# Feature: DOI registration with TEI-Publisher

[DOI](https://doi.org) is an ISO Standard for the 
 _'for the registration and use of persistent interoperable identifiers'_ 


## Feature Description

This feature will allow to optionally create a DOI for each document
uploaded to TEI-Publisher if not already present.

## Client side extensions

Goal is to extend `<pb-upload>` to allow plugging of an additional
static `<pb-select>` to specify the 'availability' value for the uploaded
resource(s).

'Availability' is an required field of the DOI metadata set and cannot
be inferred from the uploaded TEI document.

## Current limitations

For the purpose of a first-time implementation the 
mapping of TEI-elements to the DOI `<resource>` document will be 
very basic and cover just a bit more than the part required by the 
DOI Schema. 

However users can always update (and enrich) those metadata by using the 
DOI API provided by this feature.  

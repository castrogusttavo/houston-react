import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NewReleasesIcon({
  iconName = 'new-releases',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

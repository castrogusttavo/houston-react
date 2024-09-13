import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BodyPartLegIcon({
  iconName = 'body-part-leg',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

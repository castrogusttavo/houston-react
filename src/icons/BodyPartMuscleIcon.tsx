import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BodyPartMuscleIcon({
  iconName = 'body-part-muscle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

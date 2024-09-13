import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BodyPartSixPackIcon({
  iconName = 'body-part-six-pack',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

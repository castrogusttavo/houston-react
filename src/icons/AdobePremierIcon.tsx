import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AdobePremierIcon({
  iconName = 'adobe-premier',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

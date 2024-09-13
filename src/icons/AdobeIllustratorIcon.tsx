import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AdobeIllustratorIcon({
  iconName = 'adobe-illustrator',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
